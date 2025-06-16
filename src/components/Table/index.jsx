import Table from "react-bootstrap/Table";
import "./table.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TableComponent() {
  const items = [
    {
      id: 1,
      category: "electronics",
      name: "Smartphone Xiaomi Redmi Note 13",
      quantity: 10,
      price: 8999,
    },
    {
      id: 2,
      category: "electronics",
      name: "Samsung 4K LED TV 43",
      quantity: 5,
      price: 16499,
    },
    {
      id: 3,
      category: "electronics",
      name: "Bluetooth Headphones JBL Tune 510BT",
      quantity: 20,
      price: 1899,
    },
    {
      id: 4,
      category: "electronics",
      name: "Laptop ASUS VivoBook 15",
      quantity: 7,
      price: 22999,
    },
    {
      id: 5,
      category: "electronics",
      name: "Smartwatch Apple Watch SE 2",
      quantity: 4,
      price: 12499,
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <Table responsive="md" className="custom-hover-table">
          <thead>
            <tr className="text-center  align-middle">
              <th>ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price(₴)</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr  className="text-center  align-middle" key={item.id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <i className="bi-pencil-fill"></i>
                </td>
                <td>
                  <i className="bi-archive-fill"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TableComponent;
