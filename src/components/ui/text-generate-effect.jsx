"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

const motionElements = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
};

export const TextGenerateEffect = ({
  words,
  as: Component = "div",
  className,
  wordClassName,
  wordStyle,
  filter = true,
  duration = 0.5,
  delay = 0.2,
  ...props
}) => {
  const [scope, animate] = useAnimate();
  const MotionComponent = motionElements[Component] ?? motion.div;
  const wordsArray = words.split(/(\s+)/);

  useEffect(() => {
    animate("[data-text-generate-word]", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(delay),
    });
  }, [animate, delay, duration, filter]);

  return (
    <MotionComponent
      ref={scope}
      className={cn("text-white", className)}
      {...props}
    >
      {wordsArray.map((word, idx) => {
        if (/^\s+$/.test(word)) {
          return word;
        }

        return (
          <motion.span
            key={`${word}-${idx}`}
            data-text-generate-word
            className={cn("inline-block opacity-0", wordClassName)}
            style={{
              ...wordStyle,
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </MotionComponent>
  );
};
