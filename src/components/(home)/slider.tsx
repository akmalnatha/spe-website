"use client";

import { useEffect, useState } from "react";
import { images } from "../../lib/home";
import Description from "./description";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="flex flex-col place-items-center gap-8 w-4/5 mx-auto max-w-5xl">
      <div
        className={`w-full flex flex-row justify-center items-center transition-transform ease-in-out duration-500 p-6`}
      >
        <div
          className="cursor-pointer text-[24px] mr-[40px] text-black bg-[#4C66B3] rounded-full p-5"
          onClick={clickPrev}
        >
          <FaAngleLeft />
        </div>

        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <img
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-[648.7px] h-auto md:h-[388.55px] object-cover"
            />
          </div>
        ))}

        <div
          className="cursor-pointer text-[24px] ml-[40px] text-black bg-[#4C66B3] rounded-full p-5"
          onClick={clickNext}
        >
          <FaAngleRight />
        </div>
      </div>
      <div className="w-full h-full">
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
