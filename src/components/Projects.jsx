import { useState, useEffect, useRef } from "react";

const projectList = [
  {
    id: "red_flag",
    logNumber: "01",
    title: "Red Flag World",
    category: "Social Media",
    status: "Deployed",
    description: "A social verification platform designed to bring transparency and accountability to the modern dating landscape through community-driven cross-referencing.",
    link: "https://redflagworld.com/",
    themeColor: "#FF3B30",
    visualStyle: "nodes"
  },
  {
    id: "apertre",
    logNumber: "02",
    title: "Apertre 2.0",
    category: "Developer Tool",
    status: "Stable",
    description: "An open-source contribution event platform designed to bring together developers who believe in building and collaborating for the greater good.",
    link: "https://s2.apertre.resourcio.in/",
    themeColor: "#34C759",
    visualStyle: "binary"
  },
  {
    id: "royal_studios",
    logNumber: "03",
    title: "Royal Studios",
    category: "Real Estate",
    status: "Live",
    description: "A premium real estate showcase featuring meticulously designed villas and plots that blend luxury living with serene, strategic locations.",
    link: "https://royalstudios.org/",
    themeColor: "#FFD60A",
    visualStyle: "blueprint"
  },
  {
    id: "anjali",
    logNumber: "04",
    title: "Anjali Elastomer",
    category: "Manufacturing",
    status: "Deployed",
    description: "A manufacturing leader specializing in high-performance fastening systems and durable rubber components for the railway industry.",
    link: "https://www.anjalielastomer.com/",
    themeColor: "#FF9500",
    visualStyle: "industry"
  },
  {
    id: "spring_tree",
    logNumber: "05",
    title: "Spring Tree",
    category: "EdTech",
    status: "Online",
    description: "An innovative EdTech platform delivering comprehensive learning solutions and educational content to empower students and professionals.",
    link: "https://www.springtreepublisher.com/",
    themeColor: "#007AFF",
    visualStyle: "waves"
  },
  {
    id: "modisconto",
    logNumber: "06",
    title: "Modisconto",
    category: "AI E-Commerce",
    status: "Deployed",
    description: "An AI-powered fashion platform revolutionizing the retail experience through intelligent style discovery and personalized recommendations.",
    link: "https://modisconto.com",
    themeColor: "#AF52DE",
    visualStyle: "matrix"
  },
  {
    id: "rakshanet",
    logNumber: "07",
    title: "RakshaNet",
    category: "Safety Tech",
    status: "Stable",
    description: "A digital emergency network providing rapid response solutions to ensure safety and connectivity for users during critical moments.",
    link: "https://www.rakshanet.co.in/",
    themeColor: "#5856D6",
    visualStyle: "radar"
  },
  {
    id: "karigari",
    logNumber: "08",
    title: "Karigari Kart",
    category: "Marketplace",
    status: "Live",
    description: "An e-commerce platform connecting traditional artisans with global buyers to preserve artistry and empower local craft communities.",
    link: "https://www.karigarikart.com/",
    themeColor: "#FF2D55",
    visualStyle: "grid"
  }
];

