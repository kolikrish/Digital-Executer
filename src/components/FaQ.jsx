import { useState } from "react";

const FaQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first one open by default as in the screenshot

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Do you provide only consulting?",
      answer:
        "No. Digital Executor combines consulting with implementation. Depending on the selected scope, the team may help execute advertising campaigns, websites, landing pages, funnels, CRM systems, lead follow-up automation, AI chatbots, SEO improvements and analytics setup.",
    },
    {
      question: "Can I hire Digital Executor for only one service?",
      answer:
        "Yes. You can discuss a specific requirement such as Meta Ads, a landing page, website development, CRM setup or an AI chatbot. During the consultation, we will also identify whether another part of the customer journey may affect the success of that service.",
    },
    {
      question: "Can you take over an existing advertising campaign?",
      answer:
        "Yes. We can review an existing campaign structure, targeting, creatives, tracking, landing pages and available performance data. The review does not automatically mean the campaign only needs minor optimization. In some cases, the offer, funnel or tracking process may also require improvement.",
    },
    {
      question: "Do you work with every type of business?",
      answer:
        "We consider each project individually. Suitability depends on the business model, service requirements, expectations, market, available budget and whether Digital Executor has the appropriate capabilities for the project. Where a project is not suitable, we aim to communicate this clearly.",
    },
    {
      question: "How will communication and reporting work?",
      answer:
        "The communication and reporting process will be defined according to the service scope. Reports should explain what was implemented, what the performance data shows, what challenges were identified and what actions are recommended next.",
    },
  ];

  return (
    <section id="faq" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 bg-background border-x-2 border-hairline-strong">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* FAQS Badge */}
        <span className="px-5 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-primary border-x border-primary/30 relative">
          <span className="absolute top-0 left-0 w-2.5 h-px bg-primary"></span>
          <span className="absolute top-0 right-0 w-2.5 h-px bg-primary"></span>
          <span className="absolute bottom-0 left-0 w-2.5 h-px bg-primary"></span>
          <span className="absolute bottom-0 right-0 w-2.5 h-1px bg-primary"></span>
          FAQS
        </span>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight tracking-tight text-white text-center mt-6 mb-16 max-w-3xl">
          Frequently Asked Questions From
          <br />
          Us
        </h2>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="group border border-hairline rounded-xl bg-white/1 hover:bg-white/2 hover:border-hairline-strong transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-7 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-sans font-medium text-white/90 group-hover:text-white transition-colors duration-200 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border border-hairline-strong bg-background text-white/70 group-hover:text-white transition-all duration-300 ${
                      isOpen ? "rotate-180 border-primary/50 text-primary" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Animated content expansion */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 md:px-7 md:pb-7 text-sm md:text-[15px] font-[poppins] text-[#888] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaQ;