import React from "react";
import "./companents_styles.css";
import * as S from "./wrapper_s";
import Main from "./main/main";
import Bar from "./functional_companents/bar";


function Wrapper() {
  return (
    <S.wrapperS className="wrapper">
      <S.containerS className="container">
        <Main />
        <Bar />
        <footer className="footer"></footer>
      </S.containerS>
    </S.wrapperS>
  );
}

export default Wrapper;
