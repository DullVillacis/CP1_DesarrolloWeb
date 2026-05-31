import { useState } from "react";

const colors = [
  { name: "--bg", hex: "#ffffff", desc: "Fondo principal" },
  { name: "--bg-soft", hex: "#fafafa", desc: "Secciones alternas" },
  { name: "--text", hex: "#0f0f10", desc: "Texto principal" },
  { name: "--muted", hex: "#5e5e66", desc: "Texto secundario" },
  { name: "--border", hex: "#eaeaea", desc: "Bordes y líneas" },
  { name: "--accent", hex: "#4f46e5", desc: "Acento (índigo)" },
  { name: "--accent-soft", hex: "#eef0fe", desc: "Fondo del acento" },
  { name: "--ink", hex: "#0f0f10", desc: "Botones primarios" },
];

const typography = [
  { sample: "Título principal", style: { fontSize: 34, fontWeight: 700, letterSpacing: "-.03em" }, meta: "H1 · 700" },
  { sample: "Título de sección", style: { fontSize: 26, fontWeight: 700, letterSpacing: "-.02em" }, meta: "H2 · 700" },
  { sample: "Subtítulo", style: { fontSize: 19, fontWeight: 600 }, meta: "H3 · 600" },
  { sample: "Texto de cuerpo", style: { fontSize: 16, fontWeight: 400 }, meta: "Body · 400" },
  { sample: "ETIQUETA", style: { fontSize: 13, fontWeight: 600, letterSpacing: ".06em", color: "var(--accent)" }, meta: "Eyebrow · 600" },
];

function DesignSystem() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="ds-fab" onClick={() => setOpen(true)}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="6.5" cy="12" r="2.5" /><circle cx="17" cy="13" r="2.5" /><circle cx="9" cy="18" r="2.5" />
        </svg>
        Design System
      </button>

      {open && (
        <div className="ds-overlay" onClick={() => setOpen(false)}>
          <div className="ds-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ds-head">
              <div>
                <h2>Design System · Pulse</h2>
                <p>Los elementos de diseño que usamos en toda la landing.</p>
              </div>
              <button className="ds-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
            </div>

            <div className="ds-section">
              <h3>Colores</h3>
              <div className="ds-colors">
                {colors.map((c) => (
                  <div className="ds-swatch" key={c.name}>
                    <div className="chip" style={{ background: c.hex }} />
                    <div className="name">{c.name}</div>
                    <div className="hex">{c.hex} · {c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h3>Tipografía · Inter</h3>
              <div className="ds-type">
                {typography.map((t) => (
                  <div className="ds-type-row" key={t.meta}>
                    <span style={t.style}>{t.sample}</span>
                    <span className="meta">{t.meta}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-section">
              <h3>Botones</h3>
              <div className="ds-row">
                <span className="btn btn-primary">Primario</span>
                <span className="btn btn-ghost">Secundario</span>
              </div>
            </div>

            <div className="ds-section">
              <h3>Componentes</h3>
              <div className="ds-row">
                <span className="badge"><span className="dot" /> Insignia (badge)</span>
                <span className="tag">Etiqueta (tag)</span>
                <span className="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h2l2-7 4 16 3-11 2 5h5" /></svg>
                </span>
              </div>
            </div>

            <div className="ds-section">
              <h3>Radios de borde</h3>
              <div className="ds-radii">
                <div className="box" style={{ borderRadius: 10 }}>10px</div>
                <div className="box" style={{ borderRadius: 12 }}>12px</div>
                <div className="box" style={{ borderRadius: 999 }}>999px</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DesignSystem;
