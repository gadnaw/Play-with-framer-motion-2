"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// LESSON: demonstrates animation onMount and onExit
const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="grid place-content-center h-screen gap-3">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-500"
        layout
      >
        Show/Hide
      </motion.button>

      {/* AnimatePresence enables exit animations */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          // motion.div is used to create an animated div element
          <motion.div
            // Initial state of the animation
            initial={{ rotate: "0deg", scale: 0, y: 0 }} // y: 0 means the element starts at its original vertical position
            // Animated state when the element is visible
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
              // The y array defines a sequence of vertical positions:
              // 0: Start at the original position
              // 150: Move 150px down
              // -150: Jump to 150px up
              // -150: Stay at 150px up
              // 0: Return to the original position
              // This creates a complex up-and-down motion
            }}
            // Exit animation when the element is removed
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            // Animation configuration
            transition={{
              duration: 2,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.8, 1],
              // The 'times' array corresponds to the y animation array:
              // 0: Start of the animation (0% of duration)
              // 0.4: When it reaches the bottom (40% of duration)
              // 0.5: When it jumps to the top (50% of duration)
              // 0.8: When it jumps to the top (80% of duration)
              // 1: End of the animation (100% of duration)
              // These values are fractions of the total duration (2 seconds)
              // This timing creates a non-linear motion effect
            }}
            className="w-[150px] h-[150px] bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
