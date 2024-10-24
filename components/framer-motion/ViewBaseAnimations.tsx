"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBaseAnimations = () => {
  // References for the two motion divs
  const ref = useRef(null); // Reference for the first div
  const ref2 = useRef(null); // Reference for the second div

  // Hook to determine if the divs are in the viewport
  const isInView = useInView(ref); // Visibility state for the first div
  const isInView2 = useInView(ref2); // Visibility state for the second div

  useEffect(() => {
    // Log visibility status of the first div
    console.log(isInView);
  }, [isInView]); // Effect runs when isInView changes

  return (
    <>
      {/* Tall div to enable scrolling */}
      <div className="h-[150vh] bg-gray-500"></div>
      {/* First div: changes color based on visibility */}
      <motion.div
        ref={ref}
        className={`h-[100vh] transition-colors duration-700 ${
          // Conditional class based on visibility state
          isInView ? "bg-red-500" : "bg-green-600"
        }`}
      >
        test
      </motion.div>
      {/* Second div: changes color based on visibility */}
      <motion.div
        ref={ref2}
        className={`h-[100vh] transition-colors duration-1000 ${
          // Conditional class based on visibility state
          // If the second div is in view, it will have a blue background, otherwise it will be black
          isInView2 ? "bg-blue-500" : "bg-black"
        }`}
      ></motion.div>
      ;
    </>
  );
};

export default ViewBaseAnimations;
