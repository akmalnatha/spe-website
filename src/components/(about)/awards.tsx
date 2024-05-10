"use client";

import AOS from "aos";
import { ReactNode, useEffect } from "react";
import Button from "../button";

interface awardProp {
  img: string;
  title: string;
  subtitle1: string;
  subtitle2: ReactNode;
  desc1: ReactNode;
  desc2: ReactNode;
  button?: boolean 
}

const Awards = ({
  img,
  title,
  subtitle1,
  subtitle2,
  desc1,
  desc2,
  button = false
}: awardProp) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center h-fit bg-white">
      <div className="flex flex-col w-4/5 lg:w-1/2 justify-center items-center">
        <img src={img} className="w-full h-full" data-aos="fade-right"></img>
        {button && (
          <Button type={"button"} color="hollow" fitContent shape="rounded-small" text="Find Out More"/>
        )}
      </div>
      <div
        className="w-full lg:w-1/2 bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37] px-[2.5%] py-8 lg:py-16 text-[#1F3576]"
        data-aos="fade-left"
      >
        <div className="w-full relative overflow-hidden mb-4">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
            {title}
          </h1>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
            {title}
          </h1>
        </div>
        <h2 className="text-[16px] md:text-[20px] lg:text-[24px] text-center md:text-start font-bold font-poppins mt-14">
          {subtitle1}
        </h2>
        {subtitle2}
        {desc1}
        {desc2}
      </div>
    </div>
  );
};

export default Awards;
