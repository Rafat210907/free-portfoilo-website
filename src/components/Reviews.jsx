import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import testimonials from "./testimonials.json";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Store active slide index

  useEffect(() => {
    if (emblaApi) {
      const updateButtons = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      const onSelect = () => {
        const index = emblaApi.selectedScrollSnap(); // Get the selected slide index
        setActiveIndex(index);
        updateButtons();
      };

      emblaApi.on("select", onSelect);
      updateButtons();
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const TestimonialCard = ({ title, content, author, rating, name, designation, index }) => {
    const isActive = activeIndex === index; // Check if the card is active
    return (
      <div
        className={`w-full p-10 bg-white shadow-2xl rounded-2xl transition-all duration-300 ease-in-out transform ${
          isActive ? "scale-110 blur-none" : "scale-95 blur-sm"
        }`} // Apply blur to non-active cards and make active card bigger
      >
        {/* Rating */}
        {rating && (
          <div className="mb-4 flex text-yellow-500">
            {[...Array(rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        )}
        {/* Title */}
        {title && <h2 className="text-gray-800 text-2xl font-semibold">{title}</h2>}
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
  };

  return (
    <main className="flex flex-col items-center justify-center py-16 bg-gray-50">
      <section id="testimonial" className="w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-green-500 font-medium text-sm uppercase mb-2">Reviews</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Our Customers Say Something <span className="text-green-500">About Us</span>
          </h2>
        </div>

        {/* Embla Carousel */}
        <div className="relative mx-auto w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] px-4">
                  <TestimonialCard {...testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`px-6 py-3 bg-gray-300 rounded-full text-2xl ${!canScrollPrev && "opacity-50"}`}
            >
              <HiMiniArrowLongLeft />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`px-6 py-3 bg-gray-300 rounded-full text-2xl ${!canScrollNext && "opacity-50"}`}
            >
              <HiMiniArrowLongRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
