import { useEffect, useRef } from "react";
import { TOPBAR } from '../constants';

const useMarqueeAnimation = (containerRef, textRef) => {
  const animationRef = useRef(null);
  const speedRef = useRef(null);

  useEffect(() => {
    const animateMarquee = () => {
      if (!containerRef.current || !textRef.current) return;
  
      const container = containerRef.current;
      const textElement = textRef.current;
      const containerWidth = container.offsetWidth;
      const textWidth = textElement.getBoundingClientRect().width;
  
      if (!containerWidth || !textWidth) return;
  
      const baseSpeed = 0.75;
      speedRef.current = baseSpeed * (containerWidth / 500);
      
      let position = containerWidth;
  
      const animate = () => {
        position = position <= -textWidth ? containerWidth : position - speedRef.current;
        textElement.style.transform = `translateX(${position}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };
  
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(animate);
    };
  
    animateMarquee();
  
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(animateMarquee, 100);
    };
  
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", animateMarquee);
  
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", animateMarquee);
    };
  }, [containerRef, textRef]);
}

const AnnouncementBar = ({ id, text }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useMarqueeAnimation(containerRef, textRef);

  return (
    <div 
      id={id} 
      ref={containerRef} 
      className="announcement-bar"
      role="marquee" 
      aria-live="polite"
    >
      <p ref={textRef} className="announcement-bar__text">
        {text || TOPBAR.text}
      </p>
    </div>
  );
};

export default AnnouncementBar;