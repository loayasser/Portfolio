import React from 'react';
// Make sure all these files exist in src/components/
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'; // <-- Essential
import Footer from './components/Footer';   // <-- Essential
import './index.css'; // Global styles for the theme and layout

// Main application layout
function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact /> 
      </main>
      <Footer /> 
    </div>
  );
}

export default App;