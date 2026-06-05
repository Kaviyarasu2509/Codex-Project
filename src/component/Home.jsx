import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "name": "CODEX PROJECT",
  "description": "Best final year project center in Coimbatore offering IEEE 2025-26 projects, internship training, and placement support for BE, ME, MCA, BSc, and Diploma students.",
  "url": "https://www.codexproject.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 11.0187267, "longitude": 76.9686347 },
  "telephone": "+91-XXXXXXXXXX",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best final year project center in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is the best final year project center in Coimbatore offering IEEE 2025-26 projects, internship training, and placement support for BE, ME, BSc, MCA, and Diploma students at Balaji Complex, Gandhipuram." }
    },
    {
      "@type": "Question",
      "name": "Do you provide internship with project development in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT provides internship training with live project experience and verified certificate for engineering students in Coimbatore." }
    },
    {
      "@type": "Question",
      "name": "What project domains are available at Codex Project Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "Software (Python, AI, ML, MERN), IoT & Embedded (Arduino, Raspberry Pi), Mechanical & Automation, Mobile App Development, and IEEE 2025-26 certified projects." }
    },
    {
      "@type": "Question",
      "name": "How much does a final year project cost at Codex Project?",
      "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT offers the most affordable final year project pricing in Coimbatore with no hidden charges. Contact us for a free consultation and custom quote." }
    },
    {
      "@type": "Question",
      "name": "Do you support viva and documentation for final year projects?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% documentation support including IEEE paper format, project report, PPT, and viva preparation for all final year projects in Coimbatore." }
    },
    {
      "@type": "Question",
      "name": "Do you provide ready-made projects with source code in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT provides ready-made final year projects with complete source code, documentation, and deployment support for all domains in Coimbatore." }
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const techStacks = [
  { name: "Python",       icon: "🐍", color: "#fca090" },
  { name: "React",        icon: "⚛️",  color: "#61DAFB" },
  { name: "TensorFlow",   icon: "🧠", color: "#FF6F00" },
  { name: "Arduino",      icon: "🔌", color: "#9cf8fc" },
  { name: "Node.js",      icon: "🟢", color: "#b6fdb6" },
  { name: "Java",         icon: "☕", color: "#ED8B00" },
  { name: "Flutter",      icon: "🦋", color: "#ff93d6" },
  { name: "Raspberry Pi", icon: "🤖", color: "#80ebf3" },
  { name: "MongoDB",      icon: "🍃", color: "#99c79a" },
  { name: "Firebase",     icon: "🔥", color: "#FFCA28" },
  { name: "AWS IoT",      icon: "☁️",  color: "#FF9900" },
  { name: "MATLAB",       icon: "📊", color: "#f5bebe" },
  { name: "Android",      icon: "🤖", color: "#3DDC84" },
  { name: "PHP",          icon: "🐘", color: "#bdfcbd" },
  { name: ".NET",         icon: "🔷", color: "#2bd42b" },
  { name: "OpenCV",       icon: "👁️", color: "#b5a6f8" },
];

const domains = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    seo: "AI ML Projects Coimbatore 2025-26",
    desc: "Deep Learning, NLP, Computer Vision, Data Science — Python, TensorFlow, PyTorch",
    tags: ["Python", "TensorFlow", "NLP", "CNN"],
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.07)",
    link: "/software-projects",
  },
  {
    icon: "🌐",
    title: "Web & Mobile Apps",
    seo: "Web Mobile App Projects Coimbatore",
    desc: "MERN Stack, Django, React, Flutter, Android — full-stack deployment included",
    tags: ["React", "Node.js", "Flutter", "MongoDB"],
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.07)",
    link: "/software-projects",
  },
  {
    icon: "📡",
    title: "IoT & Embedded",
    seo: "IoT Embedded Projects Coimbatore",
    desc: "Arduino, Raspberry Pi, NodeMCU, ESP32 — cloud & sensor integration",
    tags: ["Arduino", "ESP32", "Firebase", "MQTT"],
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.07)",
    link: "/iot-projects",
  },
  {
    icon: "⚙️",
    title: "Mechanical & Automation",
    seo: "Mechanical Projects Coimbatore",
    desc: "Fabrication, CAD/CAM, Robotics, ANSYS, SolidWorks — real working models",
    tags: ["SolidWorks", "ANSYS", "CAD/CAM", "Robotics"],
    color: "#10B981",
    bg: "rgba(16,185,129,0.07)",
    link: "/mechanical-projects",
  },
  {
    icon: "💻",
    title: "Java & .NET Projects",
    seo: "Java Dotnet Projects Coimbatore",
    desc: "Spring Boot, Hibernate, ASP.NET Core — enterprise-grade applications",
    tags: ["Java", "Spring Boot", ".NET", "SQL"],
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.07)",
    link: "/software-projects",
  },
  {
    icon: "📄",
    title: "IEEE Certified Projects",
    seo: "IEEE Projects Coimbatore 2025-26",
    desc: "Latest IEEE 2025-26 base papers — all domains with publication support",
    tags: ["IEEE 2025-26", "Base Paper", "All Domains"],
    color: "#EC4899",
    bg: "rgba(236,72,153,0.07)",
    link: "/projects",
  },
];

