import React, { useState, useEffect, useRef, useMemo } from "react";
import "./Faq.css";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════
const YEAR      = "2025-26";
const PHONE     = "8525999002";
const PHONE_SW  = "8525999022";
const PHONE_HW  = "8525999032";
const WA        = `https://wa.me/91${PHONE}`;
const EMAIL     = "codexproject2026@gmail.com";
const ADDRESS   = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";

// ═══════════════════════════════════════════════════════════
// JSON-LD  —  Google loves full answers
// ═══════════════════════════════════════════════════════════
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `What is CODEX PROJECT Coimbatore?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best final year project center in Coimbatore, located at Balaji Complex, Gandhipuram. We provide IEEE ${YEAR} final year projects for all engineering branches — BE, ME, MCA, BSc, Diploma — across Mechanical, IoT, Embedded, AI/ML, Web Development, Mobile App, and Blockchain domains. With 5+ years experience, 1000+ students served, and a 4.9★ Google rating, we are Tamil Nadu's most trusted final year project center. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete a final year project at CODEX PROJECT?",
      "acceptedAnswer": { "@type": "Answer", "text": `Software and AI/ML projects: 3–7 working days. IoT and Embedded projects: 7–14 days. Mechanical fabrication projects: 14–21 days. Express delivery is available for urgent requirements. Call ${PHONE} for exact timeline based on your project title.` },
    },
    {
      "@type": "Question",
      "name": "What is included in a final year project package at CODEX PROJECT?",
      "acceptedAnswer": { "@type": "Answer", "text": `Every CODEX PROJECT package includes: (1) Complete source code with comments, (2) IEEE format project report, (3) Synopsis and abstract, (4) PowerPoint presentation (PPT), (5) UML/circuit diagrams, (6) Viva question preparation with mock Q&A, (7) Internship certificate, (8) Unlimited revisions until college acceptance, (9) WhatsApp support throughout. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": `What is the cost of a final year project at CODEX PROJECT Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers the most affordable final year project pricing in Coimbatore. Software/AI projects start at the lowest price. IoT and Embedded projects include hardware cost. Mechanical fabrication projects vary by complexity. EMI/installment options available. Call ${PHONE} for a free consultation and custom quote. No hidden charges.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT provide IEEE projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT provides IEEE ${YEAR} certified final year projects with base paper implementation for all branches — CSE, ECE, EEE, IT, MCA, Mechanical. We maintain a database of 600+ IEEE ${YEAR} base papers from IEEE Xplore, IEEE Transactions, and conference proceedings. We also support IEEE paper publication in IRJET, IJRASET, and IJERT journals. Call ${PHONE_SW} for software IEEE projects and ${PHONE_HW} for hardware IEEE projects.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT provide internship certificate?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT provides a free internship certificate with every final year project. The certificate is included in all project packages at no extra cost. It covers your internship period at CODEX PROJECT and is accepted by all engineering colleges in Coimbatore and Tamil Nadu. Call ${PHONE} for details.` },
    },
    {
      "@type": "Question",
      "name": "Which engineering colleges in Coimbatore does CODEX PROJECT serve?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT serves students from all engineering colleges in Coimbatore and nearby districts including PSG Tech, CIT, KMEA, Sri Krishna, KPR College, Karpagam, SNS, KGISL, RVS, Rathinam, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, Excel Engineering, Nehru, JCT, EASA, and all polytechnics and arts & science colleges in Coimbatore, Tirupur, Erode, and Salem.` },
    },
    {
      "@type": "Question",
      "name": "Do I need to visit CODEX PROJECT office to get a project?",
      "acceptedAnswer": { "@type": "Answer", "text": `You can visit us at Balaji Complex, Gandhipuram, Coimbatore (Mon–Sat, 9 AM–8 PM) or contact us via WhatsApp at ${PHONE}. Project consultation, topic selection, and delivery can all be done via WhatsApp for outstation students from Tirupur, Erode, Salem, and beyond. However, for hardware projects, a visit is recommended for demo and viva preparation.` },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "FAQ",     "item": "https://www.codexproject.in/faq" },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.codexproject.in/#organization",
  "name": "CODEX PROJECT",
  "url": "https://www.codexproject.in",
  "telephone": `+91${PHONE}`,
  "email": EMAIL,
  "address": { "@type": "PostalAddress", "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road", "addressLocality": "Gandhipuram, Coimbatore", "addressRegion": "Tamil Nadu", "postalCode": "641012", "addressCountry": "IN" },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.0168", "longitude": "76.9558" },
  "openingHours": "Mo-Sa 09:00-20:00",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "ratingCount": "320" },
};

