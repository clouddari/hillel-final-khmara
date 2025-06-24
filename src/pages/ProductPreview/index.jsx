import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productPreview.css";
import LogoHeader from "../../components/LogoHeader/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../../redux/productsSlice";
import { useNavigate } from "react-router-dom";

function ProductsPreview() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="loading">loading products...</p>;
  }

  return (
    <>
      <LogoHeader />

      <div className="back-to-table-button">
        <Button
          onClick={() => navigate("/")}
          className="rounded-0"
          type="submit"
        >
          <i className="bi bi-arrow-left"></i>Back
        </Button>
      </div>

      <div className="products-preview">
        {products.map((item) => (
          <Card key={item.id} style={{ width: "273px" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <div className="price-quantity">
                <p className="price">
                  {item.price}
                  <span>₴</span>
                </p>
                <p className="quantity">Кількість: {item.quantity}</p>
              </div>
              <Button variant="primary">
                <i className="bi bi-cart4"></i>
                Готовий до відправки
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ProductsPreview;
