import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { opacity, slideUp } from "./anim.js";
import "./loader.scss";

const words = [
  "Digital Executerr",
  "Strategize",
  "Execute",
  "Grow",
  "Drive Results",
];

export default function Loader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return undefined;

    const timeout = setTimeout(() => {
      setIndex((currentIndex) => currentIndex + 1);
    }, index === 0 ? 900 : 360);

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 280} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.25 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="loader-introduction"
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            className="loader-content"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <span className="loader-kicker">Experience</span>
            <p>{words[index]}</p>
            <div className="loader-line" />
          </motion.div>

          <svg aria-hidden="true">
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  );
}
