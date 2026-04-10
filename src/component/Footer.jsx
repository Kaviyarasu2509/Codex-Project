import React from "react";
import "./Footer.css";

// ─── JSON-LD for Footer ───────────────────────────────────────────────────────
const footerSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CODEX PROJECT – Final Year Project Center",
  "url": "https://www.codexproject.in",
  "logo": "https://www.codexproject.in/logo.png",
  "email": "codexproject2026@gmail.com",
  "telephone": "+918525999002",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 11.0187267, "longitude": 76.9686347 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "20:00" }
  ],
  "sameAs": ["https://wa.me/918525999002", "https://www.codexproject.in"],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Software Projects",
    links: [
      { label: "Python & AI Projects", href: "/services/software-projects" },
      { label: "Machine Learning Projects", href: "/services/software-projects" },
      { label: "MERN Stack Projects", href: "/services/software-projects" },
      { label: "Java & .NET Projects", href: "/services/software-projects" },
      { label: "Flutter & Android Apps", href: "/services/software-projects" },
    ],
  },
  {
    title: "Hardware Projects",
    links: [
      { label: "IoT Projects", href: "/services/iot-projects" },
      { label: "Embedded Projects", href: "/services/embedded-projects" },
      { label: "Arduino Projects", href: "/services/iot-projects" },
      { label: "Raspberry Pi Projects", href: "/services/iot-projects" },
      { label: "Mechanical Projects", href: "/services/mechanical-projects" },
    ],
  },
];

