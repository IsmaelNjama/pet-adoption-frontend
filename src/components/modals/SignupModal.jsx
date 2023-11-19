import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../buttons/buttons.css";
import { Link, useNavigate } from "react-router-dom";
import ShowLoginContext from "../../context/ShowLoginContext";
import FirstNameContext from "../../context/FirstNameContext";
import LastNameContext from "../../context/LastNameContext";
import axios from "axios";
import LoginModal from "./LoginModal";

function SignupModal() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { firstname, setFirstname } = useContext(FirstNameContext);
  const { lastname, setLastname } = useContext(LastNameContext);
  const [phonenumber, setPhonenumber] = useState(972);
  const navigate = useNavigate();
  const { setShowLogin } = useContext(ShowLoginContext);
  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleChangephonenumber = (e) => {
    setPhonenumber(e.target.value);
  };

  useEffect(() => {
    const isValid =
      email &&
      password &&
      confirmPassword &&
      firstname &&
      lastname &&
      phonenumber;
    setIsFormValid(isValid);
  }, [email, password, confirmPassword, firstname, lastname, phonenumber]);

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowLogin(true);
      setShowSignUp(false);
      const user = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
      };

      try {
        const response = await axios.post(
          "http://localhost:5050/auth/signup",
          user
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowSignUp(true);
    }
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
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChangePassword}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your firstname"
                value={firstname}
                onChange={handleChangeFirstName}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your lastname"
                value={lastname}
                onChange={handleChangeLastName}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                value={phonenumber}
                onChange={handleChangephonenumber}
                autoFocus
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={!isFormValid}
            onClick={handleCreateAccount}
          >
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignupModal;
