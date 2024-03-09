import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function SuccessModal() {
  const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Action Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Action successful</Modal.Body>
      </Modal>
    </div>
  );
}

export default SuccessModal;
