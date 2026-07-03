// import Hetali_rai from '../assets/Hetali_rai.jpeg';
import HetaliRai from '../assets/HetaliRai.jpeg';

const FoundersNote = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-t border-hairline">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-75 h-75 bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
        {/* Left Side: Header & Author Meta & Image */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary">
              LEADERSHIP
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Founder's Note
              </h2>
              <p className="text-sm text-primary/80 font-mono tracking-wider mt-1">
                Founder & CEO | Meta Ads Expert | Growth Strategist
              </p>
            </div>
          </div>

          {/* Founder Portrait Image */}
          <div className="relative group overflow-hidden rounded-2xl border border-hairline bg-[#0c0c0c] w-full max-w-75 aspect-5/5 shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <img
              src={HetaliRai}
              alt="Hitali Rai"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="w-12 h-px bg-primary/50 mt-6 hidden lg:block"></div>
        </div>

        {/* Right Side: Simple & Clearistic Content */}
        <div className="space-y-6 max-w-2xl font-[poppins] text-[#b8b8b8]">
          {/* <p className="text-lg sm:text-xl text-white/95 font-display font-medium leading-relaxed italic border-l-2 border-primary/40 pl-6 py-1">
            "I believe business owners deserve more than broad recommendations and complicated marketing language. They deserve to know what should be done, why it matters and how it will be executed."
          </p> */}

          {/* <p className="text-sm sm:text-base leading-relaxed pt-2">
            Digital Executerr was built around this belief. Our purpose is to help businesses find clarity, make informed decisions and move forward with practical implementation.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            We approach every engagement with curiosity. Before recommending a campaign, website or automation system, we want to understand the business behind it—the customers, challenges, opportunities and long-term direction.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Our goal is to become a dependable execution partner that communicates honestly and remains focused on meaningful business improvement.
          </p> */}

          <p className="text-lg sm:text-xl text-white/95 font-display font-medium leading-relaxed italic border-l-2 border-primary/40 pl-6 py-1">
            "Digital Executor was built on a simple belief: great businesses deserve great visibility."
          </p>

          <p className="text-sm sm:text-base leading-relaxed pt-2">
            As a Digital Marketing Consultant and Meta Ads Expert, I help businesses transform their online presence into measurable growth. Through strategic content, performance-driven advertising, and data-backed execution, I focus on generating quality leads, increasing brand awareness, and driving real business results.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            At Digital Executor, we don’t just market brands—we help them build authority, attract the right audience, and scale with confidence.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Thank you for being part of our journey. I look forward to helping your business grow.
          </p>

          <div className="pt-4">
            <p className="text-sm font-mono tracking-widest text-white uppercase">
              — Hetali Rai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
