import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form as BootstrapForm } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import "./editProduct.css";
function EditProduct({ isOpen, onClose, onSave, initialData }) {
  const handleFormSubmit = (values) => {
    onSave(values);
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton className="edit-header">
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>

      <Modal.Body className="custom-edit-modal">
        <Form
          onSubmit={handleFormSubmit}
          initialValues={initialData || {}}
          validate={(values) => {
            const errors = {};
            if (!values.category) errors.category = "required";
            if (!values.name) errors.name = "required";
            if (!values.quantity) errors.quantity = "required";
            if (!values.price) errors.price = "required";
            if (!values.image) errors.image = "required";
            return errors;
          }}
          render={({ handleSubmit, submitFailed }) => (
            <BootstrapForm onSubmit={handleSubmit}>
              {[
                {
                  name: "category",
                  label: "Category",
                  type: "text",
                  placeholder: "Enter category",
                },
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Enter name",
                },
                {
                  name: "quantity",
                  label: "Quantity",
                  type: "number",
                  placeholder: "Enter quantity",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "number",
                  placeholder: "Enter price",
                },
                {
                  name: "image",
                  label: "Image Link",
                  type: "text",
                  placeholder: "Insert image link",
                },
              ].map(({ name, label, type, placeholder }) => (
                <BootstrapForm.Group key={name} className="edit-groud">
                  <BootstrapForm.Label>{label}</BootstrapForm.Label>
                  <Field name={name}>
                    {({ input, meta }) => (
                      <>
                        <BootstrapForm.Control
                          {...input}
                          type={type}
                          placeholder={placeholder}
                          isInvalid={meta.touched && meta.error}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">
                          {meta.error}
                        </BootstrapForm.Control.Feedback>
                      </>
                    )}
                  </Field>
                </BootstrapForm.Group>
              ))}

              <Modal.Footer className="modal-edit-footer">
                <Button onClick={onClose} variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" variant="success">
                  Submit
                </Button>
              </Modal.Footer>
            </BootstrapForm>
          )}
        />
      </Modal.Body>
    </Modal>
  );
}

export default EditProduct;
