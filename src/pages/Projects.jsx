import React, { useEffect, useRef } from "react";
import "./Projects.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Final Year Project Ideas in Coimbatore 2024-25 – CODEX PROJECT",
  "url": "https://www.codexproject.in/projects",
  "description":
    "CODEX PROJECT provides the best final year project ideas in Coimbatore 2024-25 for Mechanical, IoT, Embedded Systems, Software, AI, ML, and Web Development domains. Affordable pricing with real-time implementation for BE, ME, ECE, CSE, IT, MCA, and Diploma students.",
  "provider": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
      "addressLocality": "Gandhipuram, Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641012",
      "addressCountry": "IN",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best final year project ideas in Coimbatore 2024-25?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT offers the best final year project ideas in Coimbatore across Mechanical (fabrication, robotics, CAD), IoT (Arduino, Raspberry Pi, cloud), Embedded Systems (8051, ARM, PIC), and Software (Python AI/ML, MERN Stack, Java, Flutter) domains for 2024-25.",
      },
    },
    {
      "@type": "Question",
      "name": "Which final year project center in Coimbatore provides IEEE 2024-25 projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT at 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore provides IEEE 2024-25 certified final year projects for all engineering branches at affordable pricing with complete documentation and viva support.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you have AI and Machine Learning final year project ideas for CSE students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, CODEX PROJECT provides 50+ AI and Machine Learning final year project ideas for CSE and IT students in Coimbatore including Deep Learning, NLP, Computer Vision, Generative AI, and Data Science projects with IEEE 2024-25 base papers.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cost of final year projects at Codex Project Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT offers the most affordable final year project pricing in Coimbatore for all domains — Mechanical, IoT, Embedded, and Software. Contact us at Balaji Complex, Gandhipuram for a free consultation and custom quote.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "Final Year Project Ideas Coimbatore", "item": "https://www.codexproject.in/projects" },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const domains = [
  {
    id: "mechanical",
    icon: "⚙️",
    title: "Mechanical Final Year Project Ideas",
    seoTitle: "Mechanical Project Ideas Coimbatore 2024-25",
    subtitle: "BE Mechanical, ME & Diploma – Fabrication, CAD, Robotics, Automation",
    color: "#e8f5e9",
    accentColor: "#2e7d32",
    link: "/services/mechanical-projects",
    projects: [
      { name: "Hydraulic Lift System", tag: "Fabrication" },
      { name: "Pneumatic Pick and Place Robot", tag: "Robotics" },
      { name: "Solar Powered Electric Vehicle", tag: "Automobile" },
      { name: "Automatic Pneumatic Bumper", tag: "Automation" },
      { name: "Smart Irrigation System", tag: "Automation" },
      { name: "Conveyor Belt Automation", tag: "Automation" },
      { name: "Mini CNC Machine", tag: "CAD/CAM" },
      { name: "Wind Turbine Power Generation", tag: "Renewable Energy" },
      { name: "Robotic Arm with Gripper", tag: "Robotics" },
      { name: "Automatic Car Washing System", tag: "Automation" },
      { name: "Electromagnetic Braking System", tag: "Automobile" },
      { name: "Gear Box Design & Analysis – ANSYS", tag: "CAD/CAM" },
    ],
  },
  {
    id: "iot",
    icon: "🌐",
    title: "IoT Final Year Project Ideas",
    seoTitle: "IoT Project Ideas Coimbatore 2024-25",
    subtitle: "BE ECE, EEE, CSE – Arduino, Raspberry Pi, NodeMCU, Cloud IoT",
    color: "#e0f7fa",
    accentColor: "#00695c",
    link: "/services/iot-projects",
    projects: [
      { name: "Smart Irrigation System using IoT", tag: "Agriculture" },
      { name: "IoT Based Health Monitoring System", tag: "Healthcare" },
      { name: "Home Automation using NodeMCU", tag: "Smart Home" },
      { name: "Smart Parking System with IoT", tag: "Smart City" },
      { name: "IoT Air Pollution Monitoring", tag: "Environment" },
      { name: "Smart Energy Meter with IoT", tag: "Industrial" },
      { name: "IoT Fire Detection System", tag: "Safety" },
      { name: "Smart Waste Management System", tag: "Smart City" },
      { name: "IoT Based Water Level Monitoring", tag: "Automation" },
      { name: "Smart Traffic System – IoT", tag: "Smart City" },
      { name: "Wearable Fall Detection IoT", tag: "Healthcare" },
      { name: "Edge AI Object Detection – RPi", tag: "AI + IoT" },
    ],
  },
  {
    id: "embedded",
    icon: "🔲",
    title: "Embedded System Final Year Project Ideas",
    seoTitle: "Embedded System Project Ideas Coimbatore 2024-25",
    subtitle: "BE ECE, EEE, EIE – 8051, ARM, PIC, AVR, Arduino, FPGA",
    color: "#e8eaf6",
    accentColor: "#1a237e",
    link: "/services/embedded-projects",
    projects: [
      { name: "Smart Traffic Light Control System", tag: "8051 / ARM" },
      { name: "Automatic Street Light System", tag: "8051" },
      { name: "Temperature & Humidity Monitoring", tag: "Arduino" },
      { name: "Digital Energy Meter – Microcontroller", tag: "PIC" },
      { name: "Smart Security with Face Detection", tag: "Raspberry Pi" },
      { name: "Embedded Fire Alarm System", tag: "8051 / PIC" },
      { name: "RF Based Control System", tag: "ARM / RF" },
      { name: "Home Automation – Embedded", tag: "Arduino" },
      { name: "Wireless Communication System", tag: "ARM / GSM" },
      { name: "Smart Door Lock – RFID", tag: "Arduino" },
      { name: "VLSI ALU Design – Verilog", tag: "FPGA" },
      { name: "GPS Vehicle Tracking System", tag: "ARM / GPS" },
    ],
  },
  {
    id: "software",
    icon: "💻",
    title: "Software & AI Final Year Project Ideas",
    seoTitle: "Software AI ML Project Ideas Coimbatore 2024-25",
    subtitle: "BE CSE, IT, MCA, BSc – Python, AI, ML, MERN, Java, Flutter, Android",
    color: "#e3f2fd",
    accentColor: "#1565c0",
    link: "/services/software-projects",
    projects: [
      { name: "AI Based Chatbot System – NLP", tag: "AI / NLP" },
      { name: "Face Recognition Attendance System", tag: "Deep Learning" },
      { name: "Online Project Management – MERN", tag: "MERN Stack" },
      { name: "Student Attendance System", tag: "PHP / Java" },
      { name: "E-Commerce Web Application", tag: "MERN / Laravel" },
      { name: "AI Plagiarism Detection System", tag: "NLP / Python" },
      { name: "Hospital Management System", tag: "Java / .NET" },
      { name: "Online Job Portal", tag: "PHP / React" },
      { name: "Fake News Detection – BERT", tag: "Deep Learning" },
      { name: "Stock Price Prediction – LSTM", tag: "Deep Learning" },
      { name: "Flutter Food Delivery App", tag: "Flutter" },
      { name: "Object Detection – YOLO v8", tag: "Computer Vision" },
    ],
  },
  {
    id: "aiml",
    icon: "🤖",
    title: "AI & Machine Learning Project Ideas",
    seoTitle: "AI Machine Learning Project Ideas Coimbatore 2024-25",
    subtitle: "BE CSE, IT, ME CSE, MCA – TensorFlow, PyTorch, Scikit-learn, OpenCV",
    color: "#f3e5f5",
    accentColor: "#6a1b9a",
    link: "/services/software-projects",
    projects: [
      { name: "Breast Cancer Detection – CNN", tag: "Deep Learning" },
      { name: "Sentiment Analysis – Twitter/BERT", tag: "NLP" },
      { name: "Sign Language Recognition", tag: "Computer Vision" },
      { name: "Smart Crop Disease Detection", tag: "CNN / Python" },
      { name: "Customer Churn Prediction – ML", tag: "Data Science" },
      { name: "Medical Image Segmentation", tag: "Deep Learning" },
      { name: "Generative AI Image Synthesis", tag: "GAN / GenAI" },
      { name: "Real-Time Object Tracking", tag: "Computer Vision" },
      { name: "Text Summarization – Transformer", tag: "NLP" },
      { name: "Virtual Try-On System", tag: "AI / Deep Learning" },
      { name: "Autonomous Driving Simulation", tag: "Deep Learning" },
      { name: "Fraud Detection – ML", tag: "Data Science" },
    ],
  },
  {
    id: "webmobile",
    icon: "📱",
    title: "Web & Mobile App Project Ideas",
    seoTitle: "Web Development Mobile App Project Ideas Coimbatore 2024-25",
    subtitle: "BE CSE, IT, MCA, BSc – React, Node.js, Flutter, Android, Firebase",
    color: "#fff3e0",
    accentColor: "#e65100",
    link: "/services/software-projects",
    projects: [
      { name: "Real Estate Portal – MERN Stack", tag: "MERN Stack" },
      { name: "Ride Sharing App – Flutter", tag: "Flutter" },
      { name: "Online Learning Platform – React", tag: "React / Node" },
      { name: "Grocery Delivery App – Android", tag: "Android" },
      { name: "Blockchain Voting System", tag: "Blockchain" },
      { name: "Social Media App – MERN", tag: "MERN Stack" },
      { name: "Telemedicine App – Flutter", tag: "Flutter" },
      { name: "Smart College App – React Native", tag: "React Native" },
      { name: "Job Board – Next.js", tag: "React / Node" },
      { name: "AR Navigation App", tag: "Android / AR" },
      { name: "Cloud File Storage – AWS", tag: "Cloud / AWS" },
      { name: "QR Code Based Attendance", tag: "Android" },
    ],
  },
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: "🚀" },
  { number: "1000+", label: "Happy Students", icon: "😊" },
  { number: "6+", label: "Project Domains", icon: "🎯" },
  { number: "4.9 ⭐", label: "Google Rating", icon: "⭐" },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const Projects = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("pj-visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div className="pj-page">
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="pj-hero">
        <div className="pj-hero-bg">
          <div className="pj-hero-grid"></div>
          <div className="pj-glow pj-glow1"></div>
          <div className="pj-glow pj-glow2"></div>
        </div>

        <div className="pj-container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="pj-breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="pj-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" aria-current="page">
                <span itemProp="name">Final Year Project Ideas Coimbatore</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="pj-hero-h1">
            Best Final Year Project Ideas in Coimbatore 2024-25 –{" "}
            <span className="pj-accent">CODEX PROJECT</span>
          </h1>

          <p className="pj-hero-sub">
            IEEE 2024-25 project ideas for Mechanical, IoT, Embedded, Software, AI &amp; Mobile App domains
          </p>

          <p className="pj-hero-desc">
            <strong>CODEX PROJECT</strong> provides the <strong>best final year project ideas
            in Coimbatore</strong> for all engineering branches — <strong>BE, ME, ECE, EEE, CSE,
            IT, MCA, BSc, and Diploma</strong> students. We offer IEEE 2024-25 certified projects
            in <strong>Mechanical Engineering, IoT, Embedded Systems, AI &amp; Machine Learning,
            Web Development</strong>, and <strong>Mobile App Development</strong> — with real-time
            implementation, complete documentation, and affordable pricing in Coimbatore.
          </p>

          <p className="pj-hero-addr">
            📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road,
            Gandhipuram, Coimbatore – 641012
          </p>

          {/* Quick jump */}
          <div className="pj-jump-links">
            {domains.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="pj-jump-btn"
                style={{ "--jc": d.accentColor }}
                aria-label={`Jump to ${d.seoTitle}`}
              >
                {d.icon} {d.title.replace(" Final Year Project Ideas", "").replace(" & AI", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════ */}
      <section className="pj-stats-bar pj-reveal" ref={addRef}>
        <div className="pj-container">
          <div className="pj-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="pj-stat-card" style={{ "--sd": `${i * 0.1}s` }}>
                <span className="pj-stat-icon">{s.icon}</span>
                <strong className="pj-stat-num">{s.number}</strong>
                <span className="pj-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOMAIN SECTIONS ════════════════════════════════════ */}
      <div className="pj-container pj-domains-wrap">
        {domains.map((domain, di) => (
          <section
            key={di}
            id={domain.id}
            ref={addRef}
            aria-labelledby={`${domain.id}-heading`}
            className="pj-domain-section pj-reveal"
            style={{ "--da": domain.accentColor, "--db": domain.color, "--dd": `${di * 0.05}s` }}
          >
            {/* Domain header */}
            <div className="pj-domain-header">
              <div className="pj-domain-icon-wrap">
                <span className="pj-domain-icon" aria-hidden="true">{domain.icon}</span>
              </div>
              <div className="pj-domain-head-text">
                <h2
                  id={`${domain.id}-heading`}
                  className="pj-domain-title"
                >
                  {domain.title} – CODEX PROJECT Coimbatore
                </h2>
                <p className="pj-domain-subtitle">{domain.subtitle}</p>
              </div>
              <div className="pj-domain-badge">IEEE 2024-25</div>
            </div>

            <p className="pj-domain-note">
              <strong>IEEE 2024-25</strong> certified projects with real-time implementation,
              complete documentation, and viva support — affordable pricing at Gandhipuram, Coimbatore.
            </p>

            {/* Project Grid */}
            <div className="pj-projects-grid">
              {domain.projects.map((p, pi) => (
                <div
                  key={pi}
                  className="pj-project-item"
                  itemScope itemType="https://schema.org/CreativeWork"
                >
                  <span className="pj-check" aria-hidden="true">✔</span>
                  <div className="pj-project-info">
                    <p className="pj-project-name" itemProp="name">{p.name}</p>
                    <span className="pj-project-tag" itemProp="genre">{p.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Domain CTA */}
            <div className="pj-domain-footer">
              <a
                href={domain.link}
                className="pj-domain-btn"
                aria-label={`View all ${domain.seoTitle}`}
              >
                View All {domain.title.replace(" Final Year Project Ideas", "")} Projects →
              </a>
              <span className="pj-domain-more">
                + Many more {domain.seoTitle.split(" ")[0]} project ideas available — contact us!
              </span>
            </div>
          </section>
        ))}
      </div>

      {/* ══ FAQ ════════════════════════════════════════════════ */}
      <section className="pj-faq pj-reveal" ref={addRef} aria-labelledby="faq-heading">
        <div className="pj-container">
          <h2 id="faq-heading" className="pj-section-title pj-center">
            Frequently Asked Questions – Final Year Projects Coimbatore
          </h2>
          <div className="pj-faq-list">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className="pj-faq-item" style={{ "--fd": `${i * 0.08}s` }}>
                <h3 className="pj-faq-q">{item.name}</h3>
                <p className="pj-faq-a">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SEO CONTENT BLOCK ══════════════════════════════════ */}
      <section className="pj-seo-block pj-reveal" ref={addRef} aria-labelledby="seo-content-heading">
        <div className="pj-container">
          <div className="pj-seo-inner">
            <h2 id="seo-content-heading" className="pj-seo-title">
              Final Year Project Ideas in Coimbatore – Complete Guide 2024-25
            </h2>
            <p>
              Searching for the <strong>best final year project ideas in Coimbatore</strong>?
              CODEX PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram,
              Coimbatore</strong>, is the most trusted final year project center providing
              IEEE 2024-25 project ideas across all engineering domains. Whether you need{" "}
              <strong>mechanical fabrication project ideas</strong>,{" "}
              <strong>IoT project ideas with Arduino and NodeMCU</strong>,{" "}
              <strong>embedded system project ideas using 8051 and ARM</strong>, or{" "}
              <strong>AI and machine learning project ideas using Python and TensorFlow</strong> —
              we have the right project for every student in Coimbatore.
            </p>
            <p>
              Our project ideas are carefully selected from the latest <strong>IEEE 2024-25
              base papers</strong> and aligned with current industry trends. Every project comes
              with real-time working implementation, complete IEEE format project report, PPT,
              circuit/system diagram, source code, and dedicated <strong>viva preparation
              support</strong>. We serve students from <strong>BE ECE, EEE, EIE, CSE, IT,
              Mechanical, Automobile, MCA, BSc CS, BCA</strong>, and <strong>Diploma</strong>{" "}
              branches from all engineering colleges across Coimbatore.
            </p>
            <p className="pj-seo-last">
              Visit us at <strong>Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore</strong>{" "}
              for a free consultation. Our experts will help you choose the <strong>best final year
              project idea</strong> based on your branch, college requirements, and budget. CODEX
              PROJECT is the <strong>most affordable and trusted final year project center in
              Coimbatore</strong> with 500+ projects delivered and 4.9★ Google rating.
            </p>
          </div>
        </div>
      </section>

      {/* ══ KEYWORD TAG CLOUD ══════════════════════════════════ */}
      <section className="pj-keywords pj-reveal" ref={addRef} aria-label="Related final year project searches">
        <div className="pj-container">
          <h2 className="pj-kw-label">Popular Project Searches – Coimbatore</h2>
          <div className="pj-kw-grid">
            {[
              ["Final Year Projects Coimbatore 2024-25", "/projects"],
              ["IEEE Projects Coimbatore", "/projects"],
              ["Mechanical Projects Coimbatore", "/services/mechanical-projects"],
              ["IoT Projects Coimbatore", "/services/iot-projects"],
              ["Embedded Projects Coimbatore", "/services/embedded-projects"],
              ["AI Projects Coimbatore", "/services/software-projects"],
              ["Machine Learning Projects Coimbatore", "/services/software-projects"],
              ["Python Projects Coimbatore", "/services/software-projects"],
              ["MERN Stack Projects Coimbatore", "/services/software-projects"],
              ["Java Projects Coimbatore", "/services/software-projects"],
              ["Flutter Projects Coimbatore", "/services/software-projects"],
              ["Android Projects Coimbatore", "/services/software-projects"],
              ["Deep Learning Projects Coimbatore", "/services/software-projects"],
              ["CSE Projects Coimbatore", "/services/software-projects"],
              ["ECE Projects Coimbatore", "/services/iot-projects"],
              ["EEE Projects Coimbatore", "/services/embedded-projects"],
              ["MCA Projects Coimbatore", "/services/software-projects"],
              ["BE ME Diploma Projects Coimbatore", "/projects"],
              ["Project Ideas Gandhipuram", "/contact"],
              ["Affordable Projects Coimbatore", "/contact"],
            ].map(([tag, href]) => (
              <a
                key={tag}
                href={href}
                className="pj-kw-tag"
                aria-label={tag}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOCATION ════════════════════════════════════════════ */}
      <section className="pj-location pj-reveal" ref={addRef} aria-labelledby="location-heading">
        <div className="pj-container">
          <h2 id="location-heading" className="pj-section-title pj-center">
            Visit CODEX PROJECT – Final Year Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="pj-location-addr">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <div className="pj-map-wrap">
            <iframe
              src="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              title="CODEX PROJECT Final Year Project Center – Balaji Complex Gandhipuram Coimbatore"
              aria-label="Google Maps showing CODEX PROJECT location at Balaji Complex Gandhipuram Coimbatore"
            />
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════ */}
      <section className="pj-cta pj-reveal" ref={addRef} aria-labelledby="cta-heading">
        <div className="pj-cta-bg"></div>
        <div className="pj-container">
          <h2 id="cta-heading" className="pj-cta-title">
            Choose Your Final Year Project Today – CODEX PROJECT Coimbatore
          </h2>
          <p className="pj-cta-sub">
            500+ project ideas across Mechanical, IoT, Embedded, AI, Web &amp; Mobile domains.
          </p>
          <p className="pj-cta-addr">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <p className="pj-cta-tags">
            IEEE 2024-25 · Real Working Models · Complete Documentation · Viva Support · Affordable
          </p>
          <div className="pj-cta-actions">
            <a href="tel:+918525999002" className="pj-cta-btn pj-cta-primary" aria-label="Get project details from CODEX PROJECT Coimbatore">
              📞 Get Project Details – Free Consultation
            </a>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="pj-cta-btn pj-cta-outline"
              aria-label="Review CODEX PROJECT on Google"
            >
              ⭐ Review on Google
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;