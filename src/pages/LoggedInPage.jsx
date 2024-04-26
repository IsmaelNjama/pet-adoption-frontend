import React, { useContext } from "react";
import FirstNameContext from "../context/FirstNameContext";
import LastNameContext from "../context/LastNameContext";
import LoggedInContext from "../context/LoggedInContext";
import Stack from "react-bootstrap/Stack";
import "../styles/common.css";

function LoggedInPage() {
  const { firstname } = useContext(FirstNameContext);
  const { lastname } = useContext(LastNameContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  return (
    <div className="logged-in-page">
      {isLoggedIn ? (
        <Stack className="welcome-section">
          Welcome Back!!! {firstname} {lastname}
        </Stack>
      ) : (
        <Stack className="welcome-message">
          <p>
            We're committed to matching each pet with the right family. Every
            adoption creates a forever home for a deserving animal, while every
            fostering opportunity provides a temporary haven for an animal in
            transition. It's a chance to make a difference in a pet's life,
            whether it's for a few days, weeks, or months.
          </p>
        </Stack>
      )}
    </div>
  );
}

export default LoggedInPage;
