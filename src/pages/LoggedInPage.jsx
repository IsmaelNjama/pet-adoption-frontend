import React, { useContext } from "react";
import FirstNameContext from "../context/FirstNameContext";
import LastNameContext from "../context/LastNameContext";
import LoggedInContext from "../context/LoggedInContext";
import Stack from "react-bootstrap/Stack";
import "../styles/common.css";
import { Link } from "react-router-dom";

function LoggedInPage() {
  const { firstname } = useContext(FirstNameContext);
  const { lastname } = useContext(LastNameContext);
  const { isLoggedIn } = useContext(LoggedInContext);

  localStorage.setItem("firstname", JSON.stringify(firstname));
  localStorage.setItem("lastname", JSON.stringify(lastname));

  return (
    <div className="logged-in-page">
      {isLoggedIn ? (
        <Stack className="welcome-section">
          <h2 className="mb-4">Hi {firstname}!!!</h2>
          <p className="mb-4">
            Welcome back to Pet Adoption,{lastname}! We are more than happy to
            see you again. Our mission is to connect loving families wit
            adorable pets in need of homes. Whether you are a seasoned or
            considering bringing a friend into your life for the first time ,
            you've come to the right place.
          </p>
          <p className="mb-4">
            {" "}
            Take your time exploring our wide selection of pets available for
            adoption or fostering. From playful puppies to cuddly kittens,there
            is a perfect match waiting for every family. Each pet has a unique
            story and we're here to help you find the perfect companion to fit
            your lifestyle and preferences
          </p>
        </Stack>
      ) : (
        <div className="text-center">
          <h2>Oops! You seem to be logged out.</h2>
          <p>
            To continue ,please <Link to="/LoginModal">log in</Link> to your
            account
          </p>
        </div>
      )}
    </div>
  );
}

export default LoggedInPage;
