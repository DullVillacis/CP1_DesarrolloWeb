function Footer() {
  return (
    <footer className="footer">
      <div className="container inner">
        <span className="brand">
          <span className="brand-mark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M3 12h2l2-7 4 16 3-11 2 5h5" />
            </svg>
          </span>
          Pulse
        </span>

        <nav className="footer-links">
          <a href="#features">Explora</a>
          <a href="#pricing">Planes</a>
          <a href="#contact">Contacto</a>
        </nav>

        <span className="muted">© 2026 Pulse Music. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
