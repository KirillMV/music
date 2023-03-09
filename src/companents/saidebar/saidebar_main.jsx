import React from "react";
import * as S from "./saidebar_main_s";
import SidebarBlock from "./sidebar_block"
import SidebarPersonal from  "./sidebar_personal"

function MainSidebar() {
  return (
    <S.mainSidebar className="main__sidebar sidebar">
      <SidebarPersonal/>
      <SidebarBlock />
    </S.mainSidebar>
  );
}

export default MainSidebar;
