import React from "react";

const Else = () => {
  return (
    <>
      <div className="garden-home-section">
        <img
          src="../img/body_img/everything.svg"
          alt="Garden tools"
          className="garden-home-img"
        />
        <div className="garden-home-text">
          <h2>Товари для дому та саду</h2>
          <p>Товари на різні випадки життя</p>
          <ul>
            <img src="../img/body_img/Group.svg" />
            <li>Інструменти</li>
            <img src="../img/body_img/Group.svg" />
            <li>Миючі засоби</li>
            <img src="../img/body_img/Group.svg" />
            <li>Товари для будівництва</li>
            <img src="../img/body_img/Group.svg" />
            <li>Товари для дому</li>
          </ul>
          <button>Дізнатись більше</button>
        </div>
      </div>
      <section className="something_else_section">
        <h2>Декілька інших категорій</h2>
        <h4>Найпопулярніші категорії</h4>
        <div className="popular_items">
          <div className="popular_item">
            <img src="../img/body_img/boy.svg" alt="" />
            <h3>Спортивні товари</h3>
            <p>Спортивний одяг та аксесуари</p>
          </div>
          <div className="popular_item">
            <img src="../img/body_img/cloth.svg" alt="" />
            <h3>Одяг</h3>
            <p>Одяг та взуття для дітей та дорослих</p>
          </div>
          <div className="popular_item">
            <img src="../img/body_img/Apple.svg" alt="" />
            <h3>Техніка</h3>
            <p>Техніка та аксесуари</p>
          </div>
        </div>
      </section>
      <section className="used_items_section">
        <h2>Уживаний товар</h2>
        <h4>Заощаджуйте на товарі</h4>
        <div className="used_items_container">
          <div className="used_item">
            <img src="../img/body_img/wash.svg" alt="Пральна машина" />
            <h3>Пральна машина Samsung</h3>
            <p>6650 грн</p>
          </div>
          <div className="used_item">
            <img src="../img/body_img/bicycle.svg" alt="Велосипед" />
            <h3>Велосипед</h3>
            <p>5000 грн</p>
          </div>
          <div className="used_item">
            <img src="../img/body_img/Audi.svg" alt="Диски Audi" />
            <h3>Диски титанові Audi A6 C8 R21</h3>
            <p>21000 грн</p>
          </div>
          <div className="used_item">
            <img src="../img/body_img/freez.svg" alt="Холодильник" />
            <h3>Холодильник</h3>
            <p>11999 грн</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Else;
