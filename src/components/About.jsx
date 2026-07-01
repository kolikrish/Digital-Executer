import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Globe from "../assets/globe.gif";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  const originHeadingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: originHeadingRef,
    offset: ["start 75%", "end 45%"],
  });
  const growthHeading = "Stop Collecting\nStrategies.\nStart Executing Growth.";
  const originHeading =
    "Digital Executerr was built to fix the gap between ideas and execution — where strategy is clear but delivery is unreliable.";

  const originWords = originHeading.split(" ");

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">

        {/* Left panel: hero card with stats */}
        <motion.div drag dragSnapToOrigin className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-hairline bg-[#050505] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(176,137,72,0.1),transparent_30%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src={Globe}
              alt="Office background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 flex min-h-140 flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.45em] text-primary">
                Built For Execution
              </span>

              <TextGenerateEffect
                as="h2"
                words={growthHeading}
                className="mt-8 whitespace-pre-line font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-white"
                duration={0.5}
                delay={0.12}
              />

              <p className="mt-6 mb-6 font-[poppins] text-sm sm:text-base leading-relaxed text-[#b8b8b8] max-w-xl">
                Digital Executerr helps businesses move beyond strategy and low-cost labor by building dependable delivery systems, automation frameworks, and conversion-focused customer journeys that run 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-[1.75rem] border border-hairline bg-white/5 p-5 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-hairline bg-[#0d0d0d] p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b8b8b]">Acceptance</p>
                <p className="mt-3 text-3xl font-display text-white">98.5%</p>
              </div>
              <div className="rounded-[1.5rem] border border-hairline bg-[#0d0d0d] p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b8b8b]">Uptime</p>
                <p className="mt-3 text-3xl font-display text-white">24/7</p>
              </div>
              <div className="rounded-[1.5rem] border border-hairline bg-[#0d0d0d] p-5">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b8b8b]">Continents</p>
                <p className="mt-3 text-3xl font-display text-white">2</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right panel: story + cards */}
        <div className="space-y-6">
          <motion.div drag dragSnapToOrigin className="rounded-[2rem] cursor-pointer border border-hairline bg-[#0c0c0c] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <span className="text-[10px] uppercase tracking-[0.45em] text-primary">Origin</span>
            <motion.h3
              ref={originHeadingRef}
              className="mt-6 text-3xl sm:text-3xl font-display leading-tight text-white"
              aria-label={originHeading}
            >
              {originWords.map((word, index) => {
                const start = index / originWords.length;
                const end = start + 1 / originWords.length;

                return (
                  <ScrollWord
                    key={`${word}-${index}`}
                    progress={scrollYProgress}
                    range={[start * 0.65, end * 0.65 + 0.2]}
                  >
                    {word}
                  </ScrollWord>
                );
              })}
            </motion.h3>
            <p className="mt-6 font-[poppins] text-sm sm:text-base leading-relaxed text-[#b8b8b8]">
              Too many teams get plans without systems. We create resilient delivery engines that combine automation, performance marketing, and operational discipline so business momentum stays built-in, not bolted on.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.div drag dragSnapToOrigin className="rounded-[1.75rem] cursor-pointer border border-hairline bg-[#080808] p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">•</span>
              <h4 className="mt-4 text-xl font-medium text-white">Always Improving</h4>
              <p className="mt-3 text-sm font-[poppins] leading-relaxed text-[#a9a9a9]">
                US-led quality and global execution combine with data-driven iteration so every campaign, funnel and automation improves as it runs.
              </p>
            </motion.div>

            <motion.div drag dragSnapToOrigin className="rounded-[1.75rem] border border-hairline cursor-pointer bg-linear-to-br from-[#080808] via-[#171207] to-[#211807] p-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#E6C87A]">Era</span>
              <h4 className="mt-4 text-xl font-medium">Built for the AI Era.</h4>
              <p className="mt-3 text-sm font-[poppins] leading-relaxed text-[#d1d1d1]">
                We pair automation with human oversight so decision-making, delivery, and growth all move at the pace of intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block whitespace-pre text-white"
      aria-hidden="true"
    >
      {children}{" "}
    </motion.span>
  );
};

export default About;
