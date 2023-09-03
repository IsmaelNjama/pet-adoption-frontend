import React from "react";
import Button from "react-bootstrap/Button";
import "./buttons.css";
import SignupModal from "../modals/SignupModal";

function SignupButton() {
  return (
    <div className="sign-up-wrapper">
      <SignupModal />
    </div>
  );
}

export default SignupButton;
