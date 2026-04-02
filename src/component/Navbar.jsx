import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
            
              <h2>CODEX PROJECT</h2>
            </Link>
          </div>

          <div className="top-info">
            <a href="tel:6369569637">📞 6369569637</a>
            <a href="tel:9566515433">📞 9566515433</a>
            <a href="https://maps.google.com/?q=Coimbatore" target="_blank" rel="noreferrer">
  📍 Coimbatore
</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar navbar-expand-lg main-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

            <ul className="navbar-nav">

              {/* HOME */}
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>

              {/* 🔥 SERVICES DROPDOWN */}
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle">
                  Services
                </span>

                <ul className="dropdown-menu">

                  <li>
                    <Link to="/mechanical-projects" className="dropdown-item" onClick={() => setIsOpen(false)}>
                      Mechanical Projects
                    </Link>
                  </li>

                  <li>
                    <Link to="/iot-projects" className="dropdown-item" onClick={() => setIsOpen(false)}>
                      IoT Projects
                    </Link>
                  </li>

                  <li>
                    <Link to="/embedded-projects" className="dropdown-item" onClick={() => setIsOpen(false)}>
                      Embedded Projects
                    </Link>
                  </li>

                  <li>
                    <Link to="/software-projects" className="dropdown-item" onClick={() => setIsOpen(false)}>
                      Software Projects
                    </Link>
                  </li>

                </ul>
              </li>

              {/* PROJECTS */}
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>

              {/* CONTACT */}
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>

              {/* CONTACT */}
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>

            </ul>

            {/* BUTTON */}
            <div className="ms-auto">
              <Link to="/contact" className="enquiry-btn">
                Enquiry
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;