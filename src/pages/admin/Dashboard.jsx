import React, { useContext } from "react";
import AllUsers from "../../components/AllUsers";
import AllPets from "../../components/AllPets";
import LogOut from "../../components/LogOut";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import ShowAllUsersContext from "../../context/ShowAllUsersContext";

function Dashboard() {
  const { showAllUsers, setShowAllUsers } = useContext(ShowAllUsersContext);
  const navigate = useNavigate();
  const handleGetUsersList = () => {
    navigate("/AllUsers");
    setShowAllUsers(true);
  };
  return (
    <div className="dashboard-wrapper">
      <div className="logout-wrapper">
        <div className="title">Pet Adoption Hub</div>
        <LogOut />
      </div>
      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <div className="admin-wrapper">
            <div className="admin-title">Admin</div>
          </div>
          <div className="all-users-wrapper">
            <Button variant="primary" onClick={handleGetUsersList}>
              All Users
            </Button>
          </div>
          <div className="all-pets-wrapper">
            <AllPets />
          </div>
        </div>
        <div className="users-list">
          <AllUsers />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
