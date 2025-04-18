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
  },
  {
    title: "Dashboard UI Design in Figma",
    category: "Dashboard",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 45,
  },
  {
    title: "Website Landing Page",
    category: "Website",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 75,
  },
  {
    title: "Responsive HTML CSS Layout",
    category: "HTML/CSS",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 55,
  },
  {
    title: "Another Mobile App UI",
    category: "Mobile App",
    image: "https://i.ibb.co.com/rR0ySh4z/Project-Management.jpg",
    likes: 60,
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
    <section className="bg-gray-50 text-center">
      <div className="container mx-auto py-12 px-6 md:px-16">
        <h3 className="text-indigo-500 text-sm font-semibold uppercase tracking-wide mb-2">
          My Portfolio
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Some Of My Works
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
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
                  <p className="text-gray-500 text-xs mb-1">
                    {project.category}
                  </p>
                  <h4 className="font-semibold text-lg leading-tight">
                    {project.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
