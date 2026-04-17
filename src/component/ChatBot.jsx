import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

// ─── Quick Reply Data ─────────────────────────────────────────────────────────
const INITIAL_OPTIONS = [
  { id: "software", icon: "💻", label: "Software / AI Projects", sub: "Python, MERN, ML, Flutter" },
  { id: "iot", icon: "📡", label: "IoT Projects", sub: "Arduino, Raspberry Pi, ESP32" },
  { id: "embedded", icon: "🔲", label: "Embedded Systems", sub: "8051, ARM, PIC, FPGA" },
  { id: "mechanical", icon: "⚙️", label: "Mechanical Projects", sub: "Fabrication, CAD, Robotics" },
  { id: "internship", icon: "🎓", label: "Internship Training", sub: "Live project + Certificate" },
  { id: "pricing", icon: "💰", label: "Project Cost / Pricing", sub: "Affordable, no hidden charges" },
  { id: "ieee", icon: "📄", label: "IEEE 2024-25 Projects", sub: "Base paper implementation" },
  { id: "location", icon: "📍", label: "Location & Timings", sub: "Gandhipuram, Coimbatore" },
  { id: "contact", icon: "📞", label: "Contact / Call Us", sub: "Free consultation" },
];

const RESPONSES = {
  software: {
    text: "We offer real-time Software & AI projects including:\n\n🐍 Python, Django, Flask\n🤖 AI, ML, Deep Learning, NLP\n🌐 MERN Stack (MongoDB, Express, React, Node.js)\n📱 Flutter, Android, React Native\n☕ Java Spring Boot, .NET, PHP Laravel\n\nAll projects include source code, IEEE documentation, and live deployment support!",
    options: ["pricing", "ieee", "contact"],
  },
  iot: {
    text: "Our IoT projects include real hardware + cloud integration:\n\n🔌 Arduino UNO / Mega\n🍓 Raspberry Pi 4\n📶 NodeMCU ESP8266 / ESP32\n☁️ AWS IoT, Firebase, ThingSpeak, Blynk\n\n✅ Smart Agriculture, Healthcare, Home Automation, Smart City projects — all with IEEE docs & viva support!",
    options: ["pricing", "embedded", "contact"],
  },
  embedded: {
    text: "We deliver complete embedded system projects:\n\n🔲 8051 (AT89C51)\n💪 ARM Cortex M3/M4 (STM32)\n⚡ PIC16F / PIC18F, AVR ATmega\n🏗️ FPGA – Xilinx Vivado, Verilog/VHDL\n\n🛠️ Tools: Keil uVision, Proteus Simulation, MPLAB\n📋 Real PCB circuit + IEEE report + viva prep!",
    options: ["pricing", "iot", "contact"],
  },
  mechanical: {
    text: "Our Mechanical projects cover:\n\n🔧 Fabrication – real working models\n🤖 Robotics & Automation\n🖥️ CAD/CAM – SolidWorks, ANSYS, AutoCAD\n⚙️ Mechatronics & PLC Systems\n🚗 Automobile Engineering\n☀️ Renewable Energy Systems\n\nAll projects include IEEE report, PPT, and viva support!",
    options: ["pricing", "ieee", "contact"],
  },
  internship: {
    text: "🎓 CODEX PROJECT Internship Program:\n\n✅ Summer & Semester internships\n✅ Live project experience\n✅ Verified internship certificate\n✅ Python, AI, Web Dev, IoT training\n✅ Placement guidance & resume support\n\n📞 Call 85259 99002 to enroll now!",
    options: ["contact", "pricing", "location"],
  },
  pricing: {
    text: "💰 We offer the MOST AFFORDABLE pricing in Coimbatore!\n\nSoftware projects — most budget-friendly\nIoT / Embedded — hardware + docs included\nMechanical — fabrication + report included\n\n✅ Zero hidden charges\n✅ EMI / Installment payment available\n✅ Free consultation before any commitment\n\n📞 Call for a free custom quote!",
    options: ["contact", "software", "iot"],
  },
  ieee: {
    text: "📄 IEEE 2024-25 Projects at CODEX PROJECT:\n\n✅ 500+ IEEE base papers across all domains\n✅ AI/ML, IoT, Embedded, Web, Mechanical\n✅ Base paper implementation + improvements\n✅ Compare results with original paper\n✅ IEEE publication support (IRJET, IJRASET)\n\nAll branches: CSE, ECE, EEE, Mechanical, MCA, BSc!",
    options: ["software", "pricing", "contact"],
  },
  location: {
    text: "📍 CODEX PROJECT Location:\n\n2nd Floor, Balaji Complex,\n288, 2nd Street, Opp. Anbu Mess,\nCross Cut Road, Gandhipuram,\nCoimbatore – 641012\n\n🕘 Working Hours:\nMonday – Saturday: 9:00 AM – 8:00 PM\n\n🚌 Easily reachable from Peelamedu, Saravanampatti, RS Puram, Singanallur!",
    options: ["contact", "pricing", "ieee"],
  },
  contact: {
    text: "📞 Contact CODEX PROJECT:\n\n📱 General Enquiry: 85259 99002\n💻 Software & AI: 85259 99022\n🔌 Embedded & IoT: 85259 99032\n📧 Email: codexproject2026@gmail.com\n💬 WhatsApp: 85259 99002\n\n✅ Free consultation available!\n✅ Call Mon–Sat, 9 AM – 8 PM",
    options: ["location", "pricing", "ieee"],
  },
};

