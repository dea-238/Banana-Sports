import { useEffect, useRef } from "react";

const AnnouncementBar = ({ id, text = "NEW EXCITING OFFERS COMING SOON!" }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const initializeAnimation = () => {
      if (!containerRef.current || !textRef.current) return;

      const container = containerRef.current;
      const textElement = textRef.current;

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const containerWidth = container.offsetWidth;
      const textWidth = textElement.getBoundingClientRect().width;

      if (containerWidth <= 0 || textWidth <= 0) {
        setTimeout(initializeAnimation, 100);
        return;
      }

      let position = containerWidth;
      textElement.style.transform = `translateX(${position}px)`;

      const speed = 2.5;

      const animate = () => {
        position -= speed;
        if (position < -textWidth) {
          position = containerWidth;
        }
        textElement.style.transform = `translateX(${position}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    initializeAnimation();
    window.addEventListener("resize", initializeAnimation);
    window.addEventListener("orientationchange", initializeAnimation);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", initializeAnimation);
      window.removeEventListener("orientationchange", initializeAnimation);
    };
  }, []);

  return (
    <div 
      id={id}
      ref={containerRef}
      className="w-full bg-[#101511] h-9 overflow-hidden absolute top-0 left-0 z-[1000] flex items-center"
    >
      <p
        ref={textRef}
        className="text-[#F8F8F5] text-sm font-['Aldi',sans-serif] whitespace-nowrap tracking-wider m-0 p-0 absolute will-change-transform"
      >
        {text}
      </p>
    </div>
  );
};
export default AnnouncementBar;