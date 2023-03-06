import React, { useEffect, useRef } from "react";
import * as S from "./signup_s";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const SignUp = () => {
  const [switcher, setSwitcher] = useState(false);

  const logimp = useRef(null);
  const passimp = useRef(null);
  const passimpret = useRef(null);

  useEffect(() => {});

  function clicer() {
    if (
      logimp.current.value &&
      passimp.current.value &&
      passimpret.current.value &&
      passimp.current.value === passimpret.current.value
    ) {
      
      setSwitcher(true);
    }
  }
  if (switcher) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return (
    <S.blackBox>
      <S.SignBox>
        <S.logo src="/img/logo_black.svg" alt="Logo"></S.logo>
        <S.loginInput ref={logimp} type="text" placeholder="Логин" />
        <S.passwordInput ref={passimp} type="password" placeholder="Пароль" />
        <S.passwordInputrepeat
          ref={passimpret}
          type="password"
          placeholder="Повторите пароль"
        ></S.passwordInputrepeat>
        <S.buttonReg onClick={clicer}>Зарегистрироваться</S.buttonReg>
      </S.SignBox>
    </S.blackBox>
  );
};
