import { useState, useEffect, useRef } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const hasShown = useRef(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const amenities = document.getElementById("amenities");
      if (!amenities || hasShown.current) return;

      const { top } = amenities.getBoundingClientRect();
      if (top <= window.innerHeight / 2) {
        setIsOpen(true);
        hasShown.current = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!imageRef.current || !isOpen) return;

    let id;
    const animate = () => {
      const t = Math.sin(Date.now() / 800);
      const angle = t >= 0 ? t * 6 : t * 10; 
      imageRef.current.style.transform = `rotate(${angle}deg)`;
      id = requestAnimationFrame(animate);
    };
    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-logo-wrapper">
          <button
            className="popup-close"
            aria-label="Close popup"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            ✕
          </button>
          <img
            ref={imageRef}
            src="/images/BS Logos-1.png"
            alt="Banana Sports Logo"
            className="popup-logo"
          />
        </div>

        <div className="popup-body">
          <h2 className="popup-title">Don't miss out</h2>
          <p className="popup-desc">
            Join our community to get exclusive event notifications, member
            discounts, and more cool stuff!
          </p>
          <a
            href="https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ"
            target="_blank"
            rel="noopener noreferrer"
            className="popup-cta"
          >
            I&nbsp;WANT&nbsp;IN
          </a>
        </div>
      </div>
    </div>
  );
}
