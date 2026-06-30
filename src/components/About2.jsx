const About2 = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">

        <div className="rounded-[2rem] border border-hairline bg-[#020202] p-10 sm:p-12 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
          <h2 className="text-4xl sm:text-2xl lg:text-3xl font-display font-semibold leading-tight tracking-[-0.04em] text-white">
            Start Your Journey Toward
            <br />
            Smarter, Scalable Operations
          </h2>

          <p className="mt-6 max-w-2xl font-[poppins] sm:text-[16px] leading-relaxed text-[#c4c4c4]">
            Accelerate your growth with intelligent AI solutions that streamline operations and drive real business impact.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#ff8a00] px-8 py-3 text-sm font-[poppins] text-black transition duration-300 hover:bg-[#ff9f25]"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#ff8a00] bg-white/5 text-sm px-8 py-3 font-[poppins] text-white transition duration-300 hover:bg-white/10"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-hairline bg-[#050505] shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
          <div className="flex h-105 sm:h-85">
            <div className="flex-1 bg-[#160d04]" />
            <div className="flex-1 bg-[#2b1908]" />
            <div className="flex-1 bg-[#43230b]" />
            <div className="flex-1 bg-[#5d320e]" />
            <div className="flex-1 bg-[#89490e]" />
            <div className="flex-1 bg-[#d67d13]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
