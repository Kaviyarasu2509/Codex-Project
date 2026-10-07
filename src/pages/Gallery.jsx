import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { galleryCategories, galleryProjects } from "./galleryImages";
import "./Gallery.css";

function ProjectPreview({ project }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(!document.hidden);
  const touchStart = useRef(null);
  const count = project.photos.length;
  const autoplay = playing && !hovered && !reducedMotion && visible && count > 1;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    const visibility = () => setVisible(!document.hidden);
    update();
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % count), 4000);
    return () => window.clearInterval(timer);
  }, [autoplay, count]);

  const move = (step) => { setPlaying(false); setIndex((value) => (value + step + count) % count); };
  return <>
    <div className="cpg-slider" role="region" aria-roledescription="carousel" aria-label={`${project.title} photos`}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setPlaying(false)}
      onKeyDown={(event) => {
        if (count < 2) return;
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
      <div className="cpg-slide-stage"
        onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchCancel={() => { touchStart.current = null; }}
        onTouchEnd={(event) => {
          if (!touchStart.current) return;
          const dx = event.changedTouches[0].clientX - touchStart.current.x;
          const dy = event.changedTouches[0].clientY - touchStart.current.y;
          touchStart.current = null;
          if (count > 1 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}>
        <img key={index} className="cpg-preview cpg-slide-image" src={project.photos[index].src}
          alt={`${project.title}, ${index + 1} of ${count}`} />
      </div>
      {count > 1 && <>
        <button type="button" className="cpg-slide-arrow cpg-slide-prev" aria-label="Previous project photo" onClick={() => move(-1)}>‹</button>
        <button type="button" className="cpg-slide-arrow cpg-slide-next" aria-label="Next project photo" onClick={() => move(1)}>›</button>
        <div className="cpg-slide-controls">
          <p className="cpg-slide-count" aria-live={autoplay ? "off" : "polite"}>{index + 1} / {count}</p>
          <div className="cpg-dots" role="group" aria-label="Choose a project photo">
            {project.photos.map((photo, position) => <button key={photo.id} type="button"
              aria-label={`Show photo ${position + 1}`} aria-pressed={position === index}
              onClick={() => { setPlaying(false); setIndex(position); }} />)}
          </div>
          {!reducedMotion && <button className="cpg-play" type="button" onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}>{playing ? "Pause" : "Play"}</button>}
        </div>
      </>}
    </div>
    <div className="cpg-preview-caption"><p>{project.categoryLabel} / {project.subcategoryLabel}</p>
      <h2 id="cpg-preview-title">{project.title}</h2>
      <a className="cpg-action" href={`https://wa.me/918525999002?text=${encodeURIComponent(`Hi CODEX PROJECT, I would like to enquire about ${project.title}.`)}`} target="_blank" rel="noopener noreferrer">Enquire about this project ↗</a>
    </div>
  </>;
}

export default function Gallery() {
  const [category, setCategory] = useState("all");
  const [subcategory, setSubcategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const current = galleryCategories.find((item) => item.id === category);
  const images = galleryProjects.filter((item) =>
    (category === "all" || item.category === category) &&
    (subcategory === "all" || item.subcategory === subcategory)
  );

  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <main className="cp-gallery">
      <div className="cpg-container">
        <header className="cpg-header">
          <p className="cpg-eyebrow">CODEX PROJECT / GALLERY</p>
          <h1>Explore our project gallery</h1>
          <p>Discover software applications, working hardware models and mechanical builds. Choose a domain to explore project photos.</p>
        </header>
        <section aria-label="Project gallery">
          <div className="cpg-filters" role="group" aria-label="Project domains">
            {[{ id: "all", label: "All Projects" }, ...galleryCategories].map((item) => (
              <button key={item.id} type="button" aria-pressed={category === item.id}
                onClick={() => { setCategory(item.id); setSubcategory("all"); }}>
                {item.label}<span>{item.id === "all" ? galleryProjects.length : galleryProjects.filter((image) => image.category === item.id).length}</span>
              </button>
            ))}
          </div>
          {current && <div className="cpg-subfilters" role="group" aria-label={`${current.label} project types`}>
            {[{ id: "all", label: `All ${current.label}` }, ...current.children].map((item) => (
              <button key={item.id} type="button" aria-pressed={subcategory === item.id}
                onClick={() => setSubcategory(item.id)}>{item.label}</button>
            ))}
          </div>}
          <p className="cpg-results" role="status">{images.length} {images.length === 1 ? "project" : "projects"}{current ? ` in ${current.label}` : " across all domains"}</p>
          {images.length ? <div className="cpg-grid">
            {images.map((image) => <button className="cpg-card" type="button" key={image.id}
              onClick={() => setSelected(image)} aria-label={`View ${image.title}`}>
              <div className="cpg-photo"><img src={image.photos[0].src} alt={image.title} loading="lazy" decoding="async" />
                <span className="cpg-expand" aria-hidden="true">{image.photos.length} {image.photos.length === 1 ? "photo" : "photos"} ↗</span></div>
              <div className="cpg-caption"><p>{image.categoryLabel} / {image.subcategoryLabel}</p><h2>{image.title}</h2></div>
            </button>)}
          </div> : <div className="cpg-empty">
            <i className="fa-regular fa-images" aria-hidden="true" />
            <h2>Project photos coming soon</h2>
            <p>{current ? `${current.label} project photos will appear here as our gallery grows.` : "We are preparing photos of our software, hardware and mechanical projects."}</p>
            <Link to="/contact" className="cpg-action">Ask about a project →</Link>
          </div>}
        </section>
        <aside className="cpg-enquiry"><div><h2>Have a project in mind?</h2><p>Talk to our team about project guidance and practical training.</p></div>
          <a className="cpg-action" href="https://wa.me/918525999002?text=Hi%20CODEX%20PROJECT%2C%20I%20would%20like%20project%20guidance." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a>
        </aside>
      </div>
      <dialog className="cpg-dialog" ref={dialog} aria-labelledby="cpg-preview-title"
        onCancel={() => setSelected(null)} onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        {selected && <><button className="cpg-close" type="button" autoFocus onClick={() => setSelected(null)} aria-label="Close photo preview">×</button>
          <ProjectPreview key={selected.id} project={selected} /></>}
      </dialog>
    </main>
  );
}
