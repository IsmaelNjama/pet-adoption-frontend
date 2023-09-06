import React from "react";
import PetCardList from "../components/PetCardList";

function MyPetsPage() {
  return (
    <div>
      <h3>You currently do not own any pets</h3>
      <PetCardList />
    </div>
  );
}

export default MyPetsPage;
