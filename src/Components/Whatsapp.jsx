import React, { useEffect, useRef } from "react";
import { whatsappImg, logoPic } from "../utils";
import { TEXTS, LINKS } from "../constants";

const Whatsapp = () => {
  const imageRef = useRef(null);
  
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    
    let angle = 0;
    const maxAngleRight = 8;
    const maxAngleLeft = 15;
    
    const animate = () => {
      const baseAngle = Math.sin(Date.now() / 600);
      angle = baseAngle >= 0 ? baseAngle * maxAngleRight : baseAngle * maxAngleLeft;
      image.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="whatsapp-section">
      <div className="logo-container">
        <img
          ref={imageRef}
          src={logoPic}
          alt="Brand Logo"
          className="logo-image"
        />
      </div>
      <h2 className="section-heading">
        {TEXTS.HEADING.split("\n").map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </h2>
      <p className="section-description">
        {TEXTS.DESCRIPTION}
      </p>
      <a
        href={LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp community"
        className="whatsapp-button"
      >
        <img src={whatsappImg} alt="WhatsApp" className="whatsapp-icon" />
        <span>{TEXTS.BUTTON_TEXT}</span>
      </a>
    </div>
  );
};

export default Whatsapp;