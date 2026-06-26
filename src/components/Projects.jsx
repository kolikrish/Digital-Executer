const projectList = [
  {
    id: "red_flag",
    logNumber: "01",
    title: "Red Flag World",
    category: "Social Media",
    status: "Deployed",
    description: "A social verification platform designed to bring transparency and accountability to modern relationships.",
    link: "https://redflagworld.com/",
    themeColor: "#FF3B30",
    image: "https://via.placeholder.com/900x620/0A0A0A/FF3B30?text=Red+Flag+World"
  },
  {
    id: "apertre",
    logNumber: "02",
    title: "Apertre 2.0",
    category: "Developer Tool",
    status: "Stable",
    description: "A collaboration-first developer platform built to automate community events and scale open-source growth.",
    link: "https://s2.apertre.resourcio.in/",
    themeColor: "#34C759",
    image: "https://via.placeholder.com/900x620/0A0A0A/34C759?text=Apertre+2.0"
  },
  {
    id: "royal_studios",
    logNumber: "03",
    title: "Royal Studios",
    category: "Real Estate",
    status: "Live",
    description: "A premium property showcase experience built for luxury listings and elevated buyer journeys.",
    link: "https://royalstudios.org/",
    themeColor: "#FFD60A",
    image: "https://via.placeholder.com/900x620/0A0A0A/FFD60A?text=Royal+Studios"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="w-full pt-4 mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-hairline pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-1 tracking-tighter uppercase heading-gradient">
              Featured Work
            </h2>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-1 tracking-tighter uppercase text-white/20 mt-1">
              Crafted to Convert.
            </h2>
          </div>
          <div className="max-w-xl lg:text-right">
            <p className="font-mono text-[9px] md:text-[10px] text-[#999] uppercase leading-relaxed tracking-widest">
              Showcase your strongest live products with bold imagery, concise impact copy, and click-through actions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <article
              key={project.id}
              className="glow-card group border border-hairline rounded-4xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-white/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute left-5 bottom-5 flex flex-col gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#ccc]">
                    LOG_{project.logNumber}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[8px] uppercase tracking-[0.35em] text-white">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#888]">
                    {project.category}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: project.themeColor }}></span>
                </div>
                <h3 className="text-2xl font-display font-extrabold uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed tracking-wide min-h-22">
                  {project.description}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="btn-primary py-2 px-4 text-[10px] uppercase tracking-[0.22em] w-full text-center"
                >
                  View Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
