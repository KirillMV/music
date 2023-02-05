import React from "react";
import FilterButton from "../functional_companents/filter_button";
import "../companents_styles.css";
const { useState } = React;

function CenterBlockFilters() {
  let [selectedFilter, setSelectedFilter] = useState("null");

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="dropdown">
        <FilterButton
          visible={selectedFilter === "исполнителю"}
          onSelect={(select) => setSelectedFilter(select)}
          name={"исполнителю"}
        />
      </div>

      <div className="dropdown">
        <FilterButton
          visible={selectedFilter === "году выпуска"}
          onSelect={(select) => setSelectedFilter(select)}
          name={"году выпуска"}
        />
      </div>

      <div className="dropdown">
        <FilterButton
          visible={selectedFilter === "жанру"}
          onSelect={(select) => setSelectedFilter(select)}
          name={"жанру"}
        />
      </div>
    </div>
  );
}

export default CenterBlockFilters;
