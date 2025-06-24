const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, "data", "products.json");

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.use((req, res, next) => {
  console.log("Unhandled route:", req.method, req.url);
  next();
});

app.get("/products", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  res.json(data);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  const products = JSON.parse(fs.readFileSync(DATA_PATH));
  products.push(newProduct);
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProduct = req.body;
  const products = JSON.parse(fs.readFileSync(DATA_PATH));
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products[index] = updatedProduct;
    fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
    res.json(updatedProduct);
  } else {
    res.status(404).send("Product not found");
  }
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let products = JSON.parse(fs.readFileSync(DATA_PATH));
  products = products.filter((p) => p.id !== id);
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
