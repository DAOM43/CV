import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Daniel Antonio Ojeda Martinez · Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
