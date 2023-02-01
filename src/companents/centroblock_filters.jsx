import React from "react";
import FilterButton from "./filter_buttons";
import "../companents_styles.css";
const { useState } = React;

function CenterBlockFilters() {
  let [visibleAll, setVisibleAll] = useState(false);

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="dropdown">
        <FilterButton
          visible={visibleAll}
          setVisible={setVisibleAll}
          name={"исполнителю"}
        />
      </div>

      <div className="dropdown">
        <FilterButton
          visible={visibleAll}
          setVisible={setVisibleAll}
          name={"году выпуска"}
        />
      </div>

      <div className="dropdown">
        <FilterButton
          visible={visibleAll}
          setVisible={setVisibleAll}
          name={"жанру"}
        />
      </div>
    </div>
  );
}

export default CenterBlockFilters;
