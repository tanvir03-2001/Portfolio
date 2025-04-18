"use client";

import { motion } from "framer-motion";
import {
  Brush,
  LayoutDashboard,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "Adobe Illustrator",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: <PenTool className="w-10 h-10 text-orange-500" />,
  },
  {
    name: "Photoshop Expert",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: <Brush className="w-10 h-10 text-blue-500" />,
  },
  {
    name: "UI/UX With XD",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: <LayoutDashboard className="w-10 h-10 text-purple-600" />,
  },
  {
    name: "UI/UX In Figma",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    icon: <Palette className="w-10 h-10 text-pink-500" />,
  },
];

export default function SkillCardSection() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          My Design & UI/UX Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 text-gray-500 max-w-xl mx-auto"
        >
          A blend of creativity and functionality for beautiful, effective user
          experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 group"
          >
            {/* Decorative Sparkles */}
            <div className="absolute top-4 right-4 text-blue-400 animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>

            {/* Icon */}
            <div className="mb-4">{skill.icon}</div>

            {/* Title & Desc */}
            <h3 className="text-lg font-semibold text-gray-900">
              {skill.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {skill.description}
            </p>

            {/* Bottom border glow effect on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
