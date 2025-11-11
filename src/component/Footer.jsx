import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "Software Development",
    "Embedded Systems",
    "IoT Projects",
    "Mechanical Engineering",
    "AI/ML Solutions",
    "Cloud & DevOps"
  ];

  const contactInfo = [
    { icon: "📧", detail: "contact@codexproject.com", link: "mailto:contact@codexproject.com" },
    { icon: "📞", detail: "+1 (555) 123-CODE", link: "tel:+15551234563" },
    { icon: "📍", detail: "123 Tech Park, Innovation City", link: "https://maps.google.com" },
    { icon: "🌐", detail: "www.codexproject.com", link: "https://codexproject.com" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/codexproject" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/company/codexproject" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com/codexproject" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com/codexproject" },
    { name: "YouTube", icon: "📺", url: "https://youtube.com/codexproject" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">            

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} CODEX PROJECT. All rights reserved.</p>
            </div>
            
            <div className="footer-legal">
              <a className="legal-link">Privacy Policy</a>
              <a className="legal-link">Terms of Service</a>
              <a className="legal-link">Cookie Policy</a>
            </div>

            {/* Scroll to Top Button */}
            <button className="scroll-top-btn" onClick={scrollToTop}>
              <span className="scroll-icon">↑</span>
              <span className="scroll-text"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-background">
        <div className="footer-shape shape-1"></div>
        <div className="footer-shape shape-2"></div>
        <div className="footer-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;