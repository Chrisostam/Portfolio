import { FlipWords } from "./ui/flip-words";
import React from "react";


const Hero = () => {
  const words = ["Web Developer", "Software Developer",  "Designer"];
  return (
    <main>
      <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hello I am a<br />
        <FlipWords className="text-center text-[40px] md:text-5xl lg:text-6xl" words={words} /> <br />
      </div>

      </div> 
    </main>
  );
}

export default Hero;