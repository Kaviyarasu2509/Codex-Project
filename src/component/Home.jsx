// Home.js
import React from "react";
import GridScan from "./GridScan";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container container-fluid">
      {/* GridScan Background Animation */}
      <div className="gridscan-background">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          noiseIntensity={0.01}
          scanGlow={0.5}
          scanSoftness={2}
          scanPhaseTaper={0.9}
          scanDuration={2.0}
          scanDelay={2.0}
        />
      </div>
      
      {/* Content */}
      <div className="content-overlay">
        <div className="row align-items-center justify-content-center">
          {/* Center Section - Text */}
          <div className="col-lg-12 text-center title px-5">
            <h1 className="display-3 fw-bold">
              CODEX <span className="highlight">PROJECT</span>
            </h1>
            <h2 className="text-animate">FINAL YEAR PROJECTS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;