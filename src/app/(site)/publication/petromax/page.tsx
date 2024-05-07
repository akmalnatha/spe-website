"use client";

import { useEffect } from "react";
import Button from "@/components/button";
import AOS from "aos";
import PetromaxData, { PetromaxItem } from "@/lib/petromax";

export default function Petromax() {
  const openMagazine = (link:string) => {
    window.open(link, "_blank");
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <>
      <div
        className="w-full h-fit pt-[76px] lg:pt-[92px] bg-white pb-[36px]"
      >
        <div className="w-full bg-[#FFFFFF] py-[4%]">
          <div className="w-full relative overflow-hidden mb-4">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
              PETROMAX
            </h1>
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
              PETROMAX
            </h1>
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-center px-[10%]">
            Petromax is an SPE UI SC’s biannual magazine, which is published twice a year. Petromax contains many articles starting from technical knowledge to trivia information
          </p>
          <div className="my-6 h-0 border-4 border-[#1F3576] mx-[3.6111%]"></div>
        </div>
        <div className="w-full bg-white h-fit flex flex-col gap-16 mb-[36px]">
          {PetromaxData.map((item: PetromaxItem, idx: number) => {
            return(
              <div key={idx} className="bg-cover bg-no-repeat bg-center w-full overflow-hidden" style={{backgroundImage: item.image}}>
                <div className="w-full h-full backdrop-blur-sm bg-white bg-opacity-50 py-[24px] px-[6.111%] flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
                  <img src={item.poster} alt="Magazine Cover" className="object-contain max-h-[492px]" data-aos="zoom-in"/>
                  <div className="w-full" data-aos="fade-left">
                    <div className="w-full relative overflow-hidden mb-2">
                      <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
                        {item.title}
                      </h1>
                      <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
                        {item.title}
                      </h1>
                    </div>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-justify">
                      {item.description}
                    </p>
                    <div className="w-1/2 lg:w-1/3 mx-auto mt-6">
                      <Button type={"button"} color="hollow" text="Read More" shape="rounded-small" onClick={() => openMagazine(item.link)}/>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
