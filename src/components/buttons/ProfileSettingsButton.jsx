import React from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ProfileSettingsButton() {
  const navigate = useNavigate();

  const handleProfileNavigate = () => {
    navigate("/ProfileSettingsForm");
  };
  return (
    <div>
      <Button variant="outline-primary" onClick={handleProfileNavigate}>
        Profile Settings
      </Button>
    </div>
  );
}

export default ProfileSettingsButton;
