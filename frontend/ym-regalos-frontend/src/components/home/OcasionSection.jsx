
import React from "react";

import "./OcasionSectionStyle.css";

function OcasionSection() {
  return (
    <section className="ocasion-section">
      <div className="ocasion-container">
        <div className="ocasion-heading">
          <h2>Crea la Bandeja Perfecta para Cada Ocasión</h2>
          <p>Elige, combina y crea el regalo ideal para cualquier celebración.</p>
        </div>

        <div className="excontainers">
          <article className="excontainer cumpleanos">
            <div className="card-overlay">
              <h3>Cumpleaños</h3>
            </div>
          </article>

          <article className="excontainer aniversarios">
            <div className="card-overlay">
              <h3>Aniversarios</h3>
            </div>
          </article>

          <article className="excontainer dias-especiales">
            <div className="card-overlay">
              <h3>Días Especiales</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default OcasionSection;