const ProjectVisualizer = ({ style, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.strokeStyle = color;
      ctx.fillStyle = color;

      if (style === "nodes") {
        // Red Flag social network nodes
        const count = 15;
        const nodes = [];
        for (let i = 0; i < count; i++) {
          const angle = (i * Math.PI * 2) / count + tick * 0.005;
          const r = 80 + Math.sin(tick * 0.02 + i) * 15;
          nodes.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r
          });
        }
        ctx.beginPath();
        nodes.forEach((n, idx) => {
          ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
          ctx.fill();
          // Connect to next and center
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(nodes[(idx + 1) % count].x, nodes[(idx + 1) % count].y);
          ctx.strokeStyle = `${color}20`;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(cx, cy);
          ctx.strokeStyle = `${color}10`;
          ctx.stroke();
        });
      } else if (style === "binary") {
        // Apertre developer matrix codes
        ctx.font = "9px monospace";
        ctx.fillStyle = `${color}50`;
        for (let col = 0; col < w; col += 18) {
          const randomVal = Math.random() > 0.5 ? "1" : "0";
          const y = (cy + Math.sin(tick * 0.01 + col) * 60) % h;
          ctx.fillText(randomVal, col, y);
        }
      } else if (style === "blueprint") {
        // Real estate layout blueprint
        ctx.strokeStyle = `${color}20`;
        ctx.strokeRect(cx - 70, cy - 50, 140, 100);
        ctx.beginPath();
        ctx.moveTo(cx - 70, cy - 50);
        ctx.lineTo(cx + 70, cy + 50);
        ctx.moveTo(cx + 70, cy - 50);
        ctx.lineTo(cx - 70, cy + 50);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(cx, cy, 40 + Math.abs(Math.sin(tick * 0.01)) * 10, 0, Math.PI * 2);
        ctx.stroke();
      } else if (style === "industry") {
        // Manufacturing gears
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tick * 0.01);
        ctx.beginPath();
        ctx.arc(0, 0, 40, 0, Math.PI * 2);
        ctx.stroke();
        for (let i = 0; i < 8; i++) {
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-6, -50, 12, 15);
        }
        ctx.restore();
      } else if (style === "waves") {
        // Education wave patterns
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          const y = cy + Math.sin(x * 0.02 + tick * 0.05) * 20 * Math.sin(tick * 0.01);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.stroke();
      } else if (style === "matrix") {
        // AI fashion cluster dots
        ctx.fillStyle = color;
        for (let i = 0; i < 20; i++) {
          const x = cx + Math.sin(tick * 0.01 + i) * 60;
          const y = cy + Math.cos(tick * 0.015 + i * 2) * 40;
          ctx.beginPath();
          ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (style === "radar") {
        // Safety Tech Radar circles
        const sweep = (tick * 0.02) % (Math.PI * 2);
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.arc(cx, cy, 30, 0, Math.PI * 2);
        ctx.strokeStyle = `${color}30`;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(sweep) * 75, cy + Math.sin(sweep) * 75);
        ctx.strokeStyle = color;
        ctx.stroke();
      } else {
        // Grid pattern
        ctx.strokeStyle = `${color}20`;
        ctx.beginPath();
        for (let x = 20; x < w; x += 20) {
          ctx.moveTo(x, 10);
          ctx.lineTo(x, h - 10);
        }
        for (let y = 20; y < h; y += 20) {
          ctx.moveTo(10, y);
          ctx.lineTo(w - 10, y);
        }
        ctx.stroke();
      }

      tick++;
      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 260;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [style, color]);

  return <canvas ref={canvasRef} className="w-full h-full block bg-black/40" />;
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectList[0]);

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-[#0A0A0A] border-x-2 border-hairline-strong">
      
      {/* Header block */}
      <div className="w-full pt-4 mb-16 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-hairline pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1] tracking-tighter uppercase heading-gradient">
            Selected Works
          </h2>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1] tracking-tighter uppercase text-white/20 mt-1">
            Execution Log.
          </h2>
        </div>
        <div className="max-w-xs md:text-right">
          <p className="font-mono text-[9px] md:text-[10px] text-[#555] uppercase leading-relaxed tracking-widest">
            A comprehensive registry of technical assets and high-stakes digital infrastructure.
          </p>
        </div>
      </div>

      {/* Main Grid Layout split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
        
        {/* Left Side: Logs tabs selector (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col border border-hairline divide-y divide-hairline bg-[#050505]">
          <div className="p-4 bg-black/50 border-b border-hairline flex justify-between items-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#444] font-bold">DIRECTORY_LIST</span>
            <span className="font-mono text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 font-bold uppercase rounded">OK</span>
          </div>

          <div className="flex-1 max-h-[460px] overflow-y-auto">
            {projectList.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 border-l-2 hover:bg-white/[0.02] cursor-pointer group ${
                  activeProject.id === project.id 
                    ? "bg-white/[0.03] border-primary text-white" 
                    : "border-transparent text-[#666] hover:text-white/80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-[9px] font-bold transition-colors ${
                    activeProject.id === project.id ? "text-primary" : "text-[#444] group-hover:text-[#666]"
                  }`}>
                    LOG_{project.logNumber}
                  </span>
                  <span className="font-display text-sm tracking-wide font-bold uppercase">
                    {project.title}
                  </span>
                </div>
                
                <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border ${
                  activeProject.id === project.id 
                    ? "border-primary/30 text-primary bg-primary/5" 
                    : "border-hairline text-[#444] group-hover:border-hairline-strong"
                }`}>
                  {project.status}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Log display / execution view (col-span-8) */}
        <div className="lg:col-span-8 border border-hairline bg-[#050505] flex flex-col justify-between overflow-hidden">
          
          {/* Top Info Bar */}
          <div className="p-4 border-b border-hairline bg-black/50 flex justify-between items-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#555] font-bold">
              SYS_EXECUTION_STREAM: active_log_#{activeProject.logNumber}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full animate-pulse"></span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-primary font-bold">Live Link</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 flex-1">
            
            {/* Project Copy Meta Description (col-span-5) */}
            <div className="md:col-span-6 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-hairline bg-[#0A0A0A]/30">
              
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-display font-extrabold uppercase mb-6 tracking-tight animate-[fadeIn_0.5s_ease-out_forwards]"
                  style={{ color: activeProject.themeColor }}
                >
                  {activeProject.title}
                </h3>
                
                <p className="text-white/60 text-xs md:text-sm leading-relaxed uppercase tracking-wider font-light mb-8">
                  {activeProject.description}
                </p>
              </div>

              {/* Status details */}
              <div className="border-t border-hairline pt-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="block font-mono text-[8px] text-[#555] uppercase tracking-widest mb-1 font-bold">Category</span>
                    <span className="font-display text-xs text-white uppercase font-bold tracking-wide">{activeProject.category}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] text-[#555] uppercase tracking-widest mb-1 font-bold">Status</span>
                    <span className="font-display text-xs text-white uppercase font-bold tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeProject.themeColor }}></span>
                      {activeProject.status}
                    </span>
                  </div>
                </div>

                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href={activeProject.link}
                  className="btn-primary py-2.5 px-6 text-[10px] w-full"
                >
                  Launch Build
                </a>
              </div>

            </div>

            {/* Custom interactive system matrix screen representation (col-span-7) */}
            <div className="md:col-span-6 relative bg-black/60 flex flex-col items-center justify-center min-h-[260px] md:min-h-0">
              {/* Blueprint mesh overlay */}
              <div className="absolute inset-0 blueprint-grid opacity-[0.04]"></div>
              
              {/* Animation Viewport */}
              <ProjectVisualizer style={activeProject.visualStyle} color={activeProject.themeColor} />
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                <span className="font-mono text-[7px] text-[#555] uppercase tracking-widest font-bold">SYS_VISUALIZER_RUNNING</span>
                <span className="font-mono text-[7px] text-[#555] uppercase tracking-widest font-bold">PRECISION: HIGH</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;
