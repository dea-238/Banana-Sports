import { useEffect, useRef } from "react";

const AnnouncementBar = ({id}) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const initializeBar = () => {
      if (!containerRef.current || !textRef.current) return;

      const container = containerRef.current;
      const text = textRef.current;

      const animateText = () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }

        const containerWidth = container.offsetWidth || window.innerWidth;
        const textWidth = text.offsetWidth || text.getBoundingClientRect().width;

        if (containerWidth <= 0 || textWidth <= 0) {
          setTimeout(animateText, 100);
          return;
        }

        let position = containerWidth;
        text.style.transform = `translateX(${position}px)`;

        const speed = 2.5;

        const animate = () => {
          position -= speed;
          if (position < -textWidth) {
            position = containerWidth;
          }
          text.style.transform = `translateX(${position}px)`;
          animationRef.current = requestAnimationFrame(animate);
        };

        animate();
      };

      animateText();
    };

    initializeBar();

    const handleResize = () => {
      initializeBar();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div id={id}
      ref={containerRef}
      style={{
        width: "100%",
        backgroundColor: '#101511',
        height: "36px",
        overflow: "hidden",
        position: "absolute",
        top: "0px", // Scrolls with the page
        left: 0,
        zIndex: 1000, // Ensures it's above other content
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        ref={textRef}
        style={{
          color: "#F8F8F5",
          fontSize: "14px",
          fontFamily: "'Aldi', sans-serif",
          whiteSpace: "nowrap",
          letterSpacing: "0.05em",
          margin: 0,
          padding: 0,
          position: "absolute",
          willChange: "transform",
        }}
      >
        NEW EXCITING OFFERS COMING SOON!
      </p>
    </div>
  );
};

export default AnnouncementBar;
