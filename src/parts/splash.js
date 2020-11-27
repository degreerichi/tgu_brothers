import React, { useRef, useEffect } from "react";
import hashtag from "../img/hashtag.png";
import video from "../media/splash.mp4";
import { 
    addScene, 
    fadeInRight, 
    fadeOutLeft 
} from "../helpers/anim";

export const Splash = ()=>{

    let hashtagElement = useRef();
    let splashWrapper = useRef();
    let duration = 0.8;

    let animateIn = ()=>{
        fadeInRight(hashtagElement.current, duration);
    }

    let animateOut = ()=>{
        fadeOutLeft(hashtagElement.current, duration);
    }

    useEffect(()=>{

        addScene(
            animateIn, 
            animateOut, 
            splashWrapper.current
        );
        
    }, []);

    return(
        <>
            <div className="splash" id="inicio" ref={splashWrapper}>
                <video autoPlay muted loop preload="true" className="splash-video-background">
                    <source src={video} type="video/mp4"/>
                </video>
                <div className="splash-image-wrapper">
                    <img src={hashtag} alt="" ref={hashtagElement}/>
                </div>
            </div>
        </>
    );
}