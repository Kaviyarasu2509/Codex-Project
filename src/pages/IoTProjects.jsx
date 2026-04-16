import React, { useState, useEffect, useRef } from "react";
import "./IoTProjects.css";

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
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": "180" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Which is the best IoT project centre in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is the best IoT project centre in Coimbatore, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer real-time Arduino, Raspberry Pi, NodeMCU, ESP32, and cloud-based IoT final year projects for BE, ME, ECE, EEE, CSE, and Diploma students at affordable pricing." } },
    { "@type": "Question", "name": "What IoT hardware platforms do you support at Codex Project Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "We support Arduino UNO, Raspberry Pi 4, NodeMCU ESP8266, ESP32, Wemos D1, STM32, PIC, and all major IoT hardware platforms for final year projects in Coimbatore." } },
    { "@type": "Question", "name": "Do you provide cloud integration for IoT projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT provides complete cloud integration for IoT projects using AWS IoT, Google Firebase, ThingSpeak, Blynk, and Azure IoT Hub — best cloud IoT project centre in Coimbatore." } },
    { "@type": "Question", "name": "What is the cost of IoT final year projects at Codex Project Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT offers the most affordable IoT project pricing in Coimbatore. Cost varies by hardware complexity and cloud integration. Contact us at 2nd Floor, Balaji Complex, Gandhipuram for a free consultation." } },
    { "@type": "Question", "name": "Do you support ECE, EEE, and CSE students for IoT projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we support BE ECE, EEE, EIE, CSE, IT, and Diploma students for IoT final year projects in Coimbatore with complete hardware setup, coding, documentation, and viva preparation." } },
    { "@type": "Question", "name": "Where is CODEX PROJECT IoT centre located in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is located at 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. to Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012. Easily accessible from all Coimbatore engineering colleges." } },
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

// ─── Data (100% original IoT content) ────────────────────────────────────────
const services = [
  { icon: "🏠", title: "Smart Home Automation", seo: "Home Automation IoT Projects Coimbatore", desc: "Voice-controlled, app-controlled smart home IoT projects using NodeMCU, ESP32, and Raspberry Pi — best home automation project centre in Coimbatore for ECE and CSE students." },
  { icon: "☁️", title: "Cloud-Based IoT Projects", seo: "Cloud IoT Projects Coimbatore", desc: "AWS IoT, Google Firebase, ThingSpeak, and Azure IoT Hub integrated final year projects — real-time data monitoring and dashboard projects in Coimbatore." },
  { icon: "🤖", title: "IoT with AI & ML", seo: "IoT AI Machine Learning Projects Coimbatore", desc: "Edge AI, TinyML, and machine learning integrated IoT projects — best IoT with AI project centre in Coimbatore for CSE and ECE students 2024-25." },
  { icon: "🏭", title: "Industrial IoT (IIoT)", seo: "Industrial IoT Projects Coimbatore", desc: "SCADA, PLC, and industrial monitoring IoT systems — complete industrial automation final year projects for EEE and Mechatronics students in Coimbatore." },
  { icon: "🌱", title: "Agriculture IoT Projects", seo: "Agriculture IoT Projects Coimbatore", desc: "Smart irrigation, soil moisture monitoring, greenhouse automation, and precision agriculture IoT projects — best agri-IoT project centre in Coimbatore." },
  { icon: "❤️", title: "Healthcare IoT Projects", seo: "Healthcare IoT Projects Coimbatore", desc: "Patient monitoring, wearable health sensors, ECG monitoring, and remote healthcare IoT final year projects for BE and ME students in Coimbatore." },
  { icon: "🚗", title: "Smart Vehicle & GPS Projects", seo: "GPS IoT Vehicle Tracking Projects Coimbatore", desc: "GPS vehicle tracking, accident detection, smart parking, and vehicle telematics IoT projects — best GPS project centre in Coimbatore." },
  { icon: "🌍", title: "Environmental Monitoring", seo: "Environmental Monitoring IoT Projects Coimbatore", desc: "Air quality, water quality, pollution monitoring, and weather station IoT projects using Arduino and Raspberry Pi in Coimbatore." },
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
  Agriculture: "#e8f5e9", Healthcare: "#fce4ec", "Smart Home": "#e3f2fd",
  "Smart City": "#e0f7fa", Environment: "#f9fbe7", Industrial: "#fff3e0",
  Safety: "#ffebee", Automation: "#f3e5f5", Vehicle: "#ede7f6",
  "Smart Campus": "#e8eaf6", "AI + IoT": "#fce4ec",
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
  { stars: "⭐⭐⭐⭐⭐", text: "Best IoT project centre in Coimbatore! My Smart Irrigation project with NodeMCU and Firebase was built perfectly with real hardware and complete IEEE documentation. Highly recommended for ECE students.", name: "Priya R.", branch: "BE ECE – Gandhipuram" },
  { stars: "⭐⭐⭐⭐⭐", text: "Completed my Home Automation IoT project at Codex Project, 2nd Floor Balaji Complex. Excellent real-time working model, Blynk app integration, and affordable cost. Best IoT centre near Gandhipuram!", name: "Karthik M.", branch: "BE CSE" },
  { stars: "⭐⭐⭐⭐⭐", text: "I got my IoT + AI project (Edge Object Detection) done at Codex Project Coimbatore. The team built a complete Raspberry Pi + AWS IoT system with full documentation and viva support. Amazing experience!", name: "Arun S.", branch: "ME Embedded Systems" },
];

