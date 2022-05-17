import React, { useState } from "react";
import SliderData from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "./style.scss";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length ?? 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  const moveDot = (index) => {
    setCurrent(index);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.img} alt="Shoes" className="image" />
            )}
          </div>
        );
      })}

      <div className="container-dots">
        {SliderData.map((item, index) => (
          <img
            src={item.img}
            onClick={() => moveDot(index)}
            className={current === index ? "dot active" : "dot"}
            key={index}
            alt="slider"
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
