import React, { useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const projectDomains = [
    {
      id: 1,
      title: "Software Projects",
      icon: "💻",
      description: "Full-stack web applications, mobile apps, and desktop software using modern technologies",
      technologies: ["PHP", "Python", "Java", ".NET", "Android", "React", "Node.js", "Vue.js", "Angular"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      projectsCount: 25,
      status: "coming-soon",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "APIs & Microservices"]
    },
    {
      id: 2,
      title: "Embedded Systems",
      icon: "🔌",
      description: "Microcontroller-based systems, IoT devices, and real-time embedded applications",
      technologies: ["Arduino", "Raspberry Pi", "ARM Cortex", "ESP32", "STM32", "PCB Design"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      projectsCount: 18,
      status: "coming-soon",
      features: ["IoT Devices", "Robotics", "Automation", "Sensor Networks"]
    },
    {
      id: 3,
      title: "IoT Projects",
      icon: "🌐",
      description: "Smart home automation, industrial IoT, and connected device solutions",
      technologies: ["Sensors", "MQTT", "Cloud IoT", "LoRaWAN", "BLE", "Zigbee"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      projectsCount: 15,
      status: "coming-soon",
      features: ["Smart Home", "Industrial IoT", "Agriculture", "Healthcare"]
    },
    {
      id: 4,
      title: "Mechanical Projects",
      icon: "⚙️",
      description: "CAD designs, mechanical prototypes, automation systems, and robotics",
      technologies: ["CAD/CAM", "ANSYS", "SolidWorks", "Automation", "Robotics", "3D Printing"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      projectsCount: 12,
      status: "coming-soon",
      features: ["CAD Designs", "Prototypes", "Automation", "Robotics"]
    },
    {
      id: 5,
      title: "AI/ML Projects",
      icon: "🤖",
      description: "Machine learning models, computer vision, natural language processing, and AI solutions",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision"],
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      projectsCount: 8,
      status: "coming-soon",
      features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"]
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      icon: "☁️",
      description: "Cloud infrastructure, deployment automation, and DevOps practices implementation",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Azure"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      projectsCount: 10,
      status: "coming-soon",
      features: ["Cloud Deployment", "CI/CD Pipelines", "Containerization", "Infrastructure as Code"]
    }
  ];

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="hero-content">
                <h1 className="projects-title">
                  Our <span className="highlight">Projects</span>
                </h1>
                <p className="projects-subtitle">
                  Explore Our Comprehensive Project Portfolio Across Multiple Domains
                </p>
                <p className="projects-description">
                  Discover innovative projects developed by our talented teams. From cutting-edge software 
                  solutions to advanced embedded systems, each project showcases technical excellence and 
                  real-world problem-solving capabilities.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">80+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">6</span>
                    <span className="stat-label">Domains</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Project Domains Grid */}
      <section className="domains-grid-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Project Domains</h2>
              <p className="section-subtitle">
                Browse through our diverse range of project categories
              </p>
            </div>
          </div>
          
          <div className="domains-grid">
            {projectDomains.map((domain, index) => (
              <div 
                key={domain.id}
                className="domain-card-wrapper"
                ref={addToRefs}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="domain-card">
                  {/* Card Header */}
                  <div className="card-header">
                    <div className="domain-icon" style={{ background: domain.gradient }}>
                      {domain.icon}
                    </div>
                    <div className="domain-meta">
                      <span className="projects-count">{domain.projectsCount} Projects</span>
                      <div className="status-badge">{domain.status}</div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <h3 className="domain-title">{domain.title}</h3>
                    <p className="domain-description">{domain.description}</p>
                    
                    {/* Features List */}
                    <div className="features-list">
                      {domain.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="technologies-section">
                      <h4>Technologies Used:</h4>
                      <div className="technologies-grid">
                        {domain.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer">
                    <div className="coming-soon-overlay">
                      <div className="coming-soon-content">
                        <div className="pulse-dot"></div>
                        <span className="coming-soon-text">Full Details Coming Soon</span>
                        <div className="countdown">
                          <span className="countdown-text">Stay Tuned!</span>
                        </div>
                      </div>
                    </div>
                    <button className="view-projects-btn" disabled>
                      <span className="btn-text">View Projects</span>
                      <span className="btn-icon">🚀</span>
                    </button>
                  </div>

                  {/* Glow Effect */}
                  <div 
                    className="card-glow"
                    style={{ background: domain.gradient }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="projects-cta">
            <div className="cta-content">
              <h3>Ready to Start Your Project?</h3>
              <p>Contact us to discuss your project requirements and get started today!</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Get In Touch</button>
                <button className="btn btn-outline">View Case Studies</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-circle circle-4"></div>
      </div>
    </div>
  );
};

export default Projects;