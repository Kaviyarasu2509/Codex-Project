import React, { useState, useEffect, useRef } from "react";
import "./SoftwareProjects.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Best Software Project Center in Coimbatore – CODEX PROJECT",
  "serviceType": "Software Final Year Project Training and Development",
  "description":
    "CODEX PROJECT is the best software project center in Coimbatore offering real-time Python, AI, ML, Django, MERN Stack, Java, .NET, PHP, React, Node.js, Android, and Flutter final year projects for BE CSE, IT, MCA, BSc, and Diploma students with complete coding, documentation, and viva support at affordable pricing.",
  "provider": { "@type": "Organization", "name": "CODEX PROJECT", "url": "https://www.codexproject.in" },
  "areaServed": { "@type": "City", "name": "Coimbatore" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": "220" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Which is the best software project center in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is the best software project center in Coimbatore, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer Python, AI, ML, MERN Stack, Java, .NET, PHP, Android, and Flutter final year projects for BE CSE, IT, MCA, BSc, and Diploma students at affordable pricing." } },
    { "@type": "Question", "name": "What programming languages and technologies does Codex Project support?", "acceptedAnswer": { "@type": "Answer", "text": "We support Python, Django, Flask, TensorFlow, PyTorch, MERN Stack (MongoDB, Express, React, Node.js), Java, Spring Boot, .NET, PHP, Laravel, Android, Flutter, React Native, and all major software development technologies for final year projects in Coimbatore." } },
    { "@type": "Question", "name": "Do you provide AI and Machine Learning final year projects in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT is the best AI and Machine Learning project center in Coimbatore. We offer Deep Learning, NLP, Computer Vision, Data Science, and Generative AI projects using Python, TensorFlow, and PyTorch for CSE and IT students." } },
    { "@type": "Question", "name": "What is the cost of software final year projects at Codex Project?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT offers the most affordable software project pricing in Coimbatore. Cost varies by technology and complexity. Visit us at 2nd Floor, Balaji Complex, Gandhipuram for a free project consultation." } },
    { "@type": "Question", "name": "Do you support BE CSE, IT, MCA, and BSc students for software projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we support BE CSE, BE IT, ME CSE, MCA, BSc Computer Science, BCA, and Diploma students from all Coimbatore engineering colleges with final year software project guidance, coding, documentation, and viva preparation." } },
    { "@type": "Question", "name": "Do you provide Android and Flutter mobile app final year projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT provides Android (Java/Kotlin), Flutter, and React Native mobile app final year projects with Firebase integration, REST API, and Play Store deployment support — best mobile app project center in Coimbatore." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.codexproject.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Software Projects Coimbatore", "item": "https://www.codexproject.in/services/software-projects" },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const techDomains = [
  { icon: "🐍", title: "Python Projects", seo: "Python Final Year Projects Coimbatore", color: "#e8f5e9", accentColor: "#2e7d32", tags: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "Scikit-learn"], desc: "Real-time Python web, automation, and data science final year projects — best Python project center in Coimbatore for BE CSE, IT, and MCA students.", filterKey: "Python Projects Coimbatore" },
  { icon: "🤖", title: "AI & Machine Learning Projects", seo: "AI Machine Learning Projects Coimbatore", color: "#e3f2fd", accentColor: "#1565c0", tags: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "YOLO"], desc: "Deep Learning, NLP, Computer Vision, and Generative AI final year projects — best AI ML project center in Coimbatore 2024-25 for CSE and IT students.", filterKey: "AI Projects Coimbatore" },
  { icon: "🧠", title: "Deep Learning & NLP Projects", seo: "Deep Learning NLP Projects Coimbatore", color: "#f3e5f5", accentColor: "#6a1b9a", tags: ["CNN", "RNN", "LSTM", "BERT", "GPT", "Transformer"], desc: "Image classification, sentiment analysis, text summarization, and chatbot NLP final year projects — best Deep Learning project center in Coimbatore.", filterKey: "Deep Learning Projects Coimbatore" },
  { icon: "🌐", title: "MERN Stack Projects", seo: "MERN Stack Projects Coimbatore", color: "#e0f7fa", accentColor: "#00695c", tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "JWT"], desc: "Full-stack MERN web applications with REST API and real-time features — best MERN Stack project center in Coimbatore for IT and CSE students.", filterKey: "MERN Stack Projects Coimbatore" },
  { icon: "☕", title: "Java & Spring Boot Projects", seo: "Java Projects Coimbatore", color: "#fff3e0", accentColor: "#e65100", tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Maven", "JSP"], desc: "Enterprise Java, Spring Boot microservices, and J2EE final year projects — best Java project center in Coimbatore for BE IT and CSE students.", filterKey: "Java Projects Coimbatore" },
  { icon: "🔷", title: ".NET & C# Projects", seo: "Dotnet Projects Coimbatore", color: "#e8eaf6", accentColor: "#283593", tags: [".NET Core", "ASP.NET", "C#", "Entity Framework", "LINQ", "Azure"], desc: "ASP.NET Core, MVC, Web API, and C# Windows application final year projects — best .NET project center in Coimbatore for IT and CSE students.", filterKey: "Dotnet Projects Coimbatore" },
  { icon: "🐘", title: "PHP & Laravel Projects", seo: "PHP Laravel Projects Coimbatore", color: "#fce4ec", accentColor: "#880e4f", tags: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Bootstrap", "jQuery"], desc: "PHP web development, Laravel MVC, and CodeIgniter final year projects — best PHP project center in Coimbatore for BE, BSc, and Diploma students.", filterKey: "PHP Laravel Projects Coimbatore" },
  { icon: "📱", title: "Android App Projects", seo: "Android App Development Projects Coimbatore", color: "#f9fbe7", accentColor: "#33691e", tags: ["Android Studio", "Java", "Kotlin", "Firebase", "REST API", "SQLite"], desc: "Android mobile app final year projects with Firebase, GPS, and sensor integration — best Android project center in Coimbatore for CSE and IT students.", filterKey: "Android Projects Coimbatore" },
  { icon: "🦋", title: "Flutter & React Native", seo: "Flutter React Native Projects Coimbatore", color: "#e1f5fe", accentColor: "#006064", tags: ["Flutter", "Dart", "React Native", "Firebase", "Provider", "GetX"], desc: "Cross-platform Flutter and React Native mobile app final year projects — best Flutter project center in Coimbatore for BE CSE, IT, and MCA students.", filterKey: "Flutter Projects Coimbatore" },
  { icon: "📊", title: "Data Science Projects", seo: "Data Science Projects Coimbatore", color: "#fff8e1", accentColor: "#f57f17", tags: ["Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau", "SQL"], desc: "Data analysis, visualization, predictive modeling, and business intelligence final year projects — best Data Science project center in Coimbatore.", filterKey: "Data Science Projects Coimbatore" },
  { icon: "☁️", title: "Cloud & DevOps Projects", seo: "Cloud Computing Projects Coimbatore", color: "#e8f5e9", accentColor: "#1b5e20", tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"], desc: "AWS, Azure, Docker, and Kubernetes-based cloud computing final year projects for BE CSE and IT students in Coimbatore.", filterKey: "Cloud Projects Coimbatore" },
  { icon: "🔒", title: "Cybersecurity Projects", seo: "Cybersecurity Projects Coimbatore", color: "#fbe9e7", accentColor: "#bf360c", tags: ["Network Security", "Encryption", "Ethical Hacking", "Blockchain", "SSL/TLS"], desc: "Network security, encryption, ethical hacking, and blockchain-based cybersecurity final year projects for CSE students in Coimbatore.", filterKey: "IEEE Software Projects 2024-25" },
];

const projectIdeas = [
  { name: "AI Based Chatbot System", tag: "AI / NLP" },
  { name: "Face Recognition Attendance System", tag: "Deep Learning" },
  { name: "Online Project Management System", tag: "MERN Stack" },
  { name: "Student Attendance System", tag: "PHP / Java" },
  { name: "E-Commerce Web Application", tag: "MERN / Laravel" },
  { name: "AI Plagiarism Detection System", tag: "NLP / Python" },
  { name: "Hospital Management System", tag: "Java / .NET" },
  { name: "Online Job Portal", tag: "PHP / React" },
  { name: "Fake News Detection – NLP", tag: "Deep Learning" },
  { name: "Smart Crop Disease Detection", tag: "CNN / Python" },
  { name: "Stock Price Prediction – LSTM", tag: "Deep Learning" },
  { name: "Traffic Sign Recognition – CNN", tag: "Computer Vision" },
  { name: "Sentiment Analysis – Twitter", tag: "NLP / Python" },
  { name: "Medical Image Analysis – AI", tag: "Deep Learning" },
  { name: "Food Delivery App – Flutter", tag: "Flutter" },
  { name: "Real Estate Portal – MERN", tag: "MERN Stack" },
  { name: "Blockchain Voting System", tag: "Blockchain" },
  { name: "Cloud File Storage System", tag: "Cloud / AWS" },
  { name: "Cybersecurity Intrusion Detection", tag: "Security" },
  { name: "Smart Recommendation System", tag: "AI / ML" },
  { name: "Object Detection – YOLO v8", tag: "Computer Vision" },
  { name: "Customer Churn Prediction – ML", tag: "Data Science" },
  { name: "Virtual Try-On System", tag: "AI / Deep Learning" },
  { name: "Sign Language Recognition", tag: "Computer Vision" },
];

const tagColors = {
  "AI / NLP": "#e3f2fd", "Deep Learning": "#f3e5f5", "MERN Stack": "#e0f7fa",
  "PHP / Java": "#fff3e0", "MERN / Laravel": "#e0f7fa", "NLP / Python": "#f3e5f5",
  "Java / .NET": "#e8eaf6", "PHP / React": "#fce4ec", "CNN / Python": "#e8f5e9",
  "Computer Vision": "#e8f5e9", Flutter: "#e1f5fe", Blockchain: "#ede7f6",
  "Cloud / AWS": "#e3f2fd", Security: "#ffebee", "AI / ML": "#e3f2fd",
  "Data Science": "#fff8e1", "AI / Deep Learning": "#f3e5f5",
};

const whyChoose = [
  { icon: "💰", title: "Most Affordable Software Projects", desc: "Lowest software project cost in Coimbatore — source code + deployment + documentation all included, zero hidden charges." },
  { icon: "💻", title: "All Languages & Frameworks", desc: "Python, Java, .NET, PHP, MERN, Flutter, Android — we support every language and framework for final year projects in Coimbatore." },
  { icon: "🤖", title: "Latest AI & ML Projects 2024-25", desc: "IEEE 2024-25 base paper projects in Deep Learning, NLP, Computer Vision, and Generative AI — best AI project center in Coimbatore." },
  { icon: "📋", title: "Complete IEEE Documentation", desc: "Project report, IEEE abstract, PPT, SRS document, UML diagrams, source code — everything ready for college submission." },
  { icon: "🚀", title: "Live Deployment Support", desc: "We deploy your project on live servers, cloud (AWS/Heroku), or Google Play Store — real working software, not just local runs." },
  { icon: "🎤", title: "Viva & Review Preparation", desc: "Mock viva, review PPT preparation, and technical question coaching for all department reviews at Coimbatore engineering colleges." },
  { icon: "🎓", title: "BE, ME, MCA, BSc Support", desc: "Dedicated guidance for BE CSE, BE IT, ME CSE, MCA, BSc CS, BCA, and Diploma students from all Coimbatore colleges." },
  { icon: "📍", title: "Central Gandhipuram Location", desc: "2nd Floor, Balaji Complex, Gandhipuram — easily accessible from Peelamedu, Saravanampatti, RS Puram, and Singanallur." },
];

const reviews = [
  { stars: 5, text: "Best software project center in Coimbatore! My Python Deep Learning project (Face Recognition) was implemented with TensorFlow and full IEEE documentation. Real working demo with 95%+ accuracy. Highly recommended for CSE students!", name: "Arun K.", branch: "BE CSE – Coimbatore" },
  { stars: 5, text: "Got my MERN Stack e-commerce project done at Codex Project, Balaji Complex Gandhipuram. Complete React frontend, Node.js backend, MongoDB, and live deployment. Best MERN project centre near Gandhipuram — affordable and professional!", name: "Priya M.", branch: "BE IT" },
  { stars: 5, text: "Completed my Flutter mobile app project with Firebase integration at Codex Project Coimbatore. The team coded, tested, and deployed it on Play Store. Excellent viva support too. Best software project center I've visited in Coimbatore!", name: "Ravi S.", branch: "MCA – Gandhipuram" },
  { stars: 5, text: "My Java Spring Boot microservices project was brilliantly executed at Codex Project. IEEE documentation, UML diagrams, and deployment — everything was perfect. Most affordable Java project center in Coimbatore!", name: "Divya R.", branch: "ME CSE" },
];

const filterKeywords = [
  "Software Projects Coimbatore", "Python Projects Coimbatore", "AI Projects Coimbatore",
  "Machine Learning Projects Coimbatore", "Deep Learning Projects Coimbatore", "NLP Projects Coimbatore",
  "MERN Stack Projects Coimbatore", "Java Projects Coimbatore", "Dotnet Projects Coimbatore",
  "PHP Laravel Projects Coimbatore", "Android Projects Coimbatore", "Flutter Projects Coimbatore",
  "Data Science Projects Coimbatore", "Cloud Projects Coimbatore", "IEEE Software Projects 2024-25",
  "Software Centre Gandhipuram", "Affordable Software Projects Coimbatore", "CSE IT MCA Projects Coimbatore",
];

// ─── Component ─────────────────────────────────────────────────────────────────
const SoftwareProjects = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRefs = useRef([]);

  const filteredDomains = activeFilter
    ? techDomains.filter((t) => t.filterKey === activeFilter || t.seo.includes(activeFilter.split(" ")[0]))
    : techDomains;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("sp-visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const scrollToTech = () => {
    document.getElementById("tech-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sp-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="sp-hero" aria-labelledby="sp-h1">
        <div className="sp-hero-bg">
          <div className="sp-hero-grid"></div>
          <div className="sp-glow sp-glow1"></div>
          <div className="sp-glow sp-glow2"></div>
        </div>
        <div className="sp-container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="sp-breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="sp-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/services" itemProp="item"><span itemProp="name">Services</span></a>
                <meta itemProp="position" content="2" />
              </li>
              <span className="sp-bc-sep">›</span>
              <li aria-current="page" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Software Projects</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <h1 id="sp-h1" className="sp-hero-h1">
            Best Software Project Center<br />
            in Coimbatore –{" "}
            <span className="sp-accent">CODEX PROJECT</span>
          </h1>

          <p className="sp-hero-sub">
            Top-rated software &amp; AI final year project center for BE CSE, IT, MCA, BSc &amp; Diploma students – Gandhipuram, Coimbatore
          </p>

          <p className="sp-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best software project center in Coimbatore</strong>,
            offering real-time final year projects in <strong>Python, AI, Machine Learning, Deep Learning,
            MERN Stack, Java, .NET, PHP, Android, Flutter</strong>, and all major software technologies —
            with complete source code, IEEE documentation, live deployment, and viva support at the most
            <strong> affordable pricing in Coimbatore</strong>.
          </p>

          <p className="sp-hero-addr">📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012</p>
          <p className="sp-hero-serve">Serving BE CSE, IT, ME CSE, MCA, BSc CS, BCA &amp; Diploma students from all Coimbatore engineering colleges</p>

          <div className="sp-hero-actions">
            <a href="tel:+918525999022" className="sp-btn sp-btn-primary">📞 Call: 85259 99022</a>
            <button className="sp-btn sp-btn-outline" onClick={scrollToTech}>Explore Technologies ↓</button>
          </div>
        </div>
      </section>

      <div className="sp-container sp-main-content">

        {/* ══ FILTER KEYWORD CLOUD ══ */}
        <section className="sp-filter-section sp-reveal" ref={addRef} aria-label="Filter by technology">
          <div className="sp-filter-header">
            <h2 className="sp-filter-title">Browse by Technology</h2>
            {activeFilter && (
              <button className="sp-filter-clear" onClick={() => setActiveFilter(null)}>
                ✕ Show All
              </button>
            )}
          </div>
          <div className="sp-filter-chips">
            {filterKeywords.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveFilter(activeFilter === tag ? null : tag); scrollToTech(); }}
                className={`sp-filter-chip ${activeFilter === tag ? "sp-chip-active" : ""}`}
                aria-label={`Filter: ${tag}`}
                aria-pressed={activeFilter === tag}
              >
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <p className="sp-filter-result-note">
              Showing results for: <strong>{activeFilter}</strong>
              {" "}— {filteredDomains.length} domain{filteredDomains.length !== 1 ? "s" : ""} found
            </p>
          )}
        </section>

        {/* ══ TECH DOMAIN CARDS ══ */}
        <section id="tech-heading" aria-labelledby="tech-heading-label" className="sp-section sp-reveal" ref={addRef}>
          <h2 id="tech-heading-label" className="sp-section-title">
            Software Project Technologies – CODEX PROJECT Coimbatore
          </h2>
          <p className="sp-section-sub">
            We support ALL programming languages and frameworks — Python, Java, .NET, PHP,
            MERN, Flutter, Android and more — full source code + deployment + IEEE documentation
          </p>
          <div className="sp-tech-grid">
            {filteredDomains.map((t, i) => (
              <article
                key={i}
                className="sp-tech-card"
                style={{ "--tc": t.accentColor, "--tbg": t.color }}
                itemScope itemType="https://schema.org/Service"
                aria-label={t.seo}
              >
                <div className="sp-tc-top-bar"></div>
                <div className="sp-tc-icon">{t.icon}</div>
                <h3 className="sp-tc-title" itemProp="name">{t.title}</h3>
                <meta itemProp="serviceType" content={t.seo} />
                <meta itemProp="areaServed" content="Coimbatore" />
                <p className="sp-tc-desc" itemProp="description">{t.desc}</p>
                <div className="sp-tc-tags">
                  {t.tags.map((tag, j) => (
                    <span key={j} className="sp-tc-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {filteredDomains.length === 0 && (
            <div className="sp-no-results">
              <p>No exact match found. <button onClick={() => setActiveFilter(null)} className="sp-reset-link">Show all technologies</button></p>
            </div>
          )}
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="sp-section sp-reveal" ref={addRef}>
          <h2 id="projects-heading" className="sp-section-title">
            Software Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="sp-section-sub">
            Latest IEEE 2024-25 software project topics in AI, ML, Web Development,
            Mobile Apps &amp; Cloud for CSE, IT, MCA &amp; BSc students in Coimbatore
          </p>
          <div className="sp-ideas-grid">
            {projectIdeas.map((p, i) => (
              <div
                key={i}
                className="sp-idea-card"
                style={{ "--ibg": tagColors[p.tag] || "#f8f9fa" }}
                itemScope itemType="https://schema.org/CreativeWork"
              >
                <p className="sp-idea-name" itemProp="name">{p.name}</p>
                <span className="sp-idea-tag" itemProp="genre">{p.tag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══ */}
        <section aria-labelledby="why-heading" className="sp-section sp-reveal" ref={addRef}>
          <h2 id="why-heading" className="sp-section-title">
            Why CODEX PROJECT is the Best Software Project Center in Coimbatore
          </h2>
          <p className="sp-section-sub">
            Trusted by 1000+ CSE, IT &amp; MCA students across Coimbatore for real-time software projects
          </p>
          <div className="sp-why-grid">
            {whyChoose.map((w, i) => (
              <div key={i} className="sp-why-card" style={{ "--wd": `${i * 0.06}s` }}>
                <span className="sp-why-icon">{w.icon}</span>
                <h3 className="sp-why-title">{w.title}</h3>
                <p className="sp-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══ */}
        <section aria-labelledby="reviews-heading" className="sp-section sp-reveal" ref={addRef}>
          <h2 id="reviews-heading" className="sp-section-title">
            Student Reviews – Software Project Center Coimbatore
          </h2>
          <p className="sp-section-sub">
            What CSE, IT &amp; MCA students say about CODEX PROJECT's software final year project support
          </p>
          <div className="sp-reviews-grid">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="sp-review-card"
                itemScope itemType="https://schema.org/Review"
              >
                <div className="sp-review-stars">
                  {"⭐".repeat(r.stars)}
                  <meta itemProp="reviewRating" content={r.stars} />
                </div>
                <p className="sp-review-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="sp-review-author">
                  <div className="sp-review-avatar">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="sp-review-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ — TOGGLE ══ */}
        <section aria-labelledby="faq-heading" className="sp-section sp-reveal" ref={addRef}>
          <h2 id="faq-heading" className="sp-section-title">
            Frequently Asked Questions – Software Project Center Coimbatore
          </h2>
          <div className="sp-faq-list">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className={`sp-faq-item ${openFaq === i ? "sp-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ "--fd": `${i * 0.06}s` }}
              >
                <div className="sp-faq-q">
                  <h3 className="sp-faq-question">{item.name}</h3>
                  <span className="sp-faq-icon" aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                <div className="sp-faq-a">
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-heading" className="sp-section sp-seo-block sp-reveal" ref={addRef}>
          <h2 id="seo-heading" className="sp-seo-title">
            Software Project Center in Coimbatore – Complete Guide 2024-25
          </h2>
          <p>
            Searching for the <strong>best software project center in Coimbatore</strong>? CODEX
            PROJECT, located at <strong>2nd Floor, Balaji Complex, Gandhipuram, Coimbatore</strong>,
            is your complete software final year project solution. We support every major
            programming language and framework — <strong>Python Django projects</strong>,{" "}
            <strong>AI and Machine Learning projects</strong>,{" "}
            <strong>Deep Learning and NLP projects</strong>,{" "}
            <strong>MERN Stack web projects</strong>, <strong>Java Spring Boot projects</strong>,{" "}
            <strong>.NET ASP.NET projects</strong>, <strong>PHP Laravel projects</strong>,{" "}
            <strong>Android app projects</strong>, <strong>Flutter projects</strong>, and{" "}
            <strong>Data Science projects</strong> — all with real-time implementation and
            affordable pricing in Coimbatore.
          </p>
          <p>
            Every software project at CODEX PROJECT includes complete source code,
            IEEE 2024-25 base paper implementation, project report, PPT, UML diagrams,
            SRS document, and live deployment support. We serve{" "}
            <strong>BE CSE students</strong>, <strong>BE IT students</strong>,{" "}
            <strong>ME CSE students</strong>, <strong>MCA students</strong>,{" "}
            <strong>BSc Computer Science students</strong>, <strong>BCA students</strong>, and{" "}
            <strong>Diploma students</strong> from all engineering colleges across Coimbatore —
            including those near Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur,
            and Ukkadam.
          </p>
          <p>
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram,
            Coimbatore</strong> for a free consultation on your software final year project
            topic and pricing. We are the <strong>most trusted and affordable software project
            center in Coimbatore</strong> for 2024-25 — with 1000+ successful student
            projects delivered in Python, AI, MERN, Java, and more.
          </p>
        </section>

        {/* ══ LOCATION ══ */}
        <section aria-labelledby="location-heading" className="sp-section sp-reveal" ref={addRef}>
          <h2 id="location-heading" className="sp-section-title sp-center">
            Visit CODEX PROJECT – Software Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="sp-location-addr">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <div className="sp-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CODEX PROJECT Software Project Center – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
              aria-label="Google Maps showing CODEX PROJECT software centre at Balaji Complex Gandhipuram Coimbatore"
            />
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="sp-cta sp-reveal" ref={addRef} aria-labelledby="cta-heading">
          <div className="sp-cta-bg"></div>
          <div className="sp-cta-inner">
            <h2 id="cta-heading" className="sp-cta-title">
              Start Your Software Final Year Project Today – CODEX PROJECT Coimbatore
            </h2>
            <p className="sp-cta-sub">Join 1000+ CSE, IT &amp; MCA students who completed their software projects with us.</p>
            <p className="sp-cta-addr">📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012</p>
            <p className="sp-cta-tags">Python · AI · MERN · Java · .NET · PHP · Android · Flutter · IEEE 2024-25 · Affordable</p>
            <div className="sp-cta-actions">
              <a href="tel:+918525999022" className="sp-cta-btn sp-cta-primary" aria-label="Contact CODEX PROJECT software project center">
                📞 Contact Now – Free Consultation
              </a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="sp-cta-btn sp-cta-outline" aria-label="Review CODEX PROJECT on Google">
                ⭐ Review on Google
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SoftwareProjects;