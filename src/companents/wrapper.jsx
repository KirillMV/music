import React from "react";
import "../companents_styles.css";
import Main from "./main";
import Bar from "./bar";

function Wrapper(){
    return(
        <div className="wrapper">
            <div className="container">
                <Main/>
                <Bar/>
                <footer className="footer"></footer>


            </div>
        </div>
    )
}

export default Wrapper