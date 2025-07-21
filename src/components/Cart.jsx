import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const increase = (item) => {
    increaseQuantity(item.id);
  };

  const decrease = (item) => {
    decreaseQuantity(item.id);
  };

  return (
    <section className="cart-container">
      <h2 className="cart-title">Товари у кошику</h2>
      <Link to="/" className="back-link">
        Назад до покупок
      </Link>

      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-image2">
                <img
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="product-info">
                <p className="product-name-cart">{item.name}</p>
                <button
                  className="remove-link"
                  onClick={() => removeFromCart(item.id)}
                >
                  Видалити
                </button>
              </div>
              <div className="product-price">
                <strong></strong>
              </div>
              <div className="product-quantity">
                <button
                  className="quantity-button"
                  onClick={() => decrease(item)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="quantity-input"
                />
                <button
                  className="quantity-button"
                  onClick={() => increase(item)}
                >
                  +
                </button>
              </div>
              <div className="product-total">
                <strong>{item.price * item.quantity} грн</strong>
              </div>
            </div>
          ))}

          <div className="cart-footer">
            <span>До оплати:</span>
            <span className="total-price">
              <strong>
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}{" "}
                грн
              </strong>
            </span>

            <button className="checkout-btn">Оплата</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
