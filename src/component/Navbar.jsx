import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <h2>CODEX</h2>
        </Link>

        {/* Toggler for Mobile */}
        <button
          className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
                to="/projects"
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/career" ? "active" : ""}`}
                to="/career"
                onClick={closeNavbar}
              >
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;