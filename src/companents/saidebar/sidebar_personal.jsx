import React from "react";
import "../companents_styles.css";
import * as S from "./sidebar_personal-S";
function SidebarPersonal() {
  return (
    <S.sidebarPersonal className="sidebar__personal">
      <S.sidebarPersonalName className="sidebar__personal-name">
        Sergey.Ivanov
      </S.sidebarPersonalName>
      <S.sidebarAvatar className="sidebar__avatar"></S.sidebarAvatar>
    </S.sidebarPersonal>
  );
}

export default SidebarPersonal;
