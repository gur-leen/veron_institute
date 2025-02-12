import React from "react";
import { motion } from "framer-motion";
import { Smile, Brain, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: <Smile size={40} className="text-yellow-500" />,
    title: "Emotion-Based Travel",
    description: "Get personalized recommendations based on your mood and emotions.",
  },
  {
    icon: <Brain size={40} className="text-blue-500" />,
    title: "AI-Powered Suggestions",
    description: "Our AI learns your preferences to curate the best travel experiences.",
  },
  {
    icon: <MapPin size={40} className="text-green-500" />,
    title: "Personalized Itineraries",
    description: "Enjoy customized travel plans tailored to your interests and budget.",
  },
  {
    icon: <Users size={40} className="text-red-500" />,
    title: "Trusted by Travelers",
    description: "Join thousands of happy explorers who trust Happy Trails.",
  },
];

const Feature_3 = () => {
  return (
    <section className="bg-white text-black py-16 px-8 text-center">
      {/* Heading Animation on Scroll */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Why Choose <span className="text-blue-500">Happy Trails?</span>
      </motion.h2>

      {/* Subtitle Animation on Scroll */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-gray-600"
      >
        Your perfect travel companion, powered by emotions and AI.
      </motion.p>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 * index }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 rounded-2xl border border-gray-300 bg-white shadow-md"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-700 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature_3;
