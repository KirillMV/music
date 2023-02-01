import React from "react";
import "../companents_styles.css";
const { useState } = React;


function FilterButton({ name, visible, setVisible }) {
  // let [visible,setVisible] = useState(name)
  let [select, setSelect] = useState(false);

  let Clicker = (e) => {
    console.log(e.target.textContent);
    // setVisible(!visible)
    if (select) {
      setSelect((select = false));
    } else {
      setSelect((select = name === visible));
    }
  };

  return (
    <React.Fragment>
      <div className="filter__button _btn-text" onClick={Clicker}>
        {name}
      </div>
      {select && <div className="filter__button-dropdown"></div>}
    </React.Fragment>
  );
}

export default FilterButton;
