const ClientMarquee = () => {
  const clients = [
    "Hetali Rai",
    "Naman Sisodiya",
  ];

  // Duplicate items to ensure smooth infinite loop
  const listItems = [...clients, ...clients, ...clients];

  return (
    <div className="w-full bg-background border-b overflow-hidden py-8 border-x-2 border-hairline-strong max-w-7xl mx-auto">
      <div className="relative z-20 overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div className="flex w-max animate-marquee whitespace-nowrap gap-16 items-center">
          {listItems.map((client, idx) => (
            <div key={idx} className="flex items-center gap-4 px-4">
              {/* Rotating orange diamond separator */}
              <div className="w-2.5 h-2.5 bg-primary/40 rotate-45 shrink-0 transition-all duration-500 hover:bg-primary hover:scale-125"></div>
              
              <span className="font-display text-lg md:text-2xl text-white/30 hover:text-white transition-colors duration-500 tracking-[0.2em] cursor-default whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
