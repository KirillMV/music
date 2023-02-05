import React from "react";
import "../companents_styles.css";

function CenterBlockSearch() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use href="img/icon/sprite.svg"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}


export default CenterBlockSearch