"use client";
// Lesson from https://www.youtube.com/watch?v=znbCa4Rr054&t=1185s
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const control = useAnimationControls();
  const handleClick = () => {
    control.set({ rotate: "0deg" });
    control.start("flip");
  };
  return (
    <div className="grid place-content-center h-screen gap-3">
      <button onClick={handleClick} className="example-button bg-blue-500">
        Clicker
      </button>
      <motion.div
        variants={{ initial: { rotate: "0deg" }, flip: { rotate: "360deg" } }}
        initial="initial"
        animate={control}
        transition={{ duration: 3, ease: "backInOut" }}
        className="h-[150px] w-[150px] bg-black-200"
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
