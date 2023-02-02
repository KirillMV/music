import React from "react";
import "../companents_styles.css";

function MainContentTitle() {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use href="img/icon/sprite.svg"></use>
        </svg>
      </div>
    </div>
  );
}

export default MainContentTitle