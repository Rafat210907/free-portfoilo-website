import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import testimonials from "./testimonials.json";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";


const Reviews = () => {
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

  const TestimonialCard = ({ title, content, author, rating, name, designation }) => (
    <div className="bg-white shadow-lg rounded-lg my-10 p-6">
      {/* Rating */}
      {rating && (
        <div className="mb-4">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
          ))}
        </div>
      )}
      {/* Title */}
      {title && <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>}
      {/* Content */}
      <p className="mt-4 text-gray-600">{content}</p>
      {/* Author or Name */}
      {author ? (
        <div className="mt-6 text-right text-indigo-500 font-medium">- {author}</div>
      ) : (
        <div className="mt-6 text-right">
          <h3 className="font-bold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{designation}</p>
        </div>
      )}
    </div>
  );

  return (
    <main className="flex flex-col items-center justify-between py-12 bg-gray-50">
      <section id="testimonial" className="px-6 w-screen">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-green-500 font-medium text-sm uppercase mb-2">Reviews</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Our Customers Say Something <span className="text-green-500">About Us</span>
          </h2>
        </div>
        {/* Carousel */}
        <div className="relative mx-auto lg:ml-64">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex md:gap-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] md:flex-[1_0_40%]"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation */}
        <div className="flex justify-center gap-10">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`px-4 py-2 text-2xl bg-gray-300 rounded ${!canScrollPrev && "opacity-50"}`}
          >
            <HiMiniArrowLongLeft />
        </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`px-4 py-2 text-2xl bg-gray-300 rounded ${!canScrollNext && "opacity-50"}`}
          >
          <HiMiniArrowLongRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
