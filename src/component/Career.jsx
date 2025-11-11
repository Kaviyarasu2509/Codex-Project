import React, { useEffect, useRef, useState } from "react";
import "./Career.css";

const Career = () => {
  const sectionRefs = useRef([]);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const departments = [
    {
      name: "Software Development",
      icon: "💻",
      color: "#667eea",
      roles: ["Full Stack Developer", "Frontend Engineer", "Backend Developer", "Mobile Developer"],
      description: "Build cutting-edge applications with modern technologies"
    },
    {
      name: "Embedded Systems",
      icon: "🔌",
      color: "#764ba2",
      roles: ["Embedded Engineer", "IoT Specialist", "Firmware Developer", "Hardware Designer"],
      description: "Create innovative hardware and IoT solutions"
    },
    {
      name: "Mechanical Engineering",
      icon: "⚙️",
      color: "#f093fb",
      roles: ["Mechanical Designer", "CAD Engineer", "Robotics Engineer", "Prototyping Specialist"],
      description: "Design and develop mechanical systems and prototypes"
    },
    {
      name: "AI & Machine Learning",
      icon: "🤖",
      color: "#4facfe",
      roles: ["ML Engineer", "Data Scientist", "AI Researcher", "Computer Vision Engineer"],
      description: "Push the boundaries of artificial intelligence"
    }
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Industry-standard compensation packages" },
    { icon: "🏠", title: "Remote Work", description: "Flexible work-from-home options" },
    { icon: "📚", title: "Learning Budget", description: "Annual budget for courses and conferences" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive medical coverage" },
    { icon: "⚡", title: "Latest Tech", description: "Work with cutting-edge technologies" },
    { icon: "🎯", title: "Career Growth", description: "Clear paths for advancement and promotion" }
  ];

  const stats = [
    { number: "25+", label: "Team Members", icon: "👥" },
    { number: "6", label: "Countries", icon: "🌎" },
    { number: "4.8", label: "Rating", icon: "⭐" },
    { number: "50+", label: "Projects", icon: "🚀" }
  ];

  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="hero-content">
                <div className="hero-badge">
                  <span className="badge-text">We're Hiring Soon!</span>
                  <div className="badge-pulse"></div>
                </div>
                <h1 className="career-title">
                  Join The <span className="highlight">CODEX</span> Team
                </h1>
                <p className="career-subtitle">
                  Build Your Career With Innovative Projects and Cutting-Edge Technology
                </p>
                <p className="career-description">
                  We're preparing to expand our team with talented individuals who are passionate about 
                  technology and innovation. While we're not actively hiring right now, exciting opportunities 
                  are coming soon!
                </p>
                
                {/* Countdown Timer */}
                <div className="countdown-section">
                  <div className="countdown-title">New Positions Launch In</div>
                  <div className="countdown-timer">
                    <div className="countdown-item">
                      <span className="countdown-number">30</span>
                      <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-item">
                      <span className="countdown-number">12</span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                      <span className="countdown-number">45</span>
                      <span className="countdown-label">Minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background */}
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="career-stats" ref={addToRefs}>
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

      {/* Coming Soon Alert */}
      <section className="coming-soon-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="coming-soon-card">
                <div className="alert-icon">🚀</div>
                <h2 className="alert-title">Job Alerts Coming Soon!</h2>
                <p className="alert-description">
                  We're working behind the scenes to create amazing opportunities. 
                  Be the first to know when we start hiring by joining our waitlist.
                </p>
                
                {/* Subscription Form */}
                <div className="subscription-form">
                  {isSubscribed ? (
                    <div className="success-message">
                      <div className="success-icon">✅</div>
                      <h3>You're on the List!</h3>
                      <p>We'll notify you as soon as positions open up. Get ready for exciting opportunities!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="email-form">
                      <div className="input-group">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="email-input"
                        />
                        <button type="submit" className="subscribe-btn">
                          <span className="btn-text">Notify Me</span>
                          <span className="btn-icon">🔔</span>
                        </button>
                      </div>
                      <p className="form-note">
                        We respect your privacy. No spam, unsubscribe anytime.
                      </p>
                    </form>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="progress-section">
                  <div className="progress-label">
                    <span>Hiring Preparation Progress</span>
                    <span className="progress-percent">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="departments-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Future Opportunities</h2>
              <p className="section-subtitle">
                Explore the departments where we'll be hiring soon
              </p>
            </div>
          </div>
          <div className="row">
            {departments.map((dept, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div 
                  className="department-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="dept-header">
                    <div 
                      className="dept-icon"
                      style={{ backgroundColor: dept.color }}
                    >
                      {dept.icon}
                    </div>
                    <div className="dept-info">
                      <h3 className="dept-name">{dept.name}</h3>
                      <p className="dept-description">{dept.description}</p>
                    </div>
                  </div>
                  <div className="dept-roles">
                    <h4>Potential Roles:</h4>
                    <div className="roles-list">
                      {dept.roles.map((role, roleIndex) => (
                        <span key={roleIndex} className="role-tag">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="coming-soon-tag">Coming Soon</div>
                  <div 
                    className="dept-glow"
                    style={{ backgroundColor: dept.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Why Work With Us?</h2>
              <p className="section-subtitle">
                We believe in creating an environment where talent thrives
              </p>
            </div>
          </div>
          <div className="row">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div 
                  className="benefit-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="cta-content">
                <h2 className="cta-title">Don't Miss Out!</h2>
                <p className="cta-description">
                  Join our talent community and be the first to know when we launch new positions. 
                  Your dream career at CODEX PROJECT could be just around the corner.
                </p>
                <div className="cta-buttons">
                  <button 
                    onClick={() => document.querySelector('.coming-soon-section').scrollIntoView({ behavior: 'smooth' })}
                    className="btn btn-primary"
                  >
                    Get Job Alerts
                  </button>
                  <button className="btn btn-outline">
                    Learn About Our Culture
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Animation */}
        <div className="cta-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </div>
  );
};

export default Career;