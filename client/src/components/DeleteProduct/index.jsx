import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DeleteProduct.css";

function DeleteProduct({ onClose, onDelete, isDeleteOpen }) {
  if (!isDeleteOpen) return null;

  return (
    <>
      <Modal
        show={isDeleteOpen}
        onHide={onClose}
        centered
        backdrop="static"
        className="delete-product-modal"
      >
        <Modal.Body>
          <h2>Are you sure you want to delete this product?</h2>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onDelete} variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProduct;