const WELCOME_MSG = "👋 Hi! Welcome to **CODEX PROJECT** — Coimbatore's best final year project center!\n\nI'm here to help you with IEEE 2024-25 projects, internship training, and more.\n\nWhat are you looking for today? 👇";

// ─── Typing Animation Hook ────────────────────────────────────────────────────
function useTyping(text, speed = 18, active = false) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    if (!active) { setDisplayed(text); setDone(true); return; }
    setDisplayed("");
    setDone(false);
    idx.current = 0;
    const interval = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) { clearInterval(interval); setDone(true); }
    }, speed);
    return () => clearInterval(interval);
  }, [text, active, speed]);

  return { displayed, done };
}

// ─── Message Component ────────────────────────────────────────────────────────
function BotMessage({ text, isNew, onDone, options, onOption }) {
  const { displayed, done } = useTyping(text, 12, isNew);

 useEffect(() => { 
  if (done && onDone) onDone(); 
}, [done, onDone]);

  const formatted = displayed.split("\n").map((line, i) => {
    const bold = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return <p key={i} dangerouslySetInnerHTML={{ __html: bold || "&nbsp;" }} />;
  });

  return (
    <div className="cb-bot-msg-wrap">
      <div className="cb-avatar">C</div>
      <div className="cb-bot-bubble">
        <div className="cb-bot-text">{formatted}</div>
        {!done && <span className="cb-cursor" />}
        {done && options && options.length > 0 && (
          <div className="cb-quick-replies">
            {options.map((id) => {
              const opt = INITIAL_OPTIONS.find((o) => o.id === id);
              if (!opt) return null;
              return (
                <button key={id} className="cb-qr-btn" onClick={() => onOption(opt)}>
                  {opt.icon} {opt.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="cb-user-msg-wrap">
      <div className="cb-user-bubble">{text}</div>
    </div>
  );
}

function ThinkingDots() {
  return (
    <div className="cb-bot-msg-wrap">
      <div className="cb-avatar">C</div>
      <div className="cb-bot-bubble cb-thinking">
        <span /><span /><span />
      </div>
    </div>
  );
}

// ─── Main Chatbot Component ───────────────────────────────────────────────────
const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [thinking, setThinking] = useState(false);
  const [showInitOptions, setShowInitOptions] = useState(false);
  const [inputVal, setInputVal] = useState("");
 
  const [notif, setNotif] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Init welcome message on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ type: "bot", text: WELCOME_MSG, id: 0, isNew: true }]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  },  [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking, showInitOptions]);

  const handleOptionClick = (opt) => {
    setNotif(false);
    const userMsg = { type: "user", text: `${opt.icon} ${opt.label}`, id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setThinking(true);
    setShowInitOptions(false);

    setTimeout(() => {
      const resp = RESPONSES[opt.id];
      setThinking(false);
      const botMsg = {
        type: "bot",
        text: resp.text,
        id: Date.now() + 1,
        isNew: true,
        options: resp.options,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 900 + Math.random() * 400);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const val = inputVal.trim();
    if (!val) return;
    setInputVal("");
    setNotif(false);

    const userMsg = { type: "user", text: val, id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setThinking(true);

    // Simple keyword matching
    setTimeout(() => {
      const lower = val.toLowerCase();
      let key = "contact";
      if (lower.match(/python|ai|ml|mern|java|flutter|android|software|web|nlp|deep/)) key = "software";
      else if (lower.match(/iot|arduino|raspberry|nodemcu|esp32|cloud|sensor/)) key = "iot";
      else if (lower.match(/embedded|8051|arm|pic|avr|fpga|keil|proteus/)) key = "embedded";
      else if (lower.match(/mechanical|fabricat|cad|cam|robot|ansys/)) key = "mechanical";
      else if (lower.match(/intern|certificate|training/)) key = "internship";
      else if (lower.match(/price|cost|fee|afford|how much|charge/)) key = "pricing";
      else if (lower.match(/ieee|base paper|publish/)) key = "ieee";
      else if (lower.match(/location|address|where|timings|hours/)) key = "location";

      const resp = RESPONSES[key];
      setThinking(false);
      setMessages((prev) => [...prev, {
        type: "bot", text: resp.text, id: Date.now() + 1, isNew: true, options: resp.options,
      }]);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <div className="cb-launcher-wrap">
        {notif && !open && (
          <div className="cb-notif-bubble">
            💬 Hi! Need help choosing a project?
            <button className="cb-notif-close" onClick={() => setNotif(false)}>✕</button>
          </div>
        )}
        <button
          className={`cb-launcher ${open ? "cb-launcher-open" : ""}`}
          onClick={() => { setOpen((v) => !v); setNotif(false); }}
          aria-label={open ? "Close chat" : "Open CODEX PROJECT chat"}
        >
          <span className="cb-launch-icon">{open ? "✕" : "💬"}</span>
          {!open && <span className="cb-launch-label">Chat with us</span>}
        </button>
      </div>

      {/* ── Chat Window ── */}
      <div className={`cb-window ${open ? "cb-window-open" : ""}`} role="dialog" aria-label="CODEX PROJECT Chatbot">

        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-avatar">C</div>
          <div className="cb-header-info">
            <span className="cb-header-name">CODEX PROJECT</span>
            <span className="cb-header-status">
              <span className="cb-online-dot" /> Online · Final Year Project Expert
            </span>
          </div>
          <button className="cb-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        {/* Body */}
        <div className="cb-body">
          {messages.map((msg, i) => {
            if (msg.type === "user") return <UserMessage key={msg.id} text={msg.text} />;
            const isLast = i === messages.length - 1;
            return (
              <BotMessage
                key={msg.id}
                text={msg.text}
                isNew={msg.isNew && isLast}
                options={msg.options}
                onOption={handleOptionClick}
                onDone={() => {
                  if (i === 0) setShowInitOptions(true);
                  
                }}
              />
            );
          })}

          {thinking && <ThinkingDots />}

          {/* Initial options */}
          {showInitOptions && messages.length === 1 && !thinking && (
            <div className="cb-options-grid">
              {INITIAL_OPTIONS.map((opt) => (
                <button key={opt.id} className="cb-option-card" onClick={() => handleOptionClick(opt)}>
                  <span className="cb-opt-icon">{opt.icon}</span>
                  <span className="cb-opt-label">{opt.label}</span>
                  <span className="cb-opt-sub">{opt.sub}</span>
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form className="cb-input-wrap" onSubmit={handleInput}>
          <input
            ref={inputRef}
            type="text"
            className="cb-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type your question..."
            aria-label="Type your message"
          />
          <button type="submit" className="cb-send-btn" aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Footer */}
        <div className="cb-footer">
          <a href="tel:+918525999002" className="cb-footer-link">📞 85259 99002</a>
          <span className="cb-footer-dot">·</span>
          <a href="https://wa.me/918525999002" target="_blank" rel="noopener noreferrer" className="cb-footer-link">💬 WhatsApp</a>
          <span className="cb-footer-dot">·</span>
          <a href="/contact" className="cb-footer-link">📍 Visit Us</a>
        </div>
      </div>
    </>
  );
};

export default ChatBot;