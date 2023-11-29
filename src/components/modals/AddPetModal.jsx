import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { petsPOST } from "../../utils/api";

function AddPetModal() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("available");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [hypoallergenic, setHypoallergenic] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [breed, setBreed] = useState("");

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAdoptionStatus = (e) => {
    setAdoptionStatus(e.target.value);
  };

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };
  const handleChangeHypoallergenic = (e) => {
    setHypoallergenic(e.target.value);
  };
  const handleChangeDietaryRestrictions = (e) => {
    setDietaryRestrictions(e.target.value);
  };
  const handleChangeBreed = (e) => {
    setBreed(e.target.value);
  };

  const handleAddPet = async (e) => {
    e.preventDefault();
    try {
      const body = {
        type: type,
        name: name,
        adoptionStatus: adoptionStatus,
        height: height,
        weight: weight,
        color: color,
        bio: bio,
        hypoallergenic: hypoallergenic,
        dietaryRestrictions: dietaryRestrictions,
        breed: breed,
      };

      await petsPOST("/pets", body);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" className="add-pet-button" onClick={handleShow}>
        + Add Pet
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="type"
                value={type}
                onChange={handleChangeType}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                value={name}
                onChange={handleChangeName}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Adoption Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="adoption status"
                value={adoptionStatus}
                onChange={handleChangeAdoptionStatus}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="height"
                value={height}
                onChange={handleChangeHeight}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                placeholder="weight"
                value={weight}
                onChange={handleChangeWeight}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="color"
                value={color}
                onChange={handleChangeColor}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="bio"
                value={bio}
                onChange={handleChangeBio}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Hypoallergenic</Form.Label>
              <Form.Control
                type="text"
                placeholder="hypoallergenic"
                value={hypoallergenic}
                onChange={handleChangeHypoallergenic}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Dietary Restrictions</Form.Label>
              <Form.Control
                type="text"
                placeholder="dietary restrictions"
                value={dietaryRestrictions}
                onChange={handleChangeDietaryRestrictions}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                type="text"
                placeholder="breed"
                value={color}
                onChange={handleChangeBreed}
                autoFocus
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddPet} variant="primary">
            + Add Pet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddPetModal;
