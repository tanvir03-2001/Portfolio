"use client"
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full" />
          <span className="text-xl font-bold text-gray-900">TA<span className="font-normal text-xs ml-0.5">DEV</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Service</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Portfolio</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>

        {/* Hire Me Button */}
        <div className="hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-4 pb-4"
          >
            <div className="space-y-2">
              <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
              <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Service</a>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Portfolio</a>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Blog</a>
              <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
              <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
