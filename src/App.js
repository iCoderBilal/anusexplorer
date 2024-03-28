import React, { useEffect } from 'react';
import './index.css';
import './App.css';
import Hero from './components/Hero';
import Evolution from './components/Evolution';
import Influence from './components/Influence';
import Innovators from './components/Innovators';
import Believe from './components/Believe';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';



function App() {

  useEffect(() => {
    AOS.init({
      // Global settings like duration, once, etc.
      duration: 1200,
    });
  }, []);
  return (
    <div className="App">
      <Hero />
      <Evolution />
      <Influence />
      <Innovators />
      <Believe />
      <Footer />
    </div>
  );
}

export default App;
