import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {
  petsAdvancedQueryGET,
  petsBasicQueryGET,
  petsByIdGET,
} from "../utils/api";
import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";
import PetDetailsContext from "../context/PetDetailsContext";
import LoggedInContext from "../context/LoggedInContext";

function SearchBar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [petList, setPetList] = useState([]);
  const [query, setQuery] = useState("");
  const { setPetDetails } = useContext(PetDetailsContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const handleSeeFullDetails = async (petId) => {
    const fullPetDetails = await petsByIdGET(`pets/${petId}`);
    setPetDetails(fullPetDetails);
    navigate("/PetPage");
  };

  useEffect(() => {
    if (isLoggedIn) {
      getAdvancedPetsList();
    } else {
      getBasicPetsList();
    }
  }, [isLoggedIn]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const getBasicPetsList = async () => {
    try {
      setIsLoading(true);

      setPetList(await petsBasicQueryGET("pets/search/basic"));

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAdvancedPetsList = async () => {
    try {
      setIsLoading(true);

      setPetList(await petsAdvancedQueryGET(`pets/search/advanced?q=${query}`));

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearchButtonClick = () => {
    if (isLoggedIn) {
      getAdvancedPetsList();
    } else {
      setShowLoginMessage(true);
    }
  };
  return (
    <div className="search-bar-wrapper">
      <h3 className="title-section">Search Pets</h3>
      <Form className="d-flex search-pets-input">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleQueryChange}
        />
        <Button onClick={handleSearchButtonClick} variant="outline-success">
          Search
        </Button>
      </Form>
      {!isLoggedIn && showLoginMessage && (
        <p className="login-to-search">
          Please Login or Signup to find your match
        </p>
      )}
      <div className="search-pets-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          petList.map((pet) => (
            <Card className="pet-car" key={pet._id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={pet.imageUrl}
                style={{ width: "18rem", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Name: {pet.name}</Card.Title>
                <Card.Text>Status: {pet.adoptionStatus}</Card.Text>
                {isLoggedIn && (
                  <Button
                    variant="primary"
                    onClick={() => handleSeeFullDetails(pet._id)}
                  >
                    See more...
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchBar;
