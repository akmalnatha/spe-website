"use client";

import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

interface awardProp {
  img: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  desc1: string;
  desc2: string;
  button: boolean;
  buttonText: string;
}

const Awards = ({
  img,
  title,
  subtitle1,
  subtitle2,
  desc1,
  desc2,
  button,
  buttonText,
}: awardProp) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white">
      <div className="flex flex-col w-4/5 lg:w-1/2 h-fit justify-center items-center">
        <img src={img} className="w-full h-full" data-aos="fade-right"></img>
        {button && (
          <Link
            href="/about-us"
            className="w-fit hover:bg-[#142B6F] text-[#142B6F] hover:text-white font-medium py-2 px-4 md:px-10 rounded-3xl mt-4 justify-center border-[3px] border-[#FFCA00] text-sm md:text-xl"
          >
            {buttonText}
          </Link>
        )}
      </div>
      <div
        className="w-4/5 lg:w-1/2 bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37] h-auto px-12 pt-7 md:pt-16 pb-12 md:pb-32 mt-10 lg:mt-0 text-[#1F3576]"
        data-aos="fade-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-center">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold font-poppins mt-14">
          {subtitle1}
        </h2>
        <h2 className="text-2xl md:text-3xl text-center md:text-start font-regular font-poppins mt-2 md:mt-0">
          {subtitle2}
        </h2>
        <p className="text-xl md:text-2xl font-poppins mt-8 text-justify">{desc1}</p>
        <p className="text-xl md:text-2xl font-poppins mt-4 text-justify">{desc2}</p>
      </div>
    </div>
  );
};

export default Awards;
