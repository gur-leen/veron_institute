import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Feature_1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white text-black p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="md:w-1/2" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-purple-900 mb-4"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-lg mb-4">
            Happy Trails is a travel company based in South India. We specialize in organizing 
            customized holidays in South India. Whether you are looking at a relaxed beach holiday, 
            an adventurous trip, a pilgrimage, or a corporate outing, we can help you plan the 
            perfect trip. We are a reputed and professionally managed company with well-trained 
            staff and coordinators. The team here strongly believes that our growth and customer 
            satisfaction completely depend on our hospitality, safety, and care.
          </p>
          <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition">
            Read More
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <img
          src="https://theholidaysdestination.com/wp-content/uploads/2021/03/world-tourism.png"
          alt="World Tourism"
          className="max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Feature_1;
