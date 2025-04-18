"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "MR. John Kabir",
    title: "CEO at Microsoft",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    project: "Mobile App Development",
    date: "Jan 4, 2023 - Apr 20, 2023",
    stars: 5,
  },
  {
    name: "MS. Jane Doe",
    title: "CTO at Google",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    project: "Dashboard Design",
    date: "Feb 10, 2023 - May 5, 2023",
    stars: 4,
  },
  {
    name: "MR. Mike Smith",
    title: "Designer at Apple",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    feedback:
      "A wonderful experience from start to finish. The final product exceeded our expectations!",
    project: "UI/UX Development",
    date: "Mar 2, 2023 - Jun 18, 2023",
    stars: 5,
  },
  {
    name: "MS. Anna Bell",
    title: "Manager at Amazon",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Truly professional and easy to work with. Highly recommend for any creative project!",
    project: "Website Revamp",
    date: "Apr 12, 2023 - Aug 1, 2023",
    stars: 5,
  },
  {
    name: "MR. Ryan Clark",
    title: "Developer at Tesla",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    feedback:
      "Quick delivery and amazing design quality. Will definitely work together again!",
    project: "Mobile App Redesign",
    date: "May 22, 2023 - Sep 9, 2023",
    stars: 4,
  },
];

const groupInPairs = (data) => {
  const result = [];
  for (let i = 0; i < data.length; i += 2) {
    result.push(data.slice(i, i + 2));
  }
  return result;
};

export default function TestimonialSlider() {
  const slides = groupInPairs(testimonials);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isHovered]);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-12 px-4 md:px-20 relative">
        <h3 className="text-indigo-500 text-sm font-semibold uppercase mb-2">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My Clients Feedback
        </h2>

        {/* Slider */}
        <div className="relative w-full overflow-hidden min-h-[350px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 0.7s ease-in-out",
                position: index === currentSlide ? "relative" : "absolute",
                width: "100%",
              }}
              className="flex flex-col md:flex-row gap-6 md:justify-center"
            >
              {slide.map((client, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md w-full md:w-[48%] text-left"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {client.project}
                      </h4>
                      <p className="text-xs text-gray-500">{client.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{client.feedback}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{client.name}</p>
                      <p className="text-xs text-gray-500">{client.title}</p>
                    </div>
                    <div className="flex gap-1 text-yellow-500 text-sm">
                      {"★".repeat(client.stars)}
                      {"☆".repeat(5 - client.stars)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="p-2 bg-white rounded-full shadow hover:bg-indigo-50 transition"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="p-2 bg-white rounded-full shadow hover:bg-indigo-50 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-4 bg-indigo-500" : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
