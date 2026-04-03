import React from "react";

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
const services = [
  {
    icon: "🔲",
    title: "8051 Microcontroller Projects",
    seo: "8051 Microcontroller Projects Coimbatore",
    desc: "Classic and advanced 8051-based embedded final year projects with Keil IDE, Proteus simulation, and real hardware implementation — best 8051 project centre in Coimbatore for ECE students.",
  },
  {
    icon: "💪",
    title: "ARM Cortex Projects",
    seo: "ARM Cortex Embedded Projects Coimbatore",
    desc: "STM32, LPC2148, and ARM Cortex M3/M4 based embedded system final year projects — best ARM project centre in Coimbatore for BE ECE and EEE students.",
  },
  {
    icon: "⚡",
    title: "PIC & AVR Projects",
    seo: "PIC AVR Microcontroller Projects Coimbatore",
    desc: "PIC16F/18F and AVR ATmega microcontroller embedded projects with MPLAB and AVR Studio — affordable PIC and AVR project centre in Coimbatore.",
  },
  {
    icon: "🔌",
    title: "Arduino Embedded Projects",
    seo: "Arduino Embedded Projects Coimbatore",
    desc: "Arduino UNO, Mega, and Nano based sensor, automation, and control system embedded projects for BE and Diploma students in Coimbatore.",
  },
  {
    icon: "🍓",
    title: "Raspberry Pi Projects",
    seo: "Raspberry Pi Embedded Projects Coimbatore",
    desc: "Raspberry Pi 4-based image processing, AI, and Linux embedded system final year projects — best Raspberry Pi project centre in Coimbatore.",
  },
  {
    icon: "🏗️",
    title: "FPGA & VLSI Projects",
    seo: "FPGA VLSI Projects Coimbatore",
    desc: "Xilinx, Altera FPGA, and VHDL/Verilog-based VLSI design final year projects — best FPGA project centre in Coimbatore for ECE students.",
  },
  {
    icon: "📡",
    title: "Wireless & RF Embedded Projects",
    seo: "Wireless RF Embedded Projects Coimbatore",
    desc: "GSM, GPS, RF, Zigbee, Bluetooth, and LoRa-based wireless embedded communication final year projects for ECE and EIE students in Coimbatore.",
  },
  {
    icon: "🤖",
    title: "Robotics & Automation Projects",
    seo: "Robotics Embedded Automation Projects Coimbatore",
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

const tagColors = {
  "8051": "#e3f2fd",
  "8051 / ARM": "#e8eaf6",
  "8051 / PIC": "#e3f2fd",
  Arduino: "#e8f5e9",
  "Arduino / ARM": "#f9fbe7",
  "Raspberry Pi": "#fce4ec",
  "ARM / GSM": "#f3e5f5",
  "ARM / PIC": "#fff3e0",
  STM32: "#e0f7fa",
  PIC: "#fff8e1",
  FPGA: "#ede7f6",
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
    name: "Arun K., BE ECE – Coimbatore",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "I visited Codex Project at Balaji Complex, Gandhipuram for my 8051 smart traffic project. Excellent hardware working model, proper circuit diagram, and affordable cost. Best embedded centre near Gandhipuram!",
    name: "Priya S., BE EEE",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "My FPGA-based VLSI project was completed at Codex Project Coimbatore with Xilinx Vivado and real board implementation. The team explained every concept clearly and helped me ace my viva. Truly the best!",
    name: "Ravi M., BE ECE – Gandhipuram",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const EmbeddedProjects = () => {
  return (
    <div>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(embeddedSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container py-5">

        {/* ══ BREADCRUMB ══ */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <li className="breadcrumb-item" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumb-item" itemScope itemType="https://schema.org/ListItem">
              <a href="/services" itemProp="item"><span itemProp="name">Services</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <li className="breadcrumb-item active" aria-current="page" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Embedded Projects Coimbatore</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══ H1 ══ */}
        <h1 className="text-center mb-3">
          Best Embedded Project Centre in Coimbatore – CODEX PROJECT
        </h1>
        <p className="text-center lead mb-2">
          Top-rated embedded systems project centre for BE ECE, EEE, EIE &amp; Diploma students – Gandhipuram, Coimbatore
        </p>
        <p className="text-center mb-1">
          <strong>CODEX PROJECT</strong> is the <strong>best embedded project centre in Coimbatore</strong>,
          providing real-time <strong>8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi</strong>, and{" "}
          <strong>FPGA embedded system final year projects</strong> with complete circuit design,
          Keil/MPLAB programming, Proteus simulation, IEEE documentation, and viva preparation —
          all at the most <strong>affordable pricing in Coimbatore</strong>.
        </p>
        <p className="text-center text-muted small mb-2">
          📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
          Cross Cut Road, Gandhipuram, Coimbatore – 641012
        </p>
        <p className="text-center text-muted small mb-5">
          Serving BE ECE, EEE, EIE, Instrumentation &amp; Diploma students from all Coimbatore engineering colleges
        </p>

        {/* ══ SERVICES ══ */}
        <section aria-labelledby="services-heading" className="mb-5">
          <h2 id="services-heading" className="text-center mb-2">
            Embedded System Project Services – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Complete embedded project support across all microcontroller platforms —
            real hardware, simulation, coding, and IEEE documentation included
          </p>
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <article
                  className="card h-100 shadow-sm border-0 p-3"
                  itemScope itemType="https://schema.org/Service"
                  aria-label={s.seo}
                >
                  <div className="fs-2 mb-2" aria-hidden="true">{s.icon}</div>
                  <h3 className="h6 fw-bold card-title" itemProp="name">{s.title}</h3>
                  <meta itemProp="serviceType" content={s.seo} />
                  <meta itemProp="areaServed" content="Coimbatore" />
                  <p className="card-text text-muted small" itemProp="description">{s.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PLATFORMS & TOOLS ══ */}
        <section aria-labelledby="platforms-heading" className="mb-5">
          <h2 id="platforms-heading" className="text-center mb-4">
            Microcontroller Platforms &amp; Tools – CODEX PROJECT Coimbatore
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">🔲 Microcontroller Platforms</h3>
              <div className="d-flex flex-wrap gap-2">
                {microcontrollers.map((m, i) => (
                  <span
                    key={i}
                    className="badge px-3 py-2"
                    style={{ background: m.color, color: "#1a1a2e", fontSize: "0.82rem", border: "1px solid #ddd" }}
                  >
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">🛠️ IDEs &amp; Design Tools</h3>
              <div className="d-flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span
                    key={i}
                    className="badge px-3 py-2"
                    style={{ background: t.color, color: "#1a1a2e", fontSize: "0.82rem", border: "1px solid #ddd" }}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="mb-5">
          <h2 id="projects-heading" className="text-center mb-2">
            Embedded System Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="text-center text-muted mb-4">
            Latest IEEE 2024-25 embedded system project topics with real hardware for
            ECE, EEE, EIE &amp; Diploma students in Coimbatore
          </p>
          <div className="row g-3">
            {projectIdeas.map((p, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div
                  className="p-3 rounded border h-100"
                  style={{ background: tagColors[p.tag] || "#f8f9fa" }}
                  itemScope itemType="https://schema.org/CreativeWork"
                >
                  <p className="mb-1 fw-semibold small" itemProp="name">{p.name}</p>
                  <span
                    className="badge"
                    style={{ background: "#1a237e", color: "white", fontSize: "0.68rem" }}
                    itemProp="genre"
                  >
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══ */}
        <section aria-labelledby="why-heading" className="mb-5">
          <h2 id="why-heading" className="text-center mb-2">
            Why CODEX PROJECT is the Best Embedded Project Centre in Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Trusted by 500+ ECE, EEE &amp; EIE students across Coimbatore for real hardware embedded projects
          </p>
          <div className="row g-4">
            {whyChoose.map((w, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="d-flex gap-3 align-items-start p-3 bg-light rounded h-100">
                  <span className="fs-3" aria-hidden="true">{w.icon}</span>
                  <div>
                    <h3 className="h6 fw-bold mb-1">{w.title}</h3>
                    <p className="text-muted mb-0 small">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══ */}
        <section aria-labelledby="reviews-heading" className="mb-5">
          <h2 id="reviews-heading" className="text-center mb-2">
            Student Reviews – Embedded Project Centre Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            What ECE, EEE &amp; EIE students say about CODEX PROJECT's embedded project support
          </p>
          <div className="row g-4">
            {reviews.map((r, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="card border-0 shadow-sm h-100 p-3"
                  itemScope itemType="https://schema.org/Review"
                >
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <p className="mb-1">{r.stars}</p>
                  </div>
                  <p className="text-muted fst-italic small" itemProp="reviewBody">"{r.text}"</p>
                  <p className="fw-bold mb-0 small" itemProp="author">– {r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section aria-labelledby="faq-heading" className="mb-5">
          <h2 id="faq-heading" className="text-center mb-4">
            Frequently Asked Questions – Embedded Project Centre Coimbatore
          </h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="mb-3 p-3 bg-light rounded">
              <h3 className="h6 fw-bold mb-1">{item.name}</h3>
              <p className="text-muted mb-0 small">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-heading" className="mb-5 p-4 border rounded">
          <h2 id="seo-heading" className="h5 fw-bold mb-3">
            Embedded System Project Centre in Coimbatore – Complete Guide 2024-25
          </h2>
          <p className="text-muted small">
            Searching for the <strong>best embedded project centre in Coimbatore</strong>? CODEX
            PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>,
            is your complete embedded systems final year project solution. We specialize in{" "}
            <strong>8051 microcontroller projects</strong>,{" "}
            <strong>ARM Cortex embedded projects</strong>, <strong>PIC and AVR projects</strong>,{" "}
            <strong>Arduino projects</strong>, <strong>Raspberry Pi projects</strong>, and{" "}
            <strong>FPGA/VLSI design projects</strong> — all at affordable pricing in Coimbatore.
          </p>
          <p className="text-muted small">
            Every embedded project at CODEX PROJECT includes real hardware circuit assembly,
            Proteus simulation, Keil or MPLAB programming, complete sensor integration, IEEE
            2024-25 format project report, circuit diagram, code documentation, and dedicated
            viva preparation. We serve <strong>BE ECE students</strong>,{" "}
            <strong>BE EEE students</strong>, <strong>EIE and Instrumentation students</strong>,{" "}
            <strong>ME Embedded Systems students</strong>, and <strong>Diploma students</strong>{" "}
            from all engineering colleges across Coimbatore — including those near Peelamedu,
            Saravanampatti, RS Puram, Singanallur, and Ukkadam.
          </p>
          <p className="text-muted small mb-0">
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram,
            Coimbatore</strong> today for a free consultation on your embedded system final year
            project topic and pricing. We are the <strong>most trusted and affordable embedded
            project centre in Coimbatore</strong> for 2024-25 — with 500+ successful student
            projects delivered.
          </p>
        </section>

        {/* ══ KEYWORD TAG CLOUD ══ */}
        <section aria-label="Related embedded project searches Coimbatore" className="mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
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
            ].map((tag) => (
              <a
                key={tag}
                href={`/services/embedded-projects/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="badge px-3 py-2 text-decoration-none"
                style={{ background: "#1a237e", color: "white", fontSize: "0.78rem" }}
                aria-label={tag}
              >
                {tag}
              </a>
            ))}
          </div>
        </section>

        {/* ══ LOCATION ══ */}
        <section aria-labelledby="location-heading" className="mb-5">
          <h2 id="location-heading" className="text-center mb-3">
            Visit CODEX PROJECT – Embedded Project Centre, Gandhipuram, Coimbatore
          </h2>
          <p className="text-center text-muted mb-3">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <iframe
            src="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            title="CODEX PROJECT Embedded Project Centre – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
            aria-label="Google Maps showing CODEX PROJECT embedded centre at Balaji Complex Gandhipuram Coimbatore"
          />
        </section>

        {/* ══ CTA ══ */}
        <section
          className="text-center p-5 rounded"
          style={{ background: "#1a237e" }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-white fw-bold mb-2">
            Start Your Embedded Final Year Project – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-white-50 mb-1">
            Join 500+ ECE, EEE &amp; EIE students who completed embedded projects with us.
          </p>
          <p className="text-white-50 small mb-1">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <p className="text-white-50 small mb-4">
            Real Hardware · Keil &amp; Proteus · IEEE Documentation · Viva Support · Affordable Pricing
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-warning btn-lg fw-bold"
              aria-label="Contact CODEX PROJECT embedded project centre Gandhipuram Coimbatore"
            >
              📞 Contact Now – Free Consultation
            </button>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
              aria-label="Review CODEX PROJECT on Google"
            >
              ⭐ Review on Google
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EmbeddedProjects;