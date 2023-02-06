import React from "react";
import "../companents_styles.css";
import * as S from "./sidebar_item_s.js";
function SidebarItem({ number }) {
  return (
    <S.sidebarItem className="sidebar__item">
      <S.sidebarLink className="sidebar__link">
        <S.sidebarImg
          className="sidebar__img"
          src={`img/playlist${number}.png`}
          alt="day's playlist"
        />
      </S.sidebarLink>
    </S.sidebarItem>
  );
}

export default SidebarItem;