// ═══════════════════════════════════════════════════════════
// FAQ DATA — 50+ questions, full answers, department-wise
// ═══════════════════════════════════════════════════════════
const FAQ_DATA = [
  // ── GENERAL ─────────────────────────────────────────────
  {
    cat: "General",
    icon: "🏢",
    items: [
      {
        q: `What is CODEX PROJECT Coimbatore?`,
        a: `CODEX PROJECT is the best final year project center in Coimbatore, located at 2nd Floor, Balaji Complex, Gandhipuram. We provide IEEE ${YEAR} final year projects for all engineering branches — BE, ME, MCA, BSc, Diploma — across Mechanical, IoT, Embedded Systems, AI/ML, Web Development, Mobile App, and Blockchain domains. With 5+ years of experience, 1,000+ students served, and a 4.9★ Google rating, we are Tamil Nadu's most trusted final year project center.`,
        tags: ["about codex project", "project center coimbatore"],
      },
      {
        q: "Where is CODEX PROJECT located?",
        a: `We are located at: 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012. We are easily accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam. Buses from PSG Tech, CIT, KPR, SNS, and KGISL stop near Gandhipuram. Open Monday to Saturday, 9 AM to 8 PM.`,
        tags: ["location", "address", "gandhipuram"],
      },
      {
        q: "What are CODEX PROJECT office hours?",
        a: `CODEX PROJECT is open Monday to Saturday, 9:00 AM to 8:00 PM. WhatsApp support is available 7 days a week including Sundays. For urgent requirements, contact us on WhatsApp at ${PHONE} for immediate response.`,
        tags: ["timings", "hours", "open"],
      },
      {
        q: "How do I contact CODEX PROJECT?",
        a: `General Enquiries: ${PHONE} | Software & AI Projects: ${PHONE_SW} | Embedded, IoT & Mechanical: ${PHONE_HW} | Email: ${EMAIL} | WhatsApp: ${PHONE} (fastest response). Visit us at: ${ADDRESS}.`,
        tags: ["contact", "phone", "whatsapp"],
      },
      {
        q: "How many years of experience does CODEX PROJECT have?",
        a: `CODEX PROJECT has 5+ years of experience in final year project guidance, having successfully delivered 500+ projects and guided 1,000+ engineering students from all Coimbatore colleges. Our team includes experienced engineers specializing in AI/ML, IoT, Embedded Systems, Mechanical, and Web Development domains.`,
        tags: ["experience", "years", "history"],
      },
    ],
  },
  // ── PROJECTS & DELIVERY ─────────────────────────────────
  {
    cat: "Projects & Delivery",
    icon: "🚀",
    items: [
      {
        q: `How long does it take to complete a final year project?`,
        a: `Delivery timelines at CODEX PROJECT: Software & AI projects: 3–7 working days | IoT & Embedded projects: 7–14 working days | Mechanical fabrication projects: 14–21 working days | Express delivery available for urgent deadlines. Call ${PHONE} to confirm exact timeline for your specific project title.`,
        tags: ["delivery time", "how long", "days"],
      },
      {
        q: "What is included in a CODEX PROJECT package?",
        a: `Every CODEX PROJECT package includes: ✅ Complete source code with inline comments ✅ IEEE format project report (50–80 pages) ✅ Synopsis and abstract ✅ PowerPoint presentation (PPT) ✅ UML diagrams / circuit diagrams / architecture diagram ✅ Viva question bank with detailed answers ✅ Mock viva coaching session ✅ FREE internship certificate ✅ Unlimited revisions until college accepts ✅ WhatsApp support throughout the project. No hidden charges.`,
        tags: ["what's included", "package", "documentation"],
      },
      {
        q: "Do you provide real working models or just code?",
        a: `CODEX PROJECT provides real, working, demo-ready projects — not just code files. Software projects come with a live running demo. IoT and Embedded projects come with assembled hardware and live circuit demonstration. Mechanical projects are fully fabricated and working. You can demo the project directly during your college review.`,
        tags: ["working model", "demo", "real project"],
      },
      {
        q: "Can I bring my own project idea to CODEX PROJECT?",
        a: `Absolutely! CODEX PROJECT welcomes custom project ideas. Share your idea via WhatsApp at ${PHONE} and our engineers will assess feasibility, estimate cost, and confirm delivery timeline. We implement custom titles that are not in our standard catalog. No commitment required for initial consultation.`,
        tags: ["custom project", "own idea", "custom title"],
      },
      {
        q: "Do you provide ready-made projects?",
        a: `Yes! CODEX PROJECT maintains a collection of ready-made, previously implemented projects that can be quickly customized and delivered. These are ideal for students with urgent deadlines. Ready-made projects include full documentation and can be delivered within 1–3 days. Call ${PHONE} for available ready-made titles.`,
        tags: ["ready made", "immediate", "urgent", "fast delivery"],
      },
      {
        q: "Do you provide viva preparation support?",
        a: `Yes! Viva preparation is included FREE in every CODEX PROJECT package. We provide: (1) A comprehensive viva question bank with 50+ expected questions and detailed answers specific to your project, (2) A mock viva session where our engineers play the role of reviewers, (3) Explanation of every module, algorithm, and code block so you can answer confidently. We don't just give you a project — we make sure you understand it.`,
        tags: ["viva", "viva preparation", "interview", "review"],
      },
      {
        q: "What if my college rejects the project?",
        a: `CODEX PROJECT offers unlimited free revisions until your college accepts the project. If your college reviewer asks for modifications, additional features, or documentation changes, we implement them at no extra cost. We stand by every project we deliver. Call ${PHONE} for revision requests.`,
        tags: ["revision", "rejection", "college acceptance"],
      },
      {
        q: "Can I do the project remotely without visiting?",
        a: `Yes! For software, AI, and web development projects, everything can be done remotely via WhatsApp. We share project files, documentation, and provide viva coaching over video call. Students from Tirupur, Erode, Salem, and other cities frequently use our remote service. For hardware (IoT, Embedded, Mechanical) projects, a visit is recommended for hardware demo and viva prep.`,
        tags: ["remote", "online", "whatsapp", "outstation"],
      },
    ],
  },
  // ── IEEE & DOCUMENTATION ─────────────────────────────────
  {
    cat: "IEEE & Documentation",
    icon: "📋",
    items: [
      {
        q: `Does CODEX PROJECT provide IEEE ${YEAR} projects?`,
        a: `Yes! CODEX PROJECT provides IEEE ${YEAR} certified final year projects with base paper implementation for all engineering branches. We maintain a database of 600+ IEEE ${YEAR} base papers from IEEE Xplore, IEEE Transactions, and IEEE Conference proceedings. Our process: select relevant IEEE paper → implement complete system with improvements → compare results with original paper → write report. Call ${PHONE_SW} for software IEEE projects | ${PHONE_HW} for hardware IEEE projects.`,
        tags: ["ieee projects", `ieee ${YEAR}`, "base paper"],
      },
      {
        q: "What is the difference between IEEE and non-IEEE projects?",
        a: `IEEE projects are based on peer-reviewed research papers published in IEEE Xplore — they involve solving real research problems with measurable results. Non-IEEE projects are application-based (web apps, mobile apps, management systems). IEEE projects typically carry higher academic marks and more placement value. Both types are available at CODEX PROJECT. Our engineers guide you in choosing the right type based on your college requirements.`,
        tags: ["ieee vs non-ieee", "base paper difference"],
      },
      {
        q: "Can CODEX PROJECT help with IEEE paper publication?",
        a: `Yes! CODEX PROJECT provides IEEE paper publication support in reputed journals: IRJET (International Research Journal of Engineering and Technology), IJRASET (International Journal for Research in Applied Science and Engineering Technology), IJERT (International Journal of Engineering Research & Technology). We help write the paper, format it per journal guidelines, and guide you through the submission process. Call ${PHONE_SW} for publication enquiries.`,
        tags: ["ieee publication", "paper publication", "journal", "irjet", "ijraset"],
      },
      {
        q: "What format is the project report in?",
        a: `CODEX PROJECT provides IEEE format project reports following Anna University / your college's documentation standards. The report includes: Title page → Certificate → Abstract → Acknowledgement → Table of Contents → List of Figures/Tables → Chapter 1: Introduction → Chapter 2: Literature Survey → Chapter 3: System Design → Chapter 4: Implementation → Chapter 5: Results & Discussion → Chapter 6: Conclusion → References → Appendix (source code). Typically 50–100 pages.`,
        tags: ["project report", "documentation format", "ieee format", "anna university"],
      },
      {
        q: "Is the source code plagiarism-free?",
        a: `Yes. CODEX PROJECT develops all projects with original implementation. For IEEE projects, we implement the base paper's methodology from scratch with additional improvements. Source code is not copied from existing GitHub repositories. All documentation is written originally. We do not resell or reuse the same exact code for multiple students at the same college.`,
        tags: ["plagiarism free", "original code", "unique"],
      },
    ],
  },
  // ── PRICING & PAYMENT ───────────────────────────────────
  {
    cat: "Pricing & Payment",
    icon: "💰",
    items: [
      {
        q: `What is the cost of a final year project at CODEX PROJECT ${YEAR}?`,
        a: `CODEX PROJECT offers the most affordable final year project pricing in Coimbatore with zero hidden charges. Pricing varies by domain: Software & AI projects (most affordable) → IoT projects (includes hardware + cloud) → Embedded projects (includes PCB + microcontroller) → Mechanical projects (includes fabrication + materials). All packages include documentation, viva prep, and internship certificate. Call ${PHONE} for a free consultation and custom quote before committing.`,
        tags: ["cost", "price", "fees", "how much"],
      },
      {
        q: "Is there an EMI or installment payment option?",
        a: `Yes! CODEX PROJECT offers flexible installment payment options for students who cannot pay the full amount upfront. Common structure: 50% advance at start + 50% on delivery. Custom installment plans are also available based on your situation. No interest charged. Call ${PHONE} to discuss payment options.`,
        tags: ["emi", "installment", "payment", "advance"],
      },
      {
        q: "Are there any hidden charges?",
        a: `No hidden charges at CODEX PROJECT. The quoted price includes everything: source code, project report, synopsis, abstract, PPT, diagrams, viva preparation, internship certificate, and unlimited revisions. What you pay is what you get — fully inclusive. Call ${PHONE} to get a detailed quote before any commitment.`,
        tags: ["hidden charges", "transparent pricing", "total cost"],
      },
      {
        q: "What payment methods does CODEX PROJECT accept?",
        a: `CODEX PROJECT accepts: Cash, UPI (GPay, PhonePe, Paytm), Bank Transfer (NEFT/IMPS), and QR code payment. All payments are confirmed with a receipt. Call ${PHONE} for payment details.`,
        tags: ["payment methods", "upi", "cash", "online payment"],
      },
    ],
  },
  // ── DEPARTMENT-WISE ─────────────────────────────────────
  {
    cat: "CSE & IT Projects",
    icon: "💻",
    items: [
      {
        q: `What are the best CSE final year projects in Coimbatore ${YEAR}?`,
        a: `Best CSE final year project domains at CODEX PROJECT for ${YEAR}: (1) AI & Machine Learning — Python, TensorFlow, YOLO v8, BERT, (2) Web Development — MERN Stack, Django, Spring Boot, (3) Mobile Apps — Flutter, Android, React Native, (4) Cybersecurity — intrusion detection, malware analysis, (5) Blockchain — Solidity, Ethereum, Web3, (6) Cloud Computing — AWS, Azure, Docker. Call ${PHONE_SW} for CSE project enquiries.`,
        tags: [`cse projects ${YEAR}`, "cse final year", "computer science projects"],
      },
      {
        q: "What Python AI/ML projects does CODEX PROJECT offer?",
        a: `CODEX PROJECT offers 100+ Python AI/ML project titles for ${YEAR} including: Face Recognition Attendance (CNN + OpenCV), Crop Disease Detection (ResNet transfer learning), Brain Tumor Detection (CNN + MRI), Sentiment Analysis (BERT), Object Detection (YOLO v8), Stock Prediction (LSTM), Medical Image Segmentation (U-Net), Fake News Detection (NLP), AI Chatbot (GPT API), and 90+ more titles. Frameworks: TensorFlow, PyTorch, Keras, Scikit-learn, HuggingFace. Call ${PHONE_SW}.`,
        tags: ["python projects", "machine learning projects", "ai projects", "tensorflow", "pytorch"],
      },
      {
        q: `What are the best MCA final year projects in Coimbatore ${YEAR}?`,
        a: `Best MCA final year project ideas at CODEX PROJECT for ${YEAR}: Python (Django, Flask), Java (Spring Boot, JSP), PHP (Laravel, CodeIgniter), MERN Stack, Flutter, and Android projects. Popular titles: Online Examination System, Blood Bank Management, Crime Prediction (ML), Library Management, Telemedicine App, Agriculture Price Prediction. All with complete IEEE documentation. Call ${PHONE_SW}.`,
        tags: [`mca projects ${YEAR}`, "mca final year coimbatore"],
      },
    ],
  },
  {
    cat: "ECE & EEE Projects",
    icon: "📡",
    items: [
      {
        q: `What are the best ECE final year projects in Coimbatore ${YEAR}?`,
        a: `Best ECE final year project domains at CODEX PROJECT for ${YEAR}: (1) IoT — Arduino, ESP32, NodeMCU, Raspberry Pi with Firebase/AWS IoT, (2) Embedded Systems — 8051, ARM Cortex, PIC, FPGA with Keil/Proteus, (3) VLSI — FPGA, Verilog, VHDL, Xilinx Vivado, (4) Signal Processing — MATLAB, LabVIEW, (5) Power Electronics — converters, solar MPPT, BLDC motor control. Call ${PHONE_HW} for ECE project enquiries.`,
        tags: [`ece projects ${YEAR}`, "ece final year coimbatore", "electronics projects"],
      },
      {
        q: "What IoT projects does CODEX PROJECT provide?",
        a: `CODEX PROJECT provides 80+ IoT project titles for ${YEAR} including: Smart Irrigation (NodeMCU + Firebase), IoT Health Monitoring (heart rate, SpO2), Home Automation (ESP32 + Blynk), Smart Energy Meter (AWS IoT), Air Quality Monitoring (ThingSpeak), GPS Vehicle Tracking, Edge AI (Raspberry Pi + YOLO), Flood Detection, and 70+ more. Every IoT project includes real hardware, assembled circuit, cloud dashboard, mobile app, and IEEE documentation. Call ${PHONE_HW}.`,
        tags: ["iot projects coimbatore", "arduino projects", "esp32 projects", "raspberry pi"],
      },
      {
        q: "What embedded system projects does CODEX PROJECT offer?",
        a: `CODEX PROJECT provides 80+ embedded system project titles for ${YEAR}: 8051 (Smart Traffic Light, Fire Alarm, Energy Meter), ARM Cortex (Motor Control, GPS Tracking, Smart Lock), PIC (Digital Meter, Alarm Systems), FPGA (ALU Design in Verilog/VHDL, Image Processing), Raspberry Pi (Face Detection, Edge AI), Arduino (RFID Access, Line Following Robot, Smart Helmet). Keil IDE, Proteus simulation, PCB assembly — all included. Call ${PHONE_HW}.`,
        tags: ["embedded projects", "8051 projects", "arm cortex", "fpga projects", "vlsi"],
      },
    ],
  },
  {
    cat: "Mechanical Projects",
    icon: "⚙️",
    items: [
      {
        q: `What mechanical final year projects does CODEX PROJECT provide in Coimbatore ${YEAR}?`,
        a: `CODEX PROJECT provides 70+ mechanical final year project titles for ${YEAR}: Fabrication (Hydraulic Lift, Stirling Engine, Water Jet Machining), Robotics (Robotic Arm, Pneumatic Pick & Place, Agricultural Robot), CAD/CAM (SolidWorks, ANSYS, CATIA, AutoCAD design projects), Automobile (Solar EV, Electromagnetic Braking, Gear Shifting), and Automation projects. Real working models with full IEEE documentation. Call ${PHONE_HW}.`,
        tags: ["mechanical projects coimbatore", "fabrication projects", "cad cam projects", "robotics"],
      },
      {
        q: "What software tools does CODEX PROJECT use for mechanical projects?",
        a: `CODEX PROJECT uses industry-standard tools for mechanical projects: SolidWorks (3D modeling and stress analysis), ANSYS (structural, thermal, and fluid simulation), CATIA (advanced surface modeling), AutoCAD (2D technical drawings), MATLAB/Simulink (control systems), and 3D printing for prototypes. Our fabrication workshop handles welding, CNC machining, and assembly.`,
        tags: ["solidworks", "ansys", "catia", "mechanical software"],
      },
    ],
  },
  // ── CERTIFICATES & COLLEGE ──────────────────────────────
  {
    cat: "Certificate & Colleges",
    icon: "🎓",
    items: [
      {
        q: "Does CODEX PROJECT provide internship certificate?",
        a: `Yes! Every CODEX PROJECT project package includes a FREE internship certificate. The certificate mentions your name, project title, technology domain, and internship period at CODEX PROJECT. It is accepted by all engineering colleges in Coimbatore, Tamil Nadu. Many companies also accept it as proof of project experience. Call ${PHONE} for certificate details.`,
        tags: ["internship certificate", "certificate", "free certificate"],
      },
      {
        q: "Is the internship certificate accepted by colleges?",
        a: `Yes. The CODEX PROJECT internship certificate is accepted by all engineering colleges in Coimbatore including PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, and all polytechnics. The certificate is on company letterhead with registration details and authorized signature.`,
        tags: ["certificate accepted", "college accepted", "anna university"],
      },
      {
        q: "Which Coimbatore colleges does CODEX PROJECT serve?",
        a: `CODEX PROJECT serves students from 30+ colleges: PSG Tech, CIT (Coimbatore Institute of Technology), KMEA, Sri Krishna Engineering College, KPR College, Karpagam University, SNS College, KGISL, RVS College, Rathinam College, Hindusthan College, Sri Eshwar College, Dr NGP Institute, Bannari Amman Institute, Excel Engineering, Nehru Engineering, JCT, EASA College, Info Institute, Sengunthar, and all polytechnics and arts & science colleges in Coimbatore, Tirupur, Erode, and Salem.`,
        tags: ["colleges", "psg tech", "cit coimbatore", "kpr", "kgisl", "snsce"],
      },
      {
        q: "Do you serve students outside Coimbatore?",
        a: `Yes! CODEX PROJECT serves students from Tirupur, Erode, Salem, Namakkal, Dindigul, Pollachi, and all nearby districts. Remote project delivery via WhatsApp is available for outstation students. Many students from Tirupur and Erode colleges regularly use our services. Call ${PHONE} for outstation enquiries.`,
        tags: ["tirupur", "erode", "salem", "outstation", "outside coimbatore"],
      },
    ],
  },
  // ── PROCESS & SUPPORT ───────────────────────────────────
  {
    cat: "Process & Support",
    icon: "🔧",
    items: [
      {
        q: "How do I get started with a final year project at CODEX PROJECT?",
        a: `Getting started is easy: Step 1 — Call or WhatsApp ${PHONE} with your branch, semester, and any project preference. Step 2 — Free consultation: our engineers suggest the best project titles based on your branch, college requirements, and budget (no commitment). Step 3 — Confirm the project title and pay advance. Step 4 — Development begins with real-time updates via WhatsApp. Step 5 — Project delivered with documentation. Step 6 — Viva preparation coaching. Step 7 — Internship certificate issued.`,
        tags: ["how to start", "process", "steps", "get started"],
      },
      {
        q: "Do you provide support after project delivery?",
        a: `Yes! CODEX PROJECT provides post-delivery support: (1) Unlimited revisions if your college asks for changes — free of cost, (2) Viva preparation coaching before each college review, (3) Bug fixing if any technical issues arise, (4) Additional documentation if required by your college. WhatsApp support is available throughout your project timeline. Call ${PHONE}.`,
        tags: ["after delivery support", "post delivery", "support"],
      },
      {
        q: "Can I involve myself in the project development process?",
        a: `Absolutely! CODEX PROJECT encourages student involvement. You can: visit our center during development, see the code being written, understand each module, ask questions, and participate in testing. This makes you confident during your viva and helps you genuinely understand the project. Many students visit daily during their project development phase.`,
        tags: ["student involvement", "learning", "participate"],
      },
      {
        q: "Do you help with project review presentations?",
        a: `Yes! CODEX PROJECT helps you prepare for all college review stages — first review, second review, and final review. We provide review-specific PPTs, help you explain the project flow clearly, anticipate reviewer questions, and coach you on handling technical questions. Many students call us the day before their review for last-minute preparation support. Call ${PHONE}.`,
        tags: ["review presentation", "project review", "college review", "ppt"],
      },
      {
        q: "What if I don't know what project to choose?",
        a: `No worries! CODEX PROJECT offers completely free project consultation. Call ${PHONE} or WhatsApp us and tell us: your branch (CSE, ECE, IT, Mechanical, MCA, etc.), semester, college name, and budget. Our engineers will suggest 5–10 project titles that match your academic level, college requirements, and trending technology. No pressure, no commitment needed for the consultation.`,
        tags: ["project selection", "don't know", "help choose", "consultation"],
      },
    ],
  },
];

