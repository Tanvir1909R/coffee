import { useState, useRef, MutableRefObject } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
function SlideSection() {
  const [current, setCurrent] = useState<number>(0);
  const slideData = [
    {
      img: "./img/slide-1.jpg",
      h3: "WELCOME, ENJOY THE ORIGINAL",
      h1: "FRESH PORTO COFFEE",
      h4: "The amazing flavors will blow your mind.",
    },
    {
      img: "./img/slide-2.jpg",
      h3: "OUTSTANDING COFFEE",
      h1: "ESPRESSO BAR",
      h4: "Since 2001 with you.",
    },
  ];
  const dataLen = slideData.length;
  const nextSlide = () => {
    setCurrent(current == dataLen - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? dataLen - 1 : current - 1);
  };

  return (
    <>
      <section className="slider">
        <div className="slider_container">
          {slideData.map((item, index) => {
            return (
              <div className="slide_content" key={index}>
                {index == current && (
                  <div className="slider_content_wrap">
                    <img src={item.img} alt="shop" />
                    <div className="slide_text">
                      <h3>{item.h3}</h3>
                      <h1>{item.h1}</h1>
                      <h4>{item.h4}</h4>
                      <button>LEARN ABOUT US</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          ;
          <button className="slide_btn left" onClick={prevSlide}>
            <AiOutlineLeft />
          </button>
          <button className="slide_btn right" onClick={nextSlide}>
            <AiOutlineRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default SlideSection;
