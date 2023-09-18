import React from "react";
import Header from "../components/Header";
import SearchButton from "../components/buttons/SearchButton";
import MyPetsPage from "./MyPetsPage";
import { Link } from "react-router-dom";
import ProfileSettingsButton from "../components/buttons/ProfileSettingsButton";

function LoggedInPage() {
  return (
    <div>
      <div className="user-profile-panel">
        <Link className="my-pets-link" to="/MyPetsPage">
          <h2>My Pets</h2>
        </Link>
        <Header />
        <SearchButton />
        <ProfileSettingsButton />
      </div>
    </div>
  );
}

export default LoggedInPage;
