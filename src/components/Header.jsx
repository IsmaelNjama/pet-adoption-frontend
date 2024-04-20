import React, { useContext } from "react";
import FirstNameContext from "../context/FirstNameContext";
import LastNameContext from "../context/LastNameContext";
import LoggedInContext from "../context/LoggedInContext";
import Stack from "react-bootstrap/Stack";
import "../styles/common.css";

function Header() {
  const { firstname } = useContext(FirstNameContext);
  const { lastname } = useContext(LastNameContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  return (
    <div className="header-wrapper">
      {isLoggedIn ? (
        <Stack className="welcome-section">
          Welcome Back!!! {firstname} {lastname}
        </Stack>
      ) : (
        <Stack className="welcome-message">
          <p>
            Welcome to the Pet Adoption Hub and discover your perfect companion
          </p>
        </Stack>
      )}
      <Stack className="commitment-section">
        We're committed to matching each pet with the right family
      </Stack>
    </div>
  );
}

export default Header;
