import React from "react";
import "../companents_styles.css";
import MainNav from "./main_nav";
import MainCenterBlock from "./main_centerblock";
import MainSidebar from "./saidebar_main";

function Main() {
  return (
    <div className="main">
      <MainNav />
      <MainCenterBlock />
      <MainSidebar />
    </div>
  );
}

export default Main;
