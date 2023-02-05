import React from "react";
import "../companents_styles.css";
import SidebarPersonal from "./sidebar_personal";
import SidebarBlock from "./sidebar_block";

function MainSidebar(){
    return(
        <div className="main__sidebar sidebar">
            <SidebarPersonal/>
            <SidebarBlock/>
        </div>       
    )
}

export default MainSidebar
