import Slider from "./shared/Slider";
import TestimonialCard from "./Testimonial";
import testimonials from "./testimonials.json";

const Reviews = () => {
  return (
    <main className="flex flex-col items-center justify-between py-12 bg-gray-50">
      <div className="w-screen px-4 md:px-16">
        {/* Carousel with centered alignment */}
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-[0_0_90%] md:flex-[0_0_50%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default Reviews;
