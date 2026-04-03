import React, { useEffect, useRef } from "react";
import "./About.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About CODEX PROJECT – Best Final Year Project Center in Coimbatore",
  "url": "https://www.codexproject.in/about",
  "description":
    "CODEX PROJECT is the best final year project center in Coimbatore offering IEEE projects, internship training, and placement support for BE, ME, BSc, MCA, and Diploma engineering students.",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
    "description":
      "Top-rated final year project center in Coimbatore providing real-time project guidance in Software, AI, ML, IoT, Embedded Systems, and Mechanical Engineering.",
    "foundingLocation": "Coimbatore, Tamil Nadu, India",
    "areaServed": [
      "Coimbatore","Peelamedu","Gandhipuram","Saravanampatti",
      "RS Puram","Singanallur","Ukkadam","Vadavalli"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Final Year Project Domains",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software & AI Final Year Projects Coimbatore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Embedded Systems Final Year Projects Coimbatore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IoT Final Year Projects Coimbatore" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mechanical Final Year Projects Coimbatore" } },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "reviewCount": "200",
    },
  },
};

const teamStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Expert Project Mentors at CODEX PROJECT Coimbatore",
  "itemListElement": [
    {
      "@type": "ListItem", "position": 1,
      "item": {
        "@type": "Person",
        "name": "Alex Chen",
        "jobTitle": "Python & AI/ML Developer – Final Year Project Mentor Coimbatore",
        "worksFor": { "@type": "Organization", "name": "CODEX PROJECT" },
        "knowsAbout": ["Python", "Django", "TensorFlow", "FastAPI", "Machine Learning Projects"],
      },
    },
    {
      "@type": "ListItem", "position": 2,
      "item": {
        "@type": "Person",
        "name": "Sarah Johnson",
        "jobTitle": "PHP Full-Stack Developer – Project Guide Coimbatore",
        "worksFor": { "@type": "Organization", "name": "CODEX PROJECT" },
        "knowsAbout": ["PHP", "Laravel", "MySQL", "Vue.js", "Web Development Projects"],
      },
    },
    {
      "@type": "ListItem", "position": 3,
      "item": {
        "@type": "Person",
        "name": "Mike Rodriguez",
        "jobTitle": "React & Mobile Developer – Final Year Project Mentor",
        "worksFor": { "@type": "Organization", "name": "CODEX PROJECT" },
        "knowsAbout": ["React", "React Native", "TypeScript", "Node.js", "MERN Stack Projects"],
      },
    },
  ],
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const projects = [
  {
    category: "Software Projects",
    seoTitle: "Best Software Final Year Projects in Coimbatore",
    technologies: ["PHP", "Python", "Java", ".NET", "Android", "React", "Node.js"],
    icon: "💻",
    description:
      "Full-stack web and mobile final year projects using Python, Django, MERN Stack, Java, and .NET — best software project center in Coimbatore for BE, MCA, and IT students.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    category: "Embedded Systems",
    seoTitle: "Embedded Systems Final Year Projects Coimbatore",
    technologies: ["Arduino", "Raspberry Pi", "ARM Cortex", "ESP32"],
    icon: "🔌",
    description:
      "Arduino, Raspberry Pi, and ARM Cortex microcontroller-based final year projects — top embedded systems project center in Coimbatore for ECE and EEE students.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    category: "IoT Projects",
    seoTitle: "IoT Final Year Projects Coimbatore",
    technologies: ["Sensors", "MQTT", "Cloud IoT", "LoRaWAN", "BLE"],
    icon: "🌐",
    description:
      "Internet of Things final year projects with cloud integration — best IoT project center in Coimbatore for ECE, EEE, and CSE students.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    category: "Mechanical Projects",
    seoTitle: "Mechanical Final Year Projects Coimbatore",
    technologies: ["CAD/CAM", "ANSYS", "SolidWorks", "Automation", "Robotics"],
    icon: "⚙️",
    description:
      "CAD design, fabrication, robotics, and automation final year projects — top mechanical project center in Coimbatore for BE and ME Mechanical students.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const teams = {
  software: [
    {
      name: "Alex Chen",
      role: "Python & AI/ML Developer",
      specialization: "Backend & AI/ML Projects Coimbatore",
      experience: "4+ years",
      projects: "25+",
      skills: ["Python", "Django", "TensorFlow", "FastAPI"],
      avatar: "👨‍💻",
      color: "#667eea",
    },
    {
      name: "Sarah Johnson",
      role: "PHP Full-Stack Developer",
      specialization: "Web Development Projects Coimbatore",
      experience: "3+ years",
      projects: "18+",
      skills: ["PHP", "Laravel", "MySQL", "Vue.js"],
      avatar: "👩‍💻",
      color: "#764ba2",
    },
    {
      name: "Mike Rodriguez",
      role: "React & MERN Stack Developer",
      specialization: "Frontend & Mobile Projects Coimbatore",
      experience: "3+ years",
      projects: "22+",
      skills: ["React", "React Native", "TypeScript", "Node.js"],
      avatar: "🧑‍💻",
      color: "#f093fb",
    },
  ],
};

const stats = [
  { number: "500+", label: "Final Year Projects Completed", icon: "🚀", keyword: "projects completed coimbatore" },
  { number: "1000+", label: "Happy Engineering Students", icon: "😊", keyword: "students guided coimbatore" },
  { number: "15+", label: "Technologies & Domains", icon: "🛠️", keyword: "project domains coimbatore" },
  { number: "4.9", label: "Google Rating", icon: "⭐", keyword: "best rated project center coimbatore" },
];

const features = [
  {
    icon: "🎯",
    title: "IEEE & Industry-Relevant Projects",
    description:
      "IEEE 2024-25 certified projects aligned with current industry trends — best IEEE project center in Coimbatore.",
    delay: "0s",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Project Mentors",
    description:
      "Guidance from experienced software, embedded, IoT, and mechanical engineers with real-world industry experience in Coimbatore.",
    delay: "0.1s",
  },
  {
    icon: "⚡",
    title: "End-to-End Project Support",
    description:
      "Complete final year project support — from topic selection to viva preparation, documentation, and IEEE publication in Coimbatore.",
    delay: "0.2s",
  },
  {
    icon: "📚",
    title: "Internship + Placement Support",
    description:
      "Internship certificate, live project experience, and placement guidance — best internship training center in Coimbatore.",
    delay: "0.3s",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const About = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <div className="about-container">

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />

      {/* ══════════════════════════════════════════════
          HERO — H1 with primary keyword
      ══════════════════════════════════════════════ */}
      <section
        className="about-hero"
        ref={addToRefs}
        aria-labelledby="about-hero-heading"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="hero-content">

                {/* H1 — one per page */}
                <h1 id="about-hero-heading" className="about-title">
                  About <span className="highlight">CODEX PROJECT</span> –{" "}
                  Best Final Year Project Center in Coimbatore
                </h1>

                <p className="about-subtitle">
                  Your Premier Final Year Project Center for Engineering Students in Coimbatore
                </p>

                <p className="about-description">
                  <strong>CODEX PROJECT</strong> is the most trusted{" "}
                  <strong>final year project center in Coimbatore</strong>, bridging the gap
                  between academic learning and real-world implementation. We guide{" "}
                  <strong>BE, ME, BSc, MCA, and Diploma engineering students</strong> in creating
                  innovative, <strong>IEEE-certified projects</strong> in{" "}
                  <strong>Software, AI, Machine Learning, IoT, Embedded Systems</strong>, and{" "}
                  <strong>Mechanical Engineering</strong> — with complete documentation, internship
                  certificate, and viva support.
                </p>

                {/* Hidden SEO keyword paragraph — visible to crawlers, subtle for users */}
                <p className="text-muted small mt-2">
                  Serving students across Coimbatore including Peelamedu, Gandhipuram,
                  Saravanampatti, RS Puram, Singanallur, Ukkadam, and Vadavalli.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-shapes" aria-hidden="true">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS — with schema-friendly itemscope
      ══════════════════════════════════════════════ */}
      <section
        className="stats-section"
        ref={addToRefs}
        aria-labelledby="stats-heading"
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        {/* Hidden SEO label */}
        <h2 id="stats-heading" className="visually-hidden">
          Codex Project Coimbatore – Numbers That Speak
        </h2>
        <meta itemProp="name" content="CODEX PROJECT" />
        <meta itemProp="url" content="https://www.codexproject.in" />

        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 text-center">
                <div
                  className="stat-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
                  <h3 className="stat-number" itemProp="numberOfStudents">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                  {/* Hidden keyword for crawler */}
                  <meta itemProp="description" content={stat.keyword} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROJECT DOMAINS
      ══════════════════════════════════════════════ */}
      <section
        className="domains-section"
        ref={addToRefs}
        aria-labelledby="domains-heading"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 id="domains-heading" className="section-title">
                Final Year Project Domains – Codex Project Coimbatore
              </h2>
              <p className="section-subtitle">
                Comprehensive IEEE 2024-25 project guidance across all major engineering
                disciplines for students in Coimbatore
              </p>
            </div>
          </div>

          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 col-xl-3 mb-4">
                <article
                  className="domain-card"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    "--domain-gradient": project.gradient,
                  }}
                  aria-label={project.seoTitle}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="domain-icon" aria-hidden="true">{project.icon}</div>

                  {/* H3 with SEO keyword */}
                  <h3 className="domain-title" itemProp="name">
                    {project.category}
                  </h3>
                  <meta itemProp="serviceType" content={project.seoTitle} />
                  <meta itemProp="areaServed" content="Coimbatore" />
                  <meta itemProp="provider" content="CODEX PROJECT" />

                  <p className="domain-description" itemProp="description">
                    {project.description}
                  </p>

                  <div className="technologies" aria-label="Technologies used">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="domain-glow" aria-hidden="true"></div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOFTWARE TEAM
      ══════════════════════════════════════════════ */}
      <section
        className="team-section software-team"
        ref={addToRefs}
        aria-labelledby="team-heading"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 id="team-heading" className="section-title">
                Expert Project Mentors – Software & AI Team, Coimbatore
              </h2>
              <p className="section-subtitle">
                Experienced developers guiding final year students in Python, AI, ML, MERN Stack,
                Java, and .NET projects in Coimbatore
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {teams.software.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <article
                  className="team-member-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  itemScope
                  itemType="https://schema.org/Person"
                  aria-label={`${member.name} – ${member.role} at CODEX PROJECT Coimbatore`}
                >
                  <div
                    className="member-avatar"
                    style={{ backgroundColor: member.color }}
                    aria-hidden="true"
                  >
                    {member.avatar}
                  </div>

                  <div className="member-info">
                    <h3 className="member-name" itemProp="name">{member.name}</h3>
                    <p className="member-role" itemProp="jobTitle">{member.role}</p>
                    <p className="member-specialization" itemProp="description">
                      {member.specialization}
                    </p>
                    <meta itemProp="worksFor" content="CODEX PROJECT, Coimbatore" />
                  </div>

                  <div className="member-stats">
                    <div className="stat">
                      <span className="stat-value">{member.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{member.projects}</span>
                      <span className="stat-label">Projects</span>
                    </div>
                  </div>

                  <div className="member-skills" aria-label="Skills">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="skill-tag" itemProp="knowsAbout">{skill}</span>
                    ))}
                  </div>

                  <div
                    className="member-glow"
                    style={{ backgroundColor: member.color }}
                    aria-hidden="true"
                  ></div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE — Features
      ══════════════════════════════════════════════ */}
      <section
        className="features-section"
        ref={addToRefs}
        aria-labelledby="features-heading"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 id="features-heading" className="section-title">
                Why Choose CODEX PROJECT – Best Project Center in Coimbatore?
              </h2>
              <p className="section-subtitle">
                Here's why 1000+ engineering students across Coimbatore trust CODEX PROJECT
                for their final year projects and internship training
              </p>
            </div>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div
                  className="feature-card"
                  style={{ animationDelay: feature.delay }}
                  aria-label={feature.title}
                >
                  <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <div className="feature-wave" aria-hidden="true"></div>
                </div>
              </div>
            ))}
          </div>

          {/* SEO keyword cluster — visible helpful content */}
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
              <div className="p-4 bg-light rounded text-center">
                <p className="mb-2 text-muted small fw-semibold">
                  Serving Engineering Students Across Coimbatore
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {[
                    "Final Year Projects Coimbatore",
                    "IEEE Projects 2024-25",
                    "AI & ML Projects",
                    "IoT Projects Coimbatore",
                    "Embedded Projects ECE",
                    "Mechanical Projects BE",
                    "Python Projects",
                    "MERN Stack Projects",
                    "Internship Certificate",
                    "Viva & Documentation Support",
                    "Project Center Peelamedu",
                    "Project Center Gandhipuram",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="badge bg-primary text-white px-3 py-2"
                      style={{ fontSize: "0.78rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEO CONTENT BLOCK — pure text for crawlers
      ══════════════════════════════════════════════ */}
      <section
        className="py-5"
        aria-labelledby="seo-block-heading"
        style={{ background: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 id="seo-block-heading" className="h4 fw-bold mb-3">
                About CODEX PROJECT – Final Year Project Center Coimbatore
              </h2>
              <p className="text-muted">
                <strong>CODEX PROJECT</strong> was established with one mission: to make
                every engineering student in Coimbatore confident about their final year project.
                We are a <strong>full-service final year project center in Coimbatore</strong>{" "}
                covering <strong>Software projects</strong> (Python, Django, MERN, Java, .NET,
                Android), <strong>AI & Machine Learning projects</strong>,{" "}
                <strong>IoT projects</strong> (Arduino, NodeMCU, Raspberry Pi),{" "}
                <strong>Embedded Systems projects</strong> (8051, ARM, PIC, ESP32), and{" "}
                <strong>Mechanical Engineering projects</strong> (CAD, ANSYS, SolidWorks,
                Fabrication, Robotics).
              </p>
              <p className="text-muted">
                Every project at Codex Project comes with{" "}
                <strong>IEEE 2024-25 base paper</strong>, complete source code, project report,
                PPT presentation, and dedicated <strong>viva preparation support</strong>. We
                also offer <strong>internship training with certificate</strong> for students
                looking to enhance their placement opportunities. Our center is{" "}
                <strong>easily accessible from all major engineering college zones</strong> in
                Coimbatore — Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur,
                Ukkadam, and Vadavalli.
              </p>
              <p className="text-muted mb-0">
                Join CODEX PROJECT — <strong>Coimbatore's best final year project center</strong>{" "}
                — and complete your engineering project with confidence. Contact us today for a
                free consultation and project topic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section
        className="cta-section"
        ref={addToRefs}
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 id="cta-heading" className="cta-title">
                Start Your Final Year Project Today at CODEX PROJECT, Coimbatore
              </h2>
              <p className="cta-description">
                Join 1000+ successful engineering students who completed their final year projects
                with CODEX PROJECT — the <strong>best project center in Coimbatore</strong> for
                IEEE projects, internship training, and placement support.
              </p>
              <p className="text-white-50 small mb-3">
                📍 Coimbatore, Tamil Nadu &nbsp;|&nbsp; 📞 Free Consultation Available
              </p>
              <div className="cta-buttons">
                <button
                  className="btn btn-primary"
                  aria-label="Get started with your final year project at CODEX PROJECT Coimbatore"
                >
                  Get Started – Free Consultation
                </button>
                <button
                  className="btn btn-outline"
                  aria-label="View final year project domains at CODEX PROJECT"
                >
                  View Project Domains
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-particles" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;