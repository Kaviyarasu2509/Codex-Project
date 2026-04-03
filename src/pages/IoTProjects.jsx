import React from "react";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const iotSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Best IoT Project Centre in Coimbatore – CODEX PROJECT",
  "serviceType": "IoT Final Year Project Training and Development",
  "description":
    "CODEX PROJECT is the best IoT project centre in Coimbatore offering affordable Arduino, Raspberry Pi, NodeMCU, ESP32, and cloud-based IoT final year projects for BE, ME, ECE, EEE, CSE, and Diploma students with complete hardware, software, documentation, and viva support.",
  "provider": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
  },
  "areaServed": {
    "@type": "City",
    "name": "Coimbatore",
  },
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
    "name": "IoT Project Services Coimbatore",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arduino IoT Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Raspberry Pi Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NodeMCU ESP32 IoT Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud IoT Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Home Automation Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial IoT Projects Coimbatore" } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "180",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best IoT project centre in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT is the best IoT project centre in Coimbatore, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer real-time Arduino, Raspberry Pi, NodeMCU, ESP32, and cloud-based IoT final year projects for BE, ME, ECE, EEE, CSE, and Diploma students at affordable pricing.",
      },
    },
    {
      "@type": "Question",
      "name": "What IoT hardware platforms do you support at Codex Project Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We support Arduino UNO, Raspberry Pi 4, NodeMCU ESP8266, ESP32, Wemos D1, STM32, PIC, and all major IoT hardware platforms for final year projects in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide cloud integration for IoT projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, CODEX PROJECT provides complete cloud integration for IoT projects using AWS IoT, Google Firebase, ThingSpeak, Blynk, and Azure IoT Hub — best cloud IoT project centre in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cost of IoT final year projects at Codex Project Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT offers the most affordable IoT project pricing in Coimbatore. Cost varies by hardware complexity and cloud integration. Contact us at 2nd Floor, Balaji Complex, Gandhipuram for a free consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you support ECE, EEE, and CSE students for IoT projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, we support BE ECE, EEE, EIE, CSE, IT, and Diploma students for IoT final year projects in Coimbatore with complete hardware setup, coding, documentation, and viva preparation.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is CODEX PROJECT IoT centre located in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT is located at 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. to Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012. Easily accessible from all Coimbatore engineering colleges.",
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
    { "@type": "ListItem", "position": 3, "name": "IoT Projects Coimbatore", "item": "https://www.codexproject.in/services/iot-projects" },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "🏠",
    title: "Smart Home Automation",
    seo: "Home Automation IoT Projects Coimbatore",
    desc: "Voice-controlled, app-controlled smart home IoT projects using NodeMCU, ESP32, and Raspberry Pi — best home automation project centre in Coimbatore for ECE and CSE students.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based IoT Projects",
    seo: "Cloud IoT Projects Coimbatore",
    desc: "AWS IoT, Google Firebase, ThingSpeak, and Azure IoT Hub integrated final year projects — real-time data monitoring and dashboard projects in Coimbatore.",
  },
  {
    icon: "🤖",
    title: "IoT with AI & ML",
    seo: "IoT AI Machine Learning Projects Coimbatore",
    desc: "Edge AI, TinyML, and machine learning integrated IoT projects — best IoT with AI project centre in Coimbatore for CSE and ECE students 2024-25.",
  },
  {
    icon: "🏭",
    title: "Industrial IoT (IIoT)",
    seo: "Industrial IoT Projects Coimbatore",
    desc: "SCADA, PLC, and industrial monitoring IoT systems — complete industrial automation final year projects for EEE and Mechatronics students in Coimbatore.",
  },
  {
    icon: "🌱",
    title: "Agriculture IoT Projects",
    seo: "Agriculture IoT Projects Coimbatore",
    desc: "Smart irrigation, soil moisture monitoring, greenhouse automation, and precision agriculture IoT projects — best agri-IoT project centre in Coimbatore.",
  },
  {
    icon: "❤️",
    title: "Healthcare IoT Projects",
    seo: "Healthcare IoT Projects Coimbatore",
    desc: "Patient monitoring, wearable health sensors, ECG monitoring, and remote healthcare IoT final year projects for BE and ME students in Coimbatore.",
  },
  {
    icon: "🚗",
    title: "Smart Vehicle & GPS Projects",
    seo: "GPS IoT Vehicle Tracking Projects Coimbatore",
    desc: "GPS vehicle tracking, accident detection, smart parking, and vehicle telematics IoT projects — best GPS project centre in Coimbatore.",
  },
  {
    icon: "🌍",
    title: "Environmental Monitoring",
    seo: "Environmental Monitoring IoT Projects Coimbatore",
    desc: "Air quality, water quality, pollution monitoring, and weather station IoT projects using Arduino and Raspberry Pi in Coimbatore.",
  },
];

