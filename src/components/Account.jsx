import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Account = () => {
  const [username, setUsername] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = Cookies.get("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchProducts(storedUsername);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchProducts = async (username) => {
  try {
    const token = Cookies.get("access_token");
    if (!token) {
      throw new Error("Не знайдено токен доступу.");
    }

    const response = await fetch(`http://localhost:8000/api/products/username/${username}/`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Не вдалося отримати товари.");
    }

    const data = await response.json();
    setProducts(data);
  } catch (error) {
    console.error("Помилка при отриманні товарів: ", error);
  }
};

  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("username");
    navigate("/login");
  };

  return (
    <div className="account-container">
      <h1 style={{ color: 'black' }}>Привіт, {username}!</h1>
      <h2 style={{ color: 'black' }}>Ваші товари</h2>

      {}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ color: 'black' }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              {}
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'black' }}>У вас поки немає товарів.</p>
      )}

      {}
      <button onClick={handleLogout}>Вийти</button>
    </div>
  );
};

export default Account;
