import React from "react";

import "./BenefitsSectionStyle.css";
import { Gift, Heart, Truck } from "lucide-react";

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <article className="benefit-item">
          <div className="benefit-icon">
            <Gift size={58} strokeWidth={1.8} />
          </div>

          <div className="benefit-text">
            <h5>Personaliza a tu Gusto</h5>
            <h6>Elige los productos perfectos.</h6>
          </div>
        </article>

        <article className="benefit-item">
          <div className="benefit-icon">
            <Heart size={58} strokeWidth={1.8} />
          </div>

          <div className="benefit-text">
            <h5>Detalles Elegantes</h5>
            <h6>Presentaciones inolvidables.</h6>
          </div>
        </article>

        <article className="benefit-item">
          <div className="benefit-icon">
            <Truck size={58} strokeWidth={1.8} />
          </div>

          <div className="benefit-text">
            <h5>Entrega Rápida</h5>
            <h6>Llevamos tu regalo a tiempo.</h6>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BenefitsSection;