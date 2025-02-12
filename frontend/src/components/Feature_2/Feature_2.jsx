import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    name: "Terri Herbert",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Leslie Brawley",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "John Flaherty",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "David Chen",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Kimberly Martin",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Diana Lee",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Christopher Hall",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Patricia Brooks",
    text: "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
    image: "https://via.placeholder.com/50",
  },
];

const Feature_2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white text-black py-16 px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        Hundereds of <span className="text-blue-500">Five Star Reviews</span>
        </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg text-gray-600"
      >
        Here’s what our customers have to say about us.
      </motion.p>

      <div className="grid grid-cols-4 gap-6 mt-12">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 * index }}
            className="w-full p-6 rounded-2xl border border-gray-300 bg-white shadow-md"
          >
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <div className="flex justify-center mt-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
            </div>
            <p className="mt-4 text-gray-700">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature_2;

