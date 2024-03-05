import React from "react";
import "./Hero.css";
import heroimage from "../../assets/pharmacist-9PnIxhj3.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section-main">
        <div className="hero-container">
          <div className="hero-content-section">
            <div className="hero-content">
              <button className="hero-first-button">
                Devoted to Your Health
              </button>
              <h1>Empowering Health, One Prescription at a Time</h1>
              <p>
                At Care Health Pharmacy, we are committed to your well-being by
                providing expert guidance, personalized service, and quality
                medications. Let us be your partner on your journey
                <br /> to better health
              </p>
              <button className="hero-contact-button">Contact us</button>
            </div>
            <div className="hero-image">
              <img src={heroimage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