const whyData = [
  { icon: "💰", title: "Most Affordable",       desc: "Lowest project cost in Coimbatore — hardware + code + docs, zero hidden charges." },
  { icon: "🎓", title: "IEEE 2025-26 Projects",  desc: "Latest IEEE base paper projects with real-world implementation across all domains." },
  { icon: "📋", title: "100% Documentation",    desc: "Project report, PPT, synopsis, IEEE paper — everything for college submission." },
  { icon: "🎤", title: "Viva Support",           desc: "Mock viva, review PPT, and technical coaching for all college presentations." },
  { icon: "🏢", title: "Internship Certificate", desc: "Verified internship certificate with live project experience — best for placement." },
  { icon: "🚀", title: "Placement Guidance",    desc: "Resume building, mock interviews, and job referrals for all students." },
];

const reviews = [
  { text: "Best final year project center in Coimbatore! Real-time IEEE training and complete documentation support. Highly recommended!", name: "Arun K.",    branch: "BE CSE" },
  { text: "Completed my IoT project with excellent practical guidance. Step-by-step mentoring. Best embedded center near Gandhipuram!",    name: "Sam S.",   branch: "BE ECE" },
  { text: "Amazing AI and Python project support with full ML implementation and viva prep. Best software project center in Coimbatore!",  name: "Karthik R.", branch: "ME IT" },
  { text: "Mechanical fabrication project completed on time with perfect CAD support. Affordable and professional!",                       name: "Divya M.",   branch: "BE Mechanical" },
];

const faqs = [
  { q: "Which is the best final year project center in Coimbatore?",        a: "CODEX PROJECT is the best final year project center in Coimbatore, offering IEEE 2025-26 projects, internship training, and placement support for BE, ME, BSc, MCA, and Diploma students at Balaji Complex, Gandhipuram." },
  { q: "Do you provide internship for engineering students in Coimbatore?",  a: "Yes! We offer summer and semester internships with live project experience, verified internship certificate, and placement support — top internship training center in Coimbatore." },
  { q: "What project domains are available at Codex Project?",              a: "Software (Python, AI, ML, MERN, Django, PHP), IoT & Embedded (Arduino, Raspberry Pi, NodeMCU), Mechanical & Automation (CAD, Fabrication, Robotics), Mobile App (Flutter, Android), and IEEE 2025-26 certified projects." },
  { q: "Do you provide documentation and viva support?",                    a: "Yes, 100% documentation — IEEE format project report, synopsis, PPT, and complete viva preparation guidance for all reviews and final year presentations." },
  { q: "How much does a final year project cost?",                          a: "We offer the most affordable final year project pricing in Coimbatore — no hidden charges. Contact us at Balaji Complex, Gandhipuram for a free consultation and custom quote." },
  { q: "Do you provide ready-made projects with source code in Coimbatore?", a: "Yes, CODEX PROJECT provides ready-made projects with complete source code, deployment, and college-ready documentation for all domains — software, IoT, embedded, and mechanical." },
  { q: "Which areas in Coimbatore do you serve?",                          a: "We serve students from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur, Ukkadam, Saibaba Colony, Vadavalli, and all Coimbatore engineering college zones." },
];

