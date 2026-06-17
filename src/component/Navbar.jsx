import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

// ── SEO-optimized service routes — App.jsx primary routes-உடன் match ─────────
const serviceLinks = [
  { to: "/software-project-center-coimbatore",   icon: "fa-code",            label: "Software & AI Projects", sub: "Python, MERN, Java, Flutter" },
  { to: "/iot-project-center-coimbatore",         icon: "fa-microchip",       label: "IoT Projects",           sub: "Arduino, NodeMCU, ESP32" },
  { to: "/embedded-project-center-coimbatore",    icon: "fa-diagram-project", label: "Embedded Projects",      sub: "8051, ARM, PIC, FPGA" },
  { to: "/mechanical-project-center-coimbatore",  icon: "fa-gears",           label: "Mechanical Projects",    sub: "CAD, Fabrication, Robotics" },
];

// Legacy paths — isActive fallback (redirected-ஆனாலும் highlight சரியா வரும்)
const legacyServicePaths = [
  "/software-projects", "/software-projects-coimbatore",
  "/iot-projects", "/iot-projects-coimbatore-2026", "/iot-projects-coimbatore",
  "/embedded-projects", "/embedded-projects-coimbatore",
  "/mechanical-projects", "/mechanical-projects-coimbatore",
];

// About dropdown
const aboutLinks = [
  { to: "/about", icon: "fa-building",        label: "About Us",  sub: "Learn about our journey" },
  { to: "/faq",   icon: "fa-circle-question", label: "FAQ",       sub: "Frequently asked questions" },
];

// Main nav links — App.jsx primary routes-உடன் exact match
const navLinks = [
  { to: "/",                                    icon: "fa-house",       label: "Home" },
  { to: "/final-year-projects-coimbatore",      icon: "fa-folder-open", label: "Projects" },
  { to: "/blog/project-center-coimbatore-guide",icon: "fa-newspaper",   label: "Blog" },
  { to: "/contact",                             icon: "fa-phone",       label: "Contact" },
];

