import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f5f6fa] py-16 md:py-24">
      <div className="container mx-auto min-h-[55vh] px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-50">
              <Play className="w-4 h-4" />
              <span className="font-medium">Intro Video</span>
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            I am Jone Dion <br />A{" "}
            <span className="text-blue-600">UI/UX Designer</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-md mx-auto md:mx-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
              Contact Me
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-medium">
              Download CV
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center relative">
          <div className="bg-[#ececec] rounded-xl shadow-xl border-[1rem] ">
            <img
              src="https://i.ibb.co.com/8LCcL6tp/Whats-App-Image-2025-04-13-at-02-37-05-5a964161-removebg-1.png"
              alt="Jone Dion"
              className="w-full h-auto max-w-[20rem] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Optional social icons */}
      <div className="fixed bottom-10 left-6 flex flex-col gap-4 z-10">
        <a
          href="#"
          className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
        </a>
      </div>

    </section>
  );
}
