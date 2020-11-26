import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const Preloader = ()=>{

    let [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        window.addEventListener("DOMContentLoaded", function(){
            setTimeout(()=>{
                setLoaded(true);
            }, 200);
        });
    }, [])

    return(
        <div className={`preloader ${loaded ? "hidden" : ""}`}>
            <FontAwesomeIcon icon={faCircleNotch} size="2x" spin={true}/>
        </div>
    )
}