import { Link, useLocation } from "react-router-dom";
import React from "react";
import "../css/header.css";

const Header = () =>{
  // Usei para indentificar a rota Atual
  const location = useLocation();
  // Css para cada opção
  const univers = {
    backgroundImage:
      location.pathname === "/universe" ? 'url("/universe.avif")' : 'url("")',
    backgroundSize: "100%",
    textShadow: "0px 0px 10px rgba(0, 0, 0,1)",
    animation: location.pathname ===  "/universe" ? "brilho 1.5s infinite alternate" : "no-brilho"
  };
  const mars = {
    backgroundImage:
      location.pathname === "/mars" ? 'url("/mars.avif")' : 'url("")',
    backgroundSize: "100%",
    textShadow: "0px 0px 10px rgba(0, 0, 0,1)",
    animation: location.pathname ===  "/mars" ? "brilho 1.5s infinite alternate" : "no-brilho"
  };
  const earth = {
    backgroundImage:
      location.pathname === "/earth" ? 'url("/earth.avif")' : 'url("")',
    backgroundSize: "100%",
    textShadow: "0px 0px 10px rgba(0, 0, 0,1)",
    animation: location.pathname ===  "/earth" ? "brilho 1.5s infinite alternate" : "no-brilho"
  };
  const home = {
    backgroundImage:
      location.pathname === "/" ? 'url("/home.jpg")' : 'url("")',
    backgroundSize: "100%",
    textShadow: "0px 0px 10px rgba(0, 0, 0,1)",
    animation: location.pathname ===  "/" ? "brilho 1.5s infinite alternate" : "no-brilho"
  };

  return (
    <div className="menu">
      <Link to="/" className="home" style={home}>
        Home
      </Link>

      <Link to="/earth" className="earth" style={earth}>
        Terra
      </Link>

      <Link to="/universe" className="univers" style={univers}>
        Universo
      </Link>

      <Link to="/mars" className="mars" style={mars}>
        Marte
      </Link>
    </div>
  );
}

export default Header;
