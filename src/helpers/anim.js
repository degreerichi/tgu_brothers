import ScrollMagic from "scrollmagic";
import { TweenMax, CSSPlugin, gsap } from "gsap/all";

gsap.registerPlugin(CSSPlugin);

export const addScene = (enter, leave, element)=>{
    return new ScrollMagic.Scene({
        duration: element.offsetHeight,
        triggerElement: element
    })
    .on("add", leave)
    .on("enter", enter)
    .on("leave", leave)
    .addTo(new ScrollMagic.Controller());
}

export const fadeInRight = (elem, duration)=>{
    TweenMax.fromTo(elem, {
        css: {
            transform: "translateX(-10%)",
            opacity: 0 
        }
    },{
        css: {
            transform: "translateX(0%)",
            opacity: 1
        }, duration: duration
    });
}

export const fadeOutLeft = (elem, duration)=>{
    TweenMax.fromTo(elem, {
        css: {
            transform: "translateX(0%)",
            opacity: 1
        }
    },{
        css: {
            transform: "translateX(-10%)",
            opacity: 0 
        }, duration: duration
    });
}

export const fadeInUp = (elem, duration)=>{
    TweenMax.fromTo(elem, {
        css: {
            transform: "translateY(10%)",
            opacity: 0 
        }
    },{
        css: {
            transform: "translateY(0%)",
            opacity: 1
        }, duration: duration
    });
}

export const fadeInDown = (elem, duration)=>{
    TweenMax.fromTo(elem, {
        css: {
            transform: "translateY(-10%)",
            opacity: 0 
        }
    },{
        css: {
            transform: "translateY(0%)",
            opacity: 1
        }, duration: duration
    });
}

export const fadeOutUp = (elem, duration)=>{
    TweenMax.fromTo(elem, {
        css: {
            transform: "translateY(0%)",
            opacity: 1
        }
    },{
        css: {
            transform: "translateY(-10%)",
            opacity: 0 
        }, duration: duration
    });
}

export const fadeOutDown = (elem, duration)=>{
    TweenMax.fromTo(elem, {
        css: {
            transform: "translateY(0%)",
            opacity: 1
        }
    },{
        css: {
            transform: "translateY(10%)",
            opacity: 0 
        }, duration: duration
    });
}

export const tm = TweenMax;