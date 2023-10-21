import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchBar() {
  return (
    <div>
      <h3>Search Pets</h3>
      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Search"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Basic Search</Dropdown.Item>
          <Dropdown.Item href="#">Advanced Search</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
}

export default SearchBar;
