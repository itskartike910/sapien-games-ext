import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handlePlayNow = () => {
    navigate('/dashboard');
  };

  return (
    <div className="hero">
      <div className="video-container">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="https://game.sapien.io/sapien-hero-extended-1080.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <div className="hero-text">
          <h1>Play. Earn.<br/>Train AI.</h1>
          <p>Join thousands of players contributing to AI through fun, rewarding tasks—right from your phone!</p>
        </div>

        <button className="cta-button" onClick={handlePlayNow}>
          Play Now!
        </button>
      </div>
    </div>
  );
};

export default Hero;