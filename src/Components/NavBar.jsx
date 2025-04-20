import { useEffect, useState } from "react";
import { Menu, X }               from "lucide-react";
import { navLinks, socialLinks } from "../constants";
import { BSLOGO }                from "../utils";

const BREAKPOINT_DESKTOP = 835;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    const onResize = () => {
      if (window.innerWidth >= BREAKPOINT_DESKTOP && menuOpen) {
        setMenuOpen(false);
      }
    };

    onScroll(); onResize();
    document.body.style.overflow = menuOpen ? "hidden" : "";

    window.addEventListener("scroll",  onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll",  onScroll);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const allNavLinks = [
    ...navLinks,
    {
      id: "location",
      name: "LOCATION",
      href: "https://www.google.com/maps/dir//29%2F8,+Mullur+Rd,+off+Sarjapur+-+Marathahalli+Road,+Carmelam+Post,+Bengaluru,+Karnataka+560035",
      external: true,
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-container">
      <header className={isScrolled ? "navbar-scrolled" : "navbar-not-scrolled"}>
        <nav>
          <div className="nav-section nav-left">
            <div className="md-hidden">
              <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={24}/> : <Menu size={24}/>}
              </button>
            </div>
            <div className="nav-links hidden md:flex">
              {allNavLinks.map(link => (
                <a
                  key={link.id}
                  href={link.external ? link.href : `#${link.id}`}
                  className="nav-link"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className={`nav-section nav-center ${menuOpen ? "md:block hidden" : "block"}`}>
            <a href="#hero" aria-label="Go to homepage">
              <img src={BSLOGO} alt="Banana Sports" className="nav-logo"/>
            </a>
          </div>

          <div className="nav-section nav-right">
            <div className="desktop-nav-actions">
              <a href="#contact" className="nav-contact">Contact Us</a>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a
                    key={link.alt}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.alt}
                  >
                    <img src={link.img} alt={link.alt}/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`mobile-nav ${menuOpen ? "visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-safe-area"/>
        <div className="mobile-nav-header">
          <button className="mobile-nav-close" onClick={closeMenu} aria-label="Close menu">
            <X size={24}/>
          </button>
          <img src={BSLOGO} alt="Banana Sports" className="mobile-nav-logo"/>
        </div>

        <div className="mobile-nav-items">
          {allNavLinks.map(link => (
            <a
              key={link.id}
              href={link.external ? link.href : `#${link.id}`}
              className="mobile-nav-link"
              onClick={closeMenu}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.name}
            </a>
          ))}
          {!navLinks.some(l => l.id === "gallery") && (
            <a href="#gallery" className="mobile-nav-link" onClick={closeMenu}>GALLERY</a>
          )}
        </div>

        <div className="mobile-contact-wrapper">
          <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>CONTACT US</a>
        </div>

        <div className="mobile-social-links">
          {socialLinks.map(link => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label={link.alt}
            >
              <img src={link.img} alt={link.alt}/>
            </a>
          ))}
        </div>
      </div>

      <div className={`navbar-spacer ${isScrolled ? "scrolled" : "not-scrolled"}`}/>
    </div>
  );
}
