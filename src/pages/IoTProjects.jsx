import React, { useState, useEffect, useRef } from "react";
import "./IoTProjects.css";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════
const YEAR      = "2025-26";
const PHONE     = "8525999032";   // Hardware / IoT line
const PHONE_GEN = "8525999002";
const WA        = `https://wa.me/91${PHONE_GEN}`;
const ADDR      = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const iotSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `Best IoT Project Center in Coimbatore ${YEAR} – CODEX PROJECT`,
  "serviceType": "IoT Final Year Project Training and Development",
  "description": `CODEX PROJECT is the best IoT project center in Coimbatore ${YEAR}. We offer IEEE ${YEAR} Arduino, Raspberry Pi, NodeMCU, ESP32, AWS IoT, Firebase, and cloud-based IoT final year projects for BE ECE, EEE, CSE, and Diploma students with real hardware, complete documentation, internship certificate, and viva support.`,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.codexproject.in/#organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
    "telephone": `+91${PHONE}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
      "addressLocality": "Gandhipuram, Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641012",
      "addressCountry": "IN",
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "11.0168", "longitude": "76.9558" },
    "openingHours": "Mo-Sa 09:00-20:00",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "ratingCount": "320" },
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tirupur" },
    { "@type": "City", "name": "Erode" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `IoT Project Services Coimbatore ${YEAR}`,
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Arduino IoT Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Raspberry Pi Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `NodeMCU ESP32 IoT Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Cloud AWS Firebase IoT Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Smart Home Automation Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Industrial IoT Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `AI Edge IoT Projects Coimbatore ${YEAR}` } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `Best IoT project center in Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best IoT project center in Coimbatore ${YEAR}, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer real-time Arduino, Raspberry Pi, NodeMCU, ESP32, and cloud-based IoT final year projects for BE ECE, EEE, CSE, and Diploma students with free internship certificate. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "What IoT hardware platforms does CODEX PROJECT support?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT supports Arduino UNO/Mega/Nano, Raspberry Pi 4, NodeMCU ESP8266, ESP32, ESP32-CAM, Wemos D1 Mini, STM32 Nucleo, LoRa SX1278, Zigbee, and all major IoT hardware platforms for final year projects in Coimbatore ${YEAR}. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "Which cloud platforms does CODEX PROJECT use for IoT projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT integrates AWS IoT Core, Google Firebase, ThingSpeak, Blynk IoT, Azure IoT Hub, MQTT Broker, and InfluxDB for cloud-based IoT final year projects in Coimbatore. Mobile app dashboards using Flutter and Android are included. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": `Cost of IoT final year projects at CODEX PROJECT Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers the most affordable IoT project pricing in Coimbatore ${YEAR} with zero hidden charges. All packages include real hardware, firmware coding, cloud integration, IEEE documentation, PPT, circuit diagram, viva prep, and free internship certificate. EMI available. Call ${PHONE_GEN} for free quote.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT support ECE, EEE, and CSE students for IoT?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT supports BE ECE, EEE, EIE, CSE, IT, ME Embedded, and Diploma students for IoT final year projects in Coimbatore ${YEAR} from all colleges including PSG Tech, CIT, Sri Krishna, KPR, KGISL, Karpagam, SNS, and 20+ others. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT provide internship certificate with IoT projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! Every IoT project at CODEX PROJECT Coimbatore includes a FREE internship certificate along with IEEE format project report, circuit diagram, source code, PPT, and viva preparation coaching. Call ${PHONE_GEN}.` },
    },
    {
      "@type": "Question",
      "name": "What is included in an IoT project package at CODEX PROJECT?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT IoT project packages include: (1) Real hardware with all sensors and actuators, (2) Firmware coding (C/C++/Python/MicroPython), (3) Cloud dashboard setup (Firebase/AWS IoT/ThingSpeak), (4) Mobile app control (Flutter/Android/Blynk), (5) IEEE ${YEAR} format project report, (6) Circuit diagram and PCB layout, (7) PPT for reviews, (8) 50+ viva Q&A preparation, (9) FREE internship certificate, (10) Unlimited revisions. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": `AI and Edge IoT projects Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT provides AI-integrated IoT projects for ${YEAR} including Edge AI with Raspberry Pi + YOLO v8, TinyML on Arduino, Face Detection with ESP32-CAM, and anomaly detection in industrial IoT. Best AI+IoT project center in Coimbatore. Call ${PHONE}.` },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.codexproject.in/services" },
    { "@type": "ListItem", "position": 3, "name": `IoT Projects Coimbatore ${YEAR}`, "item": "https://www.codexproject.in/services/iot-projects" },
  ],
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const services = [
  { icon:"🏠", title:"Smart Home Automation",       seo:`Home Automation IoT Coimbatore ${YEAR}`,          color:"#e3f2fd", accent:"#1565c0", desc:`Voice-controlled, app-controlled smart home IoT projects using NodeMCU, ESP32, and Raspberry Pi with Blynk and Firebase — best home automation project center in Coimbatore ${YEAR}.` },
  { icon:"☁️", title:"Cloud-Based IoT Projects",     seo:`Cloud IoT Projects Coimbatore ${YEAR}`,           color:"#e8f5e9", accent:"#2e7d32", desc:`AWS IoT Core, Google Firebase, ThingSpeak, and Azure IoT Hub integrated final year projects with real-time monitoring dashboards — best cloud IoT center in Coimbatore ${YEAR}.` },
  { icon:"🤖", title:"AI + Edge IoT Projects",       seo:`IoT AI Edge Coimbatore ${YEAR}`,                  color:"#f3e5f5", accent:"#6a1b9a", desc:`Edge AI with Raspberry Pi + YOLO v8, TinyML on Arduino, ESP32-CAM face detection, anomaly detection — best AI IoT project center in Coimbatore ${YEAR} for CSE and ECE.` },
  { icon:"🏭", title:"Industrial IoT (IIoT)",        seo:`Industrial IoT SCADA Coimbatore ${YEAR}`,         color:"#fff3e0", accent:"#e65100", desc:`SCADA, PLC, industrial monitoring, predictive maintenance IoT systems — complete IIoT final year projects for EEE and Mechatronics students in Coimbatore.` },
  { icon:"🌱", title:"Agriculture IoT Projects",     seo:`Smart Agriculture IoT Coimbatore ${YEAR}`,        color:"#e8f5e9", accent:"#33691e", desc:`Smart irrigation, soil moisture monitoring, greenhouse automation, pest detection, and crop disease IoT projects — best agri-IoT project center in Coimbatore ${YEAR}.` },
  { icon:"❤️", title:"Healthcare IoT Projects",      seo:`Healthcare IoT Coimbatore ${YEAR}`,               color:"#fce4ec", accent:"#880e4f", desc:`Patient monitoring, wearable health sensors, ECG monitoring, fall detection, and remote healthcare IoT final year projects for BE and ME students in Coimbatore.` },
  { icon:"🚗", title:"Smart Vehicle & GPS Projects", seo:`GPS Vehicle Tracking IoT Coimbatore ${YEAR}`,     color:"#ede7f6", accent:"#283593", desc:`GPS vehicle tracking, accident detection, smart parking, DMS (driver monitoring), and vehicle telematics IoT projects — best GPS project center in Coimbatore ${YEAR}.` },
  { icon:"🌍", title:"Environmental Monitoring",     seo:`Environmental Monitoring IoT Coimbatore ${YEAR}`, color:"#f9fbe7", accent:"#558b2f", desc:`Air quality (MQ sensors + ThingSpeak), water quality, pollution monitoring, flood detection, and weather station IoT projects using Arduino and Raspberry Pi in Coimbatore.` },
  { icon:"🏙️", title:"Smart City IoT Projects",      seo:`Smart City IoT Coimbatore ${YEAR}`,               color:"#e0f7fa", accent:"#00695c", desc:`Smart street lighting, smart waste management, smart parking, traffic control, and energy monitoring IoT projects — best smart city project center in Coimbatore ${YEAR}.` },
  { icon:"🔋", title:"Energy Monitoring IoT",        seo:`Energy Monitoring IoT Coimbatore ${YEAR}`,        color:"#fff8e1", accent:"#f57f17", desc:`Smart energy meters, solar MPPT monitoring, power quality analysis, and renewable energy IoT projects with AWS IoT and cloud dashboards for EEE students in Coimbatore.` },
  { icon:"📡", title:"LoRa & Wireless IoT",          seo:`LoRa Wireless IoT Coimbatore ${YEAR}`,            color:"#e8eaf6", accent:"#1a237e", desc:`LoRa SX1278 long-range IoT, Zigbee mesh networks, BLE, and NB-IoT projects for remote monitoring applications — best wireless IoT center in Coimbatore ${YEAR}.` },
  { icon:"🤝", title:"IoT with Blockchain",          seo:`IoT Blockchain Projects Coimbatore ${YEAR}`,      color:"#f3e5f5", accent:"#4a148c", desc:`Blockchain-secured IoT data, supply chain IoT with Ethereum/Hyperledger, and decentralized IoT applications — advanced IoT final year projects in Coimbatore ${YEAR}.` },
];

const hardwarePlatforms = [
  { name:"Arduino UNO / Mega / Nano", color:"#e3f2fd" },
  { name:"Raspberry Pi 4 / Zero",     color:"#f3e5f5" },
  { name:"NodeMCU ESP8266",           color:"#e8f5e9" },
  { name:"ESP32 / ESP32-CAM",         color:"#fff3e0" },
  { name:"Wemos D1 Mini",             color:"#fce4ec" },
  { name:"STM32 Nucleo",              color:"#e0f7fa" },
  { name:"LoRa SX1276 / SX1278",     color:"#f9fbe7" },
  { name:"Zigbee / BLE Module",       color:"#ede7f6" },
  { name:"GSM / GPS Module",          color:"#e8eaf6" },
  { name:"RFID / NFC Module",         color:"#fff8e1" },
];

const cloudPlatforms = [
  { name:"AWS IoT Core",     color:"#fff8e1" },
  { name:"Google Firebase",  color:"#fbe9e7" },
  { name:"ThingSpeak",       color:"#e8f5e9" },
  { name:"Blynk IoT",        color:"#e3f2fd" },
  { name:"Azure IoT Hub",    color:"#ede7f6" },
  { name:"MQTT Broker",      color:"#f3e5f5" },
  { name:"InfluxDB + Grafana",color:"#e0f7fa" },
  { name:"Node-RED",         color:"#fff3e0" },
];

const projectIdeas = [
  { name:"Smart Irrigation System – NodeMCU + Firebase",   tag:"Agriculture" },
  { name:"IoT Health Monitoring – HR, SpO2, Temperature",  tag:"Healthcare" },
  { name:"Home Automation – ESP32 + Blynk + Voice",        tag:"Smart Home" },
  { name:"Smart Parking System – RFID + IoT Dashboard",    tag:"Smart City" },
  { name:"Air Quality Monitoring – MQ135 + ThingSpeak",    tag:"Environment" },
  { name:"Smart Energy Meter – AWS IoT Dashboard",         tag:"Industrial" },
  { name:"IoT Fire & Gas Detection – MQ2 + ESP32",         tag:"Safety" },
  { name:"Soil Moisture Monitor – Arduino + Firebase",     tag:"Agriculture" },
  { name:"Wearable Fall Detection – MPU6050 + IoT",        tag:"Healthcare" },
  { name:"Smart Water Level Controller – Ultrasonic",      tag:"Automation" },
  { name:"Cold Chain Monitoring – Temperature + Humidity", tag:"Industrial" },
  { name:"GPS + Accident Detection – ARM + GSM",           tag:"Vehicle" },
  { name:"Smart Street Light – LDR + IoT",                 tag:"Smart City" },
  { name:"Gas Leakage Detection – MQ6 + SMS Alert",        tag:"Safety" },
  { name:"IoT Weather Station – Firebase + Mobile App",    tag:"Environment" },
  { name:"Smart Greenhouse – Temp, Humidity, CO2 Control", tag:"Agriculture" },
  { name:"RFID Attendance System – Cloud + Dashboard",     tag:"Smart Campus" },
  { name:"Edge AI Object Detection – Raspberry Pi + YOLO", tag:"AI + IoT" },
  { name:"Smart Waste Management – Ultrasonic + IoT",      tag:"Smart City" },
  { name:"Flood Detection Alert – Water Sensor + GSM",     tag:"Safety" },
  { name:"Smart Doorbell – ESP32-CAM + Telegram Bot",      tag:"Smart Home" },
  { name:"Pet Tracking System – GPS + Google Maps",        tag:"Vehicle" },
  { name:"Anomaly Detection in IoT – ML on Pi",            tag:"AI + IoT" },
  { name:"LoRa Long Range Sensor Network",                  tag:"Wireless IoT" },
];

const tagColors = {
  Agriculture:"#e8f5e9","Healthcare":"#fce4ec","Smart Home":"#e3f2fd",
  "Smart City":"#e0f7fa","Environment":"#f9fbe7","Industrial":"#fff3e0",
  "Safety":"#ffebee","Automation":"#f3e5f5","Vehicle":"#ede7f6",
  "Smart Campus":"#e8eaf6","AI + IoT":"#f3e5f5","Wireless IoT":"#fff8e1",
};

const WHY = [
  { icon:"💰", t:"Most Affordable IoT Projects",    d:`Lowest IoT project cost in Coimbatore ${YEAR} — real hardware + cloud + IEEE docs + internship cert, zero hidden charges. EMI available.` },
  { icon:"🔌", t:"Real Hardware Working Models",    d:`Actual IoT hardware with sensors, actuators, and live cloud dashboard — not simulation. Students demo real working projects at college reviews.` },
  { icon:"☁️", t:"Cloud & Mobile App Integration", d:`Firebase, ThingSpeak, AWS IoT Core, Blynk, Azure IoT, and Flutter/Android mobile app integration — full-stack IoT projects for ${YEAR}.` },
  { icon:"📋", t:"Complete IEEE Documentation",     d:`Full IEEE ${YEAR} project report, PPT, circuit diagram, PCB layout, code documentation — everything ready for all Coimbatore college submission requirements.` },
  { icon:"📜", t:"Free Internship Certificate",     d:`Every IoT project includes a FREE internship certificate accepted by all engineering colleges in Coimbatore, Tirupur, Erode, and Tamil Nadu.` },
  { icon:"🎤", t:"Viva Preparation Coaching",       d:`50+ mock viva questions and answers specific to your IoT project — expert coaching for department reviews at all Coimbatore engineering colleges.` },
  { icon:"🤖", t:"AI + Edge IoT Integration",       d:`YOLO v8 on Raspberry Pi, TinyML on Arduino, ESP32-CAM face detection — we integrate AI with your IoT project for maximum marks and placement value.` },
  { icon:"📍", t:"Central Gandhipuram Location",    d:`Located at Balaji Complex, Gandhipuram — accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and all Coimbatore engineering college zones.` },
];

const REVIEWS = [
  { stars:5, text:`Best IoT project center in Coimbatore! My Smart Irrigation project with NodeMCU, soil sensors, and Firebase dashboard was built perfectly with real hardware and complete IEEE ${YEAR} documentation. Scored the highest marks in my batch!`, name:"Priya R.", branch:"BE ECE – CIT Coimbatore" },
  { stars:5, text:`Completed my Home Automation IoT project at Codex Project, Gandhipuram. ESP32, Blynk app, voice control — excellent real-time working model. The viva coaching was very helpful, I could answer every question confidently. Best IoT center in Coimbatore!`, name:"Karthik M.", branch:"BE CSE – KGISL" },
  { stars:5, text:`My Edge AI + IoT project (Raspberry Pi + YOLO v8 object detection + AWS IoT) was brilliantly done at CODEX PROJECT. Full cloud dashboard, mobile app, complete IEEE documentation — amazing team and very affordable pricing!`, name:"Arun S.", branch:"ME Embedded Systems – PSG Tech" },
  { stars:5, text:`Got my Industrial IoT project (SCADA + NodeMCU + ThingSpeak monitoring) done here. Real hardware, live demo, complete report. The team explained every component so I was fully confident during viva. Most affordable IoT project center I visited!`, name:"Divya K.", branch:"BE EEE – Karpagam" },
  { stars:5, text:`Healthcare IoT project — ECG + SpO2 monitoring with Arduino and Firebase mobile app — completed in just 7 days with all documentation. The internship certificate was a bonus! Highly recommend CODEX PROJECT Coimbatore for IoT projects.`, name:"Ravi M.", branch:"BE ECE – Sri Krishna" },
  { stars:5, text:`Smart Agriculture IoT project with LoRa long-range sensors and cloud dashboard. CODEX PROJECT's team was excellent — they even helped with IEEE paper writing. Best project center for advanced IoT topics in Coimbatore!`, name:"Meena V.", branch:"ME CSE – SNS College" },
];

