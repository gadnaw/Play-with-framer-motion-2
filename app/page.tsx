// import AnimationControls from "@/components/framer-motion/AnimationControls";
// import AnimationControls2 from "@/components/framer-motion/AnimationControls2";
// import BasicsOfMotion from "@/components/framer-motion/BasicsOfMotion";
// import Gestures from "@/components/framer-motion/Gestures";
// import ScrollAnimation from "@/components/framer-motion/ScrollAnimation";
// import ScrollAnimations2 from "@/components/framer-motion/ScrollAnimation2";
// import ScrollAnimations from "@/components/framer-motion/ScrollAnimation2";
// import ViewBaseAnimations from "@/components/framer-motion/ViewBaseAnimations";
// import ViewBaseAnimations2 from "@/components/framer-motion/ViewBaseAnimations2";
import RotateImage from "@/features/RotateImage";
// import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative h-screen grid place-content-center overflow-hidden mx-auto sm:px-10 px-5 bg-gray-600">
      <div>
        {/*  */}
        {/* DEMO of onMount and onExit Animation */}
        {/* <BasicsOfMotion /> */}

        {/* DEMO OF Animation when something happened but dont affect other components*/}
        {/* <Gestures /> */}

        {/* <AnimationControls /> */}
        {/* <AnimationControls2 /> */}
        {/* <ScrollAnimation /> */}
        {/* <ScrollAnimations2 /> */}
        {/* <ViewBaseAnimations /> */}
        {/* <ViewBaseAnimations2 /> */}
        {/* --------------------- */}

        <RotateImage />
      </div>
    </main>
  );
}
