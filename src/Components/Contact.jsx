import React from 'react';
import image from '../assets/contact-img.png';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 py-10 gap-8 md:gap-20">

      {/* Left Side - Image (fade-up) */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, y: 50 }}     // from bottom
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={image}
          alt="Contact Us"
          className="w-full md:w-1/2 max-w-md rounded-2xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Right Side - Form (fade-up also for balance) */}
      <motion.div
        className="w-full md:w-1/2 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}     // also from bottom
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          CONTACT US NOW
        </h1>

        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Full Name" className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="tel" placeholder="Contact" className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="password" placeholder="Enter Password" className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea rows="4" placeholder="Write your message..." className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>

          <button type="submit" className="mt-4 bg-orange-600 hover:bg-orange-700 transition-colors duration-300 py-3 rounded-lg font-semibold text-white">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