const kwLinks = [
  ["AI Projects Coimbatore",                "/software-projects"],
  ["Machine Learning Projects Coimbatore",  "/software-projects"],
  ["IoT Projects Coimbatore",               "/iot-projects"],
  ["Embedded Projects Coimbatore",          "/embedded-projects"],
  ["Mechanical Projects Coimbatore",        "/mechanical-projects"],
  ["IEEE Projects Coimbatore 2025-26",      "/projects"],
  ["Internship Training Coimbatore",        "/blog"],
  ["Python Projects Coimbatore",            "/software-projects"],
  ["MERN Stack Projects Coimbatore",        "/software-projects"],
  ["Final Year Projects 2025-26",           "/projects"],
  ["Flutter Projects Coimbatore",           "/software-projects"],
  ["Arduino Projects Coimbatore",           "/iot-projects"],
  ["CSE Project Center Coimbatore",         "/software-projects"],
  ["IT Project Center Coimbatore",          "/software-projects"],
  ["Project Center Gandhipuram",            "/"],
  ["Ready Made Project Coimbatore",         "/projects"],
  ["Project with Certificate Coimbatore",   "/blog"],
  ["Low Cost Project Center Coimbatore",    "/"],
];

const floatingChips = ["Python", "AI/ML", "Arduino", "React", "MERN", "IoT", "Flutter", "IEEE"];
const floatPositions = [
  { top: "14%", left: "4%"  },
  { top: "22%", right: "5%" },
  { top: "55%", left: "2%"  },
  { top: "58%", right: "4%" },
  { top: "38%", left: "1%"  },
  { top: "80%", left: "7%"  },
  { top: "32%", right: "2%" },
  { top: "82%", right: "6%" },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState("0+");
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(target.replace(/\D/g, ""));
    const suffix  = target.replace(/[0-9]/g, "");
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric) + suffix);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);
  return count;
};

