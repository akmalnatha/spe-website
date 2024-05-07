"use client";

import Link from "next/link";
import Competition from "./components/competition";
import AOS from "aos";
import { useEffect } from "react";

export default function Petrodays() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="w-full h-full bg-white relative overflow-hidden pt-32 pb-12">
      <div>
        <img
          src="/petrodays/Petrodays.svg"
          className="flex justify-center items-center mx-auto"
          data-aos="fade-down"
        />
        <p
          className="w-3/4 text-center text-[#1F3576] sm:text-sm md:text-2xl py-10 mx-auto"
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
        className="flex flex-col border-t-8 border-[#1F3576] pt-10 pb-8 mx-12 justify-center items-center gap-8"
        data-aos="fade-left"
      >
        <h1 className="text-[#1F3576] text-2xl md:text-4xl lg:text-6xl font-bold font-poppins py-4">
          Our Grand Theme
        </h1>
      </div>
      <div className="mx-0">
        <div className="w-full flex flex-col justify-center items-center absolute top-[38%] sm:top-[26%] lg:top-[24%] gap-8">
          <h1
            className="leading-tight relative z-[2] text-center text-[#1F3576] font-poppins font-bold text-3xl w-4/5"
            data-aos="fade-right"
          >
            Embracing the Green Revolution: Renewable Energy Integration for a
            Sustainable Oil and Gas Industry
          </h1>

          <p
            className="leading-tight relative z-[2] text-justify text-[#1F3576] font-poppins font-medium text-xl w-4/5"
            data-aos="fade-left"
          >
            signifies a pivotal shift in the oil and gas sector as it commits to
            integrating renewable energy sources for long-term sustainability.
            Focused on mitigating environmental impact and reducing carbon
            footprints, the industry is strategically incorporating technologies
            such as solar and wind power into its operations.
          </p>

          <Link
            href="https://linktr.ee/Petrodays2024"
            className="w-fit bg-white text-[#142B6F] text-xl font-poppins font-medium py-2 px-10 rounded-3xl mt-4 justify-center border-[4px] border-[#FFCA00]"
            data-aos="fade-up"
          >
            Disvover more details
          </Link>
        </div>
        <img
          src="/petrodays/petrodays-bg.svg"
          alt="Background"
          className="w-screen h-auto"
        />
      </div>
      <div className="flex flex-col py-11 mx-12 justify-center items-center gap-8">
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
