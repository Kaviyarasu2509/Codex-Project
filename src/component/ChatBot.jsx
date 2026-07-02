import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ChatBot.css";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE     = "8525999002";
const PHONE_SW  = "8525999022";
const PHONE_HW  = "8525999032";
const WA_LINK   = `https://wa.me/91${PHONE}`;
const MAPS_LINK = "https://maps.app.goo.gl/edkzjFnQUKcKDnzP6";

// ─── Quick reply suggestions ──────────────────────────────────────────────────
const QUICK_REPLIES = [
  { label: "🐍 Python Projects",    value: "Tell me about Python projects" },
  { label: "☕ Java Projects",       value: "Tell me about Java projects" },
  { label: "🐘 PHP Projects",        value: "Tell me about PHP projects" },
  { label: "🤖 AI / ML Projects",    value: "Tell me about AI and Machine Learning projects" },
  { label: "📡 IoT Projects",        value: "Tell me about IoT projects" },
  { label: "🔧 Embedded Projects",   value: "Tell me about embedded projects" },
  { label: "⚙️ Mechanical Projects",  value: "Tell me about mechanical projects" },
  { label: "💰 Project Cost",        value: "What is the cost of a project?" },
  { label: "📜 Internship Cert",     value: "Do you provide internship certificate?" },
  { label: "📍 Location",            value: "Where are you located?" },
];

