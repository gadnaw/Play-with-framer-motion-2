import AnimationControls from "@/components/framer-motion/AnimationControls";
import AnimationControls2 from "@/components/framer-motion/AnimationControls2";
import BasicsOfMotion from "@/components/framer-motion/BasicsOfMotion";
import Gestures from "@/components/framer-motion/Gestures";
import ScrollAnimations from "@/components/framer-motion/ScrollAnimation";
// import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-gray-600">
      <div className="max-w-7xl w-full">
        {/*  */}
        {/* DEMO of onMount and onExit Animation */}
        {/* <BasicsOfMotion /> */}

        {/* DEMO OF Animation when something happened but dont affect other components*/}
        {/* <Gestures /> */}

        {/* <AnimationControls /> */}
        {/* <AnimationControls2 /> */}

        <ScrollAnimations />
      </div>
    </main>
  );
}
