"use client";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const RotateImage = () => {
  // 2nd: make a variable of MotionValue that we can assign
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // ------------

  // 1st: handle the mouseMove so we have something to assign in a "MotionValue"
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    // -----------
    // 3rd: assign the clientx to x
    x.set(clientX);
    y.set(clientY);
    // --------------
    console.log(clientX, clientY);
  };

  // 4th: Know the size of the Screen
  const [windowOffset, setWindowOffset] = useState({ innerH: 0, innerW: 0 });

  // 5th: Know when to start by using MouseEnter to start the transformation
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(true);
    // ---------------
    // 6th: Here we call Window API to the innerHeight and innerWidth
    setWindowOffset({
      innerH: window.innerHeight,
      innerW: window.innerWidth,
    });
  };
  const { innerH, innerW } = windowOffset;
  // --------------

  // 7th: Transform the values for rotation according to mouse possition
  // useTransform(<variable>, [<input range>], [<output range>] )
  // rotateXaxis and rotateYAxis is the main goal before animation
  const rotateXAxis = useTransform(x, [0, innerW], [-50, 50]);
  const rotateYAxis = useTransform(y, [0, innerH], [10, -50]);

  return (
    <div className="border-solid bg-green-400">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        // we need h-screen
        className="h-screen"
        // 8th: here we will use the useTranform output
        style={{
          rotateX: mouseEnter ? rotateXAxis : 0,
          rotateY: mouseEnter ? rotateYAxis : 0,
          transition: "0.1s",
        }}
      >
        <Image src={"person.svg"} alt="Person image" width={450} height={450} />
      </motion.div>
    </div>
  );
};

export default RotateImage;
