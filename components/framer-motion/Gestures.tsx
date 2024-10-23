"use client";
import { motion, MotionConfig } from "framer-motion";

// LESSON: demonstrate Animation when SOMETHING HAPPENED
const Gestures = () => {
  return (
    <div className="grid place-content-center h-screen gap-3">
      {/* MotionConfig provides default animation settings for all child components */}
      <MotionConfig transition={{ duration: 0.15, ease: "backInOut" }}>
        {/* First animated button */}
        <motion.button
          className="example-button bg-blue-500"
          // Scale up by 15% on hover
          whileHover={{ scale: 1.15 }}
          // Scale down and rotate slightly on tap/click
          whileTap={{ scale: 0.85, rotate: "2.5deg" }}
          // Individual transition prop is commented out as it's now handled by MotionConfig
          //   transition={{ duration: 0.15, ease: "backInOut" }}
        >
          Click Me!!
        </motion.button>
        {/* Second animated button */}
        <motion.button
          className="example-button bg-green-500"
          // Scale up by 5% on hover

          whileHover={{ scale: 1.05 }}
          // Scale down and rotate slightly in the opposite direction on tap/click
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
          // Individual transition prop is commented out as it's now handled by MotionConfig
          //   transition={{ duration: 0.15, ease: "backInOut" }}
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
