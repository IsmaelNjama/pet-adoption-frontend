import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import FirstNameContext from "../context/FirstNameContext";
import LastNameContext from "../context/LastNameContext";
import { GET } from "../utils/api";
import LoggedInContext from "../context/LoggedInContext";
import { LuLogOut } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import UserProfileContext from "../context/UserProfileContext";
import "../styles/common.css";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

function NavBar() {
  const [isdisabled, setIsdisabled] = useState(false);
  const { firstname, setFirstname } = useContext(FirstNameContext);
  const { setLastname } = useContext(LastNameContext);
  const { isLoggedIn, setIsLoggedIn, userId, setUserId } =
    useContext(LoggedInContext);
  const { setProfileDetails } = useContext(UserProfileContext);
  const navigate = useNavigate();
  useEffect(() => {
    setIsdisabled(firstname !== "admin");
  }, [firstname]);

  useEffect(() => {
    const storedLoggedInState = localStorage.getItem("isLoggedIn");
    if (storedLoggedInState) {
      setIsLoggedIn(JSON.parse(storedLoggedInState));
    }
  }, [setIsLoggedIn]);

  const handleProfileNavigation = async () => {
    try {
      const userProfile = await GET(`/users/${userId}`);
      setProfileDetails(userProfile);
    } catch (error) {
      console.error(error);
    }
    navigate("/ProfileSettingsForm");
  };

  const handleSearch = () => {
    navigate("/SearchPage");
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserId(null);
    setFirstname("");
    setLastname("");
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Navbar expand="lg" className="nav-outer-container">
      <Container fluid className="nav-container">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {isLoggedIn ? (
              <Nav.Link href="/LoggedInPage" className="nav-title">
                Pet Adoption Hub
              </Nav.Link>
            ) : (
              <Nav.Link href="/" className="nav-title">
                Pet Adoption Hub
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link href="/MyPetsPage" className="nav-my-pets">
                My Pets
              </Nav.Link>
            )}
            {!isdisabled && isLoggedIn && (
              <Nav.Link href="/AdminPage" className="nav-dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>

          {!isLoggedIn && (
            <div className="modal-display">
              <LoginModal />
              <SignupModal />
            </div>
          )}

          <Form className="d-flex gap-3">
            <Button
              onClick={handleSearch}
              variant="outline-success"
              className="border-0"
            >
              <FaSearch />
            </Button>
            {isLoggedIn && (
              <Button
                onClick={handleProfileNavigation}
                variant="outline-success  rounded-circle"
                className="m-2 border-0"
              >
                <CgProfile />
              </Button>
            )}
          </Form>
          {isLoggedIn && (
            <Button
              onClick={handleLogout}
              variant="outline-success"
              className="border-0"
            >
              Logout <LuLogOut />
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
