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
            Welcome to the Pet Adoption Hub and discover your perfect companion.
            We're not just about finding forever homes for pets; we're also
            about creating temporary havens of love through fostering. Every wag
            of a tail and every joyful bark speaks to the incredible love and
            companionship waiting for you, whether it's as a forever home or a
            foster parent.
          </p>
        </Stack>
      )}
      <Stack className="commitment-section">
        We're committed to matching each pet with the right family. Every
        adoption creates a forever home for a deserving animal, while every
        fostering opportunity provides a temporary haven for an animal in
        transition. It's a chance to make a difference in a pet's life, whether
        it's for a few days, weeks, or months.
      </Stack>
    </div>
  );
}

export default Header;
