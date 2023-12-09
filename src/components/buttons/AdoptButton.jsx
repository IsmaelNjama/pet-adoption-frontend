import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PetDetailsContext from "../../context/PetDetailsContext";
import { GET, PUT, adoptPetsPOST, petsUpdatePUT } from "../../utils/api";
import AdoptedPetsContext from "../../context/AdoptedPetsContext";
import OwnedPetsContext from "../../context/OwnedPetsContext";

function AdoptButton() {
  const { petDetails } = useContext(PetDetailsContext);
  const { adoptedPets, setAdoptedPets } = useContext(AdoptedPetsContext);
  const [petsAdopted, setPetsAdopted] = useState([]);
  const { ownedPetsList, setOwnedPetsList } = useContext(OwnedPetsContext);

  const userId = `${localStorage.getItem("USER_ID")}`;

  useEffect(() => {
    fetchAdoptedPet();
  }, []);

  const fetchAdoptedPet = async () => {
    const userWithAdoptPets = await GET(`/users/${userId}`);

    setPetsAdopted(userWithAdoptPets?.pets || []);
  };

  const handleAdoptPets = async () => {
    const body = { adoptionStatus: petDetails.adoptionStatus };

    try {
      const pet = await adoptPetsPOST(`pets/adopt/${petDetails._id}`, body);

      const updatedPetsAdopted = [...petsAdopted, pet];
      setPetsAdopted(updatedPetsAdopted);

      const pets = { pets: [...updatedPetsAdopted] };

      const updateUserPets = await PUT(`/users/${userId}`, pets);

      const updatedPet = { adoptionStatus: "adopted" };

      const newAdd = await petsUpdatePUT(`/pets/${petDetails._id}`, updatedPet);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button onClick={handleAdoptPets} variant="outline-primary">
        Click to Adopt
      </Button>
    </div>
  );
}

export default AdoptButton;
