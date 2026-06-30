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
      className="relative bg-background group p-8 sm:p-10 h-full min-h-80 flex flex-col justify-between border border-transparent hover:border-hairline-strong transition-all duration-500 overflow-hidden cursor-default"
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
          <span className="font-[poppins] text-[9px] text-[#444] group-hover:text-primary transition-colors tracking-widest uppercase font-bold">
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
          <h3 className="text-lg md:text-xl font-display mb-4 text-white group-hover:text-primary transition-colors duration-300 uppercase leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-[#888] leading-relaxed text-[11px] md:text-[14px] group-hover:text-[#bbb] transition-colors duration-500 tracking-wide font-[poppins]">
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
    "number": "01",
    "title": "Performance Marketing",
    "description": "Plan, launch and improve performance-focused campaigns designed around qualified enquiries, customer acquisition and agreed business KPIs."
  },
  {
    "number": "02",
    "title": "Meta Ads Management",
    "description": "Reach the right audience through structured Facebook and Instagram advertising campaigns supported by creative testing, tracking and continuous optimization."
  },
  {
    "number": "03",
    "title": "Lead Generation",
    "description": "Build a more reliable process for attracting, capturing, qualifying and following up withpotential customers."
  },
  {
    "number": "04",
    "title": "Growth Strategy and Consulting",
    "description": "Identify the real barriers limiting your growth and develop a practical action plan based on your goals, market and current capabilities."
  },
  {
    "number": "05",
    "title": "Sales Funnels and Landing Pages",
    "description": "Create focused customer journeys that move prospects from initial interest to enquiry, consultation, purchase or another meaningful action."
  },
  {
    "number": "06",
    "title": "Website Design and Development",
    "description": "Build or improve a professional website that clearly communicates your value and encourages visitors to take the next step."
  }
]

  return (
    <section id="services" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong">
      
      {/* Services Header */}
      <div className="w-full pt-4 mb-16 flex flex-col items-center text-center gap-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display leading-none tracking-tighter heading-gradient">
            What We Can Help You Execute.
          </h2>
        </div>
        <div className="max-w-sm mt-4">
          <p className="font-[poppins] text-[9px] md:text-[12px] text-[#555] uppercase leading-relaxed tracking-widest">
            AI-powered solutions engineered to automate operations, accelerate growth, and build scalable digital businesses.
          </p>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border border-hairline bg-hairline gap-px">
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
