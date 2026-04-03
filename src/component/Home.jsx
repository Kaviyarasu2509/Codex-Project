import React from "react";

// ─── Structured Data (JSON-LD) for Google Rich Results ───────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Codex Project",
  "description":
    "Best final year project center in Coimbatore offering IEEE projects, internship training, and placement support for engineering students.",
  "url": "https://www.codexproject.in",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN",
  },
  "telephone": "+91-XXXXXXXXXX",
  "areaServed": ["Coimbatore", "Peelamedu", "Gandhipuram", "Saravanampatti"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Final Year Project Domains",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Machine Learning Projects" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IoT & Embedded Systems Projects" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mechanical Engineering Projects" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development Projects" } },
    ],
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "200",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which is the best final year project center in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Codex Project is one of the best final year project centers in Coimbatore, offering real-time IEEE projects, internship training, and placement support for BE, ME, BSc, and Diploma students.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide internship with project development in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, Codex Project provides internship training along with final year project development covering Software, AI, ML, IoT, Embedded Systems, and Mechanical domains.",
      },
    },
    {
      "@type": "Question",
      "name": "What project domains are available at Codex Project Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We offer projects in Software Development (Python, AI, ML, MERN), IoT & Embedded Systems, Mechanical & Automation, Mobile App Development, and IEEE certified projects.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a final year project cost at Codex Project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Codex Project offers affordable final year project pricing in Coimbatore with packages for software, hardware, and mechanical projects. Contact us for a custom quote.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you support viva and documentation for final year projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, we provide 100% documentation support including IEEE paper format, project report, PPT, and viva preparation guidance for all final year projects.",
      },
    },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
