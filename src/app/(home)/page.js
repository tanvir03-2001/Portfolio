import AboutMeSection from "./AboutMeSection";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import SkillCardSection from "./SkillCardSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillCardSection />
      <AboutMeSection />
      <Portfolio />
    </div>
  );
}
