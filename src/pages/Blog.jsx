import React from "react";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "CODEX PROJECT Blog – Final Year Projects Coimbatore",
  "url": "https://www.codexproject.in/blog",
  "description":
    "CODEX PROJECT blog covers the latest final year project ideas, IEEE 2024-25 project topics, technology trends, and expert guidance for Mechanical, IoT, Embedded, Software, AI, and ML engineering students in Coimbatore.",
  "publisher": {
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.codexproject.in/" },
    { "@type": "ListItem", "position": 2, "name": "Blog – Final Year Projects Coimbatore", "item": "https://www.codexproject.in/blog" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best final year project ideas for CSE students in Coimbatore 2024-25?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The best final year project ideas for CSE students in Coimbatore 2024-25 include AI Chatbot using NLP, Face Recognition Attendance System, Deep Learning medical image analysis, MERN Stack e-commerce platforms, Flutter mobile apps, and YOLO object detection. CODEX PROJECT at Gandhipuram, Coimbatore provides all these projects with IEEE documentation.",
      },
    },
    {
      "@type": "Question",
      "name": "Which IoT projects are best for ECE students in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Best IoT projects for ECE students in Coimbatore include Smart Irrigation using NodeMCU, IoT Health Monitoring with Raspberry Pi, Home Automation with ESP32, Smart Energy Meter, and AWS IoT cloud projects. CODEX PROJECT Coimbatore provides all these with real hardware and cloud integration.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the trending embedded system project ideas for 2024-25?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Trending embedded system project ideas for 2024-25 include ARM Cortex motor control, FPGA-based VLSI designs, Raspberry Pi AI projects, GPS vehicle tracking with GSM, and RFID access control systems. CODEX PROJECT Coimbatore provides all these with Keil, Proteus, and real hardware.",
      },
    },
    {
      "@type": "Question",
      "name": "How to choose the best final year project in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "To choose the best final year project in Coimbatore: (1) Pick a domain aligned with your branch, (2) Choose IEEE 2024-25 base paper topics, (3) Consider your college's hardware/software lab availability, (4) Visit CODEX PROJECT at Balaji Complex, Gandhipuram for a free expert consultation on project selection.",
      },
    },
  ],
};

