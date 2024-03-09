import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PetDetailsContext from "../../context/PetDetailsContext";
import { GET, PUT, petsUpdatePUT } from "../../utils/api";

function PetReturnButton() {
  const { petDetails } = useContext(PetDetailsContext);
  const [getOwnedPets, setGetOwnedPets] = useState([]);
  const [returnedMessage, setReturnedMessage] = useState(false);
  const userId = `${localStorage.getItem("USER_ID")}`;

  useEffect(() => {
    ownedPet();
  }, []);

  const ownedPet = async () => {
    try {
      const userWithOwnedPets = await GET(`/users/${userId}`);

      setGetOwnedPets(userWithOwnedPets?.pets || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReturnPets = async () => {
    try {
      const petToReturn = getOwnedPets.findIndex(
        (pet) => pet._id === petDetails._id
      );

      if (petToReturn !== -1) {
        const updateOwnedPets = [...getOwnedPets];

        updateOwnedPets.splice(petToReturn, 1);
        setGetOwnedPets(updateOwnedPets);

        const pets = { pets: [...updateOwnedPets] };

        const updateUserPets = await PUT(`/users/${userId}`, pets);

        const updatedPet = { adoptionStatus: "available" };

        const newAdd = await petsUpdatePUT(
          `/pets/${petDetails._id}`,
          updatedPet
        );
      } else {
        setReturnedMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button onClick={handleReturnPets} variant="outline-primary">
        Want to Return me Back
      </Button>
      {returnedMessage && (
        <h2 className="text-warning">You already returned this pet</h2>
      )}
    </div>
  );
}

export default PetReturnButton;
