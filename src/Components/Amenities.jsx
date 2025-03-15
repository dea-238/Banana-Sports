import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { equipmentImg, amenitiesVideo } from '../utils';
import { AMENITIES } from '../constants';

const Amenities = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headerHeight = 104; 

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

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        type: 'spring',
        damping: 8,
        stiffness: 80,
      },
    },
  };

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="bg-white text-black py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-center mb-4 sm:mb-6 md:mb-8 scroll-mt-[120px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider font-thunder text-black">
          <span className="text-black">{AMENITIES.TITLE}</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16">
        <motion.div
          variants={itemVariants}
          className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-yellow outline outline-2 outline-yellow md:col-span-2 flex flex-col"
          style={{ minHeight: '280px' }}>
          <img
            src={equipmentImg}
            alt="Practice Equipment"
            className="absolute inset-0 w-full h-full object-cover"/>
          <div
            className="absolute bg-gray-900 bg-opacity-60 text-white flex flex-col justify-center p-6 sm:p-8"
            style={{ width: '50%', height: '100%', right: 0 }}>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">
              {AMENITIES.FEATURE_SECTION.PREMIUM_EQUIPMENT.TITLE}
            </h3>
            <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-2">
              {AMENITIES.FEATURE_SECTION.PREMIUM_EQUIPMENT.DESCRIPTION}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-2 border-yellow outline outline-2 outline-yellow">
          <div className="aspect-square w-full">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={amenitiesVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 mb-0">
        {AMENITIES.ITEMS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border-2 border-yellow-400 outline outline-2 outline-yellow-400 h-48 sm:h-56 md:h-64 flex flex-col justify-start p-6 sm:p-7">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-black">{item.TITLE}</h3>
            <p className="text-black mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">{item.DESCRIPTION}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Amenities;