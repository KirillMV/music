import React from "react";
import "../companents_styles.css";
import PlaylistItem from "./playlisy_title";
import { useState } from "react";

function ContentPlaylist() {

let [music,setMusic] = useState('')
 fetch("https://painassasin.online/catalog/track/all/")
  .then((response) => {
      return (response.json().then((data) => {
        
          
          setMusic(data.map(p =>PlaylistItem(p)))
      }))
  });

console.log(music);




  // fetch("https://painassasin.online/catalog/track/all/")
  //   .then((res) => res.json())
  //   .then((posts) => {
  //     console.log(posts);
  //     music = posts.map((song) => PlaylistItem(song));
  //     console.log(music);
  //   });
  return (<div className="content__playlist playlist">{music}</div>)
}

export default ContentPlaylist
