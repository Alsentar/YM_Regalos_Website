import React from "react";

import "./IntrosectionStyle.css";

function Introsection() {
  return (
    <section className="intro-section">
      <div className="intro-overlay">
        <div className="intro-content">
          <h1 className="intro-title">
            <span className="intro-script">Regalos Únicos</span>
            <span className="intro-serif"> para </span>
            <br />
            <span className="intro-serif">Momentos Especiales</span>
          </h1>

          <div className="intro-divider"></div>

          <p className="intro-description">
            Diseña tu bandeja personalizada
            <br />y sorprende a tus seres queridos.
          </p>

          <button className="intro-button">Crear tu Bandeja</button>
        </div>
      </div>
    </section>
  );
}

export default Introsection;
