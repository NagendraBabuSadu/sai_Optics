"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import spec1 from "../../public/imagesCarousel/spec1.jpg";
import spec2 from "../../public/imagesCarousel/spec2.jpg";
import spec3 from "../../public/imagesCarousel/spec3.jpg";
import spec4 from "../../public/imagesCarousel/spec4.png";
import spec5 from "../../public/imagesCarousel/spec5.jpg";

const images = [spec1, spec2, spec3, spec4, spec5];
console.log(images);

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false); // ✅ Fix hydration

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [mounted]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  if (!mounted) return null;

  return (
    <div className="relative rounded-lg h-[300px] md:h-[500px] mb-10 mr-6 mt-14">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            priority={false}
            loading="lazy"
            style={{
              maxWidth: "100vw",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute bottom-4 left-4 bg-white/70 hover:bg-white p-2 rounded-full z-10"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-4 right-4 bg-white/70 hover:bg-white p-2 rounded-full z-10"
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
