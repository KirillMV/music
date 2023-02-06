import React from "react";
import "../companents_styles.css";
import * as S from "./content_playlist_s";
import PlaylistItem from "./playlist_item";
import { useState } from "react";
import { useEffect } from "react";

window.music = [];

function ContentPlaylist() {
  let [album, setAlbum] = useState();
  useEffect(() => {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => response.json())
      .then((posts) => {
        setAlbum(posts.map((p) => PlaylistItem(p)));
      });
  }, []);

  return (
    <S.contentPlaylist className="content__playlist playlist">
      {album}
    </S.contentPlaylist>
  );
}

export default ContentPlaylist;
