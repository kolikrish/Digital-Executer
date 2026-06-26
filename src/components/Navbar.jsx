import { useState, useEffect } from "react";

const SplitTextLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-[11px] font-mono uppercase tracking-[0.3em] font-semibold text-[#888] hover:text-white py-1 transition-colors"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-100 transition-all duration-500 py-5 ${
      scrolled 
        ? "bg-background/85 backdrop-blur-md border-b border-hairline-strong shadow-lg" 
        : "bg-background border-b border-hairline"
    }`}>
      <div className="max-w-7xl mx-auto border-x-2 border-hairline-strong px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a className="flex items-center gap-2 hover:opacity-80 transition-opacity z-101" href="#">
          {/* <img 
            alt="Resourcio" 
            loading="lazy"
            width="150" 
            height="24" 
            className="brightness-0 invert md:w-37.5 md:h-6"
            src="https://res.cloudinary.com/dbwbopuch/image/upload/v1759772826/Group_40110_p0gwzi.svg" 
          /> */}
          <h2>Digital Executerr</h2>
        </a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-16">
          <SplitTextLink href="#services">Services</SplitTextLink>
          <SplitTextLink href="#projects">Projects</SplitTextLink>
          <SplitTextLink href="#about">About</SplitTextLink>
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
            className="md:hidden text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="square"></path>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="square"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-17.4 bg-background/95 backdrop-blur-xl z-99 border-t border-hairline-strong flex flex-col justify-start p-8 animate-fade-in">
          <div className="flex flex-col gap-8 mt-8">
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-semibold uppercase tracking-widest text-[#888] hover:text-white transition-colors"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-semibold uppercase tracking-widest text-[#888] hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-semibold uppercase tracking-widest text-[#888] hover:text-white transition-colors"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
