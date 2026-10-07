export const galleryCategories = [
  { id: "software", label: "Software", children: [
    { id: "ai-ml", label: "AI & Machine Learning" },
    { id: "deep-learning", label: "Deep Learning" },
    { id: "php", label: "PHP" },
    { id: "react", label: "React" },
    { id: "web-development", label: "Web Development" },
    { id: "mobile-apps", label: "Mobile Apps" },
  ] },
  { id: "hardware", label: "Hardware", children: [
    { id: "embedded", label: "Embedded Systems" },
    { id: "iot", label: "IoT" },
    { id: "robotics", label: "Robotics & Automation" },
  ] },
  { id: "mechanical", label: "Mechanical", children: [
    { id: "fabrication", label: "Fabrication" },
    { id: "design-analysis", label: "Design & Analysis" },
  ] },
];

// One project folder produces one card; loose photos remain individual cards.
const photos = require.context("../assets/project_images", true, /\.(png|jpe?g|webp|avif)$/i);
const projects = new Map();
const readableTitle = (name) => name.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
photos.keys().sort((a, b) => a.localeCompare(b, "en", { numeric: true })).forEach((path) => {
  const parts = path.split("/");
  const [, categoryId, subcategoryId] = parts;
  const category = galleryCategories.find((item) => item.id === categoryId);
  const subcategory = category?.children.find((item) => item.id === subcategoryId);
  if (!category || !subcategory) return;
  const grouped = parts.length > 4;
  const id = grouped ? parts.slice(0, 4).join("/") : path;
  const name = grouped ? parts[3] : parts[3].replace(/\.[^.]+$/, "");
  const imported = photos(path);
  if (!projects.has(id)) projects.set(id, {
    id, title: readableTitle(name), photos: [], category: categoryId,
    subcategory: subcategoryId, categoryLabel: category.label, subcategoryLabel: subcategory.label,
  });
  projects.get(id).photos.push({ id: path, src: imported.default || imported });
});
export const galleryProjects = [...projects.values()];
