import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import Projects from "./component/Projects";
import Career from "./component/Career";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
