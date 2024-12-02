import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUsPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
    return (
        <section id="contact" className="max-width">
        <h6 data-aos='fade-right' data-aos-duration="700" className="text-lg sm:text-2xl text-center text-green-500 mb-1 sm:mb-2">
          Contact Me
        </h6>
        <h2 data-aos='fade-left' data-aos-duration="700" className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-4">
        Let’s Discuss Your <span className='text-green-600'>Project</span>
        </h2>
        <p className='text-center text-black/70 text-lg'>Let’s make something new, different and more meaningful or make <br /> thing more visual or conceptual</p>
        <ContactForm />
        </section>
    );
};

export default ContactUsPage;