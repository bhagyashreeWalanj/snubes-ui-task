import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import InfoHeader from './components/InfoHeader';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServicesOffer from './components/ServiceOffers';

function App() {
  return (
    <div className="font-roboto mx-auto">
        <Header />
        <InfoHeader />
        <ServicesOffer />
        <AboutUs />
        <Testimonials />
        <Footer /> 
    </div>
  );
}

export default App;