const keywordTags = [
  ["IoT Projects Coimbatore", "/services/iot-projects/iot-projects-coimbatore"],
  ["Arduino Projects Coimbatore", "/services/iot-projects/arduino-projects-coimbatore"],
  ["Raspberry Pi Projects Coimbatore", "/services/iot-projects/raspberry-pi-projects-coimbatore"],
  ["NodeMCU Projects Coimbatore", "/services/iot-projects/nodemcu-projects-coimbatore"],
  ["ESP32 Projects Coimbatore", "/services/iot-projects/esp32-projects-coimbatore"],
  ["Cloud IoT Projects Coimbatore", "/services/iot-projects/cloud-iot-projects-coimbatore"],
  ["Home Automation Projects", "/services/iot-projects/home-automation-projects"],
  ["Smart Agriculture IoT", "/services/iot-projects/smart-agriculture-iot"],
  ["Healthcare IoT Projects", "/services/iot-projects/healthcare-iot-projects"],
  ["Industrial IoT Coimbatore", "/services/iot-projects/industrial-iot-coimbatore"],
  ["IoT Projects ECE Coimbatore", "/services/iot-projects/iot-projects-ece-coimbatore"],
  ["IEEE IoT Projects 2024-25", "/services/iot-projects/ieee-iot-projects-2024-25"],
  ["IoT Project Centre Gandhipuram", "/services/iot-projects/iot-project-centre-gandhipuram"],
  ["Affordable IoT Projects Coimbatore", "/services/iot-projects/affordable-iot-projects-coimbatore"],
];

