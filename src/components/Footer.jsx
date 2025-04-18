/* eslint-disable @next/next/no-img-element */
import {
  Facebook,
  Instagram,
  MessageCircle,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t text-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
              <h1 className="text-xl font-semibold">
                Tanvir<span className="text-indigo-600">Ahmed</span>
                <span className="font-normal text-[10px] ml-1">DEV</span>
              </h1>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 Tanvir Ahmed Dev. All rights reserved.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center gap-4 text-center max-w-sm">
            <img
              src="https://i.ibb.co/HL1m9jBf/volume-scene-poster-nobody-room-1.jpg"
              alt="Tanvir Ahmed"
              className="w-16 h-16 rounded-xl shadow-lg object-cover"
            />
            <p className="text-gray-600 text-sm">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <div className="flex gap-4">
              <button
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                aria-label="Message"
                className="w-10 h-10 flex items-center justify-center rounded-lg shadow-md bg-white text-gray-600 hover:text-indigo-600 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <button className="bg-white shadow-md px-5 py-2 rounded-lg text-indigo-600 font-medium hover:bg-indigo-50 transition">
              Let&apos;s Talk
            </button>
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
