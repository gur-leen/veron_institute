import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-left mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to Happy Trails, your premier partner for organizing unforgettable
        tours and activities recommended according to your preferences in India. With a legacy of excellence since 1997,
        we have been dedicated to crafting unique and memorable travel experiences that cater
        to every traveler’s dreams and desires.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        We believe that travel is more than just visiting new places; it’s about immersing yourself in
        the local way of life, understanding different cultures, and making memories that last a
        lifetime.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Read More
      </button>
    </div>
  );
};

export default AboutUs;