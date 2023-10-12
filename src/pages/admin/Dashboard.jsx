import React from "react";
import AllUsers from "../../components/AllUsers";
import AllPets from "../../components/AllPets";
import LogOut from "../../components/LogOut";

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="logout-wrapper">
        <div className="title">Pet Adoption Hub</div>
        <LogOut />
      </div>
      <div className="dashboard-sidebar">
        <div className="admin-wrapper">
          <div className="admin-title">Admin</div>
        </div>
        <div className="all-users-wrapper">
          <AllUsers />
        </div>
        <div className="all-pets-wrapper">
          <AllPets />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
