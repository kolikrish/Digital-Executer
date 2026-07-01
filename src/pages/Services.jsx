import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Services = () => {
  const servicesList = [
    {
      title: "GROWTH AND STRATEGY",
      subtitle: "Business and marketing assessment, Audience and customer analysis",
      description:
        "We assess your business, customers, offer, current channels, competitors and available resources. We then define the most relevant priorities, campaigns and customer journeys.",
      features: [
        "Digital Marketing Strategy",
        "Growth Consulting",
        "Offer Testing and Validation",
        "Product and Service Feedback",
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "ADVERTISING AND LEAD GENERATION",
      subtitle: "Streamlined Revenue Operations",
      description:
        "We design a lead-generation system that may include advertisements, forms, landing pages, lead magnets, qualification questions, CRM pipelines and follow-up automation.",
      features: [
        "Performance Marketing",
        "Meta Ads Management",
        "Lead Generation",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "WEBSITES AND CONVERSION SYSTEMS",
      subtitle: "The planning, design and development of a website built around your business goals and customer journey.",
      description:
        "An outdated, confusing or poorly structured website can reduce trust and prevent interested visitors from contacting the business.",
      features: [
        "Sales Funnel Development",
        "Landing Page Design",
        "Website Design and Development",
        "Conversion Rate Optimization",
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SEO AND ORGANIC GROWTH",
      subtitle: "A structured process for improving your website’s visibility for relevant searches on search engines.",
      description:
        "We assess the website, research relevant search opportunities and implement technical, on-page and content improvements.",
      features: [
        "Search Engine Optimization",
        "Internal linking recommendations",
        "Local SEO recommendations, where relevant",
        "Performance monitoring",
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },

    {
      title: "AI AND BUSINESS AUTOMATION",
      subtitle: "A conversational system that helps answer common questions, capture enquiries, guide users or support selected business processes.",
      description:
        "We identify suitable chatbot use cases and develop a solution based on your website, frequently asked questions, services and workflow requirements.",
      features: [
        "AI Chatbot Development",
        "CRM Setup",
        "Marketing and Sales Automation",
        "Lead Follow-Up Automation",
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    },

    {
      title: "SALES SYSTEMS AND OPTIMIZATION",
      subtitle: "The setup and management of systems that help you understand where traffic, leads and conversions are coming from",
      description:
        "Without reliable tracking, businesses may continue spending on channels that appear active but do not create enough meaningful results",
      features: [
        "Analytics, Tracking and Reporting",
        "End-to-End Growth Execution",
        "Clearer campaign comparisons",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* Noise Overlay Layer */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbwbopuch/image/upload/v1759774934/noise_f7u1qf.png')",
        }}
      />

      {/* Global Backdrop Blueprint Grid */}
      <div className="fixed inset-0 blueprint-grid z-0 pointer-events-none opacity-10" />

      {/* Main Page Layout Wrapper */}
      <div className="relative z-10 flex flex-col w-full bg-background shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        <Navbar />

        {/* Page Spacer */}
        <div className="h-24 sm:h-28"></div>

        {/* Header Section */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-8 border-x-2 border-hairline-strong bg-background text-center relative">
          <span className="px-5 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-primary border-x border-primary/30 relative">
            <span className="absolute top-0 left-0 w-2.5 h-px bg-primary"></span>
            <span className="absolute top-0 right-0 w-2.5 h-1px bg-primary"></span>
            <span className="absolute bottom-0 left-0 w-2.5 h-1px bg-primary"></span>
            <span className="absolute bottom-0 right-0 w-2.5 h-1px bg-primary"></span>
            SERVICES
          </span>

          <TextGenerateEffect
            as="h1"
            words="Services Built Around the Complete Customer Journey"
            className="text-4xl sm:text-5xl md:text-5xl font-display font-medium text-white tracking-tight mt-6 mb-4 leading-none"
            duration={0.5}
            delay={0.12}
          />
          <p className="font-[poppins] text-sm md:text-base text-[#888] max-w-2xl mx-auto leading-relaxed mt-2">
            We architect, develop, and manage dependable business & software infrastructures. Explore our core areas of delivery below.
          </p>
        </section>

        {/* Alternating Services list */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 border-x-2 border-hairline-strong bg-background relative divide-y divide-hairline">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="py-16 md:py-24 grid gap-10 lg:grid-cols-2 items-center"
              >
                {/* Text Content Block */}
                <div className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                    SERVICE 0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display text-white font-medium mb-1">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-primary/80 font-mono tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-sm sm:text-[15px] font-[poppins] text-[#888] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 font-[poppins] text-xs sm:text-sm text-white/90">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Block */}
                <div
                  className={`relative group overflow-hidden rounded-[2rem] border border-hairline bg-[#0c0c0c] aspect-video sm:aspect-auto sm:h-80 shadow-[0_15px_40px_rgba(0,0,0,0.3)] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA section at bottom */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 border-x-2 border-t border-hairline bg-background text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display tracking-tight text-white leading-tight">
              Ready to Accelerate Your Operations?
            </h2>
            <p className="font-[poppins] text-sm text-[#888] leading-relaxed">
              We specialize in custom web software development, benefit verifications, and ML training pipelines. Let's build your solution.
            </p>
            <a
              href="/contact"
              className="btn-primary py-3.5 px-8 text-[10px] md:text-[11px] rounded-full mt-4 font-mono font-bold tracking-[0.2em] inline-flex items-center gap-2"
            >
              Get In Touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Services;
