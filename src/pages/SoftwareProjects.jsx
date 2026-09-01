import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./SoftwareProjects.css";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════
const YEAR     = "2026-27";
const PHONE    = "8525999022";
const PHONE_GEN= "8525999002";
const WA       = `https://wa.me/91${PHONE}`;
const ADDR     = "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram, Coimbatore – 641012";
const PAGE_URL = "https://www.codexproject.in/software-project-center-coimbatore";

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `Best Software Project Center in Coimbatore ${YEAR} – CODEX PROJECT`,
  "serviceType": "Software Final Year Project Training and Development",
  "description": `CODEX PROJECT is the best software project center in Coimbatore offering IEEE ${YEAR} final year projects in Python, AI, ML, Deep Learning, Django, MERN Stack, Java, .NET, PHP, React, Node.js, Android, and Flutter for BE CSE, IT, MCA, BSc, and Diploma students. Complete source code, IEEE documentation, live deployment, viva prep, and free internship certificate.`,
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
    "priceRange": "₹₹",
  },
  "areaServed": [
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tirupur" },
    { "@type": "City", "name": "Erode" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": `Best software project center in Coimbatore ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best software project center in Coimbatore ${YEAR}, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer Python, AI, ML, Deep Learning, MERN Stack, Java, .NET, PHP, Android, and Flutter final year projects for BE CSE, IT, MCA, BSc students at affordable pricing with free internship certificate. Call ${PHONE}.` } },
    { "@type": "Question", "name": "What programming languages does CODEX PROJECT support?", "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT supports Python (Django, Flask, FastAPI), TensorFlow, PyTorch, MERN Stack (MongoDB, Express, React, Node.js), Java (Spring Boot, Hibernate), .NET Core, PHP (Laravel, CodeIgniter), Android (Java/Kotlin), Flutter, React Native, and all major software technologies for final year projects in Coimbatore.` } },
    { "@type": "Question", "name": `Best AI Machine Learning project center Coimbatore ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best AI and Machine Learning project center in Coimbatore ${YEAR}. We offer 100+ Deep Learning, NLP, Computer Vision, and Generative AI projects using Python, TensorFlow, PyTorch, BERT, and YOLO v8 for CSE and IT students. All with IEEE base paper implementation. Call ${PHONE}.` } },
    { "@type": "Question", "name": "Cost of software final year projects Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT offers the most affordable software project pricing in Coimbatore with zero hidden charges. All packages include source code, IEEE documentation, PPT, viva prep, and free internship certificate. EMI available. Call ${PHONE_GEN} for free quote.` } },
    { "@type": "Question", "name": "Does CODEX PROJECT support BE CSE, IT, MCA, and BSc students?", "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT supports BE CSE, BE IT, ME CSE, MCA, BSc CS, BCA, and Diploma students from all Coimbatore colleges — PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, and 20+ other colleges. Call ${PHONE}.` } },
    { "@type": "Question", "name": "Android and Flutter mobile app projects Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": `Yes! CODEX PROJECT provides Android (Java/Kotlin), Flutter, and React Native mobile app final year projects with Firebase integration, GPS, REST API, push notifications, and Play Store deployment support. Best Flutter project center in Coimbatore. Call ${PHONE}.` } },
    { "@type": "Question", "name": "Does CODEX PROJECT provide internship certificate?", "acceptedAnswer": { "@type": "Answer", "text": `Yes! Every software project at CODEX PROJECT Coimbatore includes a FREE internship certificate along with IEEE format project report, source code, PPT, and viva preparation coaching. Call ${PHONE_GEN}.` } },
    { "@type": "Question", "name": `MERN Stack project center Coimbatore ${YEAR}?`, "acceptedAnswer": { "@type": "Answer", "text": `CODEX PROJECT is the best MERN Stack project center in Coimbatore ${YEAR}. We develop full-stack MERN applications with React.js frontend, Node.js/Express.js backend, MongoDB database, JWT authentication, Socket.io real-time, Razorpay payment, and live deployment on Vercel/Netlify. Call ${PHONE}.` } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": `Software Projects Coimbatore ${YEAR}`, "item": PAGE_URL },
  ],
};

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
const techDomains = [
  { icon:"🐍", title:"Python Projects", seo:`Python Final Year Projects Coimbatore ${YEAR}`, color:"#e8f5e9", accent:"#2e7d32", tags:["Django","Flask","FastAPI","Pandas","NumPy","Scikit-learn","Matplotlib"], desc:`Real-time Python web, automation, data science, and AI final year projects — best Python project center in Coimbatore ${YEAR} for BE CSE, IT, and MCA students with IEEE documentation.`, fk:"Python" },
  { icon:"🤖", title:"AI & Machine Learning Projects", seo:`AI Machine Learning Projects Coimbatore ${YEAR}`, color:"#e3f2fd", accent:"#1565c0", tags:["TensorFlow","PyTorch","Keras","Scikit-learn","OpenCV","YOLO v8","Hugging Face"], desc:`IEEE ${YEAR} base paper AI and Machine Learning final year projects — best AI ML project center in Coimbatore for CSE and IT students. Deep Learning, NLP, Computer Vision.`, fk:"AI" },
  { icon:"🧠", title:"Deep Learning & NLP Projects", seo:`Deep Learning NLP Projects Coimbatore ${YEAR}`, color:"#f3e5f5", accent:"#6a1b9a", tags:["CNN","RNN","LSTM","BERT","GPT API","Transformer","Diffusion"], desc:`Brain tumor detection, sentiment analysis, text summarization, chatbot, and Generative AI final year projects — best Deep Learning project center in Coimbatore ${YEAR}.`, fk:"Deep Learning" },
  { icon:"🌐", title:"MERN Stack Projects", seo:`MERN Stack Projects Coimbatore ${YEAR}`, color:"#e0f7fa", accent:"#00695c", tags:["MongoDB","Express.js","React.js","Node.js","REST API","JWT","Socket.io"], desc:`Full-stack MERN web applications with live deployment, Razorpay payment, and Socket.io real-time — best MERN Stack project center in Coimbatore ${YEAR}.`, fk:"MERN" },
  { icon:"☕", title:"Java & Spring Boot Projects", seo:`Java Projects Coimbatore ${YEAR}`, color:"#fff3e0", accent:"#e65100", tags:["Java","Spring Boot","Hibernate","MySQL","Maven","REST API","Microservices"], desc:`Enterprise Java, Spring Boot microservices, and J2EE final year projects — best Java project center in Coimbatore ${YEAR} for BE IT and CSE students.`, fk:"Java" },
  { icon:"🔷", title:".NET & C# Projects", seo:`Dotnet Projects Coimbatore ${YEAR}`, color:"#e8eaf6", accent:"#283593", tags:[".NET Core","ASP.NET","C#","Entity Framework","LINQ","Azure","Blazor"], desc:`ASP.NET Core, MVC, Web API, Blazor, and C# application final year projects — best .NET project center in Coimbatore ${YEAR} for IT and CSE students.`, fk:".NET" },
  { icon:"🐘", title:"PHP & Laravel Projects", seo:`PHP Laravel Projects Coimbatore ${YEAR}`, color:"#fce4ec", accent:"#880e4f", tags:["PHP","Laravel","CodeIgniter","MySQL","Bootstrap","jQuery","REST API"], desc:`PHP web development, Laravel MVC, and CodeIgniter final year projects — best PHP project center in Coimbatore ${YEAR} for BE, BSc, and Diploma students.`, fk:"PHP" },
  { icon:"📱", title:"Android App Projects", seo:`Android App Development Projects Coimbatore ${YEAR}`, color:"#f9fbe7", accent:"#33691e", tags:["Android Studio","Java","Kotlin","Firebase","REST API","SQLite","Google Maps"], desc:`Android mobile app final year projects with Firebase, GPS, sensor integration, and Play Store deployment — best Android project center in Coimbatore ${YEAR}.`, fk:"Android" },
  { icon:"🦋", title:"Flutter & React Native", seo:`Flutter React Native Projects Coimbatore ${YEAR}`, color:"#e1f5fe", accent:"#006064", tags:["Flutter","Dart","React Native","Firebase","Provider","GetX","Bloc"], desc:`Cross-platform Flutter and React Native mobile app final year projects with Firebase backend and live deployment — best Flutter project center in Coimbatore ${YEAR}.`, fk:"Flutter" },
  { icon:"📊", title:"Data Science Projects", seo:`Data Science Projects Coimbatore ${YEAR}`, color:"#fff8e1", accent:"#f57f17", tags:["Pandas","Matplotlib","Seaborn","Power BI","Tableau","SQL","EDA"], desc:`Data analysis, visualization, predictive modeling, and BI dashboard final year projects — best Data Science project center in Coimbatore ${YEAR}.`, fk:"Data Science" },
  { icon:"☁️", title:"Cloud & DevOps Projects", seo:`Cloud Computing Projects Coimbatore ${YEAR}`, color:"#e8f5e9", accent:"#1b5e20", tags:["AWS","Azure","Docker","Kubernetes","CI/CD","Terraform","Serverless"], desc:`AWS, Azure, Docker, and Kubernetes cloud computing final year projects for BE CSE and IT students in Coimbatore ${YEAR} with live deployment.`, fk:"Cloud" },
  { icon:"🔒", title:"Cybersecurity & Blockchain", seo:`Cybersecurity Blockchain Projects Coimbatore ${YEAR}`, color:"#fbe9e7", accent:"#bf360c", tags:["Network Security","Encryption","Solidity","Ethereum","Web3","IPFS","Ethical Hacking"], desc:`Network security, encryption, Blockchain (Solidity, Ethereum), and Web3 final year projects for CSE students in Coimbatore ${YEAR}.`, fk:"Blockchain" },
];

const projectIdeas = [
  { name:"AI Based Chatbot – GPT API",             tag:"NLP / GenAI" },
  { name:"Face Recognition Attendance System",      tag:"Deep Learning" },
  { name:"E-Commerce Platform – MERN + Razorpay",  tag:"MERN Stack" },
  { name:"Hospital Management – Spring Boot",       tag:"Java / Spring" },
  { name:"Brain Tumor Detection – CNN MRI",         tag:"Deep Learning" },
  { name:"Fake News Detection – BERT",              tag:"NLP" },
  { name:"Object Detection – YOLO v8 Real-Time",    tag:"Computer Vision" },
  { name:"Stock Price Prediction – LSTM",           tag:"Deep Learning" },
  { name:"Sentiment Analysis – Twitter/BERT",       tag:"NLP" },
  { name:"Flutter Food Delivery App – Firebase",    tag:"Flutter" },
  { name:"Real Estate Portal – MERN Stack",         tag:"MERN Stack" },
  { name:"Blockchain Voting System – Solidity",     tag:"Blockchain" },
  { name:"Cloud File Storage – AWS S3",             tag:"Cloud / AWS" },
  { name:"Cybersecurity Intrusion Detection – ML",  tag:"Cybersecurity" },
  { name:"Crop Disease Detection – ResNet CNN",     tag:"Agriculture AI" },
  { name:"Medical Image Segmentation – U-Net",      tag:"Deep Learning" },
  { name:"Job Portal – Next.js + Node.js",          tag:"Full Stack" },
  { name:"Telemedicine App – Flutter + Firebase",   tag:"Flutter" },
  { name:"Customer Churn Prediction – ML",          tag:"Data Science" },
  { name:"Sign Language Recognition – CNN",         tag:"Computer Vision" },
  { name:"Ride Sharing App – Flutter + Maps",       tag:"Flutter" },
  { name:"Generative AI Image Synthesis – GAN",     tag:"Generative AI" },
  { name:"Plagiarism Detection – NLP Python",       tag:"NLP" },
  { name:"Online Learning Platform – React+Django", tag:"Full Stack" },
];

const tagColors = {
  "NLP / GenAI":"#e3f2fd","Deep Learning":"#f3e5f5","MERN Stack":"#e0f7fa",
  "Java / Spring":"#fff3e0","NLP":"#f3e5f5","Computer Vision":"#e8f5e9",
  Flutter:"#e1f5fe","Blockchain":"#ede7f6","Cloud / AWS":"#e3f2fd",
  Cybersecurity:"#ffebee","Agriculture AI":"#e8f5e9","Data Science":"#fff8e1",
  "Full Stack":"#e3f2fd","Generative AI":"#f3e5f5","PHP / Java":"#fff3e0",
};

const WHY = [
  { icon:"💰", t:"Most Affordable Software Projects",   d:`Lowest software project cost in Coimbatore ${YEAR} — source code + deployment + IEEE docs + internship cert, zero hidden charges.` },
  { icon:"💻", t:"All Languages & Frameworks",          d:`Python, Java, .NET, PHP, MERN, Flutter, Android — every language and framework supported for final year projects in Coimbatore.` },
  { icon:"🤖", t:`IEEE ${YEAR} AI & ML Projects`,       d:`Latest IEEE ${YEAR} base paper projects in Deep Learning, NLP, Computer Vision, and Generative AI — best AI project center in Coimbatore.` },
  { icon:"📋", t:"Complete IEEE Documentation",         d:`Project report, IEEE abstract, PPT, SRS document, UML diagrams, ER diagram, source code — everything ready for all Coimbatore college reviews.` },
  { icon:"🚀", t:"Live Deployment Support",             d:`Deployed on live servers, cloud (AWS/Heroku/Vercel), or Play Store — real working software with live demo URL, not just local runs.` },
  { icon:"🎤", t:"Viva & Review Preparation",           d:`50+ mock viva questions and answers specific to your project — free technical coaching for all department reviews.` },
  { icon:"📜", t:"Free Internship Certificate",         d:`Every software project includes a FREE internship certificate accepted by all engineering colleges in Coimbatore and Tamil Nadu.` },
  { icon:"📍", t:"Central Gandhipuram Location",        d:`2nd Floor, Balaji Complex, Gandhipuram — easily accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.` },
];

const REVIEWS = [
  { stars:5, text:`Best software project center in Coimbatore! My Python Deep Learning project (Face Recognition with TensorFlow + OpenCV) was implemented with 95%+ accuracy, full IEEE ${YEAR} documentation, and real-time demo. Highly recommended for CSE students!`, name:"Arun K.", branch:"BE CSE – PSG Tech" },
  { stars:5, text:"Got my MERN Stack e-commerce project done at Codex Project, Gandhipuram. Complete React frontend, Node.js backend, MongoDB, Razorpay payment, and live Vercel deployment. Best MERN project centre in Coimbatore — affordable and professional!", name:"Priya M.", branch:"BE IT – KGISL" },
  { stars:5, text:`Completed my Flutter mobile app project with Firebase integration at Codex Project Coimbatore. The team coded, tested, and guided Play Store submission. Excellent viva support — mock Q&A was so helpful! Best Flutter project center I've visited.`, name:"Ravi S.", branch:"MCA – Karpagam" },
  { stars:5, text:"My Java Spring Boot microservices project was brilliantly executed at Codex Project. IEEE documentation, UML diagrams, Postman API testing, and deployment — everything was perfect. Most affordable Java project center in Coimbatore!", name:"Divya R.", branch:"ME CSE – CIT" },
  { stars:5, text:"Chose CODEX PROJECT for my AI chatbot project using GPT API and NLP. The team implemented it with a React frontend and Node.js backend. Full documentation, PPT, and viva coaching — scored the highest marks in my batch!", name:"Karthik V.", branch:"BE CSE – Sri Krishna" },
  { stars:5, text:"My Data Science project with ML predictive modeling was handled expertly. Power BI dashboard, Jupyter notebooks, and complete IEEE report — all done within a week. Best Data Science project center in Coimbatore!", name:"Meena S.", branch:"BSc CS – SNS" },
];

const COLLEGES = [
  "PSG Tech","CIT","KMEA","Sri Krishna","KPR College","Karpagam","SNS College",
  "KGISL","RVS College","Rathinam","Hindusthan","Sri Eshwar","Dr NGP","Bannari Amman",
  "Excel Engineering","Nehru College","JCT","EASA","Info Institute","Sengunthar",
];

const FILTER_KEYWORDS = [
  `Python Projects Coimbatore ${YEAR}`,
  `AI Projects Coimbatore ${YEAR}`,
  `Machine Learning Projects Coimbatore ${YEAR}`,
  `Deep Learning NLP Projects Coimbatore`,
  `MERN Stack Projects Coimbatore ${YEAR}`,
  `Java Projects Coimbatore ${YEAR}`,
  `.NET Projects Coimbatore`,
  `PHP Laravel Projects Coimbatore`,
  `Android Projects Coimbatore`,
  `Flutter Projects Coimbatore ${YEAR}`,
  `Data Science Projects Coimbatore`,
  `Cloud AWS Projects Coimbatore`,
  `Blockchain Projects Coimbatore`,
  `Cybersecurity Projects Coimbatore`,
  `IEEE Software Projects ${YEAR}`,
  `Software Centre Gandhipuram`,
  `CSE IT MCA Projects Coimbatore`,
  `Affordable Software Projects Coimbatore`,
];

const RELATED_SERVICES = [
  { label: "IoT Projects",        href: "/iot-project-center-coimbatore",        icon: "📡" },
  { label: "Embedded Projects",   href: "/embedded-project-center-coimbatore",   icon: "🔧" },
  { label: "Mechanical Projects", href: "/mechanical-project-center-coimbatore", icon: "⚙️" },
];

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════
const SoftwareProjects = () => {
  const [openFaq, setOpenFaq]         = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRefs = useRef([]);

  const filteredDomains = activeFilter
    ? techDomains.filter(t =>
        t.fk && activeFilter.toLowerCase().includes(t.fk.toLowerCase())
      )
    : techDomains;

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("sp-in"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const scrollToTech = () => {
    document.getElementById("sp-tech-section")?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  return (
    <div className="sp-page">
      <Helmet>
        <title>{`Best Software Project Center in Coimbatore ${YEAR} | CODEX PROJECT`}</title>
        <meta
          name="description"
          content={`CODEX PROJECT - Best software project center in Gandhipuram, Coimbatore. Python, AI, MERN, Java, Flutter, Android final year projects ${YEAR}. Free internship certificate. Call ${PHONE}.`}
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={`Best Software Project Center in Coimbatore ${YEAR} | CODEX PROJECT`} />
        <meta property="og:description" content={`Python, AI, MERN, Java, Flutter, Android final year projects in Coimbatore. Free internship certificate. Call ${PHONE}.`} />
        <meta property="og:url" content={PAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className="sp-hero" aria-labelledby="sp-h1">
        <div className="sp-hero-bg">
          <div className="sp-grid-bg"/>
          <div className="sp-orb sp-orb1"/>
          <div className="sp-orb sp-orb2"/>
        </div>
        <div className="sp-container">
          <nav className="sp-bc" aria-label="breadcrumb">
            <ol>
              <li><a href="/">Home</a></li>
              <span>›</span>
              <li aria-current="page">Software Projects {YEAR}</li>
            </ol>
          </nav>

          <div className="sp-hero-chip"><span className="sp-chip-dot"/>IEEE {YEAR} — 100+ Software Project Titles</div>

          <h1 id="sp-h1" className="sp-h1">
            Best Software Project Center<br/>
            in Coimbatore <span className="sp-grad">| CODEX PROJECT</span>
          </h1>

          <p className="sp-hero-sub">
            Top-rated Python, AI, ML, MERN Stack, Java, Flutter & Android final year project center — Gandhipuram, Coimbatore
          </p>

          <p className="sp-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best software project center in Coimbatore {YEAR}</strong>, offering real-time final year projects in <strong>Python, AI, Machine Learning, Deep Learning, MERN Stack, Java, .NET, PHP, Android, Flutter</strong> — with complete source code, IEEE {YEAR} documentation, live deployment, viva preparation, and <strong>free internship certificate</strong> at the most affordable pricing in Coimbatore.
          </p>

          <p className="sp-hero-addr">📍 {ADDR}</p>
          <p className="sp-hero-serve">
            Serving BE CSE, IT, ME CSE, MCA, BSc CS, BCA & Diploma students from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL & all Coimbatore colleges
          </p>

          <div className="sp-trust-row">
            {["IEEE 2026-27","Python & AI Projects","MERN Stack","Flutter & Android","Free Internship Cert","Complete Documentation","Viva Coaching","Live Deployment"].map(t=>(
              <span key={t} className="sp-trust-pill">✔ {t}</span>
            ))}
          </div>

          <div className="sp-hero-btns">
            <a href={`tel:+91${PHONE}`} className="sp-btn sp-btn-gold">📞 Call: {PHONE}</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-wa">💬 WhatsApp</a>
            <button className="sp-btn sp-btn-outline" onClick={scrollToTech}>Explore Technologies ↓</button>
          </div>
        </div>
      </section>

      <div className="sp-container sp-main">

        {/* ══ KEYWORD FILTER CLOUD ════════════════════════ */}
        <section className="sp-filter-sec sp-reveal" ref={addRef}>
          <div className="sp-filter-hdr">
            <h2 className="sp-filter-title">Browse by Technology — Coimbatore {YEAR}</h2>
            {activeFilter && (
              <button className="sp-filter-clear" onClick={() => setActiveFilter(null)}>✕ Show All</button>
            )}
          </div>
          <div className="sp-filter-chips">
            {FILTER_KEYWORDS.map(tag => (
              <button key={tag}
                className={`sp-filter-chip ${activeFilter===tag?"sp-chip-active":""}`}
                onClick={() => { setActiveFilter(activeFilter===tag?null:tag); scrollToTech(); }}
                aria-pressed={activeFilter===tag}>
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <p className="sp-filter-note">Showing results for: <strong>{activeFilter}</strong> — {filteredDomains.length} domain{filteredDomains.length!==1?"s":""} found</p>
          )}
        </section>

        {/* ══ TECH DOMAIN CARDS ═══════════════════════════ */}
        <section id="sp-tech-section" className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-tech-h2">
          <h2 id="sp-tech-h2" className="sp-sec-title">
            Software Project Technologies — CODEX PROJECT Coimbatore {YEAR}
          </h2>
          <p className="sp-sec-sub">
            All programming languages and frameworks — Python, Java, .NET, PHP, MERN, Flutter, Android — complete source code + live deployment + IEEE {YEAR} documentation
          </p>
          <div className="sp-tech-grid">
            {(filteredDomains.length>0 ? filteredDomains : techDomains).map((t, i) => (
              <article key={i} className="sp-tech-card"
                style={{"--tc":t.accent,"--tbg":t.color}}>
                <div className="sp-tc-bar"/>
                <div className="sp-tc-icon">{t.icon}</div>
                <h3 className="sp-tc-title">{t.title}</h3>
                <p className="sp-tc-desc">{t.desc}</p>
                <div className="sp-tc-tags">
                  {t.tags.map((tag,j)=><span key={j} className="sp-tc-tag">{tag}</span>)}
                </div>
                <a href={`${WA}?text=Hi!%20I%20need%20${encodeURIComponent(t.title)}%20${YEAR}`}
                   target="_blank" rel="noopener noreferrer" className="sp-tc-cta">
                  💬 WhatsApp for {t.title.split(" ")[0]} Project
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ══ PROJECT IDEAS ════════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-ideas-h2">
          <h2 id="sp-ideas-h2" className="sp-sec-title">
            Software Final Year Project Ideas — Coimbatore {YEAR}
          </h2>
          <p className="sp-sec-sub">
            Latest IEEE {YEAR} software project topics in AI, ML, Web Development, Mobile Apps & Cloud for CSE, IT, MCA & BSc students in Coimbatore
          </p>
          <div className="sp-ideas-grid">
            {projectIdeas.map((p,i)=>(
              <div key={i} className="sp-idea-card"
                style={{"--ibg":tagColors[p.tag]||"#f8f9fa"}}>
                <p className="sp-idea-name">{p.name}</p>
                <span className="sp-idea-tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══════════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-why-h2">
          <h2 id="sp-why-h2" className="sp-sec-title">
            Why CODEX PROJECT is the Best Software Project Center in Coimbatore {YEAR}
          </h2>
          <p className="sp-sec-sub">Trusted by 1000+ CSE, IT & MCA students across Coimbatore for real-time software projects with IEEE documentation</p>
          <div className="sp-why-grid">
            {WHY.map((w,i)=>(
              <div key={i} className="sp-why-card" style={{"--wi":`${i*0.06}s`}}>
                <span className="sp-why-icon">{w.icon}</span>
                <h3 className="sp-why-title">{w.t}</h3>
                <p className="sp-why-desc">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ COLLEGES SERVED ═════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-college-h2">
          <h2 id="sp-college-h2" className="sp-sec-title">
            Colleges We Serve — Software Projects Coimbatore {YEAR}
          </h2>
          <p className="sp-sec-sub">CSE, IT, MCA, BSc CS students from these colleges regularly use CODEX PROJECT for their software final year projects</p>
          <div className="sp-college-grid">
            {COLLEGES.map(c=>(
              <span key={c} className="sp-college-tag">{c}</span>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-reviews-h2">
          <h2 id="sp-reviews-h2" className="sp-sec-title">
            Student Reviews — Software Project Center Coimbatore {YEAR}
          </h2>
          <p className="sp-sec-sub">What CSE, IT & MCA students say about CODEX PROJECT's software final year project support</p>
          <div className="sp-reviews-grid">
            {REVIEWS.map((r,i)=>(
              <div key={i} className="sp-review-card">
                <div className="sp-rv-stars">{"⭐".repeat(r.stars)}</div>
                <p className="sp-rv-text">"{r.text}"</p>
                <div className="sp-rv-author">
                  <div className="sp-rv-av">{r.name[0]}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span className="sp-rv-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-faq-h2">
          <h2 id="sp-faq-h2" className="sp-sec-title">
            FAQ — Software Project Center Coimbatore {YEAR}
          </h2>
          <div className="sp-faq-list">
            {faqSchema.mainEntity.map((item,i)=>(
              <div key={i}
                className={`sp-faq-item ${openFaq===i?"sp-faq-open":""}`}
                onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                <div className="sp-faq-q">
                  <h3 className="sp-faq-qtext">{item.name}</h3>
                  <span className="sp-faq-icon">{openFaq===i?"−":"+"}</span>
                </div>
                <div className="sp-faq-body">
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT ══════════════════════════════════ */}
        <section className="sp-section sp-seo-block sp-reveal" ref={addRef} aria-labelledby="sp-seo-h2">
          <h2 id="sp-seo-h2" className="sp-seo-title">
            Software Project Center in Coimbatore — Complete Guide {YEAR}
          </h2>
          <p>
            Searching for the <strong>best software project center in Coimbatore</strong>? CODEX PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>, is your complete software final year project solution for {YEAR}. We support every major programming language and framework — <strong>Python Django projects</strong>, <strong>AI and Machine Learning projects</strong>, <strong>Deep Learning and NLP projects</strong>, <strong>MERN Stack web projects</strong>, <strong>Java Spring Boot projects</strong>, <strong>.NET ASP.NET projects</strong>, <strong>PHP Laravel projects</strong>, <strong>Android app projects</strong>, <strong>Flutter projects</strong>, and <strong>Data Science projects</strong> — all with real-time implementation, live deployment, and affordable pricing in Coimbatore.
          </p>
          <p>
            Every software project at CODEX PROJECT includes: complete source code with comments, IEEE {YEAR} base paper implementation, IEEE format project report (50-80 pages), PPT, UML diagrams, ER diagram, SRS document, live deployment URL, and dedicated viva preparation. We serve <strong>BE CSE students</strong>, <strong>BE IT students</strong>, <strong>ME CSE students</strong>, <strong>MCA students</strong>, <strong>BSc Computer Science students</strong>, <strong>BCA students</strong>, and <strong>Diploma students</strong> from PSG Tech, CIT, KMEA, Sri Krishna, KPR, Karpagam, SNS, KGISL, RVS, Rathinam, Hindusthan, Sri Eshwar, Dr NGP, Bannari Amman, and all Coimbatore engineering colleges.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore</strong> for a free consultation on your software final year project topic and pricing. We are the <strong>most trusted and affordable software project center in Coimbatore {YEAR}</strong> — 4.9★ Google rating, 1000+ successful projects delivered in Python, AI, MERN, Java, Flutter, and more.
          </p>
        </section>

        {/* ══ RELATED SERVICES ════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-related-h2">
          <h2 id="sp-related-h2" className="sp-sec-title" style={{fontSize:"1.4rem"}}>
            Explore Other Project Domains at CODEX PROJECT
          </h2>
          <div className="sp-filter-chips" style={{marginTop:"12px"}}>
            {RELATED_SERVICES.map((r) => (
              <a
                key={r.href}
                href={r.href}
                className="sp-filter-chip"
                style={{ textDecoration: "none", cursor: "pointer" }}
                aria-label={r.label}
              >
                {r.icon} {r.label}
              </a>
            ))}
          </div>
        </section>

        {/* ══ LOCATION ═════════════════════════════════════ */}
        <section className="sp-section sp-reveal" ref={addRef} aria-labelledby="sp-loc-h2">
          <h2 id="sp-loc-h2" className="sp-sec-title">
            Visit CODEX PROJECT — Software Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="sp-loc-addr">📍 <strong>{ADDR}</strong></p>
          <p className="sp-loc-desc">Open Monday–Saturday, 9 AM – 8 PM. Accessible from Peelamedu, Saravanampatti, RS Puram, Singanallur, and Ukkadam.</p>
          <div className="sp-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%" height="380" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`CODEX PROJECT Software Project Center Gandhipuram Coimbatore ${YEAR}`}/>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════ */}
        <section className="sp-cta sp-reveal" ref={addRef} aria-labelledby="sp-cta-h2">
          <div className="sp-cta-blob"/>
          <div className="sp-cta-inner">
            <h2 id="sp-cta-h2" className="sp-cta-title">
              Start Your Software Final Year Project Today<br/>
              <span className="sp-grad">CODEX PROJECT — Coimbatore {YEAR}</span>
            </h2>
            <p className="sp-cta-sub">Join 1000+ CSE, IT & MCA students who completed their software projects with CODEX PROJECT.</p>
            <p className="sp-cta-addr">📍 {ADDR}</p>
            <p className="sp-cta-tags">Python · AI · Deep Learning · MERN · Java · .NET · PHP · Flutter · Android · IEEE {YEAR}</p>
            <div className="sp-cta-btns">
              <a href={`tel:+91${PHONE}`} className="sp-btn sp-btn-gold">📞 Call: {PHONE} — Free Consultation</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-wa">💬 WhatsApp Us</a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-outline-light">⭐ Review on Google</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SoftwareProjects;
