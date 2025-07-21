import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="white_footer_line"></div>

      <div className="footer_logo_section">
        <img
          src="../img/header_img/logo.svg"
          alt="logo"
          className="footer_logo"
        />
        <p className="footer_title">YBuy</p>
        <p className="footer_description">
          Маркетплейс, де Ви зможете знайти товари на будь-яку потребу
        </p>
      </div>

      <div className="footer_column">
        <h3 className="footer_heading">Юридична інформація</h3>
        <ul className="footer_links">
          <li>
            <a href="#">Умови використання</a>
          </li>
          <li>
            <a href="#">Політика конфіденційності</a>
          </li>
          <li>
            <a href="#">Правила публікації оголошень</a>
          </li>
        </ul>
      </div>

      <div className="footer_column">
        <h3 className="footer_heading">Безпека</h3>
        <ul className="footer_links">
          <li>
            <a href="#">Захист даних користувачів</a>
          </li>
          <li>
            <a href="#">Розділ FAQ</a>
          </li>
          <li>
            <a href="#">Інструменти для виявлення шахраїв</a>
          </li>
        </ul>
      </div>

      <div className="footer_column">
        <h3 className="footer_heading">Допомога</h3>
        <ul className="footer_links">
          <li>
            <a href="#">Оплата</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Зворотній зв’язок</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
