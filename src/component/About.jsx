import React, { useEffect, useRef, useState } from "react";
import "./About.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About CODEX PROJECT – Best Final Year Project Center in Coimbatore",
  "url": "https://www.codexproject.in/about",
  "description":
    "CODEX PROJECT is the best final year project center in Coimbatore offering IEEE projects, internship training, and placement support for BE, ME, BSc, MCA, and Diploma engineering students.",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
    "foundingLocation": "Coimbatore, Tamil Nadu, India",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
      "addressLocality": "Gandhipuram, Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641012",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "reviewCount": "200",
    },
  },
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { number: "500+",  label: "Projects Completed", icon: "🚀" },
  { number: "1000+", label: "Students Guided",     icon: "🎓" },
  { number: "15+",   label: "Technologies",        icon: "🛠️" },
  { number: "4.9★",  label: "Google Rating",       icon: "⭐" },
];

const domains = [
  {
    icon: "💻",
    title: "Software & AI Projects",
    desc: "Python, Django, MERN Stack, Java, .NET, Android — full-stack web and mobile final year projects with real-time implementation and IEEE 2024-25 base papers for BE, MCA, and IT students.",
    techs: ["Python", "Django", "React", "Node.js", "Java", ".NET", "Android"],
    color: "#3B82F6",
  },
  {
    icon: "🔌",
    title: "Embedded Systems",
    desc: "Arduino, Raspberry Pi, ARM Cortex, ESP32 microcontroller-based final year projects with complete hardware setup, simulation, and documentation for ECE and EEE students.",
    techs: ["Arduino", "Raspberry Pi", "ARM Cortex", "ESP32", "8051", "PIC"],
    color: "#EC4899",
  },
  {
    icon: "🌐",
    title: "IoT Projects",
    desc: "Internet of Things final year projects with AWS IoT, Firebase, MQTT cloud integration — smart agriculture, home automation, health monitoring, and industrial IoT.",
    techs: ["NodeMCU", "MQTT", "AWS IoT", "Firebase", "LoRaWAN", "BLE"],
    color: "#06B6D4",
  },
  {
    icon: "⚙️",
    title: "Mechanical Projects",
    desc: "CAD design, fabrication, robotics, ANSYS simulation, and automation final year projects — real working models with complete documentation for BE and ME Mechanical students.",
    techs: ["SolidWorks", "ANSYS", "CAD/CAM", "Robotics", "AutoCAD"],
    color: "#10B981",
  },
];

