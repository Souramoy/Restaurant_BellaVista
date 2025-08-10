import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Events from './components/Events';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Services />
      <Events />
      <Contact />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;