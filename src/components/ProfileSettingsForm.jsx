import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ProfileSettingsForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First name</Form.Label>
          <Form.Control type="email" placeholder="Your first name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last name</Form.Label>
          <Form.Control type="password" placeholder="Your last name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control placeholder="Your phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add short bio</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary">Save</Button>
    </Form>
  );
}

export default ProfileSettingsForm;
