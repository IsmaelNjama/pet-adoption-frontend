import React, { useEffect, useState } from "react";
import { petsGET } from "../utils/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AllPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets();
  }, []);

  const getAllPets = async () => {
    try {
      const pets = await petsGET("/pets");
      console.log("🚀 ~ file: AllPets.jsx:10 ~ getAllPets ~ pets:", pets);

      setPets(pets);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditPet = () => {
    alert("edit");
  };
  return (
    <div>
      <h2>All Pets</h2>
      <div className="dashboard-card-list-wrapper">
        {pets.map((pets) => (
          <Card key={pets._id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>Type: {pets.type}</Card.Text>
              <Card.Text>Name: {pets.name}</Card.Text>
              <Card.Text>Adoption Status: {pets.adoption_status}</Card.Text>
              <Card.Text>Breed: {pets.breed}</Card.Text>
              <Card.Text>Color: {pets.color}</Card.Text>
              <Card.Text>Height: {pets.height}</Card.Text>
              <Card.Text>
                Dietary restrictions: {pets.dietary_restrictions}
              </Card.Text>
              <Card.Text>Weight: {pets.weight}</Card.Text>
              <Card.Text>Hypoallergenic: {pets.hypoallergenic}</Card.Text>
              <Button variant="primary" onClick={handleEditPet}>
                Edit Pet
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllPets;
