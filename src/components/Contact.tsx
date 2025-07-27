import { FaEnvelope, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section py-5" id="contacto">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">Contacto</h2>
        <div className="row justify-content-center gap-4">
          {/* Tarjeta de Correo */}
          <a
            href="mailto:danielojedamartinez43@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Daniel,%20me%20gustaría%20contactarte%20por%20el%20siguiente%20motivo:"
            className="col-md-4 text-decoration-none contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card p-4 shadow-sm h-100">
              <FaEnvelope className="contact-icon mb-3" />
              <h5 className="fw-bold">Correo Electrónico</h5>
              <p className="mb-0 text-muted">danielojedamartinez43@gmail.com</p>
            </div>
          </a>

          {/* Tarjeta de GitHub */}
          <a
            href="https://github.com/DAOM43"
            className="col-md-4 text-decoration-none contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card p-4 shadow-sm h-100">
              <FaGithub className="contact-icon mb-3" />
              <h5 className="fw-bold">GitHub</h5>
              <p className="mb-0 text-muted">github.com/DAOM43</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;