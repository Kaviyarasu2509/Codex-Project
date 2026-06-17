import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const footerSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "CODEX PROJECT – Final Year Project Center in Coimbatore",
  "url": "https://www.codexproject.in",
  "email": "codexproject2026@gmail.com",
  "telephone": ["+918525999002", "+918525999022", "+918525999032"],
  "description": "Best final year project center in Gandhipuram, Coimbatore. IEEE 2025-26 projects in AI, ML, IoT, Embedded, Mechanical and Web Development with internship certificate and viva support.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0187267,
    "longitude": 76.9686347,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "20:00",
    },
  ],
  "sameAs": [
    "https://wa.me/918525999002",
    "https://www.codexproject.in",
  ],
};

// ─── Footer Nav Links — canonical URLs, matches App.js primary routes ────────
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home",                        href: "/" },
      { label: "About Us",                    href: "/about" },
      { label: "Project Titles 2026",         href: "/final-year-projects-coimbatore" },
      { label: "Blog",                        href: "/blog/project-center-coimbatore-guide" },
      { label: "FAQ",                         href: "/faq" },
      { label: "Contact Us",                  href: "/contact" },
    ],
  },
  {
    title: "Software Projects",
    links: [
      { label: "Python & AI Projects",        href: "/software-project-center-coimbatore" },
      { label: "Machine Learning Projects",   href: "/software-project-center-coimbatore" },
      { label: "MERN Stack Projects",         href: "/software-project-center-coimbatore" },
      { label: "Java & .NET Projects",        href: "/software-project-center-coimbatore" },
      { label: "Flutter & Android Apps",      href: "/software-project-center-coimbatore" },
    ],
  },
  {
    title: "Hardware Projects",
    links: [
      { label: "IoT Projects Coimbatore",     href: "/iot-project-center-coimbatore" },
      { label: "Embedded Projects",           href: "/embedded-project-center-coimbatore" },
      { label: "Arduino Projects",            href: "/iot-project-center-coimbatore" },
      { label: "Raspberry Pi Projects",       href: "/iot-project-center-coimbatore" },
      { label: "Mechanical Projects",         href: "/mechanical-project-center-coimbatore" },
    ],
  },
];

