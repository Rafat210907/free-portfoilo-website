import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import MySkills from "../components/MySkills";
import Reviews from "../components/Reviews";
import ContactUs from "../pages/ContactUsPage";
const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <MySkills/>
      <Reviews />
      <ContactUs/>
    </>
  );
};

export default HomePage;
