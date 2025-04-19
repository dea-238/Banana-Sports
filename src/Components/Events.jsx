import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { EventImages, HOST } from "../constants/index";

const SlideNavButton = ({ direction, onClick }) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;
  const buttonClass = direction === "left" ? "events-nav-button-left" : "events-nav-button-right";
  
  return (
    <button
      onClick={onClick}
      className={`events-nav-button ${buttonClass}`}
    >
      <Icon className="events-nav-icon" />
    </button>
  );
};

const SlideIndicators = ({ images, currentIndex, goToSlide }) => {
  return (
    <div className="events-indicators">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`events-indicator ${index === currentIndex ? "events-indicator-active" : ""}`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

const BackgroundDecorations = () => {
  return (
    <div className="events-decoration">
      <div className="events-decoration-circle-1"></div>
      <div className="events-decoration-circle-2"></div>
      <div className="events-decoration-circle-3"></div>
    </div>
  );
};

const EventContent = () => {
  return (
    <div className="events-content-wrap">
      <h3 className="events-subtitle">
        {HOST.SUBTITLE.split(" ").map((word, index) => (
          index === HOST.SUBTITLE.split(" ").indexOf("EVENT") 
            ? <span key={index} className="events-subtitle-highlight">{word} </span> 
            : <span key={index}>{word} </span>
        ))}
      </h3>

      <p className="events-description">
        {HOST.DESCRIPTION}
      </p>
      <div className="events-cta">
        <a 
          href="#contact" 
          className="events-button">
          <span className="events-button-text">{HOST.BUTTON_TEXT}</span>
          <span className="events-button-overlay"></span>
        </a>
      </div>
    </div>
  );
};

const ImageSlider = ({ images, currentIndex, handlePrev, handleNext, goToSlide, setIsHovering }) => {
  return (
    <div 
      className="events-slider-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="events-slider-background">
        {images.map((img, index) => (
          <div
            key={index}
            className="events-slider-image"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0
            }}
          >
            <img
              src={img}
              alt={`Event space ${index + 1}`}
            />
          </div>
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
        <div className="events-heading">
          <h2 
            ref={headingRef}
            className="events-title events-fade-in">
            {HOST.TITLE}
          </h2>
        </div>
        
        <div className="events-card events-slide-up">
          <div className="events-card-inner">
            <div className="events-card-content">
              <div className="events-content events-slide-in-left">
                <EventContent />
              </div>
              
              <div 
                className="events-slider events-slide-in-right"
                ref={sliderRef}>
                <ImageSlider 
                  images={EventImages}
                  currentIndex={currentIndex}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  goToSlide={goToSlide}
                  setIsHovering={setIsHovering}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;