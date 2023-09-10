import React from "react";
import AdoptButton from "../components/buttons/AdoptButton";
import FosterButton from "../components/buttons/FosterButton";
import SavePetButton from "../components/buttons/SavePetButton";

function PetPage() {
  return (
    <div>
      <AdoptButton />
      <FosterButton />
      <SavePetButton />
    </div>
  );
}

export default PetPage;
