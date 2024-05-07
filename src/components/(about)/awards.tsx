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
      <div className="flex flex-col w-1/2 h-fit justify-center items-center">
        <img src={img} className="w-full h-full" data-aos="fade-right"></img>
        {button && (
          <Link
            href="/about-us"
            className="w-fit text-[#142B6F] font-medium py-2 px-10 rounded-3xl mt-4 justify-center border-[3px] border-[#FFCA00]"
          >
            {buttonText}
          </Link>
        )}
      </div>
      <div
        className="w-1/2 bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37] h-auto px-12 pt-16 pb-32 text-[#1F3576]"
        data-aos="fade-left"
      >
        <h1 className="text-6xl font-bold font-poppins text-center">{title}</h1>
        <h2 className="text-3xl font-bold font-poppins mt-14">{subtitle1}</h2>
        <h2 className="text-3xl font-regular font-poppins">{subtitle2}</h2>
        <p className="text-2xl font-poppins mt-8 text-justify">{desc1}</p>
        <p className="text-2xl font-poppins mt-4 text-justify">{desc2}</p>
      </div>
    </div>
  );
};

export default Awards;
