import React, { useRef, useEffect } from "react";
import hashtag from "../img/hashtag.png";
import videoMp4 from "../media/splash.mp4";
import videoOgv from "../media/splash.ogv";
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
        // eslint-disable-next-line
    }, []);

    return(
        <>
            <div className="splash" id="inicio" ref={splashWrapper}>
                <video autoPlay muted loop preload="true" className="splash-video-background">
                    <source src={videoOgv} type="video/ogg"/>
                    <source src={videoMp4} type="video/mp4"/>
                </video>
                <div className="splash-image-wrapper">
                    <img src={hashtag} alt="" ref={hashtagElement}/>
                </div>
            </div>
        </>
    );
}