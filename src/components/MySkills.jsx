import React from 'react'
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";



const MySkills = () => {
    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <section id='Skills'>
        <div  className='sm:mt-28 max-sm:mt-10 md:flex justify-center ml-2 gap-24'>
            <div>
                <h1 className='text-green-600 text-2xl'>My Skills</h1>
                <h2 className='sm:text-5xl text-4xl text-black mt-2'>Why Hire Me For Your <br /> Next <span className='text-green-600'>Project</span>?</h2>
                <p className='text-black/70 text-lg mt-8'>I’m specialist in UI/UX Designe. My passion is designing & solving <br /> problems through user experience and research.</p>
                <button className="h-14 w-36 border-2 rounded-[12px] pointer bg-green-500 hover:text-white duration-200 text-lg mt-6" 
            onClick={() => setIsOpen(!isOpen)}>Hire Me</button>
            </div>
            <div className='xl:flex max-md:mt-10 gap-16 sm:ml-28 duration-300'>
                <div className='max-md:flex gap-10'>
                    <div className=''>
                        <h1 className='text-black text-2xl font-poppins font-semibold'>Visual Design</h1>
                        <p className='text-black mt-1'>Create User Interface Design With <br />Unique & Modern Ideas</p>
                        </div>
                    <div className=' mt-14'>
                        <h1 className='text-black text-2xl font-poppins font-semibold'>UX Research</h1>
                        <p className='text-black mt-1'>Create Digital User Products <br /> With Updated Ideas</p>
                    </div>
                </div>
                    <div className='md:mt-16 max-md:ml-'>
                        <h1 className='text-black text-2xl font-poppins font-semibold'>Design Prototype</h1>
                        <p className='text-black mt-1'>Create Advance Prototype <br /> With Figma Apps</p>
                    </div> 
            </div>
        </div>
    </section>
  )
}

export default MySkills;