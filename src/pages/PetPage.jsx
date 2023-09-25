import React from "react";
import AdoptButton from "../components/buttons/AdoptButton";
import FosterButton from "../components/buttons/FosterButton";
import SavePetButton from "../components/buttons/SavePetButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import("../styles/common.css");

function PetPage() {
  return (
    <div className="pet-page-container">
      <Container className="pet-image-container">
        <Col className="pet-image-col" xs={6} md={4}>
          <Image className="pet-image" src="" roundedCircle />
        </Col>
      </Container>
      <Container className="pet-details-container">
        <Row>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p className="pet-type">Type:</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p className="pet-breed">Breed:</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Dietary restrictions:</p>
          </Col>
        </Row>
        <Row>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p> Name:</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Color:</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p> Weight:</p>
          </Col>
        </Row>
        <Row>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Adoption Status:</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Height:</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Hypoallergenic:</p>
          </Col>
        </Row>
      </Container>
      <Stack direction="horizontal" gap={3}>
        <AdoptButton />
        <FosterButton />
        <SavePetButton />
      </Stack>
    </div>
  );
}

export default PetPage;
