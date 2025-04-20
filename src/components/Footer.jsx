/* eslint-disable @next/next/no-img-element */
import logo from "@/images/logo.png";
import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t text-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Left Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image src={logo} alt="Tanvir Logo" width={50} height={50} />
              <h1 className="text-xl font-semibold">
                Tanvir<span className="text-indigo-600">Ahmed</span>
                <span className="font-normal text-[10px] ml-1">DEV</span>
              </h1>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tanvir Ahmed — Passionate Web
              Developer crafting modern, responsive, and scalable digital
              experiences.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://i.ibb.co.com/HL1m9jbf/volume-scene-poster-nobody-room-1.jpg"
              alt="Tanvir Ahmed"
              className="w-16 h-16 rounded-xl shadow-lg object-cover"
            />
            <p className="text-gray-600 text-sm text-center max-w-xs">
              Building clean interfaces and interactive web apps with love for
              performance and user experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                aria-label="Message"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <a
              href="mailto:your.email@example.com"
              className="bg-white shadow-md px-5 py-2 rounded-lg text-indigo-600 font-medium hover:bg-indigo-50 transition"
            >
              Let&apos;s Talk
            </a>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-600 transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
