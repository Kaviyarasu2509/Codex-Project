import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";

// ═══════════════════════════════════════════════════════════════
// YEAR CONSTANTS — change here to update everywhere
// ═══════════════════════════════════════════════════════════════
const YEAR = "2026-27";
const YEAR_SHORT = "2027";
const PHONE_GEN = "8525999002";
const PHONE_SW = "8525999022";
const PHONE_HW = "8525999032";
const EMAIL = "codexproject2026@gmail.com";
const ADDRESS = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";

// ═══════════════════════════════════════════════════════════════
// JSON-LD SCHEMAS — Maximum Google rich-result coverage
// ═══════════════════════════════════════════════════════════════
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.codexproject.in/#organization",
  "name": "CODEX PROJECT",
  "alternateName": "Codex Project Center Coimbatore",
  "url": "https://www.codexproject.in",
  "logo": { "@type": "ImageObject", "url": "https://www.codexproject.in/logo512.png" },
  "image": "https://www.codexproject.in/logo512.png",
  "description": `CODEX PROJECT is the best final year project center in Coimbatore. IEEE ${YEAR} projects in AI, ML, IoT, Embedded, Mechanical & Web Development for BE, ME, MCA, BSc and Diploma students.`,
  "telephone": `+91${PHONE_GEN}`,
  "email": EMAIL,
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "openingHours": "Mo-Sa 09:00-20:00",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "11.0168", "longitude": "76.9558" },
  "hasMap": "https://maps.google.com/?q=CODEX+PROJECT+Gandhipuram+Coimbatore",
  "sameAs": [
    "https://www.instagram.com/codexproject",
    "https://www.facebook.com/codexproject",
    "https://g.page/r/CUj6SjsY-0qgEAE",
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1", "ratingCount": "320" },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "State", "name": "Tamil Nadu" },
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "11.0168", "longitude": "76.9558" },
    "geoRadius": "30000",
  },
};

