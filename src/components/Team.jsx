import profilePic from '../assets/naman_sisodiya.jpeg'; // adjust the path/filename as necessary

const Team = () => {
  return (
    <div id="team" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong flex flex-col items-center">
      
      {/* Heading Block */}
      <div className="w-full pt-4 mb-16 flex flex-col items-center text-center gap-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display leading-none tracking-tighter heading-gradient">
            Who's Behind
          </h2>
          <h2 className="text-4xl md:text-6xl font-display leading-none tracking-tighter text-white/20 mt-1">
            Digital Executerr ?
          </h2>
        </div>
        <div className="max-w-sm mt-4">
          <p className="font-[poppins] text-[9px] md:text-[12px] text-[#555] uppercase leading-relaxed tracking-widest">
            Meet the visionary engineer behind intelligent systems
          </p>
        </div>
      </div>

      {/* Single Profile Card - Horizontal Layout & Enhanced Width */}
      <div className="w-full max-w-6xl mx-auto border border-hairline bg-[#050505] overflow-hidden flex flex-col md:flex-row items-center md:items-stretch">
        {/* Profile Header with Image and Info - CENTERED Horizontal */}
        <div className="flex-[1.2] flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-hairline relative bg-transparent">
          <div className="absolute inset-0 pointer-events-none"></div>
          {/* Profile Photo from assets */}
          <div className="relative z-10 flex flex-col gap-4 justify-center items-center w-full">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-hairline overflow-hidden bg-transparent flex items-center justify-center shadow-lg">
              {/* Use absolute fill parent for the img to ensure it covers perfectly */}
              <div className="relative w-full h-full">
                <img
                  src={profilePic}
                  alt="Founder"
                  className="absolute inset-0 w-full h-full object-cover object-center select-none"
                  draggable="false"
                  style={{ minWidth: 0, minHeight: 0 }}
                />
              </div>
            </div>

            <h2 className='text-3xl font-[poppins]'>Naman Sisodiya</h2>
          </div>
        </div>
  
  

        {/* Profile Info Section */}
        <div className="flex-2 flex flex-col justify-center p-8 md:p-12 bg-background/30">
          <div>
            <h3 className="text-2xl md:text-3xl font-display text-white mb-2">
              Founder & Visionary
            </h3>
            <p className="text-primary font-light text-[9px] md:text-[10px] tracking-[0.25em] mb-5">
              Founder & CEO @digital.executerr
            </p>

            {/* Stats - horizontal */}
            <div className="flex gap-10 mb-7">
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl text-white font-bold">20+</span>
                <span className="text-[8px] text-[#555] uppercase tracking-widest">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl text-white font-bold">50+</span>
                <span className="text-[8px] text-[#555] uppercase tracking-widest">Clients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl text-white font-bold">5yrs</span>
                <span className="text-[8px] text-[#555] uppercase tracking-widest">Exp</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-[poppins] mb-7">
              With over <span className="text-white">5 years of expertise</span> in building digital solutions, the founder pioneered the integration of <span className="text-white">AI agents, business automation, and modern web technologies</span> to create revenue-driving systems. Every project is engineered with precision, delivering <span className="text-primary">intelligent systems that scale.</span>
            </p>
          </div>

          {/* Social Links & Status */}
          <div className="pt-6 border-t border-hairline flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
            <div className="flex gap-3 mb-3 md:mb-0">
              <a href="#" className="text-primary hover:text-white transition-colors font-[poppins] text-[9px] md:text-[10px] tracking-[0.25em] hover:bg-primary/10 px-3 py-2 border border-hairline">
                LinkedIn
              </a>
              <a href="#" className="text-primary hover:text-white transition-colors font-[poppins] text-[9px] md:text-[10px] tracking-[0.25em] hover:bg-primary/10 px-3 py-2 border border-hairline">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
