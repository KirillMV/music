import React from "react";
import * as S from "./sidebar_block_s.js"
import SidebarItem from "./sidebar_item";

function SidebarBlock() {
  return (
    <S.sidebarBlock className="sidebar__block">
      <S.sidebarList className="sidebar__list">
        <SidebarItem number={"01"} />
        <SidebarItem number={"01"} />
        <SidebarItem number={"01"} />
      </S.sidebarList>
    </S.sidebarBlock>
  );
}

export default SidebarBlock
