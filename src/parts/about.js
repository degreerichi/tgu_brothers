import React, { useRef, useEffect } from "react";
import { 
    addScene, 
    fadeInUp, 
    fadeOutDown 
} from "../helpers/anim";

const About = ()=>{

    let aboutText = useRef();
    let duration = 0.8;

    let animateIn = ()=>{
        fadeInUp(aboutText.current, duration);
    }

    let animateOut = ()=>{
        fadeOutDown(aboutText.current, duration);
    }

    useEffect(()=>{

        addScene(
            animateIn,
            animateOut,
            aboutText.current
        );
        // eslint-disable-next-line
    }, []);

    return(
        <div className="about" id="escuela">
            <div className="container px-5 text-center" ref={aboutText}>
                <p>
                    Para Brother la mejor forma de aprender es haciendo, enfrentando problemas reales en entornos reales y de manera compartida. Enfrentarte al miedo, presentar un trabajo a un cliente real y verte dentro de una situación que te supere, que te ponga incómodo, que te haga dudar de vos mismo. Allí es cuando empezás a dar lo mejor de vos y a descubrir tu mejor “yo”. Brother es un viaje a través de una experiencia vital.
                </p>
                <p>
                    Brother es un colectivo, los grandes movimientos de pensamiento han nacido de colectivos de personas interactuando los unos con los otros, en un lugar que propicia que sucedan cosas. Ser creativo es una actitud ante la vida, crear es una forma de vivir. De hecho, podemos ser creativos las 24 horas del día. Esto implica superarse a uno mismo cada día. Explorar lugares desconocidos. Equivocarse.
                </p>
            </div>
        </div>
    );
}

export default About;