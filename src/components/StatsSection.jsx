import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section >
      
      <div className="flex justify-center mt-10 xl:gap-52">
      <div className="text-center">
        <p className="text-green-500 text-5xl xl:text-6xl font-bold">80+</p>
        <p className="text-gray-700 text-xl">Satisfied clients</p>
      </div>
      <div className="block h-12 border-l border-gray-300"></div>
      <div className="text-center">
        <p className="text-green-500 text-5xl xl:text-6xl font-bold">200+</p>
        <p className="text-gray-700 text-lg">Projects completed</p>
      </div>
      <div className="block h-12 border-l border-gray-300"></div>
      <div className="text-center">
        <p className="text-green-500 text-5xl xl:text-6xl font-bold">99+</p>
        <p className="text-gray-700 text-lg">Reviews given</p>
      </div>
      </div>
    </section>
  );
};

export default Hero;