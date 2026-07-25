import { Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import Home             from "./component/Home";
import Navbar           from "./component/Navbar";
import About            from "./component/About";
import Career           from "./component/Career";
import Contact          from "./component/Contact";
import Footer           from "./component/Footer";
import WhatAppIcon      from "./component/WhatAppIcon";
import ChatBot          from "./component/ChatBot";
import ScrollToTop      from "./ScrollToTop";

import MechanicalProjects from "./pages/MechanicalProjects";
import IoTProjects        from "./pages/IoTProjects";
import EmbeddedProjects   from "./pages/EmbeddedProjects";
import SoftwareProjects   from "./pages/SoftwareProjects";
import Projects           from "./pages/Projects";
import Blog                from "./pages/Blog";
import Faq                from "./pages/Faq";

// ─── SEO URL Map ──────────────────────────────────────────────────────────────
//  PRIMARY (Google index பண்ணும்)
//  /iot-project-center-coimbatore        ← "best iot project center coimbatore"
//  /embedded-project-center-coimbatore   ← "embedded project center coimbatore"
//  /mechanical-project-center-coimbatore ← "mechanical project center coimbatore"
//  /software-project-center-coimbatore   ← "software project center coimbatore"
//  /final-year-projects-coimbatore       ← "final year project titles coimbatore"
//  /blog/project-center-coimbatore-guide ← blog long-tail keywords
//
//  OLD → 301 Redirect (duplicate content avoid பண்ண)
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <WhatAppIcon />
      <ChatBot />
      <ScrollToTop />

      <Routes>

        {/* ══ MAIN PAGES ══════════════════════════════════════════════════════ */}
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/career"  element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq"     element={<Faq />} />

        {/* ══ PRIMARY SEO ROUTES ══════════════════════════════════════════════ */}

        <Route
          path="/iot-project-center-coimbatore"
          element={<IoTProjects />}
        />
        <Route
          path="/embedded-project-center-coimbatore"
          element={<EmbeddedProjects />}
        />
        <Route
          path="/mechanical-project-center-coimbatore"
          element={<MechanicalProjects />}
        />
        <Route
          path="/software-project-center-coimbatore"
          element={<SoftwareProjects />}
        />
        <Route
          path="/final-year-projects-coimbatore"
          element={<Projects />}
        />
        <Route
          path="/blog/project-center-coimbatore-guide"
          element={<Blog />}
        />

        {/* ══ 301 REDIRECTS — Old → New (duplicate content ஆகாம இருக்க) ══════ */}

        {/* IoT */}
        <Route path="/iot-projects"
          element={<Navigate to="/iot-project-center-coimbatore" replace />} />
        <Route path="/iot-projects-coimbatore-2026"
          element={<Navigate to="/iot-project-center-coimbatore" replace />} />
        <Route path="/iot-projects-coimbatore"
          element={<Navigate to="/iot-project-center-coimbatore" replace />} />

        {/* Embedded */}
        <Route path="/embedded-projects"
          element={<Navigate to="/embedded-project-center-coimbatore" replace />} />
        <Route path="/embedded-projects-coimbatore"
          element={<Navigate to="/embedded-project-center-coimbatore" replace />} />

        {/* Mechanical */}
        <Route path="/mechanical-projects"
          element={<Navigate to="/mechanical-project-center-coimbatore" replace />} />
        <Route path="/mechanical-projects-coimbatore"
          element={<Navigate to="/mechanical-project-center-coimbatore" replace />} />

        {/* Software */}
        <Route path="/software-projects"
          element={<Navigate to="/software-project-center-coimbatore" replace />} />
        <Route path="/software-projects-coimbatore"
          element={<Navigate to="/software-project-center-coimbatore" replace />} />

        {/* Projects */}
        <Route path="/projects"
          element={<Navigate to="/final-year-projects-coimbatore" replace />} />
        <Route path="/final-year-project-titles-coimbatore"
          element={<Navigate to="/final-year-projects-coimbatore" replace />} />

        {/* Blog */}
        <Route path="/blog"
          element={<Navigate to="/blog/project-center-coimbatore-guide" replace />} />
        <Route path="/tips-and-tricks"
          element={<Navigate to="/blog/project-center-coimbatore-guide" replace />} />

        {/* Typo */}
        <Route path="/fqa"
          element={<Navigate to="/faq" replace />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

      <Footer />
    </HelmetProvider>
  );
}

export default App;