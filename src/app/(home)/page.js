import AboutMeSection from "./AboutMeSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import SkillCardSection from "./SkillCardSection";
import TestimonialSlider from "./TestimonialSlider";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillCardSection />
      <AboutMeSection />
      <Portfolio />
      <TestimonialSlider />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
