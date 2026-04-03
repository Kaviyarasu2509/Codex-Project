import React from "react";

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
  return (
    <div>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageSchema) }} />
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
            <li className="breadcrumb-item active" aria-current="page" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Final Year Project Ideas Coimbatore</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* ══ H1 ══ */}
        <h1 className="text-center mb-3">
          Best Final Year Project Ideas in Coimbatore 2024-25 – CODEX PROJECT
        </h1>
        <p className="text-center lead mb-2">
          IEEE 2024-25 project ideas for Mechanical, IoT, Embedded, Software, AI &amp; Mobile App domains
        </p>
        <p className="text-center mb-2">
          <strong>CODEX PROJECT</strong> provides the <strong>best final year project ideas
          in Coimbatore</strong> for all engineering branches — <strong>BE, ME, ECE, EEE, CSE,
          IT, MCA, BSc, and Diploma</strong> students. We offer IEEE 2024-25 certified projects
          in <strong>Mechanical Engineering, IoT, Embedded Systems, AI &amp; Machine Learning,
          Web Development</strong>, and <strong>Mobile App Development</strong> — with real-time
          implementation, complete documentation, and affordable pricing in Coimbatore.
        </p>
        <p className="text-center text-muted small mb-3">
          📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road,
          Gandhipuram, Coimbatore – 641012
        </p>

        {/* ══ STATS ══ */}
        <div className="row g-3 mb-5">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3 text-center">
              <div className="p-3 bg-light rounded shadow-sm">
                <h2 className="fw-bold mb-0" style={{ color: "#1565c0" }}>{s.number}</h2>
                <p className="text-muted small mb-0">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ══ QUICK JUMP LINKS ══ */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
          {domains.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="btn btn-sm"
              style={{ background: d.accentColor, color: "white", borderRadius: "20px" }}
              aria-label={`Jump to ${d.seoTitle}`}
            >
              {d.icon} {d.title.replace(" Final Year Project Ideas", "").replace(" & AI", "")}
            </a>
          ))}
        </div>

        {/* ══ DOMAIN SECTIONS ══ */}
        {domains.map((domain, di) => (
          <section
            key={di}
            id={domain.id}
            aria-labelledby={`${domain.id}-heading`}
            className="mb-5 p-4 rounded"
            style={{ background: domain.color, border: `2px solid ${domain.accentColor}20` }}
          >
            {/* Domain Header */}
            <div className="d-flex align-items-center gap-3 mb-2">
              <span className="fs-1" aria-hidden="true">{domain.icon}</span>
              <div>
                <h2
                  id={`${domain.id}-heading`}
                  className="mb-0 fw-bold"
                  style={{ color: domain.accentColor }}
                >
                  {domain.title} – CODEX PROJECT Coimbatore
                </h2>
                <p className="text-muted small mb-0">{domain.subtitle}</p>
              </div>
            </div>

            <p className="text-muted small mb-3">
              <strong>IEEE 2024-25</strong> certified projects with real-time implementation,
              complete documentation, and viva support — affordable pricing at Gandhipuram, Coimbatore.
            </p>

            {/* Project Grid */}
            <div className="row g-2 mb-3">
              {domain.projects.map((p, pi) => (
                <div key={pi} className="col-sm-6 col-lg-4">
                  <div
                    className="d-flex align-items-center gap-2 p-2 bg-white rounded border"
                    itemScope itemType="https://schema.org/CreativeWork"
                  >
                    <span style={{ color: domain.accentColor, fontSize: "1rem" }}>✔</span>
                    <div>
                      <p className="mb-0 small fw-semibold" itemProp="name">{p.name}</p>
                      <span
                        className="badge"
                        style={{ background: domain.accentColor, fontSize: "0.65rem" }}
                        itemProp="genre"
                      >
                        {p.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Domain CTA */}
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <a
                href={domain.link}
                className="btn btn-sm fw-semibold"
                style={{ background: domain.accentColor, color: "white" }}
                aria-label={`View all ${domain.seoTitle}`}
              >
                View All {domain.title.replace(" Final Year Project Ideas", "")} Projects →
              </a>
              <span className="text-muted small">
                + Many more {domain.seoTitle.split(" ")[0]} project ideas available — contact us!
              </span>
            </div>
          </section>
        ))}

        {/* ══ FAQ ══ */}
        <section aria-labelledby="faq-heading" className="mb-5">
          <h2 id="faq-heading" className="text-center mb-4">
            Frequently Asked Questions – Final Year Projects Coimbatore
          </h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="mb-3 p-3 bg-light rounded">
              <h3 className="h6 fw-bold mb-1">{item.name}</h3>
              <p className="text-muted mb-0 small">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-content-heading" className="mb-5 p-4 border rounded">
          <h2 id="seo-content-heading" className="h5 fw-bold mb-3">
            Final Year Project Ideas in Coimbatore – Complete Guide 2024-25
          </h2>
          <p className="text-muted small">
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
          <p className="text-muted small">
            Our project ideas are carefully selected from the latest <strong>IEEE 2024-25
            base papers</strong> and aligned with current industry trends. Every project comes
            with real-time working implementation, complete IEEE format project report, PPT,
            circuit/system diagram, source code, and dedicated <strong>viva preparation
            support</strong>. We serve students from <strong>BE ECE, EEE, EIE, CSE, IT,
            Mechanical, Automobile, MCA, BSc CS, BCA</strong>, and <strong>Diploma</strong>{" "}
            branches from all engineering colleges across Coimbatore.
          </p>
          <p className="text-muted small mb-0">
            Visit us at <strong>Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore</strong>{" "}
            for a free consultation. Our experts will help you choose the <strong>best final year
            project idea</strong> based on your branch, college requirements, and budget. CODEX
            PROJECT is the <strong>most affordable and trusted final year project center in
            Coimbatore</strong> with 500+ projects delivered and 4.9★ Google rating.
          </p>
        </section>

        {/* ══ KEYWORD TAG CLOUD ══ */}
        <section aria-label="Related final year project searches" className="mb-5">
          <h2 className="h6 fw-bold text-center mb-3 text-muted">
            Popular Project Searches – Coimbatore
          </h2>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "Final Year Projects Coimbatore 2024-25",
              "IEEE Projects Coimbatore",
              "Mechanical Projects Coimbatore",
              "IoT Projects Coimbatore",
              "Embedded Projects Coimbatore",
              "AI Projects Coimbatore",
              "Machine Learning Projects Coimbatore",
              "Python Projects Coimbatore",
              "MERN Stack Projects Coimbatore",
              "Java Projects Coimbatore",
              "Flutter Projects Coimbatore",
              "Android Projects Coimbatore",
              "Deep Learning Projects Coimbatore",
              "CSE Projects Coimbatore",
              "ECE Projects Coimbatore",
              "EEE Projects Coimbatore",
              "MCA Projects Coimbatore",
              "BE ME Diploma Projects Coimbatore",
              "Project Ideas Gandhipuram",
              "Affordable Projects Coimbatore",
            ].map((tag) => (
              <a
                key={tag}
                href={`/projects/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="badge px-3 py-2 text-decoration-none"
                style={{ background: "#37474f", color: "white", fontSize: "0.75rem" }}
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
            Visit CODEX PROJECT – Final Year Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="text-center text-muted mb-3">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <iframe
            src="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            title="CODEX PROJECT Final Year Project Center – Balaji Complex Gandhipuram Coimbatore"
            aria-label="Google Maps showing CODEX PROJECT location at Balaji Complex Gandhipuram Coimbatore"
          />
        </section>

        {/* ══ CTA ══ */}
        <section
          className="text-center p-5 rounded"
          style={{ background: "#263238" }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-white fw-bold mb-2">
            Choose Your Final Year Project Today – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-white-50 mb-1">
            500+ project ideas across Mechanical, IoT, Embedded, AI, Web &amp; Mobile domains.
          </p>
          <p className="text-white-50 small mb-1">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <p className="text-white-50 small mb-4">
            IEEE 2024-25 · Real Working Models · Complete Documentation · Viva Support · Affordable
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-warning btn-lg fw-bold"
              aria-label="Get project details from CODEX PROJECT Coimbatore"
            >
              📞 Get Project Details – Free Consultation
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

export default Projects;