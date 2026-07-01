import NeuralFieldScatter from "./NeuralFieldScatter";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="hero" className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 sm:px-12 pt-28 overflow-hidden bg-background">
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
          <div className="mb-4 md:mb-14">
            <TextGenerateEffect
              as="h1"
              words={`Stop Collecting Strategies.\n Start Executing Growth.`}
              className="relative inline-block whitespace-pre-line font-display text-center leading-none tracking-tighter text-4xl sm:text-6xl md:text-7xl"
              wordClassName="animate-aurora relative bg-clip-text text-transparent"
              wordStyle={{
                backgroundImage: 'linear-gradient(135deg, #272727 0%, #b6b6b6 25%, #ffffff 50%, #b6b6b6 75%, #272727 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
              }}
              duration={0.5}
              delay={0.12}
            />
          </div>

          {/* Subtitle & Tagline */}
          <div className="max-w-3xl flex flex-col items-center mb-8 md:mb-12">
            <p className="font-mono text-[10px] md:text-[12px] text-primary uppercase tracking-[0.4em] font-light mb-4">
              Practical strategies. Transparent execution. Clear priorities based on your business.
            </p>
            
            <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-['poppins'] tracking-wider text-center max-w-2xl px-4">
              We partner with visionary founders to architect and execute high-performance digital products. From strategic design to full-stack engineering, we transform ambitious concepts into market-ready realities.
            </p>
          </div>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 w-full sm:w-auto px-4">
            <motion.a initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .02, delay: .3}}
              target="_blank" 
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-hairline bg-white/5 hover:bg-white/10 hover:border-primary/50 text-white text-[12px] tracking-[0.2em] font-light font-[poppins] transition-all duration-300 w-full sm:w-55"
            >
              Book Your Free Consultation
            </motion.a>

            <motion.a
              initial={{opacity: 0, y:40}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: .02, delay: .4}}
              target="_blank" 
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-hairline bg-white/5 hover:bg-white/10 hover:border-primary/50 text-white text-[12px] tracking-[0.2em] font-light font-[poppins] transition-all duration-300 w-full sm:w-55"
            >
              Explore Our Services
            </motion.a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