const hardwarePlatforms = [
  { name: "Arduino UNO / Mega", color: "#e3f2fd" },
  { name: "Raspberry Pi 4", color: "#f3e5f5" },
  { name: "NodeMCU ESP8266", color: "#e8f5e9" },
  { name: "ESP32", color: "#fff3e0" },
  { name: "Wemos D1 Mini", color: "#fce4ec" },
  { name: "STM32 Nucleo", color: "#e0f7fa" },
  { name: "LoRa SX1278", color: "#f9fbe7" },
  { name: "Zigbee / BLE Module", color: "#ede7f6" },
];

const cloudPlatforms = [
  { name: "AWS IoT Core", color: "#fff8e1" },
  { name: "Google Firebase", color: "#fbe9e7" },
  { name: "ThingSpeak", color: "#e8f5e9" },
  { name: "Blynk IoT", color: "#e3f2fd" },
  { name: "Azure IoT Hub", color: "#ede7f6" },
  { name: "MQTT Broker", color: "#f3e5f5" },
];

const projectIdeas = [
  { name: "Smart Irrigation System using IoT", tag: "Agriculture" },
  { name: "IoT Based Health Monitoring System", tag: "Healthcare" },
  { name: "Home Automation using NodeMCU", tag: "Smart Home" },
  { name: "Smart Parking System with IoT", tag: "Smart City" },
  { name: "IoT Air Pollution Monitoring", tag: "Environment" },
  { name: "Smart Energy Meter with IoT", tag: "Industrial" },
  { name: "IoT Fire Detection & Alert System", tag: "Safety" },
  { name: "Soil Moisture Monitoring IoT", tag: "Agriculture" },
  { name: "Patient Health Monitor IoT", tag: "Healthcare" },
  { name: "Smart Water Level Controller", tag: "Automation" },
  { name: "IoT Cold Chain Monitoring", tag: "Industrial" },
  { name: "Accident Detection & Alert System", tag: "Vehicle" },
  { name: "Smart Street Light Control", tag: "Smart City" },
  { name: "Gas Leakage Detection IoT", tag: "Safety" },
  { name: "IoT Based Weather Station", tag: "Environment" },
  { name: "Wearable Fall Detection IoT", tag: "Healthcare" },
  { name: "Smart Greenhouse Automation", tag: "Agriculture" },
  { name: "RFID Attendance System", tag: "Smart Campus" },
  { name: "Edge AI Object Detection IoT", tag: "AI + IoT" },
  { name: "Smart Waste Management System", tag: "Smart City" },
];

const tagColors = {
  Agriculture: "#e8f5e9",
  Healthcare: "#fce4ec",
  "Smart Home": "#e3f2fd",
  "Smart City": "#e0f7fa",
  Environment: "#f9fbe7",
  Industrial: "#fff3e0",
  Safety: "#ffebee",
  Automation: "#f3e5f5",
  Vehicle: "#ede7f6",
  "Smart Campus": "#e8eaf6",
  "AI + IoT": "#fce4ec",
};

