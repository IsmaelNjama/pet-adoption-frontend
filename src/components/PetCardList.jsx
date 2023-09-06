import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function PetCardList() {
  const navigate = useNavigate();
  const handleSeeFullDetails = () => {
    navigate("/PetPage");
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px200" />
      <Card.Body>
        <Card.Title>Pet's name</Card.Title>
        <Card.Text>
          This is the pet's current status.(foster or adopted)
        </Card.Text>
        <Button variant="primary" onClick={handleSeeFullDetails}>
          See more...
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PetCardList;
