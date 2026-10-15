const fs = require('fs');
const path = require('path');
const config = require('../package.json').reactSnap;
const candidates = [process.env.PRERENDER_BROWSER, process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, 'Google/Chrome/Application/chrome.exe'), process.env['PROGRAMFILES(X86)'] && path.join(process.env['PROGRAMFILES(X86)'], 'Microsoft/Edge/Application/msedge.exe')].filter(Boolean);
const executable = candidates.find(file => fs.existsSync(file)) || require('prerender-browser').executablePath();
if (!fs.existsSync(executable)) throw new Error('Prerender browser missing. Run npx puppeteer browsers install chrome or set PRERENDER_BROWSER.');
require('react-snap').run({...config, ...(executable ? {puppeteerExecutablePath: executable} : {})}).catch(error => { console.error(error); process.exitCode = 1; });