const Home = () => {
  return (
    <div className="home-container">

      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* ══════════════════════════════════════════════
          HERO — Primary H1 with main keyword
      ══════════════════════════════════════════════ */}
      <section className="hero-section text-center py-5">
        <div className="container">
          {/* H1 — ONE per page, most important keyword */}
          <h1 className="fw-bold">
            Best Final Year Project Center in Coimbatore –{" "}
            <span className="text-primary">Codex Project</span>
          </h1>

          {/* Keyword-rich subtitle visible to crawlers */}
          <p className="lead mt-3">
            Codex Project is Coimbatore's most trusted final year project center, offering
            real-time <strong>IEEE projects</strong>, <strong>internship training</strong>, and
            complete <strong>placement support</strong> for BE, ME, BSc, MCA, and Diploma students.
          </p>
          <p>
            We specialize in <strong>Artificial Intelligence projects</strong>,{" "}
            <strong>Machine Learning projects</strong>, <strong>Web Development projects</strong>,{" "}
            <strong>IoT projects</strong>, <strong>Embedded Systems projects</strong>, and{" "}
            <strong>Mechanical Engineering projects</strong> — all with affordable pricing and
            100% project guidance in Coimbatore.
          </p>

          {/* LSI keywords in a trust-bar */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 mb-4">
            {[
              "IEEE Certified Projects",
              "Internship Support",
              "Affordable Pricing",
              "Documentation Help",
              "Viva Preparation",
              "Placement Guidance",
            ].map((tag) => (
              <span key={tag} className="badge bg-primary fs-6 px-3 py-2">
                ✔ {tag}
              </span>
            ))}
          </div>

          <a
            href="https://g.page/r/CUj6SjsY-0qgEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning btn-lg mt-2"
            aria-label="Leave a Google Review for Codex Project"
          >
            ⭐ Give Review on Google
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section className="py-5 bg-light" aria-labelledby="about-heading">
        <div className="container">
          <h2 id="about-heading">
            About Codex Project – Top-Rated Project Center in Coimbatore
          </h2>
          <p>
            Codex Project is a top-rated <strong>final year project center in Coimbatore</strong>{" "}
            delivering innovative, industry-standard project solutions for engineering and diploma
            students. Our hands-on approach covers <strong>real-time project development</strong>,{" "}
            <strong>IEEE paper publication guidance</strong>, and{" "}
            <strong>internship-based training</strong> that bridges the gap between academics and
            industry.
          </p>
          <p>
            Thousands of students from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Ukkadam,
            Singanallur, and across Coimbatore district have successfully completed their final year
            projects with our expert guidance. Whether you're a <strong>BE student</strong>, an{" "}
            <strong>ME student</strong>, a <strong>BSc / MCA graduate</strong>, or a{" "}
            <strong>Diploma student</strong>, Codex Project has the perfect solution for you.
          </p>
          <p>
            We are recognized as one of the <strong>best project centers near Coimbatore</strong>{" "}
            for affordable pricing, transparent process, and career-oriented outcomes.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DOMAINS / SERVICES
      ══════════════════════════════════════════════ */}
      <section className="py-5" aria-labelledby="domains-heading">
        <div className="container">
          <h2 id="domains-heading">
            Final Year Project Domains at Codex Project, Coimbatore
          </h2>
          <p>
            We offer final year project support across all major engineering and technology
            domains. Each project comes with complete source code, documentation, PPT, and
            viva support.
          </p>

          <div className="row g-4 mt-2">
            {[
              {
                icon: "🤖",
                title: "AI & Machine Learning Projects",
                desc:
                  "Deep Learning, NLP, Computer Vision, Data Science projects using Python, TensorFlow, and Scikit-learn — best AI project center in Coimbatore.",
              },
              {
                icon: "🌐",
                title: "Web & Mobile App Development",
                desc:
                  "Full-stack projects using MERN Stack, Django, React, Flutter, and Android — ideal for CSE, IT, and MCA students in Coimbatore.",
              },
              {
                icon: "📡",
                title: "IoT & Embedded Systems Projects",
                desc:
                  "Arduino, Raspberry Pi, NodeMCU, and cloud-integrated IoT projects — best embedded systems project center in Coimbatore.",
              },
              {
                icon: "⚙️",
                title: "Mechanical & Automation Projects",
                desc:
                  "Fabrication, CAD design, robotics, and automation projects — top mechanical project center in Coimbatore for ME & BE students.",
              },
              {
                icon: "📄",
                title: "IEEE Certified Projects",
                desc:
                  "IEEE 2023–2025 base paper projects with implementation, paper writing, and publication support across all domains.",
              },
              {
                icon: "📱",
                title: "Java & .NET Projects",
                desc:
                  "Enterprise-grade Java, Spring Boot, and .NET projects with database integration and deployment support for IT & CS students.",
              },
            ].map((d) => (
              <div key={d.title} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="fs-2 mb-2">{d.icon}</div>
                    <h3 className="h5 card-title">{d.title}</h3>
                    <p className="card-text text-muted">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOFTWARE PROJECTS
      ══════════════════════════════════════════════ */}
      <section className="py-5 bg-light" aria-labelledby="software-heading">
        <div className="container">
          <h2 id="software-heading">
            Best Software Project Center in Coimbatore
          </h2>
          <p>
            Looking for the <strong>best software project center in Coimbatore</strong>? Codex
            Project provides real-time software projects using <strong>Python</strong>,{" "}
            <strong>Django</strong>, <strong>Machine Learning</strong>, <strong>MERN Stack</strong>,{" "}
            <strong>Java</strong>, and <strong>.NET</strong> — complete with source code, training,
            testing, and deployment support.
          </p>
          <p>
            Our software projects follow the latest <strong>IEEE 2024–2025 base papers</strong> and
            are customizable to your college requirements. We also support students who bring their
            own project ideas with full implementation assistance.
          </p>
          <ul className="mt-3">
            <li>✔ Python AI/ML project center Coimbatore</li>
            <li>✔ MERN Stack web development projects</li>
            <li>✔ Django & Flask backend projects</li>
            <li>✔ React & Node.js full-stack projects</li>
            <li>✔ Deep Learning & NLP projects Coimbatore</li>
            <li>✔ Data Science & Analytics projects</li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MECHANICAL
      ══════════════════════════════════════════════ */}
      <section className="py-5" aria-labelledby="mechanical-heading">
        <div className="container">
          <h2 id="mechanical-heading">
            Mechanical Project Center in Coimbatore – Fabrication & CAD Design
          </h2>
          <p>
            Codex Project is a leading <strong>mechanical project center in Coimbatore</strong>{" "}
            offering fabrication, CAD/CAM design, robotics, drone projects, and automation systems.
            Our experienced mentors guide ME, BE Mechanical, and Automobile students through every
            stage — from ideation to final presentation.
          </p>
          <ul className="mt-3">
            <li>✔ CAD/CAM & SolidWorks design projects</li>
            <li>✔ Fabrication and prototype building</li>
            <li>✔ Robotics and automation projects</li>
            <li>✔ Renewable energy and solar projects</li>
            <li>✔ FEA / ANSYS simulation projects</li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          IOT / EMBEDDED
      ══════════════════════════════════════════════ */}
      <section className="py-5 bg-light" aria-labelledby="iot-heading">
        <div className="container">
          <h2 id="iot-heading">
            Embedded Systems & IoT Project Center in Coimbatore
          </h2>
          <p>
            As the <strong>best IoT project center in Coimbatore</strong>, we help ECE, EEE, and
            EIE students build real-time embedded systems and Internet of Things projects using{" "}
            <strong>Arduino</strong>, <strong>Raspberry Pi</strong>, <strong>NodeMCU</strong>, and
            cloud platforms like AWS IoT and Google Firebase.
          </p>
          <ul className="mt-3">
            <li>✔ Smart home & smart city IoT projects</li>
            <li>✔ Health monitoring embedded systems</li>
            <li>✔ Agricultural IoT projects Coimbatore</li>
            <li>✔ Industrial automation projects</li>
            <li>✔ GSM / GPS based tracking projects</li>
            <li>✔ VLSI & FPGA projects</li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTERNSHIP
      ══════════════════════════════════════════════ */}
      <section className="py-5" aria-labelledby="internship-heading">
        <div className="container">
          <h2 id="internship-heading">
            Internship Training Center in Coimbatore with Project Support
          </h2>
          <p>
            Codex Project is also a top <strong>internship training center in Coimbatore</strong>.
            We offer summer internships, semester-based internships, and industrial training
            programs in Python, AI/ML, Web Development, IoT, and Embedded Systems.
          </p>
          <p>
            Students receive a <strong>verified internship certificate</strong>, live project
            experience, and placement guidance — making Codex Project the{" "}
            <strong>best internship center for engineering students in Coimbatore</strong>.
          </p>
          <ul className="mt-3">
            <li>✔ Summer internship for engineering students Coimbatore</li>
            <li>✔ Internship certificate with live project</li>
            <li>✔ Python & AI internship training</li>
            <li>✔ Web development internship Coimbatore</li>
            <li>✔ IoT internship with hands-on training</li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE
      ══════════════════════════════════════════════ */}
      <section className="py-5 bg-light" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading">
            Why Codex Project is the Best Project Center in Coimbatore
          </h2>
          <p>
            Hundreds of students choose Codex Project every year because we deliver results —
            not just projects. Here's why we're ranked among the{" "}
            <strong>top final year project centers in Coimbatore</strong>:
          </p>
          <div className="row g-3 mt-2">
            {[
              ["💰", "Affordable Pricing", "Lowest project cost in Coimbatore with no hidden charges."],
              ["🎓", "IEEE & Real-Time Projects", "Latest 2024–2025 IEEE base paper projects with real-world implementation."],
              ["📋", "Complete Documentation", "Project report, PPT, synopsis, and IEEE paper — all included."],
              ["🎤", "Viva Support", "Expert guidance for project viva and review presentations."],
              ["🏢", "Internship Certificate", "Work on real projects and earn an industry-recognized certificate."],
              ["🚀", "Placement Guidance", "Resume building, mock interviews, and job referrals for students."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="col-md-6 col-lg-4">
                <div className="d-flex gap-3 align-items-start p-3 bg-white rounded shadow-sm h-100">
                  <span className="fs-3">{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <p className="mb-0 text-muted small">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STUDENT REVIEWS
      ══════════════════════════════════════════════ */}
      <section className="review-section py-5" aria-labelledby="reviews-heading">
        <div className="container">
          <h2 id="reviews-heading">
            Student Reviews – Codex Project, Best Project Center in Coimbatore
          </h2>
          <p className="text-muted mb-4">
            See what engineering students across Coimbatore say about their experience at
            Codex Project.
          </p>

          <div className="row g-4">
            {[
              {
                stars: "⭐⭐⭐⭐⭐",
                text: "Codex Project is the best final year project center in Coimbatore. The team provided excellent real-time training and complete IEEE documentation support. Highly recommended for all engineering students!",
                name: "Arun K., BE CSE",
              },
              {
                stars: "⭐⭐⭐⭐⭐",
                text: "I completed my IoT final year project at Codex Project with great practical knowledge and guidance. The mentors explained everything step by step. Best embedded project center near Gandhipuram!",
                name: "Priya S., BE ECE",
              },
              {
                stars: "⭐⭐⭐⭐⭐",
                text: "Amazing AI and Python project support! They helped me with a complete machine learning project including paper writing and viva. Best software project center in Coimbatore for 2024.",
                name: "Karthik R., ME IT",
              },
              {
                stars: "⭐⭐⭐⭐⭐",
                text: "My mechanical fabrication project was completed on time with excellent CAD design support. Affordable cost and professional mentors. Best mechanical project center in Coimbatore!",
                name: "Divya M., BE Mechanical",
              },
            ].map((r) => (
              <div key={r.name} className="col-md-6">
                <div
                  className="card border-0 shadow-sm h-100 p-3"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" />
                    <p className="mb-1">{r.stars}</p>
                  </div>
                  <p itemProp="reviewBody" className="text-muted fst-italic">
                    "{r.text}"
                  </p>
                  <p className="fw-bold mb-0" itemProp="author">
                    – {r.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="https://g.page/r/CUj6SjsY-0qgEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning btn-lg"
              aria-label="View all student reviews of Codex Project on Google"
            >
              ⭐ View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ — Schema-marked
      ══════════════════════════════════════════════ */}
      <section className="py-5 bg-light" aria-labelledby="faq-heading">
        <div className="container">
          <h2 id="faq-heading">
            Frequently Asked Questions – Final Year Project Center Coimbatore
          </h2>

          {[
            {
              q: "Which is the best final year project center in Coimbatore?",
              a: "Codex Project is widely regarded as the best final year project center in Coimbatore, offering IEEE projects, real-time training, internship support, and placement guidance for BE, ME, BSc, MCA, and Diploma students.",
            },
            {
              q: "Do you provide internship for engineering students in Coimbatore?",
              a: "Yes! Codex Project offers summer and semester internships with live project experience, internship certificates, and placement support — making us the top internship training center in Coimbatore.",
            },
            {
              q: "What project domains are available at Codex Project Coimbatore?",
              a: "We cover Software (Python, AI, ML, MERN, Django), IoT & Embedded Systems (Arduino, Raspberry Pi), Mechanical & Automation (CAD, fabrication, robotics), Mobile App Development, and IEEE certified projects.",
            },
            {
              q: "Do you provide documentation and viva support for final year projects?",
              a: "Yes, we provide 100% documentation support — project report in IEEE format, synopsis, PPT, and full viva preparation. Our experts guide you through every review and final presentation.",
            },
            {
              q: "How much does a final year project cost at Codex Project?",
              a: "Codex Project offers the most affordable final year project pricing in Coimbatore. Costs vary by domain and complexity. Contact us for a free consultation and custom quote.",
            },
            {
              q: "Which areas in Coimbatore do you serve?",
              a: "We serve students from Peelamedu, Gandhipuram, Saravanampatti, RS Puram, Singanallur, Ukkadam, Vadavalli, and all other areas in and around Coimbatore.",
            },
          ].map((item) => (
            <div key={item.q} className="mb-4">
              <h3 className="h5 fw-bold">{item.q}</h3>
              <p className="text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOCATION
      ══════════════════════════════════════════════ */}
      <section className="py-5" aria-labelledby="location-heading">
        <div className="container">
          <h2 id="location-heading">
            Codex Project Location – Final Year Project Center in Coimbatore
          </h2>
          <p>
            Codex Project is conveniently located in <strong>Coimbatore, Tamil Nadu</strong>.
            We are easily accessible from <strong>Peelamedu</strong>,{" "}
            <strong>Gandhipuram</strong>, <strong>Saravanampatti</strong>,{" "}
            <strong>RS Puram</strong>, <strong>Singanallur</strong>, and all major engineering
            college zones in Coimbatore. Visit us for a free counselling session on your
            final year project or internship.
          </p>
          <p>
            <strong>Keywords:</strong> final year project center near me Coimbatore | project
            center near Peelamedu | best project center near Gandhipuram | IEEE project center
            Coimbatore 2024 2025
          </p>

          <iframe
            src="https://www.google.com/maps?q=Coimbatore&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            title="Codex Project location map – final year project center in Coimbatore"
            aria-label="Google Maps showing Codex Project location in Coimbatore"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTERNAL LINKS / TOPIC CLUSTER
      ══════════════════════════════════════════════ */}
      <section className="py-4 bg-light">
        <div className="container">
          <h2 className="h5">Explore Our Services</h2>
          <div className="d-flex flex-wrap gap-3 mt-2">
            {[
              "AI Projects Coimbatore",
              "Machine Learning Projects Coimbatore",
              "IoT Projects Coimbatore",
              "Embedded Systems Projects Coimbatore",
              "Mechanical Projects Coimbatore",
              "IEEE Projects Coimbatore",
              "Internship Training Coimbatore",
              "Python Projects Coimbatore",
              "MERN Stack Projects Coimbatore",
              "Final Year Projects 2025",
            ].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className="badge bg-secondary text-decoration-none fs-6 px-3 py-2"
                aria-label={link}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section className="text-center py-5" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">
            Start Your Final Year Project Today at Codex Project, Coimbatore
          </h2>
          <p className="lead">
            Join 1000+ engineering students who trusted Codex Project — the{" "}
            <strong>best final year project center in Coimbatore</strong> — for IEEE projects,
            internship training, and placement support.
          </p>
          <p className="text-muted">
            📍 Coimbatore, Tamil Nadu &nbsp;|&nbsp; 📞 Call / WhatsApp for Free Consultation
          </p>
          <a
            href="https://g.page/r/CUj6SjsY-0qgEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg me-3"
            aria-label="Contact Codex Project final year project center Coimbatore"
          >
            📞 Contact Now – Free Consultation
          </a>
          <a
            href="https://g.page/r/CUj6SjsY-0qgEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning btn-lg"
            aria-label="Review Codex Project on Google"
          >
            ⭐ Review Us on Google
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;