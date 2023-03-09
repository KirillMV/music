import React from "react";
import * as S from "./main-s";
import MainNav from "./main_nav";
import MainCenterBlock from "../centerblock/main_centerblock";
import MainSidebar from "../saidebar/saidebar_main";

function Main() {
  return (
    <S.mainS className="main">
      <MainNav />
      <MainCenterBlock />
      <MainSidebar />
    </S.mainS>
  );
}

export default Main;
