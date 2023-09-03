import React from "react";
import Button from "react-bootstrap/Button";
import LoginModal from "../modals/LoginModal";

function LoginButton() {
  return (
    <div className="login-modal-wrapper">
      <LoginModal />
    </div>
  );
}

export default LoginButton;
