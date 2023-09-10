import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import PetCardList from "../components/PetCardList";

function MyPetsPage() {
  const [pets, setPets] = useState([]);
  const [savedPets, setSavedPets] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      {checked ? (
        <h3>You currently do not own any pets</h3>
      ) : (
        <h3>You own the below pets</h3>
      )}

      <Form.Check onChange={handleCheckedChange} />
      <PetCardList />
    </div>
  );
}

export default MyPetsPage;
