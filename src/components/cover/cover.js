import React from "react";
import { } from "react-router-dom";
import './cover.css'

const Cover = (props) => {
    var coverDynamicStyle = {
        backgroundImage: `url(${props.backgroundImage})`,
    }

    var coverImageOverlayDynamicStyle = {
        position: "absolute",
    }

    return (
        <div id="home_cover_container" className="fixed-bg" style={coverDynamicStyle}>

            <div className="cover_image_overlay" style={coverImageOverlayDynamicStyle}></div>
            <div>
                {props.children}
            </div>


        </div >
    );
}

export default Cover;