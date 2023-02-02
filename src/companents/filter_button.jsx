import React from "react";
import "../companents_styles.css";
const { useState } = React;


function FilterButton({ name, visible,onSelect}) {
  let [setVisible] = useState(name)

  let Clicker = (e) => {
    if(visible){
     onSelect('null')
    }else{
      onSelect(name)
    }
  
  };

  return (
    <React.Fragment>
      <div className="filter__button _btn-text" onClick={Clicker}>
        {name}
      </div>
      {visible && <div className="filter__button-dropdown"></div>}
    </React.Fragment>
  );
}

export default FilterButton;
