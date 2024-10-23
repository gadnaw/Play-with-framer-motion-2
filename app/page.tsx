import AnimationControls from "@/components/framer-motion/AnimationControls";
import BasicsOfMotion from "@/components/framer-motion/BasicsOfMotion";
import Gestures from "@/components/framer-motion/Gestures";
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

        <AnimationControls />
      </div>
    </main>
  );
}
