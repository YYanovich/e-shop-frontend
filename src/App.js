import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  RegisterLogin,
  Cart,
  Product,
  Sale,
  Cproduct,
  Else,
  Footer,
} from "./components";
import Account from "./components/Account";
import { CartProvider } from "./context/CartContext";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не вдалося завантажити товари");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Помилка при отриманні товарів:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/login" element={<RegisterLogin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/"
              element={
                <>
                  {isLoading && <p>Завантаження...</p>}
                  {error && <p style={{ color: "red" }}>Помилка: {error}</p>}
                  {products.length === 0 && !isLoading && !error && <p>Немає товарів</p>}
                  <Sale />
                  <Cproduct products={products} />
                  <Else />
                </>
              }
            />
          </Routes>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App