import React from "react";
import FilterButton from "./filterButtons";
import "../companents_style.css";
const { useState } = React;

function FilterButtons() {
  return (
    <React.Fragment>
      <div className="dropdown">
        <FilterButton name={"исполнителю"} />
      </div>

      <div className="dropdown">
        <FilterButton name={"году выпуска"} />
      </div>

      <div className="dropdown">
        <FilterButton name={"жанру"} />
      </div>
    </React.Fragment>
  );
}

export default FilterButtons;