// ─── Blog Data ────────────────────────────────────────────────────────────────
const blogs = [
  {
    slug: "best-mechanical-project-ideas-coimbatore-2025",
    category: "Mechanical",
    categoryColor: "#2e7d32",
    categoryBg: "#e8f5e9",
    date: "March 2025",
    readTime: "5 min read",
    title: "Best Mechanical Final Year Project Ideas in Coimbatore 2024-25",
    seoTitle: "Best Mechanical Final Year Project Ideas Coimbatore 2024-25",
    desc: "Top 20 mechanical final year project ideas with fabrication, CAD/CAM, robotics, and automation for BE Mechanical, ME, and Diploma students in Coimbatore. Includes project cost and implementation guide.",
    tags: ["Fabrication", "Robotics", "CAD/CAM", "Automation", "Coimbatore"],
    highlights: ["Hydraulic Systems", "Pneumatic Robots", "Solar Vehicles", "Mini CNC", "ANSYS Projects"],
  },
  {
    slug: "top-iot-projects-final-year-students-coimbatore",
    category: "IoT",
    categoryColor: "#00695c",
    categoryBg: "#e0f7fa",
    date: "March 2025",
    readTime: "6 min read",
    title: "Top IoT Final Year Project Ideas for ECE Students – Coimbatore 2024-25",
    seoTitle: "Top IoT Projects ECE Students Coimbatore 2024-25",
    desc: "Explore 20+ latest IoT project ideas using Arduino, NodeMCU, ESP32, Raspberry Pi with cloud platforms like AWS IoT, Firebase, and ThingSpeak. Best IoT projects for ECE, EEE, and CSE students in Coimbatore.",
    tags: ["Arduino", "NodeMCU", "ESP32", "Raspberry Pi", "AWS IoT", "Firebase"],
    highlights: ["Smart Agriculture", "Health Monitoring", "Home Automation", "Smart City", "Edge AI IoT"],
  },
  {
    slug: "best-embedded-system-projects-coimbatore-2025",
    category: "Embedded",
    categoryColor: "#1a237e",
    categoryBg: "#e8eaf6",
    date: "February 2025",
    readTime: "5 min read",
    title: "Best Embedded System Project Ideas in Coimbatore 2024-25 – 8051, ARM, PIC",
    seoTitle: "Best Embedded System Projects Coimbatore 2024-25",
    desc: "Complete guide to embedded system final year project ideas using 8051, ARM Cortex, PIC, AVR, Arduino, Raspberry Pi, and FPGA for BE ECE, EEE, and Diploma students in Coimbatore with Keil and Proteus support.",
    tags: ["8051", "ARM Cortex", "PIC", "Arduino", "FPGA", "Keil", "Proteus"],
    highlights: ["Traffic Control", "Motor Speed Controller", "RFID Systems", "VLSI Design", "GPS Tracking"],
  },
  {
    slug: "top-python-ai-ml-project-ideas-coimbatore",
    category: "AI & ML",
    categoryColor: "#6a1b9a",
    categoryBg: "#f3e5f5",
    date: "February 2025",
    readTime: "7 min read",
    title: "Top Python AI & Machine Learning Final Year Project Ideas – Coimbatore 2025",
    seoTitle: "Python AI ML Project Ideas Coimbatore 2025",
    desc: "Latest IEEE 2024-25 Python AI and Machine Learning project ideas including Deep Learning, NLP, Computer Vision, Generative AI, and Data Science for BE CSE, IT, MCA, and BSc students in Coimbatore.",
    tags: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "GenAI"],
    highlights: ["Face Recognition", "Sentiment Analysis", "Medical AI", "YOLO Detection", "Text Generation"],
  },
  {
    slug: "low-cost-final-year-projects-coimbatore",
    category: "Guide",
    categoryColor: "#e65100",
    categoryBg: "#fff3e0",
    date: "January 2025",
    readTime: "4 min read",
    title: "Low Cost Final Year Projects in Coimbatore – Complete Pricing Guide 2025",
    seoTitle: "Low Cost Affordable Final Year Projects Coimbatore 2025",
    desc: "Complete guide to affordable final year project pricing in Coimbatore for Mechanical, IoT, Embedded, and Software domains. Compare costs, understand what's included, and find the most budget-friendly project center in Coimbatore.",
    tags: ["Affordable", "Low Cost", "Pricing", "Budget Projects", "Coimbatore"],
    highlights: ["Software Projects", "Embedded Projects", "IoT Projects", "Mechanical Projects", "All Domains"],
  },
  {
    slug: "mern-stack-react-nodejs-final-year-projects-coimbatore",
    category: "Web Dev",
    categoryColor: "#1565c0",
    categoryBg: "#e3f2fd",
    date: "January 2025",
    readTime: "6 min read",
    title: "Best MERN Stack & React Final Year Project Ideas – Coimbatore 2024-25",
    seoTitle: "MERN Stack React Projects Coimbatore 2024-25",
    desc: "Top MERN Stack, React.js, Node.js, and full-stack web development final year project ideas with live deployment for BE CSE, IT, and MCA students in Coimbatore. Includes MongoDB, Express, JWT, and REST API projects.",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "REST API", "JWT"],
    highlights: ["E-Commerce Portal", "Social Media App", "Job Board", "Learning Platform", "Real Estate App"],
  },
  {
    slug: "ieee-2025-project-ideas-engineering-students-coimbatore",
    category: "IEEE",
    categoryColor: "#37474f",
    categoryBg: "#eceff1",
    date: "December 2024",
    readTime: "8 min read",
    title: "IEEE 2024-25 Final Year Project Ideas for Engineering Students – Coimbatore",
    seoTitle: "IEEE 2024-25 Project Ideas Engineering Students Coimbatore",
    desc: "Complete list of IEEE 2024-25 base paper project ideas for all engineering branches — CSE, ECE, EEE, Mechanical, IT, and MCA students in Coimbatore. Includes AI, IoT, Embedded, and Web Development domains.",
    tags: ["IEEE 2025", "Base Paper", "All Branches", "CSE", "ECE", "Mechanical"],
    highlights: ["AI/ML Papers", "IoT Papers", "Embedded Papers", "Web Papers", "Mechanical Papers"],
  },
  {
    slug: "flutter-android-mobile-app-final-year-projects-coimbatore",
    category: "Mobile App",
    categoryColor: "#00838f",
    categoryBg: "#e0f7fa",
    date: "December 2024",
    readTime: "5 min read",
    title: "Best Flutter & Android Mobile App Final Year Projects – Coimbatore 2025",
    seoTitle: "Flutter Android Mobile App Projects Coimbatore 2025",
    desc: "Top Flutter, React Native, and Android Java/Kotlin final year mobile app project ideas with Firebase, GPS, and REST API integration for BE CSE, IT, and MCA students in Coimbatore.",
    tags: ["Flutter", "Android", "Firebase", "React Native", "GPS", "Play Store"],
    highlights: ["Food Delivery", "Telemedicine", "Ride Sharing", "Smart Campus", "AR Navigation"],
  },
  {
    slug: "deep-learning-nlp-computer-vision-projects-coimbatore",
    category: "Deep Learning",
    categoryColor: "#880e4f",
    categoryBg: "#fce4ec",
    date: "November 2024",
    readTime: "7 min read",
    title: "Deep Learning, NLP & Computer Vision Final Year Projects – Coimbatore 2024-25",
    seoTitle: "Deep Learning NLP Computer Vision Projects Coimbatore 2024-25",
    desc: "Latest Deep Learning project ideas including CNN, RNN, LSTM, BERT, Transformer, and YOLO for image classification, sentiment analysis, object detection, and medical AI for CSE students in Coimbatore.",
    tags: ["CNN", "LSTM", "BERT", "YOLO", "Transformer", "OpenCV"],
    highlights: ["Image Classification", "Object Detection", "Text Summarization", "Medical Imaging", "GAN Projects"],
  },
  {
    slug: "how-to-select-final-year-project-coimbatore-guide",
    category: "Guide",
    categoryColor: "#4527a0",
    categoryBg: "#ede7f6",
    date: "November 2024",
    readTime: "6 min read",
    title: "How to Select the Best Final Year Project in Coimbatore – Expert Guide 2025",
    seoTitle: "How to Select Best Final Year Project Coimbatore Guide",
    desc: "Step-by-step guide for engineering students on how to choose the best final year project in Coimbatore — domain selection, IEEE paper finding, budget planning, and working with the right project center.",
    tags: ["Project Selection", "Engineering Students", "Coimbatore", "IEEE", "Guide"],
    highlights: ["Domain Selection", "Topic Finding", "Budget Planning", "College Requirements", "Viva Prep"],
  },
];

