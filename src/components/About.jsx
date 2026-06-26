import { useEffect, useRef } from "react";

const WireframeGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId;
    let angle = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.45;

      ctx.strokeStyle = "rgba(255, 77, 0, 0.08)";
      ctx.lineWidth = 1;

      // Draw latitude circles
      const latCount = 9;
      for (let i = 1; i < latCount; i++) {
        const theta = (i * Math.PI) / latCount;
        const r = radius * Math.sin(theta);
        const y = cy + radius * Math.cos(theta);

        ctx.beginPath();
        ctx.ellipse(cx, y, r, r * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude circles (rotated)
      const lonCount = 10;
      for (let i = 0; i < lonCount; i++) {
        const phi = (i * Math.PI) / lonCount + angle;
        const rx = radius * Math.cos(phi);

        ctx.beginPath();
        // Drawing ellipse to represent longitude slices
        ctx.ellipse(cx, cy, Math.abs(rx), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 77, 0, ${Math.abs(Math.cos(phi)) * 0.06 + 0.04})`;
        ctx.stroke();
      }

      // Draw outer boundary circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      angle += 0.003;
      animFrameId = requestAnimationFrame(drawGlobe);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawGlobe();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none block" />;
};

const About = () => {
  return (
    <div id="about" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong flex flex-col items-start">
      
      {/* Heading Block */}
      <div className="w-full pt-4 mb-16 flex flex-col items-center text-center gap-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none tracking-tighter uppercase heading-gradient">
            We Build Intelligent
          </h2>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-none tracking-tighter uppercase text-white/20 mt-1">
            Business Systems.
          </h2>
        </div>
        <div className="max-w-sm mt-4">
          <p className="font-mono text-[9px] md:text-[10px] text-[#555] uppercase leading-relaxed tracking-widest">
            Empowering businesses with AI, automation, and digital solutions that drive measurable growth
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-0 border border-hairline bg-[#050505]">
        
        {/* Left Side: Longform text & Stats Grid (col-span-8) */}
        <div className="lg:col-span-8 p-6 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-hairline bg-background/50">
          
          <div className="text-lg md:text-2xl leading-relaxed text-[#888] font-light uppercase tracking-tight mb-12">
            At <span className="text-white font-normal">Digital Executorr</span>, we don't just deliver digital services<span className="text-white font-normal"> we engineer intelligent systems </span>that help businesses work smarter, optimize customer journeys, and scale revenue. We combine AI agents, business automation, modern web experiences, mobile applications, and strategic marketing to build systems that work around the clock <span className="text-primary font-normal">so your business can grow faster with less manual effort.</span>.
          </div>

          {/* Core metrics details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full border-t border-hairline bg-background/20">
            <div className="p-5 border-r last:border-r-0 border-hairline flex flex-col gap-3 group">
              <span className="font-mono text-[8px] text-[#555] group-hover:text-primary transition-colors uppercase tracking-[0.25em] font-bold leading-none">AI.Systems</span>
              <span className="font-display text-2xl md:text-3xl text-white font-bold leading-none">20+</span>
            </div>
            
            <div className="p-5 border-r last:border-r-0 border-hairline flex flex-col gap-3 group">
              <span className="font-mono text-[8px] text-[#555] group-hover:text-primary transition-colors uppercase tracking-[0.25em] font-bold leading-none">Businesses.Empowered</span>
              <span className="font-display text-2xl md:text-3xl text-white font-bold leading-none">50+</span>
            </div>

            <div className="p-5 border-r last:border-r-0 border-hairline flex flex-col gap-3 group">
              <span className="font-mono text-[8px] text-[#555] group-hover:text-primary transition-colors uppercase tracking-[0.25em] font-bold leading-none">Processes.Automated</span>
              <span className="font-display text-2xl md:text-3xl text-white font-bold leading-none">100+</span>
            </div>

            <div className="p-5 border-r last:border-r-0 border-hairline flex flex-col gap-3 group">
              <span className="font-mono text-[8px] text-[#555] group-hover:text-primary transition-colors uppercase tracking-[0.25em] font-bold leading-none">Client.Satisfaction</span>
              <span className="font-display text-2xl md:text-3xl text-white font-bold leading-none">98%</span>
            </div>
          </div>

        </div>

        {/* Right Side: Globe GIF Wireframe simulation card (col-span-4) */}
        <div className="lg:col-span-4 bg-[#050505] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-9 border-hairline">
          {/* Blueprint backdrop on right side card */}
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
          
          {/* Globe Canvas Simulation */}
          <div className="absolute -bottom-16 -right-16 w-[120%] h-[120%] opacity-40 mix-blend-screen pointer-events-none">
            <WireframeGlobe />
          </div>

          <div className="relative z-10">
            <span className="text-primary text-5xl font-display italic font-extrabold leading-none block mb-6">"</span>
            <p className="text-white/80 text-xs md:text-sm italic leading-relaxed uppercase tracking-wider font-light">
              "Technology should do more than impress—it should save time, generate revenue, and create opportunities for growth. That's exactly what we build."
            </p>
          </div>

          <div className="relative z-10 border-t border-hairline pt-4 mt-8 flex justify-between items-center">
            <span className="font-mono text-[8px] uppercase tracking-widest text-[#555]">ENGINE_LOG: OK</span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
