import Globe from "../assets/globe.gif";

const About = () => {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">

        {/* Left panel: hero card with stats */}
        <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-[#050505] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,77,0,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,77,0,0.08),transparent_30%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src={Globe}
              alt="Office background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex min-h-140 flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.45em] text-primary">
                Built For Execution
              </span>

              <h2 className="mt-8 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
                Stop Collecting
                <br />
                Strategies.
                <br />
                Start Executing Growth.
              </h2>

              <p className="mt-6 mb-6 font-[poppins] text-sm sm:text-base leading-relaxed text-[#b8b8b8] max-w-xl">
                Digital Executerr helps businesses move beyond strategy and low-cost labor by building dependable delivery systems, automation frameworks, and conversion-focused customer journeys that run 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-[1.75rem] border border-hairline bg-white/5 p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-hairline bg-[#0d0d0d] p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b8b8b]">Acceptance</p>
                <p className="mt-3 text-3xl font-display text-white">98.5%</p>
              </div>
              <div className="rounded-[1.5rem] border border-hairline bg-[#0d0d0d] p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b8b8b]">Uptime</p>
                <p className="mt-3 text-3xl font-display text-white">24/7</p>
              </div>
              <div className="rounded-[1.5rem] border border-hairline bg-[#0d0d0d] p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b8b8b]">Continents</p>
                <p className="mt-3 text-3xl font-display text-white">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel: story + cards */}
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-hairline bg-[#0c0c0c] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <span className="text-[10px] uppercase tracking-[0.45em] text-primary">Origin</span>
            <h3 className="mt-6 text-3xl sm:text-3xl font-display leading-tight text-white">
              Digital Executerr was built to fix the gap between ideas and execution — where strategy is clear but delivery is unreliable.
            </h3>
            <p className="mt-6 font-[poppins] text-sm sm:text-base leading-relaxed text-[#b8b8b8]">
              Too many teams get plans without systems. We create resilient delivery engines that combine automation, performance marketing, and operational discipline so business momentum stays built-in, not bolted on.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-hairline bg-[#080808] p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">•</span>
              <h4 className="mt-4 text-xl font-medium text-white">Always Improving</h4>
              <p className="mt-3 text-sm font-[poppins] leading-relaxed text-[#a9a9a9]">
                US-led quality and global execution combine with data-driven iteration so every campaign, funnel and automation improves as it runs.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-hairline bg-linear-to-br from-[#080808] via-[#130000] to-[#180000] p-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#b27d58]">Era</span>
              <h4 className="mt-4 text-xl font-medium">Built for the AI Era.</h4>
              <p className="mt-3 text-sm font-[poppins] leading-relaxed text-[#d1d1d1]">
                We pair automation with human oversight so decision-making, delivery, and growth all move at the pace of intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
