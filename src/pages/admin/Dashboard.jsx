import React from "react";
import AllUsers from "../../components/AllUsers";
import AllPets from "../../components/AllPets";
import LogOut from "../../components/LogOut";

function Dashboard() {
  return (
    <div>
      <div className="dashboard-sidebar">
        <div>Admin</div>
        <div>
          <AllUsers />
        </div>
        <div>
          <AllPets />
        </div>
        <div>
          <LogOut />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
