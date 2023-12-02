import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import PetDetailsContext from "../../context/PetDetailsContext";
import { adoptPetsPOST } from "../../utils/api";

function AdoptButton() {
  const { petDetails } = useContext(PetDetailsContext);
  const [adoptedPets, setAdoptedPets] = useState([{}]);
  console.log(
    "🚀 ~ file: AdoptButton.jsx:8 ~ AdoptButton ~ adoptedPets:",
    adoptedPets
  );
  console.log("PID", petDetails);
  const handleAdoptPets = async () => {
    const body = { adoptionStatus: petDetails.adoptionStatus };

    console.log(
      "🚀 ~ file: AdoptButton.jsx:17 ~ handleAdoptPets ~ body:",
      body
    );
    try {
      const pet = await adoptPetsPOST(`pets/adopt/${petDetails._id}`, body);
      console.log(
        "🚀 ~ file: AdoptButton.jsx:17 ~ handleAdoptPets ~ pet:",
        pet
      );
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
