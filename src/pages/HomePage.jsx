import React from "react";
import Header from "../components/Header";
import LoginButton from "../components/buttons/LoginButton";
import SignupButton from "../components/buttons/SignupButton";
import "../styles/common.css";
import LoginModal from "../components/modals/LoginModal";
import Search from "../components/Search";

function HomePage() {
  return (
    <div className="homepage-outer-wrapper">
      <div className="homepage-inner-wrapper">
        <div className="header-search-wrapper">
          <Header />
          <div>
            <Search />
          </div>
        </div>
        <div className="login-signup-wrapper">
          <span>Have an account already??</span>
          <LoginButton />
          <span>OR</span>
          <SignupButton />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
