// import React, { useContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
//
// const Product = ({ products }) => {
//   const { id } = useParams();
//   const { cart, addToCart } = useContext(CartContext);
//   const product = products.find((p) => p.id === parseInt(id));
//   const [quantity, setQuantity] = useState(1);
//   const [delivery, setDelivery] = useState("post");
//   const [paymentPlan, setPaymentPlan] = useState("");
//
//   if (!product) return <h2>Товар не знайдено</h2>;
//
//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () =>
//     setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
//
//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//   };
//
//   return (
//     <div className="product-container">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <h1 className="product-title">{product.name}</h1>
//         <p className="product-price">{product.price} грн</p>
//         <button className="add-to-cart" onClick={handleAddToCart}>
//           <span className="cart-icon">&#128722;</span> +Додати до кошика
//         </button>
//
//         <div className="quantity-container">
//           <span>Кількість</span>
//           <button className="quantity-button" onClick={decreaseQuantity}>
//             -
//           </button>
//           <span className="quantity-value">{quantity}</span>
//           <button className="quantity-button" onClick={increaseQuantity}>
//             +
//           </button>
//         </div>
//
//         <div className="product-options">
//           <div className="option">
//             <label>
//               <input
//                 type="radio"
//                 name="delivery"
//                 value="post"
//                 checked={delivery === "post"}
//                 onChange={() => setDelivery("post")}
//               />{" "}
//               Доставка у відділення пошти
//             </label>
//           </div>
//           <div className="option">
//             <label>
//               <input
//                 type="radio"
//                 name="delivery"
//                 value="courier"
//                 checked={delivery === "courier"}
//                 onChange={() => setDelivery("courier")}
//               />{" "}
//               Доставка кур’єром
//             </label>
//           </div>
//           <div className="option">
//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//                 checked={paymentPlan !== ""}
//                 onChange={() => setPaymentPlan("1 місяць")}
//               />{" "}
//               Купити на виплату
//               <select
//                 value={paymentPlan}
//                 onChange={(e) => setPaymentPlan(e.target.value)}
//               >
//                 <option value="">Оберіть період</option>
//                 <option value="1 місяць">1 місяць</option>
//                 <option value="3 місяці">3 місяці</option>
//                 <option value="6 місяців">6 місяців</option>
//               </select>
//             </label>
//           </div>
//         </div>
//       </div>
//
//       <div className="container">
//         <div className="additional-info__wrapper">
//           <div className="cart-info">
//             <p className="product-info">
//               Ціни у інших продавців від {product.price * 0.95} грн до{" "}
//               {product.price * 1.2} грн <br />
//               Вживані ~ {product.price * 0.4} грн
//             </p>
//             <p className="free-shipping">БЕЗКОШТОВНА ДОСТАВКА</p>
//             <div className="product-specs">
//               <p>Розмір: {product.size || "Невідомо"}</p>
//               <p>Матеріал: {product.upperMaterial || "Невідомо"}</p>
//               <p>Арт.: {product.article || "Немає"}</p>
//             </div>
//             {cart.length > 0 ? <p></p> : <p></p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Product;
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "./Products";

const Product = () => {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState("post");
  const [paymentPlan, setPaymentPlan] = useState("");

  if (!product) return <h2>Товар не знайдено</h2>;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">{product.price} грн</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <span className="cart-icon">&#128722;</span> +Додати до кошика
        </button>

        <div className="quantity-container">
          <span>Кількість</span>
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <span className="quantity-value">{quantity}</span>
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>

        <div className="product-options">
          <div className="option">
            <label>
              <input
                type="radio"
                name="delivery"
                value="post"
                checked={delivery === "post"}
                onChange={() => setDelivery("post")}
              />{" "}
              Доставка у відділення пошти
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="radio"
                name="delivery"
                value="courier"
                checked={delivery === "courier"}
                onChange={() => setDelivery("courier")}
              />{" "}
              Доставка кур’єром
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentPlan !== ""}
                onChange={() => setPaymentPlan("1 місяць")}
              />{" "}
              Купити на виплату
              <select
                value={paymentPlan}
                onChange={(e) => setPaymentPlan(e.target.value)}
              >
                <option value="">Оберіть період</option>
                <option value="1 місяць">1 місяць</option>
                <option value="3 місяці">3 місяці</option>
                <option value="6 місяців">6 місяців</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="additional-info__wrapper">
          <div className="cart-info">
            <p className="product-info">
              Ціни у інших продавців від {product.price * 0.95} грн до {product.price * 1.2} грн <br />
              Вживані ~ {product.price * 0.4} грн
            </p>
            <p className="free-shipping">БЕЗКОШТОВНА ДОСТАВКА</p>
            <div className="product-specs">
              <p>Розмір: {product.size || "Невідомо"}</p>
              <p>Матеріал: {product.upperMaterial || "Невідомо"}</p>
              <p>Арт.: {product.article || "Немає"}</p>
            </div>
            {cart.length > 0 ? (
              <p></p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
