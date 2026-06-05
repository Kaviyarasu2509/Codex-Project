import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const serviceLinks = [
  { to: "/software-projects",   icon: "fa-code",            label: "Software & AI Projects",  sub: "Python, MERN, Java, Flutter" },
  { to: "/iot-projects",        icon: "fa-microchip",       label: "IoT Projects",             sub: "Arduino, NodeMCU, ESP32" },
  { to: "/embedded-projects",   icon: "fa-diagram-project", label: "Embedded Projects",        sub: "8051, ARM, PIC, FPGA" },
  { to: "/mechanical-projects", icon: "fa-gears",           label: "Mechanical Projects",      sub: "CAD, Fabrication, Robotics" },
];

const navLinks = [
  { to: "/",         icon: "fa-house",       label: "Home" },
  { to: "/about",    icon: "fa-building",    label: "About" },
  { to: "/projects", icon: "fa-folder-open", label: "Projects" },
  { to: "/blog",     icon: "fa-newspaper",   label: "Blog" },
  { to: "/contact",  icon: "fa-phone",       label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [serviceOpen,       setServiceOpen]       = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [scrolled,          setScrolled]          = useState(false);
  const dropRef = useRef(null);

  const isActive        = (path) => location.pathname === path;
  const isServiceActive = serviceLinks.some((s) => location.pathname === s.to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target))
        setServiceOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServiceOpen(false);
    setServiceOpen(false);
  }, [location]);

  return (
    <>
      {/* ══ STICKY HEADER WRAPPER ══════════════════════════════ */}
      <div className="nb-header-wrap">

        {/* ══ TOP BAR — White bg + Navy text ════════════════════ */}
        <div className="nb-topbar">
          <div className="nb-topbar-inner">

            {/* Brand — logo + name */}
            <div className="nb-topbar-brand">
              <img src={logo} alt="CODEX PROJECT logo" className="nb-topbar-logo" />
              <div className="nb-topbar-brand-text">
                <span className="nb-brand-codex">CODEX</span> <span className="nb-brand-project">PROJECT</span>
                
              </div>
            </div>

            {/* Right side — phones + location */}
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

        {/* ══ MAIN NAVBAR — Navy bg + White links ═══════════════ */}
        <nav
          className={`nb-nav ${scrolled ? "nb-nav-scrolled" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="nb-nav-inner">

            {/* ── Logo (mobile / small screens) ── */}
            <Link to="/" className="nb-logo" aria-label="CODEX PROJECT Home">
              <img src={logo} alt="CODEX PROJECT" className="nb-logo-img" />
              <div className="nb-logo-text">
                <span className="nb-logo-name">CODEX</span>
                <span className="nb-logo-sub">PROJECT</span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <ul className="nb-links">

              {navLinks.slice(0, 2).map((lk) => (
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

              {/* ── Services Dropdown ── */}
              <li className="nb-dropdown-wrap" ref={dropRef}>
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

                <div className={`nb-dropdown ${serviceOpen ? "nb-dropdown-open" : ""}`} role="menu">
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
                    <Link to="/projects" className="nb-df-link">
                      <i className="fa-solid fa-grid-2"></i>
                      View All Project Ideas
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </li>

              {navLinks.slice(2).map((lk) => (
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

            {/* ── CTA + Hamburger ── */}
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
                <span></span>
                <span></span>
                <span></span>
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

          {/* Mobile header */}
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

          {/* Contact strip */}
          <div className="nb-mobile-contact">
            <a href="tel:+918525999002" className="nb-mc-item">
              <i className="fa-solid fa-phone"></i> 85259 99002
            </a>
            <a href="tel:+918525999022" className="nb-mc-item">
              <i className="fa-solid fa-laptop-code"></i> 85259 99022
            </a>
          </div>

          {/* Nav links */}
          <ul className="nb-mobile-links">
            {navLinks.slice(0, 2).map((lk) => (
              <li key={lk.to}>
                <Link to={lk.to} className={`nb-ml-item ${isActive(lk.to) ? "nb-ml-active" : ""}`}>
                  <i className={`fa-solid ${lk.icon}`}></i>
                  {lk.label}
                  {isActive(lk.to) && <i className="fa-solid fa-circle-dot nb-ml-dot"></i>}
                </Link>
              </li>
            ))}

            {/* Mobile services accordion */}
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

            {navLinks.slice(2).map((lk) => (
              <li key={lk.to}>
                <Link to={lk.to} className={`nb-ml-item ${isActive(lk.to) ? "nb-ml-active" : ""}`}>
                  <i className={`fa-solid ${lk.icon}`}></i>
                  {lk.label}
                  {isActive(lk.to) && <i className="fa-solid fa-circle-dot nb-ml-dot"></i>}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
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

          {/* Footer info */}
          <div className="nb-mobile-footer">
            <i className="fa-solid fa-location-dot"></i>
            Balaji Complex, Gandhipuram, Coimbatore – 641012
          </div>

        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="nb-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}
    </>
  );
};

export default Navbar;