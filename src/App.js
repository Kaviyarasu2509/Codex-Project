import { Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import "./App.css";

// ── Home is loaded eagerly — it's the first page most visitors land on ──────
import Home             from "./component/Home";
import Navbar           from "./component/Navbar";
import Footer           from "./component/Footer";
import WhatAppIcon      from "./component/WhatAppIcon";
import ChatBot          from "./component/ChatBot";
import ScrollToTop      from "./ScrollToTop";

// ── Everything else is lazy-loaded — code-split into separate chunks so the
//    homepage doesn't pay for JS it doesn't need on first load ─────────────
const About              = lazy(() => import("./component/About"));
const Career              = lazy(() => import("./component/Career"));
const Contact            = lazy(() => import("./component/Contact"));

const MechanicalProjects = lazy(() => import("./pages/MechanicalProjects"));
const IoTProjects        = lazy(() => import("./pages/IoTProjects"));
const EmbeddedProjects   = lazy(() => import("./pages/EmbeddedProjects"));
const SoftwareProjects   = lazy(() => import("./pages/SoftwareProjects"));
const Projects           = lazy(() => import("./pages/Projects"));
const Blog                = lazy(() => import("./pages/Blog"));
const Faq                = lazy(() => import("./pages/Faq"));

// ─── SEO URL Map ──────────────────────────────────────────────────────────────
//  PRIMARY (Google index பண்ணும்)
//  /iot-project-center-coimbatore        ← "best iot project center coimbatore"
//  /embedded-project-center-coimbatore   ← "embedded project center coimbatore"
//  /mechanical-project-center-coimbatore ← "mechanical project center coimbatore"
//  /software-project-center-coimbatore   ← "software project center coimbatore"
//  /final-year-projects-coimbatore       ← "final year project titles coimbatore"
//  /blog/project-center-coimbatore-guide ← blog long-tail keywords
//
//  OLD → 301 Redirect (duplicate content ஆகாம இருக்க)
// ─────────────────────────────────────────────────────────────────────────────

// Lightweight fallback shown for a split-second while a lazy chunk loads
const PageLoader = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Space Grotesk', sans-serif",
      color: "#1A2A6C",
      fontSize: "14px",
      fontWeight: 600,
    }}
  >
    Loading…
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <WhatAppIcon />
      <ChatBot />
      <ScrollToTop />

      {/* ══ MAIN LANDMARK — accessibility fix (PageSpeed: "Document does not
           have a main landmark") — wraps all routed page content ══════════ */}
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>

            {/* ══ MAIN PAGES ══════════════════════════════════════════════════ */}
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/career"  element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq"     element={<Faq />} />

            {/* ══ PRIMARY SEO ROUTES ══════════════════════════════════════════ */}

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

            {/* ══ 301 REDIRECTS — Old → New (duplicate content ஆகாம இருக்க) ════ */}

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
        </Suspense>
      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default App;