/* eslint-disable */

import React from "react";

const feedback = [
  {
    name: "Swagata Sil",
    role: "CEO",
    quote:
      "Delivered a catchy, professional pitch deck right on time, creating a high-impact presentation perfect for our business needs.",
    rating: 5,
  },
  {
    name: "Wahida Rahman",
    role: "Client",
    quote:
      "They have an exceptional understanding of vision, delivering our perfect logo after many revisions, all in the same day.",
    rating: 4,
  },
  {
    name: "Swagatam Chakraborty",
    role: "CEO",
    quote:
      "It's very good and very catchy and got the work on time as promised. Loved the work and the dedication towards it.",
    rating: 5,
  },
  {
    name: "Sayann Sarkar",
    role: "Designer",
    quote:
      "Genuinely impressed by the quality of the design with incredible precision and attention to every detail.",
    rating: 5,
  },
  {
    name: "Naman Sisodiya",
    role: "Founder",
    quote:
      "The collaboration was seamless, and the final outcome exceeded expectations with a polished digital experience.",
    rating: 5,
  },
  {
    name: "Hetali Rai",
    role: "Product Lead",
    quote:
      "The team delivered a strong product vision and executed it with clarity, speed, and premium craft.",
    rating: 4,
  },
];

const Testimonials = () => {
  // Duplicate once for a seamless loop
  const marqueeItems = [...feedback, ...feedback];

  const Card = ({ item, index }) => (
    <article
      key={index}
      className="shrink-0 w-75 md:w-85 rounded-[2rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-mono mb-1">
            {item.role}
          </p>

          <h3 className="text-xl font-bold uppercase tracking-tight text-white">
            {item.name}
          </h3>
        </div>

        <div className="flex gap-1 text-yellow-400 text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < item.rating ? "opacity-100" : "opacity-20"}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <p className="text-white/60 leading-relaxed text-sm">{item.quote}</p>
    </article>
  );

  return (
    <>
      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 24px;
          animation: scrollLeft 28s linear infinite;
          will-change: transform;
        }

        .marquee-track.reverse {
          animation: scrollRight 28s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

      <section
        id="testimonials"
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 bg-[#0A0A0A] overflow-hidden"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.55em] text-yellow-400 font-mono mb-4">
            FEEDBACK.
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white">
            Aggregated performance metrics and qualitative strategic assessments.
          </h2>

          <p className="mt-5 text-white/50 uppercase tracking-[0.2em] text-sm">
            A premium two-row infinite testimonial marquee.
          </p>
        </div>

        <div className="relative mt-16 space-y-8">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

          {/* Top */}
          <div className="marquee">
            <div className="marquee-track">
              {marqueeItems.map((item, index) => (
                <Card item={item} index={index} key={`top-${index}`} />
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="marquee">
            <div className="marquee-track reverse">
              {marqueeItems.map((item, index) => (
                <Card item={item} index={index} key={`bottom-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;