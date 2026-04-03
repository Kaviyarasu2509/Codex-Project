import React from "react";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const mechanicalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mechanical Final Year Project Center in Coimbatore",
  "serviceType": "Mechanical Engineering Final Year Project Training",
  "description":
    "CODEX PROJECT is the best mechanical project center in Coimbatore offering fabrication, CAD/CAM, robotics, automation, and mechatronics final year projects for BE, ME, and Diploma students at affordable cost.",
  "provider": {
    "@type": "Organization",
    "name": "CODEX PROJECT",
    "url": "https://www.codexproject.in",
  },
  "areaServed": {
    "@type": "City",
    "name": "Coimbatore",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mechanical Project Services Coimbatore",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fabrication Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CAD CAM Design Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robotics Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mechatronics Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automobile Engineering Projects Coimbatore" } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "150",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best mechanical project center in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT is the best mechanical project center in Coimbatore, offering fabrication, CAD/CAM, robotics, automation, and mechatronics final year projects for BE, ME, and Diploma students at affordable pricing.",
      },
    },
    {
      "@type": "Question",
      "name": "What mechanical projects are available at Codex Project Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We offer Hydraulic systems, Pneumatic robots, Solar vehicles, CNC machines, Conveyor automation, CAD/CAM projects, Mechatronics, and Automobile engineering projects in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide documentation and viva support for mechanical projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, CODEX PROJECT provides 100% documentation including project report, PPT, and complete viva preparation support for all mechanical final year projects in Coimbatore.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cost of mechanical final year projects at Codex Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "CODEX PROJECT offers the most affordable mechanical project pricing in Coimbatore. Cost varies by project complexity. Contact us for a free consultation and custom quote.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you support BE, ME, and Diploma mechanical students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, we support BE Mechanical, ME, and Diploma students across Coimbatore with final year project guidance, fabrication, documentation, and viva preparation.",
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
    { "@type": "ListItem", "position": 3, "name": "Mechanical Projects Coimbatore", "item": "https://www.codexproject.in/services/mechanical-projects" },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "🔧",
    title: "Fabrication Projects",
    seo: "Mechanical Fabrication Projects Coimbatore",
    desc: "Real-time working model fabrication for BE and ME Mechanical students in Coimbatore — from design to prototype with expert supervision.",
  },
  {
    icon: "🤖",
    title: "Robotics & Automation",
    seo: "Robotics Projects Coimbatore",
    desc: "Industrial robotics, pick-and-place robots, conveyor automation, and pneumatic systems — best robotics project center in Coimbatore.",
  },
  {
    icon: "🖥️",
    title: "CAD / CAM Design",
    seo: "CAD CAM Projects Coimbatore",
    desc: "SolidWorks, AutoCAD, CATIA, and ANSYS simulation projects — best CAD/CAM design project center in Coimbatore for Mechanical students.",
  },
  {
    icon: "⚙️",
    title: "Mechatronics Projects",
    seo: "Mechatronics Projects Coimbatore",
    desc: "Integrated mechanical-electronic systems, PLC-based automation, and sensor-driven mechatronics projects for engineering students in Coimbatore.",
  },
  {
    icon: "🚗",
    title: "Automobile Engineering",
    seo: "Automobile Engineering Projects Coimbatore",
    desc: "EV conversion, fuel efficiency, emission control, and hybrid vehicle final year projects for Automobile Engineering students in Coimbatore.",
  },
  {
    icon: "☀️",
    title: "Renewable Energy Projects",
    seo: "Renewable Energy Mechanical Projects Coimbatore",
    desc: "Solar-powered vehicles, wind energy systems, and energy-harvesting mechanical projects for BE and ME students in Coimbatore.",
  },
];

const projectIdeas = [
  { name: "Hydraulic Lift System", tag: "Fabrication" },
  { name: "Pneumatic Pick and Place Robot", tag: "Robotics" },
  { name: "Solar Powered Electric Vehicle", tag: "Automobile" },
  { name: "Automatic Pneumatic Bumper", tag: "Automation" },
  { name: "Smart Irrigation System", tag: "Mechatronics" },
  { name: "Conveyor Belt Automation", tag: "Automation" },
  { name: "Mini CNC Machine", tag: "CAD/CAM" },
  { name: "Electromagnetic Braking System", tag: "Automobile" },
  { name: "Automatic Paint Sprayer", tag: "Automation" },
  { name: "Gear Box Design & Analysis", tag: "CAD/CAM" },
  { name: "Wind Turbine Blade Design", tag: "Renewable Energy" },
  { name: "Robotic Arm with Gripper", tag: "Robotics" },
  { name: "Waste Segregation Machine", tag: "Automation" },
  { name: "Automatic Welding Machine", tag: "Fabrication" },
  { name: "Four-Wheel Steering System", tag: "Automobile" },
  { name: "Agricultural Spraying Robot", tag: "Robotics" },
];

