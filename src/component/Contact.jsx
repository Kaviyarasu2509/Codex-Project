import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const contactSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "name": "CODEX PROJECT – Final Year Project Center",
  "url": "https://www.codexproject.in",
  "email": "codexproject2026@gmail.com",
  "telephone": "+918525999002",
  "description":
    "Best final year project center in Coimbatore offering IEEE 2024-25 projects, internship training, and placement support. Contact us for Software, AI, IoT, Embedded, and Mechanical projects.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess, Cross Cut Road",
    "addressLocality": "Gandhipuram, Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641012",
    "addressCountry": "IN",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 11.0187267, "longitude": 76.9686347 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "20:00" }
  ],
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+918525999002", "contactType": "customer service", "areaServed": "IN", "availableLanguage": ["English", "Tamil"], "description": "General Enquiry" },
    { "@type": "ContactPoint", "telephone": "+918525999022", "contactType": "technical support", "areaServed": "IN", "availableLanguage": ["English", "Tamil"], "description": "Software & AI Projects" },
    { "@type": "ContactPoint", "telephone": "+918525999032", "contactType": "technical support", "areaServed": "IN", "availableLanguage": ["English", "Tamil"], "description": "Embedded & IoT Projects" },
  ],
  "sameAs": ["https://wa.me/918525999002"],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "200" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How to contact CODEX PROJECT Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Call or WhatsApp: 8525999002 (General), 8525999022 (Software & AI), 8525999032 (Embedded & IoT). Email: codexproject2026@gmail.com. Visit: 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012." } },
    { "@type": "Question", "name": "Do you offer free consultation for final year projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! CODEX PROJECT offers free 30-minute project consultations. Call 8525999002 or WhatsApp us to schedule a free consultation at our Gandhipuram, Coimbatore center." } },
    { "@type": "Question", "name": "What are the working hours of CODEX PROJECT Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "CODEX PROJECT is open Monday to Saturday, 9:00 AM to 8:00 PM at 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012." } },
    { "@type": "Question", "name": "Which number to call for Software and AI projects in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "For Software, Python, AI, and Machine Learning project enquiries at CODEX PROJECT Coimbatore, call or WhatsApp: 8525999022." } },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const contactMethods = [
  {
    icon: "📞",
    title: "General Enquiry",
    subtitle: "All project enquiries",
    number: "85259 99002",
    raw: "+918525999002",
    call: "tel:+918525999002",
    whatsapp: "https://wa.me/918525999002",
    color: "#1565C0",
    bg: "#EBF3FF",
    seo: "Call CODEX PROJECT Coimbatore",
  },
  {
    icon: "💻",
    title: "Software & AI Projects",
    subtitle: "Python, ML, MERN, Java, Flutter",
    number: "85259 99022",
    raw: "+918525999022",
    call: "tel:+918525999022",
    whatsapp: "https://wa.me/918525999022",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    seo: "Software AI Projects Coimbatore",
  },
  {
    icon: "🔌",
    title: "Embedded & IoT Projects",
    subtitle: "Arduino, Raspberry Pi, ARM, FPGA",
    number: "85259 99032",
    raw: "+918525999032",
    call: "tel:+918525999032",
    whatsapp: "https://wa.me/918525999032",
    color: "#00695C",
    bg: "#E0F2F1",
    seo: "Embedded IoT Projects Coimbatore",
  },
  {
    icon: "📧",
    title: "Email Us",
    subtitle: "For detailed project queries",
    number: "codexproject2026@gmail.com",
    raw: "codexproject2026@gmail.com",
    call: "mailto:codexproject2026@gmail.com",
    whatsapp: null,
    color: "#E65100",
    bg: "#FFF3E0",
    seo: "Email CODEX PROJECT",
  },
];

const inquiryTypes = [
  { value: "software", label: "Software / AI Project", icon: "💻" },
  { value: "iot", label: "IoT / Embedded Project", icon: "🔌" },
  { value: "mechanical", label: "Mechanical Project", icon: "⚙️" },
  { value: "internship", label: "Internship Training", icon: "🎓" },
  { value: "general", label: "General Enquiry", icon: "💬" },
];

const faqs = [
  { q: "How to contact CODEX PROJECT Coimbatore?", a: "Call or WhatsApp 8525999002 for general enquiry, 8525999022 for Software/AI projects, 8525999032 for Embedded/IoT. Email: codexproject2026@gmail.com. Visit us at 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012." },
  { q: "Do you offer free project consultation?", a: "Yes! CODEX PROJECT offers free project consultation sessions. Call 8525999002 or WhatsApp to schedule — no charges for initial discussion at our Gandhipuram center." },
  { q: "What are CODEX PROJECT working hours?", a: "We are open Monday to Saturday, 9:00 AM – 8:00 PM. Visit us at 2nd Floor, Balaji Complex, Cross Cut Road, Gandhipuram, Coimbatore – 641012." },
  { q: "Which number for Software and AI projects?", a: "For Python, AI, Machine Learning, MERN Stack, Java, Flutter project enquiries — call or WhatsApp: 8525999022." },
  { q: "Which number for Embedded and IoT projects?", a: "For Arduino, Raspberry Pi, ARM, NodeMCU, FPGA embedded/IoT project enquiries — call or WhatsApp: 8525999032." },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Contact = () => {
  const sectionRefs = useRef([]);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", college: "", inquiryType: "software", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", college: "", inquiryType: "software", message: "" });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <div className="contact-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="contact-hero" ref={addToRefs} aria-labelledby="contact-h1">
        <div className="ch-bg">
          <div className="ch-grid"></div>
          <div className="ch-glow ch-glow-1"></div>
          <div className="ch-glow ch-glow-2"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <span className="ch-eyebrow">Contact Us</span>
              <h1 id="contact-h1" className="contact-title">
                Get In Touch With<br />
                <span className="ch-accent">CODEX PROJECT</span>
              </h1>
              <p className="contact-subtitle">
                Best Final Year Project Center in Coimbatore – Free Consultation Available
              </p>
              <p className="contact-description">
                Looking for the <strong>best final year project center in Coimbatore</strong>?
                Contact <strong>CODEX PROJECT</strong> at Gandhipuram for IEEE 2024-25 projects,
                internship training, and placement support. Call, WhatsApp, or visit us —
                free consultation for all engineering students.
              </p>

              {/* Quick contact chips */}
              <div className="ch-quick-chips">
                <a href="tel:+918525999002" className="ch-chip ch-chip-blue" aria-label="Call CODEX PROJECT">
                  📞 Call: 85259 99002
                </a>
                <a href="https://wa.me/918525999002" target="_blank" rel="noopener noreferrer" className="ch-chip ch-chip-green" aria-label="WhatsApp CODEX PROJECT">
                  💬 WhatsApp Us
                </a>
                <a href="mailto:codexproject2026@gmail.com" className="ch-chip ch-chip-orange" aria-label="Email CODEX PROJECT">
                  📧 Email Us
                </a>
              </div>

              <p className="ch-address">
                📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
                Cross Cut Road, Gandhipuram, Coimbatore – 641012
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT METHODS ═══════════════════════════════════════════════════ */}
      <section className="contact-methods-section" ref={addToRefs} aria-labelledby="methods-h2">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Contact Numbers</span>
            <h2 id="methods-h2" className="section-titles">
              Dedicated Lines for Every Domain – CODEX PROJECT Coimbatore
            </h2>
            <p className="section-subtitle">
              Separate contact numbers for Software/AI and Embedded/IoT projects —
              get expert guidance instantly
            </p>
          </div>

          <div className="row g-4">
            {contactMethods.map((m, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <article
                  className="cmethod-card"
                  style={{ "--accent": m.color, "--bg": m.bg, animationDelay: `${i * 0.1}s` }}
                  itemScope itemType="https://schema.org/ContactPoint"
                  aria-label={m.seo}
                >
                  <div className="cmethod-icon-wrap">
                    <span className="cmethod-icon">{m.icon}</span>
                  </div>
                  <h3 className="cmethod-title" itemProp="contactType">{m.title}</h3>
                  <p className="cmethod-sub">{m.subtitle}</p>
                  <p className="cmethod-number" itemProp="telephone">{m.number}</p>

                  <div className="cmethod-actions">
                    <a
                      href={m.call}
                      className="cmethod-btn cmethod-btn-primary"
                      aria-label={`${m.title} – ${m.number}`}
                    >
                      {m.icon === "📧" ? "Send Email" : "📞 Call Now"}
                    </a>
                    {m.whatsapp && (
                      <a
                        href={m.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cmethod-btn cmethod-btn-wa"
                        aria-label={`WhatsApp ${m.title}`}
                      >
                        💬 WhatsApp
                      </a>
                    )}
                  </div>
                  <div className="cmethod-glow"></div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORM + INFO ═══════════════════════════════════════════════════════ */}
      <section className="cform-section" ref={addToRefs} aria-labelledby="form-h2">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Left — Info */}
            <div className="col-lg-5">
              <div className="cinfo-block">
                <span className="section-eyebrow">Office Info</span>
                <h2 id="form-h2" className="section-title-left">
                  Visit CODEX PROJECT –<br />Gandhipuram, Coimbatore
                </h2>

                <div className="cinfo-list">
                  <div className="cinfo-item">
                    <span className="cinfo-icon">📍</span>
                    <div>
                      <strong>Address</strong>
                      <p>2nd Floor, Balaji Complex, 288, 2nd Street,<br />Opp. Anbu Mess, Cross Cut Road,<br />Gandhipuram, Coimbatore – 641012</p>
                    </div>
                  </div>
                  <div className="cinfo-item">
                    <span className="cinfo-icon">📞</span>
                    <div>
                      <strong>General Enquiry</strong>
                      <p><a href="tel:+918525999002">85259 99002</a></p>
                    </div>
                  </div>
                  <div className="cinfo-item">
                    <span className="cinfo-icon">💻</span>
                    <div>
                      <strong>Software &amp; AI Projects</strong>
                      <p><a href="tel:+918525999022">85259 99022</a></p>
                    </div>
                  </div>
                  <div className="cinfo-item">
                    <span className="cinfo-icon">🔌</span>
                    <div>
                      <strong>Embedded &amp; IoT Projects</strong>
                      <p><a href="tel:+918525999032">85259 99032</a></p>
                    </div>
                  </div>
                  <div className="cinfo-item">
                    <span className="cinfo-icon">📧</span>
                    <div>
                      <strong>Email</strong>
                      <p><a href="mailto:codexproject2026@gmail.com">codexproject2026@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="cinfo-item">
                    <span className="cinfo-icon">🌐</span>
                    <div>
                      <strong>Website</strong>
                      <p><a href="https://www.codexproject.in" target="_blank" rel="noopener noreferrer">www.codexproject.in</a></p>
                    </div>
                  </div>
                  <div className="cinfo-item">
                    <span className="cinfo-icon">🕘</span>
                    <div>
                      <strong>Working Hours</strong>
                      <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/918525999002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cinfo-wa-btn"
                  aria-label="WhatsApp CODEX PROJECT Coimbatore"
                >
                  <span>💬</span>
                  Chat on WhatsApp – 85259 99002
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="col-lg-7">
              <div className="cform-card">
                <div className="cform-header">
                  <h3 className="cform-title">Send Your Project Enquiry</h3>
                  <p className="cform-sub">
                    Fill the form — our team will call you within 2 hours (Mon–Sat)
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="cform-success">
                    <div className="csuccess-icon">✅</div>
                    <h4>Enquiry Sent Successfully!</h4>
                    <p>Our team will call you within 2 hours. For urgent queries, call <strong>85259 99002</strong>.</p>
                    <button onClick={() => setIsSubmitted(false)} className="cform-reset-btn">
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="cform" aria-label="CODEX PROJECT contact form">
                    <div className="cform-row">
                      <div className="cform-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                      </div>
                      <div className="cform-group">
                        <label htmlFor="phone">Mobile Number *</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your WhatsApp number" />
                      </div>
                    </div>

                    <div className="cform-row">
                      <div className="cform-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email (optional)" />
                      </div>
                      <div className="cform-group">
                        <label htmlFor="college">College Name</label>
                        <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} placeholder="Your college name" />
                      </div>
                    </div>

                    <div className="cform-group cform-group-full">
                      <label>Project Domain *</label>
                      <div className="cinquiry-grid">
                        {inquiryTypes.map((t) => (
                          <label key={t.value} className={`cinquiry-opt ${formData.inquiryType === t.value ? "cinquiry-active" : ""}`}>
                            <input type="radio" name="inquiryType" value={t.value} checked={formData.inquiryType === t.value} onChange={handleChange} />
                            <span>{t.icon} {t.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="cform-group cform-group-full">
                      <label htmlFor="message">Project Idea / Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Describe your project idea or ask any question..."></textarea>
                    </div>

                    <button type="submit" className={`cform-submit ${isSubmitting ? "cform-submitting" : ""}`} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><span className="cform-spinner"></span> Sending Enquiry...</>
                      ) : (
                        <> 🚀 Send Enquiry – Get Free Consultation</>
                      )}
                    </button>

                    <p className="cform-note">
                      Or call us directly: <a href="tel:+918525999002"><strong>85259 99002</strong></a> (General) &nbsp;·&nbsp;
                      <a href="tel:+918525999022"><strong>85259 99022</strong></a> (Software/AI) &nbsp;·&nbsp;
                      <a href="tel:+918525999032"><strong>85259 99032</strong></a> (Embedded/IoT)
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ GOOGLE MAP ════════════════════════════════════════════════════════ */}
      <section className="cmap-section" ref={addToRefs} aria-labelledby="map-h2">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-eyebrow">Find Us</span>
            <h2 id="map-h2" className="section-titles">
              CODEX PROJECT Location – Gandhipuram, Coimbatore
            </h2>
            <p className="section-subtitle">
              📍 2nd Floor, Balaji Complex, 288, 2nd Street, Opp. Anbu Mess,
              Cross Cut Road, Gandhipuram, Coimbatore – 641012
            </p>
          </div>

          <div className="cmap-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2650880412302!2d76.9686347!3d11.018726700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d56e5e67bd6d39%3A0xa04afb183b4afa48!2sCODEX%20PROJECT%20%E2%80%93%20Final%20Year%20Project%20Center!5e0!3m2!1sen!2sin!4v1775786518347!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CODEX PROJECT Final Year Project Center – 2nd Floor Balaji Complex Gandhipuram Coimbatore"
              aria-label="Google Maps showing CODEX PROJECT location in Gandhipuram Coimbatore"
            />
          </div>

          {/* Directions links */}
          <div className="cmap-actions">
            <a href="https://maps.app.goo.gl/edkzjFnQUKcKDnzP6" target="_blank" rel="noopener noreferrer" className="cmap-btn" aria-label="Get directions to CODEX PROJECT Coimbatore">
              📍 Get Directions on Google Maps
            </a>
            <a href="https://wa.me/918525999002?text=Hi%2C%20I%20need%20directions%20to%20your%20office" target="_blank" rel="noopener noreferrer" className="cmap-btn cmap-btn-wa" aria-label="WhatsApp for directions">
              💬 WhatsApp for Directions
            </a>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="cfaq-section" ref={addToRefs} aria-labelledby="cfaq-h2">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">FAQ</span>
            <h2 id="cfaq-h2" className="section-titles">
              Frequently Asked Questions – Contact &amp; Enquiry
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((f, i) => (
                <div key={i} className={`cfaq-item ${openFaq === i ? "cfaq-open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="cfaq-q">
                    <h3 className="cfaq-question">{f.q}</h3>
                    <span className="cfaq-toggle">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  <div className="cfaq-a"><p>{f.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SEO CONTENT BLOCK ═════════════════════════════════════════════════ */}
      <section className="cseo-block" aria-labelledby="cseo-h2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 id="cseo-h2" className="cseo-title">
                Contact CODEX PROJECT – Best Final Year Project Center in Coimbatore
              </h2>
              <p>
                Looking to <strong>contact the best final year project center in Coimbatore</strong>?
                Reach <strong>CODEX PROJECT</strong> at <strong>2nd Floor, Balaji Complex,
                Gandhipuram, Coimbatore</strong> via call, WhatsApp, or email. We offer
                free project consultation for all engineering students across Coimbatore —
                including those from Peelamedu, Saravanampatti, RS Puram, Singanallur,
                and Ukkadam.
              </p>
              <p>
                For <strong>Software, Python, AI, Machine Learning, MERN Stack, Java, and
                Flutter project enquiries</strong>, call <strong>85259 99022</strong>. For{" "}
                <strong>Embedded Systems, Arduino, Raspberry Pi, NodeMCU, and IoT project
                enquiries</strong>, call <strong>85259 99032</strong>. For all other general
                enquiries and <strong>Mechanical project</strong> queries, call{" "}
                <strong>85259 99002</strong> or email{" "}
                <strong>codexproject2026@gmail.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="contact-cta" ref={addToRefs} aria-labelledby="ccta-h2">
        <div className="ccta-bg"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 id="ccta-h2" className="cta-titles">
                Ready to Start Your Final Year Project?
              </h2>
              <p className="cta-description">
                Call or WhatsApp <strong>CODEX PROJECT</strong> now — free consultation
                available for all engineering students in Coimbatore. IEEE 2024-25 projects,
                internship certificate, documentation &amp; viva support.
              </p>
              <p className="ccta-address">
                📍 2nd Floor, Balaji Complex, Gandhipuram, Coimbatore – 641012
              </p>
              <div className="cta-buttons">
                <a href="tel:+918525999002" className="cta-btn cta-btn-primary" aria-label="Call CODEX PROJECT now">
                  📞 Call Now: 85259 99002
                </a>
                <a href="https://wa.me/918525999002" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-wa" aria-label="WhatsApp CODEX PROJECT">
                  💬 WhatsApp Us
                </a>
                <a href="https://g.page/r/CUj6SjsY-0qgEAE/review" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-outline" aria-label="Review on Google">
                  ⭐ Review on Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;