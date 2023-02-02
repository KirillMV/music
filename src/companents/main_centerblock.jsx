import React from "react";
import "../companents_styles.css";
import CenterBlockSearch from "./centerblock_search";
import CenterBlockFilters from "./centroblock_filters";
import CenterblockContent from "./centerblock_content";

function MainCenterBlock() {
  return (
    <div className="main__centerblock centerblock">
    
      <CenterBlockSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <CenterBlockFilters />
      <CenterblockContent />
    
    </div>
  );
}

export default MainCenterBlock;