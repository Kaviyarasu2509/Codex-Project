import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const sectionRefs = useRef([]);

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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const projects = [
    {
      category: "Software Projects",
      technologies: ["PHP", "Python", "Java", ".NET", "Android", "React", "Node.js"],
      icon: "💻",
      description: "Full-stack web and mobile applications using modern technologies",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      category: "Embedded Systems",
      technologies: ["Arduino", "Raspberry Pi", "ARM Cortex", "ESP32"],
      icon: "🔌",
      description: "Microcontroller-based systems and real-time applications",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      category: "IoT Projects",
      technologies: ["Sensors", "MQTT", "Cloud IoT", "LoRaWAN", "BLE"],
      icon: "🌐",
      description: "Internet of Things solutions for smart automation",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      category: "Mechanical Projects",
      technologies: ["CAD/CAM", "ANSYS", "SolidWorks", "Automation", "Robotics"],
      icon: "⚙️",
      description: "Engineering design and mechanical innovations",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const teams = {
    software: [
      {
        name: "Alex Chen",
        role: "Python Developer",
        specialization: "Backend & AI/ML",
        experience: "4+ years",
        projects: "25+",
        skills: ["Python", "Django", "TensorFlow", "FastAPI"],
        avatar: "👨‍💻",
        color: "#667eea"
      },
      {
        name: "Sarah Johnson",
        role: "PHP Developer",
        specialization: "Full-Stack Web",
        experience: "3+ years",
        projects: "18+",
        skills: ["PHP", "Laravel", "MySQL", "Vue.js"],
        avatar: "👩‍💻",
        color: "#764ba2"
      },
      {
        name: "Mike Rodriguez",
        role: "React Developer",
        specialization: "Frontend & Mobile",
        experience: "3+ years",
        projects: "22+",
        skills: ["React", "React Native", "TypeScript", "Node.js"],
        avatar: "🧑‍💻",
        color: "#f093fb"
      }
    ],
    embedded: [
      {
        name: "Dr. Robert Kim",
        role: "Embedded Systems Lead",
        specialization: "Hardware Design & IoT",
        experience: "6+ years",
        projects: "30+",
        skills: ["Arduino", "ESP32", "PCB Design", "C/C++"],
        avatar: "👨‍🔬",
        color: "#4facfe"
      },
      {
        name: "Emily Watson",
        role: "Embedded Engineer",
        specialization: "Firmware & Robotics",
        experience: "3+ years",
        projects: "15+",
        skills: ["Raspberry Pi", "ARM Cortex", "ROS", "Python"],
        avatar: "👩‍🔧",
        color: "#00f2fe"
      }
    ],
    mechanical: [
      {
        name: "James Wilson",
        role: "Mechanical Engineer",
        specialization: "CAD & Prototyping",
        experience: "5+ years",
        projects: "20+",
        skills: ["SolidWorks", "ANSYS", "3D Printing", "Automation"],
        avatar: "👨‍🏭",
        color: "#43e97b"
      }
    ]
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "🚀" },
    { number: "100+", label: "Happy Students", icon: "😊" },
    { number: "15+", label: "Technologies", icon: "🛠️" },
    { number: "4.9", label: "Rating", icon: "⭐" }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Industry-Relevant",
      description: "Projects aligned with current industry trends and requirements",
      delay: "0s"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Guidance",
      description: "Mentorship from experienced professionals and industry experts",
      delay: "0.1s"
    },
    {
      icon: "⚡",
      title: "End-to-End Support",
      description: "Complete support from concept to final implementation",
      delay: "0.2s"
    },
    {
      icon: "📚",
      title: "Learning Focused",
      description: "Emphasis on understanding concepts and practical implementation",
      delay: "0.3s"
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="hero-content">
                <h1 className="about-title">
                  About <span className="highlight">CODEX PROJECT</span>
                </h1>
                <p className="about-subtitle">
                  Your Premier Final Year Project Center for Engineering Students
                </p>
                <p className="about-description">
                  At CODEX PROJECT, we bridge the gap between academic learning and real-world 
                  implementation. We guide engineering students in creating innovative, industry-relevant 
                  projects that showcase their technical expertise and problem-solving abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 text-center">
                <div className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Domains Section */}
      <section className="domains-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Project Domains</h2>
              <p className="section-subtitle">
                Comprehensive project guidance across multiple engineering disciplines
              </p>
            </div>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-6 col-xl-3 mb-4">
                <div 
                  className="domain-card"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    '--domain-gradient': project.gradient
                  }}
                >
                  <div className="domain-icon">{project.icon}</div>
                  <h3 className="domain-title">{project.category}</h3>
                  <p className="domain-description">{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="domain-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Team Section */}
      <section className="team-section software-team" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Software Development Team</h2>
              <p className="section-subtitle">
                Expert developers specializing in modern software technologies
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {teams.software.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="team-member-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="member-avatar" style={{ backgroundColor: member.color }}>
                    {member.avatar}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-specialization">{member.specialization}</p>
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
                  <div className="member-skills">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="member-glow" style={{ backgroundColor: member.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Team Section */}
      {/* <section className="team-section embedded-team" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Embedded Systems Team</h2>
              <p className="section-subtitle">
                Hardware specialists creating innovative embedded solutions
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {teams.embedded.map((member, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-4">
                <div 
                  className="team-member-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="member-avatar" style={{ backgroundColor: member.color }}>
                    {member.avatar}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-specialization">{member.specialization}</p>
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
                  <div className="member-skills">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="member-glow" style={{ backgroundColor: member.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mechanical Team Section */}
      {/* <section className="team-section mechanical-team" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Mechanical Engineering Team</h2>
              <p className="section-subtitle">
                Design and manufacturing experts for mechanical innovations
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {teams.mechanical.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="team-member-card"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="member-avatar" style={{ backgroundColor: member.color }}>
                    {member.avatar}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-specialization">{member.specialization}</p>
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
                  <div className="member-skills">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="member-glow" style={{ backgroundColor: member.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="features-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Why Choose CODEX PROJECT?</h2>
            </div>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div 
                  className="feature-card"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <div className="feature-wave"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Join hundreds of successful students who have completed their final year projects with CODEX PROJECT
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline">View Projects</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;