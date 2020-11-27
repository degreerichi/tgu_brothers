import React from "react";
import hashtag from "../img/hashtag.png";
import video from "../media/splash.mp4";

export const Splash = ()=>{
    return(
        <>
            <div className="splash" id="inicio">
                <video autoPlay muted loop className="splash-video-background">
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="splash-image-wrapper">
                    <img src={hashtag} alt=""/>
                </div>
            </div>
        </>
    );
}