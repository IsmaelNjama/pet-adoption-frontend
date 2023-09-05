import React from "react";
import Header from "../components/Header";
import SearchButton from "../components/buttons/SearchButton";
import MyPetsPage from "./MyPetsPage";
import { Link } from "react-router-dom";
import ProfileSettingsButton from "../components/buttons/ProfileSettingsButton";

function LoggedInPage() {
  return (
    <div>
      <Header />
      <SearchButton />
      <ProfileSettingsButton />
      <Link to="/MyPetsPage">My Pets</Link>
    </div>
  );
}

export default LoggedInPage;
