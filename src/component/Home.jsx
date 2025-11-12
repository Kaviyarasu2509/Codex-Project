import React from "react";
import GridScan from "./GridScan";
import "./Home.css";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 

  const features = [
    { icon: "🚀", title: "Innovative Projects", description: "Cutting-edge technology solutions" },
    { icon: "👨‍🎓", title: "Student Focused", description: "Designed for final year students" },
    { icon: "💡", title: "Expert Guidance", description: "Mentorship from industry professionals" },
    { icon: "🛠️", title: "Multiple Domains", description: "Software, Embedded, IoT & Mechanical" }
  ];

 

  return (
    <div className="home-container">
      {/* GridScan Background Animation */}
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
      
      {/* Main Hero Section */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center hero-content">
              <div className="title-wrapper">
                <div className="badge">🚀 Coming Soon</div>
                <h1 className="main-title">
                  CODEX <span className="highlight">PROJECT</span>
                </h1>
                <h2 className="subtitle">FINAL YEAR PROJECTS</h2>
                <p className="hero-description">
                  Transform your academic journey with innovative, industry-ready projects. 
                  We bridge the gap between learning and real-world implementation.
                </p>         
                
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Features Section */}
      <section className="features-section" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Why Choose CODEX PROJECT?</h2>
              <p className="section-subtitle">
                We provide comprehensive project guidance across multiple engineering domains
              </p>
            </div>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Domains Preview */}
      <section className="domains-preview" id="projects">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Project Domains</h2>
              <p className="section-subtitle">
                Explore our wide range of project categories
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="domain-preview-card software">
                <div className="domain-content">
                  <div className="domain-icon">💻</div>
                  <h3>Software Projects</h3>
                  <p>Web, Mobile, Desktop applications using modern technologies</p>
                  <div className="tech-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>Java</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="domain-preview-card embedded">
                <div className="domain-content">
                  <div className="domain-icon">🔌</div>
                  <h3>Embedded & IoT</h3>
                  <p>Hardware solutions, IoT devices, and automation systems</p>
                  <div className="tech-tags">
                    <span>Arduino</span>
                    <span>Raspberry Pi</span>
                    <span>ESP32</span>
                    <span>Sensors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Floating Action Button */}
      <div className="floating-action">
        <button className="fab" onClick={scrollToProjects}>
          <span className="fab-icon">⚡</span>
        </button>
      </div>
    </div>
  );
};

export default Home;