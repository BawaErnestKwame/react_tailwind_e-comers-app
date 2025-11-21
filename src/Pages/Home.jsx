import React, { useEffect, useState } from "react";
import laptop from "../assets/headerimage3.png";
import moto from "../assets/headerimage1.png";
import headset from "../assets/headerimage2.png";
import mouse from "../assets/headerimage5.png";
import iphone from "../assets/headerimage4.png";
import keyboard from "../assets/headerimage6.png";
import DeliveryInfor from "../Components/DeliveryInfor";
import Category from "../Category/Category";
import Contact from "../Components/Contact";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    name: "Laptop",
    title: "GET QUALITY PRODUCT FROM GEARUP APP",
    description: "High performance laptop for work and gaming.",
    image: laptop,
  },
  {
    name: "Mouse",
    title: "GET QUALITY PRODUCT FROM GEARUP APP",
    description: "Precision gaming mouse with RGB lighting.",
    image: mouse,
  },
  {
    name: "Keyboard",
    title: "GET QUALITY PRODUCT FROM GEARUP APP",
    description: "Mechanical keyboard with backlit keys.",
    image: keyboard,
  },
  {
    name: "Bag",
    title: "GET QUALITY PRODUCT FROM GEARUP APP",
    description: "Stylish and secure tech backpack.",
    image: moto,
  },
  {
    name: "Headset",
    title: "GET QUALITY PRODUCT FROM GEARUP APP",
    description: "Surround sound headset with mic.",
    image: headset,
  },
  {
    name: "iPhone",
    title: "GET QUALITY PRODUCT FROM GEARUP APP",
    description: "Latest iPhone with sleek design.",
    image: iphone,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <>
      {/* HERO SLIDER */}
      <div className="w-full overflow-hidden relative bg-slate-800 mt-12 md:mt-16 lg:mt-20">
        {/* Container with proper height for all screen sizes */}
        <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[70vh]">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {heroSlides.map((product, id) => (
              <div
                key={id}
                className="min-w-full h-full flex flex-col-reverse md:flex-row items-center 
                           justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 
                           px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 
                           py-6 sm:py-8 md:py-10 lg:py-12 text-white"
              >
                {/* TEXT CONTENT */}
                <div className="w-full md:w-1/2 lg:w-[45%] text-center md:text-left 
                                flex flex-col justify-center space-y-1 sm:space-y-1 md:space-y-5">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                                 font-bold leading-tight lg:leading-tight xl:leading-tight
                                 px-2 md:px-0">
                    {product.title}
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl 
                                font-semibold text-orange-500 md:text-orange-600">
                    {product.name}
                  </p>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                                text-gray-300 leading-relaxed px-2 md:px-0 
                                max-w-xl mx-auto md:mx-0">
                    {product.description}
                  </p>

                  {/* Optional CTA Button */}
                 <Link to='/products'>
                  <div className="pt-2 sm:pt-3 md:pt-4">
                    <button className="bg-orange-600 hover:bg-orange-700 
                                     text-white font-semibold 
                                     px-6 sm:px-8 md:px-10 lg:px-12 
                                     py-2.5 sm:py-3 md:py-3.5 
                                     text-sm sm:text-base md:text-lg
                                     rounded-lg transition-all duration-300 
                                     shadow-lg hover:shadow-xl transform hover:scale-105">
                      Shop Now
                    </button>
                  </div>
                  </Link>
                </div>
                 

                {/* IMAGE */}
                <div className="w-full md:w-1/2 lg:w-[45%] flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[70%] sm:w-[60%] md:w-[75%] lg:w-[80%] xl:w-[85%]
                               max-h-[200px] sm:max-h-[240px] md:max-h-[280px] 
                               lg:max-h-[340px] xl:max-h-[400px]
                               object-contain rounded-lg transition-all duration-300
                               hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION BUTTONS - Hidden on very small screens */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-2 sm:left-3 md:left-4 lg:left-6
                     transform -translate-y-1/2 
                     bg-black bg-opacity-40 hover:bg-opacity-60 
                     text-white px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3
                     text-xl sm:text-2xl md:text-3xl
                     rounded-full transition-all duration-300
                     hover:scale-110 focus:outline-none focus:ring-2 
                     focus:ring-orange-500 focus:ring-offset-2"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-2 sm:right-3 md:right-4 lg:right-6
                     transform -translate-y-1/2 
                     bg-black bg-opacity-40 hover:bg-opacity-60 
                     text-white px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3
                     text-xl sm:text-2xl md:text-3xl
                     rounded-full transition-all duration-300
                     hover:scale-110 focus:outline-none focus:ring-2 
                     focus:ring-orange-500 focus:ring-offset-2"
        >
          ›
        </button>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 
                        left-1/2 transform -translate-x-1/2 
                        flex gap-1.5 sm:gap-2 md:gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5
                         rounded-full transition-all duration-300 
                         ${
                current === index 
                  ? "bg-orange-600 scale-110 w-6 sm:w-8 md:w-10" 
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* EXTRA SECTIONS */}
      <DeliveryInfor />
      <Category />
      <Contact />
    </>
  );
};

export default Home;