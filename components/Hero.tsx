import { Spotlight } from "./Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight effect - Aceternity UI */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="-left-full  h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <h1 className="text-black text-center text-4xl font-bold">
          Hello World
        </h1>
      </div>
    </div>
  );
};

export default Hero;
