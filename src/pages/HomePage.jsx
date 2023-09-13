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
        <Header />
        <LoginButton />
        <SignupButton />
        <Search />
      </div>
    </div>
  );
}

export default HomePage;