const techKeywords = [
  { label: "AI Projects Coimbatore",         href: "/services/software-projects" },
  { label: "IoT Projects Coimbatore",         href: "/services/iot-projects" },
  { label: "Embedded Projects Coimbatore",    href: "/services/embedded-projects" },
  { label: "Mechanical Projects Coimbatore",  href: "/services/mechanical-projects" },
  { label: "IEEE Projects 2024-25",           href: "/projects" },
  { label: "Internship Coimbatore",           href: "/internship" },
  { label: "Python Projects Coimbatore",      href: "/services/software-projects" },
  { label: "MERN Stack Projects",             href: "/services/software-projects" },
  { label: "Flutter Projects Coimbatore",     href: "/services/software-projects" },
  { label: "Arduino Projects Coimbatore",     href: "/services/iot-projects" },
  { label: "Final Year Projects 2025",        href: "/projects" },
  { label: "Project Center Gandhipuram",      href: "/contact" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="cp-footer" itemScope itemType="https://schema.org/LocalBusiness">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchema) }}
      />
      <meta itemProp="name" content="CODEX PROJECT – Final Year Project Center" />
      <meta itemProp="url" content="https://www.codexproject.in" />

      {/* ── TOP STRIP ─────────────────────────────────────────────────── */}
      <div className="cpf-topstrip">
        <div className="cpf-container">
          <div className="cpf-strip-inner">
            <span className="cpf-strip-label">📍 Gandhipuram, Coimbatore – 641012</span>
            <div className="cpf-strip-divider"></div>
            <a href="tel:+918525999002" className="cpf-strip-link">📞 85259 99002</a>
            <div className="cpf-strip-divider"></div>
            <a href="mailto:codexproject2026@gmail.com" className="cpf-strip-link">📧 codexproject2026@gmail.com</a>
            <div className="cpf-strip-divider"></div>
            <span className="cpf-strip-label">🕘 Mon–Sat: 9AM – 8PM</span>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ───────────────────────────────────────────────── */}
      <div className="cpf-main">
        <div className="cpf-container">
          <div className="cpf-grid">

            {/* Brand column */}
            <div className="cpf-brand-col">
              {/* Logo */}
              <div className="cpf-logo-wrap">
                <img
                  src="/logo.png"
                  alt="CODEX PROJECT – Best Final Year Project Center in Coimbatore"
                  className="cpf-logo"
                  loading="lazy"
                />
              </div>

              <p className="cpf-brand-desc">
                <strong>CODEX PROJECT</strong> is the best final year project center
                in Coimbatore offering IEEE 2024-25 projects, internship training, and
                placement support for BE, ME, BSc, MCA &amp; Diploma students.
              </p>

              {/* Address */}
              <address className="cpf-address" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span className="cpf-addr-icon">📍</span>
                <span>
                  <span itemProp="streetAddress">2nd Floor, Balaji Complex, 288, 2nd Street,<br />
                  Opp. Anbu Mess, Cross Cut Road,</span><br />
                  <span itemProp="addressLocality">Gandhipuram, Coimbatore</span> –{" "}
                  <span itemProp="postalCode">641012</span>,{" "}
                  <span itemProp="addressRegion">Tamil Nadu</span>
                </span>
              </address>

              {/* Contact info */}
              <div className="cpf-contacts">
                <a href="tel:+918525999002" className="cpf-contact-row" aria-label="General enquiry phone" itemProp="telephone">
                  <span className="cpf-contact-icon">📞</span>
                  <div>
                    <span className="cpf-contact-label">General Enquiry</span>
                    <span className="cpf-contact-val">85259 99002</span>
                  </div>
                </a>
                <a href="tel:+918525999022" className="cpf-contact-row" aria-label="Software AI projects phone">
                  <span className="cpf-contact-icon">💻</span>
                  <div>
                    <span className="cpf-contact-label">Software &amp; AI Projects</span>
                    <span className="cpf-contact-val">85259 99022</span>
                  </div>
                </a>
                <a href="tel:+918525999032" className="cpf-contact-row" aria-label="Embedded IoT projects phone">
                  <span className="cpf-contact-icon">🔌</span>
                  <div>
                    <span className="cpf-contact-label">Embedded &amp; IoT Projects</span>
                    <span className="cpf-contact-val">85259 99032</span>
                  </div>
                </a>
                <a href="mailto:codexproject2026@gmail.com" className="cpf-contact-row" aria-label="Email CODEX PROJECT" itemProp="email">
                  <span className="cpf-contact-icon">📧</span>
                  <div>
                    <span className="cpf-contact-label">Email Us</span>
                    <span className="cpf-contact-val">codexproject2026@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Social / Action buttons */}
              <div className="cpf-actions">
                <a
                  href="https://wa.me/918525999002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cpf-action-btn cpf-wa"
                  aria-label="WhatsApp CODEX PROJECT"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://g.page/r/CUj6SjsY-0qgEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cpf-action-btn cpf-review"
                  aria-label="Review CODEX PROJECT on Google"
                >
                  ⭐ Review Us
                </a>
              </div>
            </div>

            {/* Nav link columns */}
            {footerLinks.map((col, ci) => (
              <div key={ci} className="cpf-link-col">
                <h3 className="cpf-col-title">{col.title}</h3>
                <ul className="cpf-link-list">
                  {col.links.map((lk, li) => (
                    <li key={li}>
                      <a href={lk.href} className="cpf-link" aria-label={lk.label}>
                        <span className="cpf-link-arrow">›</span>
                        {lk.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ── SEO KEYWORD STRIP ─────────────────────────────────────────── */}
      <div className="cpf-keywords">
        <div className="cpf-container">
          <p className="cpf-kw-label">Explore</p>
          <div className="cpf-kw-grid">
            {techKeywords.map((k) => (
              <a key={k.label} href={k.href} className="cpf-kw-tag" aria-label={k.label}>
                {k.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEO TEXT BLOCK ────────────────────────────────────────────── */}
      <div className="cpf-seo-block">
        <div className="cpf-container">
          <p>
            <strong>CODEX PROJECT</strong> — Best final year project center in Coimbatore
            at 2nd Floor, Balaji Complex, Gandhipuram. IEEE 2024-25 projects in{" "}
            <a href="/services/software-projects">Python, AI, Machine Learning</a>,{" "}
            <a href="/services/iot-projects">IoT, Arduino, Raspberry Pi</a>,{" "}
            <a href="/services/embedded-projects">Embedded Systems</a>,{" "}
            <a href="/services/mechanical-projects">Mechanical Engineering</a> with
            internship certificate, documentation &amp; viva support. Serving students
            from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur &amp;
            all Coimbatore engineering colleges.
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
      <div className="cpf-bottom">
        <div className="cpf-container">
          <div className="cpf-bottom-inner">

            <p className="cpf-copy">
              &copy; {year} <strong>CODEX PROJECT</strong> – Best Final Year Project Center
              in Coimbatore. All rights reserved.
            </p>

            <div className="cpf-bottom-links">
              <a href="/privacy-policy" className="cpf-bottom-link">Privacy Policy</a>
              <span className="cpf-bottom-sep">·</span>
              <a href="/terms" className="cpf-bottom-link">Terms of Use</a>
              <span className="cpf-bottom-sep">·</span>
              <a href="/sitemap.xml" className="cpf-bottom-link">Sitemap</a>
            </div>

            <button className="cpf-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              ↑
            </button>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;