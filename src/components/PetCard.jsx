import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "../utils/urlUtils";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function PetCard() {
  const navigate = useNavigate();
  const [breedsImg, setBreedsImg] = useState(null);
  const [petName, setPetName] = useState("");
  const [petData, setPetData] = useState([]);
  const handleSeeFullDetails = () => {
    navigate("/PetPage");
  };
  const fetchData = async () => {
    try {
      const responseData = await axios.get(url);
      const tenPetsDetails = responseData.data;
      const breeds = tenPetsDetails[0];

      const details = breeds.breeds;
      const moreDetails = details[0];
      const petGivenName = moreDetails.name;
      setPetName(petGivenName);
      setPetData(tenPetsDetails);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="pet-card-list-wrapper">
      {petData.map((pet, index) => (
        <Card className="pet-card" key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pet.url} />
          <Card.Body>
            <Card.Title>{petName}</Card.Title>
            <Card.Text>
              This is the pet's current status.(foster or adopted)
            </Card.Text>
            <Button variant="primary" onClick={handleSeeFullDetails}>
              See more...
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PetCard;
