import React, { useEffect, useState } from 'react';
import laptop from '../assets/headerimage3.png';
import moto from '../assets/headerimage1.png';
import headset from '../assets/headerimage2.png';
import mouse from '../assets/headerimage5.png';
import iphone from '../assets/headerimage4.png';
import keyboard from '../assets/headerimage6.png';
import DeliveryInfor from '../Components/DeliveryInfor';
import Category from '../Category/Category';
import Contact from '../Components/contact';

const heroSlides = [
  { name: "Laptop", title: "GET QUALITY PRODUCT FROM GEARUP APP", description: "High performance laptop for work and gaming.", image: laptop },
  { name: "Mouse", title: "GET QUALITY PRODUCT FROM GEARUP APP", description: "Precision gaming mouse with RGB lighting.", image: mouse },
  { name: "Keyboard", title: "GET QUALITY PRODUCT FROM GEARUP APP", description: "Mechanical keyboard with backlit keys.", image: keyboard },
  { name: "Bag", title: "GET QUALITY PRODUCT FROM GEARUP APP", description: "Stylish and secure tech backpack.", image: moto },
  { name: "Headset", title: "GET QUALITY PRODUCT FROM GEARUP APP", description: "Surround sound headset with mic.", image: headset },
  { name: "iPhone", title: "GET QUALITY PRODUCT FROM GEARUP APP", description: "Latest iPhone with sleek design.", image: iphone },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  //  Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Go to previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <>
      <div className="w-full overflow-hidden relative h-auto  md:h-[80vh] -z-20 mt-20">

        {/*  Slider Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {heroSlides.map((product, id) => (
            <div
              key={id}
              className="min-w-full flex justify-between items-center gap-10 px-10 bg-slate-800 text-white"
            >
              <div className="w-1/2 mt-32">
                <h1 className="md:text-5xl font-bold mb-2 leading-tight">{product.title}</h1>
                <p className="text-xl font-semibold mb-1 text-orange-600">{product.name}</p>
                <p className="text-md">{product.description}</p>
              </div>
              <div className="w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow hover:scale-90 translate-y-3 transition-all"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full hover:bg-opacity-70 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full hover:bg-opacity-70 transition"
        >
          ›
        </button>
        {/*  Slide Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? 'bg-orange-600' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Delivery Info Section */}
      <DeliveryInfor />
      <Category />
      <Contact/>
    </>
  );
};

export default Home;
