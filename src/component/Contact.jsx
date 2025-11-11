import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const sectionRefs = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email anytime",
      details: "contact@codexproject.in",
      link: "www.codexproject.in",
      color: "#667eea"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon - Fri, 9am - 6pm",
      details: "+1 (555) 123-CODE",
      link: "tel:+15551234563",
      color: "#764ba2"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick chat support",
      details: "+1 (555) 123-CODE",
      link: "https://wa.me/15551234563",
      color: "#43e97b"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Come say hello",
      details: "123 Tech Park, Innovation City",
      link: "https://maps.google.com",
      color: "#f093fb"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: "💬" },
    { value: "project", label: "Project Discussion", icon: "🚀" },
    { value: "career", label: "Career Opportunity", icon: "👥" },
    { value: "partnership", label: "Partnership", icon: "🤝" },
    { value: "support", label: "Technical Support", icon: "🔧" }
  ];

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond within 24 hours during business days."
    },
    {
      question: "Do you offer free project consultations?",
      answer: "Yes! We offer free 30-minute consultations to discuss your project requirements."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including React, Node.js, Python, IoT, Embedded Systems, and more."
    },
    {
      question: "Can you work with international clients?",
      answer: "Absolutely! We work with clients from all around the world and can accommodate different time zones."
    }
  ];

  const teamContacts = [
    {
      name: "Alex Chen",
      role: "Project Manager",
      department: "Software Projects",
      email: "alex@codexproject.com",
      avatar: "👨‍💼",
      color: "#667eea"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Lead",
      department: "Embedded Systems",
      email: "sarah@codexproject.com",
      avatar: "👩‍🔧",
      color: "#764ba2"
    },
    {
      name: "Mike Rodriguez",
      role: "Business Development",
      department: "Partnerships",
      email: "mike@codexproject.com",
      avatar: "👨‍💼",
      color: "#f093fb"
    }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="hero-content">
                <h1 className="contact-title">
                  Get In <span className="highlight">Touch</span>
                </h1>
                <p className="contact-subtitle">
                  Let's Discuss Your Next Project or Collaboration
                </p>
                <p className="contact-description">
                  Ready to bring your ideas to life? We're here to help you turn your vision into reality. 
                  Whether you're a student with a final year project or a business with innovative ideas, 
                  let's start the conversation.
                </p>
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
          </div>
          <div className="hero-particles">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Multiple Ways to Connect</h2>
              <p className="section-subtitle">
                Choose your preferred method to get in touch with us
              </p>
            </div>
          </div>
          <div className="row">
            {contactMethods.map((method, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div 
                  className="contact-method-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="method-icon"
                    style={{ backgroundColor: method.color }}
                  >
                    {method.icon}
                  </div>
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  <p className="method-details">{method.details}</p>
                  <a href={method.link} className="method-link">
                    Contact via {method.title}
                    <span className="link-arrow">→</span>
                  </a>
                  <div 
                    className="method-glow"
                    style={{ backgroundColor: method.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="form-container">
                <div className="form-header">
                  <h2 className="form-title">Send Us a Message</h2>
                  <p className="form-subtitle">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon">🎉</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inquiryType" className="form-label">
                        Inquiry Type *
                      </label>
                      <div className="inquiry-types">
                        {inquiryTypes.map((type) => (
                          <label key={type.value} className="inquiry-option">
                            <input
                              type="radio"
                              name="inquiryType"
                              value={type.value}
                              checked={formData.inquiryType === type.value}
                              onChange={handleInputChange}
                              className="inquiry-radio"
                            />
                            <span className="inquiry-content">
                              <span className="inquiry-icon">{type.icon}</span>
                              <span className="inquiry-label">{type.label}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="form-textarea"
                        placeholder="Tell us about your project or inquiry..."
                        rows="6"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">🚀</span>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="team-contacts-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="section-title">Direct Team Contacts</h2>
              <p className="section-subtitle">
                Reach out directly to our team members for specific inquiries
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {teamContacts.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="team-contact-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div 
                    className="member-avatar"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.avatar}
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-department">{member.department}</p>
                  </div>
                  <div className="contact-actions">
                    <a href={`mailto:${member.email}`} className="contact-btn">
                      <span className="btn-icon">📧</span>
                      Email {member.name.split(' ')[0]}
                    </a>
                  </div>
                  <div 
                    className="member-glow"
                    style={{ backgroundColor: member.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Quick answers to common questions
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="faq-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="faq-question">
                      <span className="question-icon">❓</span>
                      <h4>{faq.question}</h4>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta" ref={addToRefs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Start Your Project?</h2>
                <p className="cta-description">
                  Don't wait any longer. Get in touch with us today and let's discuss how we can help 
                  bring your ideas to life with cutting-edge technology and expert guidance.
                </p>
                <div className="cta-buttons">
                  <button 
                    onClick={() => document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' })}
                    className="btn btn-primary"
                  >
                    Start a Project
                  </button>
                  <a href="mailto:contact@codexproject.com" className="btn btn-outline">
                    Quick Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Animation */}
        <div className="cta-particles">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
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

export default Contact;