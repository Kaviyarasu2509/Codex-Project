import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./EmbeddedProjects.css";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════
const YEAR      = "2026-27";
const PHONE     = "8525999032";   // Hardware / Embedded line
const PHONE_GEN = "8525999002";
const WA        = `https://wa.me/91${PHONE_GEN}`;
const ADDR      = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";
const PAGE_URL  = "https://www.codexproject.in/embedded-project-center-coimbatore";

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const embeddedSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `Best Embedded Project Center in Coimbatore ${YEAR} – CODEX PROJECT`,
  "serviceType": "Embedded Systems Final Year Project Training and Development",
  "description": `CODEX PROJECT is the best embedded project center in Coimbatore ${YEAR}. We offer IEEE ${YEAR} 8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi, STM32, and FPGA/VLSI embedded system final year projects for BE ECE, EEE, EIE, and Diploma students with real hardware, complete circuit design, Keil/MPLAB programming, Proteus simulation, documentation, internship certificate, and viva support.`,
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
    "name": `Embedded Project Services Coimbatore ${YEAR}`,
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `8051 Microcontroller Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `ARM Cortex Embedded Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `PIC AVR Microcontroller Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Arduino Embedded Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `Raspberry Pi Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `FPGA VLSI Projects Coimbatore ${YEAR}` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `STM32 Embedded Projects Coimbatore ${YEAR}` } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `Best embedded project center in Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best embedded project center in Coimbatore ${YEAR}, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer 8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi, STM32, and FPGA/VLSI embedded system final year projects for BE ECE, EEE, EIE, and Diploma students with free internship certificate. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "What microcontroller platforms does CODEX PROJECT support?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT supports 8051 (AT89C51), ARM Cortex M3/M4 (STM32, LPC2148), PIC16F/18F, AVR ATmega328, Arduino UNO/Mega/Nano, Raspberry Pi 4/Zero, ESP32, NodeMCU, MSP430, and Xilinx/Altera FPGA for embedded final year projects in Coimbatore ${YEAR}. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "What tools does CODEX PROJECT use for embedded projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT uses Keil uVision (ARM, 8051), Proteus Simulation, MPLAB IDE (PIC), Arduino IDE, Xilinx Vivado / ISE (FPGA), AVR Studio, STM32CubeIDE, LTSpice, and Eagle PCB for embedded system final year projects in Coimbatore ${YEAR}. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": `Cost of embedded final year projects at CODEX PROJECT Coimbatore ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers the most affordable embedded project pricing in Coimbatore ${YEAR}. All packages include real hardware, circuit design, Proteus simulation, Keil programming, IEEE documentation, PCB layout, circuit diagram, viva prep, and free internship certificate. EMI available. Call ${PHONE_GEN} for free quote.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT support ECE, EEE, and EIE students for embedded projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT supports BE ECE, EEE, EIE, Instrumentation, ME Embedded Systems, and Diploma students for embedded final year projects in Coimbatore ${YEAR} from all colleges including PSG Tech, CIT, Sri Krishna, KPR, KGISL, Karpagam, SNS, and 20+ others. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT provide FPGA and VLSI projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT provides FPGA and VLSI final year projects using Xilinx Vivado, ISE, and Altera Quartus with Verilog and VHDL designs — ALU design, image processing, signal processing, and digital communication projects. Best FPGA project center in Coimbatore ${YEAR}. Call ${PHONE}.` },
    },
    {
      "@type": "Question",
      "name": "Does CODEX PROJECT provide internship certificate with embedded projects?",
      "acceptedAnswer": { "@type": "Answer", "text": `Yes! Every embedded project at CODEX PROJECT Coimbatore includes a FREE internship certificate along with IEEE format project report, circuit diagram, source code, Proteus simulation file, PPT, and viva preparation coaching. Call ${PHONE_GEN}.` },
    },
    {
      "@type": "Question",
      "name": `What is included in an embedded project package at CODEX PROJECT ${YEAR}?`,
      "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT embedded project packages include: (1) Real hardware with all components and sensors, (2) Proteus circuit simulation, (3) Keil/MPLAB/Arduino IDE firmware coding, (4) PCB layout and circuit diagram, (5) IEEE ${YEAR} format project report, (6) PPT for reviews, (7) 50+ viva Q&A preparation, (8) FREE internship certificate, (9) Unlimited revisions. Call ${PHONE}.` },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": `Embedded Projects Coimbatore ${YEAR}`, "item": PAGE_URL },
  ],
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const services = [
  {
    icon:"🔲", title:"8051 Microcontroller Projects",
    seo:`8051 Microcontroller Projects Coimbatore ${YEAR}`,
    color:"#e3f2fd", accent:"#1565c0",
    fk:["8051","Embedded","ECE","IEEE"],
    desc:`Classic and advanced 8051 (AT89C51/AT89S52) based embedded final year projects with Keil IDE, Proteus simulation, and real hardware implementation — best 8051 project center in Coimbatore ${YEAR}.`,
  },
  {
    icon:"💪", title:"ARM Cortex Projects",
    seo:`ARM Cortex Embedded Projects Coimbatore ${YEAR}`,
    color:"#f3e5f5", accent:"#6a1b9a",
    fk:["ARM","Embedded","ECE","IEEE"],
    desc:`STM32 (F1/F4/H7), LPC2148, and ARM Cortex M3/M4 based embedded final year projects with STM32CubeIDE — best ARM project center in Coimbatore ${YEAR} for BE ECE and EEE students.`,
  },
  {
    icon:"⚡", title:"PIC & AVR Projects",
    seo:`PIC AVR Microcontroller Projects Coimbatore ${YEAR}`,
    color:"#e8f5e9", accent:"#2e7d32",
    fk:["PIC","AVR","Embedded","ECE","IEEE"],
    desc:`PIC16F/18F with MPLAB IDE and AVR ATmega328 with AVR Studio embedded projects — affordable PIC and AVR project center in Coimbatore ${YEAR} for ECE and Diploma students.`,
  },
  {
    icon:"🔌", title:"Arduino Embedded Projects",
    seo:`Arduino Embedded Projects Coimbatore ${YEAR}`,
    color:"#fff3e0", accent:"#e65100",
    fk:["Arduino","Embedded","ECE","IEEE"],
    desc:`Arduino UNO, Mega, Nano, and Pro Mini based sensor, automation, and control system embedded projects for BE, Diploma students in Coimbatore ${YEAR}. Real components, full documentation.`,
  },
  {
    icon:"🍓", title:"Raspberry Pi Projects",
    seo:`Raspberry Pi Embedded Projects Coimbatore ${YEAR}`,
    color:"#fce4ec", accent:"#880e4f",
    fk:["Raspberry Pi","Embedded","ECE","IEEE"],
    desc:`Raspberry Pi 4/Zero based image processing, AI, Linux embedded, and real-time control final year projects — best Raspberry Pi project center in Coimbatore ${YEAR}.`,
  },
  {
    icon:"🏗️", title:"FPGA & VLSI Projects",
    seo:`FPGA VLSI Projects Coimbatore ${YEAR}`,
    color:"#ede7f6", accent:"#283593",
    fk:["FPGA","VLSI","Embedded","ECE","IEEE"],
    desc:`Xilinx Vivado, ISE, Altera Quartus FPGA and VHDL/Verilog VLSI design final year projects — best FPGA project center in Coimbatore ${YEAR} for BE ECE students.`,
  },
  {
    icon:"🔷", title:"STM32 & Advanced ARM Projects",
    seo:`STM32 Advanced Embedded Projects Coimbatore ${YEAR}`,
    color:"#e8eaf6", accent:"#1a237e",
    fk:["STM32","ARM","Embedded","ECE","IEEE"],
    desc:`STM32F4/H7 advanced embedded projects with HAL libraries, FreeRTOS, and CAN/SPI/I2C protocols — advanced embedded project center in Coimbatore ${YEAR} for ME ECE students.`,
  },
  {
    icon:"📡", title:"Wireless & RF Embedded Projects",
    seo:`Wireless RF Embedded Projects Coimbatore ${YEAR}`,
    color:"#e0f7fa", accent:"#006064",
    fk:["Wireless","Embedded","ECE","IEEE"],
    desc:`GSM, GPS, RF433, Zigbee, BLE, LoRa, and NB-IoT based wireless embedded communication final year projects for ECE and EIE students in Coimbatore ${YEAR}.`,
  },
  {
    icon:"🤖", title:"Robotics & Automation",
    seo:`Robotics Embedded Automation Projects Coimbatore ${YEAR}`,
    color:"#f9fbe7", accent:"#33691e",
    fk:["Robotics","Automation","Embedded","ECE","IEEE"],
    desc:`Line follower, obstacle avoidance, robotic arm, autonomous drone, and industrial automation embedded projects — best robotics embedded center in Coimbatore ${YEAR}.`,
  },
  {
    icon:"⚙️", title:"Power Electronics Embedded",
    seo:`Power Electronics Embedded Projects Coimbatore ${YEAR}`,
    color:"#fff8e1", accent:"#f57f17",
    fk:["Power","Embedded","EEE","IEEE"],
    desc:`PWM motor control, solar MPPT, BLDC motor driver, inverter control, and power quality monitoring embedded system projects for BE EEE and ME Power students in Coimbatore ${YEAR}.`,
  },
  {
    icon:"🩺", title:"Biomedical Embedded Projects",
    seo:`Biomedical Embedded Projects Coimbatore ${YEAR}`,
    color:"#fce4ec", accent:"#880e4f",
    fk:["Biomedical","Embedded","ECE","IEEE"],
    desc:`ECG monitoring, SpO2 measurement, blood pressure, temperature monitoring, and wearable health sensor embedded projects for BE ECE and ME Biomedical students in Coimbatore ${YEAR}.`,
  },
  {
    icon:"🚗", title:"Automotive Embedded Projects",
    seo:`Automotive Embedded Projects Coimbatore ${YEAR}`,
    color:"#e8eaf6", accent:"#37474f",
    fk:["Automotive","Embedded","ECE","IEEE"],
    desc:`CAN bus, OBD-II, ADAS features, accident detection, and driver monitoring embedded system projects for BE ECE and Automobile engineering students in Coimbatore ${YEAR}.`,
  },
];

