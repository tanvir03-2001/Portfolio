/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    title: "Mobile App Design UI/UX In Figma",
    category: "Mobile App",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 25,
    tech: ["Figma", "UI/UX"],
    github: "https://github.com/yourusername/mobile-app-design",
    live: "https://yourdomain.com/mobile-app-design",
  },
  {
    title: "Dashboard UI Design in Figma",
    category: "Dashboard",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 45,
    tech: ["Figma", "Dashboard"],
    github: "https://github.com/yourusername/dashboard-ui",
    live: "https://yourdomain.com/dashboard-ui",
  },
  {
    title: "Website Landing Page",
    category: "Website",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 75,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/landing-page",
    live: "https://yourdomain.com/landing-page",
  },
  {
    title: "Responsive HTML CSS Layout",
    category: "HTML/CSS",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 55,
    tech: ["HTML", "CSS"],
    github: "https://github.com/yourusername/responsive-layout",
    live: "https://yourdomain.com/responsive-layout",
  },
  {
    title: "Another Mobile App UI",
    category: "Mobile App",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 60,
    tech: ["Figma", "Prototyping"],
    github: "https://github.com/yourusername/another-mobile-ui",
    live: "https://yourdomain.com/another-mobile-ui",
  },
];

const tabs = ["All", "Mobile App", "Dashboard", "Website", "HTML/CSS"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [likes, setLikes] = useState(
    allProjects.map((project) => project.likes)
  );

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  return (
    <section id="portfolio" className="bg-gray-50 text-center text-gray-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 md:px-16">
        <h3 className="text-indigo-500 text-sm sm:text-base font-semibold uppercase tracking-wide mb-2">
          My Portfolio
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Some Of My Works
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTab === tab
                  ? "bg-indigo-500 text-white shadow"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => {
            const indexInAll = allProjects.findIndex(
              (p) => p.title === project.title
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300"
                  />
                  <button
                    onClick={() => handleLike(indexInAll)}
                    className="absolute bottom-2 right-2 bg-white p-2 rounded-md shadow-sm flex items-center gap-1 hover:scale-110 transition"
                  >
                    <ThumbsUp className="h-4 w-4 text-indigo-500" />
                    <span className="text-xs text-gray-700">
                      {likes[indexInAll]}
                    </span>
                  </button>
                </div>
                <div className="text-left p-4">
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">
                    {project.category}
                  </p>
                  <h4 className="font-semibold text-base sm:text-lg leading-tight text-gray-800">
                    {project.title}
                  </h4>

                  {/* Tech Stack */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-50 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* GitHub & Live Links */}
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-600 font-medium hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 font-medium hover:underline"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
