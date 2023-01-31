import React from "react";
import "../companents_style.css";
const { useState } = React;

function FilterButton({ name }) {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <div
        className="filter__button _btn-text"
        onClick={() => setVisible(!visible)}
      >
        {name}
      </div>
      {visible && <div className="filter__button-dropdown"></div>}
    </React.Fragment>
  );
}

export default FilterButton;
