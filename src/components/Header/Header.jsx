import React from "react";
import '../Header/Header.css'

const Header = () =>{
    return (
<header className="header">

<a href="#Home" className="logo"> <img className="abc" src='/images/logo.png' alt="Logo" /> Ambuj Patient Care </a>

<nav className="navbar">
    <a href="#Home">Home</a>
    <a href="#Services">Services</a> 
    <a href="#Contact">Contact</a>
    
</nav>

</header>
    );

};
export default Header;