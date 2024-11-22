
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from '../../../assets/hero.svg';

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate('/Work'); // Navigate to the /Work route
  };

  return (
    <div className='hero'>
      <div className="section1Text">
        <h1>Vytváříme světy, které si zamilujete.</h1>
        <p>Studio zaměřené na herní vývoj, zabýváme se tím již od roku 2020. Jsme skvělý tým který ví jak vás zabavit.</p>
        <button onClick={handleButtonClick}>Prohlednout práci</button> {/* Add onClick handler */}
      </div>
      <div className="section1Image">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;


