import React from 'react';
import Header from '../components/Header';
import SiteContent from '../components/siteContent';
import Footer from '../components/Footer';
import "./style.scss";

const Home = () => {
    return (
        <div>
            <Header className="header-container" />
            <main>
                <section className="sitecontent-container">
                    <SiteContent />
                </section>
            </main>
            <Footer className="footer-container"/>
        </div>
    );
}


export default Home;