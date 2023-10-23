import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Images } from "../../../utils";

//auto slide can be set to true on the page where we will import this component
export const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  //state of the current image
  const [current, setCurrent] = useState(0);

  //previous button
  const prev = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? Images.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  //next button
  const next = () => {
    const isLastSlide = current === Images.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  //useEffect for the auto slide effect
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="w-full h-[100vh] relative -translate-y-[6rem] z-[1] group">
      <img
        src={Images[current].url}
        alt={Images[current].title}
        className="w-full h-full ease-in-out"
      />
      <div className="hidden group-hover:flex absolute inset-0 items-center justify-between">
        <button className="mx-2 p-1 rounded-full hover:shadow">
          <IoIosArrowBack size={20} onClick={prev} />
        </button>
        <button className="mx-2 p-1 rounded-full hover:shadow">
          <IoIosArrowForward size={20} onClick={next} />
        </button>
      </div>
    </div>
  );
};
