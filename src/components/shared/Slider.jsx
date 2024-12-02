import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import testimonials from "../testimonials.json"; // Adjust the path based on your project structure

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (emblaApi) {
      const updateButtons = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      emblaApi.on("select", updateButtons);
      updateButtons();
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="testimonial" className=" px-6 ">
      {/* Header Section */}
      <div className="text-center mb-4">
        <p className="text-green-500 font-medium text-sm uppercase mb-2">Reviews</p>
        <h2 className="text-3xl font-bold text-gray-800">
          Our Customers Say Something <span className="text-green-500">About Us</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative xl:ml-56 mx-auto">
        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] md:flex-[0_0_33%] bg-white rounded-lg shadow-lg p-6"
              >
                <div className="mb-4">
                  {/* Render Stars */}
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
