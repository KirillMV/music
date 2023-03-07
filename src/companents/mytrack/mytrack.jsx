import React from "react";
import * as S from "./mytrack_s";
import Bar from "../functional_companents/bar";
import MainNav from "../main/main_nav";
import CenterBlockSearch from "../centerblock/centerblock_search";

function MyTrack() {
  return (
    <div>
      <MainNav></MainNav>
      <CenterBlockSearch></CenterBlockSearch>
      <Bar></Bar>
    </div>
  );
}

export default MyTrack;
