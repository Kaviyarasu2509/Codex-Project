import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import Career from "./component/Career";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import MechanicalProjects from "./pages/MechanicalProjects";
import IoTProjects from "./pages/IoTProjects";
import EmbeddedProjects from "./pages/EmbeddedProjects";
import SoftwareProjects from "./pages/SoftwareProjects";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import WhatAppIcon from "./component/WhatAppIcon";
import ScrollToTop from "./ScrollToTop";
 


function App() {
  return (
    <>
      <Navbar />
          <WhatAppIcon />
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mechanical-projects" element={<MechanicalProjects />} />
        <Route path="/iot-projects" element={<IoTProjects />} />
        <Route path="/embedded-projects" element={<EmbeddedProjects />} />
        <Route path="/software-projects" element={<SoftwareProjects />} />
<Route path="/projects" element={<Projects />} />
<Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
