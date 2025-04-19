import React, { useEffect, useRef, useState } from 'react';
import { equipmentImg, amenitiesVideo } from '../utils';
import { AMENITIES } from '../constants';

const Amenities = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featureGridRef = useRef(null);
  const regularGridRef = useRef(null);
  const headerHeight = 104;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const scrollToSection = () => {
      if (headingRef.current && window.location.hash === '#amenities') {
        setTimeout(() => {
          const yPosition = 
            headingRef.current.getBoundingClientRect().top + 
            window.scrollY - 
            headerHeight;
          
          window.scrollTo({
            top: yPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    };

    scrollToSection();
    window.addEventListener('hashchange', scrollToSection);
    
    const handleNavLinkClick = (e) => {
      const href = e.target.getAttribute('href');
      
      if (href === '#amenities') {
        e.preventDefault();
        
        window.history.pushState(null, '', '#amenities');

        scrollToSection();
      }
    };

    const navLinks = document.querySelectorAll('a[href="#amenities"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              if (entry.target === featureGridRef.current) {
                featureGridRef.current.classList.add('animate');
              }
              if (entry.target === regularGridRef.current) {
                regularGridRef.current.classList.add('animate');
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      if (featureGridRef.current) {
        observer.observe(featureGridRef.current);
      }
      
      if (regularGridRef.current) {
        observer.observe(regularGridRef.current);
      }

      return observer;
    };

    const observer = observeElements();

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="amenities-section">
      
      <div className="amenities-container">
        <div
          ref={headingRef}
          className={`amenities-heading ${isInView ? 'amenities-slide-down' : ''}`}>
          <h2 className="amenities-title">
            <span>{AMENITIES.TITLE}</span>
          </h2>
        </div>

      <div
        ref={featureGridRef}
        className="amenities-feature-grid amenities-stagger-container">
        <div
          className="amenities-feature-item amenities-feature-item-large amenities-stagger-item">
          <img
            src={equipmentImg}
            alt="Practice Equipment"
            className="amenities-feature-image"/>
          <div className="amenities-feature-overlay">
            <h3 className="amenities-feature-title">
              {AMENITIES.FEATURE_SECTION.PREMIUM_EQUIPMENT.TITLE}
            </h3>
            <p className="amenities-feature-description">
              {AMENITIES.FEATURE_SECTION.PREMIUM_EQUIPMENT.DESCRIPTION}
            </p>
          </div>
        </div>
        <div className="amenities-feature-item amenities-stagger-item">
          <div className="amenities-video-container">
            <video autoPlay loop muted playsInline className="amenities-video">
              <source src={amenitiesVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div
        ref={regularGridRef}
        className="amenities-grid amenities-stagger-container">
        {AMENITIES.ITEMS.map((item, index) => (
          <div
            key={index}
            className="amenities-item amenities-stagger-item">
            <h3 className="amenities-item-title">{item.TITLE}</h3>
            <p className="amenities-item-description">{item.DESCRIPTION}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;