// ─── Component ─────────────────────────────────────────────────────────────────
const IoTProjects = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("iot-visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div className="iot-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iotSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="iot-hero" aria-labelledby="iot-h1">
        <div className="iot-hero-bg">
          <div className="iot-hero-grid"></div>
          <div className="iot-glow iot-glow1"></div>
          <div className="iot-glow iot-glow2"></div>
        </div>
        <div className="iot-container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="iot-breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="iot-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/services" itemProp="item"><span itemProp="name">Services</span></a>
                <meta itemProp="position" content="2" />
              </li>
              <span className="iot-bc-sep">›</span>
              <li aria-current="page" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">IoT Projects Coimbatore</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <h1 id="iot-h1" className="iot-hero-h1">
            Best IoT Project Centre<br />
            in Coimbatore –{" "}
            <span className="iot-accent">CODEX PROJECT</span>
          </h1>

          <p className="iot-hero-sub">
            Top-rated IoT final year project centre for BE ECE, EEE, CSE &amp; Diploma students in Coimbatore
          </p>

          <p className="iot-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best IoT project centre in Coimbatore</strong>,
            offering real-time <strong>Arduino, Raspberry Pi, NodeMCU, ESP32</strong>, and{" "}
            <strong>cloud-based IoT final year projects</strong> with complete hardware setup, coding,
            cloud integration, IEEE documentation, and viva support — at the most affordable pricing
            in Coimbatore.
          </p>

          <p className="iot-hero-addr">📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012</p>
          <p className="iot-hero-serve">Serving ECE, EEE, EIE, CSE, IT &amp; Diploma students from all Coimbatore engineering colleges</p>

          <div className="iot-hero-actions">
            <a href="tel:+918525999002" className="iot-btn iot-btn-primary">📞 Call: 85259 99002</a>
            <a href="/contact" className="iot-btn iot-btn-outline">Get Free Consultation →</a>
          </div>
        </div>
      </section>

      <div className="iot-container iot-main-content">

        {/* ══ SERVICES ══════════════════════════════════════════ */}
        <section aria-labelledby="services-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="services-heading" className="iot-section-title">
            IoT Project Services at CODEX PROJECT Coimbatore
          </h2>
          <p className="iot-section-sub">
            Complete IoT project support across all domains — hardware, firmware, cloud,
            mobile app, IEEE documentation included
          </p>
          <div className="iot-services-grid">
            {services.map((s, i) => (
              <article
                key={i}
                className="iot-service-card"
                itemScope itemType="https://schema.org/Service"
                aria-label={s.seo}
              >
                <div className="iot-svc-top-bar"></div>
                <span className="iot-svc-icon" aria-hidden="true">{s.icon}</span>
                <h3 className="iot-svc-title" itemProp="name">{s.title}</h3>
                <meta itemProp="serviceType" content={s.seo} />
                <meta itemProp="areaServed" content="Coimbatore" />
                <p className="iot-svc-desc" itemProp="description">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ══ HARDWARE & CLOUD PLATFORMS ════════════════════════ */}
        <section aria-labelledby="platforms-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="platforms-heading" className="iot-section-title">
            IoT Hardware &amp; Cloud Platforms – CODEX PROJECT Coimbatore
          </h2>
          <div className="iot-platforms-grid">
            <div>
              <h3 className="iot-platform-group-title">🔌 Hardware Platforms</h3>
              <div className="iot-platform-chips">
                {hardwarePlatforms.map((h, i) => (
                  <span key={i} className="iot-platform-chip" style={{ background: h.color }}>
                    {h.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="iot-platform-group-title">☁️ Cloud &amp; IoT Platforms</h3>
              <div className="iot-platform-chips">
                {cloudPlatforms.map((c, i) => (
                  <span key={i} className="iot-platform-chip" style={{ background: c.color }}>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ══════════════════════════════════════ */}
        <section aria-labelledby="projects-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="projects-heading" className="iot-section-title">
            IoT Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="iot-section-sub">
            Latest IEEE 2024-25 IoT project topics with real hardware implementation
            for ECE, EEE, CSE &amp; Diploma students in Coimbatore
          </p>
          <div className="iot-ideas-grid">
            {projectIdeas.map((p, i) => (
              <div
                key={i}
                className="iot-idea-card"
                style={{ background: tagColors[p.tag] || "#f8f9fa" }}
                itemScope itemType="https://schema.org/CreativeWork"
              >
                <p className="iot-idea-name" itemProp="name">{p.name}</p>
                <span className="iot-idea-tag" itemProp="genre">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ═════════════════════════════════════════ */}
        <section aria-labelledby="why-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="why-heading" className="iot-section-title">
            Why CODEX PROJECT is the Best IoT Project Centre in Coimbatore
          </h2>
          <p className="iot-section-sub">
            Trusted by 500+ ECE, EEE &amp; CSE students across Coimbatore for real-time IoT projects
          </p>
          <div className="iot-why-grid">
            {whyChoose.map((w, i) => (
              <div key={i} className="iot-why-card" style={{ "--wd": `${i * 0.06}s` }}>
                <span className="iot-why-icon">{w.icon}</span>
                <h3 className="iot-why-title">{w.title}</h3>
                <p className="iot-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ════════════════════════════════════ */}
        <section aria-labelledby="reviews-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="reviews-heading" className="iot-section-title">
            Student Reviews – IoT Project Centre Coimbatore
          </h2>
          <p className="iot-section-sub">
            What engineering students say about CODEX PROJECT's IoT final year project support
          </p>
          <div className="iot-reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="iot-review-card" itemScope itemType="https://schema.org/Review">
                <div className="iot-review-stars">
                  {r.stars}
                  <meta itemProp="reviewRating" content="5" />
                </div>
                <p className="iot-review-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="iot-review-author">
                  <div className="iot-review-avatar">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="iot-review-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="faq-heading" className="iot-section-title">
            Frequently Asked Questions – IoT Project Centre Coimbatore
          </h2>
          <div className="iot-faq-list">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className={`iot-faq-item ${openFaq === i ? "iot-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ "--fd": `${i * 0.06}s` }}
              >
                <div className="iot-faq-q">
                  <h3 className="iot-faq-question">{item.name}</h3>
                  <span className="iot-faq-icon" aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                <div className="iot-faq-a">
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT BLOCK ══════════════════════════════════ */}
        <section aria-labelledby="seo-heading" className="iot-section iot-seo-block iot-reveal" ref={addRef}>
          <h2 id="seo-heading" className="iot-seo-title">
            IoT Project Centre in Coimbatore – Complete Guide 2024-25
          </h2>
          <p>
            Searching for the <strong>best IoT project centre in Coimbatore</strong>? CODEX PROJECT,
            located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>, is your
            complete IoT final year project solution. We specialize in{" "}
            <strong>Arduino IoT projects</strong>, <strong>Raspberry Pi projects</strong>,{" "}
            <strong>NodeMCU ESP8266 projects</strong>, <strong>ESP32 IoT projects</strong>,{" "}
            <strong>cloud IoT projects</strong>, and <strong>AI-integrated IoT projects</strong> —
            all at the most affordable pricing in Coimbatore.
          </p>
          <p>
            Every IoT project includes real hardware setup, complete firmware coding, cloud dashboard
            integration, mobile app control, IEEE 2024-25 format project report, PPT, circuit
            diagram, and dedicated viva preparation. We serve <strong>BE ECE students</strong>,{" "}
            <strong>BE EEE students</strong>, <strong>BE CSE and IT students</strong>,{" "}
            <strong>ME Embedded Systems students</strong>, and <strong>Diploma students</strong>{" "}
            from all engineering colleges across Coimbatore including those near Peelamedu,
            Gandhipuram, Saravanampatti, RS Puram, Singanallur, and Ukkadam.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram,
            Coimbatore</strong> for a free consultation on your IoT final year project topic
            and pricing. We are the <strong>most trusted and affordable IoT project centre
            in Coimbatore</strong> for 2024-25.
          </p>
        </section>

        {/* ══ KEYWORD TAG CLOUD ══════════════════════════════════ */}
        <section aria-label="Related IoT project searches Coimbatore" className="iot-section iot-reveal" ref={addRef}>
          <div className="iot-keywords-section">
            <h2 className="iot-kw-label">Popular IoT Project Searches – Coimbatore</h2>
            <div className="iot-kw-grid">
              {keywordTags.map(([label, href]) => (
                <a key={label} href={href} className="iot-kw-tag" aria-label={label}>{label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LOCATION ═══════════════════════════════════════════ */}
        <section aria-labelledby="location-heading" className="iot-section iot-reveal" ref={addRef}>
          <h2 id="location-heading" className="iot-section-title">
            Visit CODEX PROJECT – IoT Project Centre, Gandhipuram, Coimbatore
          </h2>
          <p className="iot-location-addr">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <div className="iot-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CODEX PROJECT Software Project Center – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
              aria-label="Google Maps showing CODEX PROJECT software centre at Balaji Complex Gandhipuram Coimbatore"
            />
          </div>
        </section>

        {/* ══ CTA ════════════════════════════════════════════════ */}
        <section className="iot-cta iot-reveal" ref={addRef} aria-labelledby="cta-heading">
          <div className="iot-cta-bg"></div>
          <div className="iot-cta-inner">
            <h2 id="cta-heading" className="iot-cta-title">
              Start Your IoT Final Year Project Today – CODEX PROJECT Coimbatore
            </h2>
            <p className="iot-cta-sub">Join 500+ ECE, EEE &amp; CSE students who completed their IoT projects with us.</p>
            <p className="iot-cta-addr">📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012</p>
            <p className="iot-cta-tags">Real Hardware · Cloud Integration · IEEE Documentation · Viva Support · Affordable Pricing</p>
            <div className="iot-cta-actions">
              <a href="tel:+918525999002" className="iot-cta-btn iot-cta-primary" aria-label="Contact CODEX PROJECT IoT project centre Gandhipuram Coimbatore">
                📞 Contact Now – Free Consultation
              </a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="iot-cta-btn iot-cta-outline" aria-label="Review CODEX PROJECT on Google">
                ⭐ Review on Google
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IoTProjects;