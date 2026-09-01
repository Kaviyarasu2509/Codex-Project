import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.codexproject.in";
const SOCIAL_IMAGE = `${SITE_URL}/logo512.png`;

const pages = {
  "/": ["Final Year Project Center in Coimbatore | CODEX PROJECT", "Final year project center in Gandhipuram, Coimbatore for AI, ML, IoT, Embedded, Mechanical and Software projects with documentation, internship certificate and viva support."],
  "/about": ["About CODEX PROJECT | Project Center in Coimbatore", "Learn about CODEX PROJECT, our project development team and final year project support for engineering, MCA, BSc and diploma students in Coimbatore."],
  "/career": ["Careers at CODEX PROJECT Coimbatore | Join Our Team", "Explore software, embedded, IoT, mechanical and AI career opportunities at CODEX PROJECT in Coimbatore and join our project development team."],
  "/contact": ["Contact CODEX PROJECT | Project Center Coimbatore", "Contact CODEX PROJECT in Gandhipuram, Coimbatore for a free final year project consultation in Software, AI, IoT, Embedded and Mechanical domains."],
  "/faq": ["Final Year Project FAQ | CODEX PROJECT Coimbatore", "Answers about final year project cost, IEEE topics, delivery, documentation, internship certificates and viva support at CODEX PROJECT Coimbatore."],
  "/iot-project-center-coimbatore": ["IoT Project Center in Coimbatore | CODEX PROJECT", "IoT final year projects in Coimbatore using Arduino, ESP32, NodeMCU, Raspberry Pi, Firebase and AWS IoT with hardware, documentation and viva support."],
  "/embedded-project-center-coimbatore": ["Embedded Project Center in Coimbatore | CODEX PROJECT", "Embedded final year projects in Coimbatore using 8051, ARM, PIC, Arduino, STM32, FPGA and VLSI with hardware, simulation and documentation."],
  "/mechanical-project-center-coimbatore": ["Mechanical Project Center in Coimbatore | CODEX PROJECT", "Mechanical final year projects in Coimbatore covering fabrication, CAD, CAM, SolidWorks, robotics, automobile and automation with working models."],
  "/software-project-center-coimbatore": ["Software Project Center in Coimbatore | CODEX PROJECT", "Software final year projects in Coimbatore using Python, AI, machine learning, MERN, Java, .NET, Flutter and Android with source code and documentation."],
  "/final-year-projects-coimbatore": ["Final Year Project Titles in Coimbatore | CODEX PROJECT", "Explore final year project titles for CSE, IT, ECE, EEE, MCA, BSc, diploma and mechanical students across AI, IoT, Embedded and Software domains."],
  "/blog/project-center-coimbatore-guide": ["Final Year Project Ideas & Guides | CODEX PROJECT", "Read final year project ideas, IEEE topic guides and practical advice for Software, AI, IoT, Embedded, ECE and Mechanical students in Coimbatore."],
};

export default function SeoManager() {
  const { pathname } = useLocation();
  const isBlogArticle = pathname.startsWith("/blog/");
  const pageOwnsSeo = [
    "/iot-project-center-coimbatore",
    "/embedded-project-center-coimbatore",
    "/mechanical-project-center-coimbatore",
    "/software-project-center-coimbatore",
  ].includes(pathname);
  const page = pages[pathname] || (isBlogArticle ? pages["/blog/project-center-coimbatore-guide"] : null);
  const [title, description] = page || pages["/"];
  const canonicalPath = pages[pathname] ? pathname : "/blog/project-center-coimbatore-guide";
  const canonical = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

  if (pageOwnsSeo || !page) return null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CODEX PROJECT" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="CODEX PROJECT – Final Year Project Center in Coimbatore" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
    </Helmet>
  );
}
