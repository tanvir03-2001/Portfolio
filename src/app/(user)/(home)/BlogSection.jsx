/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, User } from "lucide-react";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const blogData = [
  {
    title: "The Benefits of Switching to Solar Power",
    date: "31 Dec,2024",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  },
  {
    title: "How Solar Power is Shaping the World’s Energy Future",
    date: "31 Dec,2024",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  },
  {
    title: "Understanding Solar Tax Credits and Incentives for 2024",
    date: "31 Dec,2024",
    image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg",
  },
  {
    title: "How to Choose the Right Solar Service Company for Your Home",
    date: "",
    image: "",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <p className="text-indigo-600 font-semibold text-sm sm:text-base">
              OUR BLOG
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              Our Latest Blog
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition text-sm sm:text-base">
            <ArrowUpRight className="w-5 h-5" />
            View All News
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              {/* Image */}
              {blog.image ? (
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  {blog.date && (
                    <span className="absolute top-2 left-2 bg-white text-indigo-600 text-xs sm:text-sm font-semibold px-3 py-1 rounded shadow">
                      {blog.date}
                    </span>
                  )}
                </div>
              ) : (
                <div className="mb-4 bg-gray-200 h-48 flex items-center justify-center rounded-xl text-gray-500 text-sm">
                  No Image
                </div>
              )}

              {/* Meta Info */}
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  By Author
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Comments(08)
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 hover:text-indigo-600 transition cursor-pointer">
                {blog.title}
              </h3>

              {/* Read More */}
              <button className="flex items-center gap-2 text-indigo-600 font-medium hover:underline text-sm sm:text-base">
                <ArrowUpRight className="w-4 h-4" />
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
