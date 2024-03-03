import React from 'react';
import { Card } from "antd";
import bannerImg from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/banner.jpg";
import banner2Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/banner2.jpg";
import card1Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/oftalmico.png";
import card2Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/interna.png";
import card3Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/nervioso.png";
import card4Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/vida.png";
import card5Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/antiinfecciosos.png";
import producto1Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/productos/Naproxeno.png";
import producto2Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/productos/Ibuprofeno.png";
import inf1Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/InfVirales.jpg";
import inf2Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/Bacterias.jpg";
import inf3Img from "C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/PrevencionCov19.jpg";
import cardImage1 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card1.jpg';
import cardImage2 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card2.jpg';
import cardImage3 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card3.jpg';
import cardImage4 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card4.jpg';
import cardImage5 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card5.jpg';
import cardImage6 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card6.jpg';
import cardImage7 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card7.jpg';
import cardImage8 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card8.jpg';
import cardImage9 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/cards/publicaciones/Card9.jpg';
import aliado1 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/aliados/cafam.png';
import aliado2 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/aliados/colsusidio.png';
import aliado3 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/aliados/rebaja.png';
import aliado4 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/aliados/lopido.png';
import aliado5 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/aliados/COMFANDI.png';
import aliado6 from 'C:/Users/GESTEC/Desktop/Maria Paula/sw1/la-sante/src/components/image/aliados/droxi.png';


const siteContent = () => {

    return (
        <div className="site-content container">

            <div className="banner">
                <div className="banner-container">
                    <a href="#Banner"><img src={bannerImg} alt="Banner" /></a>
                </div>
            </div>

            <div className="text-container">
                <p>
                    Contamos con un portafolio especializado
                    para cualquier tipo de necesidad ¡Conócelo!
                </p>
            </div>

            <div className="cards-container">
                <Card className="card-style" hoverable size="small">
                    <div className="card1">
                        <img src={card1Img} />
                        <h3>OFTÁLMICOS</h3>
                        <p>Soluciones oftálmicas para la salud visual...</p>
                    </div>
                </Card>
                <Card className="card-style" hoverable size="small">
                    <div className="card2">
                        <img src={card2Img} />
                        <h3> MEDICINA INTERNA</h3>
                        <p>Enfocados en el manejo de los más frecuentes trastornos...</p>
                    </div>
                </Card>
                <Card className="card-style" hoverable size="small">
                    <div className="card3">
                        <img src={card3Img} />
                        <h3>SISTEMA NERVIOSO</h3>
                        <p>Tratamientos dirigidos a los trastornos de sueño, depresión...</p>
                    </div>
                </Card>
                <Card className="card-style" hoverable size="small">
                    <div className="card4">
                        <img src={card4Img} />
                        <h3>CALIDAD DE VIDA</h3>
                        <p>Medicamentos contra el dolor y la inflamación, así como...</p>
                    </div>
                </Card>
                <Card className="card-style" hoverable size="small">
                    <div className="card5">
                        <img src={card5Img} />
                        <h3>INFECCIOSOS</h3>
                        <p>Enfocados en el tratamiento de infecciones por...</p>
                    </div>
                </Card>
            </div>

            <div className="banner2-container">
                <img src={banner2Img} alt="Banner" className="banner2-image" />
                <div className="banner2-overlay"></div>
                <div className="banner2-content">
                    <h2>Más de 30 años trabajando para tu salud</h2>
                    <p>Más de 3 décadas de investigación, desarrollo y comercialización de medicamentos genéricos y de marca.</p>
                    <a href="https://www.lasante.com.co/somos/" className="banner-button">EXPERIENCIA LA SANTÉ</a>
                </div>
            </div>

            <div className="text2-container">
                <h2>
                    Conoce algunos de nuestros productos
                </h2>
            </div>

            <div className="productos">
                <div className="productos-container">
                    <a href="#productos"><img src={producto1Img} alt="Naproxeno" /></a>
                    <a href="#productos"><img src={producto2Img} alt="Ibuprofeno" /></a>
                </div>
            </div>

            <div className="infoImportant-container">
                <div className="Info1">
                    <img src={inf1Img} alt="Info" className="inf1-image" />
                    <div className="inf1-overlay"></div>
                    <div className="inf1-content">
                        <h3>Infecciones virales</h3>
                        <p>Infecciones virales Causadas por virus, que son gérmenes muy pequeños,
                            compuestos de material genético (ADN, ARN) con un recubrimiento de proteínas.
                            Los virus pueden causar enfermedad
                        </p>
                        <button className="leer-mas-button">Leer más</button>
                    </div>
                </div>
                <div className="Info2">
                    <img src={inf2Img} alt="Info" className="inf2-image" />
                    <div className="inf2-overlay"></div>
                    <div className="inf2-content">
                        <h3>Bacterias</h3>
                        <p>Son seres vivos que contienen sólo una célula (unicelulares).
                            Solo se pueden observar con un microscopio…
                        </p>
                        <button className="leer-mas-button">Leer más</button>
                    </div>
                </div>
                <div className="Info3">
                    <img src={inf3Img} alt="Info" className="inf3-image" />
                    <div className="inf3-overlay"></div>
                    <div className="inf3-content">
                        <h3>Prevención Covid 19</h3>
                        <p>Tips de prevención Covid 19 en tu vehículo y para tu mascota
                        </p>
                        <button className="leer-mas-button">Leer más</button>
                    </div>
                </div>
            </div>

            <div className="text3-container">
                <h2>
                    Últimas publicaciones
                </h2>
                <div className="cardPublication-container">
                    <div className="card1">
                        <img src={cardImage1} alt="Card 1" />
                    </div>
                    <div className="card2">
                        <img src={cardImage2} alt="Card 2" />
                    </div>
                    <div className="card3">
                        <img src={cardImage3} alt="Card 3" />
                    </div>
                    <div className="card4">
                        <img src={cardImage4} alt="Card 4" />
                    </div>
                    <div className="card5">
                        <img src={cardImage5} alt="Card 5" />
                    </div>
                    <div className="card6">
                        <img src={cardImage6} alt="Card 6" />
                    </div>
                    <div className="card7">
                        <img src={cardImage7} alt="Card 7" />
                    </div>
                    <div className="card8">
                        <img src={cardImage8} alt="Card 8" />
                    </div>
                    <div className="card9">
                        <img src={cardImage9} alt="Card 9" />
                    </div>
                </div>
            </div>

            <div className="text3-container">
                <h2>
                    Nuestros aliados
                </h2>
            </div>

            <div className="aliados">
                <div className="aliados-container">
                    <a href="#Cafam"><img src={aliado1} alt="Cafam" /></a>
                    <a href="#Colsubsidio"><img src={aliado2} alt="Colsubsidio" /></a>
                    <a href="#LaRebaja"><img src={aliado3} alt="La Rebaja" /></a>
                    <a href="#Lopido"><img src={aliado4} alt="Lopido" /></a>
                    <a href="#Comfandi"><img src={aliado5} alt="Comfandi" /></a>
                    <a href="#Droxi"><img src={aliado6} alt="Droxi" /></a>
                </div>
            </div>
        </div>
    );
}

export default siteContent;