import React from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs1 = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-main-title">Let’s Discover Your Next Adventure with Us</h1>
      <p className="about-us-welcome-text">
        Welcome to our world of wanderlust and exploration! At our premier trip agency, we’re dedicated to crafting unforgettable travel experiences tailored just for you!
      </p>
      <hr className="about-us-divider" />
      <h2 className="about-us-subtitle">About Us</h2>
      <p className="about-us-text">
        Welcome to Marco Reservation Center, your premier partner for organizing unforgettable tours and activities in Bali and neighboring islands. With a legacy of excellence since 1997, we have been dedicated to crafting unique and memorable travel experiences that cater to every traveler’s dreams and desires.
      </p>
      <p className="about-us-text">
        We believe that travel is more than just visiting new places; it’s about immersing yourself in the local way of life, understanding different cultures, and making memories that last a lifetime.
      </p>
      <button className="about-us-read-more-button">Read More</button>
    </div>
  );
};

export default AboutUs;