"use client";

import { useEffect, useState } from "react";
import { images } from "../../lib/home";
import Description from "./description";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [transition, setTransition] = useState(0);

  const clickNext = () => {
    setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
    setTransition(1);
  };
  const clickPrev = () => {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
    setTransition(0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="flex flex-col place-items-center gap-8 w-full">
      <div
        className={`w-full relative flex flex-row justify-center items-center transition-transform ease-in-out duration-500`}
      >
        <div
          className="absolute z-[2] lg:static top-0 bottom-0 left-2 my-auto w-fit h-fit p-1 md:p-2 lg:p-4 cursor-pointer text-[24px] md:text-[28px] lg:text-[32px] flex justify-center items-center text-black bg-[#4C66B3] bg-opacity-70 hover:bg-opacity-100 rounded-full"
          onClick={clickPrev}
        >
          <IoIosArrowBack />
        </div>

        <div className="w-full flex overflow-hidden">
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? `w-full transition-transform duration-200 ease-in-out transform translate-x-0 `
                  : `w-0 ${transition == 1 ? "translate-x-[1000%]" : "-translate-x-full"}`
              }`}
            >
              <img
                src={elem.src}
                className="w-full lg:w-[648px] h-[388px] object-cover"
              />
            </div>
          ))}
        </div>

        <div
          className="absolute z-[2] lg:static top-0 bottom-0 right-2 my-auto w-fit h-fit p-1 md:p-2 lg:p-4 cursor-pointer text-[24px] md:text-[28px] lg:text-[32px] flex justify-center items-center text-black bg-[#4C66B3] bg-opacity-70 hover:bg-opacity-100 rounded-full"
          onClick={clickNext}
        >
          <IoIosArrowForward />
        </div>
      </div>
      <div className="w-full md:w-4/5 h-full">
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </main>
  );
};

export default Slider;
