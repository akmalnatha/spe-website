"use client";

import Link from "next/link";
import Competition from "./components/competition";
import AOS from "aos";
import { useEffect } from "react";
import Button from "@/components/button";

export default function Petrodays() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="w-full h-full bg-white overflow-hidden relative pt-[76px] lg:pt-[92px]">
      <div>
        <div
          className="w-full flex gap-3 sm:gap-5 items-center justify-center pt-[24px]"
          data-aos="zoom-in"
        >
          <img
            src="/petrodays/petrodays_logo.png"
            className="h-full max-h-[17.5vw] md:max-h-[92px] lg:max-h-[128px] object-contain"
            loading="lazy"
          />
          <h1 className="relative w-fit text-[10vw] md:text-[68px] lg:text-[88px] bg-gradient-to-r from-[#2B645B] via-[#6BB293] via-[32%] to-[#3C6481] to-[37%] text-transparent bg-clip-text font-leagueSpartan font-extrabold text-center pr-2 leading-none align-baseline">
            PETRO
            <span className="font-lato italic bg-gradient-to-r from-[#6BB293] to-[#1F3576] to-[15%] text-transparent bg-clip-text text-[8.75vw] md:text-[60px] lg:text-[80px]">
              {" "}
              DAYS 2024
            </span>
            <div className=" absolute left-px md:left-[2px] bottom-1 md:bottom-2 w-1/2 h-[2px] sm:h-1 bg-gradient-to-r from-[#FFCA01] to-white" />
          </h1>
        </div>
        <p
          className="w-full text-center text-[#1F3576] text-[14px] md:text-[16px] lg:text-[20px] font-poppins pt-4 lg:pt-6 pb-6 lg:pb-8 px-[9.0625%]"
          data-aos="fade-up"
        >
          Petrodays, an internal competition program created to prepare officers
          and members of the SPE UI SC for external competitions in the oil and
          gas industry. The program aims to provide a platform for members to
          enhance their competitive spirit and prepare them for external
          competitions at the university, national, and international levels.
        </p>
      </div>
      <div
        className="flex border-t-4 md:border-t-8 border-[#1F3576] pt-6 lg:pt-8 pb-3 lg:pb-5 md:pb-8 mx-[3.4375%] justify-center items-center"
        data-aos="fade-left"
      >
        <div className="w-full relative overflow-hidden">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
            Our Grand Theme
          </h1>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
            Our Grand Theme
          </h1>
        </div>
      </div>
        <div className="w-full relative bg-[url('/petrodays/petrodays-bg.svg')] bg-cover flex flex-col justify-center items-center gap-4 xl:gap-6 py-[6.875%] px-[5.625%]">
          <div className="w-full h-full bg-gradient-to-r from-[#2D5B5B] to-[#6BB293] opacity-30 absolute inset-0 z-[0]"></div>
          <h1
            className="text-center relative z-[2] text-[#1F3576] font-poppins font-bold text-[20px] md:text-[24px] lg:text-[28px] px-[4.0625%]"
            data-aos="fade-right"
          >
            Embracing the Green Revolution: Renewable Energy Integration for a
            Sustainable Oil and Gas Industry
          </h1>
          <p
            className="relative z-[2] text-justify text-[#1F3576] font-poppins font-medium text-[14px] md:text-[16px] lg:text-[20px]"
            data-aos="fade-left"
          >
            Signifies a pivotal shift in the oil and gas sector as it commits to
            integrating renewable energy sources for long-term sustainability.
            Focused on mitigating environmental impact and reducing carbon
            footprints, the industry is strategically incorporating technologies
            such as solar and wind power into its operations.
          </p>
          <div className="w-fit lg:w-1/3 relative z-[2]">
            <Button
              type={"button"}
              textClass="text-[#1F3576] underline font-medium font-poppins"
              color="hollow"
              shape="rounded-small"
              text="Discover More Details"
              onClick={() => window.open("https://linktr.ee/Petrodays2024", "_blank")}
            />
          </div>
        </div>
      <div className="flex flex-col py-6 md:py-11 mx-12 justify-center items-center gap-8">
        <h1
          className="text-[#1F3576] text-2xl md:text-4xl lg:text-6xl font-bold font-poppins py-4"
          data-aos="fade-down"
        >
          Our Competition
        </h1>
        <Competition />
      </div>
    </div>
  );
}
