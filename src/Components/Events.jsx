import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../constants/index";

const Events = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Modified anchor point - made it a regular div with an ID instead of hidden element */}
      <div id={id} className="scroll-mt-16 md:scroll-mt-15"></div>
      
      {/* Reduced padding on the top of this section */}
      <section className="relative bg-gray py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-yellow opacity-10"></div>
          <div className="absolute top-1/4 right-0 w-32 sm:w-40 md:w-56 lg:w-64 h-32 sm:h-40 md:h-56 lg:h-64 rounded-full bg-yellow opacity-5"></div>
          <div className="absolute bottom-0 left-1/3 w-56 sm:w-64 md:w-80 lg:w-96 h-56 sm:h-64 md:h-80 lg:h-96 rounded-full bg-yellow opacity-5"></div>
        </div>
        
        {/* Content container */}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading with reduced margin-bottom */}
          <div className="text-center mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider font-thunder text-black inline-block relative"
            >
              EVENTS
            </motion.h2>
          </div>
          
          {/* Main content card with FIXED HEIGHT - reduced margin-top */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-2 sm:mt-3 md:mt-4 p-1 rounded-2xl bg-gradient-to-br from-yellow via-yellow to-amber-500"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left content section with FIXED HEIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
                  style={{ 
                    maxWidth: "100%",
                    height: "400px" // FIXED HEIGHT
                  }}
                >
                  <div className="max-w-md mx-auto lg:mx-0">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight whitespace-nowrap">
                      HOST AN <span className="font-extrabold">EVENT</span> WITH US
                  </h3>

                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                      Looking for the perfect venue to host your next event? Partner with us for a fun and memorable experience. Let's go Bananas!
                    </p>
                    <div className="mt-5 sm:mt-6">
                      <a 
                        href="#contact" 
                        className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-black bg-yellow rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="relative z-10">Contact us today</span>
                        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      </a>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right image slider section with FIXED HEIGHT */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative w-full lg:w-1/2 bg-gray-100"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  ref={sliderRef}
                  style={{ 
                    height: "400px" // MATCHED FIXED HEIGHT
                  }}
                >
                  <div className="relative h-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Event space ${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    {/* Image overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                    
                    {/* Navigation buttons */}
                    <motion.button
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={handlePrev}
                      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
                    >
                      <FaArrowLeft size={16} className="sm:hidden" />
                      <FaArrowLeft size={18} className="hidden sm:block" />
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={handleNext}
                      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
                    >
                      <FaArrowRight size={16} className="sm:hidden" />
                      <FaArrowRight size={18} className="hidden sm:block" />
                    </motion.button>
                  </div>
                  
                  {/* Indicator dots */}
                  <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center space-x-2 sm:space-x-3 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 
                          ${index === currentIndex 
                            ? "bg-yellow w-6 sm:w-8 shadow-lg shadow-yellow/50" 
                            : "bg-white/60 hover:bg-white"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;