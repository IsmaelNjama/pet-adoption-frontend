import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import("../../styles/common.css");

function AddPet() {
  return (
    <div className="add-pet-container">
      <h1 className="pet-details-header">Pet Details</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Type
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Name
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Adoption status
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Breed
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Color
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Height
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Dietary restrictions
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Weight
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text
          id="inputGroup-sizing-default"
          className="pet-details-input-label"
        >
          Hypoallergenic
        </InputGroup.Text>
        <Form.Control
          type="text"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </div>
  );
}

export default AddPet;
