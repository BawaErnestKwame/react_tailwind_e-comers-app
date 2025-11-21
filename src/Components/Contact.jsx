import React, { useEffect } from 'react';
import image from '../assets/contact-img.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 py-10 gap-8 md:gap-20">
      
      {/* Left side - Image */}
      <div
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        data-aos="fade-right"
      >
        <img 
          src={image} 
          alt="Contact Us" 
          className="w-full md:w-1/2 max-w-md rounded-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right side - Form */}
      <div
        className="w-full md:w-1/2 bg-slate-900 text-white p-8 rounded-2xl shadow-2xl"
        data-aos="fade-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          CONTACT US NOW
        </h1>

        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input 
            type="tel" 
            placeholder="Contact" 
            className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea 
            rows="4" 
            placeholder="Write your message..." 
            className="p-3 rounded-lg border border-gray-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button 
            type="submit" 
            className="mt-4 bg-orange-600 hover:bg-orange-700 transition-colors duration-300 py-3 rounded-lg font-semibold text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
