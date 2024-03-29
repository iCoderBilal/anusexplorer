import React, { useEffect, useRef } from 'react';
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
  const believeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      // Global settings like duration, once, etc.
      duration: 1200,
    });
  }, []);
  return (
    <div className="App">
      <Hero scrollToBelieve={() => believeRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Evolution />
      <Influence />
      <Innovators />
      <Believe ref={believeRef} />
      <Footer />
    </div>
  );
}

export default App;
