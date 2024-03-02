import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./LaSante.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="banner-container">
          {/* Contenido de la sección de características */}
        </section>
        <section className="testimonial-container">
          {/* Contenido de la sección de testimonios */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