// ─── Local FAQ knowledge base ─────────────────────────────────────────────────
// NOTE: Order matters — more specific technology entries are checked BEFORE
// the generic "software / IoT / embedded / mechanical" fallback entries so a
// student typing an exact keyword (e.g. "php") always gets the precise answer.
const FAQ_KB = [

  // ── SOFTWARE — SPECIFIC TECHNOLOGIES ──────────────────────────────────────
  {
    patterns: ["python", "django", "flask", "fastapi", "numpy", "pandas", "scikit-learn", "scikit"],
    answer: `🐍 <b>Python Projects</b><br/>We build real-time Python final year projects using:<br/>• Django, Flask, FastAPI (web apps)<br/>• Pandas, NumPy, Matplotlib (data science)<br/>• Scikit-learn, TensorFlow, PyTorch (AI/ML)<br/><br/>✅ Complete source code + IEEE ${`2025-26`} documentation + free internship certificate<br/><br/>📞 Software line: <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us</a>`,
  },
  {
    patterns: ["ai", "artificial intelligence", "machine learning", "ml"],
    answer: `🤖 <b>AI & Machine Learning Projects</b><br/>IEEE 2025-26 base paper AI/ML final year projects using:<br/>• TensorFlow, PyTorch, Keras, Scikit-learn<br/>• OpenCV, YOLO v8, Hugging Face<br/>• Deep Learning, NLP, Computer Vision, Generative AI<br/><br/>Popular topics: Face Recognition, Fake News Detection, Brain Tumor Detection, Chatbots.<br/><br/>📞 Software line: <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us</a>`,
  },
  {
    patterns: ["deep learning", "nlp", "cnn", "rnn", "lstm", "bert", "gpt", "computer vision", "opencv", "yolo", "transformer"],
    answer: `🧠 <b>Deep Learning & NLP Projects</b><br/>Advanced final year projects using:<br/>• CNN, RNN, LSTM architectures<br/>• BERT, GPT API, Transformer models<br/>• Sentiment Analysis, Text Summarization, Chatbots<br/>• Medical Image Segmentation, Object Detection<br/><br/>All with real dataset training + IEEE 2025-26 documentation.<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: ["mern", "react", "node", "express", "mongodb", "javascript"],
    answer: `🌐 <b>MERN Stack Projects</b><br/>Full-stack web application final year projects using:<br/>• MongoDB, Express.js, React.js, Node.js<br/>• JWT authentication, REST API, Socket.io real-time<br/>• Razorpay payment gateway integration<br/>• Live deployment on Vercel / Netlify<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us</a>`,
  },
  {
    patterns: ["java", "spring boot", "spring", "hibernate"],
    answer: `☕ <b>Java & Spring Boot Projects</b><br/>Enterprise Java final year projects using:<br/>• Spring Boot, Hibernate, MySQL<br/>• REST API, Microservices architecture<br/>• Maven build & Postman API testing<br/><br/>Great for BE CSE/IT and MCA students who want an enterprise-grade project.<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: [".net", "asp.net", "dotnet", "c#", "blazor"],
    answer: `🔷 <b>.NET & C# Projects</b><br/>Microsoft stack final year projects using:<br/>• ASP.NET Core, MVC, Web API<br/>• C#, Entity Framework, LINQ<br/>• Blazor, Azure deployment<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: ["php", "laravel", "codeigniter"],
    answer: `🐘 <b>PHP & Laravel Projects</b><br/>We build complete PHP final year projects using:<br/>• Core PHP, Laravel MVC, CodeIgniter<br/>• MySQL database design<br/>• Bootstrap, jQuery front-end<br/>• REST API integration<br/><br/>Ideal for BE, BSc, and Diploma students — includes full source code, IEEE documentation, PPT, and live hosting demo.<br/><br/>📞 Software line: <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us for PHP Project</a>`,
  },
  {
    patterns: ["android", "kotlin", "android studio", "sqlite"],
    answer: `📱 <b>Android App Projects</b><br/>Native Android final year projects using:<br/>• Android Studio, Java / Kotlin<br/>• Firebase, SQLite, REST API<br/>• Google Maps, GPS, Sensor integration<br/>• Play Store deployment support<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: ["flutter", "dart", "react native"],
    answer: `🦋 <b>Flutter & React Native Projects</b><br/>Cross-platform mobile app final year projects using:<br/>• Flutter (Dart), React Native<br/>• Firebase backend, Provider/GetX/Bloc state management<br/>• Live deployment + demo APK<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us</a>`,
  },
  {
    patterns: ["data science", "power bi", "tableau", "seaborn", "eda"],
    answer: `📊 <b>Data Science Projects</b><br/>Data analysis & visualization final year projects using:<br/>• Pandas, Matplotlib, Seaborn<br/>• Power BI / Tableau dashboards<br/>• SQL, Predictive Modeling, EDA<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: ["cloud", "aws", "azure", "docker", "kubernetes", "devops"],
    answer: `☁️ <b>Cloud & DevOps Projects</b><br/>Cloud computing final year projects using:<br/>• AWS, Microsoft Azure<br/>• Docker, Kubernetes, CI/CD pipelines<br/>• Serverless architecture, Terraform<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: ["cybersecurity", "blockchain", "ethereum", "solidity", "hacking", "network security", "encryption"],
    answer: `🔒 <b>Cybersecurity & Blockchain Projects</b><br/>Advanced security final year projects using:<br/>• Network Security, Encryption, Ethical Hacking<br/>• Blockchain — Solidity, Ethereum, Web3, IPFS<br/>• Intrusion Detection using Machine Learning<br/><br/>📞 <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },
  {
    patterns: ["software", "web development", "final year project", "cse project", "it project"],
    answer: `💻 <b>Software & AI Projects</b><br/>We offer final year projects in:<br/>• Python, AI, Machine Learning, Deep Learning<br/>• MERN Stack, React.js, Node.js<br/>• Java, Spring Boot, .NET, PHP, Laravel<br/>• Android, Flutter, React Native<br/>• Data Science, Blockchain, Cloud<br/><br/>Type a specific technology (e.g. "PHP", "Python", "AI") and I'll tell you more!<br/><br/>📞 Software line: <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a>`,
  },

  // ── IoT — SPECIFIC HARDWARE / PLATFORMS ───────────────────────────────────
  {
    patterns: ["arduino"],
    answer: `🔌 <b>Arduino Projects</b><br/>Arduino UNO / Mega / Nano based IoT & embedded final year projects — sensor automation, home automation, robotics, and safety-alert systems.<br/><br/>Includes real hardware, source code, circuit diagram & IEEE documentation.<br/><br/>📞 IoT/Embedded line: <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["raspberry", "raspberry pi"],
    answer: `🍓 <b>Raspberry Pi Projects</b><br/>Raspberry Pi 4 / Zero based projects — Edge AI with YOLO v8, face detection, real-time video processing, Linux-based embedded control.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["esp32", "nodemcu", "esp8266"],
    answer: `📶 <b>ESP32 / NodeMCU Projects</b><br/>WiFi-enabled IoT projects using ESP32, ESP32-CAM, NodeMCU ESP8266 — connected to Firebase / Blynk / ThingSpeak for real-time dashboards & mobile app control.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["smart home", "home automation"],
    answer: `🏠 <b>Smart Home Automation Projects</b><br/>Voice-controlled & app-controlled home automation using NodeMCU, ESP32, Raspberry Pi with Blynk / Firebase.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["thingspeak", "blynk", "aws iot", "firebase"],
    answer: `☁️ <b>Cloud IoT Projects</b><br/>We integrate AWS IoT Core, Google Firebase, ThingSpeak, and Blynk IoT for real-time cloud dashboards and mobile app monitoring.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["iot", "internet of things"],
    answer: `📡 <b>IoT Projects</b><br/>Best IoT project center in Coimbatore!<br/>• Arduino, Raspberry Pi, NodeMCU, ESP32<br/>• AWS IoT, Firebase, ThingSpeak, Blynk<br/>• Smart Home, Agriculture, Healthcare IoT<br/>• Industrial IoT, AI + Edge IoT<br/><br/>Type a keyword like "Arduino" or "ESP32" for more details!<br/><br/>📞 IoT/Embedded line: <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },

  // ── EMBEDDED — SPECIFIC PLATFORMS ─────────────────────────────────────────
  {
    patterns: ["8051", "at89c51", "at89s52"],
    answer: `🔲 <b>8051 Microcontroller Projects</b><br/>Classic 8051 (AT89C51/AT89S52) based embedded final year projects using Keil IDE + Proteus simulation + real hardware.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["arm cortex", "arm", "stm32", "lpc2148"],
    answer: `💪 <b>ARM Cortex / STM32 Projects</b><br/>ARM Cortex M3/M4, STM32 (F1/F4/H7), LPC2148 based embedded projects with STM32CubeIDE — motor control, GPS/GSM tracking, industrial automation.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["pic", "avr", "mplab", "atmega"],
    answer: `⚡ <b>PIC & AVR Projects</b><br/>PIC16F/18F with MPLAB IDE, AVR ATmega328 with AVR Studio — digital meters, thermometers, and automation controllers.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["fpga", "vlsi", "verilog", "vhdl", "xilinx"],
    answer: `🏗️ <b>FPGA & VLSI Projects</b><br/>Xilinx Vivado/ISE, Altera Quartus based FPGA projects using Verilog/VHDL — ALU design, image processing, digital communication.<br/><br/>📞 <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },
  {
    patterns: ["embedded", "keil", "proteus", "microcontroller"],
    answer: `🔧 <b>Embedded Projects</b><br/>Best embedded project center in Coimbatore!<br/>• 8051, ARM Cortex, PIC, AVR, STM32<br/>• Arduino, Raspberry Pi, FPGA/VLSI<br/>• Keil, Proteus, MPLAB, PCB design<br/>• Robotics, Automation, Biomedical<br/><br/>Type a keyword like "8051" or "FPGA" for more details!<br/><br/>📞 Embedded line: <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a>`,
  },

  // ── MECHANICAL — SPECIFIC TOPICS ──────────────────────────────────────────
  {
    patterns: ["solidworks", "catia", "autocad", "cad design", "cad"],
    answer: `📐 <b>CAD Design Projects</b><br/>Mechanical design & modeling final year projects using SolidWorks, CATIA, and AutoCAD — component design, assembly modeling, drafting.<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["ansys", "simulation", "fea", "cfd"],
    answer: `🧪 <b>ANSYS / Simulation Projects</b><br/>Finite Element Analysis (FEA) and CFD simulation final year projects using ANSYS — stress analysis, thermal analysis, fluid flow simulation.<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["robotics", "automation", "mechatronics"],
    answer: `🤖 <b>Robotics, Automation & Mechatronics</b><br/>Robotic arm, automated conveyor systems, mechatronic control projects combining mechanical design with sensors & PLC.<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["automobile", "vehicle design"],
    answer: `🚗 <b>Automobile Engineering Projects</b><br/>Vehicle design, braking systems, suspension analysis, and automobile performance final year projects.<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["renewable", "solar energy", "wind energy"],
    answer: `☀️ <b>Renewable Energy Projects</b><br/>Solar and wind energy based mechanical final year projects — solar tracking systems, hybrid energy setups, MPPT design.<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["mechanical", "fabrication", "hydraulic", "pneumatic"],
    answer: `⚙️ <b>Mechanical Projects</b><br/>Best mechanical project center in Coimbatore!<br/>• Fabrication, Hydraulic, Pneumatic systems<br/>• SolidWorks, ANSYS, CATIA, AutoCAD<br/>• Robotics, Automation, Mechatronics<br/>• Automobile, Renewable Energy<br/><br/>Type a keyword like "SolidWorks" or "Robotics" for more details!<br/><br/>📞 General: <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },

  // ── GENERAL INFO ───────────────────────────────────────────────────────────
  {
    patterns: ["cost", "price", "fee", "charge", "affordable", "cheap", "how much", "rate", "pricing", "budget"],
    answer: `💰 <b>Project Pricing</b><br/>CODEX PROJECT offers the <b>lowest project cost in Coimbatore</b>!<br/><br/>✅ Zero hidden charges<br/>✅ EMI available<br/>✅ All inclusive — hardware/code + docs + viva prep<br/><br/>Call for a <b>free quote</b>:<br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us</a>`,
  },
  {
    patterns: ["internship", "certificate", "intern", "training", "placement"],
    answer: `📜 <b>Internship Certificate</b><br/>Yes! Every project includes a <b>FREE internship certificate</b>!<br/><br/>✅ Accepted by all Coimbatore colleges<br/>✅ Live project experience<br/>✅ Valid for placement & higher studies<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["location", "address", "where", "gandhipuram", "coimbatore", "how to reach", "directions", "map"],
    answer: `📍 <b>Our Location</b><br/>2nd Floor, Balaji Complex<br/>288, 2nd Street, Cross Cut Road<br/>Gandhipuram, Coimbatore – 641012<br/><br/>🕘 Mon–Sat: 9 AM – 8 PM<br/><br/><a href="${MAPS_LINK}" target="_blank">📍 Open in Google Maps</a>`,
  },
  {
    patterns: ["contact", "call", "phone", "number", "reach", "whatsapp", "enquiry", "enquire"],
    answer: `📞 <b>Contact CODEX PROJECT</b><br/><br/>General: <a href="tel:+91${PHONE}">${PHONE}</a><br/>Software/AI: <a href="tel:+91${PHONE_SW}">${PHONE_SW}</a><br/>Embedded/IoT: <a href="tel:+91${PHONE_HW}">${PHONE_HW}</a><br/><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us Now</a><br/>📧 codexproject2026@gmail.com`,
  },
  {
    patterns: ["viva", "documentation", "doc", "report", "ppt", "ieee", "paper", "review"],
    answer: `📋 <b>Documentation & Viva Support</b><br/><br/>Every project includes:<br/>• IEEE 2025-26 format project report<br/>• PPT for all reviews<br/>• Circuit diagram / UML / ER diagram<br/>• 50+ mock viva Q&A coaching<br/>• Synopsis & abstract<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["college", "psg", "cit", "kpr", "karpagam", "sns", "kgisl", "srec", "student", "be", "me", "mca", "bsc", "diploma"],
    answer: `🎓 <b>Students We Serve</b><br/><br/>✅ BE, B.Tech (CSE, IT, ECE, EEE, Mech)<br/>✅ ME, M.Tech (all branches)<br/>✅ MCA, BSc CS, BCA<br/>✅ Diploma students<br/><br/>Colleges: PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL & 20+ more!<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["time", "delivery", "day", "fast", "quick", "urgent", "same day", "how long", "when"],
    answer: `⚡ <b>Project Delivery</b><br/><br/>✅ Same day delivery available<br/>✅ Fast-track for urgent requests<br/>✅ WhatsApp updates throughout<br/><br/>For urgent projects:<br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us Now</a><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a>`,
  },
  {
    patterns: ["hi", "hello", "hey", "vanakkam", "good morning", "good afternoon", "good evening"],
    answer: `👋 Hi there! Great to hear from you. I'm <b>CodexBot</b> — ask me about any technology (Python, PHP, AI, IoT, Embedded, Mechanical...) or tap a quick option below! 😊`,
  },
];

