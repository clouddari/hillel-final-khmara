import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "./editProduct.css";

function EditProduct({ isOpen, onClose, onSave }) {
  return (
    <>
      <Modal show={isOpen} onHide={onClose} centered backdrop="static">
        <Modal.Header closeButton className="edit-header">
          <Modal.Title>Edit product</Modal.Title>
        </Modal.Header>

        <Modal.Body className="custom-edit-modal">
          <Form>
            <Form.Group className="edit-groud">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter category" />
            </Form.Group>

            <Form.Group className="edit-groud">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="edit-groud">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" />
            </Form.Group>

            <Form.Group className="edit-groud">
              <Form.Label>Price</Form.Label>
              <Form.Control type="Number" placeholder="Enter price" />
            </Form.Group>

            <Form.Group className="edit-groud">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="The description goes here"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="modal-edit-footer">
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onSave} variant="success">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
