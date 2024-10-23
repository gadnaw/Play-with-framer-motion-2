"use client";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls2 = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.set({ rotate: "0deg" });
    controls.start("tayek");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button bg-blue-500">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          tayek: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: 2, ease: "backInOut" }}
      ></motion.div>
    </div>
  );
};

export default AnimationControls2;
