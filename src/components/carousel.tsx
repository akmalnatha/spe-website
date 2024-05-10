"use client";

import { useEffect, useState } from "react";
import { images } from "../lib/home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
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
        className={`w-full relative flex flex-row justify-center items-center lg:gap-10 xl:gap-14 transition-transform ease-in-out duration-500`}
      >
        <div
          className="absolute z-[2] lg:static top-0 bottom-0 left-2 my-auto w-fit h-fit p-1 md:p-2 lg:p-4 cursor-pointer text-[24px] md:text-[28px] lg:text-[32px] flex justify-center items-center text-black bg-[#4C66B3] bg-opacity-70 hover:bg-opacity-100 rounded-full"
          onClick={clickPrev}
        >
          <IoIosArrowBack />
        </div>

        <div className="w-full lg:max-w-[70%] aspect-[2/1] flex overflow-hidden">
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? `w-full h-full transition-transform duration-200 ease-in-out transform translate-x-0 `
                  : `w-0 ${
                      transition == 1
                        ? "translate-x-[1000%]"
                        : "-translate-x-full"
                    }`
              }`}
            >
              <img src={elem.src} className="w-full h-full object-cover" loading="lazy"/>
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
      <div className="w-full h-auto">
        <div className="w-full bg-gradient-to-r from-[#213D73] to-[#4B65B3] relative rounded-xl py-[2.5%] px-[4.5%]">
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage ? "block w-full" : "hidden"
              }`}
            >
                <div className="text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] font-bold text-[#FFCA00] font-poppins text-center">
                  {elem.title}
                </div>
                <div className="text-[14px] md:text-[16px] lg:text-[20px] font-poppins text-justify text-white mt-3 lg:mt-5">
                  {" "}
                  {elem.desc}
                </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Carousel;
