import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "name": "CODEX PROJECT",
  "description": "Best final year project center in Coimbatore offering IEEE projects, internship training, and placement support.",
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
    { "@type": "Question", "name": "Which is the best final year project center in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is the best final year project center in Coimbatore offering IEEE 2024-25 projects, internship training, and placement support for BE, ME, BSc, MCA, and Diploma students." } },
    { "@type": "Question", "name": "Do you provide internship with project development in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT provides internship training with live project experience and verified certificate for engineering students in Coimbatore." } },
    { "@type": "Question", "name": "What project domains are available at Codex Project Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Software (Python, AI, ML, MERN), IoT & Embedded (Arduino, Raspberry Pi), Mechanical & Automation, Mobile App Development, and IEEE certified projects." } },
    { "@type": "Question", "name": "How much does a final year project cost at Codex Project?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT offers the most affordable final year project pricing in Coimbatore. Contact us for a free consultation and custom quote." } },
    { "@type": "Question", "name": "Do you support viva and documentation for final year projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% documentation support including IEEE paper format, project report, PPT, and viva preparation for all projects." } },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const techStacks = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
  { name: "Arduino", icon: "🔌", color: "#00979D" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Java", icon: "☕", color: "#ED8B00" },
  { name: "Flutter", icon: "🦋", color: "#02569B" },
  { name: "Raspberry Pi", icon: "🍓", color: "#C51A4A" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28" },
  { name: "AWS IoT", icon: "☁️", color: "#FF9900" },
  { name: "MATLAB", icon: "📊", color: "#0076A8" },
  { name: "Android", icon: "🤖", color: "#3DDC84" },
  { name: "PHP", icon: "🐘", color: "#777BB4" },
  { name: ".NET", icon: "🔷", color: "#512BD4" },
  { name: "OpenCV", icon: "👁️", color: "#5C3EE8" },
];

const domains = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    seo: "AI ML Projects Coimbatore",
    desc: "Deep Learning, NLP, Computer Vision, Data Science — Python, TensorFlow, PyTorch",
    tags: ["Python", "TensorFlow", "NLP", "CNN"],
    color: "#6C63FF",
    bg: "rgba(108,99,255,0.08)",
    link: "/services/software-projects",
  },
  {
    icon: "🌐",
    title: "Web & Mobile Apps",
    seo: "Web Mobile App Projects Coimbatore",
    desc: "MERN Stack, Django, React, Flutter, Android — full-stack deployment included",
    tags: ["React", "Node.js", "Flutter", "MongoDB"],
    color: "#00C9A7",
    bg: "rgba(0,201,167,0.08)",
    link: "/services/software-projects",
  },
  {
    icon: "📡",
    title: "IoT & Embedded",
    seo: "IoT Embedded Projects Coimbatore",
    desc: "Arduino, Raspberry Pi, NodeMCU, ESP32 — cloud & sensor integration",
    tags: ["Arduino", "ESP32", "Firebase", "MQTT"],
    color: "#FF6B6B",
    bg: "rgba(255,107,107,0.08)",
    link: "/services/iot-projects",
  },
  {
    icon: "⚙️",
    title: "Mechanical & Automation",
    seo: "Mechanical Projects Coimbatore",
    desc: "Fabrication, CAD/CAM, Robotics, ANSYS, SolidWorks — real working models",
    tags: ["SolidWorks", "ANSYS", "CAD/CAM", "Robotics"],
    color: "#F7B731",
    bg: "rgba(247,183,49,0.08)",
    link: "/services/mechanical-projects",
  },
  {
    icon: "💻",
    title: "Java & .NET Projects",
    seo: "Java Dotnet Projects Coimbatore",
    desc: "Spring Boot, Hibernate, ASP.NET Core — enterprise-grade applications",
    tags: ["Java", "Spring Boot", ".NET", "SQL"],
    color: "#45B7D1",
    bg: "rgba(69,183,209,0.08)",
    link: "/services/software-projects",
  },
  {
    icon: "📄",
    title: "IEEE Certified Projects",
    seo: "IEEE Projects Coimbatore 2024-25",
    desc: "Latest IEEE 2024-25 base papers — all domains with publication support",
    tags: ["IEEE 2025", "Base Paper", "All Domains"],
    color: "#A8E6CF",
    bg: "rgba(168,230,207,0.08)",
    link: "/projects",
  },
];

