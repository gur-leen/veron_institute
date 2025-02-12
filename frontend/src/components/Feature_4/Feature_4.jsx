import React from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Jaipur",
    image: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
    description: "The Pink City is known for its royal palaces and vibrant bazaars.",
  },
  {
    name: "Goa",
    image: "https://images.pexels.com/photos/588604/pexels-photo-588604.jpeg",
    description: "Famous for its golden beaches, nightlife, and seafood.",
  },
  {
    name: "Manali",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    description: "A paradise for nature lovers and adventure seekers.",
  },
  {
    name: "Varanasi",
    image: "https://images.pexels.com/photos/210114/pexels-photo-210114.jpeg",
    description: "The spiritual heart of India with ancient temples and rituals.",
  },
  {
    name: "Kerala",
    image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    description: "Experience serene backwaters, lush greenery, and Ayurveda.",
  },
  {
    name: "Rishikesh",
    image: "https://images.pexels.com/photos/2440079/pexels-photo-2440079.jpeg",
    description: "The Yoga Capital of the World, ideal for peace and adventure.",
  },
];

const Feature_4 = () => {
  return (
    <section className="bg-white py-16 px-8 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800"
      >
        Discover <span className="text-blue-500">Top Travel Destinations</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-gray-600"
      >
        Explore breathtaking locations, curated just for you.
      </motion.p>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-4">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold">{destination.name}</h3>
              <p className="text-sm mt-2 text-gray-200">{destination.description}</p>
            </div>

            {/* Gradient Bottom Strip */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature_4;