const features = [
  {
    icon: "🎯",
    title: "IEEE 2024-25 Certified",
    desc: "Every project is aligned with the latest IEEE base papers — updated annually for current industry relevance.",
  },
  {
    icon: "📋",
    title: "Complete Documentation",
    desc: "Project report, PPT, synopsis, IEEE paper format — 100% documentation support for all college submissions.",
  },
  {
    icon: "🎤",
    title: "Viva Preparation",
    desc: "Mock viva sessions, review PPT coaching, and technical guidance for all college presentations and reviews.",
  },
  {
    icon: "🏢",
    title: "Internship Certificate",
    desc: "Verified internship certificate with live project experience — valuable for placement and resume.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Most competitive project pricing in Coimbatore — hardware, code, and documentation with zero hidden charges.",
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState("0");
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
  const isSimple = !stat.number.match(/\d{2,}/);
  const count    = useCountUp(isSimple ? "0" : stat.number, 1800, animate);
  return (
    <div className="ab-stat-card">
      <span className="ab-stat-icon">{stat.icon}</span>
      <span className="ab-stat-num">{isSimple ? stat.number : count}</span>
      <span className="ab-stat-label">{stat.label}</span>
    </div>
  );
};

// ─── Component ─────────────────────────────────────────────────────────────────
const About = () => {
  const statsRef   = useRef(null);
  const revealRefs = useRef([]);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const statObs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.25 }
    );
    if (statsRef.current) statObs.observe(statsRef.current);

    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("ab-in"); }),
      { threshold: 0.08 }
    );
    revealRefs.current.forEach((el) => { if (el) revealObs.observe(el); });

    return () => { statObs.disconnect(); revealObs.disconnect(); };
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="ab-page">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="ab-hero" aria-labelledby="about-h1">
        <div className="ab-hero-bg">
          <div className="ab-hero-grid" />
          <div className="ab-orb ab-orb1" />
          <div className="ab-orb ab-orb2" />
          <div className="ab-orb ab-orb3" />
        </div>

        <div className="ab-container">
          <div className="ab-hero-inner">
            <div className="ab-hero-badge">
              <span className="ab-badge-dot" />
              Coimbatore's Most Trusted Project Center
            </div>

            <h1 id="about-h1" className="ab-hero-h1">
              About <span className="ab-grad">CODEX PROJECT</span>
            </h1>

            <p className="ab-hero-sub">
              The <strong>best final year project center in Coimbatore</strong> — guiding{" "}
              <strong>BE, ME, BSc, MCA, and Diploma</strong> engineering students through{" "}
              <strong>IEEE-certified projects</strong> in Software, AI, IoT, Embedded Systems,
              and Mechanical Engineering.
            </p>

            <div className="ab-hero-pills">
              {["IEEE 2024-25 Projects", "AI & ML", "IoT & Embedded", "Mechanical", "Internship Certificate", "Viva Support"].map((p) => (
                <span key={p} className="ab-hero-pill">✔ {p}</span>
              ))}
            </div>

            <div className="ab-hero-btns">
              <a href="tel:+918525999002" className="ab-btn ab-btn-pri" aria-label="Call CODEX PROJECT">
                📞 Free Consultation – Call Now
              </a>
              <a href="/contact" className="ab-btn ab-btn-out">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════ */}
      <section
        className="ab-stats-sec ab-reveal"
        ref={(el) => { statsRef.current = el; addRef(el); }}
        aria-labelledby="ab-stats-h2"
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        <h2 id="ab-stats-h2" className="ab-sr-only">CODEX PROJECT by the Numbers</h2>
        <meta itemProp="name" content="CODEX PROJECT" />
        <div className="ab-container">
          <div className="ab-stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT STORY ══════════════════════════════════════════════ */}
      <section className="ab-story-sec ab-reveal" ref={addRef} aria-labelledby="ab-story-h2">
        <div className="ab-container">
          <div className="ab-story-grid">

            {/* Left — text */}
            <div className="ab-story-left">
              <span className="ab-eyebrow">Our Story</span>
              <h2 id="ab-story-h2" className="ab-sec-title">
                How CODEX PROJECT Became<br />Coimbatore's Best Project Center
              </h2>
              <p>
                <strong>CODEX PROJECT</strong> was founded with one clear mission: to make every
                engineering student in Coimbatore confident about their final year project. What
                began as a small software project lab in <strong>Gandhipuram, Coimbatore</strong>{" "}
                has grown into the city's most comprehensive{" "}
                <strong>final year project center</strong>.
              </p>
              <p>
                Today, we guide students from <strong>BE, ME, MCA, BSc, and Diploma</strong>{" "}
                programmes across all major engineering disciplines — from{" "}
                <strong>Software, AI/ML, and MERN Stack projects</strong> to{" "}
                <strong>Arduino, Raspberry Pi, IoT, and Mechanical fabrication projects</strong>.
              </p>
              <p>
                Every project at CODEX PROJECT comes with the{" "}
                <strong>IEEE 2024-25 base paper</strong>, complete source code, project report,
                PPT, and dedicated viva preparation support. We bridge the gap between academics
                and real-world implementation — giving students the confidence to present and
                defend their work at any college review.
              </p>

              <div className="ab-highlights">
                {[
                  "BE / ME / MCA / BSc / Diploma",
                  "IEEE 2024-25 Certified Projects",
                  "Real Working Models & Demos",
                  "Most Affordable Pricing in CBE",
                ].map((h) => (
                  <div key={h} className="ab-hi">
                    <span className="ab-hi-dot" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Code window */}
            <div className="ab-code-win">
              <div className="ab-code-bar">
                <span className="ab-cd" style={{ background: "#FF5F56" }} />
                <span className="ab-cd" style={{ background: "#FFBD2E" }} />
                <span className="ab-cd" style={{ background: "#27C93F" }} />
                <span className="ab-code-file">codex_project.py</span>
              </div>
              <div className="ab-code-body">
                <div><span className="ab-kw">class</span> <span className="ab-cls">CodexProject</span>:</div>
                <div>{"  "}<span className="ab-kw">def</span> <span className="ab-fn">__init__</span>(self):</div>
                <div>{"    "}self.name {"= "}<span className="ab-str">"CODEX PROJECT"</span></div>
                <div>{"    "}self.location {"= "}<span className="ab-str">"Gandhipuram, CBE"</span></div>
                <div>{"    "}self.domains = [<span className="ab-str">"AI"</span>, <span className="ab-str">"IoT"</span>,</div>
                <div>{"      "}<span className="ab-str">"Embedded"</span>, <span className="ab-str">"Mechanical"</span>]</div>
                <div>{"    "}self.rating {"= "}<span className="ab-num">4.9</span> <span className="ab-cm"># ⭐ Google</span></div>
                <div>{"    "}self.students {"= "}<span className="ab-str">"1000+"</span></div>
                <div>{"  "}<span className="ab-kw">def</span> <span className="ab-fn">get_project</span>(self):</div>
                <div>{"    "}<span className="ab-kw">return</span> <span className="ab-str">"Best in Coimbatore 🚀"</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ DOMAINS ══════════════════════════════════════════════════ */}
      <section className="ab-domains-sec ab-reveal" ref={addRef} aria-labelledby="ab-domains-h2">
        <div className="ab-container">
          <div className="ab-sec-head">
            <span className="ab-eyebrow">What We Offer</span>
            <h2 id="ab-domains-h2" className="ab-sec-title ab-center">
              Final Year Project Domains at CODEX PROJECT
            </h2>
            <p className="ab-sec-sub">
              IEEE 2024-25 certified project guidance across all major engineering disciplines —
              complete with documentation, source code, and viva support
            </p>
          </div>
          <div className="ab-domains-grid">
            {domains.map((d, i) => (
              <article
                key={i}
                className="ab-domain-card"
                style={{ "--card-accent": d.color }}
                itemScope
                itemType="https://schema.org/Service"
                aria-label={`${d.title} – CODEX PROJECT Coimbatore`}
              >
                <span className="ab-domain-icon">{d.icon}</span>
                <h3 className="ab-domain-title" itemProp="name">{d.title}</h3>
                <meta itemProp="areaServed" content="Coimbatore" />
                <meta itemProp="provider" content="CODEX PROJECT" />
                <p className="ab-domain-desc" itemProp="description">{d.desc}</p>
                <div className="ab-tech-chips" aria-label="Technologies">
                  {d.techs.map((t) => (
                    <span key={t} className="ab-tech-chip">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ═══════════════════════════════════════════════ */}
      <section className="ab-features-sec ab-reveal" ref={addRef} aria-labelledby="ab-feat-h2">
        <div className="ab-container">
          <div className="ab-sec-head">
            <span className="ab-eyebrow">Why Choose Us</span>
            <h2 id="ab-feat-h2" className="ab-sec-title ab-center">
              Why 1000+ Students Choose CODEX PROJECT in Coimbatore
            </h2>
            <p className="ab-sec-sub">
              From IEEE base papers to viva coaching — we provide everything a
              Coimbatore engineering student needs to excel in their final year project
            </p>
          </div>
          <div className="ab-features-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className="ab-feat-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="ab-feat-icon">{f.icon}</span>
                <h3 className="ab-feat-title">{f.title}</h3>
                <p className="ab-feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SEO CONTENT BLOCK ════════════════════════════════════════ */}
      <section className="ab-seo-block ab-reveal" ref={addRef} aria-labelledby="ab-seo-h2">
        <div className="ab-container">
          <div className="ab-seo-inner">
            <h2 id="ab-seo-h2">
              About CODEX PROJECT – Final Year Project Center Coimbatore
            </h2>
            <p>
              <strong>CODEX PROJECT</strong> is the most trusted{" "}
              <strong>final year project center in Coimbatore</strong>, located at{" "}
              <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012</strong>.
              We are a full-service project center covering{" "}
              <strong>Software projects</strong> (Python, Django, MERN, Java, .NET, Android),{" "}
              <strong>AI &amp; Machine Learning projects</strong>,{" "}
              <strong>IoT projects</strong> (Arduino, NodeMCU, Raspberry Pi),{" "}
              <strong>Embedded Systems projects</strong> (8051, ARM, PIC, ESP32), and{" "}
              <strong>Mechanical Engineering projects</strong> (CAD, ANSYS, SolidWorks,
              Fabrication, Robotics).
            </p>
            <p>
              Every project at Codex Project comes with the{" "}
              <strong>IEEE 2024-25 base paper</strong>, complete source code, project report,
              PPT presentation, and dedicated <strong>viva preparation support</strong>. We also
              offer <strong>internship training with verified certificate</strong> for students
              looking to enhance their placement opportunities. Our center is easily accessible
              from all major engineering college zones in Coimbatore — Peelamedu, Gandhipuram,
              Saravanampatti, RS Puram, Singanallur, Ukkadam, and Vadavalli.
            </p>
            <p>
              For <strong>Software and AI projects</strong>, call{" "}
              <a href="tel:+918525999022">85259 99022</a>. For{" "}
              <strong>Embedded and IoT projects</strong>, call{" "}
              <a href="tel:+918525999032">85259 99032</a>. For general enquiry and{" "}
              <strong>Mechanical projects</strong>, call{" "}
              <a href="tel:+918525999002">85259 99002</a> or visit us at Gandhipuram,
              Coimbatore.
            </p>
          </div>
        </div>
      </section>

      {/* ══ GOOGLE MAP ═══════════════════════════════════════════════ */}
      <section className="ab-map-sec ab-reveal" ref={addRef} aria-labelledby="ab-map-h2">
        <div className="ab-container">
          <div className="ab-sec-head">
            <span className="ab-eyebrow">Find Us</span>
            <h2 id="ab-map-h2" className="ab-sec-title ab-center">
              Visit CODEX PROJECT – Gandhipuram, Coimbatore
            </h2>
            <p className="ab-sec-sub">
              📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
              Cross Cut Road, Gandhipuram, Coimbatore – 641012
            </p>
          </div>

          <div className="ab-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775889773579!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CODEX PROJECT – Final Year Project Center, Gandhipuram, Coimbatore"
              aria-label="Google Maps showing CODEX PROJECT location in Gandhipuram Coimbatore"
            />
          </div>

          <div className="ab-map-actions">
            <a
              href="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
              target="_blank"
              rel="noopener noreferrer"
              className="ab-map-btn"
              aria-label="Get directions to CODEX PROJECT Coimbatore"
            >
              📍 Get Directions
            </a>
            <a
              href="https://wa.me/918525999002?text=Hi%2C%20I%20need%20directions%20to%20your%20office"
              target="_blank"
              rel="noopener noreferrer"
              className="ab-map-btn ab-map-btn-wa"
              aria-label="WhatsApp for directions"
            >
              💬 WhatsApp for Directions
            </a>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════ */}
      <section className="ab-cta-sec ab-reveal" ref={addRef} aria-labelledby="ab-cta-h2">
        <div className="ab-cta-blob" aria-hidden="true" />
        <div className="ab-container">
          <div className="ab-cta-inner">
            <h2 id="ab-cta-h2" className="ab-cta-title">
              Start Your Final Year Project<br />
              <span className="ab-grad">at CODEX PROJECT Today</span>
            </h2>
            <p className="ab-cta-sub">
              Join <strong>1000+ engineering students</strong> who trusted CODEX PROJECT —
              the <strong>best final year project center in Coimbatore</strong> — for IEEE
              projects, internship training, and complete project support.
            </p>
            <p className="ab-cta-addr">
              📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
              &nbsp;|&nbsp; 📞 Free Consultation Available
            </p>
            <div className="ab-cta-btns">
              <a
                href="tel:+918525999002"
                className="ab-btn-cta ab-btn-cta-p"
                aria-label="Call CODEX PROJECT now"
              >
                📞 Call Now – 85259 99002
              </a>
              <a
                href="https://wa.me/918525999002"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-btn-cta ab-btn-cta-o"
                aria-label="WhatsApp CODEX PROJECT"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;