
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CustomSlider.css"; 
import clothscat2 from "../images/clothscat2.jpg";
import furniture from "../images/furniture.png";
import electronicscat from "../images/electronicscat.jpg";
import shoescat from "../images/shoescat.jpg";
import "../Styles/slider.css";
import { useNavigate } from "react-router-dom";

function SimpleSlider() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const slides = [clothscat2, furniture, shoescat, electronicscat];
  const slides = [
    { image: clothscat2, path: "/shirts" },
    { image: furniture, path: "/furniture" },
    { image: shoescat, path: "/shoes" },
    { image: electronicscat, path: "/tvs" }
  ];
  

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* {slides.map((slide, index) => (
          <div key={index} className="slide" onClick={()=>navigate("/")}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))} */}

{slides.map((slide, index) => (
  <div key={index} className="slide" onClick={() => navigate(slide.path)}>
    <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
  </div>
))}

      </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10, zIndex: 2 }}
      onClick={onClick}
    >
      <button className="custom-next-arrow">&gt;</button>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  left: 10, zIndex: 2 }}
      onClick={onClick}
    >
      <button className="custom-prev-arrow">&lt;</button>
    </div>
  );
}

export default SimpleSlider;

