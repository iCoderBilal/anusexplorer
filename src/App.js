import React, { useEffect } from 'react';
import './index.css';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Homepage from './components/Homepage';
import BrownPaper from './components/BrownPaper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {

  useEffect(() => {
    AOS.init({
      // Global settings like duration, once, etc.
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/brownpaper' element={<BrownPaper />} />




        </Routes>
      </Router>
    </div>
  );
}

export default App;
