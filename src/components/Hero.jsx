function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container inner">
        <div className="hero-text">
          <span className="badge">
            <span className="dot" />
            +50 millones de canciones en alta fidelidad
          </span>

          <h1>
            Tu música. <span className="gradient-text">Sin límites.</span>
          </h1>

          <p>
            Pulse es el lugar donde tus canciones favoritas suenan mejor.
            Escucha, descarga y descubre música nueva cada día.
          </p>

          <div className="actions">
            <a href="#contact" className="btn btn-primary">Empieza a escuchar</a>
            <a href="#features" className="btn btn-ghost">Ver características</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="player">
            <div className="player-cover">
              <div className="vinyl" />
            </div>
            <div className="player-track">Midnight Drive</div>
            <div className="player-artist">Neon Pulse</div>

            <div className="player-bar"><span /></div>

            <div className="player-controls">
              <span className="ctrl">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 20L9 12l10-8v16zM5 19V5H7v14H5z" /></svg>
              </span>
              <span className="play">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span className="ctrl">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l10 8-10 8V4zm12 1h2v14h-2V5z" /></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
