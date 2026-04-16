import React, { useState, useEffect, useRef } from "react";
import "./MechanicalProjects.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const mechanicalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mechanical Final Year Project Center in Coimbatore",
  "serviceType": "Mechanical Engineering Final Year Project Training",
  "description": "CODEX PROJECT is the best mechanical project center in Coimbatore offering fabrication, CAD/CAM, robotics, automation, and mechatronics final year projects for BE, ME, and Diploma students at affordable cost.",
  "provider": { "@type": "Organization", "name": "CODEX PROJECT", "url": "https://www.codexproject.in" },
  "areaServed": { "@type": "City", "name": "Coimbatore" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu", "postalCode": "641012", "addressCountry": "IN",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog", "name": "Mechanical Project Services Coimbatore",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fabrication Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CAD CAM Design Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robotics Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mechatronics Projects Coimbatore" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automobile Engineering Projects Coimbatore" } },
    ],
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "reviewCount": "150" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Which is the best mechanical project center in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is the best mechanical project center in Coimbatore, offering fabrication, CAD/CAM, robotics, automation, and mechatronics final year projects for BE, ME, and Diploma students at affordable pricing." } },
    { "@type": "Question", "name": "What mechanical projects are available at Codex Project Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "We offer Hydraulic systems, Pneumatic robots, Solar vehicles, CNC machines, Conveyor automation, CAD/CAM projects, Mechatronics, and Automobile engineering projects in Coimbatore." } },
    { "@type": "Question", "name": "Do you provide documentation and viva support for mechanical projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, CODEX PROJECT provides 100% documentation including project report, PPT, and complete viva preparation support for all mechanical final year projects in Coimbatore." } },
    { "@type": "Question", "name": "What is the cost of mechanical final year projects at Codex Project?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT offers the most affordable mechanical project pricing in Coimbatore. Cost varies by project complexity. Contact us for a free consultation and custom quote." } },
    { "@type": "Question", "name": "Do you support BE, ME, and Diploma mechanical students?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we support BE Mechanical, ME, and Diploma students across Coimbatore with final year project guidance, fabrication, documentation, and viva preparation." } },
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
    icon: "🔧", title: "Fabrication Projects", seo: "Mechanical Fabrication Projects Coimbatore",
    color: "#e3f2fd", accentColor: "#1565c0",
    filterKeys: ["Mechanical Projects Coimbatore", "Fabrication Projects Coimbatore", "IEEE Mechanical Projects 2024-25", "BE Mechanical Projects 2025", "Low Cost Mechanical Projects Coimbatore"],
    desc: "Real-time working model fabrication for BE and ME Mechanical students in Coimbatore — from design to prototype with expert supervision.",
  },
  {
    icon: "🤖", title: "Robotics & Automation", seo: "Robotics Projects Coimbatore",
    color: "#f3e5f5", accentColor: "#6a1b9a",
    filterKeys: ["Mechanical Projects Coimbatore", "Robotics Projects Coimbatore", "Automation Projects Coimbatore", "IEEE Mechanical Projects 2024-25", "BE Mechanical Projects 2025"],
    desc: "Industrial robotics, pick-and-place robots, conveyor automation, and pneumatic systems — best robotics project center in Coimbatore.",
  },
  {
    icon: "🖥️", title: "CAD / CAM Design", seo: "CAD CAM Projects Coimbatore",
    color: "#e8f5e9", accentColor: "#2e7d32",
    filterKeys: ["Mechanical Projects Coimbatore", "CAD CAM Projects Coimbatore", "IEEE Mechanical Projects 2024-25", "BE Mechanical Projects 2025", "ME Project Center Coimbatore"],
    desc: "SolidWorks, AutoCAD, CATIA, and ANSYS simulation projects — best CAD/CAM design project center in Coimbatore for Mechanical students.",
  },
  {
    icon: "⚙️", title: "Mechatronics Projects", seo: "Mechatronics Projects Coimbatore",
    color: "#fff3e0", accentColor: "#e65100",
    filterKeys: ["Mechanical Projects Coimbatore", "Mechatronics Projects Coimbatore", "Automation Projects Coimbatore", "IEEE Mechanical Projects 2024-25"],
    desc: "Integrated mechanical-electronic systems, PLC-based automation, and sensor-driven mechatronics projects for engineering students in Coimbatore.",
  },
  {
    icon: "🚗", title: "Automobile Engineering", seo: "Automobile Engineering Projects Coimbatore",
    color: "#fce4ec", accentColor: "#880e4f",
    filterKeys: ["Mechanical Projects Coimbatore", "Automobile Projects Coimbatore", "IEEE Mechanical Projects 2024-25", "BE Mechanical Projects 2025"],
    desc: "EV conversion, fuel efficiency, emission control, and hybrid vehicle final year projects for Automobile Engineering students in Coimbatore.",
  },
  {
    icon: "☀️", title: "Renewable Energy Projects", seo: "Renewable Energy Mechanical Projects Coimbatore",
    color: "#f9fbe7", accentColor: "#33691e",
    filterKeys: ["Mechanical Projects Coimbatore", "IEEE Mechanical Projects 2024-25", "BE Mechanical Projects 2025", "ME Project Center Coimbatore"],
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

// tag → filter chip mapping
const ideaTagToFilter = {
  Fabrication:       ["Mechanical Projects Coimbatore", "Fabrication Projects Coimbatore"],
  Robotics:          ["Mechanical Projects Coimbatore", "Robotics Projects Coimbatore"],
  Automobile:        ["Mechanical Projects Coimbatore", "Automobile Projects Coimbatore"],
  Automation:        ["Mechanical Projects Coimbatore", "Automation Projects Coimbatore"],
  Mechatronics:      ["Mechanical Projects Coimbatore", "Mechatronics Projects Coimbatore"],
  "CAD/CAM":         ["Mechanical Projects Coimbatore", "CAD CAM Projects Coimbatore"],
  "Renewable Energy":["Mechanical Projects Coimbatore"],
};

const tagColors = {
  Fabrication: "#e3f2fd", Robotics: "#f3e5f5", Automation: "#e8f5e9",
  "CAD/CAM": "#fff3e0", Mechatronics: "#fce4ec", Automobile: "#e0f7fa", "Renewable Energy": "#f9fbe7",
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
  { stars: 5, text: "Best mechanical project center in Coimbatore! My pneumatic robot project was built perfectly with full documentation and viva support. Highly recommended for all Mechanical students.", name: "Karthik S.", branch: "BE Mechanical" },
  { stars: 5, text: "I completed my CAD/ANSYS project at Codex Project Coimbatore. Excellent guidance, affordable cost, and the working model was exactly what my college needed.", name: "Divya M.", branch: "ME CAD/CAM" },
  { stars: 5, text: "Codex Project is the most affordable mechanical project center near Gandhipuram. They built my solar vehicle project from scratch with complete IEEE documentation.", name: "Arun P.", branch: "BE Automobile" },
];

const filterKeywords = [
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
];

// ─── Component ─────────────────────────────────────────────────────────────────
const MechanicalProjects = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRefs = useRef([]);

  const filteredServices = activeFilter
    ? services.filter((s) => s.filterKeys.includes(activeFilter))
    : services;

  const filteredIdeas = activeFilter
    ? projectIdeas.filter((p) => {
        const keys = ideaTagToFilter[p.tag] || ["Mechanical Projects Coimbatore"];
        return keys.includes(activeFilter);
      })
    : projectIdeas;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("mp-visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const scrollToServices = () => {
    document.getElementById("services-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mp-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mechanicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══ */}
      <section className="mp-hero" aria-labelledby="mp-h1">
        <div className="mp-hero-bg">
          <div className="mp-hero-grid"></div>
          <div className="mp-glow mp-glow1"></div>
          <div className="mp-glow mp-glow2"></div>
        </div>
        <div className="mp-container">
          <nav aria-label="breadcrumb" className="mp-breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item"><span itemProp="name">Home</span></a>
                <meta itemProp="position" content="1" />
              </li>
              <span className="mp-bc-sep">›</span>
              <li itemScope itemType="https://schema.org/ListItem">
                <a href="/services" itemProp="item"><span itemProp="name">Services</span></a>
                <meta itemProp="position" content="2" />
              </li>
              <span className="mp-bc-sep">›</span>
              <li aria-current="page" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Mechanical Projects Coimbatore</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <h1 id="mp-h1" className="mp-hero-h1">
            Best Mechanical Final Year<br />Project Center in Coimbatore –{" "}
            <span className="mp-accent">CODEX PROJECT</span>
          </h1>

          <p className="mp-hero-sub">
            Top-rated mechanical project center in Coimbatore for BE, ME, and Diploma students
          </p>

          <p className="mp-hero-desc">
            <strong>CODEX PROJECT</strong> is the <strong>best mechanical project center in Coimbatore</strong>,
            offering affordable, real-time final year mechanical engineering projects with complete
            fabrication, CAD/CAM design, robotics, automation, and mechatronics support. We provide
            end-to-end guidance — from <strong>project topic selection</strong> to{" "}
            <strong>final viva preparation</strong> — for all Mechanical, Automobile, and Production
            Engineering students across Coimbatore.
          </p>

          <p className="mp-hero-addr">📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore – 641012</p>
          <p className="mp-hero-serve">Serving students from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur, Ukkadam &amp; all Coimbatore engineering colleges</p>

          <div className="mp-hero-actions">
            <a href="tel:+918525999002" className="mp-btn mp-btn-primary">📞 Call: 85259 99002</a>
            <button className="mp-btn mp-btn-outline" onClick={scrollToServices}>Explore Services ↓</button>
          </div>
        </div>
      </section>

      <div className="mp-container mp-main-content">

        {/* ══ FILTER KEYWORD CLOUD ══ */}
        <section className="mp-filter-section mp-reveal" ref={addRef} aria-label="Filter by domain">
          <div className="mp-filter-header">
            <h2 className="mp-filter-title">Browse by Domain</h2>
            {activeFilter && (
              <button className="mp-filter-clear" onClick={() => setActiveFilter(null)}>✕ Show All</button>
            )}
          </div>
          <div className="mp-filter-chips">
            {filterKeywords.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveFilter(activeFilter === tag ? null : tag); scrollToServices(); }}
                className={`mp-filter-chip ${activeFilter === tag ? "mp-chip-active" : ""}`}
                aria-label={`Filter: ${tag}`}
                aria-pressed={activeFilter === tag}
              >
                {tag}
              </button>
            ))}
          </div>
          {activeFilter && (
            <p className="mp-filter-result-note">
              Showing results for: <strong>{activeFilter}</strong>
              {" "}— {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""} found
            </p>
          )}
        </section>

        {/* ══ SERVICES ══ */}
        <section aria-labelledby="services-heading" className="mp-section mp-reveal" ref={addRef}>
          <h2 id="services-heading" className="mp-section-title">
            Mechanical Project Services at CODEX PROJECT Coimbatore
          </h2>
          <p className="mp-section-sub">
            Comprehensive mechanical engineering project support across all domains —
            affordable pricing, real working models, IEEE documentation included
          </p>
          <div className="mp-services-grid">
            {filteredServices.map((s, i) => (
              <article
                key={i}
                className="mp-service-card"
                style={{ "--tc": s.accentColor, "--tbg": s.color }}
                itemScope itemType="https://schema.org/Service"
                aria-label={s.seo}
              >
                <div className="mp-sc-top-bar"></div>
                <div className="mp-sc-icon">{s.icon}</div>
                <h3 className="mp-sc-title" itemProp="name">{s.title}</h3>
                <meta itemProp="serviceType" content={s.seo} />
                <meta itemProp="areaServed" content="Coimbatore" />
                <p className="mp-sc-desc" itemProp="description">{s.desc}</p>
              </article>
            ))}
          </div>
          {filteredServices.length === 0 && (
            <div className="mp-no-results">
              <p>No exact match found.{" "}
                <button onClick={() => setActiveFilter(null)} className="mp-reset-link">Show all services</button>
              </p>
            </div>
          )}
        </section>

        {/* ══ PROJECT IDEAS ══ */}
        <section aria-labelledby="projects-heading" className="mp-section mp-reveal" ref={addRef}>
          <h2 id="projects-heading" className="mp-section-title">
            Mechanical Final Year Project Ideas – Coimbatore 2024-25
          </h2>
          <p className="mp-section-sub">
            Latest IEEE 2024-25 mechanical project topics for BE, ME, and Diploma students
            in Coimbatore — real working models with full documentation
          </p>
          <div className="mp-ideas-grid">
            {filteredIdeas.map((p, i) => (
              <div
                key={i}
                className="mp-idea-card"
                style={{ "--ibg": tagColors[p.tag] || "#f8f9fa" }}
                itemScope itemType="https://schema.org/CreativeWork"
              >
                <p className="mp-idea-name" itemProp="name">{p.name}</p>
                <span className="mp-idea-tag" itemProp="genre">{p.tag}</span>
              </div>
            ))}
          </div>
          {filteredIdeas.length === 0 && (
            <div className="mp-no-results">
              <p>No project ideas match this filter.{" "}
                <button onClick={() => setActiveFilter(null)} className="mp-reset-link">Show all ideas</button>
              </p>
            </div>
          )}
        </section>

        {/* ══ WHY CHOOSE ══ */}
        <section aria-labelledby="why-heading" className="mp-section mp-reveal" ref={addRef}>
          <h2 id="why-heading" className="mp-section-title">
            Why CODEX PROJECT is the Best Mechanical Project Center in Coimbatore
          </h2>
          <p className="mp-section-sub">
            Here's why hundreds of Mechanical Engineering students across Coimbatore
            trust CODEX PROJECT every year
          </p>
          <div className="mp-why-grid">
            {whyChoose.map((w, i) => (
              <div key={i} className="mp-why-card" style={{ "--wd": `${i * 0.06}s` }}>
                <span className="mp-why-icon">{w.icon}</span>
                <h3 className="mp-why-title">{w.title}</h3>
                <p className="mp-why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ STUDENT REVIEWS ══ */}
        <section aria-labelledby="reviews-heading" className="mp-section mp-reveal" ref={addRef}>
          <h2 id="reviews-heading" className="mp-section-title">
            Student Reviews – Mechanical Project Center Coimbatore
          </h2>
          <p className="mp-section-sub">
            What Mechanical Engineering students say about CODEX PROJECT, Coimbatore
          </p>
          <div className="mp-reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="mp-review-card" itemScope itemType="https://schema.org/Review">
                <div className="mp-review-stars">
                  {"⭐".repeat(r.stars)}
                  <meta itemProp="reviewRating" content="5" />
                </div>
                <p className="mp-review-text" itemProp="reviewBody">"{r.text}"</p>
                <div className="mp-review-author">
                  <div className="mp-review-avatar">{r.name[0]}</div>
                  <div>
                    <strong itemProp="author">{r.name}</strong>
                    <span className="mp-review-branch">{r.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FAQ — TOGGLE ══ */}
        <section aria-labelledby="faq-heading" className="mp-section mp-reveal" ref={addRef}>
          <h2 id="faq-heading" className="mp-section-title">
            Frequently Asked Questions – Mechanical Projects Coimbatore
          </h2>
          <div className="mp-faq-list">
            {faqSchema.mainEntity.map((item, i) => (
              <div
                key={i}
                className={`mp-faq-item ${openFaq === i ? "mp-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ "--fd": `${i * 0.06}s` }}
              >
                <div className="mp-faq-q">
                  <h3 className="mp-faq-question">{item.name}</h3>
                  <span className="mp-faq-icon" aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>
                <div className="mp-faq-a">
                  <p>{item.acceptedAnswer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SEO CONTENT BLOCK ══ */}
        <section aria-labelledby="seo-content-heading" className="mp-section mp-seo-block mp-reveal" ref={addRef}>
          <h2 id="seo-content-heading" className="mp-seo-title">
            Mechanical Project Center in Coimbatore – Complete Guide
          </h2>
          <p>
            Are you searching for the <strong>best mechanical project center in Coimbatore</strong>?
            CODEX PROJECT is your one-stop destination for all mechanical engineering final year
            projects. We specialize in <strong>fabrication projects</strong>,{" "}
            <strong>CAD/CAM design projects</strong>, <strong>robotics projects</strong>,{" "}
            <strong>automation projects</strong>, <strong>mechatronics projects</strong>, and{" "}
            <strong>automobile engineering projects</strong> — all with affordable pricing and
            real working model delivery.
          </p>
          <p>
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
          <p>
            Contact CODEX PROJECT today — the <strong>most affordable mechanical project center
            in Coimbatore</strong> — for a free consultation and project topic guidance.
          </p>
        </section>

        {/* ══ LOCATION ══ */}
        <section aria-labelledby="location-heading" className="mp-section mp-reveal" ref={addRef}>
          <h2 id="location-heading" className="mp-section-title mp-center">
            Visit CODEX PROJECT – Mechanical Project Center, Gandhipuram, Coimbatore
          </h2>
          <p className="mp-location-addr">
            📍 <strong>2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
            Cross Cut Road, Gandhipuram, Coimbatore – 641012</strong>
          </p>
          <div className="mp-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%" height="380" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="CODEX PROJECT Mechanical Project Center – Balaji Complex Gandhipuram Coimbatore"
              aria-label="Google Maps CODEX PROJECT mechanical centre Gandhipuram Coimbatore"
            />
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="mp-cta mp-reveal" ref={addRef} aria-labelledby="cta-heading">
          <div className="mp-cta-bg"></div>
          <div className="mp-cta-inner">
            <h2 id="cta-heading" className="mp-cta-title">
              Start Your Mechanical Final Year Project Today – CODEX PROJECT Coimbatore
            </h2>
            <p className="mp-cta-sub">Join 500+ Mechanical Engineering students who completed their projects with us.</p>
            <p className="mp-cta-addr">📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012</p>
            <p className="mp-cta-tags">Fabrication · CAD/CAM · Robotics · Automation · IEEE 2024-25 · Affordable Pricing · Real Working Models</p>
            <div className="mp-cta-actions">
              <a href="tel:+918525999002" className="mp-cta-btn mp-cta-primary" aria-label="Contact CODEX PROJECT mechanical project center Coimbatore">
                📞 Contact Now – Free Consultation
              </a>
              <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="mp-cta-btn mp-cta-outline" aria-label="Review CODEX PROJECT on Google">
                ⭐ Review on Google
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MechanicalProjects;