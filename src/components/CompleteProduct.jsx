import React from "react";
import { Link } from "react-router-dom";
import products from "../components/Products";

const Cproduct = () => {
  return (
    <section className="best_seller_section">
      <h2>Хіти продаж</h2>
      <div className="best_seller_items">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="best_seller_item">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} грн</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Cproduct;
