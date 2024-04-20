import React from "react";
import Header from "../components/Header";
import "../styles/common.css";
import About from "../components/About";

function HomePage() {
  return (
    <div className="main-container">
      <div className="homepage-outer-wrapper">
        <div className="homepage-inner-wrapper">
          <Header />
        </div>
      </div>
      <About />
    </div>
  );
}

export default HomePage;
