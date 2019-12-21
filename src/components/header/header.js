import React from "react";
import { } from "react-router-dom";
import { Navbar } from "react-bootstrap"
import Logo from '../../resources/images/logo.png'
import './header.css'

function Header() {
    return (
        <Navbar className="menu" style={navBarContainerStyle} expand="lg">
            <Navbar.Brand href="#home" style={brandStyle}>
                <img style={brandImageStyle} alt="" src={Logo} height="50" />
            </Navbar.Brand>
            {/* <Nav.Link style={menuItemStyle} href="#home">Inicio</Nav.Link>
            <Nav.Link style={menuItemStyle} href="#home">Sobre nós</Nav.Link> */}

        </Navbar>
    );
}

var navBarContainerStyle = {
    verticalAlign: "middle",
    position: "absolute",
    top: 10,
    width: "100%",
}

var brandStyle = {
    verticalAlign: "middle",
    height: "100%",
}

var brandImageStyle = {
    paddingTop: "2%",
    paddingLeft: "5%",
}

// var menuItemStyle = {
//     height: 800,
//     fontWeight: 100,
//     textTransform: "uppercase",
//     color: "#fff",
//     textDecoration: "none",
//     paddingLeft: 120,
// }

export default Header;