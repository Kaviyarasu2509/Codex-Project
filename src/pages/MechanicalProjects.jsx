import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./MechanicalProjects.css";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════
const YEAR      = "2025-26";
const PHONE     = "8525999032";
const PHONE_GEN = "8525999002";
const WA        = `https://wa.me/91${PHONE_GEN}`;
const ADDR      = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";
const PAGE_URL  = "https://www.codexproject.in/mechanical-project-center-coimbatore";

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const mechanicalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `Best Mechanical Project Center in Coimbatore ${YEAR} – CODEX PROJECT`,
  "serviceType": "Mechanical Engineering Final Year Project Training and Development",
  "description": `CODEX PROJECT is the best mechanical project center in Coimbatore ${YEAR}. We offer IEEE ${YEAR} fabrication, CAD/CAM, robotics, automation, mechatronics, automobile engineering, and renewable energy final year projects for BE Mechanical, ME, and Diploma students with real working models, complete documentation, internship certificate, and viva support.`,
  "url": PAGE_URL,
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
    "geo": { "@type": "GeoCoordinates", "latitude": 11.0187267, "longitude": 76.9686347 },
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
    "name": `Mechanical Project Services Coimbatore ${YEAR}`,
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Fabrication Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `CAD CAM Design Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Robotics Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Automation Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Mechatronics Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Automobile Engineering Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `ANSYS SolidWorks Projects Coimbatore ${YEAR}` } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": `Best mechanical project center in Coimbatore ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best mechanical project center in Coimbatore ${YEAR}, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer fabrication, CAD/CAM, robotics, automation, mechatronics, and automobile engineering final year projects for BE Mechanical, ME, and Diploma students with free internship certificate. Call ${PHONE}.` } },
    { "@type": "Question", "name": `What mechanical projects are available at CODEX PROJECT Coimbatore ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers Hydraulic systems, Pneumatic robots, Solar vehicles, CNC machines, Conveyor automation, CAD/CAM (SolidWorks, ANSYS, CATIA), Mechatronics, Automobile engineering, Renewable energy, and 70+ more mechanical project titles for ${YEAR}. Call ${PHONE}.` } },
    { "@type": "Question", "name": "What CAD/CAM software does CODEX PROJECT use?", "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT uses SolidWorks (3D modeling and stress analysis), ANSYS (structural, thermal, CFD simulation), CATIA (surface modeling), AutoCAD (2D technical drawings), MATLAB/Simulink (control systems), and 3D printing for mechanical design and simulation projects in Coimbatore ${YEAR}. Call ${PHONE}.` } },
    { "@type": "Question", "name": `Cost of mechanical final year projects at CODEX PROJECT Coimbatore ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers the most affordable mechanical project pricing in Coimbatore ${YEAR} with zero hidden charges. All packages include real working model fabrication, IEEE documentation, PPT, circuit/drawing diagrams, viva preparation, and free internship certificate. EMI available. Call ${PHONE_GEN} for free quote.` } },
    { "@type": "Question", "name": "Does CODEX PROJECT support BE, ME, and Diploma mechanical students?", "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT supports BE Mechanical, ME Mechanical, ME CAD/CAM, ME Manufacturing, Automobile Engineering, Production Engineering, and Diploma students from all Coimbatore colleges including PSG Tech, CIT, KPR, Karpagam, SNS, KGISL, and 20+ others. Call ${PHONE}.` } },
    { "@type": "Question", "name": "Does CODEX PROJECT provide ANSYS and SolidWorks simulation projects?", "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT provides SolidWorks 3D modeling, ANSYS FEA/CFD simulation, CATIA surface modeling, and AutoCAD 2D design final year projects for BE and ME Mechanical students in Coimbatore ${YEAR}. Call ${PHONE}.` } },
    { "@type": "Question", "name": "Does CODEX PROJECT provide internship certificate with mechanical projects?", "acceptedAnswer": { "@type": "Answer", "text": `Yes! Every mechanical project at CODEX PROJECT Coimbatore includes a FREE internship certificate along with IEEE ${YEAR} format project report, fabrication drawings, PPT, and viva preparation coaching. Call ${PHONE_GEN}.` } },
    { "@type": "Question", "name": `What is included in a mechanical project package at CODEX PROJECT ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT mechanical project packages include: (1) Real working model fabrication with all materials, (2) CAD drawings and 3D model, (3) ANSYS/SolidWorks simulation files (if applicable), (4) IEEE ${YEAR} format project report, (5) PPT for reviews, (6) 50+ viva Q&A preparation, (7) FREE internship certificate, (8) Unlimited revisions. Call ${PHONE}.` } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": `Mechanical Projects Coimbatore ${YEAR}`, "item": PAGE_URL },
  ],
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const services = [
  { icon:"🔧", title:"Fabrication Projects", seo:`Mechanical Fabrication Projects Coimbatore ${YEAR}`, color:"#e3f2fd", accent:"#1565c0", fk:["Fabrication","Mechanical","IEEE","BE"], desc:`Real-time working model fabrication for BE and ME Mechanical students in Coimbatore — hydraulic systems, pneumatic robots, CNC models, conveyor systems — from design to prototype with expert supervision and IEEE ${YEAR} documentation.` },
  { icon:"🤖", title:"Robotics & Automation", seo:`Robotics Automation Projects Coimbatore ${YEAR}`, color:"#f3e5f5", accent:"#6a1b9a", fk:["Robotics","Automation","Mechanical","IEEE","BE"], desc:`Industrial robotics, pick-and-place robots, conveyor automation, pneumatic systems, PLC-based automation, and agricultural robots — best robotics project center in Coimbatore ${YEAR} for Mechanical and Mechatronics students.` },
  { icon:"🖥️", title:"CAD / CAM Design Projects", seo:`CAD CAM Design Projects Coimbatore ${YEAR}`, color:"#e8f5e9", accent:"#2e7d32", fk:["CAD","CAM","ANSYS","SolidWorks","CATIA","Mechanical","IEEE","ME"], desc:`SolidWorks 3D modeling, ANSYS FEA/CFD simulation, CATIA surface modeling, AutoCAD 2D drafting, and MATLAB Simulink — best CAD/CAM design project center in Coimbatore ${YEAR} for BE and ME Mechanical students.` },
  { icon:"⚙️", title:"Mechatronics Projects", seo:`Mechatronics Projects Coimbatore ${YEAR}`, color:"#fff3e0", accent:"#e65100", fk:["Mechatronics","Automation","Mechanical","IEEE","BE"], desc:`Integrated mechanical-electronic systems, PLC-based automation, sensor-driven control, Arduino-embedded mechanical systems, and smart manufacturing mechatronics projects for engineering students in Coimbatore ${YEAR}.` },
  { icon:"🚗", title:"Automobile Engineering Projects", seo:`Automobile Engineering Projects Coimbatore ${YEAR}`, color:"#fce4ec", accent:"#880e4f", fk:["Automobile","Automotive","Mechanical","IEEE","BE"], desc:`EV conversion, fuel efficiency improvement, emission control, hybrid vehicle systems, electromagnetic braking, and gear shifting mechanism final year projects for Automobile Engineering students in Coimbatore ${YEAR}.` },
  { icon:"☀️", title:"Renewable Energy Projects", seo:`Renewable Energy Mechanical Projects Coimbatore ${YEAR}`, color:"#f9fbe7", accent:"#33691e", fk:["Renewable","Energy","Solar","Mechanical","IEEE","BE","ME"], desc:`Solar-powered vehicles, wind turbine blade design, energy harvesting systems, biomass energy, and hybrid renewable energy mechanical projects for BE and ME students in Coimbatore ${YEAR}.` },
  { icon:"🏭", title:"Manufacturing & Production", seo:`Manufacturing Production Projects Coimbatore ${YEAR}`, color:"#e0f7fa", accent:"#006064", fk:["Manufacturing","Production","Mechanical","IEEE","ME"], desc:`CNC machining optimization, lean manufacturing, quality control, jig and fixture design, and production engineering final year projects for BE and ME Manufacturing students in Coimbatore ${YEAR}.` },
  { icon:"🌊", title:"Fluid Mechanics & Thermal", seo:`Fluid Mechanics Thermal Projects Coimbatore ${YEAR}`, color:"#e8eaf6", accent:"#283593", fk:["Fluid","Thermal","CFD","ANSYS","Mechanical","IEEE","ME"], desc:`CFD analysis using ANSYS Fluent, heat exchanger design, cooling system optimization, and fluid power system final year projects for ME Thermal and BE Mechanical students in Coimbatore ${YEAR}.` },
  { icon:"🦾", title:"Biomechanics & Medical Devices", seo:`Biomechanics Medical Device Projects Coimbatore ${YEAR}`, color:"#fce4ec", accent:"#880e4f", fk:["Biomechanics","Biomedical","Mechanical","IEEE","ME"], desc:`Prosthetic limb design, exoskeleton systems, wheelchair improvement, orthotic devices, and 3D-printed biomedical mechanical projects for ME and BE Mechanical students in Coimbatore ${YEAR}.` },
];

const projectIdeas = [
  { name:"Hydraulic Lift System – Real Working Model",       tag:"Fabrication" },
  { name:"Pneumatic Pick and Place Robot",                   tag:"Robotics" },
  { name:"Solar Powered Electric Vehicle",                   tag:"Automobile" },
  { name:"Automatic Pneumatic Bumper System",                tag:"Automobile" },
  { name:"Conveyor Belt Automation – PLC",                   tag:"Automation" },
  { name:"Mini CNC Machine – Arduino Control",               tag:"CAD/CAM" },
  { name:"Electromagnetic Braking System",                   tag:"Automobile" },
  { name:"Gear Box Design & ANSYS Analysis",                 tag:"CAD/ANSYS" },
  { name:"Wind Turbine Blade Design – CATIA",                tag:"Renewable Energy" },
  { name:"Robotic Arm with Gripper – Servo",                 tag:"Robotics" },
  { name:"Waste Segregation Machine",                        tag:"Automation" },
  { name:"Automatic Welding Machine",                        tag:"Fabrication" },
  { name:"Four-Wheel Steering System",                       tag:"Automobile" },
  { name:"Agricultural Spraying Robot",                      tag:"Robotics" },
  { name:"SolidWorks Stress Analysis – Bracket",            tag:"CAD/ANSYS" },
  { name:"Stirling Engine – Heat Energy",                    tag:"Fabrication" },
  { name:"Automatic Gear Shifting Mechanism",                tag:"Automobile" },
  { name:"3D Printed Prosthetic Hand",                       tag:"Biomechanics" },
  { name:"Magnetic Levitation System",                       tag:"Advanced" },
  { name:"CATIA Turbine Blade Modeling",                     tag:"CAD/ANSYS" },
  { name:"Smart Irrigation Pump – Solar Powered",            tag:"Renewable Energy" },
  { name:"Automatic Paint Sprayer – Pneumatic",              tag:"Automation" },
  { name:"Heat Exchanger CFD – ANSYS Fluent",               tag:"Thermal/CFD" },
  { name:"Obstacle Avoiding Robot – Ultrasonic",             tag:"Robotics" },
];

const tagColors = {
  "Fabrication":"#e3f2fd","Robotics":"#f3e5f5","Automation":"#e8f5e9",
  "CAD/CAM":"#fff3e0","CAD/ANSYS":"#e8f5e9","Mechatronics":"#fce4ec",
  "Automobile":"#e0f7fa","Renewable Energy":"#f9fbe7","Advanced":"#ede7f6",
  "Biomechanics":"#fce4ec","Thermal/CFD":"#e8eaf6","Manufacturing":"#fff8e1",
};

const ideaTagToFilter = {
  "Fabrication":      ["Fabrication","Mechanical","IEEE","BE"],
  "Robotics":         ["Robotics","Automation","Mechanical","IEEE","BE"],
  "Automobile":       ["Automobile","Automotive","Mechanical","IEEE","BE"],
  "Automation":       ["Robotics","Automation","Mechanical","IEEE","BE"],
  "CAD/CAM":          ["CAD","CAM","ANSYS","SolidWorks","CATIA","Mechanical","IEEE","ME"],
  "CAD/ANSYS":        ["CAD","CAM","ANSYS","SolidWorks","CATIA","Mechanical","IEEE","ME"],
  "Renewable Energy": ["Renewable","Energy","Solar","Mechanical","IEEE","BE","ME"],
  "Biomechanics":     ["Biomechanics","Biomedical","Mechanical","IEEE","ME"],
  "Thermal/CFD":      ["Fluid","Thermal","CFD","ANSYS","Mechanical","IEEE","ME"],
  "Advanced":         ["Mechanical","IEEE","ME"],
};

const FILTER_KEYWORDS = [
  `Mechanical Projects Coimbatore ${YEAR}`,
  `Fabrication Projects Coimbatore ${YEAR}`,
  `CAD CAM Projects Coimbatore ${YEAR}`,
  `Robotics Projects Coimbatore ${YEAR}`,
  `Automation Projects Coimbatore`,
  `Mechatronics Projects Coimbatore`,
  `Automobile Projects Coimbatore`,
  `ANSYS SolidWorks Projects Coimbatore`,
  `BE Mechanical Projects ${YEAR}`,
  `ME Project Center Coimbatore`,
  `Diploma Mechanical Projects Coimbatore`,
  `Low Cost Mechanical Projects Coimbatore`,
  `IEEE Mechanical Projects ${YEAR}`,
  `Renewable Energy Projects Coimbatore`,
  `Manufacturing Projects Coimbatore`,
];

const WHY = [
  { icon:"💰", t:"Most Affordable Pricing",          d:`Lowest mechanical project cost in Coimbatore ${YEAR} — no hidden charges, flexible payment options, EMI available for all domains.` },
  { icon:"🏗️", t:"Real Working Models",              d:"Actual fabrication and prototype building — not just theory. Students see, operate, and present real working mechanical models at college reviews." },
  { icon:"🖥️", t:"CAD/CAM & Simulation",             d:`SolidWorks, ANSYS (FEA, CFD, Thermal), CATIA, AutoCAD — industry-standard software projects with simulation results and detailed reports.` },
  { icon:"📋", t:"Complete IEEE Documentation",       d:`Full IEEE ${YEAR} project report, PPT, synopsis, drawings, BOM, and fabrication procedure — everything ready for all Coimbatore college reviews.` },
  { icon:"📜", t:"Free Internship Certificate",       d:"Every mechanical project includes a FREE internship certificate accepted by all engineering colleges in Coimbatore, Tirupur, Erode, and Tamil Nadu." },
  { icon:"🎤", t:"Viva Preparation Coaching",         d:"50+ mock viva questions and answers specific to your project — expert coaching for department reviews and final year presentations at all Coimbatore colleges." },
  { icon:"🎓", t:"BE, ME & Diploma Support",          d:"Dedicated guidance for BE Mechanical, ME CAD/CAM, ME Manufacturing, Automobile, Production, and Diploma students from all Coimbatore colleges." },
  { icon:"📍", t:"Central Gandhipuram Location",      d:"Balaji Complex, Gandhipuram — accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, Ukkadam, and all Coimbatore engineering college zones." },
];

const REVIEWS = [
  { stars:5, text:`Best mechanical project center in Coimbatore! My pneumatic pick-and-place robot was fabricated perfectly with complete IEEE ${YEAR} documentation and viva coaching. Scored top marks in my batch! Highly recommended.`, name:"Karthik S.", branch:"BE Mechanical – CIT Coimbatore" },
  { stars:5, text:`Completed my SolidWorks + ANSYS stress analysis project at CODEX PROJECT Coimbatore. Excellent simulation results, detailed report, and the viva preparation was very thorough. Best CAD/CAM project center near Gandhipuram!`, name:"Divya M.", branch:"ME CAD/CAM – PSG Tech" },
  { stars:5, text:`CODEX PROJECT built my solar-powered electric vehicle project from scratch with full fabrication, 3D drawings, and IEEE documentation. Most affordable mechanical project center I visited in Coimbatore ${YEAR}!`, name:"Arun P.", branch:"BE Automobile – KPR College" },
  { stars:5, text:`My mechatronics automation project (PLC + conveyor belt system) was done at CODEX PROJECT Gandhipuram. The team handled fabrication, PLC programming, and complete IEEE report — excellent work!`, name:"Priya R.", branch:"ME Mechatronics – Karpagam" },
  { stars:5, text:`Hydraulic jack system project — complete working model, AutoCAD drawings, stress analysis, and full IEEE ${YEAR} documentation. The internship certificate was a bonus! Very professional team.`, name:"Ravi M.", branch:"BE Mechanical – SNS College" },
  { stars:5, text:`CATIA turbine blade modeling with ANSYS thermal analysis — CODEX PROJECT supported IEEE paper publication guidance too! Best center for advanced mechanical projects in Coimbatore.`, name:"Meena V.", branch:"ME Thermal – KGISL" },
];

const COLLEGES = [
  "PSG Tech","CIT","KMEA","Sri Krishna","KPR College","Karpagam","SNS College",
  "KGISL","RVS College","Rathinam","Hindusthan","Sri Eshwar","Dr NGP","Bannari Amman",
  "Excel Engineering","Nehru College","JCT","EASA","Info Institute","Sengunthar",
];

const CAD_TOOLS = [
  { name:"SolidWorks",     color:"#e3f2fd" },
  { name:"ANSYS FEA/CFD",  color:"#f3e5f5" },
  { name:"CATIA V5",       color:"#e8f5e9" },
  { name:"AutoCAD",        color:"#fff3e0" },
  { name:"MATLAB Simulink",color:"#fce4ec" },
  { name:"CREO/Pro-E",     color:"#e0f7fa" },
  { name:"3D Printing",    color:"#f9fbe7" },
  { name:"Fusion 360",     color:"#ede7f6" },
];

const FAB_EQUIP = [
  { name:"Welding Station",        color:"#fbe9e7" },
  { name:"Lathe Machine",          color:"#e8f5e9" },
  { name:"Drilling Machine",       color:"#e3f2fd" },
  { name:"CNC Machine",            color:"#ede7f6" },
  { name:"Pneumatic Components",   color:"#f3e5f5" },
  { name:"Hydraulic Components",   color:"#fff3e0" },
  { name:"Sheet Metal Tools",      color:"#fce4ec" },
  { name:"3D Printer (FDM)",       color:"#f9fbe7" },
];

const KEYWORD_TAGS = [
  [`Mechanical Projects Coimbatore ${YEAR}`,"/mechanical-project-center-coimbatore"],
  [`Fabrication Projects Coimbatore ${YEAR}`,"/mechanical-project-center-coimbatore"],
  [`CAD CAM Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`Robotics Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`Automation Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`ANSYS SolidWorks Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`Automobile Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`Mechatronics Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`Renewable Energy Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`BE Mechanical Projects ${YEAR}`,"/mechanical-project-center-coimbatore"],
  [`ME Project Center Coimbatore`,"/mechanical-project-center-coimbatore"],
  [`IEEE Mechanical Projects ${YEAR}`,"/mechanical-project-center-coimbatore"],
  [`Mechanical Internship Certificate Coimbatore`,"/contact"],
  [`Low Cost Mechanical Projects Coimbatore`,"/contact"],
  [`Mechanical Project Center Gandhipuram`,"/contact"],
  [`3D Printing Projects Coimbatore`,"/mechanical-project-center-coimbatore"],
];

const RELATED_SERVICES = [
  { label: "IoT Projects",           href: "/iot-project-center-coimbatore",      icon: "📡" },
  { label: "Embedded Projects",      href: "/embedded-project-center-coimbatore", icon: "🔧" },
  { label: "Software & AI Projects", href: "/software-project-center-coimbatore", icon: "💻" },
];

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
const MechanicalProjects = () => {
  const [openFaq, setOpenFaq]           = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRefs = useRef([]);

  const filteredServices = activeFilter
    ? services.filter(s => s.fk.some(k => activeFilter.toLowerCase().includes(k.toLowerCase())))
    : services;

  const filteredIdeas = activeFilter
    ? projectIdeas.filter(p => {
        const keys = ideaTagToFilter[p.tag] || ["Mechanical"];
        return keys.some(k => activeFilter.toLowerCase().includes(k.toLowerCase()));
      })
    : projectIdeas;

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("mp-in"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
  const scrollToSvc = () => document.getElementById("mp-svc-section")?.scrollIntoView({ behavior:"smooth", block:"start" });

  return (
    <div className="mp-page">
      <Helmet>
        <title>Best Mechanical Project Center in Coimbatore {YEAR} | CODEX PROJECT</title>
        <meta
          name="description"
          content={`CODEX PROJECT - Best mechanical project center in Gandhipuram, Coimbatore. Fabrication, CAD/CAM, robotics, automobile final year projects ${YEAR}. Free internship certificate. Call ${PHONE}.`}
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={`Best Mechanical Project Center in Coimbatore ${YEAR} | CODEX PROJECT`} />
        <meta property="og:description" content={`Fabrication, CAD/CAM, robotics, automobile final year projects in Coimbatore. Free internship certificate. Call ${PHONE}.`} />
        <meta property="og:url" content={PAGE_URL} />
      </Helmet>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(mechanicalSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbSchema)}} />

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="mp-hero" aria-labelledby="mp-h1">
        <div className="mp-hero-bg">
          <div className="mp-grid-bg"/>
          <div className="mp-orb mp-orb1"/>
          <div className="mp-orb mp-orb2"/>
        </div>
        <div className="mp-container">
          <nav className="mp-bc" aria-label="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem"><a href="/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1"/></li>
              <span>›</span>
              <li aria-current="page" itemScope itemType="https://schema.org/ListItem"><span itemProp="name">Mechanical Projects {YEAR}</span><meta itemProp="position" content="2"/></li>
            </ol>
          </nav>

          <div className="mp-hero-chip"><span className="mp-chip-dot"/>IEEE {YEAR} — 70+ Mechanical Project Titles</div>

          <h1 id="mp-h1" className="mp-h1">
            Best Mechanical Project Center<br/>
            in Coimbatore <span className="mp-grad">| CODEX PROJECT</span>
          </h1>
          <p className="mp-hero-sub">
            Top-rated Fabrication, CAD/CAM, Robotics, Automation & Automobile project center — Gandhipuram, Coimbatore
          </p>
          <p className="mp-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best mechanical project center in Coimbatore {YEAR}</strong>, offering real-time final year mechanical engineering projects with complete <strong>fabrication, CAD/CAM design (SolidWorks, ANSYS, CATIA), robotics, automation, mechatronics, and automobile engineering</strong> support. IEEE {YEAR} documentation, viva preparation, and <strong>free internship certificate</strong> — all at the most affordable pricing in Coimbatore.
          </p>
          <p className="mp-hero-addr">📍 {ADDR}</p>
          <p className="mp-hero-serve">
            Serving BE Mechanical, ME CAD/CAM, ME Manufacturing, Automobile, Production Engineering & Diploma students from PSG Tech, CIT, KPR, Karpagam, SNS, KGISL & all Coimbatore colleges
          </p>

          <div className="mp-trust-row">
            {["IEEE 2025-26","Real Working Models","SolidWorks & ANSYS","CATIA & AutoCAD","Free Internship Cert","Complete Documentation","Viva Coaching","Affordable Pricing"].map(t=>(
              <span key={t} className="mp-trust-pill">✔ {t}</span>
            ))}
          </div>

          <div className="mp-hero-btns">
            <a href={`tel:+91${PHONE}`}     className="mp-btn mp-btn-gold">📞 Call: {PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mp-btn mp-btn-wa">💬 WhatsApp Us</a>
            <button className="mp-btn mp-btn-outline" onClick={scrollToSvc}>Explore Services ↓</button>
          </div>
        </div>
      </section>

      <div className="mp-container mp-main">

        {/* ══ FILTER CLOUD ════════════════════════════════ */}
        <section className="mp-filter-sec mp-reveal" ref={addRef}>
          <div className="mp-filter-hdr">
            <h2 className="mp-filter-title">Browse by Domain — Coimbatore {YEAR}</h2>
            {activeFilter && (
              <button className="mp-filter-clear" onClick={()=>setActiveFilter(null)}>✕ Show All</button>
            )}
          </div>
          <div className="mp-filter-chips">
            {FILTER_KEYWORDS.map(tag=>(
              <button key={tag}
                className={`mp-filter-chip ${activeFilter===tag?"mp-chip-active":""}`}
                onClick={()=>{ setActiveFilter(activeFilter===tag?null:tag); scrollToSvc(); }}
                aria-pressed={activeFilter===tag}>
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <p className="mp-filter-note">Showing: <strong>{activeFilter}</strong> — {filteredServices.length} service{filteredServices.length!==1?"s":""} found</p>
          )}
        </section>

        {/* ══ SERVICES ════════════════════════════════════ */}
        <section id="mp-svc-section" className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-svc-h2">
          <h2 id="mp-svc-h2" className="mp-sec-title">
            Mechanical Project Services at CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <p className="mp-sec-sub">
            Complete mechanical engineering project support — fabrication, CAD/CAM, robotics, automation, real working models, and IEEE {YEAR} documentation included
          </p>
          <div className="mp-services-grid">
            {(filteredServices.length>0?filteredServices:services).map((s,i)=>(
              <article key={i} className="mp-svc-card"
                style={{"--sc":s.accent,"--sbg":s.color}}
                itemScope itemType="https://schema.org/Service">
                <div className="mp-svc-bar"/>
                <div className="mp-svc-icon">{s.icon}</div>
                <h3 className="mp-svc-title" itemProp="name">{s.title}</h3>
                <meta itemProp="serviceType" content={s.seo}/>
                <meta itemProp="areaServed" content="Coimbatore"/>
                <p className="mp-svc-desc" itemProp="description">{s.desc}</p>
                <a href={`${WA}?text=Hi!%20I%20need%20${encodeURIComponent(s.title)}%20mechanical%20project%20${YEAR}`}
                   target="_blank" rel="noopener noreferrer" className="mp-svc-cta">
                  💬 WhatsApp for {s.title.split(" ")[0]} Project
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ══ CAD TOOLS & FABRICATION ══════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-tools-h2">
          <h2 id="mp-tools-h2" className="mp-sec-title">
            CAD Software & Fabrication Equipment — CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <div className="mp-platforms-grid">
            <div className="mp-platform-card">
              <h3 className="mp-platform-title">🖥️ CAD / CAM / Simulation Tools</h3>
              <div className="mp-badge-wrap">
                {CAD_TOOLS.map((t,i)=>(
                  <span key={i} className="mp-hw-chip" style={{"--hc":t.color}}>{t.name}</span>
                ))}
              </div>
            </div>
            <div className="mp-platform-card">
              <h3 className="mp-platform-title">🔧 Fabrication Equipment</h3>
              <div className="mp-badge-wrap">
                {FAB_EQUIP.map((e,i)=>(
                  <span key={i} className="mp-hw-chip" style={{"--hc":e.color}}>{e.name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ════════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-ideas-h2">
          <h2 id="mp-ideas-h2" className="mp-sec-title">
            Mechanical Final Year Project Ideas — Coimbatore {YEAR}
          </h2>
          <p className="mp-sec-sub">
            Latest IEEE {YEAR} mechanical project topics for BE, ME, and Diploma students in Coimbatore — real working models with full documentation
          </p>
          <div className="mp-ideas-grid">
            {(filteredIdeas.length>0?filteredIdeas:projectIdeas).map((p,i)=>(
              <div key={i} className="mp-idea-card"
                style={{"--ibg":tagColors[p.tag]||"#f0f4ff"}}
                itemScope itemType="https://schema.org/CreativeWork">
                <p className="mp-idea-name" itemProp="name">{p.name}</p>
                <span className="mp-idea-tag" itemProp="genre">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══════════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-why-h2">
          <h2 id="mp-why-h2" className="mp-sec-title">
            Why CODEX PROJECT is the Best Mechanical Project Center in Coimbatore {YEAR}
          </h2>
          <p className="mp-sec-sub">Trusted by 500+ Mechanical Engineering students across Coimbatore for real working model projects with IEEE documentation</p>
          <div className="mp-why-grid">
            {WHY.map((w,i)=>(
              <div key={i} className="mp-why-card" style={{"--wi":`${i*0.06}s`}}>
                <span className="mp-why-icon">{w.icon}</span>
                <h3 className="mp-why-title">{w.t}</h3>
                <p className="mp-why-desc">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ COLLEGES SERVED ══════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-college-h2">
          <h2 id="mp-college-h2" className="mp-sec-title">
            Colleges We Serve — Mechanical Projects Coimbatore {YEAR}
          </h2>
          <p className="mp-sec-sub">BE Mechanical, ME, and Diploma students from these colleges regularly use CODEX PROJECT for their final year projects</p>
          <div className="mp-college-grid">
            {COLLEGES.map(c=>(
              <span key={c} className="mp-college-tag">{c}</span>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-rv-h2">
          <h2 id="mp-rv-h2" className="mp-sec-title">
            Student Reviews — Mechanical Project Center Coimbatore {YEAR}
          </h2>
          <p className="mp-sec-sub">What Mechanical, Automobile & ME students say about CODEX PROJECT's mechanical final year project support</p>
          <div className="mp-reviews-grid">
            {REVIEWS.map((r,i)=>(
              <div key={i} className="mp-rv-card" itemScope itemType="https://schema.org/Review">
                <div className="mp-rv-stars">{"⭐".repeat(r.stars)}<meta itemProp="reviewRating" content={r.stars}/></div>
                <p className="mp-rv-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="mp-rv-author">
                  <div className="mp-rv-av">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="mp-rv-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-faq-h2">
          <h2 id="mp-faq-h2" className="mp-sec-title">
            FAQ — Mechanical Project Center Coimbatore {YEAR}
          </h2>
          <div className="mp-faq-list">
            {faqSchema.mainEntity.map((item,i)=>(
              <div key={i} className={`mp-faq-item ${openFaq===i?"mp-faq-open":""}`}
                onClick={()=>setOpenFaq(openFaq===i?null:i)}
                itemScope itemType="https://schema.org/Question">
                <div className="mp-faq-q">
                  <h3 className="mp-faq-qtext" itemProp="name">{item.name}</h3>
                  <span className="mp-faq-icon">{openFaq===i?"−":"+"}</span>
                </div>
                <div className="mp-faq-body" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT ══════════════════════════════════ */}
        <section className="mp-section mp-seo-block mp-reveal" ref={addRef} aria-labelledby="mp-seo-h2">
          <h2 id="mp-seo-h2" className="mp-seo-title">
            Mechanical Project Center in Coimbatore — Complete Guide {YEAR}
          </h2>
          <p>
            Searching for the <strong>best mechanical project center in Coimbatore</strong>? CODEX PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>, is your complete mechanical engineering final year project solution for {YEAR}. We specialize in <strong>fabrication projects</strong> (hydraulic, pneumatic, CNC, robotic arms), <strong>CAD/CAM design projects</strong> (SolidWorks, ANSYS, CATIA, AutoCAD), <strong>robotics and automation projects</strong>, <strong>mechatronics projects</strong>, <strong>automobile engineering projects</strong> (EV, braking systems, gear mechanisms), and <strong>renewable energy projects</strong> — all at affordable pricing with real working models.
          </p>
          <p>
            Every mechanical project at CODEX PROJECT includes: real working model fabrication with all materials, CAD drawings and 3D model files, ANSYS/SolidWorks simulation results (if applicable), IEEE {YEAR} format project report (50-80 pages), PPT for reviews, 50+ viva Q&A preparation, and <strong>FREE internship certificate</strong>. We serve <strong>BE Mechanical students</strong>, <strong>ME CAD/CAM students</strong>, <strong>ME Manufacturing students</strong>, <strong>Automobile Engineering students</strong>, <strong>Production Engineering students</strong>, and <strong>Diploma students</strong> from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, and all Coimbatore colleges.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore</strong> for a free consultation on your mechanical final year project. We are the <strong>most trusted and affordable mechanical project center in Coimbatore {YEAR}</strong> — 4.9★ Google rating, 500+ mechanical projects delivered successfully.
          </p>
        </section>

        {/* ══ KEYWORD CLOUD ════════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-label="Mechanical project searches Coimbatore">
          <div className="mp-kw-section">
            <h2 className="mp-kw-title">Popular Mechanical Project Searches — Coimbatore {YEAR}</h2>
            <div className="mp-kw-grid">
              {KEYWORD_TAGS.map(([label,href])=>(
                <a key={label} href={href} className="mp-kw-tag" aria-label={label}>{label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ RELATED SERVICES ════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-related-h2">
          <h2 id="mp-related-h2" className="mp-sec-title" style={{fontSize:"1.4rem"}}>
            Explore Other Project Domains at CODEX PROJECT
          </h2>
          <div className="mp-badge-wrap" style={{marginTop:"12px"}}>
            {RELATED_SERVICES.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="mp-hw-chip"
                style={{ "--hc": "#f0f4ff", textDecoration: "none", cursor: "pointer" }}
                aria-label={r.label}
              >
                {r.icon} {r.label}
              </a>
            ))}
          </div>
        </section>

        {/* ══ LOCATION ═════════════════════════════════════ */}
        <section className="mp-section mp-reveal" ref={addRef} aria-labelledby="mp-loc-h2">
          <h2 id="mp-loc-h2" className="mp-sec-title">
            Visit CODEX PROJECT — Mechanical Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="mp-loc-addr">📍 <strong>{ADDR}</strong></p>
          <p className="mp-loc-desc">Open Monday–Saturday, 9 AM – 8 PM. Accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.</p>
          <div className="mp-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%" height="380" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`CODEX PROJECT Mechanical Project Center Gandhipuram Coimbatore ${YEAR}`}/>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════ */}
        <section className="mp-cta mp-reveal" ref={addRef} aria-labelledby="mp-cta-h2">
          <div className="mp-cta-blob"/>
          <div className="mp-cta-inner">
            <h2 id="mp-cta-h2" className="mp-cta-title">
              Start Your Mechanical Final Year Project Today<br/>
              <span className="mp-grad">CODEX PROJECT — Coimbatore {YEAR}</span>
            </h2>
            <p className="mp-cta-sub">Join 500+ Mechanical Engineering students who completed their projects with CODEX PROJECT.</p>
            <p className="mp-cta-addr">📍 {ADDR}</p>
            <p className="mp-cta-tags">Fabrication · CAD/CAM · SolidWorks · ANSYS · CATIA · Robotics · Automation · IEEE {YEAR} · Affordable</p>
            <div className="mp-cta-btns">
              <a href={`tel:+91${PHONE}`} className="mp-btn mp-btn-gold">📞 Call: {PHONE}</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="mp-btn mp-btn-wa">💬 WhatsApp Us</a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="mp-btn mp-btn-outline-light">⭐ Review on Google</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MechanicalProjects;