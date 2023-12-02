import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import FirstNameContext from "../context/FirstNameContext";

function NavBar() {
  const [isdisabled, setIsdisabled] = useState(false);
  const { firstname } = useContext(FirstNameContext);
  const navigate = useNavigate();

  const handleProfileNavigation = () => {
    navigate("/ProfileSettingsForm");
  };

  useEffect(() => {
    setIsdisabled(firstname !== "admin");
  }, [firstname]);

  const handleSearch = () => {
    navigate("/SearchPage");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/MyPetsPage">My Pets</Nav.Link>
            <Nav.Link href="/AdminPage" disabled={isdisabled}>
              Dashboard
            </Nav.Link>
          </Nav>
          <Form className="d-flex gap-3">
            <Button onClick={handleSearch} variant="outline-success">
              Search
            </Button>
            <Button
              onClick={handleProfileNavigation}
              variant="outline-success  rounded-circle"
            >
              P
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