const tagColors = {
  Fabrication: "#e3f2fd",
  Robotics: "#f3e5f5",
  Automation: "#e8f5e9",
  "CAD/CAM": "#fff3e0",
  Mechatronics: "#fce4ec",
  Automobile: "#e0f7fa",
  "Renewable Energy": "#f9fbe7",
};

const whyChoose = [
  { icon: "💰", title: "Most Affordable Pricing", desc: "Lowest mechanical project cost in Coimbatore — no hidden charges, flexible payment options." },
  { icon: "🏗️", title: "Real Working Models", desc: "Actual fabrication and prototype building — not just theory. Students see and present real working projects." },
  { icon: "📋", title: "Complete Documentation", desc: "Full project report, PPT, IEEE format abstract, synopsis — everything needed for review submissions." },
  { icon: "🎤", title: "Viva Preparation", desc: "Expert coaching for project reviews, viva questions, and final year presentation at your college in Coimbatore." },
  { icon: "🎓", title: "BE, ME & Diploma Support", desc: "Dedicated guidance for BE Mechanical, ME, and Diploma students across all Coimbatore colleges." },
  { icon: "📍", title: "Serving All of Coimbatore", desc: "Students from Peelamedu, Gandhipuram, Saravanampatti, Singanallur, RS Puram, and Ukkadam visit us." },
];

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Best mechanical project center in Coimbatore! My pneumatic robot project was built perfectly with full documentation and viva support. Highly recommended for all Mechanical students.",
    name: "Karthik S., BE Mechanical",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "I completed my CAD/ANSYS project at Codex Project Coimbatore. Excellent guidance, affordable cost, and the working model was exactly what my college needed.",
    name: "Divya M., ME CAD/CAM",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Codex Project is the most affordable mechanical project center near Gandhipuram. They built my solar vehicle project from scratch with complete IEEE documentation.",
    name: "Arun P., BE Automobile",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const MechanicalProjects = () => {
  return (
    <div>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mechanicalSchema) }} />
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
              <span itemProp="name">Mechanical Projects Coimbatore</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* ══ H1 — One per page ══ */}
        <h1 className="text-center mb-3">
          Best Mechanical Final Year Project Center in Coimbatore – CODEX PROJECT
        </h1>

        {/* ══ INTRO ══ */}
        <p className="text-center lead mb-2">
          Top-rated mechanical project center in Coimbatore for BE, ME, and Diploma students
        </p>
        <p className="text-center mb-2">
          <strong>CODEX PROJECT</strong> is the <strong>best mechanical project center in Coimbatore</strong>,
          offering affordable, real-time final year mechanical engineering projects with complete
          fabrication, CAD/CAM design, robotics, automation, and mechatronics support. We provide
          end-to-end guidance — from <strong>project topic selection</strong> to{" "}
          <strong>final viva preparation</strong> — for all Mechanical, Automobile, and Production
          Engineering students across Coimbatore.
        </p>
        <p className="text-center text-muted small mb-5">
          📍 Serving students from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur,
          Ukkadam &amp; all Coimbatore engineering colleges
        </p>

        {/* ══ SERVICES ══ */}
        <section aria-labelledby="services-heading" className="mt-3 mb-5">
          <h2 id="services-heading" className="text-center mb-4">
            Mechanical Project Services at CODEX PROJECT Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Comprehensive mechanical engineering project support across all domains —
            affordable pricing, real working models, IEEE documentation included
          </p>

          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <article
                  className="card h-100 shadow-sm border-0 p-3"
                  itemScope
                  itemType="https://schema.org/Service"
                  aria-label={s.seo}
                >
                  <div className="fs-2 mb-2" aria-hidden="true">{s.icon}</div>
                  <h3 className="h5 card-title" itemProp="name">{s.title}</h3>
                  <meta itemProp="serviceType" content={s.seo} />
                  <meta itemProp="areaServed" content="Coimbatore" />
                  <p className="card-text text-muted" itemProp="description">{s.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="mb-5">
          <h2 id="projects-heading" className="text-center mb-2">
            Mechanical Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="text-center text-muted mb-4">
            Latest IEEE 2024-25 mechanical project topics for BE, ME, and Diploma students
            in Coimbatore — real working models with full documentation
          </p>

          <div className="row g-3">
            {projectIdeas.map((p, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div
                  className="d-flex align-items-center gap-2 p-3 rounded border"
                  style={{ background: tagColors[p.tag] || "#f8f9fa" }}
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <div>
                    <p className="mb-0 fw-semibold small" itemProp="name">{p.name}</p>
                    <span
                      className="badge mt-1"
                      style={{ background: "#1565c0", color: "white", fontSize: "0.7rem" }}
                      itemProp="genre"
                    >
                      {p.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY CHOOSE ══ */}
        <section aria-labelledby="why-heading" className="mb-5">
          <h2 id="why-heading" className="text-center mb-2">
            Why CODEX PROJECT is the Best Mechanical Project Center in Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            Here's why hundreds of Mechanical Engineering students across Coimbatore
            trust CODEX PROJECT every year
          </p>

          <div className="row g-4">
            {whyChoose.map((w, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="d-flex gap-3 align-items-start p-3 bg-light rounded h-100">
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
            Student Reviews – Mechanical Project Center Coimbatore
          </h2>
          <p className="text-center text-muted mb-4">
            What Mechanical Engineering students say about CODEX PROJECT, Coimbatore
          </p>

          <div className="row g-4">
            {reviews.map((r, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="card border-0 shadow-sm h-100 p-3"
                  itemScope
                  itemType="https://schema.org/Review"
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
            Frequently Asked Questions – Mechanical Projects Coimbatore
          </h2>

          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="mb-4 p-3 bg-light rounded">
              <h3 className="h6 fw-bold mb-1">{item.name}</h3>
              <p className="text-muted mb-0 small">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-content-heading" className="mb-5 p-4 border rounded">
          <h2 id="seo-content-heading" className="h5 fw-bold mb-3">
            Mechanical Project Center in Coimbatore – Complete Guide
          </h2>
          <p className="text-muted small">
            Are you searching for the <strong>best mechanical project center in Coimbatore</strong>?
            CODEX PROJECT is your one-stop destination for all mechanical engineering final year
            projects. We specialize in <strong>fabrication projects</strong>,{" "}
            <strong>CAD/CAM design projects</strong>, <strong>robotics projects</strong>,{" "}
            <strong>automation projects</strong>, <strong>mechatronics projects</strong>, and{" "}
            <strong>automobile engineering projects</strong> — all with affordable pricing and
            real working model delivery.
          </p>
          <p className="text-muted small">
            Our expert mechanical engineers guide students from{" "}
            <strong>project topic selection</strong> all the way to{" "}
            <strong>final viva presentation</strong>. Every project includes IEEE format project
            report, PPT, synopsis, and hands-on prototype. We serve students from top engineering
            colleges in Coimbatore including those near{" "}
            <strong>Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur</strong>, and
            Ukkadam. Whether you're a <strong>BE Mechanical student</strong>, an{" "}
            <strong>ME student</strong>, or a <strong>Diploma student</strong>, CODEX PROJECT
            has the perfect project for you.
          </p>
          <p className="text-muted small mb-0">
            Contact CODEX PROJECT today — the <strong>most affordable mechanical project center
            in Coimbatore</strong> — for a free consultation and project topic guidance.
          </p>
        </section>

        {/* ══ KEYWORD TAGS ══ */}
        <section aria-label="Related mechanical project searches" className="mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "Mechanical Projects Coimbatore",
              "Fabrication Projects Coimbatore",
              "CAD CAM Projects Coimbatore",
              "Robotics Projects Coimbatore",
              "Automation Projects Coimbatore",
              "Mechatronics Projects Coimbatore",
              "Automobile Projects Coimbatore",
              "BE Mechanical Projects 2025",
              "ME Project Center Coimbatore",
              "Diploma Mechanical Projects",
              "Low Cost Mechanical Projects Coimbatore",
              "IEEE Mechanical Projects 2024-25",
            ].map((tag) => (
              <a
                key={tag}
                href={`/services/mechanical-projects/${tag.toLowerCase().replace(/ /g, "-")}`}
                className="badge px-3 py-2 text-decoration-none"
                style={{ background: "#1565c0", color: "white", fontSize: "0.78rem" }}
                aria-label={tag}
              >
                {tag}
              </a>
            ))}
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="text-center mt-3 p-5 rounded" style={{ background: "#0d47a1" }} aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-white fw-bold mb-2">
            Start Your Mechanical Final Year Project Today – CODEX PROJECT Coimbatore
          </h2>
          <p className="text-white-50 mb-1">
            Join 500+ Mechanical Engineering students who completed their projects with us.
          </p>
          <p className="text-white-50 small mb-4">
            📍 Coimbatore, Tamil Nadu &nbsp;|&nbsp; Free Consultation Available &nbsp;|&nbsp;
            Affordable Pricing &nbsp;|&nbsp; Real Working Models
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-warning btn-lg fw-bold"
              aria-label="Contact CODEX PROJECT mechanical project center Coimbatore"
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

export default MechanicalProjects;