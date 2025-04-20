import React, { useState, useEffect, useRef } from "react";
import { highlightsSlides } from "../constants";
import gsap from "gsap";

const SLIDE_INTERVAL = 3000;  

export default function Hero({ id }) {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % highlightsSlides.length);
        setIsFading(false);
      }, 0);          
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!buttonRef.current) return;

    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const anim = gsap.to(buttonRef.current, {
      y: -5,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1,
      paused: prefersReduce,
    });

    return () => anim.kill();
  }, []);

  return (
    <>
      <div id={id} className="hero-anchor" />

      <section className="hero-section">
        <img
          className={`hero-image ${isFading ? "fade-out" : "fade-in"}`}
          src={highlightsSlides[current].image}
          alt={`Slide ${current + 1}`}
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-heading">
            PICKLEBALL!<br />
            FOOTBALL!<br />
            BOX CRICKET!
          </h1>

          <ul className="hero-list">
            {highlightsSlides[current].textLists.map((text, idx) => (
              <li key={idx} className="hero-list-item">
                {text}
              </li>
            ))}
          </ul>

          <button
            ref={buttonRef}
            onClick={() => (window.location.href = "#contact")}
            className="hero-button"
          >
            BOOK A COURT NOW
          </button>
        </div>

        <div className="hero-navigation">
          {highlightsSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`hero-nav-dot ${index === current ? "active" : "inactive"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
