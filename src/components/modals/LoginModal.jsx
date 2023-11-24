import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../buttons/buttons.css";
import ShowLoginContext from "../../context/ShowLoginContext";
import LoggedInContext from "../../context/LoggedInContext";
import FirstNameContext from "../../context/FirstNameContext";
import LastNameContext from "../../context/LastNameContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { POST } from "../../utils/api";

function LoginModal() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [canLogIn, setCanLogIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const { firstname, setFirstname } = useContext(FirstNameContext);
  const { lastname, setLastname } = useContext(LastNameContext);

  const navigate = useNavigate();
  const { showLogin, setShowLogin } = useContext(ShowLoginContext);
  const { isloggedIn, setIsLoggedIn } = useContext(LoggedInContext);

  const handleLoggedIn = async () => {
    setIsLoggedIn(true);
    const body = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const loggedUserResponse = await POST("/auth/login", body);

      if (loggedUserResponse.status === 200) {
        setShowLogin(false);
        setFirstname(loggedUserResponse.data.user.firstname);
        setLastname(loggedUserResponse.data.user.lastname);
        navigate("/LoggedInPage");
        localStorage.setItem("USER", loggedUserResponse.data.accessToken);
      }
    } catch (error) {
      setLoginError(error.response.data.message);
    }
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
        {loginError && <div className="form-input-errors">{loginError}</div>}-{" "}
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
