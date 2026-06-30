import React from "react";

const AboutMission = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong border-t border-hairline">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Left Column: Core Statement */}
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary">
            OUR BELIEF
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight tracking-tight text-white font-semibold">
            We Believe Good Strategies
            <br />
            Should Not Remain in
            <br />
            <span className="orange-gradient-text">Presentations</span>
          </h2>

          <p className="font-[poppins] text-sm sm:text-base leading-relaxed text-[#b8b8b8] max-w-xl">
            Businesses are often given recommendations that sound promising but are difficult to implement. Digital Executerr was created to close that gap.
          </p>
        </div>

        {/* Right Column: Cards showing the Gap and the Solution */}
        <div className="space-y-6">
          {/* Card 1: The Trap */}
          <div className="rounded-[1.75rem] border border-hairline bg-[#0c0c0c] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:border-hairline-strong transition-all duration-300">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#666] mb-3 block">
              THE EXECUTION TRAP
            </span>
            <p className="font-[poppins] text-sm sm:text-[15px] leading-relaxed text-[#a9a9a9]">
              Organizations are constantly told to run ads, improve SEO, build funnels, automate follow-ups, or redesign their websites. However, they are rarely shown how these activities should work together—or who will take responsibility for executing them.
            </p>
          </div>

          {/* Card 2: The Solution */}
          <div className="rounded-[1.75rem] border border-hairline bg-linear-to-br from-[#080808] via-[#100500] to-[#1a0c02] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:border-primary/20 transition-all duration-300 border-l-2 border-l-primary/40">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary mb-3 block">
              OUR CONNECTION
            </span>
            <h4 className="text-lg font-medium text-white mb-2">
              Closing the Gap
            </h4>
            <p className="font-[poppins] text-sm sm:text-[15px] leading-relaxed text-[#d1d1d1]">
              We help businesses move from scattered ideas and inconsistent activities to a clearer, connected, and measurable growth system. We don't just deliver advice—we execute the roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
