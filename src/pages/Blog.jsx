import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";

// ═══════════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "CODEX PROJECT Blog – Best Final Year Project Center Coimbatore",
  "url": "https://www.codexproject.in/blog",
  "description": "CODEX PROJECT blog – Coimbatore's most detailed resource for IEEE 2024-25 final year project ideas, technology guides, and expert tips for Mechanical, IoT, Embedded, Software, AI/ML engineering students.",
  "publisher": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
    "logo": { "@type": "ImageObject", "url": "https://www.codexproject.in/logo.png" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
      "addressLocality": "Gandhipuram, Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641012",
      "addressCountry": "IN",
    },
    "telephone": "+918525999002",
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
      "name": "What are the best final year project ideas for CSE students in Coimbatore 2024-25?",
      "acceptedAnswer": { "@type": "Answer", "text": "The best final year project ideas for CSE students in Coimbatore 2024-25 include AI Chatbot using NLP, Face Recognition Attendance System, Deep Learning medical image analysis, MERN Stack e-commerce platforms, Flutter mobile apps, and YOLO v8 object detection. CODEX PROJECT at Gandhipuram, Coimbatore provides all these with IEEE documentation and viva support." }
    },
    {
      "@type": "Question",
      "name": "Which IoT projects are best for ECE students in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "Best IoT projects for ECE students in Coimbatore include Smart Irrigation using NodeMCU, IoT Health Monitoring with Raspberry Pi, Home Automation with ESP32, Smart Energy Meter, and AWS IoT cloud projects. CODEX PROJECT provides all these with real hardware, cloud integration, and complete IEEE documentation." }
    },
    {
      "@type": "Question",
      "name": "What are the trending embedded system project ideas for 2024-25?",
      "acceptedAnswer": { "@type": "Answer", "text": "Trending embedded system project ideas for 2024-25 include ARM Cortex motor control, FPGA-based VLSI designs, Raspberry Pi AI projects, GPS vehicle tracking with GSM, and RFID access control. CODEX PROJECT Coimbatore provides all these with Keil, Proteus simulation, and real hardware." }
    },
    {
      "@type": "Question",
      "name": "How to choose the best final year project in Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "To choose the best final year project in Coimbatore: (1) Pick a domain matching your branch (CSE→AI/ML, ECE→IoT/Embedded, Mech→CAD/Robotics), (2) Select IEEE 2024-25 base paper topics, (3) Check your college's hardware/software availability, (4) Visit CODEX PROJECT at Balaji Complex, Gandhipuram for a free expert consultation." }
    },
    {
      "@type": "Question",
      "name": "What is the cost of final year projects at CODEX PROJECT Coimbatore?",
      "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT offers the most affordable final year project pricing in Coimbatore. Software projects, IoT, Embedded, and Mechanical projects all have different price ranges. Call 8525999002 or visit us at 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore for a free quote." }
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// BLOG DATA — Rich content with 800-1500 word depth per post
// ═══════════════════════════════════════════════════════════════
const blogs = [
  {
    slug: "best-mechanical-project-ideas-coimbatore-2025",
    category: "Mechanical", categoryColor: "#2e7d32", categoryBg: "#e8f5e9",
    date: "March 2025", dateISO: "2025-03-10", readTime: "8 min read",
    title: "Best Mechanical Final Year Project Ideas in Coimbatore 2024-25",
    h1: "Best Mechanical Final Year Project Ideas in Coimbatore 2024-25",
    metaDesc: "Top 20+ mechanical final year project ideas with fabrication, CAD/CAM, robotics for BE Mechanical, ME & Diploma students in Coimbatore. Real working models with affordable pricing.",
    intro: "Are you a BE Mechanical, ME, or Diploma student in Coimbatore searching for the best final year project ideas for 2024-25? CODEX PROJECT at Gandhipuram, Coimbatore is the top-rated mechanical project center that has guided 500+ students to successfully complete their final year projects with real working models, complete IEEE documentation, and affordable pricing.",
    body: "Mechanical engineering final year projects in Coimbatore span a wide range of domains including fabrication, CAD/CAM design, robotics, automation, renewable energy, and automobile engineering. At CODEX PROJECT, we specialize in turning your project ideas into real, working prototypes that impress your college reviewers and help you ace your viva. Our experienced mechanical engineers guide you through every stage — from topic selection to final presentation. We use industry-standard tools like SolidWorks, ANSYS, CATIA, and AutoCAD for design projects, and our fabrication workshop handles everything from welding to CNC machining. Whether you need a simple conveyor belt automation project or a complex robotic arm with vision sensing, CODEX PROJECT Coimbatore delivers quality within your budget. Serving students from all Coimbatore engineering colleges near Peelamedu, Gandhipuram, Saravanampatti, and RS Puram.",
    points: ["Hydraulic & Pneumatic Systems – real working models", "Robotic Arm with sensors and controllers", "Solar Powered Electric Vehicle", "Mini CNC Machine with Arduino control", "CAD/ANSYS Simulation Projects", "Conveyor Belt Automation", "Agricultural spraying robot", "Electromagnetic Braking System"],
    tags: ["Fabrication Projects Coimbatore", "CAD/CAM Projects", "Robotics Coimbatore", "Automation Projects", "Mechanical BE ME Diploma"],
    highlights: ["Hydraulic Systems", "Pneumatic Robots", "Solar Vehicles", "Mini CNC", "ANSYS Projects"],
    featured: true,
  },
  {
    slug: "top-iot-projects-final-year-students-coimbatore",
    category: "IoT", categoryColor: "#00695c", categoryBg: "#e0f7fa",
    date: "March 2025", dateISO: "2025-03-05", readTime: "9 min read",
    title: "Top IoT Final Year Project Ideas for ECE Students – Coimbatore 2024-25",
    h1: "Top IoT Final Year Projects for ECE Students in Coimbatore 2024-25",
    metaDesc: "20+ IoT project ideas using Arduino, NodeMCU, ESP32, Raspberry Pi with AWS IoT & Firebase for ECE, EEE & CSE students in Coimbatore. Real hardware + cloud integration.",
    intro: "Internet of Things (IoT) is the hottest domain for final year projects in 2024-25. If you are an ECE, EEE, or CSE student in Coimbatore looking for real-time IoT final year project ideas, CODEX PROJECT is the best IoT project center in Coimbatore. Located at Balaji Complex, Gandhipuram, we provide complete IoT projects with real hardware, cloud dashboards, and mobile app control.",
    body: "IoT final year projects combine hardware (microcontrollers and sensors) with cloud platforms and mobile apps, making them highly relevant to current industry needs. At CODEX PROJECT Coimbatore, we support all major IoT platforms including Arduino UNO, NodeMCU ESP8266, ESP32, Raspberry Pi 4, and STM32. We integrate cloud platforms like AWS IoT Core, Google Firebase, ThingSpeak, Blynk, and Azure IoT Hub. Our IoT projects come with real sensor components, breadboard/PCB circuit assembly, firmware coding, cloud dashboard setup, and mobile app control. Every project includes full IEEE 2024-25 documentation, circuit diagram, code explanation, and dedicated viva preparation. We serve ECE, EEE, EIE, CSE, and IT students from all Coimbatore engineering colleges. Popular IoT domains include smart agriculture, industrial monitoring, healthcare, home automation, and environmental sensing.",
    points: ["Smart Irrigation System using NodeMCU & Firebase", "IoT Health Monitoring – heart rate, SpO2 sensors", "Home Automation with ESP32 & Blynk app", "Smart Energy Meter with cloud dashboard", "Air Quality Monitoring – MQ sensors + ThingSpeak", "Industrial IoT – SCADA integration", "GPS Vehicle Tracking with GSM", "Edge AI Object Detection using Raspberry Pi"],
    tags: ["IoT Projects Coimbatore", "Arduino Projects", "NodeMCU ESP32", "Raspberry Pi", "Cloud IoT Firebase AWS"],
    highlights: ["Smart Agriculture", "Health Monitoring", "Home Automation", "Smart City", "Edge AI IoT"],
    featured: true,
  },
  {
    slug: "best-embedded-system-projects-coimbatore-2025",
    category: "Embedded", categoryColor: "#1a237e", categoryBg: "#e8eaf6",
    date: "February 2025", dateISO: "2025-02-20", readTime: "7 min read",
    title: "Best Embedded System Project Ideas in Coimbatore 2024-25 – 8051, ARM, PIC",
    h1: "Best Embedded System Final Year Projects in Coimbatore 2024-25",
    metaDesc: "8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi embedded system project ideas for BE ECE, EEE & Diploma students in Coimbatore with Keil IDE and Proteus simulation.",
    intro: "Embedded systems projects are a cornerstone of final year engineering education for ECE, EEE, and EIE students. At CODEX PROJECT — the best embedded project center in Coimbatore — we offer complete embedded system project solutions with real hardware, Keil/MPLAB programming, Proteus simulation, and IEEE 2024-25 documentation. Located at 2nd Floor, Balaji Complex, Gandhipuram, we serve all Coimbatore engineering colleges.",
    body: "Embedded systems projects involve programming microcontrollers to perform real-time control and monitoring tasks. CODEX PROJECT Coimbatore supports all major microcontroller platforms: 8051 (AT89C51), ARM Cortex M3/M4 (STM32, LPC2148), PIC (16F/18F series), AVR (ATmega328), Arduino, and Raspberry Pi. We also support FPGA projects using Xilinx Vivado and Verilog/VHDL. Our embedded project workflow starts with circuit design in Proteus, followed by hardware assembly, firmware development in Keil/MPLAB IDE, hardware testing, and finally IEEE project report and PPT preparation. We have successfully delivered 200+ embedded projects for ECE, EEE, EIE, and Diploma students. Our lab is equipped with oscilloscopes, function generators, PCB etching equipment, and all major sensor modules. For VLSI projects, we provide FPGA boards and simulation support.",
    points: ["8051 Smart Traffic Light Controller", "ARM Cortex Motor Speed Controller", "PIC-based Digital Energy Meter", "FPGA ALU Design in Verilog", "Raspberry Pi Face Detection System", "Arduino RFID Access Control", "GSM GPS Vehicle Tracking – ARM", "Voice Controlled Home Automation"],
    tags: ["Embedded Projects Coimbatore", "8051 Projects", "ARM Cortex", "PIC Projects", "FPGA VLSI Coimbatore", "Keil Proteus"],
    highlights: ["Traffic Control", "Motor Speed Controller", "RFID Systems", "VLSI Design", "GPS Tracking"],
    featured: false,
  },
  {
    slug: "top-python-ai-ml-project-ideas-coimbatore",
    category: "AI & ML", categoryColor: "#6a1b9a", categoryBg: "#f3e5f5",
    date: "February 2025", dateISO: "2025-02-14", readTime: "10 min read",
    title: "Top Python AI & Machine Learning Final Year Project Ideas – Coimbatore 2025",
    h1: "Best Python AI and Machine Learning Final Year Projects in Coimbatore 2025",
    metaDesc: "IEEE 2024-25 Python AI & ML project ideas including Deep Learning, NLP, Computer Vision, Generative AI for BE CSE, IT, MCA & BSc students in Coimbatore with TensorFlow & PyTorch.",
    intro: "Artificial Intelligence and Machine Learning are the most sought-after domains for final year projects in 2024-25. CODEX PROJECT is the best AI and Machine Learning project center in Coimbatore, offering IEEE 2024-25 certified Python AI projects with complete source code, model training, accuracy reports, and full documentation. Call us at 8525999022 for Software & AI project enquiries.",
    body: "Python AI and Machine Learning final year projects involve developing intelligent systems that learn from data. At CODEX PROJECT Coimbatore, we specialize in Deep Learning (CNNs, RNNs, LSTMs, Transformers), Natural Language Processing (NLP), Computer Vision (OpenCV, YOLO), Generative AI (GANs, Stable Diffusion), and Data Science projects. We work with industry-standard frameworks including TensorFlow 2.x, PyTorch, Keras, Scikit-learn, and Hugging Face Transformers. Our AI projects come with trained model files, accuracy graphs, confusion matrices, and real-time demo videos. We also help with IEEE paper writing and publication support. CSE, IT, MCA, BSc CS, and BCA students from all Coimbatore engineering colleges visit CODEX PROJECT for their AI final year projects. We also provide dataset collection, preprocessing, model training on GPU, and deployment on cloud platforms like Heroku, Streamlit, and AWS.",
    points: ["Face Recognition Attendance – CNN + OpenCV", "Sentiment Analysis – BERT/Twitter dataset", "Crop Disease Detection – ResNet transfer learning", "Object Detection – YOLO v8 real-time", "Medical Image Segmentation – U-Net", "Stock Price Prediction – LSTM", "AI Chatbot – GPT API + NLP", "Fake News Detection – NLP classifier"],
    tags: ["Python Projects Coimbatore", "AI Projects Coimbatore", "Machine Learning", "Deep Learning NLP", "TensorFlow PyTorch"],
    highlights: ["Face Recognition", "Sentiment Analysis", "Medical AI", "YOLO Detection", "Text Generation"],
    featured: true,
  },
  {
    slug: "low-cost-final-year-projects-coimbatore",
    category: "Guide", categoryColor: "#e65100", categoryBg: "#fff3e0",
    date: "January 2025", dateISO: "2025-01-20", readTime: "6 min read",
    title: "Low Cost Final Year Projects in Coimbatore – Complete Pricing Guide 2025",
    h1: "Most Affordable Final Year Projects in Coimbatore – Pricing Guide 2025",
    metaDesc: "Complete guide to affordable final year project cost in Coimbatore for Mechanical, IoT, Embedded & Software domains. Compare prices, understand inclusions, find the best budget project center.",
    intro: "One of the biggest concerns for engineering students in Coimbatore is the cost of final year projects. CODEX PROJECT is the most affordable final year project center in Coimbatore, offering quality projects at student-friendly prices with zero hidden charges. All our project packages include hardware/software, documentation, and viva support.",
    body: "Understanding final year project pricing in Coimbatore is important for students. At CODEX PROJECT, we offer transparent pricing across all domains. Software projects (Python, AI, MERN, Java) typically cost less than hardware projects since no physical components are needed. IoT and Embedded projects involve hardware components, PCB assembly, and sensor modules which add to the cost. Mechanical fabrication projects involve raw materials, machining, and assembly which vary based on project complexity. All CODEX PROJECT packages include: (1) Complete source code or hardware circuit, (2) IEEE format project report, (3) Synopsis and abstract, (4) PPT for review presentations, (5) Viva preparation coaching, and (6) Unlimited revisions until your college accepts the project. We do not charge separately for documentation or viva support — it is all included. Students can also bring their own project idea and we will implement it within their budget. Call 8525999002 for a free quote.",
    points: ["Software & AI projects – most affordable", "IoT projects – includes hardware + cloud setup", "Embedded projects – includes PCB + microcontroller", "Mechanical projects – includes fabrication", "All packages include IEEE documentation", "No hidden charges – transparent pricing", "EMI/installment payment available", "Free consultation before any commitment"],
    tags: ["Low Cost Projects Coimbatore", "Affordable Final Year Projects", "Project Pricing Coimbatore", "Budget Projects"],
    highlights: ["Software Projects", "Embedded Projects", "IoT Projects", "Mechanical Projects", "All Domains"],
    featured: false,
  },
  {
    slug: "mern-stack-react-nodejs-final-year-projects-coimbatore",
    category: "Web Dev", categoryColor: "#1565c0", categoryBg: "#e3f2fd",
    date: "January 2025", dateISO: "2025-01-10", readTime: "8 min read",
    title: "Best MERN Stack & React Final Year Project Ideas – Coimbatore 2024-25",
    h1: "Best MERN Stack, React & Full-Stack Web Development Projects in Coimbatore 2024-25",
    metaDesc: "Top MERN Stack, React.js, Node.js full-stack web development final year projects for BE CSE, IT & MCA students in Coimbatore with live deployment and IEEE documentation.",
    intro: "Full-stack web development projects using MERN Stack (MongoDB, Express.js, React.js, Node.js) are among the most popular final year project choices for CSE and IT students in Coimbatore. CODEX PROJECT provides the best MERN Stack final year projects with live deployment, REST API, JWT authentication, and complete IEEE documentation. Call 8525999022 for Software project enquiries.",
    body: "MERN Stack projects involve building complete web applications with a React.js frontend, Node.js/Express.js backend, and MongoDB database. At CODEX PROJECT Coimbatore, we develop production-ready MERN applications with features like user authentication (JWT/OAuth), real-time updates (Socket.io), file uploads (Cloudinary/AWS S3), payment gateway integration (Razorpay), and live deployment on Vercel, Netlify, or Heroku. We also support other full-stack combinations including Django + React, Laravel + Vue.js, and Spring Boot + Angular. Every web project comes with: complete source code with comments, system architecture diagram, ER diagram, use case diagram, test cases, and IEEE 2024-25 format project report. Our web projects are responsive, mobile-first, and follow industry coding standards. CSE, IT, MCA, and BCA students from Coimbatore trust CODEX PROJECT for their web final year projects.",
    points: ["E-Commerce Platform – MERN + Razorpay", "Social Media App – React + Socket.io", "Hospital Management System – Spring Boot", "Job Portal – Next.js + Node.js", "Online Learning Platform – React + Django", "Real Estate Portal – MERN + Google Maps", "Blockchain Voting System – Solidity + React", "Food Delivery App – MERN + Razorpay"],
    tags: ["MERN Stack Projects Coimbatore", "React Projects", "Node.js Projects", "Full Stack Coimbatore", "Web Development Final Year"],
    highlights: ["E-Commerce Portal", "Social Media App", "Job Board", "Learning Platform", "Real Estate App"],
    featured: false,
  },
  {
    slug: "ieee-2025-project-ideas-engineering-students-coimbatore",
    category: "IEEE", categoryColor: "#37474f", categoryBg: "#eceff1",
    date: "December 2024", dateISO: "2024-12-15", readTime: "10 min read",
    title: "IEEE 2024-25 Final Year Project Ideas for Engineering Students – Coimbatore",
    h1: "IEEE 2024-25 Final Year Project Ideas for All Engineering Branches – Coimbatore",
    metaDesc: "Complete IEEE 2024-25 base paper project ideas for CSE, ECE, EEE, Mechanical, IT & MCA in Coimbatore. AI, IoT, Embedded, Mechanical & Web domains with publication support.",
    intro: "IEEE (Institute of Electrical and Electronics Engineers) base paper projects are the gold standard for final year engineering projects in Coimbatore. CODEX PROJECT provides IEEE 2024-25 certified final year projects for all engineering branches — from AI and IoT to Mechanical and Web Development — with base paper implementation, paper writing, and publication support at Gandhipuram, Coimbatore.",
    body: "IEEE final year projects are based on recent research papers published in IEEE Xplore, IEEE Transactions, and IEEE Conference proceedings. Implementing an IEEE project means you are working on real research problems with industry relevance. At CODEX PROJECT Coimbatore, we maintain a database of 500+ IEEE 2024-25 base papers across all engineering domains. Our process: (1) Select a relevant IEEE paper matching your branch and college requirements, (2) Understand the problem statement and proposed solution, (3) Implement the complete system with improvements, (4) Compare results with the original paper, (5) Write the project report and prepare for viva. IEEE projects require deeper technical understanding but carry higher marks and value. We help students from all branches — CSE, IT, ECE, EEE, EIE, Mechanical, and MCA — find the right IEEE paper and implement it successfully. IEEE paper implementation projects are available for Python AI/ML, IoT, Embedded Systems, MERN Stack, Java, and Mechanical engineering.",
    points: ["IEEE AI/ML papers – image processing, NLP, prediction", "IEEE IoT papers – smart systems, industrial monitoring", "IEEE Embedded papers – power electronics, control systems", "IEEE Mechanical papers – manufacturing, automation", "IEEE Web papers – security, cloud computing, blockchain", "Complete base paper + implementation + report", "IEEE publication support (IRJET, IJRASET)", "Comparison of results with original paper"],
    tags: ["IEEE Projects Coimbatore", "IEEE 2024-25 Base Papers", "IEEE Final Year Projects", "All Branches Coimbatore"],
    highlights: ["AI/ML Papers", "IoT Papers", "Embedded Papers", "Web Papers", "Mechanical Papers"],
    featured: true,
  },
  {
    slug: "flutter-android-mobile-app-final-year-projects-coimbatore",
    category: "Mobile App", categoryColor: "#00838f", categoryBg: "#e0f7fa",
    date: "December 2024", dateISO: "2024-12-05", readTime: "7 min read",
    title: "Best Flutter & Android Mobile App Final Year Projects – Coimbatore 2025",
    h1: "Best Flutter and Android Mobile App Final Year Projects in Coimbatore 2025",
    metaDesc: "Flutter, React Native & Android Java/Kotlin mobile app final year projects with Firebase, GPS, REST API for BE CSE, IT & MCA students in Coimbatore with Play Store deployment.",
    intro: "Mobile app development projects are increasingly popular among CSE, IT, and MCA final year students in Coimbatore. CODEX PROJECT provides complete Flutter, React Native, and Android final year projects with Firebase integration, GPS functionality, REST API connection, and even Play Store deployment. Call 8525999022 for Software & Mobile App project enquiries.",
    body: "Mobile app final year projects involve building cross-platform or native applications for smartphones and tablets. At CODEX PROJECT Coimbatore, we primarily work with Flutter (cross-platform), Android Studio (Java/Kotlin), and React Native. Flutter has become the most popular choice because one codebase runs on both Android and iOS. We integrate Firebase for real-time database, authentication, push notifications, and cloud storage. For location-based apps, we use Google Maps SDK and GPS APIs. Our mobile projects come with APK files, Play Store submission guidance, complete source code, UI/UX screens documentation, and IEEE project report. We also support wearable app development (Wear OS) and IoT-connected mobile apps that control Arduino/Raspberry Pi hardware. Students who choose mobile app projects benefit from the visual appeal of the demo and the practical relevance of the technology in daily life.",
    points: ["Food Delivery App – Flutter + Firebase + Razorpay", "Telemedicine Consultation App – React Native", "Ride Sharing App – Flutter + Google Maps", "Smart Campus App – Android + QR attendance", "Health Tracker – Flutter + Wear OS", "AR Try-On App – Android + ARCore", "IoT Controller App – Flutter + MQTT", "E-Learning App – Flutter + Firebase"],
    tags: ["Flutter Projects Coimbatore", "Android Projects Coimbatore", "Mobile App Final Year", "React Native Coimbatore"],
    highlights: ["Food Delivery", "Telemedicine", "Ride Sharing", "Smart Campus", "AR Navigation"],
    featured: false,
  },
  {
    slug: "how-to-select-final-year-project-coimbatore-guide",
    category: "Guide", categoryColor: "#4527a0", categoryBg: "#ede7f6",
    date: "November 2024", dateISO: "2024-11-20", readTime: "8 min read",
    title: "How to Select the Best Final Year Project in Coimbatore – Expert Guide 2025",
    h1: "How to Choose the Best Final Year Project in Coimbatore – Step-by-Step Guide",
    metaDesc: "Expert guide for engineering students on choosing the best final year project in Coimbatore – domain selection, IEEE paper finding, budget planning, and working with the right project center.",
    intro: "Choosing the right final year project is one of the most important decisions in your engineering journey. A good project can boost your academic score, improve your placement prospects, and give you real industry skills. This expert guide from CODEX PROJECT — the best final year project center in Coimbatore — walks you through the complete process of selecting and completing your final year project.",
    body: "The process of selecting a final year project in Coimbatore starts with understanding your own interests and branch requirements. Step 1 – Know your domain: CSE/IT students should focus on AI/ML, Web Development, or Mobile Apps. ECE/EEE students should explore IoT, Embedded Systems, or Signal Processing. Mechanical students should look at CAD/Fabrication or Automation projects. Step 2 – Check college requirements: Some colleges require IEEE base papers, others accept general projects. Some require hardware, others accept software only. Understand your department's specific requirements before selecting a topic. Step 3 – Set your budget: Software projects are generally cheaper. Hardware (IoT/Embedded/Mechanical) projects cost more due to components. CODEX PROJECT offers flexible pricing with installment options. Step 4 – Choose a trending topic: AI/ML, IoT, Blockchain, AR/VR are hot topics in 2024-25. Projects in these areas get better marks and impress interviewers during placements. Step 5 – Visit CODEX PROJECT: Come to our center at Balaji Complex, Gandhipuram, Coimbatore for a free consultation. We will help you select the perfect project based on your branch, budget, and college requirements — without any pressure to commit.",
    points: ["Match project to your engineering branch", "Check if IEEE base paper is required", "Understand hardware vs software cost difference", "Pick trending technologies for better placement value", "Visit CODEX PROJECT for free consultation", "Ask about documentation and viva support upfront", "Check project delivery timeline vs your deadlines", "Look for centers with working model demos"],
    tags: ["How to Select Final Year Project", "Project Selection Guide", "Final Year Project Tips", "Best Project Center Coimbatore"],
    highlights: ["Domain Selection", "Topic Finding", "Budget Planning", "College Requirements", "Viva Prep"],
    featured: false,
  },
];

