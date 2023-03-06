import React from "react";
import * as S from "./login_s";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState,useRef} from "react";


  export const Login = () => {
    const [switcher, setSwitcher] = useState(false);
  
    const loginp = useRef(null);
    const passinp = useRef(null);
    
  
    
  
    function clicer() {
      if (
        loginp.current.value &&
        passinp.current.value 
      ) {
        
        setSwitcher(true);
      }
    }
    if (switcher) {
      document.cookie= 'token'
      console.log(document.cookie);
      return  <Navigate to={"/"}></Navigate>;
    }

  return (
    <S.blackBox>
      <S.loginBox>
        <S.logo src="/img/logo_black.svg" alt="Logo"></S.logo>
        <S.loginInput ref={loginp} type="text" placeholder="Логин" />
        <S.passwordInput ref={passinp} type="password" placeholder="Пароль" />
        <S.buttonIn onClick={clicer}>Войти</S.buttonIn>
        <Link to="/signup">
          <S.buttonReg >Зарегистрироваться</S.buttonReg>
        </Link>
      </S.loginBox>
    </S.blackBox>
  );
  };