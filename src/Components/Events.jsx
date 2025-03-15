import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { EventImages, HOST } from "../constants/index";

const SlideNavButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;
  const position = direction === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4";
  
  return (
    <motion.button
      initial={{ opacity: 0, x: direction === "left" ? 10 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className={`absolute top-1/2 ${position} transform -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full hover:bg-yellow hover:text-black transition-all duration-300 z-10`}
    >
      <Icon size={16} className="sm:hidden" />
      <Icon size={18} className="hidden sm:block" />
    </motion.button>
  );
};

const SlideIndicators = ({ images, currentIndex, goToSlide }) => {
  return (
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
  );
};

const BackgroundDecorations = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-yellow opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-32 sm:w-40 md:w-56 lg:w-64 h-32 sm:h-40 md:h-56 lg:h-64 rounded-full bg-yellow opacity-5"></div>
      <div className="absolute bottom-0 left-1/3 w-56 sm:w-64 md:w-80 lg:w-96 h-56 sm:h-64 md:h-80 lg:h-96 rounded-full bg-yellow opacity-5"></div>
    </div>
  );
};

const EventContent = () => {
  return (
    <div className="max-w-md mx-auto lg:mx-0">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight whitespace-nowrap">
        {HOST.SUBTITLE.split(" ").map((word, index) => (
          index === HOST.SUBTITLE.split(" ").indexOf("EVENT") 
            ? <span key={index} className="font-extrabold">{word} </span> 
            : <span key={index}>{word} </span>
        ))}
      </h3>

      <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
        {HOST.DESCRIPTION}
      </p>
      <div className="mt-5 sm:mt-6">
        <a 
          href="#contact" 
          className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-black bg-yellow rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
          <span className="relative z-10">{HOST.BUTTON_TEXT}</span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </a>
      </div>
    </div>
  );
};

const ImageSlider = ({ images, currentIndex, handlePrev, handleNext, goToSlide, setIsHovering }) => {
  return (
    <div 
      className="relative h-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-gray-100">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0
            }}
            transition={{
              opacity: { duration: 0.7, ease: "easeInOut" },
              zIndex: { delay: index === currentIndex ? 0 : 0.7 }
            }}
          >
            <img
              src={img}
              alt={`Event space ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      
      <SlideNavButton direction="left" onClick={handlePrev} />
      <SlideNavButton direction="right" onClick={handleNext} />
      
      <SlideIndicators images={images} currentIndex={currentIndex} goToSlide={goToSlide} />
    </div>
  );
};

const Events = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(104);
  const sliderRef = useRef(null);
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const scrollToSection = () => {
      if (sectionRef.current && window.location.hash === `#${id}`) {
        setTimeout(() => {
          const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
          const offset = headerHeight + 24; 
          
          window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth'
          });
        }, 400); 
      }
    };

    if (window.location.hash === `#${id}`) {
      scrollToSection();
    }
    window.addEventListener('hashchange', scrollToSection);

    const handleNavLinkClick = (e) => {
      const target = e.target;
      const href = target.getAttribute('href') || 
                  (target.closest('a') ? target.closest('a').getAttribute('href') : null);
      
      if (href === `#${id}`) {
        e.preventDefault();

        window.history.pushState(null, '', `#${id}`);

        setTimeout(() => {
          if (sectionRef.current) {
            const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = headerHeight + 24;
            
            window.scrollTo({
              top: sectionTop - offset,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    const navLinks = document.querySelectorAll(`a[href="#${id}"]`);
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, [id, headerHeight]);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % EventImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + EventImages.length) % EventImages.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % EventImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    EventImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="relative bg-gray py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <BackgroundDecorations />
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-0">
          <motion.h2 
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider font-thunder text-black inline-block relative scroll-mt-[120px]">
            {HOST.TITLE}
          </motion.h2>
        </div>
        
        {/* Main content card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-2 sm:mt-3 md:mt-4 p-1 rounded-2xl bg-gradient-to-br from-yellow via-yellow to-amber-500">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
                style={{ 
                  maxWidth: "100%",
                  height: "400px" 
                }}>
                <EventContent />
              </motion.div>
              
              {/* Right image slider section */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full lg:w-1/2 bg-gray-100"
                ref={sliderRef}
                style={{ 
                  height: "400px" 
                }}>
                <ImageSlider 
                  images={EventImages}
                  currentIndex={currentIndex}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  goToSlide={goToSlide}
                  setIsHovering={setIsHovering}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;