import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { GET, PUT, fosterPetsPOST, petsUpdatePUT } from "../../utils/api";
import PetDetailsContext from "../../context/PetDetailsContext";

function FosterButton() {
  const { petDetails } = useContext(PetDetailsContext);
  const [petsFostered, setPetsFostered] = useState([]);

  useEffect(() => {
    fetchFosteredPet();
  }, []);

  const userId = `${localStorage.getItem("USER_ID")}`;
  const fetchFosteredPet = async () => {
    const userWithFosteredPets = await GET(`/users/${userId}`);
    setPetsFostered(userWithFosteredPets?.pets || []);
  };

  const handleFosterPets = async () => {
    const body = { adoptionStatus: petDetails.adoptionStatus };

    try {
      const pet = await fosterPetsPOST(`/pets/foster/${petDetails._id}`, body);
      const pets = { pets: [...petsFostered, pet] };
      const updateUserPets = await PUT(`/users/${userId}`, pets);

      const updatedPet = { adoptionStatus: "fostered" };

      const newFoster = await petsUpdatePUT(
        `/pets/${petDetails._id}`,
        updatedPet
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handleFosterPets} variant="outline-primary">
        Click to foster
      </Button>
    </div>
  );
}

export default FosterButton;
