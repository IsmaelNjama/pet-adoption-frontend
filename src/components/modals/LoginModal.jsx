import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../buttons/buttons.css";
import ShowLoginContext from "../../context/ShowLoginContext";
import LoggedInContext from "../../context/LoggedInContext";
import { useNavigate } from "react-router-dom";

function LoginModal() {
  const navigate = useNavigate();
  const { showLogin, setShowLogin } = useContext(ShowLoginContext);
  const { isloggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [canLogIn, setCanLogIn] = useState(false);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    navigate("/LoggedInPage");
  };

  useEffect(() => {
    const isOkayToLogin = [loginEmail, loginPassword].every(
      (x) => x.trim().length > 0
    );

    setCanLogIn(isOkayToLogin);
  }, [loginEmail, loginPassword]);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  return (
    <div>
      <Button variant="primary" className="login-button" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header className="login-modal-header">
          <Modal.Title>Login</Modal.Title>
          <div>Please fill your credentials to login</div>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                type="password"
                placeholder="Enter your password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button
            variant="primary"
            disabled={!canLogIn}
            onClick={handleLoggedIn}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
