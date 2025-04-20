import AboutMeSection from "./AboutMeSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import SkillCardSection from "./SkillCardSection";
import SkillsMarquee from "./SkillsMarquee";
import TestimonialSlider from "./TestimonialSlider";

export const metadata = {
  title: "Tanvir Ahmed | Full Stack Web Developer",
  description:
    "Portfolio of Tanvir Ahmed – a passionate Full Stack Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies. Let's build something amazing together.",
  keywords: [
    "Tanvir Ahmed",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Frontend Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Bangladesh Developer",
    "Portfolio Website"
  ],
  authors: [{ name: "Tanvir Ahmed", url: "https://yourdomain.com" }],
  creator: "Tanvir Ahmed",
  openGraph: {
    title: "Tanvir Ahmed | Full Stack Web Developer",
    description:
      "Explore the portfolio of Tanvir Ahmed – React & Next.js Developer with a passion for clean code, UI/UX, and building fast web apps.",
    url: "https://yourdomain.com",
    siteName: "Tanvir Ahmed Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/HL1m9jbf/volume-scene-poster-nobody-room-1.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Tanvir Ahmed Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillCardSection />
      <SkillsMarquee />
      <AboutMeSection />
      <Portfolio />
      <TestimonialSlider />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
