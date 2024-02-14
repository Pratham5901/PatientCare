// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import About from './components/About/About';
import Job from './components/Job/Job';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
     <Header />
     <HomeSection />
     <ServicesSection />
     <About />
     <Job />
     <Contact />
     <Footer />
      
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
