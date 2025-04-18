"use client";

import { motion } from "framer-motion";
import { Atom, Code2, Database, Server, Sparkles } from "lucide-react";

const skills = [
  {
    name: "Vanilla JavaScript",
    description:
      "Strong foundation in core JavaScript concepts including DOM manipulation, ES6+, and asynchronous programming.",
    icon: <Code2 className="w-10 h-10 text-yellow-500" />,
  },
  {
    name: "React.js",
    description:
      "Building fast, dynamic UIs with reusable components and modern hooks-based architecture.",
    icon: <Atom className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "Node.js",
    description:
      "Creating scalable server-side applications and RESTful APIs using Express.js and Node’s event-driven architecture.",
    icon: <Server className="w-10 h-10 text-green-600" />,
  },
  {
    name: "MongoDB",
    description:
      "Designing flexible, NoSQL database structures for high-performance and scalable applications.",
    icon: <Database className="w-10 h-10 text-emerald-500" />,
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
          What I Bring to the Code
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 text-gray-500 max-w-xl mx-auto"
        >
          From front-end frameworks to clean back-end logic — here are the tools
          and technologies I use to craft modern web solutions.
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
            <p className="mt-2 text-sm text-gray-500">{skill.description}</p>

            {/* Bottom border glow effect on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
