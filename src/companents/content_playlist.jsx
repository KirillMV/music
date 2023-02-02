import React from "react";
import "../companents_styles.css";
import PlaylistItem from "./playlisy_title";
import { useState } from "react";
import { useEffect } from "react";

 window.music = []

function ContentPlaylist() {
let [album,setAlbum]= useState()
useEffect(()=>{
 fetch("https://painassasin.online/catalog/track/all/")
  .then((response) => response.json())
  .then((posts) => {
  setAlbum(posts.map((p)=>PlaylistItem(p)))
  })
},[])


  return (<div className="content__playlist playlist">{album}</div>)
}

export default ContentPlaylist
