import React, { useContext, useState } from "react";
import { GET } from "../utils/api";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ShowAllUsersContext from "../context/ShowAllUsersContext";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const { showAllUsers, setShowAllUsers } = useContext(ShowAllUsersContext);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    try {
      const users = await GET("/users");
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  // getUsersList();
  const handleGetUserDetails = () => {
    alert("clicked");
  };

  return (
    <div>
      <h2 className="title-section">All Users</h2>
      <div className="dashboard-card-list-wrapper">
        {users.map((users) => (
          <Card key={users._id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                Full name: {users.firstname} {users.lastname}
              </Card.Title>
              <Card.Text>Phonenumber: {users.phonenumber}</Card.Text>
              <Card.Text>Email: {users.email}</Card.Text>
              <Button variant="primary" onClick={handleGetUserDetails}>
                More details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllUsers;
