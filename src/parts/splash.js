import React from "react";
import hashtag from "../img/hashtag.png";

export const Splash = ()=>{
    return(
        <>
            <div className="splash" id="inicio">
                <div className="splash-image-wrapper">
                    <img src={hashtag} alt="" className="animate__animated animate__fadeIn animate__slow"/>
                </div>
            </div>
        </>
    );
}