const features = [
  {
    title: "Sonido sin pérdidas",
    text: "Audio en alta fidelidad hasta 24 bits. Escucha cada detalle como en el estudio.",
    icon: <path d="M3 12h2l2-7 4 16 3-11 2 5h5" />,
  },
  {
    title: "Escucha sin conexión",
    text: "Descarga tus playlists y llévalas a donde vayas, sin gastar datos.",
    icon: <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />,
  },
  {
    title: "Listas inteligentes",
    text: "Recomendaciones que aprenden de tu gusto y descubren música nueva por ti.",
    icon: <path d="M9 18V5l12-2v13M9 13l12-2M6 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm15-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />,
  },
];

function Features() {
  return (
    <section className="section section-soft" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Características</span>
          <h2>Hecho para quienes aman la música</h2>
          <p>Todo lo que necesitas para vivir tu música al máximo.</p>
        </div>

        <div className="grid-3">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
