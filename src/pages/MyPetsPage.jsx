import Form from "react-bootstrap/Form";
import React, { useContext, useState, useEffect } from "react";
import PetCardList from "../components/PetCardList";
import AdoptedPetsContext from "../context/AdoptedPetsContext";
import Card from "react-bootstrap/Card";
import Loader from "../components/Loader";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function MyPetsPage() {
  const [checked, setChecked] = useState(false);
  // const { adoptedPets, setAdoptedPets } = useContext(AdoptedPetsContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSeeFullDetails = () => {
    navigate("/PetPage");
  };

  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="pet-card-list-container">
      <h2 className="owned-pet-title">Pet Owned</h2>
      <PetCardList />
    </div>
  );
}

export default MyPetsPage;
