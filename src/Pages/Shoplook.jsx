
import React, { useState, useEffect } from "react";
import clothscat2 from "../images/clothscat2.jpg";
import furniture from "../images/furniture.png";
import electronicscat from "../images/electronicscat.jpg";
import shoescat from "../images/shoescat.jpg";

const Shoplook = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1.3);
  const slides = [clothscat2, furniture,  shoescat, electronicscat,];

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 768) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const showSlide = (index) => {
    const maxIndex = Math.ceil(slides.length - slidesToShow);

    if (index > maxIndex) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(maxIndex);
    } else {
      setCurrentSlide(index);
    }
  };

  const moveSlides = (direction) => {
    showSlide(currentSlide + direction);
  };

  return (
    <div className="relative mt-2   h-[50vh]">
      <div className="absolute top-0 left-0 w-full h-full p-4 pl-1.5 bg-gray-200 box-border">
        <div className="relative h-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
              width: `${(slides.length * 100) / slidesToShow}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="box-border bg-gray-200  m-9 h-full w-[20%]"
                // style={{ minWidth: "25%", height: "30%" }}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-lg"
                />
              
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 text-2xl cursor-pointer z-8"
            onClick={() => moveSlides(-1)}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 text-2xl cursor-pointer z-8"
            onClick={() => moveSlides(1)}
          >
            &#10095;
          </button>
         
        </div>
      </div>
      <div className="absolute bottom-0.5 w-full flex justify-center gap-3">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-5 h-1 cursor-pointer transition-colors duration-300 ${
                  index === currentSlide ? "bg-yellow-300" : "bg-blue-900"
                }`}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
    </div>
  );
};

export default Shoplook;