const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": `CODEX PROJECT Blog – Best Final Year Project Center Coimbatore ${YEAR}`,
  "url": "https://www.codexproject.in/blog",
  "description": `CODEX PROJECT blog – Coimbatore's most detailed resource for IEEE ${YEAR} final year project ideas, technology guides, and expert tips for Mechanical, IoT, Embedded, Software, AI/ML engineering students.`,
  "publisher": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
    "logo": { "@type": "ImageObject", "url": "https://www.codexproject.in/logo512.png" },
  },
  "inLanguage": "en-IN",
  "about": {
    "@type": "Thing",
    "name": `Final Year Projects Coimbatore ${YEAR}`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.codexproject.in/blog" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `What are the best final year project ideas for CSE students in Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `The best final year project ideas for CSE students in Coimbatore ${YEAR} include AI Chatbot using NLP, Face Recognition Attendance System, Deep Learning medical image analysis, MERN Stack e-commerce platforms, Flutter mobile apps, and YOLO v8 object detection. CODEX PROJECT at Gandhipuram, Coimbatore provides all these with IEEE documentation and viva support. Call ${PHONE_SW}.` }
    },
    {
      "@type": "Question",
      "name": "Which IoT projects are best for ECE students in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": `Best IoT projects for ECE students in Coimbatore ${YEAR} include Smart Irrigation using NodeMCU, IoT Health Monitoring with Raspberry Pi, Home Automation with ESP32, Smart Energy Meter, and AWS IoT cloud projects. CODEX PROJECT provides all these with real hardware, cloud integration, and complete IEEE documentation. Call ${PHONE_HW}.` }
    },
    {
      "@type": "Question",
      "name": `What are the trending embedded system project ideas for ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `Trending embedded system project ideas for ${YEAR} include ARM Cortex motor control, FPGA-based VLSI designs, Raspberry Pi AI projects, GPS vehicle tracking with GSM, and RFID access control. CODEX PROJECT Coimbatore provides all these with Keil, Proteus simulation, and real hardware.` }
    },
    {
      "@type": "Question",
      "name": "How to choose the best final year project in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": `To choose the best final year project in Coimbatore: (1) Pick a domain matching your branch (CSE→AI/ML, ECE→IoT/Embedded, Mech→CAD/Robotics), (2) Select IEEE ${YEAR} base paper topics, (3) Check your college's hardware/software availability, (4) Visit CODEX PROJECT at Balaji Complex, Gandhipuram for a free expert consultation. Call ${PHONE_GEN}.` }
    },
    {
      "@type": "Question",
      "name": "What is the cost of final year projects at CODEX PROJECT Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers the most affordable final year project pricing in Coimbatore. Software projects, IoT, Embedded, and Mechanical projects all have different price ranges. Call ${PHONE_GEN} or visit us at ${ADDRESS} for a free quote. EMI options available.` }
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT provide internship certificate with final year project?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT Coimbatore provides internship certificate along with your final year project. Every project package includes IEEE documentation, source code, project report, PPT, viva preparation, and internship certificate. Call ${PHONE_GEN} for details.` }
    },
    {
      "@type": "Question",
      "name": "Which colleges in Coimbatore does CODEX PROJECT serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT serves final year engineering students from all Coimbatore colleges including PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, RVS, SNS, Rathinam, KGISL, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, and all polytechnic and arts & science colleges in Coimbatore, Tirupur, Erode, and Salem districts." }
    },
    {
      "@type": "Question",
      "name": "What is the delivery time for final year projects at CODEX PROJECT?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT Coimbatore delivers most software and AI projects within 3-7 working days. IoT and embedded projects take 7-14 days depending on hardware complexity. Mechanical fabrication projects are delivered in 14-21 days. Express delivery is available. Call ${PHONE_GEN} for timeline confirmation.` }
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// BLOG DATA — 12 posts, rich content, 2026-27 updated, all Google signals
// ═══════════════════════════════════════════════════════════════
const blogs = [
  {
    slug: `embedded-system-projects-30-percent-offer-coimbatore-${YEAR_SHORT}`,
    category: "Embedded", categoryColor: "#1a237e", categoryBg: "#e8eaf6",
    date: `July ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-07-15`, readTime: "8 min read",
    title: `Embedded System Final Year Projects Coimbatore ${YEAR} – Flat 30% Off Offer`,
    h1: `Embedded System Final Year Projects in Coimbatore ${YEAR} – Limited Period 30% Off`,
    metaDesc: `Get flat 30% off on Embedded System final year projects in Coimbatore ${YEAR} — 8051, ARM, PIC, FPGA with Keil, Proteus simulation, real hardware and IEEE documentation. Limited period offer.`,
    intro: `Great news for ECE, EEE, and EIE final year students in Coimbatore! CODEX PROJECT — the best embedded project center in Coimbatore — is offering a limited period flat 30% discount on all Embedded System final year project packages for ${YEAR}. Get real hardware, complete IEEE documentation, and expert guidance at an unbeatable price. Call ${PHONE_HW} now before the offer ends.`,
    body: `This special ${YEAR} offer applies across all embedded domains at CODEX PROJECT Coimbatore — 8051 (AT89C51), ARM Cortex M3/M4 (STM32, LPC2148), PIC (16F/18F series), AVR (ATmega328), and FPGA (Xilinx Vivado, Verilog/VHDL) projects. The 30% off covers hardware components, PCB assembly, Keil/MPLAB programming support, Proteus simulation, IEEE ${YEAR} documentation, viva preparation, and internship certificate — everything included at the discounted rate. This offer is valid for a limited period only and is available to students from all Coimbatore engineering colleges. Visit our Gandhipuram center or call to lock in your project slot before the offer closes.`,
    points: [`Flat 30% off on all Embedded System packages – ${YEAR}`, "8051, ARM Cortex, PIC, AVR & FPGA projects included", "Real hardware + Keil/MPLAB + Proteus simulation", "Complete IEEE documentation at discounted price", "Free viva preparation and internship certificate", "Offer valid for limited period only", "Applicable for ECE, EEE, EIE & Diploma students", "Early booking recommended – limited slots"],
    tags: [`Embedded Projects Offer Coimbatore ${YEAR}`, "30% Off Embedded Projects", "8051 ARM PIC FPGA Discount", "Embedded Systems Coimbatore", "Limited Period Offer"],
    highlights: ["30% Off", "8051 Projects", "ARM Cortex", "FPGA Design", "Limited Offer"],
    featured: true,
    colleges: "CIT, Dr NGP, Rathinam, Sri Eshwar, Bannari Amman",
  },
  {
    slug: `ai-ml-final-year-projects-30-percent-offer-coimbatore-${YEAR_SHORT}`,
    category: "AI & ML", categoryColor: "#6a1b9a", categoryBg: "#f3e5f5",
    date: `July ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-07-18`, readTime: "9 min read",
    title: `AI & Machine Learning Final Year Projects Coimbatore ${YEAR} – Flat 30% Off`,
    h1: `AI & Machine Learning Final Year Projects in Coimbatore ${YEAR} – Flat 30% Off Offer`,
    metaDesc: `Flat 30% off on AI & Machine Learning final year projects in Coimbatore ${YEAR} — Deep Learning, NLP, Computer Vision with TensorFlow & PyTorch. Limited period discount at CODEX PROJECT.`,
    intro: `CSE, IT, MCA and BSc students in Coimbatore — this is the best time to book your AI & Machine Learning final year project! CODEX PROJECT is offering a limited period flat 30% discount on all AI/ML project packages for ${YEAR}, including complete source code, trained models, and IEEE documentation. Call ${PHONE_SW} to grab this offer before slots fill up.`,
    body: `The ${YEAR} 30% off offer at CODEX PROJECT Coimbatore covers our full AI/ML project range — Deep Learning (CNN, RNN, LSTM, Transformers), Natural Language Processing, Computer Vision (OpenCV, YOLO), and Generative AI (GANs) built using TensorFlow, PyTorch, Keras and Hugging Face. The discounted package still includes trained model files, accuracy graphs, confusion matrices, real-time demo videos, IEEE ${YEAR} documentation, and viva preparation — no compromise on quality, only on price. This limited period offer is open to students from all Coimbatore colleges and is available on a first-come, first-served basis, so early booking at our Gandhipuram center is recommended.`,
    points: [`Flat 30% off on all AI & ML project packages – ${YEAR}`, "Deep Learning, NLP, Computer Vision & Generative AI covered", "TensorFlow, PyTorch, Keras, Hugging Face support", "Trained models + accuracy reports at discounted price", "Complete IEEE documentation and viva preparation included", "Offer valid for limited period, first-come first-served", "Applicable for CSE, IT, MCA & BSc students", "Free consultation before booking"],
    tags: [`AI ML Projects Offer Coimbatore ${YEAR}`, "30% Off AI Projects", "Deep Learning NLP Discount", "Machine Learning Coimbatore", "Limited Period Offer"],
    highlights: ["30% Off", "Deep Learning", "NLP Projects", "Computer Vision", "Limited Offer"],
    featured: true,
    colleges: "PSG Tech, Sri Krishna, Karpagam, KGISL, SNS, KPR",
  },
  {
    slug: `best-mechanical-project-ideas-coimbatore-${YEAR_SHORT}`,
    category: "Mechanical", categoryColor: "#2e7d32", categoryBg: "#e8f5e9",
    date: `June ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-06-01`, readTime: "8 min read",
    title: `Best Mechanical Final Year Project Ideas in Coimbatore ${YEAR}`,
    h1: `Best Mechanical Final Year Project Ideas in Coimbatore ${YEAR}`,
    metaDesc: `Top 20+ mechanical final year project ideas with fabrication, CAD/CAM, robotics for BE Mechanical, ME & Diploma students in Coimbatore ${YEAR}. Real working models with affordable pricing.`,
    intro: `Are you a BE Mechanical, ME, or Diploma student in Coimbatore searching for the best final year project ideas for ${YEAR}? CODEX PROJECT at Gandhipuram, Coimbatore is the top-rated mechanical project center that has guided 500+ students to successfully complete their final year projects with real working models, complete IEEE documentation, and affordable pricing.`,
    body: `Mechanical engineering final year projects in Coimbatore span fabrication, CAD/CAM design, robotics, automation, renewable energy, and automobile engineering. At CODEX PROJECT Coimbatore, our experienced mechanical engineers guide you through every stage — from topic selection to final presentation. We use SolidWorks, ANSYS, CATIA, and AutoCAD for design projects. Our fabrication workshop handles welding, CNC machining, and 3D printing. Whether you need a simple conveyor belt automation project or a complex robotic arm with vision sensing, CODEX PROJECT delivers quality within your budget. We serve students from PSG Tech, CIT, KPR, KGISL, RVS, Karpagam and all Coimbatore engineering colleges near Peelamedu, Gandhipuram, Saravanampatti, and RS Puram.`,
    points: ["Hydraulic & Pneumatic Systems – real working models", "Robotic Arm with sensors and controllers", "Solar Powered Electric Vehicle", "Mini CNC Machine with Arduino control", "CAD/ANSYS Simulation Projects", "Conveyor Belt Automation", "Agricultural spraying robot", "Electromagnetic Braking System", "Automatic gear shifting mechanism", "Wind energy harvesting mini project"],
    tags: [`Fabrication Projects Coimbatore ${YEAR}`, "CAD/CAM Projects", "Robotics Coimbatore", "Automation Projects", "Mechanical BE ME Diploma"],
    highlights: ["Hydraulic Systems", "Pneumatic Robots", "Solar Vehicles", "Mini CNC", "ANSYS Projects"],
    featured: true,
    colleges: "PSG Tech, CIT, KPR, RVS, Karpagam, KGISL",
  },
  {
    slug: `top-iot-projects-final-year-students-coimbatore-${YEAR_SHORT}`,
    category: "IoT", categoryColor: "#00695c", categoryBg: "#e0f7fa",
    date: `June ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-06-05`, readTime: "9 min read",
    title: `Top IoT Final Year Project Ideas for ECE Students – Coimbatore ${YEAR}`,
    h1: `Top IoT Final Year Projects for ECE Students in Coimbatore ${YEAR}`,
    metaDesc: `20+ IoT project ideas using Arduino, NodeMCU, ESP32, Raspberry Pi with AWS IoT & Firebase for ECE, EEE & CSE students in Coimbatore ${YEAR}. Real hardware + cloud integration.`,
    intro: `Internet of Things (IoT) is the hottest domain for final year projects in ${YEAR}. If you are an ECE, EEE, or CSE student in Coimbatore looking for real-time IoT final year project ideas, CODEX PROJECT is the best IoT project center in Coimbatore. Located at Balaji Complex, Gandhipuram, we provide complete IoT projects with real hardware, cloud dashboards, mobile app control and IEEE ${YEAR} documentation.`,
    body: `IoT final year projects combine hardware (microcontrollers and sensors) with cloud platforms and mobile apps. At CODEX PROJECT Coimbatore, we support Arduino UNO, NodeMCU ESP8266, ESP32, Raspberry Pi 4, and STM32. Cloud platforms: AWS IoT Core, Google Firebase, ThingSpeak, Blynk, and Azure IoT Hub. Our IoT projects come with real sensor components, breadboard/PCB circuit assembly, firmware coding, cloud dashboard setup, and mobile app control. Every project includes full IEEE ${YEAR} documentation, circuit diagram, code explanation, and dedicated viva preparation.`,
    points: ["Smart Irrigation System using NodeMCU & Firebase", "IoT Health Monitoring – heart rate, SpO2 sensors", "Home Automation with ESP32 & Blynk app", "Smart Energy Meter with cloud dashboard", "Air Quality Monitoring – MQ sensors + ThingSpeak", "Industrial IoT – SCADA integration", "GPS Vehicle Tracking with GSM", "Edge AI Object Detection using Raspberry Pi", "Smart Parking System with RFID", "Flood Detection & Alert System"],
    tags: [`IoT Projects Coimbatore ${YEAR}`, "Arduino Projects", "NodeMCU ESP32", "Raspberry Pi", "Cloud IoT Firebase AWS"],
    highlights: ["Smart Agriculture", "Health Monitoring", "Home Automation", "Smart City", "Edge AI IoT"],
    featured: true,
    colleges: "CIT, Hindusthan, Sri Krishna, KMEA, SNS",
  },
  {
    slug: `best-embedded-system-projects-coimbatore-${YEAR_SHORT}`,
    category: "Embedded", categoryColor: "#1a237e", categoryBg: "#e8eaf6",
    date: `May ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-05-20`, readTime: "7 min read",
    title: `Best Embedded System Project Ideas in Coimbatore ${YEAR} – 8051, ARM, PIC`,
    h1: `Best Embedded System Final Year Projects in Coimbatore ${YEAR}`,
    metaDesc: `8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi embedded system project ideas for BE ECE, EEE & Diploma students in Coimbatore ${YEAR} with Keil IDE and Proteus simulation.`,
    intro: `Embedded systems projects are a cornerstone of final year engineering education for ECE, EEE, and EIE students. At CODEX PROJECT — the best embedded project center in Coimbatore — we offer complete embedded system project solutions with real hardware, Keil/MPLAB programming, Proteus simulation, and IEEE ${YEAR} documentation.`,
    body: `CODEX PROJECT Coimbatore supports all major microcontroller platforms: 8051 (AT89C51), ARM Cortex M3/M4 (STM32, LPC2148), PIC (16F/18F series), AVR (ATmega328), Arduino, and Raspberry Pi. We also support FPGA projects using Xilinx Vivado and Verilog/VHDL. Our lab is equipped with oscilloscopes, function generators, PCB etching equipment, and all major sensor modules. 200+ embedded projects delivered for ECE, EEE, EIE, and Diploma students from all Coimbatore colleges.`,
    points: ["8051 Smart Traffic Light Controller", "ARM Cortex Motor Speed Controller", "PIC-based Digital Energy Meter", "FPGA ALU Design in Verilog", "Raspberry Pi Face Detection System", "Arduino RFID Access Control", "GSM GPS Vehicle Tracking – ARM", "Voice Controlled Home Automation", "Contactless IR Temperature Monitoring", "Smart Helmet with accident detection"],
    tags: [`Embedded Projects Coimbatore ${YEAR}`, "8051 Projects", "ARM Cortex", "PIC Projects", "FPGA VLSI Coimbatore", "Keil Proteus"],
    highlights: ["Traffic Control", "Motor Speed Controller", "RFID Systems", "VLSI Design", "GPS Tracking"],
    featured: false,
    colleges: "CIT, Dr NGP, Rathinam, Sri Eshwar, Bannari Amman",
  },
  {
    slug: `top-python-ai-ml-project-ideas-coimbatore-${YEAR_SHORT}`,
    category: "AI & ML", categoryColor: "#6a1b9a", categoryBg: "#f3e5f5",
    date: `May ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-05-14`, readTime: "10 min read",
    title: `Top Python AI & Machine Learning Final Year Project Ideas – Coimbatore ${YEAR}`,
    h1: `Best Python AI and Machine Learning Final Year Projects in Coimbatore ${YEAR}`,
    metaDesc: `IEEE ${YEAR} Python AI & ML project ideas including Deep Learning, NLP, Computer Vision, Generative AI for BE CSE, IT, MCA & BSc students in Coimbatore with TensorFlow & PyTorch.`,
    intro: `Artificial Intelligence and Machine Learning are the most sought-after domains for final year projects in ${YEAR}. CODEX PROJECT is the best AI and Machine Learning project center in Coimbatore, offering IEEE ${YEAR} certified Python AI projects with complete source code, model training, accuracy reports, and full documentation. Call us at ${PHONE_SW} for Software & AI project enquiries.`,
    body: `At CODEX PROJECT Coimbatore, we specialize in Deep Learning (CNNs, RNNs, LSTMs, Transformers), Natural Language Processing (NLP), Computer Vision (OpenCV, YOLO), Generative AI (GANs, Diffusion Models), and Data Science projects. Frameworks: TensorFlow 2.x, PyTorch, Keras, Scikit-learn, and Hugging Face Transformers. Projects come with trained model files, accuracy graphs, confusion matrices, and real-time demo videos. IEEE paper writing and publication support included. We also provide dataset collection, preprocessing, GPU model training, and deployment on Streamlit, HuggingFace Spaces, and AWS.`,
    points: ["Face Recognition Attendance – CNN + OpenCV", "Sentiment Analysis – BERT/Twitter dataset", "Crop Disease Detection – ResNet transfer learning", "Object Detection – YOLO v8 real-time", "Medical Image Segmentation – U-Net", "Stock Price Prediction – LSTM", "AI Chatbot – GPT API + NLP", "Fake News Detection – NLP classifier", "Brain Tumor Detection – CNN MRI", "Drowsiness Detection for Driver Safety"],
    tags: [`Python Projects Coimbatore ${YEAR}`, "AI Projects Coimbatore", "Machine Learning", "Deep Learning NLP", "TensorFlow PyTorch"],
    highlights: ["Face Recognition", "Sentiment Analysis", "Medical AI", "YOLO Detection", "Text Generation"],
    featured: true,
    colleges: "PSG Tech, Sri Krishna, Karpagam, KGISL, SNS, KPR",
  },
  {
    slug: `cse-final-year-project-ideas-coimbatore-${YEAR_SHORT}`,
    category: "CSE", categoryColor: "#0277BD", categoryBg: "#E1F5FE",
    date: `April ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-04-15`, readTime: "10 min read",
    title: `Best CSE Final Year Project Ideas in Coimbatore ${YEAR} – 50+ Topics`,
    h1: `Top 50 CSE Final Year Project Ideas for BE & BTech Students in Coimbatore ${YEAR}`,
    metaDesc: `50+ IEEE ${YEAR} CSE final year project ideas in AI, ML, Web Dev, Cybersecurity, Blockchain & Cloud for BE CSE, IT, MCA students in Coimbatore. Source code + documentation included.`,
    intro: `Are you a BE CSE or BTech IT student in Coimbatore looking for the best final year project ideas for ${YEAR}? CODEX PROJECT — the best CSE project center in Coimbatore — offers 50+ IEEE ${YEAR} certified project titles in AI/ML, Web Development, Cybersecurity, Blockchain, and Cloud Computing with complete source code, documentation, and viva support. Call ${PHONE_SW}.`,
    body: `CSE final year projects in ${YEAR} are heavily dominated by AI/ML, full-stack web development, and cybersecurity domains. At CODEX PROJECT Coimbatore, we guide BE CSE, BTech IT, MCA, and BSc CS students from all Coimbatore colleges. Our CSE projects use Python, Java, React, Node.js, Django, Spring Boot, Flutter, and more. Every CSE project includes: complete source code with comments, UML diagrams, ER diagram, test cases, IEEE format project report, PPT, and viva question preparation. We have successfully delivered 300+ CSE projects for students from PSG Tech, CIT, KPR, KGISL, Karpagam, SNS, Sri Krishna, and 20+ other Coimbatore colleges.`,
    points: ["AI-based Resume Screening System", "Blockchain Certificate Verification", "Cybersecurity Intrusion Detection – ML", "Cloud-based Hospital Management System", "MERN Stack E-Commerce with AI Recommendations", "Real-time Chat App – Socket.io + Node.js", "NFT Marketplace – Ethereum + React", "Federated Learning for Privacy-Preserved ML", "AR-based Campus Navigation App", "Smart Contract Voting – Solidity"],
    tags: [`CSE Projects Coimbatore ${YEAR}`, "BTech CSE Projects", "IT Final Year Projects", `IEEE CSE ${YEAR}`, "Blockchain Cybersecurity"],
    highlights: ["AI Resume Screening", "Blockchain Projects", "Cloud Apps", "Cybersecurity", "AR Projects"],
    featured: true,
    colleges: "PSG Tech, CIT, KPR, KGISL, Karpagam, SNS, Sri Krishna",
  },
  {
    slug: `ece-final-year-project-ideas-coimbatore-${YEAR_SHORT}`,
    category: "ECE", categoryColor: "#BF360C", categoryBg: "#FBE9E7",
    date: `April ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-04-10`, readTime: "9 min read",
    title: `Best ECE Final Year Project Ideas in Coimbatore ${YEAR} – IoT, Embedded & VLSI`,
    h1: `Top ECE Final Year Project Ideas in Coimbatore ${YEAR} – IoT, Embedded, VLSI`,
    metaDesc: `IEEE ${YEAR} ECE final year projects in IoT, Embedded Systems, VLSI, Signal Processing & Wireless for BE ECE, EEE, EIE students in Coimbatore with hardware + documentation support.`,
    intro: `Searching for the best ECE final year project in Coimbatore for ${YEAR}? CODEX PROJECT is the top ECE project center in Coimbatore, specializing in IoT, Embedded Systems, VLSI/FPGA, Signal Processing, and Power Electronics projects with real hardware and IEEE ${YEAR} documentation. Call ${PHONE_HW}.`,
    body: `ECE final year projects require both theoretical knowledge and practical hardware skills. At CODEX PROJECT Coimbatore, we support all ECE domains: IoT (Arduino, ESP32, Raspberry Pi), Embedded (8051, ARM, PIC), VLSI (FPGA, Verilog, VHDL), Signal Processing (MATLAB, LabVIEW), and Power Electronics (converters, inverters). Our ECE lab has oscilloscopes, function generators, DSO, power supplies, soldering stations, and all necessary component inventory. We serve ECE, EEE, EIE, and E&I students from CIT, Hindusthan, Sri Krishna, Rathinam, Dr NGP, Sri Eshwar, Bannari Amman, and all Coimbatore ECE colleges.`,
    points: ["FPGA-based Image Processing System", "MIMO Antenna Design – CST/HFSS simulation", "Smart Grid Monitoring – IoT + Power Electronics", "BLDC Motor Control – ARM + MATLAB", "LoRa Long Range IoT Communication", "5G NR Beamforming Simulation", "RADAR System Design – MATLAB", "Wearable ECG Monitor – Arduino", "Wireless EV Charging System", "Drone Flight Controller – Embedded + PID"],
    tags: [`ECE Projects Coimbatore ${YEAR}`, "Embedded Systems ECE", "VLSI FPGA Projects", `IoT ECE ${YEAR}`, "Signal Processing MATLAB"],
    highlights: ["FPGA Projects", "MIMO Antenna", "Smart Grid", "BLDC Control", "Drone Projects"],
    featured: true,
    colleges: "CIT, Hindusthan, Sri Krishna, Rathinam, Dr NGP, Sri Eshwar",
  },
  {
    slug: `mca-bsc-final-year-projects-coimbatore-${YEAR_SHORT}`,
    category: "MCA/BSc", categoryColor: "#4A148C", categoryBg: "#EDE7F6",
    date: `March ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-03-20`, readTime: "7 min read",
    title: `Best MCA & BSc Final Year Project Ideas in Coimbatore ${YEAR}`,
    h1: `Top MCA and BSc CS Final Year Projects in Coimbatore ${YEAR}`,
    metaDesc: `IEEE ${YEAR} MCA and BSc CS final year project ideas in Python, Java, PHP, MERN Stack for MCA, BSc CS, BCA, MSc CS students in Coimbatore with source code and documentation.`,
    intro: `MCA, BSc CS, BCA, and MSc CS students in Coimbatore — CODEX PROJECT is your best choice for final year projects in ${YEAR}. We offer Python, Java, MERN Stack, PHP, and Flutter projects with complete IEEE documentation, source code, and viva support at student-friendly prices. Call ${PHONE_SW}.`,
    body: `MCA and BSc CS final year projects focus on software development, web applications, mobile apps, and database management. CODEX PROJECT Coimbatore provides project solutions in Python (Django, Flask), Java (Spring Boot, JSP), PHP (Laravel, CodeIgniter), MERN Stack (MongoDB, Express, React, Node), Flutter, and Android. Projects include complete database design, ER diagram, DFD, system flowchart, test cases, and IEEE format report. We serve MCA and BSc CS students from Karpagam, Rathinam, SNS, KGISL, KMEA, Sri Krishna, and all arts & science colleges in Coimbatore offering MCA and BSc CS programs.`,
    points: ["Library Management System – Django + MySQL", "Online Examination System – PHP + Laravel", "Blood Bank Management – MERN Stack", "Crime Prediction System – Python ML", "Travel Booking App – Flutter + Firebase", "Inventory Management – Java Spring Boot", "Student Performance Analytics – Python", "Telemedicine App – React + Node.js", "Agriculture Price Prediction – ML", "College ERP System – PHP + MySQL"],
    tags: [`MCA Projects Coimbatore ${YEAR}`, "BSc CS Final Year Projects", "BCA Projects Coimbatore", `MSc CS Projects ${YEAR}`, "PHP Python Java Projects"],
    highlights: ["Python Projects", "Java Projects", "PHP Projects", "Flutter Apps", "ML Projects"],
    featured: false,
    colleges: "Karpagam, Rathinam, SNS, KGISL, KMEA, Sri Krishna",
  },
  {
    slug: `low-cost-final-year-projects-coimbatore-${YEAR_SHORT}`,
    category: "Guide", categoryColor: "#e65100", categoryBg: "#fff3e0",
    date: `March ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-03-10`, readTime: "6 min read",
    title: `Low Cost Final Year Projects in Coimbatore – Complete Pricing Guide ${YEAR}`,
    h1: `Most Affordable Final Year Projects in Coimbatore – Pricing Guide ${YEAR}`,
    metaDesc: `Complete guide to affordable final year project cost in Coimbatore ${YEAR} for Mechanical, IoT, Embedded & Software domains. Compare prices, understand inclusions, find the best budget project center.`,
    intro: `One of the biggest concerns for engineering students in Coimbatore is the cost of final year projects. CODEX PROJECT is the most affordable final year project center in Coimbatore in ${YEAR}, offering quality projects at student-friendly prices with zero hidden charges. All packages include hardware/software, IEEE documentation, viva support, and internship certificate.`,
    body: `Understanding final year project pricing in Coimbatore is important for students. At CODEX PROJECT, we offer transparent pricing across all domains. Software projects (Python, AI, MERN, Java) cost less than hardware projects since no physical components are needed. IoT and Embedded projects involve hardware components, PCB assembly, and sensor modules. All CODEX PROJECT packages include: (1) Complete source code or hardware circuit, (2) IEEE format project report, (3) Synopsis and abstract, (4) PPT for review presentations, (5) Viva preparation coaching, (6) Internship certificate, and (7) Unlimited revisions until your college accepts the project. EMI/installment payment available. Call ${PHONE_GEN} for a free quote.`,
    points: ["Software & AI projects – most affordable", "IoT projects – includes hardware + cloud setup", "Embedded projects – includes PCB + microcontroller", "Mechanical projects – includes fabrication + materials", "All packages include IEEE documentation", "No hidden charges – transparent pricing", "EMI/installment payment available", "Free consultation before any commitment", "Internship certificate included", "Unlimited revisions guaranteed"],
    tags: [`Low Cost Projects Coimbatore ${YEAR}`, "Affordable Final Year Projects", "Project Pricing Coimbatore", "Budget Projects", "EMI Projects Coimbatore"],
    highlights: ["Software Projects", "Embedded Projects", "IoT Projects", "Mechanical Projects", "All Domains"],
    featured: false,
    colleges: "All Coimbatore Engineering Colleges",
  },
  {
    slug: `mern-stack-react-nodejs-final-year-projects-coimbatore-${YEAR_SHORT}`,
    category: "Web Dev", categoryColor: "#1565c0", categoryBg: "#e3f2fd",
    date: `February ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-02-20`, readTime: "8 min read",
    title: `Best MERN Stack & React Final Year Project Ideas – Coimbatore ${YEAR}`,
    h1: `Best MERN Stack, React & Full-Stack Web Development Projects in Coimbatore ${YEAR}`,
    metaDesc: `Top MERN Stack, React.js, Node.js full-stack web development final year projects for BE CSE, IT & MCA students in Coimbatore ${YEAR} with live deployment and IEEE documentation.`,
    intro: `Full-stack web development projects using MERN Stack (MongoDB, Express.js, React.js, Node.js) are among the most popular final year project choices for CSE and IT students in Coimbatore. CODEX PROJECT provides the best MERN Stack final year projects in ${YEAR} with live deployment, REST API, JWT authentication, and complete IEEE documentation. Call ${PHONE_SW}.`,
    body: `MERN Stack projects involve building complete web applications with React.js frontend, Node.js/Express.js backend, and MongoDB database. CODEX PROJECT Coimbatore develops production-ready MERN applications with user authentication (JWT/OAuth), real-time updates (Socket.io), file uploads (Cloudinary/AWS S3), payment gateway integration (Razorpay), and live deployment on Vercel or Netlify. We also support Django + React, Laravel + Vue.js, and Spring Boot + Angular combinations. Every web project includes complete source code, system architecture diagram, ER diagram, use case diagram, test cases, and IEEE ${YEAR} format report.`,
    points: ["E-Commerce Platform – MERN + Razorpay", "Social Media App – React + Socket.io", "Hospital Management System – Spring Boot", "Job Portal – Next.js + Node.js", "Online Learning Platform – React + Django", "Real Estate Portal – MERN + Google Maps", "Blockchain Voting System – Solidity + React", "Food Delivery App – MERN + Razorpay", "Telemedicine Portal – React + Node.js", "AI-powered News Aggregator – MERN + NLP"],
    tags: [`MERN Stack Projects Coimbatore ${YEAR}`, "React Projects", "Node.js Projects", "Full Stack Coimbatore", "Web Development Final Year"],
    highlights: ["E-Commerce Portal", "Social Media App", "Job Board", "Learning Platform", "Real Estate App"],
    featured: false,
    colleges: "PSG Tech, CIT, KGISL, Sri Krishna, Karpagam, Rathinam",
  },
  {
    slug: `ieee-${YEAR_SHORT}-project-ideas-engineering-students-coimbatore`,
    category: "IEEE", categoryColor: "#37474f", categoryBg: "#eceff1",
    date: `February ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-02-10`, readTime: "10 min read",
    title: `IEEE ${YEAR} Final Year Project Ideas for Engineering Students – Coimbatore`,
    h1: `IEEE ${YEAR} Final Year Project Ideas for All Engineering Branches – Coimbatore`,
    metaDesc: `Complete IEEE ${YEAR} base paper project ideas for CSE, ECE, EEE, Mechanical, IT & MCA in Coimbatore. AI, IoT, Embedded, Mechanical & Web domains with publication support.`,
    intro: `IEEE (Institute of Electrical and Electronics Engineers) base paper projects are the gold standard for final year engineering projects in Coimbatore. CODEX PROJECT provides IEEE ${YEAR} certified final year projects for all engineering branches — from AI and IoT to Mechanical and Web Development — with base paper implementation, paper writing, and publication support. Call ${PHONE_GEN}.`,
    body: `IEEE final year projects are based on recent research papers published in IEEE Xplore, IEEE Transactions, and IEEE Conference proceedings. At CODEX PROJECT Coimbatore, we maintain a database of 600+ IEEE ${YEAR} base papers across all engineering domains. Our process: (1) Select relevant IEEE paper matching your branch and college requirements, (2) Understand the problem statement, (3) Implement the complete system with improvements, (4) Compare results with the original paper, (5) Write the project report and prepare for viva. We also support IEEE paper publication in IRJET, IJRASET, IJERT journals.`,
    points: [`IEEE AI/ML papers – ${YEAR} image processing, NLP, prediction`, `IEEE IoT papers – ${YEAR} smart systems, industrial monitoring`, `IEEE Embedded papers – ${YEAR} power electronics, control systems`, `IEEE Mechanical papers – ${YEAR} manufacturing, automation`, "IEEE Web papers – security, cloud computing, blockchain", "Complete base paper + implementation + report", "IEEE publication support (IRJET, IJRASET, IJERT)", "Comparison of results with original paper"],
    tags: [`IEEE Projects Coimbatore ${YEAR}`, `IEEE ${YEAR} Base Papers`, "IEEE Final Year Projects", "All Branches Coimbatore", "IEEE Publication Support"],
    highlights: ["AI/ML Papers", "IoT Papers", "Embedded Papers", "Web Papers", "Mechanical Papers"],
    featured: true,
    colleges: "All Engineering Colleges Coimbatore",
  },
  {
    slug: `flutter-android-mobile-app-final-year-projects-coimbatore-${YEAR_SHORT}`,
    category: "Mobile App", categoryColor: "#00838f", categoryBg: "#e0f7fa",
    date: `January ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-01-20`, readTime: "7 min read",
    title: `Best Flutter & Android Mobile App Final Year Projects – Coimbatore ${YEAR}`,
    h1: `Best Flutter and Android Mobile App Final Year Projects in Coimbatore ${YEAR}`,
    metaDesc: `Flutter, React Native & Android Java/Kotlin mobile app final year projects with Firebase, GPS, REST API for BE CSE, IT & MCA students in Coimbatore ${YEAR} with Play Store deployment.`,
    intro: `Mobile app development projects are increasingly popular among CSE, IT, and MCA final year students in Coimbatore. CODEX PROJECT provides complete Flutter, React Native, and Android final year projects in ${YEAR} with Firebase integration, GPS functionality, REST API connection, and Play Store deployment support. Call ${PHONE_SW}.`,
    body: `At CODEX PROJECT Coimbatore, we primarily work with Flutter (cross-platform), Android Studio (Java/Kotlin), and React Native. Flutter has become the most popular choice because one codebase runs on both Android and iOS. We integrate Firebase for real-time database, authentication, push notifications, and cloud storage. Our mobile projects come with APK files, Play Store submission guidance, complete source code, UI/UX documentation, and IEEE ${YEAR} project report. We also support wearable app development (Wear OS) and IoT-connected mobile apps that control Arduino/Raspberry Pi hardware.`,
    points: ["Food Delivery App – Flutter + Firebase + Razorpay", "Telemedicine Consultation App – React Native", "Ride Sharing App – Flutter + Google Maps", "Smart Campus App – Android + QR attendance", "Health Tracker – Flutter + Wear OS", "AR Try-On App – Android + ARCore", "IoT Controller App – Flutter + MQTT", "E-Learning App – Flutter + Firebase", "Grocery Delivery App – React Native", "Bus Tracking App – Flutter + GPS"],
    tags: [`Flutter Projects Coimbatore ${YEAR}`, "Android Projects Coimbatore", "Mobile App Final Year", "React Native Coimbatore", "iOS Android Projects"],
    highlights: ["Food Delivery", "Telemedicine", "Ride Sharing", "Smart Campus", "AR Navigation"],
    featured: false,
    colleges: "PSG Tech, KGISL, Karpagam, Sri Krishna, SNS",
  },
  {
    slug: `how-to-select-final-year-project-coimbatore-guide-${YEAR_SHORT}`,
    category: "Guide", categoryColor: "#4527a0", categoryBg: "#ede7f6",
    date: `January ${YEAR_SHORT}`, dateISO: `${YEAR_SHORT}-01-10`, readTime: "8 min read",
    title: `How to Select the Best Final Year Project in Coimbatore – Expert Guide ${YEAR}`,
    h1: `How to Choose the Best Final Year Project in Coimbatore – Step-by-Step Guide ${YEAR}`,
    metaDesc: `Expert guide for engineering students on choosing the best final year project in Coimbatore ${YEAR} – domain selection, IEEE paper finding, budget planning, and working with the right project center.`,
    intro: `Choosing the right final year project is one of the most important decisions in your engineering journey. This expert guide from CODEX PROJECT — the best final year project center in Coimbatore — walks you through the complete process of selecting and completing your final year project for ${YEAR}. Free consultation: ${PHONE_GEN}.`,
    body: `Step 1 – Know your domain: CSE/IT students → AI/ML, Web Development, Mobile Apps. ECE/EEE students → IoT, Embedded Systems, Signal Processing. Mechanical students → CAD/Fabrication, Automation. Step 2 – Check college requirements: Some colleges require IEEE base papers, others accept general projects. Step 3 – Set your budget: Software projects cost less. Hardware (IoT/Embedded/Mechanical) costs more. CODEX PROJECT offers flexible EMI options. Step 4 – Choose a trending topic: AI/ML, IoT, Blockchain, AR/VR are hot topics in ${YEAR}. Step 5 – Visit CODEX PROJECT: Come to Balaji Complex, Gandhipuram, Coimbatore for a free consultation. We help you select the perfect project based on your branch, budget, and college requirements — no pressure to commit.`,
    points: ["Match project to your engineering branch", `Check if IEEE ${YEAR} base paper is required`, "Understand hardware vs software cost difference", "Pick trending technologies for better placement value", "Visit CODEX PROJECT for free consultation", "Ask about documentation and viva support upfront", "Check project delivery timeline vs your deadlines", "Look for centers with working model demos", "Verify internship certificate is included", "Confirm unlimited revision policy"],
    tags: [`How to Select Final Year Project ${YEAR}`, "Project Selection Guide", "Final Year Project Tips", "Best Project Center Coimbatore", "IEEE Project Guide"],
    highlights: ["Domain Selection", "Topic Finding", "Budget Planning", "College Requirements", "Viva Prep"],
    featured: false,
    colleges: "All Coimbatore Engineering Colleges",
  },
];

