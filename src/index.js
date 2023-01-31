import React from "react";
import ReactDOM from "react-dom/client";
import FilterButtons from "./companents/filter_buttons_logick";
import Burger from "./companents/burger";
import PlaylistItem from "./companents/playlist_title";

const root = ReactDOM.createRoot(
    document.querySelector(".centerblock__filter")
  );

  root.render(
    <FilterButtons/>
   );


const brg = ReactDOM.createRoot(document.querySelector(".main__nav"));
brg.render(<Burger />);


const playlist = ReactDOM.createRoot(
  document.querySelector(".content__playlist")
);

fetch("https://painassasin.online/catalog/track/all/")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    let music = posts.map((song) => PlaylistItem(song));
    playlist.render(music);
  });
