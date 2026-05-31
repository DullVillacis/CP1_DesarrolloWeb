function Navbar() {
  return (
    <header className="navbar">
      <div className="container inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M3 12h2l2-7 4 16 3-11 2 5h5" />
            </svg>
          </span>
          Pulse
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#features">Explora</a></li>
            <li><a href="#pricing">Planes</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-ghost">Iniciar sesión</a>
          <a href="#contact" className="btn btn-primary">Pruébalo gratis</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
