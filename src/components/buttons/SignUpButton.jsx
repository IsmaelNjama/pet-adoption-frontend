import React from "react";
import Button from "react-bootstrap/Button";
import "./buttons.css";
import SignupModal from "../modals/SignupModal";

function SignupButton() {
  return (
    <div>
      <SignupModal />
    </div>
  );
}

export default SignupButton;
