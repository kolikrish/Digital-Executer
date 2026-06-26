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
    "number": "01",
    "title": "AI AGENTS",
    "description": "Deploy intelligent AI agents that automate customer support, qualify leads, schedule appointments, answer inquiries, and operate 24/7—reducing manual work while improving customer experience."
  },
  {
    "number": "02",
    "title": "BUSINESS AUTOMATION",
    "description": "Streamline repetitive workflows with intelligent automation. From CRM integrations and lead management to WhatsApp, email, and internal business processes, we help your business run faster and more efficiently."
  },
  {
    "number": "03",
    "title": "LEAD GENERATION & SALES",
    "description": "Build predictable customer acquisition systems with automated funnels, conversion optimization, CRM pipelines, and sales automation designed to generate qualified leads and increase revenue."
  },
  {
    "number": "04",
    "title": "DIGITAL MARKETING STRATEGY",
    "description": "Develop data-driven marketing strategies that strengthen your brand, improve customer acquisition, and maximize return on every marketing investment across digital channels."
  },
  {
    "number": "05",
    "title": "WEB & APP DEVELOPMENT",
    "description": "Design and build high-performance websites, custom web applications, mobile apps, dashboards, and SaaS platforms focused on speed, scalability, and exceptional user experience."
  },
  {
    "number": "06",
    "title": "SOCIAL MEDIA & BRAND GROWTH",
    "description": "Create strategic content systems that build authority, increase engagement, and establish a strong digital presence across today's most impactful social platforms."
  }
]

  return (
    <section id="services" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong">
      
      {/* Services Header */}
      <div className="w-full pt-4 mb-16 flex flex-col items-center text-center gap-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none tracking-tighter uppercase heading-gradient">
            CORE SERVICES.
          </h2>
        </div>
        <div className="max-w-sm mt-4">
          <p className="font-mono text-[9px] md:text-[10px] text-[#555] uppercase leading-relaxed tracking-widest">
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
