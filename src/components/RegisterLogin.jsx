import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const RegisterLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) throw new Error("Помилка входу");
    const data = await response.json();

    Cookies.set("access_token", data.access, { expires: 7 });
    Cookies.set("username", data.user.username, { expires: 7 });

    alert("Вхід успішний!");
    navigate("/account");
  } catch (error) {
    alert("Помилка: " + error.message);
  }
};

const handleRegisterSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) throw new Error("Помилка реєстрації");
    const data = await response.json();

    Cookies.set("access_token", data.access, { expires: 7 });
    Cookies.set("username", data.user.username, { expires: 7 });

    alert("Реєстрація успішна!");
    navigate("/account");
  } catch (error) {
    alert("Помилка: " + error.message);
  }
};

  return (
    <div>
      <section className="form-container">
        {}
        <div className="form-box">
          <h2 className="form-title">Авторизація</h2>
          <p className="form-subtitle">Введіть дані наведені нижче</p>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Електронна адреса"
              required
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button type="submit" className="btn-login">Увійти</button>
            <Link to="/forgot-password" className="forgot-password">Забули пароль?</Link>
          </form>
        </div>

        {}
        <div className="form-box">
          <h2 className="form-title">Створити аккаунт</h2>
          <p className="form-subtitle">Введіть дані для реєстрації</p>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              placeholder="Ім'я користувача"
              required
              value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <input
              type="email"
              placeholder="Електронна адреса"
              required
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Пароль"
              required
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <button type="submit" className="btn-register">Створити аккаунт</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterLogin;
