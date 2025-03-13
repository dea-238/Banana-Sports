import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutUs = ({ id }) => {
  const underlayRef = useRef(null);

  useEffect(() => {
    gsap.to(underlayRef.current, {
      x: "-50%",
      repeat: -1,
      duration: 20,
      ease: "linear",
      repeatRefresh: false
    });
  }, []);

  return (
    <>
      <div id={id} style={{ position: "relative", top: "-120px", visibility: "hidden", height: 0 }} />     
      <div className="max-w-4xl mx-auto text-center pt-40 pb-40 px-4 sm:px-8 md:px-14">
        <p className="text-2xl sm:text-xl leading-relaxed text-black">
          Bangalore's Premium Facility for {" "}<br></br>
          <span className="text-yellow-400  text-3xl font-semibold">
            Pickleball, Football, and Box-Cricket.
          </span>
        </p>
      </div>
      <section 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden flex items-center justify-center py-6 sm:py-8 px-4 sm:px-8 md:px-12">
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <div 
            className="absolute inset-0 flex items-center"
            style={{ paddingBottom: "0", paddingTop: "8px" }}>
            <div
              ref={underlayRef}
              className="text-[6vw] sm:text-[4.5vw] font-bold font-thunder text-yellow-500 opacity-80 whitespace-nowrap"
              style={{ 
                width: "200%", 
                lineHeight: "1",
                color: "#FFD700" // Bright gold/yellow color
              }}>
              BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;