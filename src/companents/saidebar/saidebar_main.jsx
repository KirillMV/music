import React from "react";
import * as S from "./saidebar_main_s";
import SidebarPersonal from "./sidebar_personal";
import SidebarBlock from "./sidebar_block";

function MainSidebar() {
  return (
    <S.mainSidebar className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarBlock />
    </S.mainSidebar>
  );
}

export default MainSidebar;