const microcontrollers = [
  { name:"8051 / AT89C51",    color:"#e3f2fd" },
  { name:"ARM Cortex M3/M4",  color:"#f3e5f5" },
  { name:"PIC16F / PIC18F",   color:"#e8f5e9" },
  { name:"AVR ATmega328",     color:"#fff3e0" },
  { name:"STM32 F1/F4/H7",    color:"#e8eaf6" },
  { name:"Arduino UNO/Mega",  color:"#e0f7fa" },
  { name:"Raspberry Pi 4/Zero",color:"#fce4ec" },
  { name:"ESP32 / NodeMCU",   color:"#ede7f6" },
  { name:"MSP430",            color:"#f9fbe7" },
  { name:"Xilinx / Altera FPGA",color:"#fff8e1" },
  { name:"LPC2148",           color:"#f3e5f5" },
  { name:"dsPIC33",           color:"#e8f5e9" },
];

const tools = [
  { name:"Keil uVision",        color:"#fbe9e7" },
  { name:"Proteus Simulation",  color:"#e8f5e9" },
  { name:"MPLAB IDE",           color:"#e3f2fd" },
  { name:"Arduino IDE",         color:"#ede7f6" },
  { name:"Xilinx Vivado / ISE", color:"#f3e5f5" },
  { name:"STM32CubeIDE",        color:"#e8eaf6" },
  { name:"LTSpice",             color:"#fff3e0" },
  { name:"Eagle PCB",           color:"#fce4ec" },
  { name:"AVR Studio",          color:"#e0f7fa" },
  { name:"MATLAB Simulink",     color:"#fff8e1" },
];

