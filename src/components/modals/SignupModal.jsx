import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../buttons/buttons.css";
import { Link, useNavigate } from "react-router-dom";
import ShowLoginContext from "../../context/ShowLoginContext";

import { POST } from "../../utils/api";

function SignupModal() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();
  const { setShowLogin } = useContext(ShowLoginContext);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formErrorMessage, setFormErrorMessage] = useState(null);

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

    try {
      const body = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
      };
      const signedAccount = await POST("/auth/signup", body);

      if (signedAccount.status === 200) {
        navigate("/");
        setShowSignUp(false);
      }
    } catch (error) {
      const inputErrors = error.response.data.message;
      setFormErrorMessage(inputErrors);
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
        {formErrorMessage && (
          <div className="form-input-errors">{formErrorMessage}</div>
        )}
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
