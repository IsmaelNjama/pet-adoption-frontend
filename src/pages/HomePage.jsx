import React from "react";
import Header from "../components/Header";
import "../styles/common.css";

function HomePage() {
  return (
    <div className="homepage-outer-wrapper">
      <div className="homepage-inner-wrapper">
        <div className="header-search-wrapper">
          <Header />
        </div>
        <div className="login-signup-wrapper"></div>
      </div>
    </div>
  );
}

export default HomePage;