const projectIdeas = [
  { name:"Smart Traffic Light Control – 8051",        tag:"8051" },
  { name:"Automatic Street Light – LDR + 8051",       tag:"8051" },
  { name:"Digital Energy Meter – PIC16F",             tag:"PIC" },
  { name:"RFID Access Control – Arduino",             tag:"Arduino" },
  { name:"ARM Cortex Motor Speed Controller",         tag:"ARM Cortex" },
  { name:"GPS + GSM Vehicle Tracking – ARM",          tag:"ARM / GSM" },
  { name:"Face Detection System – Raspberry Pi",      tag:"Raspberry Pi" },
  { name:"FPGA ALU Design – Verilog",                 tag:"FPGA / VLSI" },
  { name:"Smart Door Lock – Fingerprint + ARM",       tag:"ARM Cortex" },
  { name:"Industrial PWM Motor Controller",           tag:"STM32" },
  { name:"Wireless ECG Monitor – Arduino + BT",       tag:"Arduino" },
  { name:"BLDC Motor Control – ARM + MATLAB",         tag:"ARM Cortex" },
  { name:"Home Automation – Voice + Embedded",        tag:"Arduino" },
  { name:"Smart Helmet with Accident Detection",      tag:"Arduino" },
  { name:"Automated Railway Gate – 8051",             tag:"8051" },
  { name:"Solar MPPT Charge Controller",              tag:"STM32" },
  { name:"Ultrasonic Blind Navigation Stick",         tag:"Arduino" },
  { name:"CAN Bus Automotive Communication",          tag:"ARM Cortex" },
  { name:"VLSI 4-bit ALU – VHDL",                     tag:"FPGA / VLSI" },
  { name:"Zigbee Mesh Network System",                tag:"Wireless" },
  { name:"SpO2 + Heart Rate Monitor – Arduino",       tag:"Biomedical" },
  { name:"PIC-based Digital Thermometer",             tag:"PIC" },
  { name:"Drone Flight Controller – PID + Embedded",  tag:"Robotics" },
  { name:"Line Following Robot – Arduino",            tag:"Robotics" },
  { name:"Obstacle Avoiding Robot – Arduino",         tag:"Robotics" },
  { name:"Anti-Theft Alert – Vibration + 8051",      tag:"8051" },
  { name:"FPGA Image Processing System",              tag:"FPGA / VLSI" },
  { name:"Contactless IR Temperature Monitor",        tag:"Arduino" },
];

