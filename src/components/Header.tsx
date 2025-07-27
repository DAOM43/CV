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

      <nav className="header-nav mt-3">
        <a href="#perfil">Perfil</a>
        <a href="#formacion">Formación</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;