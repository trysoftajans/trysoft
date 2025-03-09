import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import InfoSection from "./InfoSection";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    text: "Sosyal medyada öne çıkanları keşfedin.",
    button: "Detaylı Bilgi",
    image: "/image/home/homepage1.jpg",
    gradient: "from-[#1C2331] via-[#1C2331] to-transparent",
  },
  {
    text: "Dijital reklamlarla satışlarınızı artırın!",
    button: "İletişime Geç",
    image: "/image/home/homepage5.jpg",
    gradient: "from-[#2A1F33] via-[#403528] to-transparent",
  },
  {
    text: "SEO stratejileri ile rakiplerinizin önüne geçin!",
    button: "Hemen Başla",
    image: "/image/home/homepage3.jpg",
    gradient: "from-[#2F1D2C] via-[#3A2A1A] to-transparent",
  },
  {
    text: "Web sitenizi modern ve etkili hale getirin!",
    button: "Daha Fazla Bilgi",
    image: "/image/home/homepage4.jpg",
    gradient: "from-[#112A32] via-[#1C3B4D] to-transparent",
  },
  {
    text: "Markanız için doğru dijital pazarlama yolculuğunu planlayın.",
    button: "Detaylı Bilgi",
    image: "/image/home/homepage2.jpg",
    gradient: "from-[#23172F] via-[#3A2518] to-transparent",
  },
];

const handleClick = () => {
  const phoneNumber = "905456625080";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const url = isMobile
    ? `https://wa.me/${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Home() {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const total = extendedSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  const handleTransitionEnd = () => {
    if (current >= total - 1) {
      setTransitionEnabled(false);
      setCurrent(1);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
    if (current <= 0) {
      setTransitionEnabled(false);
      setCurrent(total - 2);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  return (
    <div className="w-full overflow-x-hidden overflow-y-visible">
      <div className="relative w-full h-[80vh] md:h-screen bg-[#2A1C41] text-white">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transitionEnabled ? "transform 1000ms ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`relative w-full flex-shrink-0 h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 blur-0 scale-105' : 'opacity-50 blur-md scale-95'}`}
            >
              <img
                src={slide.image}
                alt="Slider Image"
                loading="eager"
                className="w-full md:w-1/2 h-full object-cover absolute right-0 top-0 transition-transform duration-1000 ease-in-out min-h-[80vh]"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
              <div className="relative z-10 max-w-2xl px-6 md:pl-24 flex items-center h-full">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    {slide.text}
                  </h2>
                  <Link to="/details" prefetch="intent">
                    <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
                      {slide.button}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full">
          <ChevronLeft size={30} />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full">
          <ChevronRight size={30} />
        </button>
      </div>

      <InfoSection />

      <button
        onClick={handleClick}
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
} 