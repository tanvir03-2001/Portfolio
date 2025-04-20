"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] text-sm md:text-base">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-indigo-600 text-xs sm:text-sm uppercase font-medium tracking-wider">
            Contact Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            Get in Touch
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            I’d love to hear from you! Fill out the form and I’ll get back to
            you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:col-span-2"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="input-field resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Send Message →
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-8"
          >
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                📞 Get Support
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                Need to chat? Reach out anytime via Whatsapp or call.
              </p>
              <p className="text-sm font-medium text-gray-800">
                Phone: <span className="text-gray-600">+8801797021366</span>
              </p>
              <p className="text-sm font-medium text-gray-800">
                Phone: <span className="text-gray-600">+8801845238826</span>
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                📧 Email Me
              </h4>
              <p className="text-gray-600 text-sm mb-2">
                I respond to emails promptly. Reach out for collaborations or
                questions.
              </p>
              <p className="text-sm text-gray-800">tanvir03.2001@gmail.com</p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                💬 Live Chat
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Connect with me in real-time for faster answers.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition w-full text-sm">
                Open Chat With Me →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reusable input styles */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background: #f9fafb;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }
        .input-field:focus {
          border-color: #6366f1;
          outline: none;
          background: white;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      `}</style>
    </section>
  );
}
