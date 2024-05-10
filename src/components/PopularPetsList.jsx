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
    <div className="popular-pets-wrapper">
      <h2 className="text-center">Top Searched Pets </h2>
      <p>
        Whilst you can search for specific pets, we thought you'd like to try
        these popular pets{" "}
      </p>
      <div className="popular-pet-card-list-wrapper">
        {popularPets.map((pet) => (
          <Card className="pet-card" key={pet._id}>
            <Card.Img
              variant="top"
              src={pet.imageUrl}
              style={{ width: "17rem", height: "200px" }}
            />
            <Card.Body className="card-body">
              <Card.Title>{pet.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PopularPetsList;
