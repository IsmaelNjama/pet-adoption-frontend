import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import UserProfileContext from "../context/UserProfileContext";
import("../styles/common.css");
import("../components/buttons/buttons.css");

function ProfileSettingsForm() {
  const [userProfile, setUserProfile] = useState({});
  const { profileDetails } = useContext(UserProfileContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  useEffect(() => {
    setUserProfile(profileDetails);
  }, [profileDetails]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstname(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleChangephonenumber = (e) => {
    setPhonenumber(e.target.value);
  };

  return (
    <div className="profile-form-wrapper">
      <Form className="w-50 ">
        <h1 className="mb-4">Profile Settings</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="form-label">
              Email : {profileDetails.email}
            </Form.Label>
            <Form.Control
              value={email}
              onChange={handleChangeEmail}
              type="email"
              placeholder="Enter your new email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password : ****</Form.Label>
            <Form.Control
              value={password}
              type="password"
              onChange={handleChangePassword}
              placeholder="Change Password"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First name : {profileDetails.firstname}</Form.Label>
            <Form.Control
              value={firstname}
              onChange={handleChangeFirstName}
              type="text"
              placeholder="Your first name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last name : {profileDetails.lastname}</Form.Label>
            <Form.Control
              value={lastname}
              onChange={handleChangeLastName}
              type="text"
              placeholder="Your last name"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Phone number : {profileDetails.phonenumber}</Form.Label>
          <Form.Control
            type="text"
            value={phonenumber}
            onChange={handleChangephonenumber}
            placeholder="Your phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add short bio</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button className="profile-settings-button" variant="primary">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default ProfileSettingsForm;
