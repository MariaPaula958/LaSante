import React from 'react';
import facebookImg from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/facebook.png";
import instagramImg from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/instagram.png";
import laSanteImg from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/laSante.png";

const Header = ({ className }) => {
    return (
        <header className={className}>
            <div className="header-content container">
                <h4>servicioalcliente@lasante.com.co</h4>
                <div className="nav-links">
                    <a href="#Facebook"><img src={facebookImg} alt="Facebook" /></a>
                    <a href="#Instagram"><img src={instagramImg} alt="Instagram" /></a>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Buscar..." />
                    <button>Buscar</button>
                </div>
            </div>
            <div className="container2">
                <a href="#LaSante"><img src={laSanteImg} alt="LaSante" /></a>
                <div className="menu">
                    <a href="#Somos"> Somos </a>
                    <a href="#MedicamenosBioequivalentes"> Medicamentos Bioequivalentes </a>
                    <a href="#Farmacovigilancia"> Farmacovigilancia </a>
                    <select onChange={(e) => window.location.href = e.target.value}>
                        <option value="#Blog">Blog La Santé</option>
                        <option value="#https://www.lasante.com.co/blog-la-sante/">Ver todas las entradas</option>
                        <option value="#https://www.lasante.com.co/todo-acerca-del-glaucoma/">Todo acerca del Glaucoma</option>
                        <option value="#https://www.lasante.com.co/salud-visual/">Salud visual</option>
                        <option value="#https://www.lasante.com.co/alergias-1/">Alergias</option>
                        <option value="#https://www.lasante.com.co/hipertension-arterial-2/">Hipertensión arterial</option>
                        <option value="#https://www.lasante.com.co/vitamina-c/">Vitamina C</option>
                        <option value="#https://www.lasante.com.co/infecciones-virales/">Infecciones virales</option>
                        <option value="#https://www.lasante.com.co/bacterias/">Bacterias</option>
                        <option value="#https://www.lasante.com.co/antihistaminicos/">Antihistamínicos</option>
                    </select>
                    <a href="#Contacto"> Contacto </a>
                </div>
            </div>
        </header >
    );
}


export default Header;
