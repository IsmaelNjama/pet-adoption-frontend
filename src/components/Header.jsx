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
      <h2>Pet Adoption Hub</h2>
      {isLoggedIn ? (
        <p>
          Welcome {firstname} {lastname} to the Pet Adoption Hub and discover
          your perfect companion
        </p>
      ) : (
        <p>
          Welcome to the Pet Adoption Hub and discover your perfect companion
        </p>
      )}
      <section>
        We're committed to matching each pet with the right family
      </section>
    </div>
  );
}

export default Header;