const whyChoose = [
  { icon: "💰", title: "Most Affordable IoT Projects", desc: "Lowest IoT project cost in Coimbatore — hardware + software + documentation all included, no hidden charges." },
  { icon: "🔌", title: "Real Hardware Working Models", desc: "Actual IoT hardware with sensors, actuators, and cloud dashboard — not simulation. Students demo live projects at college." },
  { icon: "☁️", title: "Cloud & App Integration", desc: "Firebase, ThingSpeak, AWS IoT, and Blynk mobile app integration — full stack IoT projects for 2024-25." },
  { icon: "📋", title: "Complete IEEE Documentation", desc: "Full project report, PPT, IEEE abstract, circuit diagram, and code — everything ready for college submission in Coimbatore." },
  { icon: "🎤", title: "Viva Preparation Support", desc: "Expert coaching for project review, viva questions, and demo presentation — specialized for Coimbatore engineering colleges." },
  { icon: "📍", title: "Gandhipuram – Central Location", desc: "Located at 2nd Floor, Balaji Complex, Gandhipuram — easily reachable from all Coimbatore engineering college zones." },
];

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Best IoT project centre in Coimbatore! My Smart Irrigation project with NodeMCU and Firebase was built perfectly with real hardware and complete IEEE documentation. Highly recommended for ECE students.",
    name: "Priya R., BE ECE – Gandhipuram",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Completed my Home Automation IoT project at Codex Project, 2nd Floor Balaji Complex. Excellent real-time working model, Blynk app integration, and affordable cost. Best IoT centre near Gandhipuram!",
    name: "Karthik M., BE CSE",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "I got my IoT + AI project (Edge Object Detection) done at Codex Project Coimbatore. The team built a complete Raspberry Pi + AWS IoT system with full documentation and viva support. Amazing experience!",
    name: "Arun S., ME Embedded Systems",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const IoTProjects = () => {
  return (
    <div>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iotSchema) }} />
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
              <span itemProp="name">IoT Projects Coimbatore</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══ H1 ══ */}
        <h1 className="text-center mb-3">
          Best IoT Project Centre in Coimbatore – CODEX PROJECT
        </h1>
        <p className="text-center lead mb-2">
          Top-rated IoT final year project centre for BE ECE, EEE, CSE &amp; Diploma students in Coimbatore
        </p>
        <p className="text-center mb-1">
          <strong>CODEX PROJECT</strong> is the <strong>best IoT project centre in Coimbatore</strong>,
          offering real-time <strong>Arduino, Raspberry Pi, NodeMCU, ESP32</strong>, and{" "}
          <strong>cloud-based IoT final year projects</strong> with complete hardware setup, coding,
          cloud integration, IEEE documentation, and viva support — at the most affordable pricing
          in Coimbatore.
        </p>
        <p className="text-center text-muted small mb-2">
          📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road,
          Gandhipuram, Coimbatore – 641012
        </p>
        <p className="text-center text-muted small mb-5">
          Serving ECE, EEE, EIE, CSE, IT &amp; Diploma students from all Coimbatore engineering colleges
        </p>

        {/* ══ SERVICES ══ */}
        <section aria-labelledby="services-heading" className="mb-5">
          <h2 id="services-heading" className="text-center mb-2">
            IoT Project Services at CODEX PROJECT Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Complete IoT project support across all domains — hardware, firmware, cloud,
            mobile app, IEEE documentation included
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

        {/* ══ HARDWARE & CLOUD PLATFORMS ══ */}
        <section aria-labelledby="platforms-heading" className="mb-5">
          <h2 id="platforms-heading" className="text-center mb-4">
            IoT Hardware &amp; Cloud Platforms – CODEX PROJECT Coimbatore
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">🔌 Hardware Platforms</h3>
              <div className="d-flex flex-wrap gap-2">
                {hardwarePlatforms.map((h, i) => (
                  <span
                    key={i}
                    className="badge px-3 py-2"
                    style={{ background: h.color, color: "#1a1a2e", fontSize: "0.82rem", border: "1px solid #ddd" }}
                  >
                    {h.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="h5 fw-bold mb-3">☁️ Cloud &amp; IoT Platforms</h3>
              <div className="d-flex flex-wrap gap-2">
                {cloudPlatforms.map((c, i) => (
                  <span
                    key={i}
                    className="badge px-3 py-2"
                    style={{ background: c.color, color: "#1a1a2e", fontSize: "0.82rem", border: "1px solid #ddd" }}
                  >
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="mb-5">
          <h2 id="projects-heading" className="text-center mb-2">
            IoT Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="text-center text-muted mb-4">
            Latest IEEE 2024-25 IoT project topics with real hardware implementation
            for ECE, EEE, CSE &amp; Diploma students in Coimbatore
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
                    style={{ background: "#0d47a1", color: "white", fontSize: "0.68rem" }}
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
            Why CODEX PROJECT is the Best IoT Project Centre in Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Trusted by 500+ ECE, EEE &amp; CSE students across Coimbatore for real-time IoT projects
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
            Student Reviews – IoT Project Centre Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            What engineering students say about CODEX PROJECT's IoT final year project support
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
            Frequently Asked Questions – IoT Project Centre Coimbatore
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
            IoT Project Centre in Coimbatore – Complete Guide 2024-25
          </h2>
          <p className="text-muted small">
            Searching for the <strong>best IoT project centre in Coimbatore</strong>? CODEX PROJECT,
            located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>, is your
            complete IoT final year project solution. We specialize in{" "}
            <strong>Arduino IoT projects</strong>, <strong>Raspberry Pi projects</strong>,{" "}
            <strong>NodeMCU ESP8266 projects</strong>, <strong>ESP32 IoT projects</strong>,{" "}
            <strong>cloud IoT projects</strong>, and <strong>AI-integrated IoT projects</strong> —
            all at the most affordable pricing in Coimbatore.
          </p>
          <p className="text-muted small">
            Every IoT project includes real hardware setup, complete firmware coding, cloud dashboard
            integration, mobile app control, IEEE 2024-25 format project report, PPT, circuit
            diagram, and dedicated viva preparation. We serve <strong>BE ECE students</strong>,{" "}
            <strong>BE EEE students</strong>, <strong>BE CSE and IT students</strong>,{" "}
            <strong>ME Embedded Systems students</strong>, and <strong>Diploma students</strong>{" "}
            from all engineering colleges across Coimbatore including those near Peelamedu,
            Gandhipuram, Saravanampatti, RS Puram, Singanallur, and Ukkadam.
          </p>
          <p className="text-muted small mb-0">
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram,
            Coimbatore</strong> for a free consultation on your IoT final year project topic
            and pricing. We are the <strong>most trusted and affordable IoT project centre
            in Coimbatore</strong> for 2024-25.
          </p>
        </section>

        {/* ══ KEYWORD TAG CLOUD ══ */}
        <section aria-label="Related IoT project searches Coimbatore" className="mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "IoT Projects Coimbatore",
              "Arduino Projects Coimbatore",
              "Raspberry Pi Projects Coimbatore",
              "NodeMCU Projects Coimbatore",
              "ESP32 Projects Coimbatore",
              "Cloud IoT Projects Coimbatore",
              "Home Automation Projects",
              "Smart Agriculture IoT",
              "Healthcare IoT Projects",
              "Industrial IoT Coimbatore",
              "IoT Projects ECE Coimbatore",
              "IEEE IoT Projects 2024-25",
              "IoT Project Centre Gandhipuram",
              "Affordable IoT Projects Coimbatore",
            ].map((tag) => (
              <a
                key={tag}
                href={`/services/iot-projects/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="badge px-3 py-2 text-decoration-none"
                style={{ background: "#0277bd", color: "white", fontSize: "0.78rem" }}
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
            Visit CODEX PROJECT – IoT Project Centre, Gandhipuram, Coimbatore
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
            title="CODEX PROJECT IoT Project Centre location – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
            aria-label="Google Maps showing CODEX PROJECT IoT centre at Balaji Complex Gandhipuram Coimbatore"
          />
        </section>

        {/* ══ CTA ══ */}
        <section
          className="text-center p-5 rounded"
          style={{ background: "#0d47a1" }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-white fw-bold mb-2">
            Start Your IoT Final Year Project Today – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-white-50 mb-1">
            Join 500+ ECE, EEE &amp; CSE students who completed their IoT projects with us.
          </p>
          <p className="text-white-50 small mb-1">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <p className="text-white-50 small mb-4">
            Real Hardware · Cloud Integration · IEEE Documentation · Viva Support · Affordable Pricing
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-warning btn-lg fw-bold"
              aria-label="Contact CODEX PROJECT IoT project centre Gandhipuram Coimbatore"
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

export default IoTProjects;