import React from "react";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Best Software Project Center in Coimbatore – CODEX PROJECT",
  "serviceType": "Software Final Year Project Training and Development",
  "description":
    "CODEX PROJECT is the best software project center in Coimbatore offering real-time Python, AI, ML, Django, MERN Stack, Java, .NET, PHP, React, Node.js, Android, and Flutter final year projects for BE CSE, IT, MCA, BSc, and Diploma students with complete coding, documentation, and viva support at affordable pricing.",
  "provider": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
  },
  "areaServed": { "@type": "City", "name": "Coimbatore" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Project Services Coimbatore",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Python AI ML Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MERN Stack Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Java Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PHP Web Development Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Learning NLP Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flutter Mobile App Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dotnet Projects Coimbatore" } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "220",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best software project center in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT is the best software project center in Coimbatore, located at 2nd Floor, Balaji Complex, Gandhipuram. We offer Python, AI, ML, MERN Stack, Java, .NET, PHP, Android, and Flutter final year projects for BE CSE, IT, MCA, BSc, and Diploma students at affordable pricing.",
      },
    },
    {
      "@type": "Question",
      "name": "What programming languages and technologies does Codex Project support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We support Python, Django, Flask, TensorFlow, PyTorch, MERN Stack (MongoDB, Express, React, Node.js), Java, Spring Boot, .NET, PHP, Laravel, Android, Flutter, React Native, and all major software development technologies for final year projects in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide AI and Machine Learning final year projects in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, CODEX PROJECT is the best AI and Machine Learning project center in Coimbatore. We offer Deep Learning, NLP, Computer Vision, Data Science, and Generative AI projects using Python, TensorFlow, and PyTorch for CSE and IT students.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cost of software final year projects at Codex Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT offers the most affordable software project pricing in Coimbatore. Cost varies by technology and complexity. Visit us at 2nd Floor, Balaji Complex, Gandhipuram for a free project consultation.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you support BE CSE, IT, MCA, and BSc students for software projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, we support BE CSE, BE IT, ME CSE, MCA, BSc Computer Science, BCA, and Diploma students from all Coimbatore engineering colleges with final year software project guidance, coding, documentation, and viva preparation.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide Android and Flutter mobile app final year projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, CODEX PROJECT provides Android (Java/Kotlin), Flutter, and React Native mobile app final year projects with Firebase integration, REST API, and Play Store deployment support — best mobile app project center in Coimbatore.",
      },
    },
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
  {
    icon: "🐍",
    title: "Python Projects",
    seo: "Python Final Year Projects Coimbatore",
    color: "#e8f5e9",
    tags: ["Django", "Flask", "FastAPI", "Pandas", "NumPy", "Scikit-learn"],
    desc: "Real-time Python web, automation, and data science final year projects — best Python project center in Coimbatore for BE CSE, IT, and MCA students.",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning Projects",
    seo: "AI Machine Learning Projects Coimbatore",
    color: "#e3f2fd",
    tags: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "YOLO"],
    desc: "Deep Learning, NLP, Computer Vision, and Generative AI final year projects — best AI ML project center in Coimbatore 2024-25 for CSE and IT students.",
  },
  {
    icon: "🧠",
    title: "Deep Learning & NLP Projects",
    seo: "Deep Learning NLP Projects Coimbatore",
    color: "#f3e5f5",
    tags: ["CNN", "RNN", "LSTM", "BERT", "GPT", "Transformer"],
    desc: "Image classification, sentiment analysis, text summarization, and chatbot NLP final year projects — best Deep Learning project center in Coimbatore.",
  },
  {
    icon: "🌐",
    title: "MERN Stack Projects",
    seo: "MERN Stack Projects Coimbatore",
    color: "#e0f7fa",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "JWT"],
    desc: "Full-stack MERN web applications with REST API and real-time features — best MERN Stack project center in Coimbatore for IT and CSE students.",
  },
  {
    icon: "☕",
    title: "Java & Spring Boot Projects",
    seo: "Java Projects Coimbatore",
    color: "#fff3e0",
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Maven", "JSP"],
    desc: "Enterprise Java, Spring Boot microservices, and J2EE final year projects — best Java project center in Coimbatore for BE IT and CSE students.",
  },
  {
    icon: "🔷",
    title: ".NET & C# Projects",
    seo: "Dotnet Projects Coimbatore",
    color: "#e8eaf6",
    tags: [".NET Core", "ASP.NET", "C#", "Entity Framework", "LINQ", "Azure"],
    desc: "ASP.NET Core, MVC, Web API, and C# Windows application final year projects — best .NET project center in Coimbatore for IT and CSE students.",
  },
  {
    icon: "🐘",
    title: "PHP & Laravel Projects",
    seo: "PHP Laravel Projects Coimbatore",
    color: "#fce4ec",
    tags: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Bootstrap", "jQuery"],
    desc: "PHP web development, Laravel MVC, and CodeIgniter final year projects — best PHP project center in Coimbatore for BE, BSc, and Diploma students.",
  },
  {
    icon: "📱",
    title: "Android App Projects",
    seo: "Android App Development Projects Coimbatore",
    color: "#f9fbe7",
    tags: ["Android Studio", "Java", "Kotlin", "Firebase", "REST API", "SQLite"],
    desc: "Android mobile app final year projects with Firebase, GPS, and sensor integration — best Android project center in Coimbatore for CSE and IT students.",
  },
  {
    icon: "🦋",
    title: "Flutter & React Native",
    seo: "Flutter React Native Projects Coimbatore",
    color: "#e1f5fe",
    tags: ["Flutter", "Dart", "React Native", "Firebase", "Provider", "GetX"],
    desc: "Cross-platform Flutter and React Native mobile app final year projects — best Flutter project center in Coimbatore for BE CSE, IT, and MCA students.",
  },
  {
    icon: "📊",
    title: "Data Science Projects",
    seo: "Data Science Projects Coimbatore",
    color: "#fff8e1",
    tags: ["Pandas", "Matplotlib", "Seaborn", "Power BI", "Tableau", "SQL"],
    desc: "Data analysis, visualization, predictive modeling, and business intelligence final year projects — best Data Science project center in Coimbatore.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps Projects",
    seo: "Cloud Computing Projects Coimbatore",
    color: "#e8f5e9",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    desc: "AWS, Azure, Docker, and Kubernetes-based cloud computing final year projects for BE CSE and IT students in Coimbatore.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity Projects",
    seo: "Cybersecurity Projects Coimbatore",
    color: "#fbe9e7",
    tags: ["Network Security", "Encryption", "Ethical Hacking", "Blockchain", "SSL/TLS"],
    desc: "Network security, encryption, ethical hacking, and blockchain-based cybersecurity final year projects for CSE students in Coimbatore.",
  },
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
  "AI / NLP": "#e3f2fd",
  "Deep Learning": "#f3e5f5",
  "MERN Stack": "#e0f7fa",
  "PHP / Java": "#fff3e0",
  "MERN / Laravel": "#e0f7fa",
  "NLP / Python": "#f3e5f5",
  "Java / .NET": "#e8eaf6",
  "PHP / React": "#fce4ec",
  "CNN / Python": "#e8f5e9",
  "Computer Vision": "#e8f5e9",
  Flutter: "#e1f5fe",
  Blockchain: "#ede7f6",
  "Cloud / AWS": "#e3f2fd",
  Security: "#ffebee",
  "AI / ML": "#e3f2fd",
  "Data Science": "#fff8e1",
  "AI / Deep Learning": "#f3e5f5",
};

