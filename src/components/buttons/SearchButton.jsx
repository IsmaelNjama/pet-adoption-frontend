import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./buttons.css";

function SearchButton() {
  const navigate = useNavigate();
  const handleSearchPageNavigation = () => {
    navigate("/SearchPage");
  };

  return (
    <div>
      <Button
        className="search-button"
        variant="outline-primary"
        onClick={handleSearchPageNavigation}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchButton;
