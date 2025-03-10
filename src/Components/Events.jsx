import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/images/court1.jpg",
  "/images/court2.jpg",
  "/images/merch.jpg",
  "/images/restroom.jpg",
];

const Events = ({id}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Invisible anchor point - adjust height based on your navbar height */}
      <div id={id} style={{ position: "relative", top: "-90px", visibility: "hidden", height: 0 }} />
      
      <section className="bg-[#f8f8f5] py-12 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider font-thunder text-center mb-8 sm:mb-10 md:mb-12">
            EVENTS
          </h2>
        </div>
        <div className="max-w-7xl mx-auto mt-6 sm:mt-8 p-6 sm:p-10 bg-black rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Upcoming Event</h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#F8F8F5]">
              Join us for an exciting Pickleball Showdown, where players of all skill levels come together for a day of fast-paced action, competition, and fun!
            </p>
          </div>

          {/* Image Slideshow Container */}
          <div className="relative w-full md:w-1/2">
            <img
              src={images[currentIndex]}
              alt="Gallery Slide"
              className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-xl transition-all duration-500 ease-in-out"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <FaArrowRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;