const ALL_CATS = ["All", ...FAQ_DATA.map(g => g.cat)];

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
const Faq = () => {
  const [activeCat, setActiveCat]   = useState("All");
  const [search, setSearch]         = useState("");
  const [openIdx, setOpenIdx]       = useState(null); // "groupIdx-itemIdx"
  const revealRefs = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("fq-visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const displayGroups = useMemo(() => {
    let groups = activeCat === "All" ? FAQ_DATA : FAQ_DATA.filter(g => g.cat === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      groups = groups.map(g => ({
        ...g,
        items: g.items.filter(i =>
          i.q.toLowerCase().includes(q) ||
          i.a.toLowerCase().includes(q) ||
          i.tags.some(t => t.includes(q))
        ),
      })).filter(g => g.items.length > 0);
    }
    return groups;
  }, [activeCat, search]);

  const totalQ = FAQ_DATA.reduce((s, g) => s + g.items.length, 0);
  const visibleQ = displayGroups.reduce((s, g) => s + g.items.length, 0);

  const toggle = key => setOpenIdx(openIdx === key ? null : key);

  return (
    <div className="fq-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="fq-hero" ref={heroRef} aria-labelledby="fq-h1">
        <div className="fq-hero-bg">
          <div className="fq-grid"></div>
          <div className="fq-glow fq-g1"></div>
          <div className="fq-glow fq-g2"></div>
        </div>
        <div className="fq-container">
          <nav className="fq-breadcrumb" aria-label="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem"><a href="/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1" /></li>
              <span>›</span>
              <li itemScope itemType="https://schema.org/ListItem" aria-current="page"><span itemProp="name">FAQ</span><meta itemProp="position" content="2" /></li>
            </ol>
          </nav>

          <span className="fq-eyebrow">Everything You Need to Know</span>

          <h1 id="fq-h1" className="fq-h1">
            Final Year Project FAQ –<br />
            <span className="fq-accent">CODEX PROJECT Coimbatore {YEAR}</span>
          </h1>
          <p className="fq-hero-sub">
            {totalQ}+ detailed answers about final year projects, IEEE {YEAR}, pricing, delivery,
            internship certificate, and more — for engineering students in Coimbatore.
          </p>

          {/* Search */}
          <div className="fq-search-wrap">
            <span className="fq-search-icon">🔍</span>
            <input
              type="search"
              className="fq-search"
              placeholder={`Search ${totalQ}+ FAQ questions...`}
              value={search}
              onChange={e => { setSearch(e.target.value); setOpenIdx(null); }}
              aria-label="Search FAQ"
            />
            {search && <button className="fq-search-clear" onClick={() => setSearch("")}>✕</button>}
          </div>
          {search && <p className="fq-search-count">{visibleQ} result{visibleQ !== 1 ? "s" : ""} for "{search}"</p>}

          <div className="fq-hero-chips">
            <span className="fq-chip">📚 {totalQ}+ Questions</span>
            <span className="fq-chip">🎯 {FAQ_DATA.length} Categories</span>
            <span className="fq-chip">📍 Gandhipuram, Coimbatore</span>
            <span className="fq-chip">📞 {PHONE}</span>
            <span className="fq-chip">⭐ 4.9 Google Rating</span>
          </div>
        </div>
      </section>

      {/* ══ CATEGORY TABS ═══════════════════════════════════ */}
      <div className="fq-cats-bar fq-reveal" ref={addRef}>
        <div className="fq-container">
          <div className="fq-cats" role="tablist">
            {ALL_CATS.map(cat => (
              <button key={cat}
                role="tab"
                aria-selected={activeCat === cat}
                className={`fq-cat ${activeCat === cat ? "fq-cat-active" : ""}`}
                onClick={() => { setActiveCat(cat); setOpenIdx(null); }}
              >
                {FAQ_DATA.find(g => g.cat === cat)?.icon || "📋"} {cat}
                <span className="fq-cat-count">
                  {cat === "All" ? totalQ : FAQ_DATA.find(g => g.cat === cat)?.items.length || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FAQ ACCORDION ════════════════════════════════════ */}
      <main className="fq-main" aria-label="FAQ content">
        <div className="fq-container">
          {displayGroups.length === 0 ? (
            <div className="fq-empty">
              <p>No results found for "<strong>{search}</strong>". Try different keywords or <a href={`tel:+91${PHONE}`}>call us directly</a>.</p>
            </div>
          ) : (
            displayGroups.map((group, gi) => (
              <section key={gi} className="fq-group fq-reveal" ref={addRef} aria-labelledby={`fq-group-${gi}`}>
                <div className="fq-group-header">
                  <span className="fq-group-icon" aria-hidden="true">{group.icon}</span>
                  <h2 id={`fq-group-${gi}`} className="fq-group-title">
                    {group.cat} – Final Year Projects Coimbatore {YEAR}
                  </h2>
                  <span className="fq-group-count">{group.items.length} Q&A</span>
                </div>

                <div className="fq-items" itemScope itemType="https://schema.org/FAQPage">
                  {group.items.map((item, ii) => {
                    const key = `${gi}-${ii}`;
                    const isOpen = openIdx === key;
                    return (
                      <div
                        key={ii}
                        className={`fq-item ${isOpen ? "fq-item-open" : ""}`}
                        itemScope itemType="https://schema.org/Question"
                        style={{ "--delay": `${ii * 0.04}s` }}
                      >
                        <button
                          className="fq-question"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          aria-controls={`fq-ans-${key}`}
                        >
                          <span className="fq-q-num">{ii + 1}</span>
                          <span className="fq-q-text" itemProp="name">{item.q}</span>
                          <span className="fq-q-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                        </button>

                        <div
                          id={`fq-ans-${key}`}
                          className="fq-answer"
                          role="region"
                          aria-hidden={!isOpen}
                          itemScope itemType="https://schema.org/Answer"
                          itemProp="acceptedAnswer"
                        >
                          <div className="fq-answer-inner">
                            <p itemProp="text">{item.a}</p>
                            <div className="fq-tags">
                              {item.tags.map(t => <span key={t} className="fq-tag">#{t}</span>)}
                            </div>
                            <div className="fq-answer-cta">
                              <a href={`tel:+91${PHONE}`} className="fq-cta-call">📞 Call {PHONE}</a>
                              <a href={`${WA}?text=Hi!%20I%20have%20a%20question%20about%3A%20${encodeURIComponent(item.q)}`}
                                 target="_blank" rel="noopener noreferrer" className="fq-cta-wa">
                                💬 WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>
      </main>

      {/* ══ STILL HAVE QUESTIONS ════════════════════════════ */}
      <section className="fq-still fq-reveal" ref={addRef} aria-labelledby="fq-still-h2">
        <div className="fq-container">
          <div className="fq-still-inner">
            <h2 id="fq-still-h2" className="fq-still-title">Still Have Questions?</h2>
            <p className="fq-still-sub">
              Our engineering experts at CODEX PROJECT are available Monday–Saturday, 9 AM–8 PM.
              WhatsApp responses within minutes, 7 days a week.
            </p>
            <div className="fq-still-actions">
              <a href={`tel:+91${PHONE}`} className="fq-btn fq-btn-primary">📞 Call: {PHONE}</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="fq-btn fq-btn-wa">💬 WhatsApp Us Now</a>
              <a href="/contact" className="fq-btn fq-btn-outline">📧 Contact Form</a>
            </div>
            <p className="fq-still-addr">📍 {ADDRESS}</p>
          </div>
        </div>
      </section>

      {/* ══ QUICK TOPIC CLOUD ════════════════════════════════ */}
      <section className="fq-topics fq-reveal" ref={addRef} aria-label="FAQ topics">
        <div className="fq-container">
          <h2 className="fq-topics-title">Popular FAQ Topics – Final Year Projects Coimbatore {YEAR}</h2>
          <div className="fq-topics-grid">
            {[
              "Final Year Project Cost Coimbatore", "IEEE Projects Coimbatore", "Internship Certificate",
              "Viva Preparation", "Project Delivery Time", "MERN Stack Projects",
              "Python AI Projects", "IoT Projects Coimbatore", "Embedded Projects Coimbatore",
              "Mechanical Projects Coimbatore", "MCA Projects Coimbatore", "ECE Projects Coimbatore",
              "CSE Projects Coimbatore", "IEEE Publication Support", "Ready Made Projects",
              "Project with Source Code", "Flutter Projects Coimbatore", "IEEE Base Paper Projects",
              `Final Year Project ${YEAR}`, "Project Center Gandhipuram",
            ].map(t => (
              <button key={t} className="fq-topic-tag"
                onClick={() => { setSearch(t.toLowerCase()); setActiveCat("All"); window.scrollTo({top:400, behavior:"smooth"}); }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════ */}
      <section className="fq-cta fq-reveal" ref={addRef} aria-labelledby="fq-cta-h2">
        <div className="fq-cta-bg"></div>
        <div className="fq-container">
          <h2 id="fq-cta-h2" className="fq-cta-title">
            Ready to Start Your IEEE {YEAR} Final Year Project?<br />
            <span className="fq-cta-sub">Visit CODEX PROJECT – Gandhipuram, Coimbatore</span>
          </h2>
          <p className="fq-cta-desc">
            Join <strong>1000+ engineering students</strong> who trusted CODEX PROJECT —
            the <strong>best final year project center in Coimbatore</strong> —
            for IEEE {YEAR} projects with internship certificate, viva support, and affordable pricing.
          </p>
          <p className="fq-cta-addr">📍 {ADDRESS}</p>
          <div className="fq-cta-actions">
            <a href={`tel:+91${PHONE}`} className="fq-btn fq-btn-primary">📞 Call: {PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="fq-btn fq-btn-wa">💬 WhatsApp Us</a>
            <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="fq-btn fq-btn-outline">⭐ Review on Google</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;