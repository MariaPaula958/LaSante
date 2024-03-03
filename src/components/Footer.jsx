import React from 'react';
import facebookImg from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/facebookfoot.png";
import instagramImg from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/instagramfoot.png";

const Footer = () => {
  return (
    <footer>

      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="https://www.lasante.com.co/userfiles/2020/05/logo-la-sante-naranja.png" alt="La Sante" />
          </div>

          <div className="footer-subscribe">
            <p>Suscríbete</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Email" />
              <button type="submit">Suscribirse</button>
            </form>
            <div className="footer-social">
              <p>Síguenos en nuestras redes sociales</p>
              <div className="social-icons">
                <a href="#Facebook"><img src={facebookImg} alt="Facebook" /></a>
                <a href="#Instagram"><img src={instagramImg} alt="Instagram" /></a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <p>Contacto</p>
            <p>601 3647500</p>
            <p>Cra 65 B No. 13-13 Zona industrial Montevideo, Bogotá</p>
            <p>Email: <a href="#servicioalcliente@lasante.com.co">servicioalcliente@lasante.com.co</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer">Política de protección de datos personales</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer">Código de ética y cumplimiento</a></p>
          </div>
        </div>
      </div>

      <h5>© 2020 La Santé</h5>
    </footer>
  );
}

export default Footer;