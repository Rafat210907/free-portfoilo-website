import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section >
      
      <div className="flex flex-col justify-center  sm:mt-32">
        
      </div>
    </section>
  );
};

export default Hero;
