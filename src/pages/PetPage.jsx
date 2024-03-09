import React, { useContext } from "react";
import AdoptButton from "../components/buttons/AdoptButton";
import FosterButton from "../components/buttons/FosterButton";
import SavePetButton from "../components/buttons/SavePetButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import PetDetailsContext from "../context/PetDetailsContext";
import PetReturnButton from "../components/buttons/PetReturnButton";

import("../styles/common.css");

function PetPage() {
  const { petDetails } = useContext(PetDetailsContext);

  return (
    <div className="pet-page-container">
      <Container className="pet-image-container d-flex justify-content-center align-items-center">
        <Col className="pet-image-col" xs={6} md={4}>
          <Image
            className="pet-image"
            src={petDetails.imageUrl}
            roundedCircle
            style={{ width: "18rem", height: "200px" }}
          />
        </Col>
      </Container>
      <Container className="pet-details-container">
        <Row>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p className="pet-type">Type:{petDetails.type}</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p className="pet-breed">Breed:{petDetails.breed}</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Dietary restrictions:{petDetails.dietary_restrictions}</p>
          </Col>
        </Row>
        <Row>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p> Name:{petDetails.name}</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Color:{petDetails.color}</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p> Weight:{petDetails.weight}</p>
          </Col>
        </Row>
        <Row>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Adoption Status:{petDetails.adoptionStatus}</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Height:{petDetails.height}</p>
          </Col>
          <Col className="pet-detail-col mb-2" xs={6} md={4}>
            <p>Hypoallergenic:{petDetails.hypoallergenic}</p>
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
