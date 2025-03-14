import React, { useState, useEffect, useRef } from "react";
import { highlightsSlides } from "../constants/index";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";

const Hero = ({ id }) => {
  const [current, setCurrent] = useState(0);
  const buttonRef = useRef(null);
  const currentSlide = highlightsSlides[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlightsSlides.length);
    }, currentSlide.videoDuration * 1000);

    return () => clearInterval(interval);
  }, [current, currentSlide.videoDuration]);

  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      y: -5,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    });
  }, []);

  return (
    <>
      {/* Invisible anchor point */}
      <div id={id} className="relative top-[-120px] invisible h-0" />
      
      <section className="relative h-[85vh] flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        {/* Video Background */}
        {highlightsSlides.map((slide, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left leading-tight font-Anton">
            PICKLEBALL!
            <br />
            FOOTBALL!
            <br />
            BOX CRICKET!
          </h1>

          <ul className="mt-3 md:mt-4 text-left space-y-2">
            {currentSlide.textLists.map((text, idx) => (
              <li key={idx} className="text-sm sm:text-sm md:text-base lg:text-lg">
                {text}
              </li>
            ))}
          </ul>

          <button
            ref={buttonRef}
            onClick={() => (window.location.href = "#contact")}
            className="mt-5 md:mt-6 bg-[#FFD900] text-black py-2.5 px-5 md:py-3 md:px-6 inline-flex items-center gap-2 font-medium rounded-full transition hover:bg-white hover:shadow-lg hover:scale-105 text-sm md:text-base"
          >
            BOOK A COURT NOW <FaArrowRight className="text-sm md:text-lg" />
          </button>
        </div>

        {/* Slide Navigation Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {highlightsSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 md:h-4 w-3 md:w-4 rounded-full transition-all ${
                index === current ? "bg-white scale-125" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;