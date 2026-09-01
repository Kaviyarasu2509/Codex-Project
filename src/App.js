import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import Navbar           from "./component/Navbar";
import Footer           from "./component/Footer";
import WhatAppIcon      from "./component/WhatAppIcon";
import ChatBot          from "./component/ChatBot";
import ScrollToTop      from "./ScrollToTop";
import SeoManager       from "./component/SeoManager";

const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Career = lazy(() => import("./component/Career"));
const Contact = lazy(() => import("./component/Contact"));
const MechanicalProjects = lazy(() => import("./pages/MechanicalProjects"));
const IoTProjects = lazy(() => import("./pages/IoTProjects"));
const EmbeddedProjects = lazy(() => import("./pages/EmbeddedProjects"));
const SoftwareProjects = lazy(() => import("./pages/SoftwareProjects"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Faq = lazy(() => import("./pages/Faq"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
      <SeoManager />
      <Navbar />
      <WhatAppIcon />
      <ChatBot />
      <ScrollToTop />

      <Suspense fallback={<div className="route-loading" role="status">Loading…</div>}>
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
        <Route path="/blog/:slug" element={<Blog />} />

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

        {/* Service links use the matching canonical landing pages. */}
        <Route path="/services/cse-projects" element={<Navigate to="/software-project-center-coimbatore" replace />} />
        <Route path="/services/mca-projects" element={<Navigate to="/software-project-center-coimbatore" replace />} />
        <Route path="/services/software-projects" element={<Navigate to="/software-project-center-coimbatore" replace />} />
        <Route path="/services/ece-projects" element={<Navigate to="/embedded-project-center-coimbatore" replace />} />
        <Route path="/services/iot-projects" element={<Navigate to="/iot-project-center-coimbatore" replace />} />
        <Route path="/services/embedded-projects" element={<Navigate to="/embedded-project-center-coimbatore" replace />} />
        <Route path="/services/mechanical-projects" element={<Navigate to="/mechanical-project-center-coimbatore" replace />} />
        <Route path="/internship" element={<Navigate to="/about" replace />} />

        {/* Typo */}
        <Route path="/fqa"
          element={<Navigate to="/faq" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
      </Suspense>

      <Footer />
    </HelmetProvider>
  );
}

export default App;
