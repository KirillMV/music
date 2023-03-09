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
        
        let user = {
          email: `${loginp.current.value}@mail.com`,
          password: passinp.current.value,
        };
        setSwitcher(true);
  
        fetch(`https://painassasin.online/user/login/`, {
          method: "POST",
          headers:{
            'Content-Type':'application/json;charset=UTF-8'
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((posts) => {
             window.logInfo = posts
          });
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