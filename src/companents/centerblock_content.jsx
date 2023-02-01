import React from "react";
import "../companents_styles.css";
import ContentPlaylist from "./content_playlist";
import MainContentTitle from "./main_content_title"

function CenterblockContent(){
    return(
        <div className="centerblock__conten">
        <MainContentTitle/>
        <ContentPlaylist/>
        </div>
    )
}

export default CenterblockContent;