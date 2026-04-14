import React, { useState, useEffect } from "react";
import "./WhatAppIcon.css";
import whatAppMain from "../assets/png/whatapp.png";
import whatApp from "../assets/png/whatsapp_png.png";
import call from "../assets/png/call_png.png";
import location from "../assets/png/location.png";
import package_ic from "../assets/png/package_png.png";
import blog from "../assets/png/blog.png";
import { Link } from "react-router-dom";

const WhatAppIcon = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [visible, setVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const mobileItems = [
    {
      key: "whatsapp",
      type: "a",
      href: "https://wa.me/918525999002",
      target: "_blank",
      img: whatApp,
      alt: "WhatsApp",
      label: "WhatsApp",
      color: "#25D366",
    },
    {
      key: "package",
      type: "link",
      to: "/projects",
      img: package_ic,
      alt: "Projects",
      label: "Projects",
      color: "#1565C0",
    },
    {
      key: "call",
      type: "a",
      href: "tel:+918525999002",
      img: call,
      alt: "Call",
      label: "Call Now",
      color: "#00eeff",
      isCenter: true,
    },
    {
      key: "blog",
      type: "link",
      to: "/blog",
      img: blog,
      alt: "Blog",
      label: "Blog",
      color: "#6A1B9A",
    },
    {
      key: "location",
      type: "a",
      href: "https://maps.app.goo.gl/edkzjFnQUKcKDnzP6",
      target: "_blank",
      img: location,
      alt: "Location",
      label: "Location",
      color: "#E53935",
    },
  ];

  return (
    <>
      {/* ══ DESKTOP — Floating WhatsApp ══════════════════════════ */}
      <a
        href="https://wa.me/918525999002"
        target="_blank"
        rel="noopener noreferrer"
        className={`wai-float ${visible ? "wai-float-in" : ""}`}
        aria-label="Chat on WhatsApp – CODEX PROJECT"
      >
        <div className="wai-float-ring"></div>
        <div className="wai-float-inner">
          <img src={whatAppMain} alt="WhatsApp CODEX PROJECT" className="wai-float-img" />
        </div>
        <span className="wai-float-tooltip">
          💬 Chat on WhatsApp
        </span>
      </a>

      {/* ══ MOBILE — Bottom Bar ══════════════════════════════════ */}
      <nav className="wai-mobile-bar" aria-label="Quick actions">
        <ul className="wai-bar-list">
          {mobileItems.map((item) => {
            const isActive = activeTab === item.key;
            const content = (
              <div
                className={`wai-bar-item ${item.isCenter ? "wai-bar-center" : ""} ${isActive ? "wai-bar-active" : ""}`}
                style={{ "--ic": item.color }}
                onClick={() => setActiveTab(item.key)}
              >
                <div className={`wai-bar-icon-wrap ${item.isCenter ? "wai-bar-icon-center" : ""}`}>
                  {item.isCenter && <div className="wai-center-ring"></div>}
                  <img src={item.img} alt={item.alt} className="wai-bar-img" />
                </div>
                {!item.isCenter && (
                  <span className="wai-bar-label">{item.label}</span>
                )}
              </div>
            );

            return (
              <li key={item.key} className="wai-bar-li">
                {item.type === "link" ? (
                  <Link to={item.to}>{content}</Link>
                ) : (
                  <a href={item.href} target={item.target} rel={item.target ? "noopener noreferrer" : undefined}>
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Safe area fill */}
        <div className="wai-bar-safe"></div>
      </nav>
    </>
  );
};

export default WhatAppIcon;