// ─── Utility: escape regex special characters ─────────────────────────────────
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// ─── Utility: precise keyword matching (word-boundary aware) ──────────────────
const matchFAQ = (text) => {
  const lower = text.toLowerCase();
  for (const item of FAQ_KB) {
    const hit = item.patterns.some((p) => {
      // Pure alphanumeric single-word patterns use strict word-boundary matching
      // so short keywords like "ai" don't misfire inside words like "explain".
      if (/^[a-z0-9]+$/i.test(p)) {
        return new RegExp(`\\b${escapeRegExp(p)}\\b`, "i").test(lower);
      }
      // Multi-word or punctuated patterns (e.g. ".net", "smart home") use includes.
      return lower.includes(p.toLowerCase());
    });
    if (hit) return item.answer;
  }
  return null;
};

// ─── Utility: detect touch/mobile devices to avoid auto-popping the keyboard ──
const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (("ontouchstart" in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));

const WELCOME_MSG = {
  id: 0,
  role: "bot",
  html: `👋 Hi! I'm <b>CodexBot</b> — your CODEX PROJECT assistant!<br/><br/>I can help you with:<br/>• Final year project info (Python, PHP, Java, AI, MERN, IoT, Embedded, Mechanical...)<br/>• Pricing & packages<br/>• Location & contact<br/><br/>How can I help you today? 😊`,
  ts: Date.now(),
};