const stats = [
  { num: "500+", label: "Projects Delivered", icon: "🚀" },
  { num: "1000+", label: "Happy Students", icon: "🎓" },
  { num: "4.9★", label: "Google Rating", icon: "⭐" },
  { num: "6+", label: "Project Domains", icon: "🎯" },
];

const reviews = [
  { stars: 5, text: "Best final year project center in Coimbatore! Real-time IEEE training and complete documentation support. Highly recommended!", name: "Arun K.", branch: "BE CSE" },
  { stars: 5, text: "Completed my IoT project with excellent practical guidance. Step-by-step mentoring. Best embedded center near Gandhipuram!", name: "Priya S.", branch: "BE ECE" },
  { stars: 5, text: "Amazing AI and Python project support with full ML implementation and viva prep. Best software project center in Coimbatore!", name: "Karthik R.", branch: "ME IT" },
  { stars: 5, text: "Mechanical fabrication project completed on time with perfect CAD support. Affordable and professional!", name: "Divya M.", branch: "BE Mechanical" },
];

const faqs = [
  { q: "Which is the best final year project center in Coimbatore?", a: "CODEX PROJECT is the best final year project center in Coimbatore, offering IEEE 2024-25 projects, internship training, and placement support for BE, ME, BSc, MCA, and Diploma students at Balaji Complex, Gandhipuram." },
  { q: "Do you provide internship for engineering students in Coimbatore?", a: "Yes! We offer summer and semester internships with live project experience, verified internship certificate, and placement support — top internship training center in Coimbatore." },
  { q: "What project domains are available at Codex Project?", a: "Software (Python, AI, ML, MERN, Django), IoT & Embedded (Arduino, Raspberry Pi, NodeMCU), Mechanical & Automation (CAD, Fabrication, Robotics), Mobile App, and IEEE certified projects." },
  { q: "Do you provide documentation and viva support?", a: "Yes, 100% documentation — IEEE format project report, synopsis, PPT, and complete viva preparation guidance for all reviews and final year presentations." },
  { q: "How much does a final year project cost?", a: "We offer the most affordable final year project pricing in Coimbatore — no hidden charges. Contact us at Balaji Complex, Gandhipuram for a free consultation and custom quote." },
  { q: "Which areas in Coimbatore do you serve?", a: "We serve students from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur, Ukkadam, Vadavalli, and all Coimbatore engineering college zones." },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numeric) + suffix);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);
  return count || "0";
};

