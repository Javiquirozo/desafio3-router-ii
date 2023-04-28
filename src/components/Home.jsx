import React from "react";
import "./Home.css"; // Importamos nuestro archivo de estilos
import pokemonLogo from "../assets/imgs/pokemonLogo.png";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">¡Bienvenid@ maestr@ Pokemon!</h1>
      <img
        className="home-image"
        src={pokemonLogo}
        alt="Pokemon logo"
      />
    </div>
  );
}
