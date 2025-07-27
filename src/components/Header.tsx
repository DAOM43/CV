// src/components/Header.tsx
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-dark">
      <div className="header-container container">
        <div className="profile-left">
          <img
            src="/daniel.jpeg"
            alt="Foto de perfil"
            className="profile-img"
          />
        </div>

        <div className="info-right">
          <h1 className="name">Daniel Antonio Ojeda Martinez</h1>
          <p className="location">
            <FaMapMarkerAlt className="icon" />
            Guazacapan Santa Rosa, Guatemala 
          </p>
        </div>
      </div>

  <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-3">
  <div className="container-fluid justify-content-center">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav gap-3">
        <li className="nav-item">
          <a className="nav-link text-white" href="#perfil">Perfil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#formacion">Formación</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#experiencia">Experiencia</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#habilidades">Habilidades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#proyectos">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
};

export default Header;