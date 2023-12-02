import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { petsAdvancedQueryGET, petsByIdGET } from "../utils/api";
import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";
import PetDetailsContext from "../context/PetDetailsContext";

function SearchBar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [petList, setPetList] = useState([]);
  const [query, setQuery] = useState([""]);
  const { setPetDetails } = useContext(PetDetailsContext);

  const handleSeeFullDetails = async (petId) => {
    console.log(petId);
    const fullPetDetails = await petsByIdGET(`pets/${petId}`);
    setPetDetails(fullPetDetails);
    navigate("/PetPage");
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const getAdvancedPetsList = async () => {
    try {
      setIsLoading(true);
      const petsList = await petsAdvancedQueryGET(
        `pets/search/advanced?q=${query}`
      );

      setPetList(petsList);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // getAdvancedPetsList();
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
        <Button onClick={getAdvancedPetsList} variant="outline-success">
          Search
        </Button>
      </Form>
      <div className="search-pets-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          petList.map((pet) => (
            <Card className="pet-car" key={pet._id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pet.url} />
              <Card.Body>
                <Card.Title>Name: {pet.name}</Card.Title>
                <Card.Text>Status: {pet.adoptionStatus}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleSeeFullDetails(pet._id)}
                >
                  See more...
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchBar;
