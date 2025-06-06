/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#f5f6fa] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto min-h-[55vh] px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start mb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              <Play className="w-4 h-4" />
              <span className="font-medium">Intro Video</span>
            </motion.button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            I am Tanvir Ahmed <br />A{" "}
            <span className="text-blue-600">Web Developer</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-md mx-auto md:mx-0">
            Creative Web Developer crafting sleek, responsive, and
            high-performance websites with a passion for clean code and great
            user experience.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition"
            >
              <Link href="#contact">Contact Me</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-medium transition"
            >
              <a href="/Recommendation.pdf" download>
                Download CV
              </a>
            </motion.button>
          </div>
        </motion.div>
        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center py-10 px-4"
        >
          <div className="relative group max-w-xs md:max-w-sm">
            {/* Floating Glow Blob */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -left-10 w-52 h-52 bg-indigo-300 rounded-full blur-3xl opacity-40 z-0"
            />

            {/* Card Container */}
            <div className="relative z-10 bg-gradient-to-br from-white via-indigo-50 to-white border-[10px] border-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-indigo-300">
              <img
                src="https://i.ibb.co.com/8LCcL6tp/Whats-App-Image-2025-04-13-at-02-37-05-5a964161-removebg-1.png"
                alt="Tanvir Ahmed"
                className="w-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Name + Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-6"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Tanvir Ahmed
              </h3>
              <p className="text-sm text-gray-500">Creative Developer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
