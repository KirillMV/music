import React from "react";
import "../companents_styles.css";
import SidebarItem from "./sidebar_item";

function SidebarBlock() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SidebarItem number={"01"} />
        <SidebarItem number={"01"} />
        <SidebarItem number={"01"} />
      </div>
    </div>
  );
}

export default SidebarBlock
