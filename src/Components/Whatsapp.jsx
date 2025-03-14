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
    <div className="flex flex-col items-center justify-center py-0 px-6 text-center bg-white">
      <div className="relative">
        <img
          ref={imageRef}
          src={logoPic}
          alt="Brand Logo"
          className="w-32 h-32 object-contain origin-bottom transition-transform"
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 tracking-tight">
        {TEXTS.HEADING.split("\n").map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </h2>
      <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto leading-relaxed">
        {TEXTS.DESCRIPTION}
      </p>
      <a
        href={LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp community"
        className="flex items-center justify-center gap-3 mb-6 bg-[#25D366] hover:bg-[#1EBE5C] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 transform"
      >
        <img src={whatsappImg} alt="WhatsApp" className="w-6 h-6" />
        <span>{TEXTS.BUTTON_TEXT}</span>
      </a>
    </div>
  );
};

export default Whatsapp;
