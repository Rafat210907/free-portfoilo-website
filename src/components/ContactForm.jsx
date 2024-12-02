import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import React, { useRef } from 'react';

const ContactForm = () => {
  return (
    <section className="flex md:flex-row flex-col gap-20 md:items-center">
      <div>
        <h3 className="mb-7 uppercase font-semibold">Contact Info</h3>
        <div className="flex items-center gap-6 mb-[55px]">
            <span className="w-16 h-16 rounded-[10px] flex justify-center items-center text-3xl bg-green-500 text-white">
            <MdEmail/>
            </span>
            <span>
            <p className="text-[14px] text-black/70 uppercase mb-1">Mail Me</p>
            <a href="mailto:rafatahmed210907@gmail.com" className=" opacity-80 font-semibold text-[14px]">rafatahmed210907@gmail.com</a>
            </span>
        </div>
        <div className="flex items-center gap-6 mb-[55px]">
            <span className="w-16 h-16 rounded-[10px] flex justify-center items-center text-3xl bg-green-500 text-white">
            <MdCall/>
            </span>
            <span>
            <p className="text-[14px] text-black/70 uppercase mb-1">Contact Number</p>
            <a href="tel:+8801761094636" className=" opacity-80 font-semibold text-[14px]">+88 01815589999</a>
            </span>
        </div>
        <div className="flex items-center gap-6 ">
            <span className="w-16 h-16 rounded-[10px] flex justify-center items-center text-3xl bg-green-500 text-white">
            <MdLocationOn />
            </span>
            <span>
            <p className="text-[14px] text-black/70 uppercase mb-1">Location</p>
            <a className="opacity-80 font-semibold text-[14px]">Sylhet, Bangladesh</a>
            </span>
        </div>   
      </div>
      <form className="shadow-box flex-1  px-5 py-[40px] sm:px-[40px]">
        <input className="w-full relative z-20  text-sm text-white input-bg border-2 px-5 py-4 rounded-[10px] mb-3" type="text" name="user_name" id="name" placeholder="Name *" required/>
        <input className="w-full relative z-20  text-sm text-white input-bg border-2 px-5 py-4 rounded-[10px] mb-3" type="email" name="user_email" id="email" placeholder="Email *" required/>
        <input className="w-full relative z-20  text-sm text-white input-bg border-2 px-5 py-4 rounded-[10px] mb-3" type="text" name="subject" id="subject" placeholder="Your Subject *" required/>
        <textarea className="w-full relative z-20  text-sm text-white input-bg border-2 px-5 py-4 rounded-[10px] mb-3 resize-none" name="message" id="message" cols="10" rows="6" placeholder="Your Message *"></textarea>
        <button className="w-full relative z-20  text-sm text-white input-bg border-none px-5 py-4 rounded-[10px] mb-2 hover:bg-white hover:text-black duration-300" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;