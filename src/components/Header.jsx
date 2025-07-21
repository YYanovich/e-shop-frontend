import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setItemsInCart(cart.reduce((acc, item) => acc + item.quantity, 0) || 0);

    const storedUsername = Cookies.get("username");
    setUsername(storedUsername);
  }, [cart]);

  return (
    <header className="header_container">
      <div className="header_logo">
        <Link to="/">
          <img src="../img/header_img/logo.svg" alt="YBuy" />
        </Link>
      </div>
      <ul className="nav_menu_items">
        <li className="nav_menu_item">Категорії</li>
        <li className="nav_menu_item">Пошук</li>
        <li className="nav_menu_item">Вибране</li>
      </ul>
      <p className="support">Підтримка</p>
      <div className="header_right">
        <div className="header_diya">
          <img src="../img/header_img/diya.svg" alt="Дія" />
        </div>
        <div className="header_people">
          {username ? (
            <Link to="/account">
              <span>Привіт, {username}!</span>
            </Link>
          ) : (
            <Link to="/login">
              <img src="../img/header_img/people.svg" alt="Профіль" />
            </Link>
          )}
        </div>
        <div className="header_cart">
          <Link to="/cart">
            <span className="cart-count">{itemsInCart}</span>
            <img src="../img/header_img/cart.svg" alt="Кошик" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
