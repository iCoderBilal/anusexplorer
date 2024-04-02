import React, { useRef } from 'react';
import Hero from './Hero';
import Evolution from './Evolution';
import Influence from './Influence';
import Innovators from './Innovators';
import Believe from './Believe';
import Footer from './Footer';
function Homepage() {

    const mySectionRef = useRef(null);

    return(
        <>
          <Hero refSec={mySectionRef} />
      <Evolution />
      <Influence />
      <Innovators />
      <Believe refSec={mySectionRef} />
      <Footer />
        </>
    )
    
}

export default Homepage;