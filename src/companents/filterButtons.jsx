import React from "react";
import "../companents_style.css";

function FilterButtons(props) {
  return <div className="filter__button _btn-text">{props.name}</div>;
}

export default FilterButtons;
