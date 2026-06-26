import NeuralFieldScatter from "./NeuralFieldScatter";

const Hero = () => {
  return (
    <div id="hero" className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 sm:px-12 pt-28 pb-16 overflow-hidden bg-background">
      {/* Background grids and overlays */}
      <div className="absolute inset-0 blueprint-grid opacity-15 z-0 pointer-events-none"></div>
      
      {/* Orange glow spotlight in center top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-87.5 bg-primary/10 blur-[140px] opacity-25 z-0 pointer-events-none"></div>

      {/* Embedded interactive canvas particle web */}
      <div className="absolute inset-0 z-0">
        <NeuralFieldScatter />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto border-x-2 border-hairline-strong px-6 sm:px-12 overflow-hidden py-16">
        
        {/* Diagonal moving light beam effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute bg-white/2" style={{ left: '15%', top: '-100%', width: '1px', height: '300%', transform: 'rotate(35deg)' }}>
            <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(180deg, transparent, rgba(255, 77, 0, 0.2), transparent)' }}></div>
          </div>
          <div className="absolute bg-white/2" style={{ left: '45%', top: '-100%', width: '1px', height: '300%', transform: 'rotate(35deg)' }}>
            <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(180deg, transparent, rgba(255, 77, 0, 0.2), transparent)' }}></div>
          </div>
          <div className="absolute bg-white/2" style={{ left: '75%', top: '-100%', width: '1px', height: '300%', transform: 'rotate(35deg)' }}>
            <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(180deg, transparent, rgba(255, 77, 0, 0.2), transparent)' }}></div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="w-full flex flex-col items-center text-center relative z-10 animate-[fadeIn_1s_ease-out_forwards]">
          
          {/* Header Title with Aurora Gradient */}
          <div className="mb-4 md:mb-6">
            <h1 className="relative inline-block font-display font-extrabold leading-none tracking-tighter text-4xl sm:text-6xl md:text-8xl">
              <span className="sr-only">Design. Build. Deliver.</span>
              <span 
                className="animate-aurora relative bg-clip-text text-transparent bg-linear-to-r from-[#272727] via-[#d6d6d6] to-[#272727]"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #272727 0%, #b6b6b6 25%, #ffffff 50%, #b6b6b6 75%, #272727 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% auto'
                }}
              >
                Design. Build. Deliver.
              </span>
            </h1>
          </div>

          {/* Subtitle & Tagline */}
          <div className="max-w-3xl flex flex-col items-center mb-8 md:mb-12">
            <p className="font-mono text-[10px] md:text-[12px] text-primary uppercase tracking-[0.4em] font-semibold mb-4">
              High-Precision Product Engineering
            </p>
            
            <p className="text-white/60 text-[11px] md:text-[14px] leading-relaxed font-light tracking-wider uppercase text-center max-w-2xl px-4">
              We partner with visionary founders to architect and execute high-performance digital products. From strategic design to full-stack engineering, we transform ambitious concepts into market-ready realities.
            </p>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 w-full sm:w-auto px-4">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-hairline bg-white/5 hover:bg-white/10 hover:border-primary/50 text-white text-[10px] uppercase tracking-[0.2em] font-semibold font-mono transition-all duration-300 w-full sm:w-55"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              Initialize Project
            </a>

            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-hairline bg-white/5 hover:bg-white/10 hover:border-primary/50 text-white text-[10px] uppercase tracking-[0.2em] font-semibold font-mono transition-all duration-300 w-full sm:w-55"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-primary" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              Whatsapp Sync
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
