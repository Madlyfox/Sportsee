import React from "react";
import logo from "../img/logo.png";
import "../scss/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo Sportsee" />
      <div className="links">
        <h1 className="link">Acceuil</h1>
        <h1 className="link">Profil</h1>
        <h1 className="link">Réglage</h1>
        <h1 className="link">Communauté</h1>
      </div>
    </div>
  );
};

export default Navbar;
