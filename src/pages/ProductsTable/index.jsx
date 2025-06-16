import rozetkaLogo from "../../assets/rozetka-logo-white.svg";
import "./productsTable.css"
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import TableComponent from "../../components/Table";


function ProductsTable() {
  return (
    <>
      <img className="logo-products-page" src={rozetkaLogo} alt="Rozetka Logo" />

      <div className="buttons-products-table-page">
       <Button className="rounded-0" type="submit">
         <i className="bi bi-person"></i> Preview
          </Button>
        <Button className="rounded-0" type="submit">
          <i className="bi bi-plus-lg"></i>    Add Product
          </Button>
      </div>

      <h1 className="heading-products-table">Products </h1>

      <TableComponent />
    </>
  );
}

export default ProductsTable;
