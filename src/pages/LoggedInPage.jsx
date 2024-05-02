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

  localStorage.setItem("firstname", JSON.stringify(firstname));
  localStorage.setItem("lastname", JSON.stringify(lastname));

  return (
    <div className="logged-in-page">
      {isLoggedIn && (
        <Stack className="welcome-section">
          Welcome Back!!! {firstname} {lastname}
        </Stack>
      )}
    </div>
  );
}

export default LoggedInPage;
