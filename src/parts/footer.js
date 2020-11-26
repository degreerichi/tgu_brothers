import React from "react";
import jabali from "../img/jabali.svg";

export const Footer = ()=>{
    return(
        <div className="footer">
            <img className="footer-logo mb-4" src={jabali} alt=""/>
            <h4>Brothers TGU</h4>
            <p className="mb-0 text-center"><b>Tegucigalpa, Honduras</b></p>
            <p className="mb-0 text-center"><b>Email: tegucigalpa@brotherland.com</b></p>
            <p className="mb-0 footer-copyright"><b>2020 | Todos los derechos reservados</b></p>
        </div>
    );
}