const COLLEGES = [
  "PSG Tech","CIT","KMEA","Sri Krishna","KPR College","Karpagam","SNS College",
  "KGISL","RVS College","Rathinam","Hindusthan","Sri Eshwar","Dr NGP","Bannari Amman",
  "Excel Engineering","Nehru College","JCT","EASA","Info Institute","Sengunthar",
];

const KEYWORD_TAGS = [
  [`IoT Projects Coimbatore ${YEAR}`,            "/services/iot-projects"],
  [`Arduino Projects Coimbatore ${YEAR}`,         "/services/iot-projects"],
  [`Raspberry Pi Projects Coimbatore ${YEAR}`,    "/services/iot-projects"],
  [`NodeMCU ESP32 Projects Coimbatore`,           "/services/iot-projects"],
  [`Cloud IoT Firebase AWS Coimbatore`,           "/services/iot-projects"],
  [`Home Automation Projects Coimbatore ${YEAR}`, "/services/iot-projects"],
  [`Smart Agriculture IoT Coimbatore`,            "/services/iot-projects"],
  [`Healthcare IoT Projects Coimbatore`,          "/services/iot-projects"],
  [`Industrial IoT SCADA Coimbatore`,             "/services/iot-projects"],
  [`AI Edge IoT Projects Coimbatore`,             "/services/iot-projects"],
  [`IoT Projects ECE Coimbatore ${YEAR}`,         "/services/iot-projects"],
  [`IEEE IoT Projects ${YEAR} Coimbatore`,        "/services/iot-projects"],
  [`IoT Project Center Gandhipuram`,              "/contact"],
  [`Affordable IoT Projects Coimbatore`,          "/contact"],
  [`LoRa Wireless IoT Coimbatore`,                "/services/iot-projects"],
  [`IoT Internship Certificate Coimbatore`,       "/contact"],
];

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
const IoTProjects = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("iot-in"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div className="iot-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(iotSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="iot-hero" aria-labelledby="iot-h1">
        <div className="iot-hero-bg">
          <div className="iot-grid-bg"/>
          <div className="iot-orb iot-orb1"/>
          <div className="iot-orb iot-orb2"/>
        </div>
        <div className="iot-container">
          <nav className="iot-bc" aria-label="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem"><a href="/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1"/></li>
              <span>›</span>
              <li itemScope itemType="https://schema.org/ListItem"><a href="/services" itemProp="item"><span itemProp="name">Services</span></a><meta itemProp="position" content="2"/></li>
              <span>›</span>
              <li aria-current="page" itemScope itemType="https://schema.org/ListItem"><span itemProp="name">IoT Projects {YEAR}</span><meta itemProp="position" content="3"/></li>
            </ol>
          </nav>

          <div className="iot-hero-chip"><span className="iot-chip-dot"/>IEEE {YEAR} — 80+ IoT Project Titles</div>

          <h1 id="iot-h1" className="iot-h1">
            Best IoT Project Center<br/>
            in Coimbatore – <span className="iot-grad">CODEX PROJECT {YEAR}</span>
          </h1>
          <p className="iot-hero-sub">
            Top-rated Arduino, Raspberry Pi, NodeMCU, ESP32 & Cloud IoT final year project center — Gandhipuram, Coimbatore
          </p>
          <p className="iot-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best IoT project center in Coimbatore {YEAR}</strong>, offering real-time <strong>Arduino, Raspberry Pi, NodeMCU, ESP32, and cloud-based IoT final year projects</strong> — with real hardware, cloud integration, mobile app, IEEE {YEAR} documentation, viva preparation, and <strong>free internship certificate</strong> at the most affordable pricing in Coimbatore.
          </p>
          <p className="iot-hero-addr">📍 {ADDR}</p>
          <p className="iot-hero-serve">
            Serving ECE, EEE, EIE, CSE, IT, ME Embedded & Diploma students from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL & all Coimbatore colleges
          </p>

          <div className="iot-trust-row">
            {["IEEE 2025-26","Real Hardware Models","Cloud + Mobile App","Firebase / AWS IoT","Free Internship Cert","Complete Documentation","Viva Coaching","AI + Edge IoT"].map(t=>(
              <span key={t} className="iot-trust-pill">✔ {t}</span>
            ))}
          </div>

          <div className="iot-hero-btns">
            <a href={`tel:+91${PHONE}`}         className="iot-btn iot-btn-gold">📞 Call IoT Line: {PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="iot-btn iot-btn-wa">💬 WhatsApp Us</a>
            <a href="/contact" className="iot-btn iot-btn-outline">Free Consultation →</a>
          </div>
        </div>
      </section>

      <div className="iot-container iot-main">

        {/* ══ SERVICES GRID ═══════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-svc-h2">
          <h2 id="iot-svc-h2" className="iot-sec-title">
            IoT Project Services at CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <p className="iot-sec-sub">
            Complete IoT project support across all domains — real hardware, firmware, cloud dashboard, mobile app, IEEE {YEAR} documentation included
          </p>
          <div className="iot-services-grid">
            {services.map((s,i)=>(
              <article key={i} className="iot-svc-card"
                style={{"--sc":s.accent,"--sbg":s.color}}
                itemScope itemType="https://schema.org/Service">
                <div className="iot-svc-bar"/>
                <span className="iot-svc-icon">{s.icon}</span>
                <h3 className="iot-svc-title" itemProp="name">{s.title}</h3>
                <meta itemProp="serviceType" content={s.seo}/>
                <meta itemProp="areaServed" content="Coimbatore"/>
                <p className="iot-svc-desc" itemProp="description">{s.desc}</p>
                <a href={`${WA}?text=Hi!%20I%20need%20${encodeURIComponent(s.title)}%20IoT%20project%20${YEAR}`}
                   target="_blank" rel="noopener noreferrer" className="iot-svc-cta">
                  💬 WhatsApp for {s.title.split(" ")[0]} Project
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ══ HARDWARE & CLOUD PLATFORMS ══════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-hw-h2">
          <h2 id="iot-hw-h2" className="iot-sec-title">
            IoT Hardware & Cloud Platforms — CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <div className="iot-platforms-grid">
            <div className="iot-platform-card">
              <h3 className="iot-platform-title">🔌 Hardware Platforms</h3>
              <div className="iot-platform-chips">
                {hardwarePlatforms.map((h,i)=>(
                  <span key={i} className="iot-hw-chip" style={{"--hc":h.color}}>{h.name}</span>
                ))}
              </div>
            </div>
            <div className="iot-platform-card">
              <h3 className="iot-platform-title">☁️ Cloud & IoT Platforms</h3>
              <div className="iot-platform-chips">
                {cloudPlatforms.map((c,i)=>(
                  <span key={i} className="iot-hw-chip" style={{"--hc":c.color}}>{c.name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ════════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-ideas-h2">
          <h2 id="iot-ideas-h2" className="iot-sec-title">
            IoT Final Year Project Ideas — Coimbatore {YEAR}
          </h2>
          <p className="iot-sec-sub">
            Latest IEEE {YEAR} IoT project topics with real hardware implementation for ECE, EEE, CSE & Diploma students in Coimbatore
          </p>
          <div className="iot-ideas-grid">
            {projectIdeas.map((p,i)=>(
              <div key={i} className="iot-idea-card"
                style={{"--ibg":tagColors[p.tag]||"#f0f4ff"}}
                itemScope itemType="https://schema.org/CreativeWork">
                <p className="iot-idea-name" itemProp="name">{p.name}</p>
                <span className="iot-idea-tag" itemProp="genre">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══════════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-why-h2">
          <h2 id="iot-why-h2" className="iot-sec-title">
            Why CODEX PROJECT is the Best IoT Project Center in Coimbatore {YEAR}
          </h2>
          <p className="iot-sec-sub">Trusted by 500+ ECE, EEE & CSE students across Coimbatore for real-time IoT projects with IEEE documentation</p>
          <div className="iot-why-grid">
            {WHY.map((w,i)=>(
              <div key={i} className="iot-why-card" style={{"--wi":`${i*0.06}s`}}>
                <span className="iot-why-icon">{w.icon}</span>
                <h3 className="iot-why-title">{w.t}</h3>
                <p className="iot-why-desc">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ COLLEGES SERVED ══════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-college-h2">
          <h2 id="iot-college-h2" className="iot-sec-title">
            Colleges We Serve — IoT Projects Coimbatore {YEAR}
          </h2>
          <p className="iot-sec-sub">ECE, EEE, CSE students from these colleges regularly use CODEX PROJECT for their IoT final year projects</p>
          <div className="iot-college-grid">
            {COLLEGES.map(c=>(
              <span key={c} className="iot-college-tag">{c}</span>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-rv-h2">
          <h2 id="iot-rv-h2" className="iot-sec-title">
            Student Reviews — IoT Project Center Coimbatore {YEAR}
          </h2>
          <p className="iot-sec-sub">What ECE, EEE & CSE students say about CODEX PROJECT's IoT final year project support</p>
          <div className="iot-reviews-grid">
            {REVIEWS.map((r,i)=>(
              <div key={i} className="iot-rv-card" itemScope itemType="https://schema.org/Review">
                <div className="iot-rv-stars">{"⭐".repeat(r.stars)}<meta itemProp="reviewRating" content={r.stars}/></div>
                <p className="iot-rv-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="iot-rv-author">
                  <div className="iot-rv-av">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="iot-rv-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-faq-h2">
          <h2 id="iot-faq-h2" className="iot-sec-title">
            FAQ — IoT Project Center Coimbatore {YEAR}
          </h2>
          <div className="iot-faq-list">
            {faqSchema.mainEntity.map((item,i)=>(
              <div key={i} className={`iot-faq-item ${openFaq===i?"iot-faq-open":""}`}
                onClick={()=>setOpenFaq(openFaq===i?null:i)}
                itemScope itemType="https://schema.org/Question">
                <div className="iot-faq-q">
                  <h3 className="iot-faq-qtext" itemProp="name">{item.name}</h3>
                  <span className="iot-faq-icon">{openFaq===i?"−":"+"}</span>
                </div>
                <div className="iot-faq-body" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT ══════════════════════════════════ */}
        <section className="iot-section iot-seo-block iot-reveal" ref={addRef} aria-labelledby="iot-seo-h2">
          <h2 id="iot-seo-h2" className="iot-seo-title">
            IoT Project Center in Coimbatore — Complete Guide {YEAR}
          </h2>
          <p>
            Searching for the <strong>best IoT project center in Coimbatore</strong>? CODEX PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>, is your complete IoT final year project solution for {YEAR}. We specialize in <strong>Arduino IoT projects</strong>, <strong>Raspberry Pi projects</strong>, <strong>NodeMCU ESP8266 projects</strong>, <strong>ESP32 IoT projects</strong>, <strong>cloud IoT projects with AWS and Firebase</strong>, and <strong>AI-integrated Edge IoT projects</strong> — all at the most affordable pricing in Coimbatore.
          </p>
          <p>
            Every IoT project at CODEX PROJECT includes: real hardware with all sensors and actuators, complete firmware coding (C/C++/Python/MicroPython), cloud dashboard setup (Firebase/AWS IoT/ThingSpeak), mobile app control (Flutter/Android/Blynk), IEEE {YEAR} format project report (50-80 pages), circuit diagram and PCB layout, PPT for reviews, 50+ viva Q&A preparation, and <strong>FREE internship certificate</strong>. We serve <strong>BE ECE students</strong>, <strong>BE EEE students</strong>, <strong>BE CSE and IT students</strong>, <strong>ME Embedded Systems students</strong>, and <strong>Diploma students</strong> from all engineering colleges across Coimbatore.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore</strong> for a free consultation on your IoT final year project topic and pricing. We are the <strong>most trusted and affordable IoT project center in Coimbatore {YEAR}</strong> — 4.9★ Google rating, 500+ IoT projects delivered for students from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, and all other Coimbatore colleges.
          </p>
        </section>

        {/* ══ KEYWORD CLOUD ════════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-label="IoT project searches Coimbatore">
          <div className="iot-kw-section">
            <h2 className="iot-kw-title">Popular IoT Project Searches — Coimbatore {YEAR}</h2>
            <div className="iot-kw-grid">
              {KEYWORD_TAGS.map(([label,href])=>(
                <a key={label} href={href} className="iot-kw-tag" aria-label={label}>{label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LOCATION ═════════════════════════════════════ */}
        <section className="iot-section iot-reveal" ref={addRef} aria-labelledby="iot-loc-h2">
          <h2 id="iot-loc-h2" className="iot-sec-title">
            Visit CODEX PROJECT — IoT Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="iot-loc-addr">📍 <strong>{ADDR}</strong></p>
          <p className="iot-loc-desc">Open Monday–Saturday, 9 AM – 8 PM. Accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.</p>
          <div className="iot-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%" height="380" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`CODEX PROJECT IoT Project Center Gandhipuram Coimbatore ${YEAR}`}/>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════ */}
        <section className="iot-cta iot-reveal" ref={addRef} aria-labelledby="iot-cta-h2">
          <div className="iot-cta-blob"/>
          <div className="iot-cta-inner">
            <h2 id="iot-cta-h2" className="iot-cta-title">
              Start Your IoT Final Year Project Today<br/>
              <span className="iot-grad">CODEX PROJECT — Coimbatore {YEAR}</span>
            </h2>
            <p className="iot-cta-sub">Join 500+ ECE, EEE & CSE students who completed their IoT projects with CODEX PROJECT.</p>
            <p className="iot-cta-addr">📍 {ADDR}</p>
            <p className="iot-cta-tags">Arduino · Raspberry Pi · NodeMCU · ESP32 · AWS IoT · Firebase · Cloud Dashboard · IEEE {YEAR}</p>
            <div className="iot-cta-btns">
              <a href={`tel:+91${PHONE}`} className="iot-btn iot-btn-gold">📞 Call IoT Line: {PHONE}</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="iot-btn iot-btn-wa">💬 WhatsApp Us</a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="iot-btn iot-btn-outline-light">⭐ Review on Google</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IoTProjects; 