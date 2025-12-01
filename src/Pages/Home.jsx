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

const heroSlides = [
  { name: "Laptop", description: "High performance laptop for work and gaming.", image: laptop },
  { name: "Mouse", description: "Precision gaming mouse with RGB lighting.", image: mouse },
  { name: "Keyboard", description: "Mechanical keyboard with backlit keys.", image: keyboard },
  { name: "Bag", description: "Stylish and secure tech backpack.", image: moto },
  { name: "Headset", description: "Surround sound headset with mic.", image: headset },
  { name: "iPhone", description: "Latest iPhone with sleek design.", image: iphone },
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
      <div className="w-full overflow-hidden relative bg-slate-800 mt-16 md:mt-16 lg:mt-20">
        <div className="h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[70vh]">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {heroSlides.map((product, id) => (
              <div
                key={id}
                className="min-w-full h-full flex flex-col items-center justify-center
                           px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 text-white"
              >
                {/* IMAGE */}
                <div className="w-full flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[60%] sm:w-[50%] md:w-[300px] lg:w-[350px] xl:w-[400px] 
                               object-contain rounded-lg transition-all duration-300 hover:scale-105"
                  />
                </div>

                {/* TEXT CONTENT UNDER IMAGE */}
                <div className="mt-4 text-center flex flex-col justify-center space-y-2">
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500">
                    {product.name}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs mx-auto">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute hidden lg:block top-1/2 left-2 sm:left-3 md:left-4 lg:left-6 transform -translate-y-1/2 
                     bg-black bg-opacity-40 hover:bg-opacity-60 text-white px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 
                     text-xl sm:text-2xl md:text-3xl rounded-full transition-all duration-300 hover:scale-110 
                     focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute hidden lg:block  top-1/2 right-2 sm:right-3 md:right-4 lg:right-6 transform -translate-y-1/2 
                     bg-black bg-opacity-40 hover:bg-opacity-60 text-white px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 
                     text-xl sm:text-2xl md:text-3xl rounded-full transition-all duration-300 hover:scale-110 
                     focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          ›
        </button>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-300 ${
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