// ─── SEO Keyword Tags — canonical URLs ────────────────────────────────────────
const techKeywords = [
  { label: "AI Projects Coimbatore",              href: "/software-project-center-coimbatore" },
  { label: "ML Projects Coimbatore 2026",         href: "/software-project-center-coimbatore" },
  { label: "IoT Projects Coimbatore 2026",        href: "/iot-project-center-coimbatore" },
  { label: "Embedded Projects Coimbatore",        href: "/embedded-project-center-coimbatore" },
  { label: "Mechanical Projects Coimbatore",      href: "/mechanical-project-center-coimbatore" },
  { label: "IEEE Projects 2025-26",               href: "/final-year-projects-coimbatore" },
  { label: "Python Projects Coimbatore",          href: "/software-project-center-coimbatore" },
  { label: "MERN Stack Projects",                 href: "/software-project-center-coimbatore" },
  { label: "Flutter Projects Coimbatore",         href: "/software-project-center-coimbatore" },
  { label: "Arduino Projects Coimbatore",         href: "/iot-project-center-coimbatore" },
  { label: "Final Year Projects 2025-26",         href: "/final-year-projects-coimbatore" },
  { label: "Free Internship Certificate",         href: "/about" },
  { label: "Project Center Gandhipuram",          href: "/contact" },
  { label: "Same Day Project Delivery",           href: "/contact" },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="cp-footer" itemScope itemType="https://schema.org/EducationalOrganization">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchema) }}
      />
      <meta itemProp="name" content="CODEX PROJECT – Final Year Project Center in Coimbatore" />
      <meta itemProp="url" content="https://www.codexproject.in" />

      {/* ── TOP STRIP ─────────────────────────────────────────────────── */}
      <div className="cpf-topstrip">
        <div className="cpf-container">
          <div className="cpf-strip-inner">
            <span className="cpf-strip-label">📍 Gandhipuram, Coimbatore – 641012</span>
            <div className="cpf-strip-divider"></div>
            <a href="tel:+918525999002" className="cpf-strip-link">📞 85259 99002</a>
            <div className="cpf-strip-divider"></div>
            <a href="mailto:codexproject2026@gmail.com" className="cpf-strip-link">
              📧 codexproject2026@gmail.com
            </a>
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

              <div className="cpf-logo-wrap">
                <h5>CODEX PROJECT – Best Final Year Project Center in Coimbatore</h5>
              </div>

              <p className="cpf-brand-desc">
                <strong>CODEX PROJECT</strong> is the best final year project center
                in Gandhipuram, Coimbatore offering IEEE 2025-26 projects, internship
                certificate, and viva support for BE, ME, BSc, MCA &amp; Diploma students.
                Affordable pricing. Same day delivery. All domains covered.
              </p>

              {/* Address */}
              <address
                className="cpf-address"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span className="cpf-addr-icon">📍</span>
                <span>
                  <span itemProp="streetAddress">
                    2nd Floor, Balaji Complex, 288, 2nd Street,<br />
                    Opp. Anbu Mess, Cross Cut Road,
                  </span><br />
                  <span itemProp="addressLocality">Gandhipuram, Coimbatore</span> –{" "}
                  <span itemProp="postalCode">641012</span>,{" "}
                  <span itemProp="addressRegion">Tamil Nadu</span>
                </span>
              </address>

              {/* Contact info */}
              <div className="cpf-contacts">
                <a
                  href="tel:+918525999002"
                  className="cpf-contact-row"
                  aria-label="General enquiry phone"
                  itemProp="telephone"
                >
                  <span className="cpf-contact-icon">📞</span>
                  <div>
                    <span className="cpf-contact-label">General Enquiry</span>
                    <span className="cpf-contact-val">85259 99002</span>
                  </div>
                </a>
                <a
                  href="tel:+918525999022"
                  className="cpf-contact-row"
                  aria-label="Software AI projects phone"
                >
                  <span className="cpf-contact-icon">💻</span>
                  <div>
                    <span className="cpf-contact-label">Software &amp; AI Projects</span>
                    <span className="cpf-contact-val">85259 99022</span>
                  </div>
                </a>
                <a
                  href="tel:+918525999032"
                  className="cpf-contact-row"
                  aria-label="Embedded IoT projects phone"
                >
                  <span className="cpf-contact-icon">🔌</span>
                  <div>
                    <span className="cpf-contact-label">Embedded &amp; IoT Projects</span>
                    <span className="cpf-contact-val">85259 99032</span>
                  </div>
                </a>
                <a
                  href="mailto:codexproject2026@gmail.com"
                  className="cpf-contact-row"
                  aria-label="Email CODEX PROJECT"
                  itemProp="email"
                >
                  <span className="cpf-contact-icon">📧</span>
                  <div>
                    <span className="cpf-contact-label">Email Us</span>
                    <span className="cpf-contact-val">codexproject2026@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Action buttons */}
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
                      <Link to={lk.href} className="cpf-link" aria-label={lk.label}>
                        <span className="cpf-link-arrow">›</span>
                        {lk.label}
                      </Link>
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
              <Link key={k.label} to={k.href} className="cpf-kw-tag" aria-label={k.label}>
                {k.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEO TEXT BLOCK ────────────────────────────────────────────── */}
      <div className="cpf-seo-block">
        <div className="cpf-container">
          <p>
            <strong>CODEX PROJECT</strong> — Best final year project center in Coimbatore
            at 2nd Floor, Balaji Complex, Gandhipuram. IEEE 2025-26 projects in{" "}
            <Link to="/software-project-center-coimbatore">Python, AI, Machine Learning</Link>,{" "}
            <Link to="/iot-project-center-coimbatore">IoT, Arduino, Raspberry Pi</Link>,{" "}
            <Link to="/embedded-project-center-coimbatore">Embedded Systems</Link>,{" "}
            <Link to="/mechanical-project-center-coimbatore">Mechanical Engineering</Link> with
            free internship certificate, same day delivery, full documentation &amp;
            viva support. Serving students from Peelamedu, Gandhipuram, Saravanampatti,
            RS Puram, Singanallur &amp; all Coimbatore engineering colleges including
            PSG, CIT, SREC, Karpagam, SNS, Amrita &amp; Sri Krishna College.
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
      <div className="cpf-bottom">
        <div className="cpf-container">
          <div className="cpf-bottom-inner">

            <p className="cpf-copy">
              &copy; {year} <strong>CODEX PROJECT</strong> – Best Final Year Project
              Center in Coimbatore. All rights reserved.
            </p>

            <div className="cpf-bottom-links">
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