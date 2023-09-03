import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../buttons/buttons.css";
import { Link, useNavigate } from "react-router-dom";
import ShowLoginContext from "../../context/ShowLoginContext";
import FirstNameContext from "../../context/FirstNameContext";
import LastNameContext from "../../context/LastNameContext";

function SignupModal() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { firstname, setFirstname } = useContext(FirstNameContext);
  const { lastname, setLastname } = useContext(LastNameContext);
  const [phoneNumber, setPhoneNumber] = useState(972);
  const navigate = useNavigate();
  const { setShowLogin } = useContext(ShowLoginContext);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstname(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCreateAccount = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleClose = () => setShowSignUp(false);
  const handleShow = () => setShowSignUp(true);

  return (
    <div>
      <Button variant="primary" className="sign-up-button" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={showSignUp} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleChangeEmail}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                value={password}
                onChange={handleChangePassword}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Firstname"
                value={firstname}
                onChange={handleChangeFirstName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Lastname"
                value={lastname}
                onChange={handleChangeLastName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter phone number"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateAccount}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignupModal;
