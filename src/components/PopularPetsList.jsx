import React from "react";
import { getThreePets } from "../utils/api";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/common.css";

function PopularPetsList() {
  const [popularPets, setPopularPets] = useState([]);
  useEffect(() => {
    fetchThreePets();
  }, []);

  const fetchThreePets = async () => {
    const resp = await getThreePets("/pets/firstThreePets");
    console.log("🚀 ~ fetchThreePets ~ resp:", resp);
    setPopularPets(resp);
  };

  return (
    <div className="pet-card-list-wrapper">
      {popularPets.map((pet) => (
        <Card className="pet-card" key={pet._id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={pet.imageUrl}
            style={{ width: "17rem", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{pet.name}</Card.Title>

            <Button variant="primary">See more details...</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PopularPetsList;
