const Contact = () => {
  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto bg-[#0A0A0A] border-x-2 border-hairline-strong flex flex-col justify-between">
      
      {/* Contact Section Box */}
      <div className="w-full px-6 sm:px-12 py-20 md:py-32 border-t border-hairline relative overflow-hidden flex flex-col items-center text-center">
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none"></div>
        
        {/* Orange radial glow backdrop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-150 h-50 bg-primary/5 blur-[120px] opacity-30 pointer-events-none"></div>

        {/* Header copy */}
        <div className="relative z-10 max-w-4xl mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display tracking-tighter heading-gradient">
            Ready To Architect
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display tracking-tighter text-white/20 mt-1">
            Your Foundation ?
          </h2>
        </div>

        <p className="relative z-10 font-[poppins] text-[9px] md:text-[14px] text-[#888] uppercase mb-8 max-w-md">
          Available for strategic partnerships and high-stakes technical execution.
        </p>

        {/* Schedule a Call Button */}
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://calendly.com/company-resourcio25/30min"
          className="relative z-10 btn-primary py-4 px-10 text-[11px] md:text-[12px] font-mono tracking-widest font-bold uppercase rounded-none hover:scale-105 transition-transform"
        >
          Schedule a Call
        </a>
      </div>

    </section>
  );
};

export default Contact;
