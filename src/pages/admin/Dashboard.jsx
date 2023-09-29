import React from "react";
import AddPet from "./AddPet";
import AllUsers from "../../components/AllUsers";
import AllPets from "../../components/AllPets";

function Dashboard() {
  return (
    <div>
      <AllUsers />
      <AllPets />
    </div>
  );
}

export default Dashboard;
