import React, { useState } from "react";
import { 
    Nav,
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    NavbarText, 
    Collapse,
    NavItem,
    NavLink
} from "reactstrap";
import brotherTguLogo from "../img/brother_tgu_logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Webnav = ()=>{

    let [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = ()=>{
        setCollapsed(!collapsed);
    }

    return(
        <>
            <Navbar expand="md" sticky="top" className="bg-white">
                <NavbarBrand href="#inicio" className="mr-auto">
                    <img src={brotherTguLogo} alt=""/>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" >
                    <FontAwesomeIcon icon={faBars}/>
                </NavbarToggler>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#escuela">Escuela</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#cursos">Cursos</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="#home">At Home</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink href="#equipo">Equipo</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#sosloquehaces">#SosLoQueHaces</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contacto">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarText className="d-none d-md-flex">
                    <NavLink href="#!" className="text-black">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </NavLink>
                    <NavLink href="#!" className="text-black">
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                    </NavLink>
                    <NavLink href="#!" className="text-black">
                        <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                    </NavLink>
                </NavbarText>
            </Navbar>
        </>
    );
}