const StatCard = ({ stat, animate }) => {
  const isStatic = !stat.num.match(/\d{2,}/);
  const count = useCountUp(isStatic ? "0" : stat.num, 1800, animate);
  return (
    <div className="cp-stat-card">
      <span className="cp-stat-icon">{stat.icon}</span>
      <span className="cp-stat-num">{isStatic ? stat.num : count}</span>
      <span className="cp-stat-lbl">{stat.label}</span>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Home = () => {
  const statsRef            = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [openFaq,      setOpenFaq]      = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".cp-reveal");
    const io  = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("cp-in"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stats = [
    { num: "500+",  label: "Projects Delivered",  icon: "🚀" },
    { num: "1000+", label: "Happy Students",       icon: "🎓" },
    { num: "5★",  label: "Google Rating",        icon: "⭐" },
    { num: "15+",    label: "Project Domains",      icon: "🎯" },
  ];

  return (
    <div className="cp-home">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="cp-hero" aria-labelledby="hero-h1">
        <div className="cp-hero-bg">
          <div className="cp-grid-bg" />
          <div className="cp-orb cp-orb1" />
          <div className="cp-orb cp-orb2" />
          <div className="cp-orb cp-orb3" />
          <div className="cp-scanline" />
        </div>

        <div className="cp-float-wrap" aria-hidden="true">
          {floatingChips.map((chip, i) => (
            <span key={chip} className="cp-ftag" style={{ ...floatPositions[i], animationDelay: `${i * 0.4}s` }}>
              {chip}
            </span>
          ))}
        </div>

        <div className="cp-container cp-hero-inner">
          <div className="cp-hero-chip">
            <span className="cp-chip-dot" />
            IEEE 2025-26 Projects Now Available
          </div>

          <h1 id="hero-h1" className="cp-hero-h1">
            Best Final Year<br />
            <span className="cp-grad-txt">Project Center in Coimbatore</span>
          </h1>

          <p className="cp-hero-sub">
            <strong>CODEX PROJECT</strong> — Coimbatore's most trusted center for{" "}
            <strong>IEEE projects, Python, ML/DL, PHP, Java, .Net, Node.js, IoT, Embedded, Mechanical</strong>  &amp; Web
            development with internship training &amp; placement support.
          </p>

          <div className="cp-trust-wrap">
            {["IEEE Certified", "Affordable Pricing", "Internship Support", "Viva Prep", "100% Documentation", "Source Code Included", "Ready-Made Projects"].map((b) => (
              <span key={b} className="cp-trust-pill">✔ {b}</span>
            ))}
          </div>

          <div className="cp-hero-btns">
            <a href="tel:+91XXXXXXXXXX" className="cp-btn cp-btn-pri" aria-label="Call CODEX PROJECT Coimbatore">
              📞 Call Now – Free Consultation
            </a>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn cp-btn-out"
              aria-label="Review CODEX PROJECT on Google"
            >
              ⭐ Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* ══ TECH TICKER ═══════════════════════════════════════════════════════ */}
      <div className="cp-ticker-bar" aria-label="Technologies we support">
        <div className="cp-ticker-lbl">Technologies →</div>
        <div className="cp-ticker-scroll">
          <div className="cp-ticker-inner">
            {[...techStacks, ...techStacks].map((t, i) => (
              <div key={i} className="cp-ticker-item">
                <span className="cp-t-icon">{t.icon}</span>
                <span className="cp-t-name" style={{ color: t.color }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ STATS ══════════════════════════════════════════════════════════════ */}
      <section className="cp-stats-sec cp-reveal" ref={statsRef} aria-labelledby="stats-h2">
        <h2 id="stats-h2" className="cp-sr-only">CODEX PROJECT Numbers</h2>
        <div className="cp-container">
          <div className="cp-stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══════════════════════════════════════════════════════════════ */}
      <section className="cp-about cp-reveal" aria-labelledby="about-h2">
        <div className="cp-container cp-about-grid">
          <div className="cp-about-txt">
            <span className="cp-eyebrow">About Us</span>
            <h2 id="about-h2" className="cp-sec-title">
              Top-Rated Final Year<br />Project Center in Coimbatore
            </h2>
            <p>
              <strong>CODEX PROJECT</strong> is Coimbatore's most trusted{" "}
              <strong>final year project center</strong>, located at{" "}
              <strong>2nd Floor, Balaji Complex, Gandhipuram</strong>. We bridge the gap between
              academics and industry through real-time project development,{" "}
              <strong>IEEE 2025-26 base paper implementation</strong>, and{" "}
              <strong>internship-based training</strong>.
            </p>
            <p>
              Thousands of students from{" "}
              <strong>Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur, Ukkadam,
              Saibaba Colony</strong>, and across Coimbatore have successfully completed their
              final year projects with our expert guidance — with complete source code,
              documentation, and viva support.
            </p>
            <div className="cp-highlights">
              {[
                "BE / ME / MCA / BSc / Diploma — All Branches",
                "IEEE 2025-26 Certified Projects",
                "Real Working Models & Live Demos",
                "Most Affordable Pricing in Coimbatore",
              ].map((h) => (
                <div key={h} className="cp-hi">
                  <span className="cp-hi-dot" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Code window */}
          <div className="cp-code-win">
            <div className="cp-code-bar">
              <span className="cp-cd" style={{ background: "#FF5F56" }} />
              <span className="cp-cd" style={{ background: "#FFBD2E" }} />
              <span className="cp-cd" style={{ background: "#27C93F" }} />
              <span className="cp-code-file">codex_project.py</span>
            </div>
            <div className="cp-code-body">
              <div><span className="cp-kw">class</span> <span className="cp-cls">CodexProject</span>:</div>
              <div>{"  "}<span className="cp-kw">def</span> <span className="cp-fn">__init__</span>(self):</div>
              <div>{"    "}self.name {"= "}<span className="cp-str">"CODEX PROJECT"</span></div>
              <div>{"    "}self.location {"= "}<span className="cp-str">"Gandhipuram, CBE"</span></div>
              <div>{"    "}self.domains = [<span className="cp-str">"AI"</span>, <span className="cp-str">"IoT"</span>,</div>
              <div>{"      "}<span className="cp-str">"Embedded"</span>, <span className="cp-str">"Mechanical"</span>]</div>
              <div>{"    "}self.rating {"= "}<span className="cp-num">5</span> <span className="cp-cm"># ⭐ Google</span></div>
              <div>{"    "}self.students {"= "}<span className="cp-str">"1000+"</span></div>
              <div>{"  "}<span className="cp-kw">def</span> <span className="cp-fn">get_project</span>(self):</div>
              <div>{"    "}<span className="cp-kw">return</span> <span className="cp-str">"Best in Coimbatore 🚀"</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DOMAINS ════════════════════════════════════════════════════════════ */}
      <section className="cp-domains cp-reveal" aria-labelledby="domains-h2">
        <div className="cp-container">
          <div className="cp-sec-head">
            <span className="cp-eyebrow">What We Offer</span>
            <h2 id="domains-h2" className="cp-sec-title">Final Year Project Domains – Coimbatore</h2>
            <p className="cp-sec-sub">
              Complete project support across all major engineering domains — source code,
              documentation, PPT &amp; viva guidance included
            </p>
          </div>
          <div className="cp-domains-grid">
            {domains.map((d, i) => (
              <a
                key={i}
                href={d.link}
                className="cp-d-card"
                style={{ "--accent": d.color, "--accent-bg": d.bg }}
                aria-label={d.seo}
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="cp-d-card-inner">
                  <div className="cp-d-icon-box">{d.icon}</div>
                  <div className="cp-d-title" itemProp="name">{d.title}</div>
                  <meta itemProp="areaServed" content="Coimbatore" />
                  <div className="cp-d-desc" itemProp="description">{d.desc}</div>
                  <div className="cp-d-tags">
                    {d.tags.map((t) => <span key={t} className="cp-d-tag">{t}</span>)}
                  </div>
                </div>
                <span className="cp-d-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK GRID ════════════════════════════════════════════════════ */}
      <section className="cp-tech-sec cp-reveal" aria-labelledby="tech-h2">
        <div className="cp-container">
          <div className="cp-sec-head">
            <span className="cp-eyebrow">Technologies</span>
            <h2 id="tech-h2" className="cp-sec-title">
              All Languages &amp; Technologies — We Support Everything
            </h2>
            <p className="cp-sec-sub">
              From Python &amp; AI to Arduino &amp; FPGA — we develop final year projects in
              every language and framework in Coimbatore
            </p>
          </div>
          <div className="cp-tech-grid">
            {techStacks.map((t, i) => (
              <div key={i} className="cp-tc" style={{ "--tc": t.color }}>
                <span className="cp-tc-icon">{t.icon}</span>
                <span className="cp-tc-name">{t.name}</span>
                <div className="cp-tc-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ═════════════════════════════════════════════════════════ */}
      <section className="cp-why cp-reveal" aria-labelledby="why-h2">
        <div className="cp-container">
          <div className="cp-sec-head">
            <span className="cp-eyebrow">Why Us</span>
            <h2 id="why-h2" className="cp-sec-title">
              Why CODEX PROJECT is the Best Project Center in Coimbatore
            </h2>
          </div>
          <div className="cp-why-grid">
            {whyData.map((w, i) => (
              <div key={i} className="cp-w-card">
                <span className="cp-w-icon">{w.icon}</span>
                <h3 className="cp-w-title">{w.title}</h3>
                <p className="cp-w-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOFTWARE PROJECT CENTER ═══════════════════════════════════════════ */}
      <section className="cp-detail-sec cp-reveal" aria-labelledby="software-h2" style={{ background: "#f8f3e4" }}>
        <div className="cp-container">
          <div className="cp-detail-inner">
            <div className="cp-detail-badge" style={{ "--badge-color": "#d69200" }}>💻</div>
            <div className="cp-detail-content">
              <span className="cp-eyebrow">Software Projects</span>
              <h2 id="software-h2" className="cp-sec-title">
                Best Software Project Center in Coimbatore
              </h2>
              <p className="cp-detail-desc">
                Looking for the <strong>best software project center in Coimbatore</strong>? Codex Project
                provides real-time software projects using <strong>PHP, Python, Django, Machine Learning,
                Deep Learning, MERN Stack, Java, and .NET</strong> — complete with source code, training,
                testing, and deployment support.
              </p>
              <p className="cp-detail-desc">
                Our software projects follow the latest <strong>IEEE 2025-26 base papers</strong> and are
                customizable to your college requirements. We also support students who bring their own
                project ideas with full implementation assistance and ready-made project options.
              </p>
              <ul className="cp-checklist">
                {[
                  "Python AI/ML project center Coimbatore",
                  "MERN Stack web development projects",
                  "Django & Flask backend projects",
                  "React & Node.js full-stack projects",
                  "Deep Learning & NLP projects Coimbatore",
                  "Data Science & Analytics projects",
                ].map((item) => (
                  <li key={item} className="cp-check-item">
                    <span className="cp-check-icon">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MECHANICAL PROJECT CENTER ══════════════════════════════════════════ */}
      <section className="cp-detail-sec cp-reveal" aria-labelledby="mechanical-h2" style={{ background: "#e2f0fd85" }}>
        <div className="cp-container">
          <div className="cp-detail-inner cp-detail-reverse">
            <div className="cp-detail-badge" style={{ "--badge-color": "#10B981" }}>⚙️</div>
            <div className="cp-detail-content">
              <span className="cp-eyebrow">Mechanical Projects</span>
              <h2 id="mechanical-h2" className="cp-sec-title">
                Mechanical Project Center in Coimbatore – Fabrication &amp; CAD Design
              </h2>
              <p className="cp-detail-desc">
                Codex Project is a leading <strong>mechanical project center in Coimbatore</strong> offering
                fabrication, CAD/CAM design, robotics, drone projects, and automation systems. Our
                experienced mentors guide <strong>ME, BE Mechanical, and Automobile students</strong> through
                every stage — from ideation to final presentation.
              </p>
              <ul className="cp-checklist">
                {[
                  "CAD/CAM & SolidWorks design projects",
                  "Fabrication and prototype building",
                  "Robotics and automation projects",
                  "Renewable energy and solar projects",
                  "FEA / ANSYS simulation projects",
                ].map((item) => (
                  <li key={item} className="cp-check-item">
                    <span className="cp-check-icon" style={{ "--check-color": "#10B981" }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ IOT / EMBEDDED ════════════════════════════════════════════════════ */}
      <section className="cp-detail-sec cp-reveal" aria-labelledby="iot-h2" style={{ background: "#f8f3e4" }}>
        <div className="cp-container">
          <div className="cp-detail-inner">
            <div className="cp-detail-badge" style={{ "--badge-color": "#06B6D4" }}>📡</div>
            <div className="cp-detail-content">
              <span className="cp-eyebrow">IoT &amp; Embedded</span>
              <h2 id="iot-h2" className="cp-sec-title">
                Embedded Systems &amp; IoT Project Center in Coimbatore
              </h2>
              <p className="cp-detail-desc">
                As the <strong>best IoT project center in Coimbatore</strong>, we help{" "}
                <strong>ECE, EEE, and EIE students</strong> build real-time embedded systems and Internet
                of Things projects using <strong>Arduino, Raspberry Pi, NodeMCU</strong>, and cloud
                platforms like <strong>AWS IoT and Google Firebase</strong>.
              </p>
              <ul className="cp-checklist">
                {[
                  "Smart home & smart city IoT projects",
                  "Health monitoring embedded systems",
                  "Agricultural IoT projects Coimbatore",
                  "Industrial automation projects",
                  "GSM / GPS based tracking projects",
                  "VLSI & FPGA projects",
                ].map((item) => (
                  <li key={item} className="cp-check-item">
                    <span className="cp-check-icon" style={{ "--check-color": "#06B6D4" }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERNSHIP ════════════════════════════════════════════════════════ */}
      <section className="cp-detail-sec cp-reveal" aria-labelledby="internship-h2" style={{ background: "#e2f0fd85" }}>
        <div className="cp-container">
          <div className="cp-detail-inner cp-detail-reverse">
            <div className="cp-detail-badge" style={{ "--badge-color": "#8B5CF6" }}>🏢</div>
            <div className="cp-detail-content">
              <span className="cp-eyebrow">Internship Training</span>
              <h2 id="internship-h2" className="cp-sec-title">
                Internship Training Center in Coimbatore with Project Support
              </h2>
              <p className="cp-detail-desc">
                Codex Project is also a top <strong>internship training center in Coimbatore</strong>. We
                offer summer internships, semester-based internships, and industrial training programs in{" "}
                <strong>Python, AI/ML, Web Development, IoT, and Embedded Systems</strong>.
              </p>
              <p className="cp-detail-desc">
                Students receive a <strong>verified internship certificate</strong>, live project experience,
                and placement guidance — making Codex Project the{" "}
                <strong>best internship center for engineering students in Coimbatore</strong>.
              </p>
              <ul className="cp-checklist">
                {[
                  "Summer internship for engineering students",
                  "Internship certificate with live project",
                  "Python & AI internship training",
                  "Web development internship Coimbatore",
                  "IoT internship with hands-on training",
                ].map((item) => (
                  <li key={item} className="cp-check-item">
                    <span className="cp-check-icon" style={{ "--check-color": "#8B5CF6" }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ════════════════════════════════════════════════════════════ */}
      <section className="cp-reviews cp-reveal" aria-labelledby="reviews-h2">
        <div className="cp-container">
          <div className="cp-sec-head">
            <span className="cp-eyebrow">Student Reviews</span>
            <h2 id="reviews-h2" className="cp-sec-title">
              What Engineering Students Say – CODEX PROJECT Coimbatore
            </h2>
          </div>
          <div className="cp-reviews-grid">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="cp-rv-card"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="cp-rv-stars">
                  {"⭐".repeat(5)}
                  <meta itemProp="reviewRating" content="5" />
                </div>
                <p className="cp-rv-txt" itemProp="reviewBody">"{r.text}"</p>
                <div className="cp-rv-author">
                  <div className="cp-rv-av">{r.name[0]}</div>
                  <div>
                    <div className="cp-rv-name" itemProp="author">{r.name}</div>
                    <div className="cp-rv-branch">{r.branch}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn cp-btn-pri"
              aria-label="View all reviews on Google"
              style={{ color: "var(--cp-navy)" }}
            >
              ⭐ View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════════════ */}
      <section className="cp-faq cp-reveal" aria-labelledby="faq-h2">
        <div className="cp-container">
          <div className="cp-sec-head">
            <span className="cp-eyebrow">FAQ</span>
            <h2 id="faq-h2" className="cp-sec-title">
              Frequently Asked Questions – Final Year Projects Coimbatore
            </h2>
          </div>
          <div className="cp-faq-wrap">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`cp-faq-item${openFaq === i ? " cp-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="cp-faq-q">
                  <h3 className="cp-faq-question">{f.q}</h3>
                  <span className="cp-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </div>
                <div className="cp-faq-ans">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION ═══════════════════════════════════════════════════════════ */}
      <section className="cp-location cp-reveal" aria-labelledby="loc-h2">
        <div className="cp-container">
          <div className="cp-sec-head">
            <span className="cp-eyebrow">Location</span>
            <h2 id="loc-h2" className="cp-sec-title">
              Visit CODEX PROJECT – Gandhipuram, Coimbatore
            </h2>
            <p className="cp-sec-sub">
              📍{" "}
              <strong>
                2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road,
                Gandhipuram, Coimbatore – 641012
              </strong>
            </p>
          </div>
          <div className="cp-map-wrap">
            <iframe
              src="https://www.google.com/maps?q=Codex+Project+Coimbatore&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Codex Project location map – final year project center in Coimbatore"
              aria-label="Google Maps showing Codex Project location"
            />
          </div>
        </div>
      </section>

      {/* ══ KEYWORD CLUSTER ════════════════════════════════════════════════════ */}
      <div className="cp-kw-sec" aria-label="Explore our services">
        <div className="cp-container">
          <div className="cp-kw-lbl">Explore Our Services</div>
          <div className="cp-kw-cloud">
            {kwLinks.map(([label, href]) => (
              <a key={label} href={href} className="cp-kw-tag" aria-label={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CTA ════════════════════════════════════════════════════════════════ */}
      <section className="cp-cta-sec" aria-labelledby="cta-h2">
        <div className="cp-cta-blob" />
        <div className="cp-container cp-cta-inner">
          <h2 id="cta-h2" className="cp-cta-title">
            Start Your Final Year Project<br />
            <span className="cp-grad-txt">Today</span>
          </h2>
          <p className="cp-cta-sub">
            Join <strong>1000+ engineering students</strong> who trusted CODEX PROJECT —
            the <strong>best final year project center in Coimbatore</strong> — for IEEE
            2025-26 projects, internship training, and placement support.
          </p>
          <p className="cp-cta-addr">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <div className="cp-cta-btns">
            <a
              href="tel:+91XXXXXXXXXX"
              className="cp-btn-cta cp-btn-cta-p"
              aria-label="Call CODEX PROJECT now"
            >
              📞 Contact Now – Free Consultation
            </a>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn-cta cp-btn-cta-o"
              aria-label="Review CODEX PROJECT on Google"
            >
              ⭐ Review Us on Google...
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;