const tagColors = {
  "8051":"#e3f2fd","ARM Cortex":"#f3e5f5","ARM / GSM":"#f3e5f5",
  "PIC":"#e8f5e9","AVR":"#fff3e0","Arduino":"#e8f5e9",
  "Raspberry Pi":"#fce4ec","FPGA / VLSI":"#ede7f6","STM32":"#e8eaf6",
  "Wireless":"#e0f7fa","Biomedical":"#fce4ec","Robotics":"#f9fbe7",
  "Power":"#fff8e1","Automotive":"#e8eaf6",
};

const FILTER_KEYWORDS = [
  `Embedded Projects Coimbatore ${YEAR}`,
  `8051 Projects Coimbatore ${YEAR}`,
  `ARM Cortex Projects Coimbatore`,
  `PIC AVR Projects Coimbatore`,
  `Arduino Projects Coimbatore`,
  `Raspberry Pi Projects Coimbatore`,
  `FPGA VLSI Projects Coimbatore`,
  `STM32 Projects Coimbatore`,
  `Embedded Projects ECE Coimbatore`,
  `IEEE Embedded Projects ${YEAR}`,
  `Keil Proteus Projects Coimbatore`,
  `Embedded Center Gandhipuram`,
  `Affordable Embedded Projects Coimbatore`,
  `Robotics Automation Projects Coimbatore`,
  `Biomedical Embedded Projects Coimbatore`,
];

const ideaTagToFilter = {
  "8051":       ["8051","Embedded","ECE","IEEE"],
  "ARM Cortex": ["ARM","Embedded","ECE","IEEE"],
  "ARM / GSM":  ["ARM","Embedded","ECE","IEEE"],
  "PIC":        ["PIC","AVR","Embedded","ECE","IEEE"],
  "Arduino":    ["Arduino","Embedded","ECE","IEEE"],
  "Raspberry Pi":["Raspberry Pi","Embedded","ECE","IEEE"],
  "FPGA / VLSI":["FPGA","VLSI","Embedded","ECE","IEEE"],
  "STM32":      ["STM32","ARM","Embedded","ECE","IEEE"],
  "Wireless":   ["Wireless","Embedded","ECE","IEEE"],
  "Biomedical": ["Biomedical","Embedded","ECE","IEEE"],
  "Robotics":   ["Robotics","Automation","Embedded","ECE","IEEE"],
  "Power":      ["Power","Embedded","EEE","IEEE"],
  "Automotive": ["Automotive","Embedded","ECE","IEEE"],
};

