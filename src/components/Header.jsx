import React, { useContext } from "react";
import FirstNameContext from "../context/FirstNameContext";
import LastNameContext from "../context/LastNameContext";
import LoggedInContext from "../context/LoggedInContext";

function Header() {
  const { firstname } = useContext(FirstNameContext);
  const { lastname } = useContext(LastNameContext);
  const { isLoggedIn } = useContext(LoggedInContext);
  return (
    <div className="header-wrapper">
      <h1>Pet Adoption Hub</h1>
      {isLoggedIn ? (
        <section className="welcome-section">
          <h2>
            Welcome Back!!! {firstname} {lastname}
          </h2>
          <p>
            For things that make you go AWWW!!!... like puppies,bunnies and so
            on. Feel free and discover your perfect companion.
          </p>
        </section>
      ) : (
        <p className="welcome-message">
          Welcome to the Pet Adoption Hub and discover your perfect companion
        </p>
      )}
      <section className="commitment-section">
        We're committed to matching each pet with the right family
      </section>
    </div>
  );
}

export default Header;
