import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: assets.a1,
    title: "Best Electrical Appliances",
    subtitle: "High quality products at affordable prices",
    cta: "Shop Now",
  },
  {
    id: 2,
    image:assets.a2,
    title: "Power Solutions",
    subtitle: "Safe and reliable electrical accessories",
    cta: "Explore",
  },
  {
    id: 3,
    image:assets.a3,
    title: "Best Electrical Appliances",
    subtitle: "Safe and reliable electrical accessories",
    cta: "Shop Now",
  },
  {
    id: 4,
    image:assets.a4,
    title: "Best Electrical Appliances",
    subtitle: "Safe and reliable hardware accessories",
    cta: "Buy Now",
  },
  {
    id: 5,
    image:assets.a5,
    title: "Best Electrical Appliances",
    subtitle: "Safe and reliable electrical accessories",
    cta: "Buy Now",
  },
  {
    id: 6,
    image:assets.a6,
    title: "CCTV Cameras",
    subtitle: "Upgrade your home with smart cameras.",
    cta: "Shop Now",
  },
  {
    id: 10,
    image:assets.a10,
    title: "Kitchen Appliances",
    subtitle: "Upgrade your home with smart appliances",
    cta: "Explore",
  },
  {
    id: 11,
    image:assets.a11,
    title: "Hardware Tools",
    subtitle: "Safe and reliable hardware tools",
    cta: "Buy Now",
  },
];
const slides2 = [
  {
    id: 1,
    image: assets.b1,
    title: "Best Electrical Appliances",
    subtitle: "High quality products at affordable prices",
    cta: "Buy Now",
  },
  {
    id: 2,
    image:assets.b2,
    title: "Best Electrical Appliances  ",
    subtitle: "High quality products at affordable prices ",
    cta: "Explore",
  },
  {
    id: 3,
    image:assets.b3,
    title: "CCTV Cameras",
    subtitle: "Upgrade your home with smart cameras",
    cta: "Shop Now",
  },
  {
    id: 4,
    image:assets.b4,
    title: "Hardware Tools",
    subtitle: "Safe and reliable hardware tools",
    cta: "Buy Now",
  },
  {
    id: 5,
    image:assets.b5,
    title: "Power Solutions",
    subtitle: "Safe and reliable electrical accessories",
    cta: "Shop Now",
  },
  {
    id: 6,
    image:assets.b6,
    title: "Kitchen Essentials",
    subtitle: "Upgrade your home with smart appliances",
    cta: "Buy Now",
  },
  {
    id: 7,
    image:assets.b7,
    title: "Power Solutions",
    subtitle: "Safe and reliable electrical accessories",
    cta: "Explore Now",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      {/* Mobile Banner (slides2) */}
      <div className="relative w-full h-[400px] sm:hidden overflow-hidden" style={{ aspectRatio: '16/6' }}>
        {slides2.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              style={{ maxWidth: '1600px', maxHeight: '600px', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-lg font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-xs max-w-xs mb-2">
                {slide.subtitle}
              </p>
              <Link
  to="/collection"
  className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-medium shadow-lg transition"
>
  {slide.cta}
</Link>
            </div>
          </div>
        ))}
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/10 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/10 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight size={20} />
        </button>
        {/* Dots Indicator */}
        <div className="absolute bottom-3 w-full flex justify-center space-x-2">
          {slides2.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Desktop Banner (slides) */}
      <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] lg:max-w-[1600px] mx-auto overflow-hidden hidden sm:block" style={{ aspectRatio: '16/6' }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              style={{ maxWidth: '1600px', maxHeight: '600px', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl max-w-2xl mb-4">
                {slide.subtitle}
              </p>
              <Link
  to="/collection"
  className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm sm:text-base font-medium shadow-lg transition"
>
  {slide.cta}
</Link>
            </div>
          </div>
        ))}
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/10 p-3 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/10 p-3 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight size={24} />
        </button>
        {/* Dots Indicator */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
