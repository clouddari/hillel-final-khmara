import LoginPage from "./pages/LoginPage";
import ProductsTable from "./pages/ProductsTable";
import ProductPreview from "./pages/ProductPreview";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/preview" element={<ProductPreview />} />
            <Route path="/products" element={<ProductsTable />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
