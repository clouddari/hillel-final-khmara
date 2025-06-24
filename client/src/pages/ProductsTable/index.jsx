import "./productsTable.css";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import TableComponent from "../../components/Table";
import LogoHeader from "../../components/LogoHeader";
import EditProduct from "../../components/EditProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, loadProducts } from "../../redux/productsSlice";
import { useNavigate } from "react-router-dom";

function ProductsTable() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">loading products...</div>;
  }

  return (
    <>
      <LogoHeader />

      <div className="products-table-page">
        <div className="buttons-products-table-page">
          <Button
            onClick={() => navigate("/preview")}
            className="rounded-0"
            type="submit"
          >
            <i className="bi bi-person"></i> Preview
          </Button>
          <Button
            onClick={() => {
              setShowAddProduct(true);
            }}
            className="rounded-0"
            type="submit"
          >
            <i className="bi bi-plus-lg"></i> Add Product
          </Button>
        </div>

        <h1 className="heading-products-table">Products </h1>

        <TableComponent items={products} />
      </div>

      <EditProduct
        isOpen={showAddProduct}
        onClose={() => setShowAddProduct(false)}
        onSave={(newProduct) => {
          dispatch(addProduct({ ...newProduct, id: Date.now() }));
          setShowAddProduct(false);
        }}
      />
    </>
  );
}

export default ProductsTable;