// Legacy nav paths for isActive fallback
const legacyNavMap = {
  "/final-year-projects-coimbatore":       ["/projects", "/final-year-project-titles-coimbatore"],
  "/blog/project-center-coimbatore-guide": ["/blog", "/tips-and-tricks"],
};

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [serviceOpen,       setServiceOpen]       = useState(false);
  const [aboutOpen,         setAboutOpen]         = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileAboutOpen,   setMobileAboutOpen]   = useState(false);
  const [scrolled,          setScrolled]          = useState(false);
  const serviceDropRef = useRef(null);
  const aboutDropRef   = useRef(null);

  // Active check — new + legacy paths handle பண்ணும்
  const isActive = (path) => {
    if (location.pathname === path) return true;
    const legacy = legacyNavMap[path];
    return legacy ? legacy.includes(location.pathname) : false;
  };

  const isServiceActive =
    serviceLinks.some((s) => location.pathname === s.to) ||
    legacyServicePaths.includes(location.pathname);

  const isAboutActive = aboutLinks.some((a) => location.pathname === a.to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (serviceDropRef.current && !serviceDropRef.current.contains(e.target))
        setServiceOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (aboutDropRef.current && !aboutDropRef.current.contains(e.target))
        setAboutOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileAboutOpen(false);
    setServiceOpen(false);
    setAboutOpen(false);
  }, [location]);

  return (
    <>
      {/* ══ STICKY HEADER WRAPPER ══════════════════════════════ */}
      <div className="nb-header-wrap">

        {/* ══ TOP BAR ════════════════════════════════════════════ */}
        <div className="nb-topbar">
          <div className="nb-topbar-inner">

            <div className="nb-topbar-brand">
              <img src={logo} alt="CODEX PROJECT logo" className="nb-topbar-logo" />
              <div className="nb-topbar-brand-text">
                <span className="nb-brand-codex">CODEX</span>
                <span className="nb-brand-project">PROJECT</span>
              </div>
            </div>

            <div className="nb-topbar-right">
              <a href="tel:+918525999002" className="nb-topbar-item" aria-label="Call 85259 99002">
                <i className="fa-solid fa-phone-volume"></i>
                <span>85259 99002</span>
              </a>
              <span className="nb-topbar-div"></span>
              <a href="tel:+918525999022" className="nb-topbar-item" aria-label="Software AI 85259 99022">
                <i className="fa-solid fa-laptop-code"></i>
                <span>85259 99022</span>
              </a>
              <span className="nb-topbar-div nb-hide-sm"></span>
              <a
                href="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
                target="_blank"
                rel="noopener noreferrer"
                className="nb-topbar-item nb-hide-sm"
                aria-label="CODEX PROJECT Gandhipuram Coimbatore"
              >
                <i className="fa-solid fa-location-dot"></i>
                <span>Gandhipuram, Coimbatore</span>
              </a>
            </div>

          </div>
        </div>

        {/* ══ MAIN NAVBAR ════════════════════════════════════════ */}
        <nav
          className={`nb-nav ${scrolled ? "nb-nav-scrolled" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="nb-nav-inner">

            {/* Logo (mobile) */}
            <Link to="/" className="nb-logo" aria-label="CODEX PROJECT Home">
              <img src={logo} alt="CODEX PROJECT" className="nb-logo-img" />
              <div className="nb-logo-text">
                <span className="nb-logo-name">CODEX</span>
                <span className="nb-logo-sub">PROJECT</span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <ul className="nb-links">

              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`nb-link ${location.pathname === "/" ? "nb-link-active" : ""}`}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  <i className="fa-solid fa-house nb-link-icon"></i>
                  Home
                  {location.pathname === "/" && <span className="nb-link-bar"></span>}
                </Link>
              </li>

              {/* About dropdown */}
              <li className="nb-dropdown-wrap" ref={aboutDropRef}>
                <button
                  className={`nb-link nb-link-btn
                    ${isAboutActive ? "nb-link-active" : ""}
                    ${aboutOpen     ? "nb-link-open"   : ""}`}
                  onClick={() => setAboutOpen(!aboutOpen)}
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                >
                  <i className="fa-solid fa-building nb-link-icon"></i>
                  About
                  <i className={`fa-solid fa-chevron-down nb-chevron ${aboutOpen ? "nb-chevron-open" : ""}`}></i>
                  {isAboutActive && <span className="nb-link-bar"></span>}
                </button>

                <div
                  className={`nb-dropdown nb-dropdown-sm ${aboutOpen ? "nb-dropdown-open" : ""}`}
                  role="menu"
                >
                  <div className="nb-dropdown-header">
                    <i className="fa-solid fa-circle-info"></i>
                    About CODEX PROJECT
                  </div>
                  <div className="nb-dropdown-grid">
                    {aboutLinks.map((a) => (
                      <Link
                        key={a.to}
                        to={a.to}
                        className={`nb-dropdown-item ${location.pathname === a.to ? "nb-dropdown-active" : ""}`}
                        role="menuitem"
                      >
                        <div className="nb-di-icon">
                          <i className={`fa-solid ${a.icon}`}></i>
                        </div>
                        <div className="nb-di-text">
                          <span className="nb-di-label">{a.label}</span>
                          <span className="nb-di-sub">{a.sub}</span>
                        </div>
                        {location.pathname === a.to && (
                          <i className="fa-solid fa-check nb-di-check"></i>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Services dropdown */}
              <li className="nb-dropdown-wrap" ref={serviceDropRef}>
                <button
                  className={`nb-link nb-link-btn
                    ${isServiceActive ? "nb-link-active" : ""}
                    ${serviceOpen     ? "nb-link-open"   : ""}`}
                  onClick={() => setServiceOpen(!serviceOpen)}
                  aria-haspopup="true"
                  aria-expanded={serviceOpen}
                >
                  <i className="fa-solid fa-layer-group nb-link-icon"></i>
                  Services
                  <i className={`fa-solid fa-chevron-down nb-chevron ${serviceOpen ? "nb-chevron-open" : ""}`}></i>
                  {isServiceActive && <span className="nb-link-bar"></span>}
                </button>

                <div
                  className={`nb-dropdown ${serviceOpen ? "nb-dropdown-open" : ""}`}
                  role="menu"
                >
                  <div className="nb-dropdown-header">
                    <i className="fa-solid fa-shapes"></i>
                    Our Project Domains
                  </div>
                  <div className="nb-dropdown-grid">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className={`nb-dropdown-item ${location.pathname === s.to ? "nb-dropdown-active" : ""}`}
                        role="menuitem"
                        aria-label={s.label}
                      >
                        <div className="nb-di-icon">
                          <i className={`fa-solid ${s.icon}`}></i>
                        </div>
                        <div className="nb-di-text">
                          <span className="nb-di-label">{s.label}</span>
                          <span className="nb-di-sub">{s.sub}</span>
                        </div>
                        {location.pathname === s.to && (
                          <i className="fa-solid fa-check nb-di-check"></i>
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="nb-dropdown-footer">
                    <Link to="/final-year-projects-coimbatore" className="nb-df-link">
                      <i className="fa-solid fa-grid-2"></i>
                      View All Project Ideas
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Projects, Blog, Contact */}
              {navLinks.slice(1).map((lk) => (
                <li key={lk.to}>
                  <Link
                    to={lk.to}
                    className={`nb-link ${isActive(lk.to) ? "nb-link-active" : ""}`}
                    aria-current={isActive(lk.to) ? "page" : undefined}
                  >
                    <i className={`fa-solid ${lk.icon} nb-link-icon`}></i>
                    {lk.label}
                    {isActive(lk.to) && <span className="nb-link-bar"></span>}
                  </Link>
                </li>
              ))}

            </ul>

            {/* CTA + Hamburger */}
            <div className="nb-right">
              <Link to="/contact" className="nb-cta" aria-label="New project enquiry">
                <i className="fa-solid fa-paper-plane"></i>
                <span>New Enquiry</span>
              </Link>
              <button
                className={`nb-hamburger ${mobileOpen ? "nb-ham-open" : ""}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span></span><span></span><span></span>
              </button>
            </div>

          </div>
        </nav>

      </div>

      {/* ══ MOBILE MENU ════════════════════════════════════════ */}
      <div
        className={`nb-mobile ${mobileOpen ? "nb-mobile-open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="nb-mobile-inner">

          <div className="nb-mobile-head">
            <div className="nb-mobile-brand">
              <img src={logo} alt="CODEX PROJECT" className="nb-mobile-logo" />
              <div>
                <span className="nb-mbrand-codex">CODEX</span>
                <span className="nb-mbrand-project"> PROJECT</span>
              </div>
            </div>
            <button className="nb-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="nb-mobile-contact">
            <a href="tel:+918525999002" className="nb-mc-item">
              <i className="fa-solid fa-phone"></i> 85259 99002
            </a>
            <a href="tel:+918525999022" className="nb-mc-item">
              <i className="fa-solid fa-laptop-code"></i> 85259 99022
            </a>
          </div>

          <ul className="nb-mobile-links">

            <li>
              <Link to="/" className={`nb-ml-item ${location.pathname === "/" ? "nb-ml-active" : ""}`}>
                <i className="fa-solid fa-house"></i>
                Home
                {location.pathname === "/" && <i className="fa-solid fa-circle-dot nb-ml-dot"></i>}
              </Link>
            </li>

            {/* Mobile About */}
            <li>
              <button
                className={`nb-ml-item nb-ml-btn ${isAboutActive ? "nb-ml-active" : ""}`}
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                aria-expanded={mobileAboutOpen}
              >
                <i className="fa-solid fa-building"></i>
                About
                <i className={`fa-solid fa-chevron-down nb-ml-chev ${mobileAboutOpen ? "nb-ml-chev-open" : ""}`}></i>
              </button>
              <ul className={`nb-ml-sub ${mobileAboutOpen ? "nb-ml-sub-open" : ""}`}>
                {aboutLinks.map((a) => (
                  <li key={a.to}>
                    <Link
                      to={a.to}
                      className={`nb-ml-sub-item ${location.pathname === a.to ? "nb-ml-sub-active" : ""}`}
                    >
                      <i className={`fa-solid ${a.icon}`}></i>
                      {a.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Services */}
            <li>
              <button
                className={`nb-ml-item nb-ml-btn ${isServiceActive ? "nb-ml-active" : ""}`}
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                aria-expanded={mobileServiceOpen}
              >
                <i className="fa-solid fa-layer-group"></i>
                Services
                <i className={`fa-solid fa-chevron-down nb-ml-chev ${mobileServiceOpen ? "nb-ml-chev-open" : ""}`}></i>
              </button>
              <ul className={`nb-ml-sub ${mobileServiceOpen ? "nb-ml-sub-open" : ""}`}>
                {serviceLinks.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className={`nb-ml-sub-item ${location.pathname === s.to ? "nb-ml-sub-active" : ""}`}
                    >
                      <i className={`fa-solid ${s.icon}`}></i>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Projects, Blog, Contact */}
            {navLinks.slice(1).map((lk) => (
              <li key={lk.to}>
                <Link
                  to={lk.to}
                  className={`nb-ml-item ${isActive(lk.to) ? "nb-ml-active" : ""}`}
                >
                  <i className={`fa-solid ${lk.icon}`}></i>
                  {lk.label}
                  {isActive(lk.to) && <i className="fa-solid fa-circle-dot nb-ml-dot"></i>}
                </Link>
              </li>
            ))}

          </ul>

          <div className="nb-mobile-cta">
            <Link to="/contact" className="nb-mobile-cta-btn" onClick={() => setMobileOpen(false)}>
              <i className="fa-solid fa-paper-plane"></i>
              New Project Enquiry
            </Link>
            <a href="https://wa.me/918525999002" target="_blank" rel="noopener noreferrer" className="nb-mobile-wa-btn">
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp Us
            </a>
          </div>

          <div className="nb-mobile-footer">
            <i className="fa-solid fa-location-dot"></i>
            Balaji Complex, Gandhipuram, Coimbatore – 641012
          </div>

        </div>
      </div>

      {mobileOpen && (
        <div className="nb-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}
    </>
  );
};

export default Navbar;