import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Saptak Biswas",
    role: "Founder",
    quote: "Their expert UI/UX suggestions and exceptional work directly increased our business by 30%. A truly impactful collaboration!"
  },
  {
    name: "Swagata Sil",
    role: "CEO",
    quote: "They delivered a catchy, professional pitch deck right on time, creating a high-impact presentation perfect for our business needs."
  },
  {
    name: "Wahida Rahman",
    role: "Client",
    quote: "They have an exceptional understanding of vision, delivering our perfect logo after many revisions, all in the same day."
  },
  {
    name: "Swagatam Chakraborty",
    role: "CEO",
    quote: "It’s very good and very catchy and got the work on time as promised. Loved the work and the dedication towards it."
  },
  {
    name: "Sayann Sarkar",
    role: "Designer",
    quote: "Genuinely impressed by the quality. They executed my design with incredible precision and thoughtful attention to every detail."
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      const nextIndex = Math.max(0, activeIndex - 1);
      setActiveIndex(nextIndex);
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      const nextIndex = Math.min(testimonials.length - 1, activeIndex + 1);
      setActiveIndex(nextIndex);
    }
  };

  return (
    <section id="feedback" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-[#0A0A0A] border-x-2 border-hairline-strong">
      
      {/* Header block */}
      <div className="w-full pt-4 mb-16 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-hairline pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1] tracking-tighter uppercase heading-gradient">
            Operational
          </h2>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1] tracking-tighter uppercase text-white/20 mt-1">
            Feedback.
          </h2>
        </div>
        
        {/* Navigation arrows & subtext */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="font-mono text-[9px] md:text-[10px] text-[#555] uppercase leading-relaxed tracking-widest text-center md:text-right max-w-xs">
            Aggregated performance metrics and qualitative strategic assessments.
          </p>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleScrollLeft}
              className="w-9 h-9 border border-hairline hover:border-primary/50 text-[#888] hover:text-primary transition-all flex items-center justify-center bg-black/30 cursor-pointer"
              aria-label="Scroll Left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleScrollRight}
              className="w-9 h-9 border border-hairline hover:border-primary/50 text-[#888] hover:text-primary transition-all flex items-center justify-center bg-black/30 cursor-pointer"
              aria-label="Scroll Right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials horizontal scrolling viewports */}
      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto snap-x scrollbar-none pb-6 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((test, index) => (
          <div 
            key={index}
            className="snap-start shrink-0 w-full sm:w-[350px] border border-hairline bg-[#050505] p-8 flex flex-col justify-between group hover:border-hairline-strong transition-all duration-300 relative"
          >
            {/* Corner diagonal highlight pattern */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#FF4D00]/0 group-hover:border-[#FF4D00]/25 transition-all duration-500"></div>
            
            <div>
              {/* Quote mark icon */}
              <div className="text-primary text-4xl font-display italic font-extrabold mb-4 select-none">"</div>
              
              <p className="text-white/80 text-xs md:text-sm uppercase leading-relaxed tracking-wider font-light mb-8 group-hover:text-white transition-colors duration-300">
                {test.quote}
              </p>
            </div>

            {/* User credentials */}
            <div className="border-t border-hairline pt-4 flex flex-col gap-0.5">
              <span className="font-display text-sm uppercase tracking-wide font-extrabold text-white group-hover:text-primary transition-colors">
                {test.name}
              </span>
              <span className="font-mono text-[9px] text-[#555] uppercase tracking-widest font-semibold">
                {test.role}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
