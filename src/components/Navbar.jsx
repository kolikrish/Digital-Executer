import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Close mobile menu when clicking outside
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 py-5 ${
      scrolled 
        ? "bg-background/85 backdrop-blur-md border-b border-hairline-strong shadow-lg" 
        : "bg-background border-b border-hairline"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link className="flex items-center gap-3 hover:opacity-90 transition-opacity z-101 py-1" to="/">
          <img 
            alt="Digital Executorr Logo"
            loading="lazy"
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert transition-all"
            src={Logo} 
            style={{ display: "block" }}
          />

        <h2 className="font-display text-lg tracking-tight text-white group-hover:text-primary transition-colors duration-300">
            Digital<br />
            <span className="text-primary group-hover:text-white transition-colors duration-300">Executerr</span>
        </h2>
        </Link>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/"
            className="text-[15px] font-[poppins] text-[#888] hover:text-white py-1 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[15px] font-[poppins] text-[#888] hover:text-white py-1 transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-[15px] font-[poppins] text-[#888] hover:text-white py-1 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-[15px] font-[poppins] text-[#888] hover:text-white py-1 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button and Hamburger */}
        <div className="flex items-center gap-4 md:gap-8 z-101">
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 md:py-2.5 md:px-7 text-[10px] md:text-[11px]" 
            href="#"
          >
            Get Started
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors cursor-pointer p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"></path>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-9999 border-t border-hairline-strong animate-fade-in flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-2"
              aria-label="Close Mobile Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-8 px-8 mt-12 w-full items-center">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-semibold uppercase tracking-widest text-[#888] hover:text-white transition-colors py-2 w-full text-center rounded hover:bg-primary/15"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-semibold uppercase tracking-widest text-[#888] hover:text-white transition-colors py-2 w-full text-center rounded hover:bg-primary/15"
            >
              About
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-display font-semibold uppercase tracking-widest text-[#888] hover:text-white transition-colors py-2 w-full text-center rounded hover:bg-primary/15"
            >
              Services
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-6 w-full text-base py-3 px-2 uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
