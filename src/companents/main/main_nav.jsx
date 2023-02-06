import React from "react";
import * as S from "./main_nav-s";
import "../companents_styles.css";
const { useState } = React;

const MainNav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.mainNav className="main__nav nav">
      <S.navLogo className="nav__logo logo">
        <S.logoImage
          className="logo__image"
          src="img/logo.png"
          alt="logo"
        ></S.logoImage>
      </S.navLogo>
      <S.navBurger className="nav__burger burger" onClick={toggleVisibility}>
        <S.burgerLine className="burger__line"></S.burgerLine>
        <S.burgerLine className="burger__line"></S.burgerLine>
        <S.burgerLine className="burger__line"></S.burgerLine>
      </S.navBurger>

      {visible && (
        <S.navMenu className="nav__menu menu">
          <S.menuList className="menu__list">
            <S.menuItem className="menu__item">
              <S.menuLink href="http://" className="menu__link">
                Главное
              </S.menuLink>
            </S.menuItem>
            <S.menuItem className="menu__item">
              <S.menuLink href="http://" className="menu__link">
                Мой плейлист
              </S.menuLink>
            </S.menuItem>
            <S.menuItem className="menu__item">
              <S.menuLink href="http://" className="menu__link">
                Войти
              </S.menuLink>
            </S.menuItem>
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
};
export default MainNav;
