import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import url from "../utils/urlUtils";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { GET } from "../utils/api";
import OwnedPetsContext from "../context/OwnedPetsContext";
import PetDetailsContext from "../context/PetDetailsContext";

function PetCard() {
  const { ownedPetsList, setOwnedPetsList } = useContext(OwnedPetsContext);
  const { petDetails, setPetDetails } = useContext(PetDetailsContext);

  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const userId = `${localStorage.getItem("USER_ID")}`;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const handleSeeFullDetails = (ownedPetId) => {
    navigate("/OwnedPetPage");
    setPetDetails({ _id: ownedPetId });

    setOwnedPetsList(pets);
  };
  const fetchData = async () => {
    try {
      const userWithPets = await GET(`/users/${userId}`);

      setPets(userWithPets.pets);

      setIsLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="pet-card-container">
      <h2 className="owned-pet-title">Pet Owned</h2>
      <div className="pet-card-list-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          pets.map((pet) => (
            <Card className="pet-card" key={pet._id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={pet.imageUrl}
                style={{ width: "17rem", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>

                <Button
                  variant="primary"
                  onClick={() => handleSeeFullDetails(pet._id)}
                >
                  See more details...
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default PetCard;
