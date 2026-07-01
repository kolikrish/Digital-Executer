import { useState } from "react";

const MissionCard = ({ step, text }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-[#0d0d0d] group p-6 sm:p-8 flex flex-col justify-between border border-hairline hover:border-primary/20 transition-all duration-500 overflow-hidden rounded-2xl cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.08)]"
    >
      {/* Radial glow spotlight tracking mouse */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, rgba(212, 175, 55, 0.09), transparent 80%)`,
        }}
      />
      {/* Subtle blueprint grid track inside card */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none z-0"></div>

      <div className="relative z-10 space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[9px] text-[#444] group-hover:text-primary transition-colors tracking-widest uppercase font-bold border border-hairline px-2 py-0.5 rounded">
            STAGE.0{step}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
        </div>
        <p className="text-[#a9a9a9] group-hover:text-white leading-relaxed text-sm sm:text-[15px] transition-colors duration-300 font-[poppins]">
          {text}
        </p>
      </div>
    </div>
  );
};

const OurMission = () => {
  const missionItems = [
    "Understanding the complete business situation",
    "Identifying the most important growth bottlenecks",
    "Recommending realistic priorities",
    "Implementing marketing and technology systems",
    "Measuring performance through relevant KPIs",
    "Improving decisions through testing and data",
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong border-t border-hairline">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary/5 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 space-y-16">
        {/* Mission Statement Hero Box */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline bg-linear-to-br from-[#070707] via-[#0d0d0d] to-[#171207] p-8 sm:p-12 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.13),transparent_40%)] pointer-events-none" />
          <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display leading-[1.1] tracking-tight text-white font-medium">
              To help businesses replace confusion and disconnected activities with{" "}
              <span className="gold-gradient-text">clear strategies</span>,{" "}
              <span className="text-white">connected systems</span> and{" "}
              <span className="gold-gradient-text">consistent execution</span>.
            </h2>
          </div>
        </div>

        {/* Dynamic Execution Pillars (Cards Grid) */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="font-mono text-[14px] uppercase tracking-[0.3em] text-[#666] font-bold">
              Execution Methodology
            </h3>
            <div className="h-px bg-hairline-strong grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionItems.map((item, index) => (
              <MissionCard key={index} step={index + 1} text={item} />
            ))}
          </div>

          {/* Full Width 7th featured block */}
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-[#0d0d0d]/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary/30 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.15)] group">
            <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
            <div className="flex items-center gap-5">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase font-bold border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">
                CONSTANT
              </span>
              <p className="font-[poppins] text-sm sm:text-base text-[#b8b8b8] group-hover:text-white transition-colors duration-300">
                Communicating openly throughout the engagement
              </p>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
