import React, { useContext, useState, useEffect } from "react";
import PetCardList from "../components/PetCardList";

import { GET } from "../utils/api";

function MyPetsPage() {
  const [checked, setChecked] = useState(false);
  const [pets, setPets] = useState([]);

  const userId = `${localStorage.getItem("USER_ID")}`;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const userWithPets = await GET(`/users/${userId}`);

      setPets(userWithPets.pets);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="pet-card-list-container">
      {pets.length > 0 ? (
        <PetCardList />
      ) : (
        <h2 className="no-pets-heading text-danger">
          You currently do not owned Pets
        </h2>
      )}
    </div>
  );
}

export default MyPetsPage;
