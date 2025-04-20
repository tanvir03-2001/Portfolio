/* eslint-disable @next/next/no-img-element */
"use client";
import logo from "@/images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Tanvir Logo" width={50} height={50} />
          <h1 className="text-xl font-bold text-gray-900">
            Tanvir<span className="text-indigo-600">Ahmed</span>
            <span className="text-[10px] ml-1 font-normal text-gray-500">
              DEV
            </span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-sm sm:text-base">
          <a
            href="#home"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setModalOpen(true)} // Open modal on click
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm sm:text-base transition"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-4 pb-4"
          >
            <div className="space-y-2 text-sm sm:text-base">
              <a
                href="#home"
                className="block text-gray-800 hover:text-blue-500 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-800 hover:text-blue-500 transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-gray-800 hover:text-blue-500 transition"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="block text-gray-800 hover:text-blue-500 transition"
              >
                Portfolio
              </a>
              <a
                href="#blog"
                className="block text-gray-800 hover:text-blue-500 transition"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="block text-gray-800 hover:text-blue-500 transition"
              >
                Contact
              </a>
              <button
                onClick={() => setModalOpen(true)} // Open modal on click
                className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Hire Me */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-xl"
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
            <p className="mt-2 text-sm text-gray-600">
              Click to contact me via email or phone:
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:tanvir03.2001@gmail.com"
                className="block text-blue-600 hover:text-blue-800 transition"
              >
                Email: tanvir03.2001@gmail.com
              </a>
              <a
                href="tel:+8801845238826"
                className="block text-blue-600 hover:text-blue-800 transition"
              >
                Primary Phone: +880 1845 238826
              </a>
              <a
                href="tel:+8801797021366"
                className="block text-blue-600 hover:text-blue-800 transition"
              >
                Secondary Phone: +880 1797 021366
              </a>
            </div>
            <button
              onClick={() => setModalOpen(false)} // Close modal
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