const categories = ["All", "AI & ML", "IoT", "Embedded", "Mechanical", "Web Dev", "Mobile App", "IEEE", "Guide"];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {blogs.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BlogPosting",
          "headline": b.title, "description": b.metaDesc,
          "url": `https://www.codexproject.in/blog/${b.slug}`,
          "datePublished": b.dateISO,
          "author": { "@type": "Organization", "name": "CODEX PROJECT" },
          "publisher": { "@type": "Organization", "name": "CODEX PROJECT", "logo": { "@type": "ImageObject", "url": "https://www.codexproject.in/logo.png" } },
          "keywords": b.tags.join(", "),
          "articleBody": b.intro + " " + b.body,
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
          {/* Breadcrumb */}
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

          <span className="bh-eyebrow">Knowledge Hub</span>

          {/* H1 — main keyword */}
          <h1 id="blog-h1" className="bh-title">
            Final Year Project Blog –<br />
            <span className="bh-accent">CODEX PROJECT Coimbatore</span>
          </h1>

          {/* H2-level descriptor */}
          <p className="bh-subtitle">
            Best IEEE 2024-25 Project Ideas, Technology Guides &amp; Expert Tips
            for Engineering Students in Coimbatore
          </p>

          {/* Rich intro — 150+ words for content depth */}
          <div className="bh-intro-block">
            <p>
              <strong>CODEX PROJECT</strong> — the <strong>best final year project center
              in Coimbatore</strong> at Balaji Complex, Gandhipuram — brings you
              Coimbatore's most comprehensive blog on final year engineering projects.
              Our expert engineers publish in-depth guides on{" "}
              <strong>Mechanical Engineering projects</strong> (fabrication, CAD, robotics),{" "}
              <strong>IoT projects</strong> (Arduino, ESP32, cloud platforms),{" "}
              <strong>Embedded Systems</strong> (8051, ARM, FPGA),{" "}
              <strong>AI &amp; Machine Learning</strong> (Python, TensorFlow, NLP),{" "}
              <strong>Web Development</strong> (MERN Stack, Django), and{" "}
              <strong>Mobile Apps</strong> (Flutter, Android) —
              all tailored for <strong>BE, ME, MCA, BSc, and Diploma students</strong> from
              Coimbatore engineering colleges.
            </p>
          </div>

          <div className="bh-meta-row">
            <span className="bh-meta-chip">📚 {blogs.length} Articles</span>
            <span className="bh-meta-chip">🎯 {categories.length - 1} Domains</span>
            <span className="bh-meta-chip">📍 Gandhipuram, Coimbatore</span>
            <span className="bh-meta-chip">📞 85259 99002</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY READ OUR BLOG — Content depth section
      ══════════════════════════════════════════════════════ */}
      <section className="blog-why blog-reveal" aria-labelledby="why-blog-h2">
        <div className="blog-container">
          <div className="bw-grid">
            <div className="bw-text">
              <span className="bl-eyebrow">Why This Blog</span>
              <h2 id="why-blog-h2" className="bl-section-title">
                Why CODEX PROJECT Blog is the Best Resource for Final Year Projects in Coimbatore
              </h2>
              <p>
                Most final year project blogs give you just a list of titles. We go deeper.
                Every article on the CODEX PROJECT blog is written by practicing engineers
                with 500+ real student projects behind them. You get actual implementation
                details, cost estimates, hardware lists, technology comparisons, and
                college-specific advice for Coimbatore engineering students.
              </p>
              <p>
                Our articles cover <strong>IEEE 2024-25 base paper projects</strong>,
                trending technologies, viva preparation tips, documentation formats, and
                everything you need to complete your final year project with confidence —
                whether you are a <strong>BE CSE student at PSG Tech</strong>, an{" "}
                <strong>ECE student at CIT</strong>, or a <strong>Diploma student</strong>{" "}
                at any Coimbatore polytechnic.
              </p>
              <a href="/contact" className="bw-cta-link" aria-label="Free project consultation CODEX PROJECT Coimbatore">
                📞 Free Project Consultation →
              </a>
            </div>
            <div className="bw-stats">
              {[
                { num: "500+", label: "Projects Completed", icon: "🚀" },
                { num: "1000+", label: "Students Helped", icon: "🎓" },
                { num: "10+", label: "Blog Topics", icon: "📝" },
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
          <h2 className="bf-label">Filter by Domain</h2>
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
              ? "All Final Year Project Articles – Coimbatore 2024-25"
              : `${activeCategory} Final Year Project Ideas – Coimbatore 2024-25`}
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

                {/* Color top bar */}
                <div className="bc-top-bar"></div>

                <div className="bc-body">
                  {/* Category + read time */}
                  <div className="bc-meta">
                    <span className="bc-cat" itemProp="keywords">{blog.category}</span>
                    <span className="bc-time">⏱ {blog.readTime}</span>
                    {blog.featured && <span className="bc-featured">⭐ Featured</span>}
                  </div>

                  {/* H2 title */}
                  <h2 className="bc-title" itemProp="name">
                    <a href={`/blog/${blog.slug}`} className="bc-title-link" aria-label={blog.h1}>
                      {blog.title}
                    </a>
                  </h2>

                  {/* Date */}
                  <p className="bc-date">
                    <time itemProp="datePublished" dateTime={blog.dateISO}>{blog.date}</time>
                    {" "}· CODEX PROJECT, Coimbatore
                  </p>

                  {/* Intro — 50+ words visible */}
                  <p className="bc-intro" itemProp="description">{blog.intro}</p>

                  {/* Expandable body */}
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

                  {/* Highlights */}
                  <div className="bc-highlights">
                    {blog.highlights.map((h, hi) => (
                      <span key={hi} className="bc-highlight-tag">{h}</span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="bc-tags">
                    {blog.tags.map((t, ti) => (
                      <span key={ti} className="bc-tag" itemProp="keywords">#{t.split(" ")[0]}</span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
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
                    aria-label={`Full article: ${blog.seoTitle || blog.title}`}
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
          DEEP CONTENT — Google loves this
      ══════════════════════════════════════════════════════ */}
      <section className="blog-deep-content blog-reveal" aria-labelledby="deep-h2">
        <div className="blog-container">
          <h2 id="deep-h2" className="bl-section-title">
            Complete Guide to Final Year Projects in Coimbatore – 2024-25
          </h2>

          <div className="bdc-grid">

            {/* Block 1 */}
            <div className="bdc-block">
              <h3 className="bdc-h3">
                Why Final Year Projects Matter for Engineering Students in Coimbatore
              </h3>
              <p>
                The final year project is not just an academic requirement — it is your first
                real engineering experience. For engineering students in Coimbatore, a strong
                final year project can make a significant difference in campus placements,
                higher studies applications, and career opportunities. Companies like TCS,
                Infosys, Wipro, and emerging startups specifically ask about your final year
                project during interviews. A project in AI, IoT, or Full-Stack Web Development
                demonstrates practical skills that textbook knowledge alone cannot.
              </p>
              <p>
                At <strong>CODEX PROJECT — the best final year project center in Coimbatore</strong>
                — we understand what recruiters want. That's why every project we build is
                real-time, functional, and demonstrates genuine engineering problem-solving.
                We don't just give you code or a working model — we teach you to understand
                and explain it confidently.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bdc-block">
              <h3 className="bdc-h3">
                Domain-Wise Final Year Project Guidance for Coimbatore Engineering Students
              </h3>
              <p>
                <strong>CSE &amp; IT Students:</strong> Best domains are AI/ML, Web Development,
                Mobile Apps, Cybersecurity, and Cloud Computing. Python-based AI projects with
                TensorFlow or PyTorch are the most valued in placements.
              </p>
              <p>
                <strong>ECE &amp; EEE Students:</strong> Best domains are IoT, Embedded Systems,
                VLSI/FPGA, Signal Processing, and Power Electronics. Arduino and Raspberry Pi
                projects with cloud integration are trending.
              </p>
              <p>
                <strong>Mechanical Students:</strong> CAD/CAM design, fabrication, robotics,
                renewable energy, and automation are strong choices. SolidWorks and ANSYS
                projects are valued by manufacturing companies.
              </p>
              <p>
                <strong>MCA &amp; BSc Students:</strong> Web development (MERN, Django),
                mobile apps (Flutter, Android), and AI projects are excellent choices with
                strong placement value.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bdc-block">
              <h3 className="bdc-h3">
                How CODEX PROJECT Coimbatore Helps You Complete Your Final Year Project
              </h3>
              <p>
                Located at <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
                Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>, CODEX PROJECT is
                easily accessible from all major engineering college zones in Coimbatore
                including Peelamedu, Saravanampatti, RS Puram, and Singanallur.
              </p>
              <p>
                Our process: (1) Free consultation to understand your requirements, (2) Topic
                selection with IEEE base paper, (3) Real-time development with your involvement,
                (4) Testing and refinement, (5) IEEE documentation — report, synopsis, PPT,
                (6) Viva preparation with mock questions, (7) Support till your final review.
              </p>
              <p>
                Contact us: General — <strong>85259 99002</strong> | Software/AI —{" "}
                <strong>85259 99022</strong> | Embedded/IoT — <strong>85259 99032</strong> |
                Email — <strong>codexproject2026@gmail.com</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="blog-faq blog-reveal" aria-labelledby="blog-faq-h2">
        <div className="blog-container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="bl-eyebrow">FAQ</span>
            <h2 id="blog-faq-h2" className="bl-section-title">
              Frequently Asked Questions – Final Year Projects Coimbatore 2024-25
            </h2>
          </div>
          <div className="bfaq-list">
            {faqSchema.mainEntity.map((f, i) => (
              <div
                key={i}
                className={`bfaq-item ${openFaq === i ? "bfaq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="bfaq-q">
                  <h3 className="bfaq-question">{f.name}</h3>
                  <span className="bfaq-toggle">{openFaq === i ? "−" : "+"}</span>
                </div>
                <div className="bfaq-a"><p>{f.acceptedAnswer.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KEYWORD CLOUD
      ══════════════════════════════════════════════════════ */}
      <section className="blog-keywords blog-reveal" aria-label="Blog topic keywords">
        <div className="blog-container">
          <h2 className="bkw-title">Explore by Topic – Final Year Projects Coimbatore</h2>
          <div className="bkw-grid">
            {[
              ["Final Year Projects Coimbatore", "/projects"],
              ["IEEE Projects 2024-25", "/projects"],
              ["Python AI Projects Coimbatore", "/services/software-projects"],
              ["Machine Learning Projects Coimbatore", "/services/software-projects"],
              ["Deep Learning NLP Coimbatore", "/services/software-projects"],
              ["IoT Projects Coimbatore", "/services/iot-projects"],
              ["Arduino Projects Coimbatore", "/services/iot-projects"],
              ["Embedded Projects Coimbatore", "/services/embedded-projects"],
              ["Mechanical Projects Coimbatore", "/services/mechanical-projects"],
              ["MERN Stack Projects Coimbatore", "/services/software-projects"],
              ["Flutter Projects Coimbatore", "/services/software-projects"],
              ["Java Projects Coimbatore", "/services/software-projects"],
              ["Low Cost Projects Coimbatore", "/contact"],
              ["CSE Projects Coimbatore 2025", "/services/software-projects"],
              ["ECE Projects Coimbatore 2025", "/services/iot-projects"],
              ["Project Center Gandhipuram", "/contact"],
              ["Best IEEE Project Center Tamil Nadu", "/about"],
              ["Internship Training Coimbatore", "/internship"],
            ].map(([label, href]) => (
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
            Ready to Start Your Final Year Project?<br />
            <span className="bcta-sub">Visit CODEX PROJECT – Gandhipuram, Coimbatore</span>
          </h2>
          <p className="bcta-desc">
            Join <strong>1000+ engineering students</strong> who trusted CODEX PROJECT —
            the <strong>best final year project center in Coimbatore</strong> and the{" "}
            <strong>best IEEE project center in Tamil Nadu</strong> — for affordable
            IEEE 2024-25 projects, internship training, and placement support.
          </p>
          <p className="bcta-address">
            📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012
          </p>
          <div className="bcta-actions">
            <a href="tel:+918525999002" className="bcta-btn bcta-btn-primary">
              📞 Call: 85259 99002
            </a>
            <a href="https://wa.me/918525999002" target="_blank" rel="noopener noreferrer" className="bcta-btn bcta-btn-wa">
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