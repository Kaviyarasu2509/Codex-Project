import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  

  

  

  

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