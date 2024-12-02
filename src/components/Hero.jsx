import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import heroimg from "../assets/img/heroimg.png"
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="Home">      
       <img src={heroimg} alt="Hero Image" className="bg-green-500 hmb justify-center align-center "/>
      <div className="flex justify-center ml-2">
        <div className="lg:mt-28">
         <h1 className="text-green-700 text-2xl mb-2"> Welcome</h1>
          <h1 className="sm:text-6xl text-4xl text-black mb-6">I have <span className="text-green-600 font-poppins">Creative <br /> Design</span> Experience</h1>
          <p className="text-gray-900 text-xl mb-10">I’m Tanvir, a creative Product Designer. I’ve been helping businesses <br /> to solve their problems with my design for 2 years.</p>

        <div className="flex gap-10">
            <button className="h-14 w-36 border-2 border-green-500 rounded-[12px] pointer bg-green-500 duration-200 text-lg hover:text-white" 
            onClick={() => setIsOpen(!isOpen)}>Contact Me</button>
            <button className="text-black text-lg hover:text-green-400  pointer hover:border-2 rounded-[10px] duration-600 hover:border-green-400 p-4">View Portfolio</button>
          </div>
        </div>
        <img src={heroimg} alt="Hero Image" className="bg-green-500 himg" />
      </div>
    </section>
  );
};

export default Hero;
