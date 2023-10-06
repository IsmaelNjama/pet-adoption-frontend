import React from "react";
import Header from "../components/Header";
import SearchButton from "../components/buttons/SearchButton";
import MyPetsPage from "./MyPetsPage";
import { Link } from "react-router-dom";
import ProfileSettingsButton from "../components/buttons/ProfileSettingsButton";

function LoggedInPage() {
  return (
    <div>
      <div>
        <SearchButton />
        <ProfileSettingsButton />
      </div>
      <div className="logged-in-page-wrapper">
        <div className="user-profile-panel">
          <Header />
          <Link className="my-pets-link" to="/MyPetsPage">
            <h2>My Pets</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoggedInPage;
