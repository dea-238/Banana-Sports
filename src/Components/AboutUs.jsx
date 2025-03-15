import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutUs = ({ id }) => {
  const marqueeRef = useRef(null);
  const underlayRef = useRef(null);

  useEffect(() => {
    const marqueeContent = underlayRef.current;
    const setupMarquee = () => {
      gsap.killTweensOf(marqueeContent);
      gsap.set(marqueeContent, { x: 0 });

      const contentWidth = marqueeContent.offsetWidth / 2;
      
      gsap.to(marqueeContent, {
        x: `-${contentWidth}px`,
        duration: 20,
        ease: "linear",
        repeat: -1,
        repeatRefresh: true
      });
    };
    
    setupMarquee();
    
    window.addEventListener('resize', setupMarquee);
    
    return () => {
      window.removeEventListener('resize', setupMarquee);
      gsap.killTweensOf(marqueeContent);
    };
  }, []);

  return (
    <>
      <div id={id} style={{ position: "relative", top: "-120px", visibility: "hidden", height: 0 }} />     
      <div className="max-w-4xl mx-auto text-center pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-24 md:pb-32 lg:pb-40 px-4 sm:px-8 md:px-14">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-black">
          Bangalore's Premium Facility for
          <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400">
            Pickleball, Football, and Box-Cricket.
          </span>
        </p>
      </div>
      <div 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black h-12 sm:h-14 md:h-16 overflow-hidden">
        <div 
          ref={marqueeRef}
          className="absolute inset-0 flex items-center"
          style={{ width: "100%" }}>
          <div 
            ref={underlayRef}
            className="font-bold font-thunder whitespace-nowrap opacity-80 flex items-center"
            style={{ 
              width: "200%",
              color: "#FFD700", 
              fontSize: "min(4vw, 2.5rem)",
              lineHeight: 1,
              paddingTop: "0.1em" 
            }}>
            BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS!
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;