const KEYWORD_TAGS = [
  [`Embedded Projects Coimbatore ${YEAR}`,"/embedded-project-center-coimbatore"],
  [`8051 Projects Coimbatore ${YEAR}`,"/embedded-project-center-coimbatore"],
  [`ARM Cortex Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`PIC AVR Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`Arduino Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`Raspberry Pi Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`FPGA VLSI Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`STM32 Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`Keil Proteus Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`Embedded Projects ECE Coimbatore`,"/embedded-project-center-coimbatore"],
  [`IEEE Embedded Projects ${YEAR}`,"/embedded-project-center-coimbatore"],
  [`Embedded Internship Certificate Coimbatore`,"/contact"],
  [`Affordable Embedded Projects Coimbatore`,"/contact"],
  [`Embedded Center Gandhipuram`,"/contact"],
  [`Robotics Automation Projects Coimbatore`,"/embedded-project-center-coimbatore"],
  [`Biomedical Embedded Projects Coimbatore`,"/embedded-project-center-coimbatore"],
];

const RELATED_SERVICES = [
  { label: "IoT Projects",            href: "/iot-project-center-coimbatore",        icon: "📡" },
  { label: "Mechanical Projects",     href: "/mechanical-project-center-coimbatore", icon: "⚙️" },
  { label: "Software & AI Projects",  href: "/software-project-center-coimbatore",   icon: "💻" },
];

const WHY = [
  { icon:"💰", t:"Most Affordable Embedded Projects",    d:`Lowest embedded project cost in Coimbatore ${YEAR} — real hardware + circuit design + simulation + IEEE docs + internship cert, zero hidden charges.` },
  { icon:"🔧", t:"Real Hardware Working Models",         d:"Actual PCB, microcontroller circuit, and sensor-based working prototype — students demo live hardware during college reviews and viva."},
  { icon:"🖥️", t:"Circuit Design & Simulation",         d:`Proteus simulation, Keil programming, PCB layout, MPLAB, STM32CubeIDE — complete design-to-hardware pipeline for ${YEAR} projects.`},
  { icon:"📋", t:"Complete IEEE Documentation",          d:`Full IEEE ${YEAR} format project report, circuit diagram, code documentation, PPT, and synopsis — ready for all Coimbatore college submissions.`},
  { icon:"📜", t:"Free Internship Certificate",          d:"Every embedded project includes a FREE internship certificate accepted by all engineering colleges in Coimbatore, Tirupur, Erode, and Tamil Nadu."},
  { icon:"🎤", t:"Viva & Review Coaching",               d:"50+ mock viva questions and answers specific to your embedded project — expert coaching for all department reviews and final year presentations."},
  { icon:"🏗️", t:"FPGA / VLSI Expertise",               d:`Xilinx Vivado, ISE, Verilog, and VHDL projects with actual FPGA board implementation — best FPGA project center in Coimbatore ${YEAR}.`},
  { icon:"📍", t:"Central Gandhipuram Location",         d:"Balaji Complex, Gandhipuram — accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and all Coimbatore engineering college zones."},
];

const REVIEWS = [
  { stars:5, text:`Best embedded project center in Coimbatore! My ARM Cortex motor control project was implemented with real STM32 hardware, Keil IDE, and full IEEE ${YEAR} documentation. Scored top marks in my batch. Highly recommended for ECE students!`, name:"Arun K.", branch:"BE ECE – PSG Tech" },
  { stars:5, text:"My 8051 smart traffic light project was done at Codex Project, Gandhipuram. Excellent real hardware working model, proper Proteus simulation, circuit diagram, and IEEE documentation. Best embedded center near Gandhipuram — affordable and professional!", name:"Priya S.", branch:"BE EEE – CIT Coimbatore" },
  { stars:5, text:`FPGA ALU design with Xilinx Vivado at CODEX PROJECT Coimbatore — complete Verilog code, FPGA board implementation, simulation waveforms, and full IEEE ${YEAR} documentation. The team explained every concept — I aced my viva!`, name:"Ravi M.", branch:"BE ECE – Sri Krishna" },
  { stars:5, text:"Arduino-based biomedical project (SpO2 + ECG monitor) completed here. Real sensor components, Bluetooth mobile app, complete IEEE report and PPT — everything in one week! Most affordable embedded project center I visited in Coimbatore.", name:"Divya K.", branch:"ME Biomedical – KGISL" },
  { stars:5, text:`My Raspberry Pi face detection embedded project was brilliantly done at CODEX PROJECT. Python + OpenCV + real-time demo — the internship certificate was a bonus. Best Raspberry Pi project center in Coimbatore ${YEAR}!`, name:"Karthik V.", branch:"BE ECE – Karpagam" },
  { stars:5, text:"Industrial automation embedded project — PLC + STM32 + SCADA interface. CODEX PROJECT's team was excellent, they even supported IEEE paper publication guidance. Best center for advanced embedded topics in Coimbatore!", name:"Meena V.", branch:"ME Embedded Systems – SNS" },
];

const COLLEGES = [
  "PSG Tech","CIT","KMEA","Sri Krishna","KPR College","Karpagam","SNS College",
  "KGISL","RVS College","Rathinam","Hindusthan","Sri Eshwar","Dr NGP","Bannari Amman",
  "Excel Engineering","Nehru College","JCT","EASA","Info Institute","Sengunthar",
];

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
const EmbeddedProjects = () => {
  const [openFaq, setOpenFaq]           = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRefs = useRef([]);

  const filteredServices = activeFilter
    ? services.filter(s => s.fk.some(k => activeFilter.toLowerCase().includes(k.toLowerCase())))
    : services;

  const filteredIdeas = activeFilter
    ? projectIdeas.filter(p => {
        const keys = ideaTagToFilter[p.tag] || ["Embedded"];
        return keys.some(k => activeFilter.toLowerCase().includes(k.toLowerCase()));
      })
    : projectIdeas;

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("ep-in"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
  const scrollToSvc = () => document.getElementById("ep-svc-section")?.scrollIntoView({ behavior:"smooth", block:"start" });

  return (
    <div className="ep-page">
      <Helmet>
        <title>{`Best Embedded Project Center in Coimbatore ${YEAR} | CODEX PROJECT`}</title>
        <meta
          name="description"
          content={`CODEX PROJECT - Best embedded project center in Gandhipuram, Coimbatore. 8051, ARM, PIC, Arduino, FPGA/VLSI embedded final year projects ${YEAR}. Free internship certificate. Call ${PHONE}.`}
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={`Best Embedded Project Center in Coimbatore ${YEAR} | CODEX PROJECT`} />
        <meta property="og:description" content={`8051, ARM, PIC, Arduino, FPGA/VLSI embedded final year projects in Coimbatore. Free internship certificate. Call ${PHONE}.`} />
        <meta property="og:url" content={PAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify(embeddedSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="ep-hero" aria-labelledby="ep-h1">
        <div className="ep-hero-bg">
          <div className="ep-grid-bg"/>
          <div className="ep-orb ep-orb1"/>
          <div className="ep-orb ep-orb2"/>
        </div>
        <div className="ep-container">
          <nav className="ep-bc" aria-label="breadcrumb">
            <ol>
              <li><a href="/">Home</a></li>
              <span>›</span>
              <li aria-current="page">Embedded Projects {YEAR}</li>
            </ol>
          </nav>

          <div className="ep-hero-chip"><span className="ep-chip-dot"/>IEEE {YEAR} — 80+ Embedded Project Titles</div>

          <h1 id="ep-h1" className="ep-h1">
            Best Embedded Project Center<br/>
            in Coimbatore <span className="ep-grad">| CODEX PROJECT</span>
          </h1>
          <p className="ep-hero-sub">
            Top-rated 8051, ARM, PIC, Arduino, Raspberry Pi & FPGA embedded project center — Gandhipuram, Coimbatore
          </p>
          <p className="ep-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best embedded project center in Coimbatore {YEAR}</strong>, providing real-time <strong>8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi, STM32, and FPGA/VLSI embedded system final year projects</strong> — with real hardware, Keil/MPLAB programming, Proteus simulation, IEEE {YEAR} documentation, viva preparation, and <strong>free internship certificate</strong> at the most affordable pricing in Coimbatore.
          </p>
          <p className="ep-hero-addr">📍 {ADDR}</p>
          <p className="ep-hero-serve">
            Serving BE ECE, EEE, EIE, Instrumentation, ME Embedded, & Diploma students from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL & all Coimbatore colleges
          </p>

          <div className="ep-trust-row">
            {["IEEE 2026-27","Real Hardware Models","Keil & Proteus","FPGA / VLSI","PCB Layout","Free Internship Cert","Complete Documentation","Viva Coaching"].map(t=>(
              <span key={t} className="ep-trust-pill">✔ {t}</span>
            ))}
          </div>

          <div className="ep-hero-btns">
            <a href={`tel:+91${PHONE}`}     className="ep-btn ep-btn-gold">📞 Call Embedded Line: {PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="ep-btn ep-btn-wa">💬 WhatsApp Us</a>
            <button className="ep-btn ep-btn-outline" onClick={scrollToSvc}>Explore Platforms ↓</button>
          </div>
        </div>
      </section>

      <div className="ep-container ep-main">

        {/* ══ FILTER CLOUD ════════════════════════════════ */}
        <section className="ep-filter-sec ep-reveal" ref={addRef}>
          <div className="ep-filter-hdr">
            <h2 className="ep-filter-title">Browse by Platform — Coimbatore {YEAR}</h2>
            {activeFilter && (
              <button className="ep-filter-clear" onClick={()=>setActiveFilter(null)}>✕ Show All</button>
            )}
          </div>
          <div className="ep-filter-chips">
            {FILTER_KEYWORDS.map(tag=>(
              <button key={tag}
                className={`ep-filter-chip ${activeFilter===tag?"ep-chip-active":""}`}
                onClick={()=>{ setActiveFilter(activeFilter===tag?null:tag); scrollToSvc(); }}
                aria-pressed={activeFilter===tag}>
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <p className="ep-filter-note">Showing: <strong>{activeFilter}</strong> — {filteredServices.length} service{filteredServices.length!==1?"s":""} found</p>
          )}
        </section>

        {/* ══ SERVICES ════════════════════════════════════ */}
        <section id="ep-svc-section" className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-svc-h2">
          <h2 id="ep-svc-h2" className="ep-sec-title">
            Embedded System Project Services — CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <p className="ep-sec-sub">
            Complete embedded project support across all microcontroller platforms — real hardware, simulation, firmware coding, and IEEE {YEAR} documentation included
          </p>
          <div className="ep-services-grid">
            {(filteredServices.length>0?filteredServices:services).map((s,i)=>(
              <article key={i} className="ep-svc-card"
                style={{"--sc":s.accent,"--sbg":s.color}}>
                <div className="ep-svc-bar"/>
                <div className="ep-svc-icon">{s.icon}</div>
                <h3 className="ep-svc-title">{s.title}</h3>
                <p className="ep-svc-desc">{s.desc}</p>
                <a href={`${WA}?text=Hi!%20I%20need%20${encodeURIComponent(s.title)}%20embedded%20project%20${YEAR}`}
                   target="_blank" rel="noopener noreferrer" className="ep-svc-cta">
                  💬 WhatsApp for {s.title.split(" ")[0]} Project
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ══ PLATFORMS & TOOLS ════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-hw-h2">
          <h2 id="ep-hw-h2" className="ep-sec-title">
            Microcontroller Platforms & Tools — CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <div className="ep-platforms-grid">
            <div className="ep-platform-card">
              <h3 className="ep-platform-title">🔲 Microcontroller Platforms</h3>
              <div className="ep-badge-wrap">
                {microcontrollers.map((m,i)=>(
                  <span key={i} className="ep-hw-chip" style={{"--hc":m.color}}>{m.name}</span>
                ))}
              </div>
            </div>
            <div className="ep-platform-card">
              <h3 className="ep-platform-title">🛠️ IDEs & Design Tools</h3>
              <div className="ep-badge-wrap">
                {tools.map((t,i)=>(
                  <span key={i} className="ep-hw-chip" style={{"--hc":t.color}}>{t.name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROJECT IDEAS ════════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-ideas-h2">
          <h2 id="ep-ideas-h2" className="ep-sec-title">
            Embedded System Project Ideas — Coimbatore {YEAR}
          </h2>
          <p className="ep-sec-sub">
            Latest IEEE {YEAR} embedded system project topics with real hardware for ECE, EEE, EIE & Diploma students in Coimbatore
          </p>
          <div className="ep-ideas-grid">
            {(filteredIdeas.length>0?filteredIdeas:projectIdeas).map((p,i)=>(
              <div key={i} className="ep-idea-card"
                style={{"--ibg":tagColors[p.tag]||"#f0f4ff"}}>
                <p className="ep-idea-name">{p.name}</p>
                <span className="ep-idea-tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══════════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-why-h2">
          <h2 id="ep-why-h2" className="ep-sec-title">
            Why CODEX PROJECT is the Best Embedded Project Center in Coimbatore {YEAR}
          </h2>
          <p className="ep-sec-sub">Trusted by 500+ ECE, EEE & EIE students across Coimbatore for real hardware embedded projects with IEEE documentation</p>
          <div className="ep-why-grid">
            {WHY.map((w,i)=>(
              <div key={i} className="ep-why-card" style={{"--wi":`${i*0.06}s`}}>
                <span className="ep-why-icon">{w.icon}</span>
                <h3 className="ep-why-title">{w.t}</h3>
                <p className="ep-why-desc">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ COLLEGES SERVED ══════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-college-h2">
          <h2 id="ep-college-h2" className="ep-sec-title">
            Colleges We Serve — Embedded Projects Coimbatore {YEAR}
          </h2>
          <p className="ep-sec-sub">ECE, EEE, EIE students from these colleges regularly use CODEX PROJECT for their embedded final year projects</p>
          <div className="ep-college-grid">
            {COLLEGES.map(c=>(
              <span key={c} className="ep-college-tag">{c}</span>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-rv-h2">
          <h2 id="ep-rv-h2" className="ep-sec-title">
            Student Reviews — Embedded Project Center Coimbatore {YEAR}
          </h2>
          <p className="ep-sec-sub">What ECE, EEE & EIE students say about CODEX PROJECT's embedded final year project support</p>
          <div className="ep-reviews-grid">
            {REVIEWS.map((r,i)=>(
              <div key={i} className="ep-rv-card">
                <div className="ep-rv-stars">{"⭐".repeat(r.stars)}</div>
                <p className="ep-rv-text">"{r.text}"</p>
                <div className="ep-rv-author">
                  <div className="ep-rv-av">{r.name[0]}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span className="ep-rv-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-faq-h2">
          <h2 id="ep-faq-h2" className="ep-sec-title">
            FAQ — Embedded Project Center Coimbatore {YEAR}
          </h2>
          <div className="ep-faq-list">
            {faqSchema.mainEntity.map((item,i)=>(
              <div key={i} className={`ep-faq-item ${openFaq===i?"ep-faq-open":""}`}
                onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                <div className="ep-faq-q">
                  <h3 className="ep-faq-qtext">{item.name}</h3>
                  <span className="ep-faq-icon">{openFaq===i?"−":"+"}</span>
                </div>
                <div className="ep-faq-body">
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT ══════════════════════════════════ */}
        <section className="ep-section ep-seo-block ep-reveal" ref={addRef} aria-labelledby="ep-seo-h2">
          <h2 id="ep-seo-h2" className="ep-seo-title">
            Embedded System Project Center in Coimbatore — Complete Guide {YEAR}
          </h2>
          <p>
            Searching for the <strong>best embedded project center in Coimbatore</strong>? CODEX PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>, is your complete embedded systems final year project solution for {YEAR}. We specialize in <strong>8051 microcontroller projects</strong>, <strong>ARM Cortex embedded projects</strong>, <strong>PIC and AVR projects</strong>, <strong>Arduino projects</strong>, <strong>Raspberry Pi projects</strong>, <strong>STM32 advanced embedded projects</strong>, and <strong>FPGA/VLSI design projects</strong> — all at the most affordable pricing in Coimbatore.
          </p>
          <p>
            Every embedded project at CODEX PROJECT includes: real hardware with all components and sensors, Proteus circuit simulation, Keil/MPLAB/STM32CubeIDE firmware coding, PCB layout and circuit diagram, IEEE {YEAR} format project report (50-80 pages), PPT for reviews, 50+ viva Q&A preparation, and <strong>FREE internship certificate</strong>. We serve <strong>BE ECE students</strong>, <strong>BE EEE students</strong>, <strong>EIE and Instrumentation students</strong>, <strong>ME Embedded Systems students</strong>, and <strong>Diploma students</strong> from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, and all Coimbatore colleges.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore</strong> for a free consultation on your embedded system final year project topic and pricing. We are the <strong>most trusted and affordable embedded project center in Coimbatore {YEAR}</strong> — 4.9★ Google rating, 500+ embedded projects delivered successfully.
          </p>
        </section>

        {/* ══ KEYWORD CLOUD ════════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-label="Embedded project searches Coimbatore">
          <div className="ep-kw-section">
            <h2 className="ep-kw-title">Popular Embedded Project Searches — Coimbatore {YEAR}</h2>
            <div className="ep-kw-grid">
              {KEYWORD_TAGS.map(([label,href])=>(
                <a key={label} href={href} className="ep-kw-tag" aria-label={label}>{label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ RELATED SERVICES ════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-related-h2">
          <h2 id="ep-related-h2" className="ep-sec-title" style={{fontSize:"1.4rem"}}>
            Explore Other Project Domains at CODEX PROJECT
          </h2>
          <div className="ep-badge-wrap" style={{marginTop:"12px"}}>
            {RELATED_SERVICES.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="ep-hw-chip"
                style={{ "--hc": "#f0f4ff", textDecoration: "none", cursor: "pointer" }}
                aria-label={r.label}
              >
                {r.icon} {r.label}
              </a>
            ))}
          </div>
        </section>

        {/* ══ LOCATION ═════════════════════════════════════ */}
        <section className="ep-section ep-reveal" ref={addRef} aria-labelledby="ep-loc-h2">
          <h2 id="ep-loc-h2" className="ep-sec-title">
            Visit CODEX PROJECT — Embedded Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="ep-loc-addr">📍 <strong>{ADDR}</strong></p>
          <p className="ep-loc-desc">Open Monday–Saturday, 9 AM – 8 PM. Accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.</p>
          <div className="ep-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%" height="380" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`CODEX PROJECT Embedded Project Center Gandhipuram Coimbatore ${YEAR}`}/>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════ */}
        <section className="ep-cta ep-reveal" ref={addRef} aria-labelledby="ep-cta-h2">
          <div className="ep-cta-blob"/>
          <div className="ep-cta-inner">
            <h2 id="ep-cta-h2" className="ep-cta-title">
              Start Your Embedded Final Year Project Today<br/>
              <span className="ep-grad">CODEX PROJECT — Coimbatore {YEAR}</span>
            </h2>
            <p className="ep-cta-sub">Join 500+ ECE, EEE & EIE students who completed their embedded projects with CODEX PROJECT.</p>
            <p className="ep-cta-addr">📍 {ADDR}</p>
            <p className="ep-cta-tags">8051 · ARM Cortex · PIC · Arduino · Raspberry Pi · FPGA · STM32 · Keil · Proteus · IEEE {YEAR}</p>
            <div className="ep-cta-btns">
              <a href={`tel:+91${PHONE}`} className="ep-btn ep-btn-gold">📞 Call: {PHONE}</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="ep-btn ep-btn-wa">💬 WhatsApp Us</a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="ep-btn ep-btn-outline-light">⭐ Review on Google</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EmbeddedProjects;