const categories = ["All", "AI & ML", "CSE", "ECE", "IoT", "Embedded", "MCA/BSc", "Mechanical", "Web Dev", "Mobile App", "IEEE", "Guide"];

// Service pages for internal linking
const serviceLinks = [
  { label: `CSE Projects Coimbatore ${YEAR}`, href: "/services/cse-projects" },
  { label: `ECE Projects Coimbatore ${YEAR}`, href: "/services/ece-projects" },
  { label: `MCA Projects Coimbatore ${YEAR}`, href: "/services/mca-projects" },
  { label: "Machine Learning Projects", href: "/services/software-projects" },
  { label: "Python AI Projects Coimbatore", href: "/services/software-projects" },
  { label: "IoT Projects Coimbatore", href: "/services/iot-projects" },
  { label: "Arduino ESP32 Projects", href: "/services/iot-projects" },
  { label: "Embedded Projects Coimbatore", href: "/services/embedded-projects" },
  { label: "Mechanical Projects Coimbatore", href: "/services/mechanical-projects" },
  { label: "MERN Stack Projects Coimbatore", href: "/services/software-projects" },
  { label: "Flutter Projects Coimbatore", href: "/services/software-projects" },
  { label: "Java Projects Coimbatore", href: "/services/software-projects" },
  { label: "Low Cost Projects Coimbatore", href: "/contact" },
  { label: `IEEE Projects Coimbatore ${YEAR}`, href: "/projects" },
  { label: "Project Center Gandhipuram", href: "/contact" },
  { label: "Project Center Peelamedu", href: "/contact" },
  { label: "Project Center Saravanampatti", href: "/contact" },
  { label: "Project Center RS Puram", href: "/contact" },
  { label: "Internship Training Coimbatore", href: "/internship" },
  { label: "Best IEEE Project Center Tamil Nadu", href: "/about" },
  { label: "Final Year Project with Certificate", href: "/contact" },
  { label: "Ready Made Projects Coimbatore", href: "/projects" },
];

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════
const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const heroRef = useRef(null);

  const filtered = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  useEffect(() => {
    const els = document.querySelectorAll(".blog-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("blog-visible"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filtered]);

  return (
    <div className="blog-page">

      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {blogs.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BlogPosting",
          "headline": b.title, "description": b.metaDesc,
          "url": `https://www.codexproject.in/blog/${b.slug}`,
          "datePublished": b.dateISO,
          "dateModified": b.dateISO,
          "inLanguage": "en-IN",
          "author": {
            "@type": "Organization", "name": "CODEX PROJECT",
            "@id": "https://www.codexproject.in/#organization",
          },
          "publisher": {
            "@type": "Organization", "name": "CODEX PROJECT",
            "logo": { "@type": "ImageObject", "url": "https://www.codexproject.in/logo512.png" },
          },
          "keywords": b.tags.join(", "),
          "articleBody": b.intro + " " + b.body,
          "about": { "@type": "Thing", "name": "Final Year Projects Coimbatore" },
          "mentions": { "@type": "Place", "name": "Coimbatore, Tamil Nadu, India" },
        })}} />
      ))}

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="blog-hero" ref={heroRef} aria-labelledby="blog-h1">
        <div className="bh-bg">
          <div className="bh-grid"></div>
          <div className="bh-glow bh-g1"></div>
          <div className="bh-glow bh-g2"></div>
        </div>
        <div className="blog-container">
          <nav aria-label="breadcrumb" className="bh-breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="bh-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem" aria-current="page">
                <span itemProp="name">Blog</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <span className="bh-eyebrow">Knowledge Hub – Updated {YEAR}</span>

          <h1 id="blog-h1" className="bh-title">
            Final Year Project Blog –<br />
            <span className="bh-accent">CODEX PROJECT Coimbatore</span>
          </h1>

          <p className="bh-subtitle">
            Best IEEE {YEAR} Project Ideas, Technology Guides &amp; Expert Tips
            for Engineering Students in Coimbatore
          </p>

          <div className="bh-intro-block">
            <p>
              <strong>CODEX PROJECT</strong> — the <strong>best final year project center
              in Coimbatore</strong> at Balaji Complex, Gandhipuram — brings you
              Coimbatore's most comprehensive blog on IEEE {YEAR} final year engineering projects.
              Our expert engineers publish in-depth guides on{" "}
              <strong>Mechanical Engineering projects</strong> (fabrication, CAD/CAM, robotics),{" "}
              <strong>IoT projects</strong> (Arduino, ESP32, Raspberry Pi, cloud),{" "}
              <strong>Embedded Systems</strong> (8051, ARM Cortex, FPGA),{" "}
              <strong>AI &amp; Machine Learning</strong> (Python, TensorFlow, YOLO, NLP),{" "}
              <strong>Web Development</strong> (MERN Stack, Django, Next.js),{" "}
              <strong>Mobile Apps</strong> (Flutter, Android),{" "}
              <strong>CSE projects</strong>, and <strong>ECE projects</strong> —
              all tailored for <strong>BE, ME, MCA, BSc, BCA, and Diploma students</strong> from
              PSG Tech, CIT, KPR, KGISL, Karpagam, SNS, Sri Krishna, and all Coimbatore
              engineering colleges.
            </p>
          </div>

          <div className="bh-meta-row">
            <span className="bh-meta-chip">📚 {blogs.length} Articles</span>
            <span className="bh-meta-chip">🎯 {categories.length - 1} Domains</span>
            <span className="bh-meta-chip">📍 Gandhipuram, Coimbatore</span>
            <span className="bh-meta-chip">📞 {PHONE_GEN}</span>
            <span className="bh-meta-chip">⭐ 4.9 Google Rating</span>
            <span className="bh-meta-chip">🏆 IEEE {YEAR} Certified</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST SIGNALS BAR — E-E-A-T
      ══════════════════════════════════════════════════════ */}
      <section className="blog-trust blog-reveal" aria-label="Trust signals">
        <div className="blog-container">
          <div className="bt-grid">
            {[
              { icon: "🏆", label: "Best Project Center", sub: "Coimbatore – 5 Years" },
              { icon: "🎓", label: "1000+ Students", sub: "Served Successfully" },
              { icon: "⭐", label: "4.9 Google Rating", sub: "320+ Reviews" },
              { icon: "📋", label: `IEEE ${YEAR}`, sub: "600+ Base Papers" },
              { icon: "🏪", label: "Gandhipuram", sub: "Easily Accessible" },
              { icon: "📜", label: "Internship Certificate", sub: "Included Free" },
            ].map((t, i) => (
              <div key={i} className="bt-item">
                <span className="bt-icon">{t.icon}</span>
                <span className="bt-label">{t.label}</span>
                <span className="bt-sub">{t.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY READ OUR BLOG
      ══════════════════════════════════════════════════════ */}
      <section className="blog-why blog-reveal" aria-labelledby="why-blog-h2">
        <div className="blog-container">
          <div className="bw-grid">
            <div className="bw-text">
              <span className="bl-eyebrow">Why This Blog</span>
              <h2 id="why-blog-h2" className="bl-section-title">
                Why CODEX PROJECT Blog is the Best Resource for Final Year Projects in Coimbatore {YEAR}
              </h2>
              <p>
                Most final year project blogs give you just a list of titles. We go deeper.
                Every article on the CODEX PROJECT blog is written by practicing engineers
                with 1000+ real student projects behind them. You get actual implementation
                details, cost estimates, hardware lists, technology comparisons, and
                college-specific advice for Coimbatore engineering students.
              </p>
              <p>
                Our articles cover <strong>IEEE {YEAR} base paper projects</strong>,
                trending technologies, viva preparation tips, documentation formats, and
                everything you need to complete your final year project with confidence —
                whether you are a <strong>BE CSE student at PSG Tech</strong>, an{" "}
                <strong>ECE student at CIT</strong>, an <strong>MCA student at Karpagam</strong>,
                or a <strong>Diploma student</strong> at any Coimbatore polytechnic.
              </p>
              <p>
                CODEX PROJECT is conveniently located at <strong>Balaji Complex,
                Gandhipuram, Coimbatore</strong> — easily reachable from Peelamedu,
                Saravanampatti, RS Puram, Singanallur, and Ukkadam by bus, bike, or cab.
              </p>
              <a href="/contact" className="bw-cta-link" aria-label={`Free project consultation CODEX PROJECT Coimbatore ${YEAR}`}>
                📞 Free Project Consultation →
              </a>
            </div>
            <div className="bw-stats">
              {[
                { num: "500+", label: "Projects Completed", icon: "🚀" },
                { num: "1000+", label: "Students Helped", icon: "🎓" },
                { num: "12+", label: "Blog Articles", icon: "📝" },
                { num: "4.9 ★", label: "Google Rating", icon: "⭐" },
              ].map((s, i) => (
                <div key={i} className="bw-stat">
                  <span className="bw-stat-icon">{s.icon}</span>
                  <span className="bw-stat-num">{s.num}</span>
                  <span className="bw-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CATEGORY FILTER
      ══════════════════════════════════════════════════════ */}
      <section className="blog-filter-section blog-reveal" aria-label="Filter by category">
        <div className="blog-container">
          <h2 className="bf-label">Filter by Domain – IEEE {YEAR} Projects</h2>
          <div className="bf-chips" role="navigation" aria-label="Blog categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`bf-chip ${activeCategory === cat ? "bf-chip-active" : ""}`}
                aria-label={`Show ${cat} articles`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOG GRID
      ══════════════════════════════════════════════════════ */}
      <section className="blog-grid-section" aria-labelledby="blog-grid-h2">
        <div className="blog-container">
          <h2 id="blog-grid-h2" className="bl-section-title blog-reveal" style={{ marginBottom: "36px" }}>
            {activeCategory === "All"
              ? `All Final Year Project Articles – Coimbatore ${YEAR}`
              : `${activeCategory} Final Year Project Ideas – Coimbatore ${YEAR}`}
          </h2>

          <div className="blog-grid">
            {filtered.map((blog, idx) => (
              <article
                key={blog.slug}
                className={`blog-card blog-reveal ${blog.featured ? "blog-card-featured" : ""}`}
                style={{ "--accent": blog.categoryColor, "--bg": blog.categoryBg, "--delay": `${(idx % 3) * 0.1}s` }}
                itemScope itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="headline" content={blog.title} />
                <meta itemProp="description" content={blog.metaDesc} />
                <meta itemProp="url" content={`https://www.codexproject.in/blog/${blog.slug}`} />
                <meta itemProp="datePublished" content={blog.dateISO} />
                <meta itemProp="dateModified" content={blog.dateISO} />
                <meta itemProp="inLanguage" content="en-IN" />

                <div className="bc-top-bar"></div>

                <div className="bc-body">
                  <div className="bc-meta">
                    <span className="bc-cat" itemProp="keywords">{blog.category}</span>
                    <span className="bc-time">⏱ {blog.readTime}</span>
                    {blog.featured && <span className="bc-featured">⭐ Featured</span>}
                  </div>

                  <h2 className="bc-title" itemProp="name">
                    <a href={`/blog/${blog.slug}`} className="bc-title-link" aria-label={blog.h1}>
                      {blog.title}
                    </a>
                  </h2>

                  <p className="bc-date">
                    <time itemProp="datePublished" dateTime={blog.dateISO}>{blog.date}</time>
                    {" "}· CODEX PROJECT, Coimbatore
                  </p>

                  {/* College tags — local SEO signal */}
                  <p className="bc-colleges">🎓 {blog.colleges}</p>

                  <p className="bc-intro" itemProp="description">{blog.intro}</p>

                  {expandedPost === blog.slug && (
                    <div className="bc-full-body">
                      <p>{blog.body}</p>
                      <h3 className="bc-points-title">Key Topics Covered:</h3>
                      <ul className="bc-points">
                        {blog.points.map((pt, pi) => (
                          <li key={pi}><span className="bc-point-dot"></span>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bc-highlights">
                    {blog.highlights.map((h, hi) => (
                      <span key={hi} className="bc-highlight-tag">{h}</span>
                    ))}
                  </div>

                  <div className="bc-tags">
                    {blog.tags.map((t, ti) => (
                      <span key={ti} className="bc-tag" itemProp="keywords">#{t.split(" ")[0]}</span>
                    ))}
                  </div>
                </div>

                <div className="bc-footer">
                  <button
                    className="bc-expand-btn"
                    onClick={() => setExpandedPost(expandedPost === blog.slug ? null : blog.slug)}
                    aria-label={expandedPost === blog.slug ? "Show less" : "Read more"}
                  >
                    {expandedPost === blog.slug ? "Show Less ↑" : "Read More ↓"}
                  </button>
                  <a
                    href={`/blog/${blog.slug}`}
                    className="bc-read-btn"
                    aria-label={`Full article: ${blog.title}`}
                  >
                    Full Article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COLLEGE-WISE LOCAL SEO SECTION — NEW
      ══════════════════════════════════════════════════════ */}
      <section className="blog-colleges blog-reveal" aria-labelledby="colleges-h2">
        <div className="blog-container">
          <span className="bl-eyebrow">We Serve All Colleges</span>
          <h2 id="colleges-h2" className="bl-section-title">
            Final Year Projects for All Coimbatore Engineering Colleges – {YEAR}
          </h2>
          <p className="bc-college-intro">
            CODEX PROJECT — the best final year project center in Coimbatore — serves students
            from 30+ engineering colleges across Coimbatore, Tirupur, Erode, and Salem districts.
            Students from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, RVS, KGISL,
            Rathinam, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, and all Coimbatore polytechnics
            regularly visit our Gandhipuram center for IEEE {YEAR} final year projects with
            internship certificate.
          </p>
          <div className="bcollege-grid">
            {[
              "PSG Tech", "CIT", "KMEA", "Sri Krishna", "KPR College",
              "Karpagam", "SNS College", "KGISL", "Rathinam", "Hindusthan",
              "Sri Eshwar", "Dr NGP", "Bannari Amman", "RVS", "EASA",
              "Nehru", "Excel Engineering", "Sengunthar", "JCT", "Info Institute",
              "All Polytechnics", "All Arts & Science"
            ].map((col) => (
              <span key={col} className="bcollege-tag">{col}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DEEP CONTENT
      ══════════════════════════════════════════════════════ */}
      <section className="blog-deep-content blog-reveal" aria-labelledby="deep-h2">
        <div className="blog-container">
          <h2 id="deep-h2" className="bl-section-title">
            Complete Guide to Final Year Projects in Coimbatore – {YEAR}
          </h2>

          <div className="bdc-grid">
            <div className="bdc-block">
              <h3 className="bdc-h3">
                Why Final Year Projects Matter for Engineering Students in Coimbatore {YEAR}
              </h3>
              <p>
                The final year project is not just an academic requirement — it is your first
                real engineering experience. For engineering students in Coimbatore, a strong
                final year project can make a significant difference in campus placements,
                higher studies applications, and career opportunities. Companies like TCS,
                Infosys, Wipro, HCL, CTS, and emerging startups specifically ask about your
                final year project during interviews.
              </p>
              <p>
                A project in AI, IoT, or Full-Stack Web Development demonstrates practical skills
                that textbook knowledge alone cannot. At <strong>CODEX PROJECT — the best final
                year project center in Coimbatore</strong> — we ensure every project is
                real-time, functional, and demonstrates genuine engineering problem-solving.
                We don't just give you code — we teach you to understand and explain it
                confidently during your viva.
              </p>
            </div>

            <div className="bdc-block">
              <h3 className="bdc-h3">
                Domain-Wise Final Year Project Guidance for Coimbatore Engineering Students {YEAR}
              </h3>
              <p>
                <strong>CSE &amp; IT Students:</strong> Best domains are AI/ML, Web Development,
                Mobile Apps, Cybersecurity, and Cloud Computing. Python-based AI projects with
                TensorFlow or PyTorch are the most valued in placements.
              </p>
              <p>
                <strong>ECE &amp; EEE Students:</strong> Best domains are IoT, Embedded Systems,
                VLSI/FPGA, Signal Processing, and Power Electronics. Arduino and Raspberry Pi
                projects with cloud integration are trending in {YEAR}.
              </p>
              <p>
                <strong>Mechanical Students:</strong> CAD/CAM design, fabrication, robotics,
                renewable energy, and automation are strong choices. SolidWorks and ANSYS
                projects are valued by manufacturing companies in Coimbatore.
              </p>
              <p>
                <strong>MCA &amp; BSc Students:</strong> Web development (MERN, Django),
                mobile apps (Flutter, Android), and AI projects are excellent choices with
                strong placement value for {YEAR} batch.
              </p>
            </div>

            <div className="bdc-block">
              <h3 className="bdc-h3">
                How CODEX PROJECT Coimbatore Helps You Complete Your Final Year Project {YEAR}
              </h3>
              <p>
                Located at <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
                Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>, CODEX PROJECT is
                easily accessible from all major engineering college zones in Coimbatore
                including Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.
              </p>
              <p>
                Our {YEAR} process: (1) Free consultation to understand your requirements,
                (2) Topic selection with IEEE {YEAR} base paper, (3) Real-time development
                with your involvement, (4) Testing and refinement, (5) IEEE documentation —
                report, synopsis, PPT, (6) Viva preparation with mock questions, (7) Support
                till your final review. (8) Internship certificate upon completion.
              </p>
              <p>
                Contact us: General — <strong>{PHONE_GEN}</strong> | Software/AI —{" "}
                <strong>{PHONE_SW}</strong> | Embedded/IoT/Mech — <strong>{PHONE_HW}</strong> |
                Email — <strong>{EMAIL}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ — Google Featured Snippets target
      ══════════════════════════════════════════════════════ */}
      <section className="blog-faq blog-reveal" aria-labelledby="blog-faq-h2">
        <div className="blog-container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="bl-eyebrow">FAQ</span>
            <h2 id="blog-faq-h2" className="bl-section-title">
              Frequently Asked Questions – Final Year Projects Coimbatore {YEAR}
            </h2>
          </div>
          <div className="bfaq-list">
            {faqSchema.mainEntity.map((f, i) => (
              <div
                key={i}
                className={`bfaq-item ${openFaq === i ? "bfaq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                itemScope itemType="https://schema.org/Question"
              >
                <div className="bfaq-q">
                  <h3 className="bfaq-question" itemProp="name">{f.name}</h3>
                  <span className="bfaq-toggle">{openFaq === i ? "−" : "+"}</span>
                </div>
                <div className="bfaq-a" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{f.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KEYWORD CLOUD — Internal links for SEO
      ══════════════════════════════════════════════════════ */}
      <section className="blog-keywords blog-reveal" aria-label="Blog topic keywords">
        <div className="blog-container">
          <h2 className="bkw-title">Explore by Topic – IEEE {YEAR} Final Year Projects Coimbatore</h2>
          <div className="bkw-grid">
            {serviceLinks.map(({ label, href }) => (
              <a key={label} href={href} className="bkw-tag" aria-label={label}>{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOCATION + CTA
      ══════════════════════════════════════════════════════ */}
      <section className="blog-cta blog-reveal" aria-labelledby="blog-cta-h2">
        <div className="bcta-bg"></div>
        <div className="blog-container">
          <h2 id="blog-cta-h2" className="bcta-title">
            Ready to Start Your Final Year Project {YEAR}?<br />
            <span className="bcta-sub">Visit CODEX PROJECT – Gandhipuram, Coimbatore</span>
          </h2>
          <p className="bcta-desc">
            Join <strong>1000+ engineering students</strong> who trusted CODEX PROJECT —
            the <strong>best final year project center in Coimbatore</strong> and the{" "}
            <strong>best IEEE {YEAR} project center in Tamil Nadu</strong> — for affordable
            IEEE {YEAR} projects, internship training, internship certificate, and placement support.
          </p>
          <p className="bcta-address">
            📍 {ADDRESS}
          </p>
          <div className="bcta-actions">
            <a href={`tel:+91${PHONE_GEN}`} className="bcta-btn bcta-btn-primary">
              📞 Call: {PHONE_GEN}
            </a>
            <a href={`https://wa.me/91${PHONE_GEN}`} target="_blank" rel="noopener noreferrer" className="bcta-btn bcta-btn-wa">
              💬 WhatsApp Us
            </a>
            <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="bcta-btn bcta-btn-outline">
              ⭐ Review on Google
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
