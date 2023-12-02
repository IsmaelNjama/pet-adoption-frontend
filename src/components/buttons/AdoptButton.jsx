import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PetDetailsContext from "../../context/PetDetailsContext";
import { adoptPetsPOST } from "../../utils/api";
import AdoptedPetsContext from "../../context/AdoptedPetsContext";

function AdoptButton() {
  const { petDetails } = useContext(PetDetailsContext);
  const { adoptedPets, setAdoptedPets } = useContext(AdoptedPetsContext);
  console.log(
    "🚀 ~ file: AdoptButton.jsx:9 ~ AdoptButton ~ adoptedPets:",
    adoptedPets
  );

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem("storedPets"));
    setAdoptedPets(storedPets);
  }, []);

  const handleAdoptPets = async () => {
    const body = { adoptionStatus: petDetails.adoptionStatus };

    console.log(
      "🚀 ~ file: AdoptButton.jsx:23 ~ handleAdoptPets ~ body:",
      body
    );

    let pets = [...adoptedPets];

    try {
      const pet = await adoptPetsPOST(`pets/adopt/${petDetails._id}`, body);

      console.log(
        "🚀 ~ file: AdoptButton.jsx:33 ~ handleAdoptPets ~ pet:",
        pet
      );
      pets.push(pet);
      setAdoptedPets(pets);
      localStorage.setItem("storedPets", JSON.stringify(adoptedPets));
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
