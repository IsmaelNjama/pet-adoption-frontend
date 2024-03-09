import React, { useContext, useEffect, useState } from "react";
import OwnedPetsContext from "../context/OwnedPetsContext";
import PetReturnButton from "../components/buttons/PetReturnButton";
import PetDetailsContext from "../context/PetDetailsContext";
import { GET } from "../utils/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function OwnedPetPage() {
  const { ownedPetsList } = useContext(OwnedPetsContext);
  const { petDetails } = useContext(PetDetailsContext);
  const [ownedPet, setOwnedPet] = useState({});

  useEffect(() => {
    getOwnedPetDetails();
  }, []);

  const getOwnedPetDetails = async () => {
    const pet = await GET(`/pets/${petDetails._id}`);

    setOwnedPet(pet);
  };

  return (
    <div className="owned-pet-wrapper">
      <Card>
        <Card.Img
          variant="top"
          src={ownedPet.imageUrl}
          style={{ width: "18rem", height: "200px" }}
        />
        <Card.Header>Hi, my name is {ownedPet.name}</Card.Header>
        <Card.Body>
          <Card.Title>
            I am currently being {ownedPet.adoptionStatus}
          </Card.Title>
          <Card.Text>{ownedPet.bio}</Card.Text>
        </Card.Body>
        <Card.Header>
          {" "}
          <h2>Additional details</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>Type: {ownedPet.type}</Card.Text>
          <Card.Text>Color: {ownedPet.color}</Card.Text>
          <Card.Text>Height: {ownedPet.height}</Card.Text>
          <Card.Text>Weight: {ownedPet.weight}</Card.Text>
          <Card.Text>Hypoallergenic: {ownedPet.hypoallergenic}</Card.Text>
          <Card.Text>
            DietaryRestrictions: {ownedPet.dietaryRestrictions}
          </Card.Text>
          <div className="d-flex gap-2">
            <PetReturnButton />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OwnedPetPage;
