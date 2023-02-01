import React from "react";
import "../companents_styles.css";

function mainNav() {
  return (
    <React.Fragment>
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" class="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" class="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" class="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default mainNav