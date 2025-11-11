import "./App.css";
import Home from "./component/Home";
// import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Roles from "./component/Roles";
import Resume from "./component/Resume";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Roles />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
