import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { EventImages, HOST } from "../constants/index";
import "../styles/Events.css";

const SlideNavButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;
  
  return (
    <motion.button
      initial={{ opacity: 0, x: direction === "left" ? 10 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className={`slide-nav-button ${direction}`}
    >
      <Icon size={16} className="icon-small" />
      <Icon size={18} className="icon-large" />
    </motion.button>
  );
};

const SlideIndicators = ({ images, currentIndex, goToSlide }) => {
  return (
    <div className="slide-indicators">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`indicator ${index === currentIndex ? "active" : ""}`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

const BackgroundDecorations = () => {
  return (
    <div className="background-decorations">
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>
      <div className="decoration decoration-3"></div>
    </div>
  );
};

const EventContent = () => {
  return (
    <div className="event-content">
      <h3 className="event-subtitle">
        {HOST.SUBTITLE.split(" ").map((word, index) => (
          index === HOST.SUBTITLE.split(" ").indexOf("EVENT") 
            ? <span key={index} className="highlight">{word} </span> 
            : <span key={index}>{word} </span>
        ))}
      </h3>

      <p className="event-description">
        {HOST.DESCRIPTION}
      </p>
      <div className="event-cta">
        <a href="#contact" className="cta-button">
          <span className="button-text">{HOST.BUTTON_TEXT}</span>
          <span className="button-overlay"></span>
        </a>
      </div>
    </div>
  );
};

const ImageSlider = ({ images, currentIndex, handlePrev, handleNext, goToSlide, setIsHovering }) => {
  return (
    <div 
      className="image-slider"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="slider-background">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="slide"
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
              className="slide-image"
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
      className="events-section"
    >
      <BackgroundDecorations />
      
      <div className="events-container">
        <div className="events-heading-container">
          <motion.h2 
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="events-heading">
            {HOST.TITLE}
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="events-card-wrapper">
          <div className="events-card">
            <div className="events-card-content">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="events-info-section">
                <EventContent />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="events-slider-section"
                ref={sliderRef}>
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