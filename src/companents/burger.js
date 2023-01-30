import React from "react";
import "../companents_style.css";


const { useState } = React;

const Burger = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <React.Fragment>
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        {visible && <div className="nav__menu menu"></div>}

        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>

        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Burger;
