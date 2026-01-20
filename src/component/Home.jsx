import React, { useEffect } from "react";
import GridScan from "./GridScan";
import "./Home.css";

const Home = () => {
  /* ================= SEO START (REACT 19 SAFE) ================= */
  useEffect(() => {
    // Page Title
    document.title =
      "Final Year Project Center in Coimbatore | CODEX PROJECT";

    // Meta Description
    const descriptionContent =
      "CODEX PROJECT is a leading final year project center in Coimbatore offering real-time software, embedded and IoT projects with internship and full viva support.";

    let metaDescription = document.querySelector(
      "meta[name='description']"
    );

    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = descriptionContent;
      document.head.appendChild(metaDescription);
    }

    // Meta Keywords (supporting)
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "final year project center in coimbatore, final year projects in coimbatore, cse final year project center in coimbatore, engineering project centre in coimbatore, software project training in coimbatore, embedded system projects coimbatore, iot final year projects coimbatore, react js final year projects coimbatore, node js final year projects coimbatore, internship with final year project in coimbatore, final year project center near me";
    document.head.appendChild(metaKeywords);
  }, []);
  /* ================= SEO END ================= */

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: "🚀",
      title: "Real-Time Projects",
      description: "Industry-level implementation with live demos",
    },
    {
      icon: "👨‍🎓",
      title: "Student Focused",
      description: "Designed specially for final year students",
    },
    {
      icon: "💡",
      title: "Expert Guidance",
      description: "Mentorship from experienced professionals",
    },
    {
      icon: "🛠️",
      title: "Multiple Domains",
      description: "Software, Embedded & IoT projects",
    },
  ];

  return (
    <div className="home-container">
      {/* GridScan Background */}
      <div className="gridscan-background">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          noiseIntensity={0.01}
          scanGlow={0.5}
          scanSoftness={2}
          scanPhaseTaper={0.9}
          scanDuration={2.0}
          scanDelay={2.0}
        />
      </div>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center hero-content">
              <div className="title-wrapper">
                <div className="badge">🚀 Real-Time Projects</div>

                {/* H1 */}
                <h1 className="main-title">
                  CODEX <span className="highlight">PROJECT</span>
                </h1>

                {/* H2 */}
                <h2 className="subtitle">
                  Final Year Project Center in Coimbatore
                </h2>

                <p className="hero-description">
                  CODEX PROJECT is a professional final year project
                  center in Coimbatore providing real-time software,
                  embedded and IoT projects with internship, complete
                  documentation and full viva support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CODEX */}
      <section className="features-section" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">
                Why Choose CODEX PROJECT?
              </h2>
              <p className="section-subtitle">
                Trusted engineering project centre in Coimbatore
              </p>
            </div>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 mb-4"
              >
                <div
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DOMAINS */}
      <section className="domains-preview" id="projects">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">
                Final Year Project Domains
              </h2>
              <p className="section-subtitle">
                Software and Embedded final year projects in Coimbatore
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="domain-preview-card software">
                <div className="domain-content">
                  <div className="domain-icon">💻</div>
                  <h3>Software Projects</h3>
                  <p>
                    Web, mobile and desktop final year software
                    projects using React, Node.js, Python and Java.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="domain-preview-card embedded">
                <div className="domain-content">
                  <div className="domain-icon">🔌</div>
                  <h3>Embedded & IoT Projects</h3>
                  <p>
                    Embedded system projects, IoT automation and
                    hardware-based final year projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO KEYWORD CONTENT BLOCK */}
      <section className="seo-content">
        <div className="container">
          <h2>Final Year Project Center in Coimbatore</h2>

          <p>
            CODEX PROJECT is one of the best final year project centers
            in Coimbatore offering real-time software final year projects,
            embedded system projects and IoT final year projects for
            engineering students.
          </p>

          <p>
            We provide CSE final year projects in Coimbatore, software
            project training, React JS final year projects, Node JS final
            year projects and internship with final year project programs.
          </p>

          <p>
            Students searching for a reliable engineering project centre
            in Coimbatore or a final year project center near me can
            confidently choose CODEX PROJECT for professional guidance
            and industry-ready solutions.
          </p>
        </div>
      </section>

      {/* FLOATING BUTTON */}
      <div className="floating-action">
        <button className="fab" onClick={scrollToProjects}>
          <span className="fab-icon">⚡</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
