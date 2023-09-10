import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function SearchButton() {
  const navigate = useNavigate();
  const handleSearchPageNavigation = () => {
    navigate("/SearchPage");
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={handleSearchPageNavigation}>
        Search
      </Button>
    </div>
  );
}

export default SearchButton;
