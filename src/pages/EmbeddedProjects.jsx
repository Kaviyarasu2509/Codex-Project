import React, { useState, useEffect, useRef } from "react";
import "./EmbeddedProjects.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const embeddedSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Best Embedded Project Centre in Coimbatore – CODEX PROJECT",
  "serviceType": "Embedded Systems Final Year Project Training and Development",
  "description":
    "CODEX PROJECT is the best embedded project centre in Coimbatore offering affordable 8051, ARM, PIC, AVR, Arduino, Raspberry Pi, and FPGA embedded system final year projects for BE ECE, EEE, EIE, and Diploma students with complete circuit design, programming, documentation, and viva support.",
  "provider": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
  },
  "areaServed": { "@type": "City", "name": "Coimbatore" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Embedded Project Services Coimbatore",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "8051 Microcontroller Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ARM Cortex Embedded Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PIC Microcontroller Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arduino Embedded Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Raspberry Pi Embedded Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FPGA VLSI Projects Coimbatore" } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "175",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best embedded project centre in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT is the best embedded project centre in Coimbatore, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer 8051, ARM, PIC, AVR, Arduino, Raspberry Pi, and FPGA embedded system projects for BE ECE, EEE, EIE, and Diploma students at affordable pricing.",
      },
    },
    {
      "@type": "Question",
      "name": "What microcontroller platforms do you support at Codex Project Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We support 8051, ARM Cortex M3/M4, PIC16F/18F, AVR ATmega, Arduino UNO/Mega, Raspberry Pi 4, STM32, ESP32, and FPGA (Xilinx/Altera) platforms for embedded final year projects in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide circuit design and PCB support for embedded projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, CODEX PROJECT provides complete circuit design, PCB layout, Proteus simulation, Keil programming, and hardware testing support for all embedded system final year projects in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cost of embedded final year projects at Codex Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT offers the most affordable embedded project pricing in Coimbatore. Hardware + coding + documentation all included. Visit us at 2nd Floor, Balaji Complex, Gandhipuram for a free consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you support ECE, EEE, and EIE students for embedded projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, we provide complete embedded system project guidance for BE ECE, EEE, EIE, Instrumentation, and Diploma students from all engineering colleges across Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is CODEX PROJECT embedded centre located in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT is located at 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. to Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012. Easily reachable from all Coimbatore engineering colleges.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.codexproject.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Embedded Projects Coimbatore", "item": "https://www.codexproject.in/services/embedded-projects" },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// filterKey maps each service card to the chips that should show it