const StatCard = ({ stat, animate }) => {
  const count = useCountUp(stat.num, 1800, animate);
  return (
    <div className="cp-stat-card">
      <span className="cp-stat-icon">{stat.icon}</span>
      <h3 className="cp-stat-num">{count}</h3>
      <p className="cp-stat-label">{stat.label}</p>
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const Home = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll reveal
  useEffect(() => {
    const revealEls = document.querySelectorAll(".cp-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("cp-visible"); }),
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="cp-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="cp-hero" aria-labelledby="hero-h1">
        <div className="cp-hero-bg">
          <div className="cp-hero-grid"></div>
          <div className="cp-hero-glow cp-hero-glow-1"></div>
          <div className="cp-hero-glow cp-hero-glow-2"></div>
        </div>

        <div className="cp-container cp-hero-inner">
          <div className="cp-hero-badge">
            <span className="cp-badge-dot"></span>
            IEEE 2024-25 Projects Available
          </div>

          <h1 id="hero-h1" className="cp-hero-h1">
            Best Final Year<br />
            <span className="cp-hero-accent">Project Center</span><br />
            in Coimbatore
          </h1>

          <p className="cp-hero-sub">
            <strong>CODEX PROJECT</strong> — Coimbatore's most trusted center for{" "}
            <strong>IEEE projects, AI/ML, IoT, Embedded, Mechanical</strong> &amp; Web development
            with internship training &amp; placement support.
          </p>

          <p className="cp-hero-location">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>

          <div className="cp-hero-badges">
            {["IEEE Certified", "Affordable Pricing", "Internship Support", "Viva Prep", "100% Documentation", "Placement Guidance"].map((b) => (
              <span key={b} className="cp-trust-badge">✔ {b}</span>
            ))}
          </div>

          <div className="cp-hero-actions">
            <a href="tel:+91XXXXXXXXXX" className="cp-btn cp-btn-primary" aria-label="Call CODEX PROJECT Coimbatore">
              📞 Call Now – Free Consultation
            </a>
            <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="cp-btn cp-btn-outline" aria-label="Review CODEX PROJECT on Google">
              ⭐ Review on Google
            </a>
          </div>
        </div>

        {/* Floating tech chips */}
        <div className="cp-floating-chips" aria-hidden="true">
          {["Python", "AI/ML", "Arduino", "React", "MERN", "IoT", "Flutter", "IEEE"].map((chip, i) => (
            <span key={chip} className="cp-chip" style={{ "--delay": `${i * 0.4}s`, "--i": i }}>{chip}</span>
          ))}
        </div>
      </section>

      {/* ══ TECH STACK TICKER ════════════════════════════════════════════════ */}
      <section className="cp-ticker-section" aria-label="Technologies we support">
        <div className="cp-ticker-label">Technologies We Support →</div>
        <div className="cp-ticker-track">
          <div className="cp-ticker-inner">
            {[...techStacks, ...techStacks].map((t, i) => (
              <div key={i} className="cp-ticker-item">
                <span className="cp-ticker-icon">{t.icon}</span>
                <span className="cp-ticker-name" style={{ color: t.color }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════════════ */}
      <section className="cp-stats-section cp-reveal" ref={statsRef} aria-labelledby="stats-h2">
        <h2 id="stats-h2" className="cp-sr-only">CODEX PROJECT Numbers – Final Year Project Center Coimbatore</h2>
        <div className="cp-container">
          <div className="cp-stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ════════════════════════════════════════════════════════════ */}
      <section className="cp-about cp-reveal" aria-labelledby="about-h2">
        <div className="cp-container cp-about-inner">
          <div className="cp-about-text">
            <span className="cp-section-eyebrow">About Us</span>
            <h2 id="about-h2" className="cp-section-title">
              Top-Rated Final Year<br />Project Center in Coimbatore
            </h2>
            <p>
              <strong>CODEX PROJECT</strong> is Coimbatore's most trusted{" "}
              <strong>final year project center</strong>, located at{" "}
              <strong>2nd Floor, Balaji Complex, Gandhipuram</strong>. We bridge the gap
              between academics and industry through real-time project development,{" "}
              <strong>IEEE 2024-25 base paper implementation</strong>, and{" "}
              <strong>internship-based training</strong>.
            </p>
            <p>
              Thousands of students from <strong>Peelamedu, Gandhipuram, Saravanampatti,
              RS Puram, Singanallur, Ukkadam</strong>, and across Coimbatore have
              successfully completed their final year projects with our expert guidance.
            </p>
            <div className="cp-about-highlights">
              {["BE / ME / MCA / BSc / Diploma", "IEEE 2024-25 Certified", "Real Working Models", "Affordable Pricing"].map((h) => (
                <div key={h} className="cp-highlight-item">
                  <span className="cp-highlight-dot"></span>
                  {h}
                </div>
              ))}
            </div>
          </div>
          <div className="cp-about-visual">
            <div className="cp-code-window">
              <div className="cp-code-topbar">
                <span className="cp-dot red"></span>
                <span className="cp-dot yellow"></span>
                <span className="cp-dot green"></span>
                <span className="cp-code-title">codex_project.py</span>
              </div>
              <div className="cp-code-body">
                <p><span className="cp-kw">class</span> <span className="cp-cls">CodexProject</span>:</p>
                <p>&nbsp;&nbsp;<span className="cp-kw">def</span> <span className="cp-fn">__init__</span>(self):</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;self.location = <span className="cp-str">"Gandhipuram, CBE"</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;self.domains = [<span className="cp-str">"AI"</span>, <span className="cp-str">"IoT"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="cp-str">"Embedded"</span>, <span className="cp-str">"Mechanical"</span>]</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;self.rating = <span className="cp-num">4.9</span> <span className="cp-cm"># ⭐</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;self.students = <span className="cp-num">1000</span><span className="cp-str">+"</span></p>
                <p>&nbsp;&nbsp;<span className="cp-kw">def</span> <span className="cp-fn">get_project</span>(self):</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cp-kw">return</span> <span className="cp-str">"Best in Coimbatore 🚀"</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DOMAINS ══════════════════════════════════════════════════════════ */}
      <section className="cp-domains cp-reveal" aria-labelledby="domains-h2">
        <div className="cp-container">
          <div className="cp-section-header">
            <span className="cp-section-eyebrow">What We Offer</span>
            <h2 id="domains-h2" className="cp-section-title">
              Final Year Project Domains – Coimbatore
            </h2>
            <p className="cp-section-sub">
              Complete project support across all major engineering domains — source code,
              documentation, PPT, and viva guidance included
            </p>
          </div>
          <div className="cp-domains-grid">
            {domains.map((d, i) => (
              <a
                href={d.link}
                key={i}
                className="cp-domain-card"
                style={{ "--accent": d.color, "--bg": d.bg, "--delay": `${i * 0.1}s` }}
                aria-label={d.seo}
                itemScope itemType="https://schema.org/Service"
              >
                <div className="cp-domain-icon-wrap">
                  <span className="cp-domain-icon">{d.icon}</span>
                </div>
                <h3 className="cp-domain-title" itemProp="name">{d.title}</h3>
                <meta itemProp="areaServed" content="Coimbatore" />
                <p className="cp-domain-desc" itemProp="description">{d.desc}</p>
                <div className="cp-domain-tags">
                  {d.tags.map((t) => (
                    <span key={t} className="cp-domain-tag">{t}</span>
                  ))}
                </div>
                <span className="cp-domain-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK GRID ══════════════════════════════════════════════════ */}
      <section className="cp-tech-section cp-reveal" aria-labelledby="tech-h2">
        <div className="cp-container">
          <div className="cp-section-header">
            <span className="cp-section-eyebrow">Technologies</span>
            <h2 id="tech-h2" className="cp-section-title">
              All Languages &amp; Technologies – We Support Everything
            </h2>
            <p className="cp-section-sub">
              From Python &amp; AI to Arduino &amp; FPGA — we develop final year projects
              in every language and framework in Coimbatore
            </p>
          </div>
          <div className="cp-tech-grid">
            {techStacks.map((t, i) => (
              <div
                key={i}
                className="cp-tech-card"
                style={{ "--tech-color": t.color, "--delay": `${i * 0.05}s` }}
              >
                <span className="cp-tech-icon">{t.icon}</span>
                <span className="cp-tech-name">{t.name}</span>
                <div className="cp-tech-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ══════════════════════════════════════════════════════ */}
      <section className="cp-why cp-reveal" aria-labelledby="why-h2">
        <div className="cp-container">
          <div className="cp-section-header">
            <span className="cp-section-eyebrow">Why Us</span>
            <h2 id="why-h2" className="cp-section-title">
              Why CODEX PROJECT is the Best Project Center in Coimbatore
            </h2>
          </div>
          <div className="cp-why-grid">
            {[
              { icon: "💰", title: "Most Affordable", desc: "Lowest project cost in Coimbatore — hardware + code + docs, zero hidden charges." },
              { icon: "🎓", title: "IEEE 2024-25 Projects", desc: "Latest IEEE base paper projects with real-world implementation across all domains." },
              { icon: "📋", title: "100% Documentation", desc: "Project report, PPT, synopsis, IEEE paper — everything for college submission." },
              { icon: "🎤", title: "Viva Support", desc: "Mock viva, review PPT, and technical coaching for all college presentations." },
              { icon: "🏢", title: "Internship Certificate", desc: "Verified internship certificate with live project — best for placement." },
              { icon: "🚀", title: "Placement Guidance", desc: "Resume building, mock interviews, and job referrals for all students." },
            ].map((w, i) => (
              <div key={i} className="cp-why-card" style={{ "--delay": `${i * 0.08}s` }}>
                <span className="cp-why-icon">{w.icon}</span>
                <h3 className="cp-why-title">{w.title}</h3>
                <p className="cp-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ════════════════════════════════════════════════════════ */}
      <section className="cp-reviews cp-reveal" aria-labelledby="reviews-h2">
        <div className="cp-container">
          <div className="cp-section-header">
            <span className="cp-section-eyebrow">Student Reviews</span>
            <h2 id="reviews-h2" className="cp-section-title">
              What Engineering Students Say – CODEX PROJECT Coimbatore
            </h2>
          </div>
          <div className="cp-reviews-grid">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="cp-review-card"
                style={{ "--delay": `${i * 0.1}s` }}
                itemScope itemType="https://schema.org/Review"
              >
                <div className="cp-review-stars">
                  {"⭐".repeat(r.stars)}
                  <meta itemProp="reviewRating" content={r.stars} />
                </div>
                <p className="cp-review-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="cp-review-author">
                  <div className="cp-review-avatar">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="cp-review-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn cp-btn-primary"
              aria-label="View all reviews on Google"
            >
              ⭐ View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════════ */}
      <section className="cp-faq cp-reveal" aria-labelledby="faq-h2">
        <div className="cp-container cp-faq-inner">
          <div className="cp-section-header">
            <span className="cp-section-eyebrow">FAQ</span>
            <h2 id="faq-h2" className="cp-section-title">
              Frequently Asked Questions – Final Year Projects Coimbatore
            </h2>
          </div>
          <div className="cp-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`cp-faq-item ${openFaq === i ? "cp-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="cp-faq-q">
                  <h3 className="cp-faq-question">{f.q}</h3>
                  <span className="cp-faq-toggle">{openFaq === i ? "−" : "+"}</span>
                </div>
                <div className="cp-faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION ═══════════════════════════════════════════════════════ */}
      <section className="cp-location cp-reveal" aria-labelledby="loc-h2">
        <div className="cp-container">
          <div className="cp-section-header">
            <span className="cp-section-eyebrow">Location</span>
            <h2 id="loc-h2" className="cp-section-title">
              Visit CODEX PROJECT – Gandhipuram, Coimbatore
            </h2>
            <p className="cp-section-sub">
              📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
              Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
            </p>
          </div>
          <div className="cp-map-wrap">
              <iframe
  src="https://www.google.com/maps?q=Codex+Project+Coimbatore&output=embed"
  width="100%"
  height="350"
  style={{ border: 0, borderRadius: "8px" }}
  loading="lazy"
  title="Codex Project location map – final year project center in Coimbatore"
  aria-label="Google Maps showing Codex Project location"
/>
          </div>
        </div>
      </section>

      {/* ══ KEYWORD CLUSTER ════════════════════════════════════════════════ */}
      <section className="cp-keywords" aria-label="Explore our services">
        <div className="cp-container">
          <h2 className="cp-keywords-title">Explore Our Services</h2>
          <div className="cp-keywords-grid">
            {[
              ["AI Projects Coimbatore", "/services/software-projects"],
              ["Machine Learning Projects Coimbatore", "/services/software-projects"],
              ["IoT Projects Coimbatore", "/services/iot-projects"],
              ["Embedded Projects Coimbatore", "/services/embedded-projects"],
              ["Mechanical Projects Coimbatore", "/services/mechanical-projects"],
              ["IEEE Projects Coimbatore", "/projects"],
              ["Internship Training Coimbatore", "/internship"],
              ["Python Projects Coimbatore", "/services/software-projects"],
              ["MERN Stack Projects Coimbatore", "/services/software-projects"],
              ["Final Year Projects 2025", "/projects"],
              ["Flutter Projects Coimbatore", "/services/software-projects"],
              ["Arduino Projects Coimbatore", "/services/iot-projects"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="cp-keyword-tag" aria-label={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════════════ */}
      <section className="cp-cta" aria-labelledby="cta-h2">
        <div className="cp-cta-bg">
          <div className="cp-cta-glow"></div>
        </div>
        <div className="cp-container cp-cta-inner">
          <h2 id="cta-h2" className="cp-cta-title">
            Start Your Final Year Project Today
          </h2>
          <p className="cp-cta-sub">
            Join <strong>1000+ engineering students</strong> who trusted CODEX PROJECT —
            the <strong>best final year project center in Coimbatore</strong> — for IEEE
            projects, internship training, and placement support.
          </p>
          <p className="cp-cta-address">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <div className="cp-cta-actions">
            <a href="tel:+91XXXXXXXXXX" className="cp-btn cp-btn-cta-primary" aria-label="Call CODEX PROJECT now">
              📞 Contact Now – Free Consultation
            </a>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-btn cp-btn-cta-outline"
              aria-label="Review CODEX PROJECT on Google"
            >
              ⭐ Review Us on Google
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;