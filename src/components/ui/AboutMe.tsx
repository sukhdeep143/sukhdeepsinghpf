"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.2, // Small delay
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-white">
      {/* Text Container */}
      <div className="flex flex-col text-center sm:text-left max-w-lg">
        <h1
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-center animate-gradient">
          About Me
        </h1>
        {/* Animated Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          <p className="text-lg sm:text-2xl leading-7 text-teal-100 hover:font-extralight text-center">
            I am a dedicated and skilled front-end developer with a passion for
            creating seamless and visually appealing user experiences. Currently
            pursuing my Master of Computer Applications (MCA), I am deeply
            invested in enhancing my technical expertise and expanding my
            knowledge base. With hands-on experience in front-end development, I
            specialize in building responsive and dynamic web interfaces that
            prioritize user engagement and accessibility.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
