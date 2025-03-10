import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutUs = ({ id }) => {
  const bananaRef = useRef(null);
  const underlayRef = useRef(null);

  useEffect(() => {
    gsap.to(bananaRef.current, {
      rotate: ["-15deg", "15deg"],
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut",
    });

    gsap.to(underlayRef.current, {
      x: "-50%",
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }, []);

  return (
    <>
      {/* Invisible anchor point - adjust height based on your navbar height */}
      <div id={id} style={{ position: "relative", top: "-120px", visibility: "hidden", height: 0 }} />
      
      <section 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden py-16 sm:py-20 px-4 sm:px-8 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative inline-block mb-4 sm:mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold font-thunder text-center">
              About Us
            </h2>
            <img
              ref={bananaRef}
              src="/images/BS Logos-1.png"
              alt="Banana Sports Logo"
              className="absolute w-14 sm:w-20 -right-16 sm:-right-24 top-1/2 -translate-y-1/2 drop-shadow-lg"
            />
          </div>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mt-4">
            Bangalore's Premium Facility for {" "}
            <span className="text-yellow-400 font-semibold">
              Pickleball, Football, and Box-Cricket.
            </span>
          </p>
        </div>

        {/* Moving Underlay Text */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div
            ref={underlayRef}
            className="text-[15vw] sm:text-[12vw] font-bold font-thunder text-yellow opacity-40 whitespace-nowrap"
            style={{ width: "200%" }}
          >
            BANANAS FOR SPORTS! BANANAS FOR SPORTS! BANANAS FOR SPORTS!
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;