// ─── Typewriter component ──────────────────────────────────────────────────────
// Reveals an HTML string progressively like it's being typed live, while never
// splitting a tag mid-way (tags are revealed instantly, plain text char by char).
const TypewriterHTML = ({ html, speed = 10, onDone, onTick }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer;
    let index = 0;
    setDisplayed("");
    setDone(false);

    const tick = () => {
      if (cancelled) return;

      if (index >= html.length) {
        setDone(true);
        onDone && onDone();
        return;
      }

      if (html[index] === "<") {
        // Reveal the entire tag in one go so markup never renders broken.
        const close = html.indexOf(">", index);
        index = close === -1 ? html.length : close + 1;
      } else {
        // Reveal a couple of plain-text characters per tick for a natural speed.
        let steps = 0;
        while (index < html.length && html[index] !== "<" && steps < 2) {
          index++;
          steps++;
        }
      }

      setDisplayed(html.slice(0, index));
      onTick && onTick();
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, speed);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [html, speed, onDone, onTick]);

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: displayed }} />
      {!done && <span className="cb-cursor">▍</span>}
    </>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const ChatBot = () => {
  const [open,        setOpen]        = useState(false);
  const [messages,    setMessages]    = useState([WELCOME_MSG]);
  const [input,       setInput]       = useState("");
  const [typing,      setTyping]      = useState(false);
  const [showQuick,   setShowQuick]   = useState(true);
  const [unread,      setUnread]      = useState(0);
  const [minimized,   setMinimized]   = useState(false);
  const [animatingId, setAnimatingId] = useState(0); // welcome message types out on mount
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);
  const msgId     = useRef(1);

  // scroll to bottom on new messages / typing indicator
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // unread badge when closed
  useEffect(() => {
    if (!open) return;
    setUnread(0);
  }, [open]);

  // Focus input when opened — but NEVER auto-focus on touch/mobile devices,
  // since that force-opens the on-screen keyboard before the user asked for it.
  useEffect(() => {
    if (open && !minimized && !isTouchDevice()) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, minimized]);

  const addBotMessage = useCallback((html) => {
    const id = msgId.current++;
    setMessages(prev => [...prev, { id, role: "bot", html, ts: Date.now() }]);
    setAnimatingId(id);
  }, []);

  const handleSend = useCallback(async (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;

    // Add user message
    setMessages(prev => [...prev, { id: msgId.current++, role: "user", text: trimmed, ts: Date.now() }]);
    setInput("");
    setShowQuick(false);
    setTyping(true);

    // Simulate thinking delay
    await new Promise(r => setTimeout(r, 700 + Math.random() * 500));

    // Check local FAQ first
    const localAnswer = matchFAQ(trimmed);
    if (localAnswer) {
      setTyping(false);
      addBotMessage(localAnswer);
      return;
    }

    // Call Claude API for unknown queries
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: `You are CodexBot, the helpful assistant for CODEX PROJECT — the best final year project center in Gandhipuram, Coimbatore.

Key facts:
- Location: 2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012
- Phone: ${PHONE} (general), ${PHONE_SW} (software/AI), ${PHONE_HW} (embedded/IoT)
- WhatsApp: ${WA_LINK}
- Services: Software (Python, AI, ML, MERN, Java, .NET, PHP, Flutter, Android), IoT (Arduino, Raspberry Pi, ESP32), Embedded (8051, ARM, PIC, FPGA), Mechanical (Fabrication, CAD/CAM, Robotics)
- USP: Lowest price, free internship certificate, same day delivery, IEEE 2025-26 projects, viva support
- Students: BE, ME, MCA, BSc, Diploma from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL
- Hours: Mon–Sat 9AM–8PM

Respond in a friendly, concise way. Use HTML formatting (bold, line breaks) but no markdown. Keep answers under 100 words. Always end with phone number or WhatsApp link when relevant. Never make up facts.`,
          messages: [{ role: "user", content: trimmed }],
        }),
      });

      const data = await response.json();
      const botText = data.content?.[0]?.text || "I'm not sure about that. Please call us at " + PHONE + " for more info!";
      setTyping(false);
      addBotMessage(botText);
    } catch {
      setTyping(false);
      addBotMessage(`I couldn't process that right now. Please call us directly!<br/><br/>📞 <a href="tel:+91${PHONE}">${PHONE}</a><br/>💬 <a href="${WA_LINK}" target="_blank">WhatsApp Us</a>`);
    }
  }, [input, addBotMessage]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuick = (value) => {
    handleSend(value);
  };

  const toggleOpen = () => {
    if (!open) {
      setOpen(true);
      setMinimized(false);
      setUnread(0);
    } else {
      setOpen(false);
    }
  };

  const formatTime = (ts) => {
    const d = new Date(ts);
    return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* ── CHAT WINDOW ──────────────────────────────────────────── */}
      <div className={`cb-window ${open ? "cb-open" : ""} ${minimized ? "cb-minimized" : ""}`} role="dialog" aria-label="CODEX PROJECT Chat Assistant">

        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-left">
            <div className="cb-avatar">
              <span>C</span>
              <span className="cb-online-dot"/>
            </div>
            <div className="cb-header-info">
              <span className="cb-bot-name">CodexBot</span>
              <span className="cb-bot-status">CODEX PROJECT Assistant · Online</span>
            </div>
          </div>
          <div className="cb-header-actions">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cb-header-btn cb-wa-btn" aria-label="Open WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <button className="cb-header-btn" onClick={() => setMinimized(m => !m)} aria-label={minimized ? "Expand" : "Minimize"}>
              {minimized ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15"><path d="M5 15l7-7 7 7"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15"><path d="M19 9l-7 7-7-7"/></svg>
              )}
            </button>
            <button className="cb-header-btn cb-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        {!minimized && (
          <>
            <div className="cb-messages" role="log" aria-live="polite">
              {messages.map(msg => (
                <div key={msg.id} className={`cb-msg-row ${msg.role === "user" ? "cb-user-row" : "cb-bot-row"}`}>
                  {msg.role === "bot" && (
                    <div className="cb-msg-avatar"><span>C</span></div>
                  )}
                  <div className="cb-msg-wrap">
                    <div className={`cb-bubble ${msg.role === "user" ? "cb-user-bubble" : "cb-bot-bubble"}`}>
                      {msg.html ? (
                        msg.id === animatingId ? (
                          <TypewriterHTML
                            html={msg.html}
                            onDone={() => setAnimatingId(null)}
                            onTick={() => bottomRef.current?.scrollIntoView({ behavior: "auto" })}
                          />
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: msg.html }}/>
                        )
                      ) : (
                        msg.text
                      )}
                    </div>
                    <span className="cb-ts">{formatTime(msg.ts)}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator (bot "thinking") */}
              {typing && (
                <div className="cb-msg-row cb-bot-row">
                  <div className="cb-msg-avatar"><span>C</span></div>
                  <div className="cb-msg-wrap">
                    <div className="cb-bubble cb-bot-bubble cb-typing">
                      <span/><span/><span/>
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef}/>
            </div>

            {/* Quick replies */}
            {showQuick && (
              <div className="cb-quick-wrap">
                <p className="cb-quick-label">Quick questions:</p>
                <div className="cb-quick-grid">
                  {QUICK_REPLIES.map(q => (
                    <button key={q.value} className="cb-quick-btn" onClick={() => handleQuick(q.value)}>
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input — keyboard only opens when the user actually taps here */}
            <div className="cb-input-row">
              <input
                ref={inputRef}
                className="cb-input"
                type="text"
                placeholder="Ask about PHP, Python, IoT, pricing..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                maxLength={300}
                aria-label="Type your message"
              />
              <button
                className="cb-send-btn"
                onClick={() => handleSend()}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>

            {/* Footer */}
            <div className="cb-footer">
              <a href={`tel:+91${PHONE}`} className="cb-footer-link">📞 {PHONE}</a>
              <span className="cb-footer-sep">·</span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cb-footer-link">💬 WhatsApp</a>
              <span className="cb-footer-sep">·</span>
              <span className="cb-footer-brand">CODEX PROJECT</span>
            </div>
          </>
        )}
      </div>

      {/* ── FAB TOGGLE BUTTON ──────────────────────────────────────── */}
      <button
        className={`cb-fab ${open ? "cb-fab-open" : ""}`}
        onClick={toggleOpen}
        aria-label={open ? "Close chat" : "Chat with CODEX PROJECT"}
      >
        {/* Chat icon (shown when closed) */}
        <span className="cb-fab-icon-open">
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </span>
        {/* Close icon (shown when open) */}
        <span className="cb-fab-icon-close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="22" height="22">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </span>
        {/* Unread badge */}
        {unread > 0 && !open && (
          <span className="cb-badge">{unread}</span>
        )}
        {/* Desktop label — hidden on mobile via CSS */}
        <span className="cb-fab-label">Chat with us</span>
      </button>
    </>
  );
};

export default ChatBot;