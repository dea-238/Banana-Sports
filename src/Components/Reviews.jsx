import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../constants/index";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="bg-black py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-4xl text-yellow sm:text-5xl md:text-6xl font-bold tracking-wider font-thunder text-center mb-8 sm:mb-10 md:mb-12">TESTIMONIALS</h2>
      </div>
      <div className="max-w-7xl mx-auto mt-8 p-6 sm:p-12 md:p-16 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={reviews[index].id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 w-full"
          >
            {/* Profile Image */}
            <img
              src={reviews[index].image}
              alt={reviews[index].author}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-xl"
            />

            {/* Review Content */}
            <div className="w-full md:w-1/2 text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800">
                <span className="text-3xl sm:text-4xl md:text-5xl font-serif">“</span>
                {reviews[index].text}
              </p>
              <p className="mt-4 font-semibold text-lg text-gray-900">
                {reviews[index].author} {" "}
                <span className="text-gray-500"> | {reviews[index].role}</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots for Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                i === index ? "bg-gray-900" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
