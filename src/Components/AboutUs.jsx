import { motion } from "framer-motion";
import { aboutus } from "../constants";
import { useEffect, useRef, useState } from "react";

const AboutUs = ({ id }) => {
  const marqueeRef = useRef(null);
  return (
    <section id={id || aboutus.sectionId} className="about-section">
      <div className="about-marquee" ref={marqueeRef} aria-hidden="true">
        <div className="marquee-inner">
          <div className="marquee-content">
            <div className="banner-scroll">
              <span className="about-banner-text">
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
              </span>
              <span className="about-banner-text">
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
                BANANAS&nbsp;FOR&nbsp;SPORTS!&nbsp;&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-content container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="about-image-container"
        >
          <img
            src={aboutus.image.src}
            alt={aboutus.image.alt}
            className="about-image"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="about-text-section"
        >
          <h2 className="about-heading">{aboutus.content.aboutHeading}</h2>
          <p className="about-paragraph">{aboutus.content.aboutDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mission-text-section w-full"
        >
          <h2 className="about-heading">{aboutus.content.missionHeading}</h2>
          <p className="about-paragraph">{aboutus.content.missionDescription}</p>
        </motion.div>
      </div>
    
    </section>
  );
};

export default AboutUs;