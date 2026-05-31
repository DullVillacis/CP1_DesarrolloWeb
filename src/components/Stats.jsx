const stats = [
  { num: "50M+", label: "Canciones" },
  { num: "4.8★", label: "Valoración media" },
  { num: "180+", label: "Países" },
  { num: "24/7", label: "Sin cortes" },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container inner">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
