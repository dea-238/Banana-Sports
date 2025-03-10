import { instagram, logoText, whatsapp } from "../utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Fixed navbar */}
      <header className={`w-full fixed ${isScrolled ? 'top-0' : 'top-[36px]'} left-0 z-[90] shadow-md transition-all duration-300`}>
        {/* Main navbar container with background */}
        <nav className="w-full px-4 sm:px-6 py-1 flex items-center justify-between bg-[#F8F8F5] border-b border-[#648E37] md:px-12">
          {/* Mobile menu button - moved to the left */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none z-[110] relative transition-transform duration-300 hover:scale-110"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu links */}
          <div className="hidden md:flex gap-10 font-semibold tracking-wide uppercase text-lg">
            <a 
              href="#about-us" 
              className="cursor-pointer transition-colors duration-300 hover:drop-shadow-md hover:scale-110"
            >
              About Us
            </a>
            <a 
              href="#amenities" 
              className="cursor-pointer transition-colors duration-300 hover:drop-shadow-md hover:scale-110"
            >
              Amenities
            </a>
            <a 
              href="#events" 
              className="cursor-pointer transition-colors duration-300 hover:drop-shadow-md hover:scale-110"
            >
              Events
            </a>
          </div>

          {/* Logo - centered for all screen sizes */}
          <div className="flex justify-center">
            <a href="#ab">
              <img
                src={logoText}
                alt="Banana Sports"
                className="h-16 cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Contact and social icons */}
          <div className="hidden md:flex items-center gap-5">
            <a href="#contact" className="bg-[#FFD900] px-6 py-3 font-bold text-black uppercase tracking-wide rounded-full shadow-lg transition-all duration-300 hover:bg-[#F8F8F5] hover:shadow-lg hover:scale-110">
              Contact Us
            </a>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/bananasportsblr" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="h-8 w-8 cursor-pointer hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl filter brightness-70 contrast-125" />
              </a>
              <a href="https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" className="h-8 w-8 cursor-pointer hover:scale-125 transition-transform duration-300 shadow-lg hover:shadow-xl filter brightness-60 contrast-125" />
              </a>
            </div>
          </div>
          
          {/* Empty div to balance the layout on mobile */}
          <div className="md:hidden w-8"></div>
        </nav>
      </header>
      
      {/* Mobile menu - overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[95] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile menu - slide out panel - Fixed positioning issues */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs bg-[#F0F0EA] bg-opacity-95 z-[100] shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden overflow-y-auto`}
      >
        {/* Safe area for top of mobile devices */}
        <div className="h-8 bg-[#F0F0EA]"></div>
        
        {/* Menu header with logo and close button - fixed positioning */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
          <button
            className="text-black focus:outline-none p-2"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div>
            <img
              src={logoText}
              alt="Banana Sports"
              className="h-10"
            />
          </div>
        </div>

        {/* Menu items - with consistent spacing */}
        <div className="flex flex-col px-6 pt-8">
          <a 
            href="#about-us" 
            className="py-3 border-b border-gray-200 font-bold uppercase text-xl"
            onClick={closeMenu}
          >
            ABOUT US
          </a>
          <a 
            href="#amenities" 
            className="py-3 border-b border-gray-200 font-bold uppercase text-xl"
            onClick={closeMenu}
          >
            AMENITIES
          </a>
          <a 
            href="#events" 
            className="py-3 border-b border-gray-200 font-bold uppercase text-xl"
            onClick={closeMenu}
          >
            EVENTS
          </a>
          
          {/* Contact Us button - increased spacing and fixed width */}
          <div className="mt-10 mb-8 w-full px-4">
            <a 
              href="#contact" 
              className="block w-full bg-[#FFD900] py-3 font-bold text-black uppercase text-center rounded-full transition-all duration-300 hover:bg-[#FFE44D]"
              onClick={closeMenu}
            >
              CONTACT US
            </a>
          </div>

          {/* Social media links in mobile menu - centered and responsive */}
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://www.instagram.com/bananasportsblr" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="h-10 w-10 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://chat.whatsapp.com/IrHmXRniyOi5AZ86u0yimZ" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" className="h-10 w-10 transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Empty div to push content below fixed navbar and announcement bar */}
      <div className={`${isScrolled ? 'h-[68px]' : 'h-[104px]'} transition-all duration-300`}></div>
    </>
  );
};

export default Navbar;