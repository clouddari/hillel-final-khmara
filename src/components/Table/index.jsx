import { useState } from "react";
import EditProduct from "../EditProduct";
import DeleteProduct from "../DeleteProduct";
import { useSelector, useDispatch } from "react-redux";
import { editProduct, deleteProduct } from "../../redux/productsSlice";
("bootstrap-icons/font/bootstrap-icons.css");
import "./table.css";

function TableComponent() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <>
      <table className="custom-hover-table">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price(₴)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr className="table-item" key={item.id}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td className="action-buttons">
                <button
                  onClick={() => {
                    setProductToEdit(item);
                    setIsEditOpen(true);
                  }}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>

                <button
                  onClick={() => {
                    setProductToDelete(item.id);
                    setIsDeleteOpen(true);
                  }}
                >
                  <i className="bi bi-archive-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditProduct
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        initialData={productToEdit}
        onSave={(updatedProduct) => {
          dispatch(editProduct(updatedProduct));
          setIsEditOpen(false);
        }}
      />

      <DeleteProduct
        isDeleteOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={() => {
          dispatch(deleteProduct(productToDelete));
          setIsDeleteOpen(false);
        }}
      />
    </>
  );
}

export default TableComponent;
