import React from "react";
import "../companents_styles.css";

function SidebarItem({number}){
    return(
        <div className="sidebar__item">
        <a className="sidebar__link">
            <img className="sidebar__img" src={`img/playlist${number}.png`} alt="day's playlist"/>
        </a>
    </div>
    )
}

export default SidebarItem