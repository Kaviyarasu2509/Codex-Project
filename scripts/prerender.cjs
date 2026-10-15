const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');

const root = path.resolve(__dirname, '../build');
const { include: routes } = require('../package.json').reactSnap;
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const mime = { '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
let server;
let browser;

async function run() {
  // Bind only to loopback and serve an immutable template for every route.
  server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!path.extname(pathname)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(template);
    }
    const file = path.resolve(root, '.' + pathname);
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const origin = `http://127.0.0.1:${server.address().port}`;
  const localCandidates = [process.env.PRERENDER_BROWSER,
    process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, 'Google/Chrome/Application/chrome.exe'),
    process.env['PROGRAMFILES(X86)'] && path.join(process.env['PROGRAMFILES(X86)'], 'Microsoft/Edge/Application/msedge.exe')].filter(Boolean);
  let executablePath = localCandidates.find(file => fs.existsSync(file));
  let args = [];
  let headless = true;
  if (!executablePath && process.platform === 'linux') {
    const chromium = require('@sparticuz/chromium');
    executablePath = await chromium.executablePath();
    args = chromium.args;
    headless = 'shell';
  }
  if (!executablePath) throw new Error('Set PRERENDER_BROWSER to your installed Chrome executable.');
  console.log(`[prerender] Starting ${process.platform} browser (30s launch limit)`);
  browser = await puppeteer.launch({ executablePath, args, headless, timeout: 30000 });
  const rendered = [];
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      await page.setUserAgent('ReactSnap');
      await page.setViewport({ width: 1280, height: 900 });
      const errors = [];
      page.on('pageerror', error => { errors.push(error.message); console.error('[pageerror]', route, error.message); });
      page.on('requestfailed', request => { if (request.url().startsWith(origin)) console.error('[requestfailed]', request.url(), request.failure()); });
      page.on('response', response => { if (response.status() >= 400 && response.url().startsWith(origin)) console.error('[http]',response.status(),response.url()); });
      page.setDefaultTimeout(15000);
      await page.goto(origin + route, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForFunction(expected => {
        return document.querySelector('#root h1') &&
          document.querySelector('link[rel="canonical"]')?.href === expected &&
          document.title.length > 0;
      }, { timeout: 15000 }, 'https://www.codexproject.in' + route);
      const result = await page.evaluate(() => ({
        titles: document.head.querySelectorAll('title').length,
        canonicals: document.head.querySelectorAll('link[rel="canonical"]').length,
        headings: document.querySelectorAll('h1').length,
        schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent))
      }));
      if (errors.length) throw new Error(errors.join('; '));
      if (result.titles !== 1 || result.canonicals !== 1 || result.headings !== 1) throw new Error(`Invalid metadata on ${route}: ${JSON.stringify(result)}`);
      rendered.push({ route, html: await page.content() });
      console.log(`[prerender] ${rendered.length}/${routes.length} ${route}: content and metadata verified`);
    } catch (error) {
      console.error("[prerender] Route diagnostics", route, await page.evaluate(() => ({ title: document.title, heading: document.querySelector("h1")?.textContent, canonical: document.querySelector("link[rel=canonical]")?.href, text: document.querySelector("#root")?.textContent?.slice(0, 250) })));
      throw error;
    } finally {
      await page.close();
    }
  }
  // Write only after every page passed, avoiding partially rendered releases.
  for (const { route, html } of rendered) {
    const target = path.join(root, route === '/' ? 'index.html' : route.slice(1) + '/index.html');
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, html);
  }
}

const watchdog = setTimeout(() => {
  console.error('[prerender] Exceeded 3 minute limit; aborting instead of hanging the deployment.');
  browser?.process()?.kill('SIGKILL');
  process.exit(1);
}, 180000);

run().catch(error => {
  console.error('[prerender] Failed:', error.stack || error);
  process.exitCode = 1;
}).finally(async () => {
  try {
    if (browser) await browser.close();
  } finally {
    if (server) {
      server.closeAllConnections();
      await new Promise(resolve => server.close(resolve));
    }
    clearTimeout(watchdog);
  }
});
