const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mes",
    features: ["Con anuncios", "Calidad estándar", "Saltos limitados"],
    featured: false,
  },
  {
    name: "Premium",
    price: "$5.99",
    period: "/mes",
    features: ["Sin anuncios", "Alta fidelidad 24 bits", "Descarga offline", "Saltos ilimitados"],
    featured: true,
  },
  {
    name: "Familiar",
    price: "$9.99",
    period: "/mes",
    features: ["Hasta 6 cuentas", "Todo lo de Premium", "Control parental", "Mix familiar"],
    featured: false,
  },
];

const Check = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function Pricing() {
  return (
    <section className="section section-soft" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Planes</span>
          <h2>Elige cómo quieres escuchar</h2>
          <p>Empieza gratis y mejora a Premium cuando quieras. Sin permanencia.</p>
        </div>

        <div className="grid-3">
          {plans.map((plan) => (
            <div className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="tag">Más popular</span>}
              <span className="plan">{plan.name}</span>
              <div className="price">
                {plan.price} <span>{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn btn-block ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                Elegir {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
