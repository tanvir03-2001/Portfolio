/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="relative bg-gradient-to-br from-indigo-100 to-white rounded-2xl p-4 shadow-2xl hover:shadow-indigo-200 transition-all duration-300 group w-fit">
            {/* Glow Border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-200/30 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

            {/* Main Image */}
            <img
              src="https://i.ibb.co.com/8LCcL6tp/Whats-App-Image-2025-04-13-at-02-37-05-5a964161-removebg-1.png"
              alt="Person"
              className="rounded-xl w-[300px] h-auto relative z-10"
            />

            {/* Play Button */}
            <button className="absolute bottom-4 right-4 bg-white border border-indigo-100 rounded-full p-3 shadow-lg hover:scale-105 hover:bg-indigo-100 group-hover:rotate-12 transition-all duration-300 z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-600 font-semibold mb-2">ABOUT ME</p>
          <h2 className="text-3xl font-bold mb-4">Let's Know About Me</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            {/* UI/UX */}
            <div>
              <div className="flex justify-between font-semibold text-sm">
                <span>UI/UX DESIGN</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1 }}
                  className="bg-indigo-600 h-2 rounded"
                />
              </div>
            </div>

            {/* Figma */}
            <div>
              <div className="flex justify-between font-semibold text-sm">
                <span>FIGMA DESIGN</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1 }}
                  className="bg-indigo-600 h-2 rounded"
                />
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <PhoneCall className="text-indigo-600 w-5 h-5" />
              <div>
                <p className="font-semibold text-sm">24/7 Call Me</p>
                <p className="text-gray-500 text-xs">+880123456789</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <Mail className="text-indigo-600 w-5 h-5" />
              <div>
                <p className="font-semibold text-sm">Mail Me</p>
                <p className="text-gray-500 text-xs">example@gmail.com</p>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-indigo-600 px-5 py-2 rounded-md shadow hover:bg-indigo-50 transition"
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
