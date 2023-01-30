import React from "react";
import "../companents_style.css";

function PlaylistItem(props) {
  return (
    <div className="playlist__item ">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music"></svg>
          </div>
          <div className="track__title-text">{props.name}</div>
        </div>
        <div className="track__author">{props.author}</div>
        <div className="track__album">{props.album}</div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time"></svg>
          <span className="track__time-text">{props.duration_in_seconds}</span>
        </div>
      </div>
    </div>
  );
}
export default PlaylistItem;