const services = [
  {
    icon: "🔲",
    title: "8051 Microcontroller Projects",
    seo: "8051 Microcontroller Projects Coimbatore",
    color: "#e3f2fd", accentColor: "#1565c0",
    filterKeys: ["Embedded Projects Coimbatore", "8051 Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore", "Keil Programming Projects"],
    desc: "Classic and advanced 8051-based embedded final year projects with Keil IDE, Proteus simulation, and real hardware implementation — best 8051 project centre in Coimbatore for ECE students.",
  },
  {
    icon: "💪",
    title: "ARM Cortex Projects",
    seo: "ARM Cortex Embedded Projects Coimbatore",
    color: "#f3e5f5", accentColor: "#6a1b9a",
    filterKeys: ["Embedded Projects Coimbatore", "ARM Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "STM32, LPC2148, and ARM Cortex M3/M4 based embedded system final year projects — best ARM project centre in Coimbatore for BE ECE and EEE students.",
  },
  {
    icon: "⚡",
    title: "PIC & AVR Projects",
    seo: "PIC AVR Microcontroller Projects Coimbatore",
    color: "#e8f5e9", accentColor: "#2e7d32",
    filterKeys: ["Embedded Projects Coimbatore", "PIC Projects Coimbatore", "AVR Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "PIC16F/18F and AVR ATmega microcontroller embedded projects with MPLAB and AVR Studio — affordable PIC and AVR project centre in Coimbatore.",
  },
  {
    icon: "🔌",
    title: "Arduino Embedded Projects",
    seo: "Arduino Embedded Projects Coimbatore",
    color: "#fff3e0", accentColor: "#e65100",
    filterKeys: ["Embedded Projects Coimbatore", "Arduino Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "Arduino UNO, Mega, and Nano based sensor, automation, and control system embedded projects for BE and Diploma students in Coimbatore.",
  },
  {
    icon: "🍓",
    title: "Raspberry Pi Projects",
    seo: "Raspberry Pi Embedded Projects Coimbatore",
    color: "#fce4ec", accentColor: "#880e4f",
    filterKeys: ["Embedded Projects Coimbatore", "Raspberry Pi Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "Raspberry Pi 4-based image processing, AI, and Linux embedded system final year projects — best Raspberry Pi project centre in Coimbatore.",
  },
  {
    icon: "🏗️",
    title: "FPGA & VLSI Projects",
    seo: "FPGA VLSI Projects Coimbatore",
    color: "#ede7f6", accentColor: "#283593",
    filterKeys: ["Embedded Projects Coimbatore", "FPGA Projects Coimbatore", "VLSI Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "Xilinx, Altera FPGA, and VHDL/Verilog-based VLSI design final year projects — best FPGA project centre in Coimbatore for ECE students.",
  },
  {
    icon: "📡",
    title: "Wireless & RF Embedded Projects",
    seo: "Wireless RF Embedded Projects Coimbatore",
    color: "#e0f7fa", accentColor: "#006064",
    filterKeys: ["Embedded Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "GSM, GPS, RF, Zigbee, Bluetooth, and LoRa-based wireless embedded communication final year projects for ECE and EIE students in Coimbatore.",
  },
  {
    icon: "🤖",
    title: "Robotics & Automation Projects",
    seo: "Robotics Embedded Automation Projects Coimbatore",
    color: "#f9fbe7", accentColor: "#33691e",
    filterKeys: ["Embedded Projects Coimbatore", "Embedded Projects ECE Coimbatore", "IEEE Embedded Projects 2024-25", "Embedded Centre Gandhipuram", "Affordable Embedded Projects Coimbatore"],
    desc: "Line follower, obstacle avoidance, robotic arm, and industrial automation embedded system projects — best robotics embedded centre in Coimbatore.",
  },
];

const microcontrollers = [
  { name: "8051 / AT89C51", color: "#e3f2fd" },
  { name: "ARM Cortex M3/M4", color: "#f3e5f5" },
  { name: "PIC16F / PIC18F", color: "#e8f5e9" },
  { name: "AVR ATmega328", color: "#fff3e0" },
  { name: "STM32 F1/F4", color: "#fce4ec" },
  { name: "Arduino UNO / Mega", color: "#e0f7fa" },
  { name: "Raspberry Pi 4", color: "#f9fbe7" },
  { name: "ESP32 / NodeMCU", color: "#ede7f6" },
  { name: "MSP430", color: "#e8eaf6" },
  { name: "Xilinx FPGA", color: "#fff8e1" },
];

const tools = [
  { name: "Keil uVision", color: "#fbe9e7" },
  { name: "Proteus Simulation", color: "#e8f5e9" },
  { name: "MPLAB IDE", color: "#e3f2fd" },
  { name: "Arduino IDE", color: "#ede7f6" },
  { name: "Vivado / ISE", color: "#f3e5f5" },
  { name: "LTSpice / Eagle PCB", color: "#fff3e0" },
];

const projectIdeas = [
  { name: "Smart Traffic Light Control System", tag: "8051 / ARM" },
  { name: "Automatic Street Light System", tag: "8051" },
  { name: "Home Automation – Embedded Systems", tag: "Arduino" },
  { name: "Temperature & Humidity Monitoring", tag: "Arduino" },
  { name: "Smart Security with Face Detection", tag: "Raspberry Pi" },
  { name: "Embedded Fire Alarm System", tag: "8051 / PIC" },
  { name: "Digital Energy Meter – Microcontroller", tag: "PIC" },
  { name: "GPS Vehicle Tracking System", tag: "ARM / GSM" },
  { name: "RFID Based Access Control", tag: "Arduino" },
  { name: "Industrial Motor Speed Controller", tag: "ARM / PIC" },
  { name: "Blind Assistance System", tag: "Raspberry Pi" },
  { name: "Automatic Irrigation Controller", tag: "Arduino" },
  { name: "Heart Rate & SpO2 Monitor", tag: "Arduino / ARM" },
  { name: "Voice Controlled Robot", tag: "Raspberry Pi" },
  { name: "Power Quality Monitoring System", tag: "STM32" },
  { name: "Earthquake Detection System", tag: "Arduino" },
  { name: "Smart Voting Machine", tag: "8051 / PIC" },
  { name: "VLSI ALU Design – Verilog", tag: "FPGA" },
  { name: "Object Detection – Raspberry Pi", tag: "Raspberry Pi" },
  { name: "Wireless Notice Board – GSM", tag: "ARM / GSM" },
];

// idea tag → filter chip mapping
const ideaTagToFilter = {
  "8051 / ARM":    ["Embedded Projects Coimbatore", "8051 Projects Coimbatore", "ARM Projects Coimbatore"],
  "8051":          ["Embedded Projects Coimbatore", "8051 Projects Coimbatore"],
  "Arduino":       ["Embedded Projects Coimbatore", "Arduino Projects Coimbatore"],
  "Raspberry Pi":  ["Embedded Projects Coimbatore", "Raspberry Pi Projects Coimbatore"],
  "8051 / PIC":    ["Embedded Projects Coimbatore", "8051 Projects Coimbatore", "PIC Projects Coimbatore"],
  "PIC":           ["Embedded Projects Coimbatore", "PIC Projects Coimbatore"],
  "ARM / GSM":     ["Embedded Projects Coimbatore", "ARM Projects Coimbatore"],
  "ARM / PIC":     ["Embedded Projects Coimbatore", "ARM Projects Coimbatore", "PIC Projects Coimbatore"],
  "Arduino / ARM": ["Embedded Projects Coimbatore", "Arduino Projects Coimbatore", "ARM Projects Coimbatore"],
  "STM32":         ["Embedded Projects Coimbatore"],
  "FPGA":          ["Embedded Projects Coimbatore", "FPGA Projects Coimbatore", "VLSI Projects Coimbatore"],
};

const tagColors = {
  "8051":          "#e3f2fd",
  "8051 / ARM":    "#e8eaf6",
  "8051 / PIC":    "#e3f2fd",
  Arduino:         "#e8f5e9",
  "Arduino / ARM": "#f9fbe7",
  "Raspberry Pi":  "#fce4ec",
  "ARM / GSM":     "#f3e5f5",
  "ARM / PIC":     "#fff3e0",
  STM32:           "#e0f7fa",
  PIC:             "#fff8e1",
  FPGA:            "#ede7f6",
};

const whyChoose = [
  {
    icon: "💰",
    title: "Most Affordable Embedded Projects",
    desc: "Lowest embedded project cost in Coimbatore — hardware kit + coding + simulation + documentation all included, zero hidden charges.",
  },
  {
    icon: "🔧",
    title: "Real Hardware Working Models",
    desc: "Actual PCB, microcontroller circuit, and sensor-based working prototype — students demo live hardware at college reviews and viva.",
  },
  {
    icon: "🖥️",
    title: "Circuit Design & Simulation",
    desc: "Proteus simulation, Keil programming, PCB layout, and MPLAB support — complete design-to-hardware pipeline in Coimbatore.",
  },
  {
    icon: "📋",
    title: "IEEE Documentation – Complete",
    desc: "Full project report in IEEE format, circuit diagram, code documentation, PPT, and synopsis — ready for all college submissions.",
  },
  {
    icon: "🎤",
    title: "Viva & Review Preparation",
    desc: "Expert coaching for all project reviews, department viva questions, and final year presentation support for Coimbatore students.",
  },
  {
    icon: "📍",
    title: "Central Gandhipuram Location",
    desc: "2nd Floor, Balaji Complex, Gandhipuram — easily accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.",
  },
];

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Best embedded project centre in Coimbatore! My ARM Cortex motor control project was implemented with real hardware and full Keil + Proteus support. Complete IEEE documentation provided. Highly recommended for ECE students!",
    name: "Arun K.",
    branch: "BE ECE – Coimbatore",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "I visited Codex Project at Balaji Complex, Gandhipuram for my 8051 smart traffic project. Excellent hardware working model, proper circuit diagram, and affordable cost. Best embedded centre near Gandhipuram!",
    name: "Priya S.",
    branch: "BE EEE",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "My FPGA-based VLSI project was completed at Codex Project Coimbatore with Xilinx Vivado and real board implementation. The team explained every concept clearly and helped me ace my viva. Truly the best!",
    name: "Ravi M.",
    branch: "BE ECE – Gandhipuram",
  },
];

const filterKeywords = [
  "Embedded Projects Coimbatore",
  "8051 Projects Coimbatore",
  "ARM Projects Coimbatore",
  "PIC Projects Coimbatore",
  "AVR Projects Coimbatore",
  "Arduino Projects Coimbatore",
  "Raspberry Pi Projects Coimbatore",
  "FPGA Projects Coimbatore",
  "VLSI Projects Coimbatore",
  "Embedded Projects ECE Coimbatore",
  "IEEE Embedded Projects 2024-25",
  "Proteus Simulation Projects",
  "Keil Programming Projects",
  "Embedded Centre Gandhipuram",
  "Affordable Embedded Projects Coimbatore",
];

// ─── Component ─────────────────────────────────────────────────────────────────
const EmbeddedProjects = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRefs = useRef([]);

  // Filter logic: each service has an array of filterKeys it belongs to
  const filteredServices = activeFilter
    ? services.filter((s) => s.filterKeys.includes(activeFilter))
    : services;

  const filteredIdeas = activeFilter
    ? projectIdeas.filter((p) => {
        const keys = ideaTagToFilter[p.tag] || ["Embedded Projects Coimbatore"];
        return keys.includes(activeFilter);
      })
    : projectIdeas;

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("ep-visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const scrollToServices = () => {
    document.getElementById("services-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ep-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(embeddedSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="ep-hero" aria-labelledby="ep-h1">
        <div className="ep-hero-bg">
          <div className="ep-hero-grid"></div>
          <div className="ep-glow ep-glow1"></div>
          <div className="ep-glow ep-glow2"></div>
        </div>
        <div className="ep-container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="ep-breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="ep-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/services" itemProp="item"><span itemProp="name">Services</span></a>
                <meta itemProp="position" content="2" />
              </li>
              <span className="ep-bc-sep">›</span>
              <li aria-current="page" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Embedded Projects Coimbatore</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <h1 id="ep-h1" className="ep-hero-h1">
            Best Embedded Project Centre<br />
            in Coimbatore –{" "}
            <span className="ep-accent">CODEX PROJECT</span>
          </h1>

          <p className="ep-hero-sub">
            Top-rated embedded systems project centre for BE ECE, EEE, EIE &amp; Diploma students – Gandhipuram, Coimbatore
          </p>

          <p className="ep-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best embedded project centre in Coimbatore</strong>,
            providing real-time <strong>8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi</strong>, and{" "}
            <strong>FPGA embedded system final year projects</strong> with complete circuit design,
            Keil/MPLAB programming, Proteus simulation, IEEE documentation, and viva preparation —
            all at the most <strong>affordable pricing in Coimbatore</strong>.
          </p>

          <p className="ep-hero-addr">📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012</p>
          <p className="ep-hero-serve">Serving BE ECE, EEE, EIE, Instrumentation &amp; Diploma students from all Coimbatore engineering colleges</p>

          <div className="ep-hero-actions">
            <a href="tel:+918525999002" className="ep-btn ep-btn-primary">📞 Call: 85259 99002</a>
            <button className="ep-btn ep-btn-outline" onClick={scrollToServices}>Explore Technologies ↓</button>
          </div>
        </div>
      </section>

      <div className="ep-container ep-main-content">

        {/* ══ FILTER KEYWORD CLOUD ══ */}
        <section className="ep-filter-section ep-reveal" ref={addRef} aria-label="Filter by technology">
          <div className="ep-filter-header">
            <h2 className="ep-filter-title">Browse by Technology</h2>
            {activeFilter && (
              <button className="ep-filter-clear" onClick={() => setActiveFilter(null)}>
                ✕ Show All
              </button>
            )}
          </div>
          <div className="ep-filter-chips">
            {filterKeywords.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveFilter(activeFilter === tag ? null : tag); scrollToServices(); }}
                className={`ep-filter-chip ${activeFilter === tag ? "ep-chip-active" : ""}`}
                aria-label={`Filter: ${tag}`}
                aria-pressed={activeFilter === tag}
              >
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <p className="ep-filter-result-note">
              Showing results for: <strong>{activeFilter}</strong>
              {" "}— {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""} found
            </p>
          )}
        </section>

        {/* ══ SERVICES ══ */}
        <section aria-labelledby="services-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="services-heading" className="ep-section-title">
            Embedded System Project Services – CODEX PROJECT Coimbatore
          </h2>
          <p className="ep-section-sub">
            Complete embedded project support across all microcontroller platforms —
            real hardware, simulation, coding, and IEEE documentation included
          </p>
          <div className="ep-services-grid">
            {filteredServices.map((s, i) => (
              <article
                key={i}
                className="ep-service-card"
                style={{ "--tc": s.accentColor, "--tbg": s.color }}
                itemScope itemType="https://schema.org/Service"
                aria-label={s.seo}
              >
                <div className="ep-sc-top-bar"></div>
                <div className="ep-sc-icon">{s.icon}</div>
                <h3 className="ep-sc-title" itemProp="name">{s.title}</h3>
                <meta itemProp="serviceType" content={s.seo} />
                <meta itemProp="areaServed" content="Coimbatore" />
                <p className="ep-sc-desc" itemProp="description">{s.desc}</p>
              </article>
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px", background: "var(--off-white)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "15px" }}>
                No exact match found.{" "}
                <button onClick={() => setActiveFilter(null)} style={{ background: "none", border: "none", color: "var(--blue)", fontWeight: 600, cursor: "pointer", textDecoration: "underline", fontSize: "15px", fontFamily: "var(--font-body)" }}>
                  Show all services
                </button>
              </p>
            </div>
          )}
        </section>

        {/* ══ PLATFORMS & TOOLS ══ */}
        <section aria-labelledby="platforms-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="platforms-heading" className="ep-section-title">
            Microcontroller Platforms &amp; Tools – CODEX PROJECT Coimbatore
          </h2>
          <div className="ep-platforms-grid">
            <div>
              <h3 className="ep-platform-group-title">🔲 Microcontroller Platforms</h3>
              <div className="ep-badge-wrap">
                {microcontrollers.map((m, i) => (
                  <span key={i} className="ep-badge" style={{ background: m.color }}>
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="ep-platform-group-title">🛠️ IDEs &amp; Design Tools</h3>
              <div className="ep-badge-wrap">
                {tools.map((t, i) => (
                  <span key={i} className="ep-badge" style={{ background: t.color }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="projects-heading" className="ep-section-title">
            Embedded System Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="ep-section-sub">
            Latest IEEE 2024-25 embedded system project topics with real hardware for
            ECE, EEE, EIE &amp; Diploma students in Coimbatore
          </p>
          <div className="ep-ideas-grid">
            {filteredIdeas.map((p, i) => (
              <div
                key={i}
                className="ep-idea-card"
                style={{ "--ibg": tagColors[p.tag] || "#f8f9fa" }}
                itemScope itemType="https://schema.org/CreativeWork"
              >
                <p className="ep-idea-name" itemProp="name">{p.name}</p>
                <span className="ep-idea-tag" itemProp="genre">{p.tag}</span>
              </div>
            ))}
          </div>
          {filteredIdeas.length === 0 && (
            <div style={{ textAlign: "center", padding: "30px", background: "var(--off-white)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "14px" }}>
                No project ideas match this filter.{" "}
                <button onClick={() => setActiveFilter(null)} style={{ background: "none", border: "none", color: "var(--blue)", fontWeight: 600, cursor: "pointer", textDecoration: "underline", fontFamily: "var(--font-body)" }}>
                  Show all ideas
                </button>
              </p>
            </div>
          )}
        </section>

        {/* ══ WHY CHOOSE ══ */}
        <section aria-labelledby="why-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="why-heading" className="ep-section-title">
            Why CODEX PROJECT is the Best Embedded Project Centre in Coimbatore
          </h2>
          <p className="ep-section-sub">
            Trusted by 500+ ECE, EEE &amp; EIE students across Coimbatore for real hardware embedded projects
          </p>
          <div className="ep-why-grid">
            {whyChoose.map((w, i) => (
              <div key={i} className="ep-why-card" style={{ "--wd": `${i * 0.06}s` }}>
                <span className="ep-why-icon">{w.icon}</span>
                <h3 className="ep-why-title">{w.title}</h3>
                <p className="ep-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══ */}
        <section aria-labelledby="reviews-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="reviews-heading" className="ep-section-title">
            Student Reviews – Embedded Project Centre Coimbatore
          </h2>
          <p className="ep-section-sub">
            What ECE, EEE &amp; EIE students say about CODEX PROJECT's embedded project support
          </p>
          <div className="ep-reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="ep-review-card" itemScope itemType="https://schema.org/Review">
                <div className="ep-review-stars">
                  {r.stars}
                  <meta itemProp="reviewRating" content="5" />
                </div>
                <p className="ep-review-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="ep-review-author">
                  <div className="ep-review-avatar">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="ep-review-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section aria-labelledby="faq-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="faq-heading" className="ep-section-title">
            Frequently Asked Questions – Embedded Project Centre Coimbatore
          </h2>
          <div className="ep-faq-list">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className={`ep-faq-item ${openFaq === i ? "ep-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ "--fd": `${i * 0.06}s` }}
              >
                <div className="ep-faq-q">
                  <h3 className="ep-faq-question">{item.name}</h3>
                  <span className="ep-faq-icon" aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                <div className="ep-faq-a">
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-heading" className="ep-section ep-seo-block ep-reveal" ref={addRef}>
          <h2 id="seo-heading" className="ep-seo-title">
            Embedded System Project Centre in Coimbatore – Complete Guide 2024-25
          </h2>
          <p>
            Searching for the <strong>best embedded project centre in Coimbatore</strong>? CODEX
            PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>,
            is your complete embedded systems final year project solution. We specialize in{" "}
            <strong>8051 microcontroller projects</strong>,{" "}
            <strong>ARM Cortex embedded projects</strong>, <strong>PIC and AVR projects</strong>,{" "}
            <strong>Arduino projects</strong>, <strong>Raspberry Pi projects</strong>, and{" "}
            <strong>FPGA/VLSI design projects</strong> — all at affordable pricing in Coimbatore.
          </p>
          <p>
            Every embedded project at CODEX PROJECT includes real hardware circuit assembly,
            Proteus simulation, Keil or MPLAB programming, complete sensor integration, IEEE
            2024-25 format project report, circuit diagram, code documentation, and dedicated
            viva preparation. We serve <strong>BE ECE students</strong>,{" "}
            <strong>BE EEE students</strong>, <strong>EIE and Instrumentation students</strong>,{" "}
            <strong>ME Embedded Systems students</strong>, and <strong>Diploma students</strong>{" "}
            from all engineering colleges across Coimbatore — including those near Peelamedu,
            Saravanampatti, RS Puram, Singanallur, and Ukkadam.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram,
            Coimbatore</strong> today for a free consultation on your embedded system final year
            project topic and pricing. We are the <strong>most trusted and affordable embedded
            project centre in Coimbatore</strong> for 2024-25 — with 500+ successful student
            projects delivered.
          </p>
        </section>

        {/* ══ LOCATION ══ */}
        <section aria-labelledby="location-heading" className="ep-section ep-reveal" ref={addRef}>
          <h2 id="location-heading" className="ep-section-title ep-center">
            Visit CODEX PROJECT – Embedded Project Centre, Gandhipuram, Coimbatore
          </h2>
          <p className="ep-location-addr">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <div className="ep-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CODEX PROJECT Embedded Project Centre – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
              aria-label="Google Maps showing CODEX PROJECT embedded centre at Balaji Complex Gandhipuram Coimbatore"
            />
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="ep-cta ep-reveal" ref={addRef} aria-labelledby="cta-heading">
          <div className="ep-cta-bg"></div>
          <div className="ep-cta-inner">
            <h2 id="cta-heading" className="ep-cta-title">
              Start Your Embedded Final Year Project Today – CODEX PROJECT Coimbatore
            </h2>
            <p className="ep-cta-sub">Join 500+ ECE, EEE &amp; EIE students who completed embedded projects with us.</p>
            <p className="ep-cta-addr">📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012</p>
            <p className="ep-cta-tags">Real Hardware · Keil &amp; Proteus · IEEE Documentation · Viva Support · Affordable Pricing</p>
            <div className="ep-cta-actions">
              <a href="tel:+918525999002" className="ep-cta-btn ep-cta-primary" aria-label="Contact CODEX PROJECT embedded project centre">
                📞 Contact Now – Free Consultation
              </a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="ep-cta-btn ep-cta-outline" aria-label="Review CODEX PROJECT on Google">
                ⭐ Review on Google
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EmbeddedProjects;