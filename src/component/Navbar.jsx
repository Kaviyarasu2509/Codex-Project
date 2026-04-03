import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <Link to="/" className="logo-link">
            <div className="logo-icon">CX</div>
            <span className="logo-text">CODEX <span>PROJECT</span></span>
          </Link>

          <div className="top-info">
            <a href="tel:1234567890" className="top-link">
              <span className="top-link-icon">
                <PhoneIcon />
              </span>
              1234567890
            </a>
            <div className="top-divider" />
            <a href="tel:9966332255" className="top-link">
              <span className="top-link-icon">
                <PhoneIcon />
              </span>
              9966332255
            </a>
            <div className="top-divider" />
            <a
              href="https://maps.app.goo.gl/RjGH3zyfHGYyzCrWA"
              target="_blank"
              rel="noreferrer"
              className="top-link"
            >
              <span className="top-link-icon">
                <PinIcon />
              </span>
              Coimbatore
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li ref={servicesRef} className={`has-dropdown ${servicesOpen ? "open" : ""}`}>
              <button
                className={`nav-link dropdown-toggle ${
                  ["/mechanical-projects", "/iot-projects", "/embedded-projects", "/software-projects"].includes(location.pathname)
                    ? "active"
                    : ""
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <CaretIcon />
              </button>

              <div className="dropdown-panel">
                <Link to="/mechanical-projects" className="dropdown-item">
                  <span className="dd-icon">⚙️</span>
                  <span className="dd-label">
                    Mechanical Projects
                    <span>CAD, fabrication &amp; more</span>
                  </span>
                </Link>
                <Link to="/iot-projects" className="dropdown-item">
                  <span className="dd-icon">📡</span>
                  <span className="dd-label">
                    IoT Projects
                    <span>Smart devices &amp; sensors</span>
                  </span>
                </Link>
                <Link to="/embedded-projects" className="dropdown-item">
                  <span className="dd-icon">🔌</span>
                  <span className="dd-label">
                    Embedded Projects
                    <span>Microcontrollers &amp; firmware</span>
                  </span>
                </Link>
                <Link to="/software-projects" className="dropdown-item">
                  <span className="dd-icon">💻</span>
                  <span className="dd-label">
                    Software Projects
                    <span>Web, app &amp; backend</span>
                  </span>
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/projects"
                className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className={`nav-actions ${isOpen ? "open" : ""}`}>
            <div className="nav-v-divider" />
            <Link to="/contact" className="btn-enquiry">
              <span className="btn-dot" />
              Enquiry
            </Link>
          </div>

          <button
            className={`nav-toggler ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
};

const PhoneIcon = () => (
  <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 1h3l1.5 4L6 6.5C7 8.5 9.5 11 11.5 12l1.5-1.5 4 1.5V15a2 2 0 01-2 2C5.7 17-1 10.3-1 3a2 2 0 012-2z"
      stroke="#38BDF8"
      strokeWidth="1.5"
    />
  </svg>
);

const PinIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
      stroke="#38BDF8"
      strokeWidth="1.5"
    />
  </svg>
);

const CaretIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="caret-icon">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default Navbar;