const categories = ["All", "AI & ML", "IoT", "Embedded", "Mechanical", "Web Dev", "Mobile App", "Deep Learning", "IEEE", "Guide"];

// ─── Component ─────────────────────────────────────────────────────────────────
const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  return (
    <div>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Blog schema for each post ── */}
      {blogs.map((blog, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.desc,
              "url": `https://www.codexproject.in/blog/${blog.slug}`,
              "datePublished": blog.date,
              "author": { "@type": "Organization", "name": "CODEX PROJECT" },
              "publisher": {
                "@type": "Organization",
                "name": "CODEX PROJECT",
                "logo": { "@type": "ImageObject", "url": "https://www.codexproject.in/logo.png" },
              },
              "keywords": blog.tags.join(", "),
            }),
          }}
        />
      ))}

      <div className="container py-5">

        {/* ══ BREADCRUMB ══ */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <li className="breadcrumb-item" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <li className="breadcrumb-item active" aria-current="page" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Blog – Final Year Projects Coimbatore</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* ══ H1 ══ */}
        <h1 className="text-center mb-3">
          Final Year Project Blog – CODEX PROJECT Coimbatore
        </h1>
        <p className="text-center lead mb-2">
          Latest IEEE 2024-25 project ideas, technology guides &amp; expert tips for engineering students in Coimbatore
        </p>
        <p className="text-center mb-2">
          <strong>CODEX PROJECT</strong> blog covers the latest <strong>final year project ideas
          in Coimbatore</strong> for <strong>Mechanical, IoT, Embedded Systems, AI, Machine
          Learning, Web Development</strong>, and <strong>Mobile App</strong> domains. Our expert
          guides help <strong>BE, ME, MCA, BSc, and Diploma engineering students</strong> choose
          the best IEEE 2024-25 projects, understand trending technologies, and complete their
          final year projects with confidence.
        </p>
        <p className="text-center text-muted small mb-5">
          📍 CODEX PROJECT – 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
        </p>

        {/* ══ CATEGORY FILTER ══ */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5" role="navigation" aria-label="Blog category filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="btn btn-sm"
              style={{
                background: activeCategory === cat ? "#1565c0" : "#f5f5f5",
                color: activeCategory === cat ? "white" : "#333",
                borderRadius: "20px",
                border: "1px solid #ddd",
                fontWeight: activeCategory === cat ? "600" : "400",
              }}
              aria-label={`Filter by ${cat}`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ══ BLOG GRID ══ */}
        <div className="row g-4 mb-5">
          {filtered.map((blog, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <article
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: `4px solid ${blog.categoryColor}` }}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="headline" content={blog.title} />
                <meta itemProp="description" content={blog.desc} />
                <meta itemProp="url" content={`https://www.codexproject.in/blog/${blog.slug}`} />
                <meta itemProp="datePublished" content={blog.date} />

                <div className="card-body p-4">
                  {/* Category + Meta */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="badge px-3 py-1"
                      style={{ background: blog.categoryBg, color: blog.categoryColor, fontSize: "0.75rem", fontWeight: "600" }}
                      itemProp="keywords"
                    >
                      {blog.category}
                    </span>
                    <span className="text-muted small">{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2
                    className="h5 fw-bold mb-2"
                    style={{ color: "#1a1a2e", lineHeight: "1.4" }}
                    itemProp="name"
                  >
                    <a
                      href={`/blog/${blog.slug}`}
                      className="text-decoration-none"
                      style={{ color: "inherit" }}
                      aria-label={blog.seoTitle}
                    >
                      {blog.title}
                    </a>
                  </h2>

                  {/* Date */}
                  <p className="text-muted small mb-2">
                    <time itemProp="datePublished">{blog.date}</time> · CODEX PROJECT, Coimbatore
                  </p>

                  {/* Description */}
                  <p className="text-muted small mb-3" itemProp="description">
                    {blog.desc}
                  </p>

                  {/* Highlights */}
                  <div className="mb-3">
                    <p className="small fw-semibold mb-1" style={{ color: blog.categoryColor }}>
                      Topics covered:
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      {blog.highlights.map((h, hi) => (
                        <span
                          key={hi}
                          className="badge"
                          style={{ background: blog.categoryBg, color: blog.categoryColor, fontSize: "0.68rem" }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {blog.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="badge"
                        style={{ background: "#f5f5f5", color: "#555", fontSize: "0.65rem", border: "1px solid #ddd" }}
                        itemProp="keywords"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-transparent border-0 pt-0 pb-3 px-4">
                  <a
                    href={`/blog/${blog.slug}`}
                    className="btn btn-sm fw-semibold"
                    style={{ background: blog.categoryColor, color: "white", borderRadius: "6px" }}
                    aria-label={`Read more about ${blog.seoTitle}`}
                  >
                    Read Full Article →
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

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
        <section aria-labelledby="seo-heading" className="mb-5 p-4 border rounded">
          <h2 id="seo-heading" className="h5 fw-bold mb-3">
            About CODEX PROJECT Blog – Final Year Project Center Coimbatore
          </h2>
          <p className="text-muted small">
            The <strong>CODEX PROJECT blog</strong> is Coimbatore's most comprehensive resource
            for <strong>final year project ideas, IEEE 2024-25 project topics</strong>, and
            technology guides for engineering students. We publish in-depth articles on{" "}
            <strong>Mechanical Engineering projects</strong> (fabrication, robotics, CAD),{" "}
            <strong>IoT projects</strong> (Arduino, Raspberry Pi, cloud platforms),{" "}
            <strong>Embedded Systems projects</strong> (8051, ARM, PIC, FPGA), and{" "}
            <strong>Software projects</strong> (Python AI/ML, MERN Stack, Java, Flutter, Android)
            — all tailored for Coimbatore engineering students.
          </p>
          <p className="text-muted small">
            Our blog guides help students in <strong>project topic selection</strong>,{" "}
            <strong>IEEE base paper understanding</strong>,{" "}
            <strong>technology stack selection</strong>, and{" "}
            <strong>project budget planning</strong> for their final year. Every article is
            written by our expert engineers at{" "}
            <strong>CODEX PROJECT, Balaji Complex, Gandhipuram, Coimbatore</strong> — with
            real implementation experience across 500+ student projects. We serve students from
            BE CSE, IT, ECE, EEE, EIE, Mechanical, MCA, BSc CS, BCA, and Diploma branches
            across all Coimbatore engineering colleges.
          </p>
          <p className="text-muted small mb-0">
            Bookmark this blog to stay updated with the latest{" "}
            <strong>final year project trends in Coimbatore</strong>. For a free project
            consultation, visit CODEX PROJECT at{" "}
            <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road, Gandhipuram,
            Coimbatore – 641012</strong>.
          </p>
        </section>

        {/* ══ KEYWORD TAG CLOUD ══ */}
        <section aria-label="Blog topic keywords" className="mb-5">
          <h2 className="h6 fw-bold text-center mb-3 text-muted">
            Explore Blog Topics – Final Year Projects Coimbatore
          </h2>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "Final Year Projects Coimbatore",
              "IEEE Projects 2024-25",
              "Python Projects Coimbatore",
              "AI ML Projects Coimbatore",
              "Deep Learning Projects",
              "IoT Projects Coimbatore",
              "Embedded Projects Coimbatore",
              "Mechanical Projects Coimbatore",
              "MERN Stack Projects",
              "Flutter Projects Coimbatore",
              "Android Projects Coimbatore",
              "Java Projects Coimbatore",
              "Low Cost Projects Coimbatore",
              "CSE Projects Coimbatore",
              "ECE Projects Coimbatore",
              "MCA Final Year Projects",
              "Project Ideas Gandhipuram",
              "Project Center Coimbatore",
            ].map((tag) => (
              <a
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="badge px-3 py-2 text-decoration-none"
                style={{ background: "#37474f", color: "white", fontSize: "0.75rem" }}
                aria-label={`Blog posts about ${tag}`}
              >
                {tag}
              </a>
            ))}
          </div>
        </section>

        {/* ══ LOCATION ══ */}
        <section aria-labelledby="location-heading" className="mb-5 text-center p-4 bg-light rounded">
          <h2 id="location-heading" className="h5 fw-bold mb-2">
            Visit CODEX PROJECT – Best Project Center in Coimbatore
          </h2>
          <p className="text-muted mb-1">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <p className="text-muted small mb-3">
            Free consultation · IEEE 2024-25 projects · All domains · Affordable pricing
          </p>
          <a
            href="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-primary"
            aria-label="Get directions to CODEX PROJECT Gandhipuram Coimbatore"
          >
            📍 Get Directions on Google Maps
          </a>
        </section>

        {/* ══ CTA ══ */}
        <section
          className="text-center p-5 rounded"
          style={{ background: "#1a237e" }}
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-white fw-bold mb-2">
            Ready to Start Your Final Year Project? – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-white-50 mb-1">
            Get expert guidance, free project consultation, and affordable pricing.
          </p>
          <p className="text-white-50 small mb-4">
            Mechanical · IoT · Embedded · AI/ML · MERN · Flutter · IEEE 2024-25 · Gandhipuram, Coimbatore
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-warning btn-lg fw-bold"
              aria-label="Contact CODEX PROJECT for final year project guidance Coimbatore"
            >
              📞 Contact Now – Free Consultation
            </button>
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
              aria-label="Review CODEX PROJECT Coimbatore on Google"
            >
              ⭐ Review on Google
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Blog;