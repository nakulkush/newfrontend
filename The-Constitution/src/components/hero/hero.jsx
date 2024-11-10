import React from 'react';
import Background from '../../assets/bg.png';
import './style.css'; // Create a CSS file for custom styles if necessary

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid p-0 position-relative">
        <img src={Background} alt="Hero Background" className="img-fluid hero-img center" />
        <div className="hero-overlay d-flex flex-column position-absolute top-0 start-0 w-100 h-100">
          <div className="container">
            <h1 className="hero-title fw-bold">Beuffig Lange</h1>
            <p className="hero-text lead">Lorem ipsum dolor sit amet consectetur, adipiscing elit, sed do eiusmod.</p>
            <a href="#more" className="btn btn-primary mt-3">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};
