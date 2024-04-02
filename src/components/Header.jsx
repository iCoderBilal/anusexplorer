import React from 'react';
import webLogo from "../assets/anus_large.avif";
import { Link } from 'react-router-dom';

const Header = ({linkToBuy}) => {
    const scrollToSection = () => {
        linkToBuy.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
  return (
    <div>
       <div className="website-logo pt-8 flex justify-center">
        
      
           <Link to="/"><img src={webLogo} alt="Uranus Logo" className="w-[25vw] lg:w-[9vw] lg:mx-[200px] mx-6" /></Link>
         
       
        </div> 
    </div>
  )
}

export default Header
