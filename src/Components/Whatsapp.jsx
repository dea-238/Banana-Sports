import React, { useEffect, useRef } from "react";

const Whatsapp = () => {
  const imageRef = useRef(null);
  
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    
    let angle = 0;
    const maxAngleRight = 8;  // Less rocking to the right
    const maxAngleLeft = 15;  // More rocking to the left
    
    const animate = () => {
      // Calculate the base angle using sine wave
      const baseAngle = Math.sin(Date.now() / 600);
      
      // Apply asymmetrical transformation - more to the left than right
      if (baseAngle >= 0) {
        // Rocking right (less)
        angle = baseAngle * maxAngleRight;
      } else {
        // Rocking left (more)
        angle = baseAngle * maxAngleLeft;
      }
      
      // Apply rocking rotation transformation
      image.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-0 px-6 text-center bg-white">
      {/* Logo Image with Asymmetrical Rocking Animation - Removed top padding completely */}
      <div className="relative">
        <img
          ref={imageRef}
          src="/images/BS Logos-1.png"
          alt="Brand Logo"
          className="w-32 h-32 object-contain origin-bottom transition-transform"
        />
      </div>

      {/* Heading with improved typography */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 tracking-tight">
        Join our<br></br>Community
      </h2>

      {/* Description with better readability */}
      <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto leading-relaxed">
        Become part of Bengaluru's most active & vibrant sports community. 
      </p>

      {/* Join Button with direct WhatsApp link */}
      <a
        href="https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ?fbclid=PAY2xjawI-YFtleHRuA2FlbQIxMAABpnVZkYatLbXrFIfFvP0xthWLgIURID9SNeZW6BPPQ5RUPERlyyWFDVGuwQ_aem_SPrN4UPf2fLrkD7FwtB0YA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp community"
        className="flex items-center justify-center gap-3 mb-6 bg-[#25D366] hover:bg-[#1EBE5C] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 transform"
      >
        <img
          src="/images/w1.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        <span>Join Now!</span>
      </a>
    </div>
  );
};

export default Whatsapp;
