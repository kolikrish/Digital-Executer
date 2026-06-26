import { useState } from "react";

const ServiceCard = ({ number, title, description }) => {
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
      className="relative bg-[#0A0A0A] group p-8 sm:p-10 h-full min-h-[320px] flex flex-col justify-between border border-transparent hover:border-hairline-strong transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* Radial gradient background tracking mouse */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0" 
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255, 77, 0, 0.09), transparent 80%)`
        }}
      />
      {/* Blueprint grid back overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none z-0"></div>

      <div className="relative z-10 h-full flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start mb-12">
          <span className="font-mono text-[9px] text-[#444] group-hover:text-primary transition-colors tracking-widest uppercase font-bold">
            SECTION.{number}
          </span>
          <div className="w-8 h-8 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-500 bg-background/50 backdrop-blur-sm">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="text-lg md:text-xl font-display font-extrabold mb-4 text-white group-hover:text-primary transition-colors duration-300 uppercase leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-[#888] leading-relaxed text-[11px] md:text-[12px] group-hover:text-[#bbb] transition-colors duration-500 uppercase tracking-wide font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const serviceList = [
    {
      number: "01",
      title: "PRODUCT_STRATEGY & UX",
      description: "Designing high-performance interfaces through user-behavior mapping and iterative prototyping. We build digital surfaces that prioritize operational clarity and conversion velocity."
    },
    {
      number: "02",
      title: "FULL_STACK ARCHITECTURE",
      description: "Engineering scalable web and mobile infrastructures using modern, type-safe protocols. We deploy robust digital engines built for high-concurrency and global distribution."
    },
    {
      number: "03",
      title: "NEURAL_MESH & AI",
      description: "Integrating advanced automation and neural-network intelligence into your business workflow. We eliminate operational bottlenecks through high-precision machine learning models."
    },
    {
      number: "04",
      title: "CORE_PRODUCT MANAGEMENT",
      description: "Strategic roadmap execution with a focus on market alignment and technical scalability. We manage the full lifecycle of your digital resources from concept to stable build."
    },
    {
      number: "05",
      title: "TECHNICAL ADVISORY",
      description: "Architectural oversight and scaling strategy for high-growth enterprises. We provide the technical blueprints required to maintain performance under extreme load."
    },
    {
      number: "06",
      title: "BRAND_IDENTITY SYSTEMS",
      description: "Developing comprehensive visual languages that communicate technical authority. We build cohesive brand architectures across all digital and physical touchpoints."
    }
  ];

  return (
    <section id="services" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-[#0A0A0A] border-x-2 border-hairline-strong">
      
      {/* Services Header */}
      <div className="w-full pt-4 mb-16 flex flex-col items-center text-center gap-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1] tracking-tighter uppercase heading-gradient">
            DIFFERENTIAL.
          </h2>
        </div>
        <div className="max-w-sm mt-4">
          <p className="font-mono text-[9px] md:text-[10px] text-[#555] uppercase leading-relaxed tracking-widest">
            High-performance technical capabilities engineered for architectural integrity.
          </p>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border border-hairline bg-hairline gap-[1px]">
        {serviceList.map((service, index) => (
          <ServiceCard 
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

    </section>
  );
};

export default Services;
