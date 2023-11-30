import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { petsAdvancedQueryGET } from "../utils/api";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";

function SearchBar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [petList, setPetList] = useState([]);
  const [query, setQuery] = useState([""]);

  const handleSeeFullDetails = () => {
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
      console.log(
        "🚀 ~ file: SearchBar.jsx:10 ~ getAdvancedPetsList ~ petsList:",
        petsList
      );
      setPetList(petsList);
      console.log("petLiiist", petList);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // getAdvancedPetsList();
  return (
    <div className="search-bar-wrapper">
      <h3 className="search-pets-title">Search Pets</h3>
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
          petList.map((petList) => (
            <Card
              className="pet-car"
              key={petList._id}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={petList.url} />
              <Card.Body>
                <Card.Title>Name: {petList.name}</Card.Title>
                <Card.Text>Status: {petList.adoption_status}</Card.Text>
                <Button variant="primary" onClick={handleSeeFullDetails}>
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
