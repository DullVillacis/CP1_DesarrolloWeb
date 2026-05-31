import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Escribe tu nombre (mínimo 2 caracteres).";
    if (!EMAIL_REGEX.test(form.email.trim())) next.email = "Introduce un correo válido.";
    if (form.message.trim().length < 10) next.message = "El mensaje debe tener al menos 10 caracteres.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="section section-soft" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Únete</span>
          <h2>Crea tu cuenta gratis</h2>
          <p>Déjanos tus datos y empieza a escuchar Pulse en segundos.</p>
        </div>

        <div className="contact-wrap">
          {sent && (
            <div className="form-success">
              ✓ ¡Bienvenido a Pulse! Tu cuenta se creó correctamente.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={`field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className={`field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className={`field ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos qué necesitas..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
