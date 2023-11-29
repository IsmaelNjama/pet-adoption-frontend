import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { petsAdvancedQueryGET } from "../utils/api";

function SearchBar() {
  const getAdvancedPetsList = async () => {
    try {
      const petsList = await petsAdvancedQueryGET(
        "pets/search/advanced?q=milly"
      );
      console.log(
        "🚀 ~ file: SearchBar.jsx:10 ~ getAdvancedPetsList ~ petsList:",
        petsList
      );
    } catch (error) {
      console.log(error);
    }
  };
  getAdvancedPetsList();
  return (
    <div className="search-bar-wrapper">
      <h3 className="search-pets-title">Search Pets</h3>
      <Form className="d-flex search-pets-input">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;