const whyChoose = [
  {
    icon: "💰",
    title: "Most Affordable Software Projects",
    desc: "Lowest software project cost in Coimbatore — source code + deployment + documentation all included, zero hidden charges.",
  },
  {
    icon: "💻",
    title: "All Languages & Frameworks",
    desc: "Python, Java, .NET, PHP, MERN, Flutter, Android — we support every language and framework for final year projects in Coimbatore.",
  },
  {
    icon: "🤖",
    title: "Latest AI & ML Projects 2024-25",
    desc: "IEEE 2024-25 base paper projects in Deep Learning, NLP, Computer Vision, and Generative AI — best AI project center in Coimbatore.",
  },
  {
    icon: "📋",
    title: "Complete IEEE Documentation",
    desc: "Project report, IEEE abstract, PPT, SRS document, UML diagrams, source code — everything ready for college submission.",
  },
  {
    icon: "🚀",
    title: "Live Deployment Support",
    desc: "We deploy your project on live servers, cloud (AWS/Heroku), or Google Play Store — real working software, not just local runs.",
  },
  {
    icon: "🎤",
    title: "Viva & Review Preparation",
    desc: "Mock viva, review PPT preparation, and technical question coaching for all department reviews at Coimbatore engineering colleges.",
  },
  {
    icon: "🎓",
    title: "BE, ME, MCA, BSc Support",
    desc: "Dedicated guidance for BE CSE, BE IT, ME CSE, MCA, BSc CS, BCA, and Diploma students from all Coimbatore colleges.",
  },
  {
    icon: "📍",
    title: "Central Gandhipuram Location",
    desc: "2nd Floor, Balaji Complex, Gandhipuram — easily accessible from Peelamedu, Saravanampatti, RS Puram, and Singanallur.",
  },
];

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Best software project center in Coimbatore! My Python Deep Learning project (Face Recognition) was implemented with TensorFlow and full IEEE documentation. Real working demo with 95%+ accuracy. Highly recommended for CSE students!",
    name: "Arun K., BE CSE – Coimbatore",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Got my MERN Stack e-commerce project done at Codex Project, Balaji Complex Gandhipuram. Complete React frontend, Node.js backend, MongoDB, and live deployment. Best MERN project centre near Gandhipuram — affordable and professional!",
    name: "Priya M., BE IT",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Completed my Flutter mobile app project with Firebase integration at Codex Project Coimbatore. The team coded, tested, and deployed it on Play Store. Excellent viva support too. Best software project center I've visited in Coimbatore!",
    name: "Ravi S., MCA – Gandhipuram",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "My Java Spring Boot microservices project was brilliantly executed at Codex Project. IEEE documentation, UML diagrams, and deployment — everything was perfect. Most affordable Java project center in Coimbatore!",
    name: "Divya R., ME CSE",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const SoftwareProjects = () => {
  return (
    <div>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
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
            <li className="breadcrumb-item" itemScope itemType="https://schema.org/ListItem">
              <a href="/services" itemProp="item"><span itemProp="name">Services</span></a>
              <meta itemProp="position" content="2" />
            </li>
            <li className="breadcrumb-item active" aria-current="page" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Software Projects Coimbatore</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══ H1 ══ */}
        <h1 className="text-center mb-3">
          Best Software Project Center in Coimbatore – CODEX PROJECT
        </h1>
        <p className="text-center lead mb-2">
          Top-rated software &amp; AI final year project center for BE CSE, IT, MCA, BSc &amp; Diploma students – Gandhipuram, Coimbatore
        </p>
        <p className="text-center mb-1">
          <strong>CODEX PROJECT</strong> is the <strong>best software project center in Coimbatore</strong>,
          offering real-time final year projects in <strong>Python, AI, Machine Learning, Deep Learning,
          MERN Stack, Java, .NET, PHP, Android, Flutter</strong>, and all major software technologies —
          with complete source code, IEEE documentation, live deployment, and viva support at the most
          <strong> affordable pricing in Coimbatore</strong>.
        </p>
        <p className="text-center text-muted small mb-2">
          📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
          Cross Cut Road, Gandhipuram, Coimbatore – 641012
        </p>
        <p className="text-center text-muted small mb-5">
          Serving BE CSE, IT, ME CSE, MCA, BSc CS, BCA &amp; Diploma students from all Coimbatore engineering colleges
        </p>

        {/* ══ TECH DOMAIN CARDS ══ */}
        <section aria-labelledby="tech-heading" className="mb-5">
          <h2 id="tech-heading" className="text-center mb-2">
            Software Project Technologies – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            We support ALL programming languages and frameworks — Python, Java, .NET, PHP,
            MERN, Flutter, Android and more — full source code + deployment + IEEE documentation
          </p>
          <div className="row g-4">
            {techDomains.map((t, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <article
                  className="card h-100 shadow-sm border-0 p-3"
                  style={{ borderLeft: `4px solid #1565c0`, background: t.color }}
                  itemScope itemType="https://schema.org/Service"
                  aria-label={t.seo}
                >
                  <div className="fs-2 mb-2" aria-hidden="true">{t.icon}</div>
                  <h3 className="h6 fw-bold card-title" itemProp="name">{t.title}</h3>
                  <meta itemProp="serviceType" content={t.seo} />
                  <meta itemProp="areaServed" content="Coimbatore" />
                  <p className="card-text text-muted small mb-2" itemProp="description">{t.desc}</p>
                  <div className="d-flex flex-wrap gap-1">
                    {t.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="badge"
                        style={{ background: "#1565c0", color: "white", fontSize: "0.68rem" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="mb-5">
          <h2 id="projects-heading" className="text-center mb-2">
            Software Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="text-center text-muted mb-4">
            Latest IEEE 2024-25 software project topics in AI, ML, Web Development,
            Mobile Apps &amp; Cloud for CSE, IT, MCA &amp; BSc students in Coimbatore
          </p>
          <div className="row g-3">
            {projectIdeas.map((p, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div
                  className="p-3 rounded border h-100"
                  style={{ background: tagColors[p.tag] || "#f8f9fa" }}
                  itemScope itemType="https://schema.org/CreativeWork"
                >
                  <p className="mb-1 fw-semibold small" itemProp="name">{p.name}</p>
                  <span
                    className="badge"
                    style={{ background: "#1565c0", color: "white", fontSize: "0.68rem" }}
                    itemProp="genre"
                  >
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══ */}
        <section aria-labelledby="why-heading" className="mb-5">
          <h2 id="why-heading" className="text-center mb-2">
            Why CODEX PROJECT is the Best Software Project Center in Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Trusted by 1000+ CSE, IT &amp; MCA students across Coimbatore for real-time software projects
          </p>
          <div className="row g-4">
            {whyChoose.map((w, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="d-flex flex-column gap-2 p-3 bg-light rounded h-100">
                  <span className="fs-3" aria-hidden="true">{w.icon}</span>
                  <div>
                    <h3 className="h6 fw-bold mb-1">{w.title}</h3>
                    <p className="text-muted mb-0 small">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══ */}
        <section aria-labelledby="reviews-heading" className="mb-5">
          <h2 id="reviews-heading" className="text-center mb-2">
            Student Reviews – Software Project Center Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            What CSE, IT &amp; MCA students say about CODEX PROJECT's software final year project support
          </p>
          <div className="row g-4">
            {reviews.map((r, i) => (
              <div key={i} className="col-md-6">
                <div
                  className="card border-0 shadow-sm h-100 p-3"
                  itemScope itemType="https://schema.org/Review"
                >
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <p className="mb-1">{r.stars}</p>
                  </div>
                  <p className="text-muted fst-italic small" itemProp="reviewBody">"{r.text}"</p>
                  <p className="fw-bold mb-0 small" itemProp="author">– {r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section aria-labelledby="faq-heading" className="mb-5">
          <h2 id="faq-heading" className="text-center mb-4">
            Frequently Asked Questions – Software Project Center Coimbatore
          </h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="mb-3 p-3 bg-light rounded">
              <h3 className="h6 fw-bold mb-1">{item.name}</h3>
              <p className="text-muted mb-0 small">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-heading" className="mb-5 p-4 border rounded">
          <h2 id="seo-heading" className="h5 fw-bold mb-3">
            Software Project Center in Coimbatore – Complete Guide 2024-25
          </h2>
          <p className="text-muted small">
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
          <p className="text-muted small">
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
          <p className="text-muted small mb-0">
            Visit CODEX PROJECT at <strong>Balaji Complex, Cross Cut Road, Gandhipuram,
            Coimbatore</strong> for a free consultation on your software final year project
            topic and pricing. We are the <strong>most trusted and affordable software project
            center in Coimbatore</strong> for 2024-25 — with 1000+ successful student
            projects delivered in Python, AI, MERN, Java, and more.
          </p>
        </section>

        {/* ══ KEYWORD TAG CLOUD ══ */}
        <section aria-label="Related software project searches Coimbatore" className="mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "Software Projects Coimbatore",
              "Python Projects Coimbatore",
              "AI Projects Coimbatore",
              "Machine Learning Projects Coimbatore",
              "Deep Learning Projects Coimbatore",
              "NLP Projects Coimbatore",
              "MERN Stack Projects Coimbatore",
              "Java Projects Coimbatore",
              "Dotnet Projects Coimbatore",
              "PHP Laravel Projects Coimbatore",
              "Android Projects Coimbatore",
              "Flutter Projects Coimbatore",
              "Data Science Projects Coimbatore",
              "Cloud Projects Coimbatore",
              "IEEE Software Projects 2024-25",
              "Software Centre Gandhipuram",
              "Affordable Software Projects Coimbatore",
              "CSE IT MCA Projects Coimbatore",
            ].map((tag) => (
              <a
                key={tag}
                href={`/services/software-projects/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="badge px-3 py-2 text-decoration-none"
                style={{ background: "#1565c0", color: "white", fontSize: "0.78rem" }}
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
            Visit CODEX PROJECT – Software Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="text-center text-muted mb-3">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <iframe
            src="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            title="CODEX PROJECT Software Project Center – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
            aria-label="Google Maps showing CODEX PROJECT software centre at Balaji Complex Gandhipuram Coimbatore"
          />
        </section>

        {/* ══ CTA ══ */}
        <section
          className="text-center p-5 rounded"
          style={{ background: "#1565c0" }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-white fw-bold mb-2">
            Start Your Software Final Year Project Today – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-white-50 mb-1">
            Join 1000+ CSE, IT &amp; MCA students who completed their software projects with us.
          </p>
          <p className="text-white-50 small mb-1">
            📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
          </p>
          <p className="text-white-50 small mb-4">
            Python · AI · MERN · Java · .NET · PHP · Android · Flutter · IEEE 2024-25 · Affordable
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-warning btn-lg fw-bold"
              aria-label="Contact CODEX PROJECT software project center Gandhipuram Coimbatore"
            >
              📞 Contact Now – Free Consultation
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

export default SoftwareProjects;