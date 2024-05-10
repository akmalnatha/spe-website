"use client";

import Article from "./components/article";
import AOS from "aos";
import { useEffect } from "react";

export default function SpeEnergized() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="bg-white flex flex-col w-full h-fit overflow-hidden pt-[76px] lg:pt-[92px]">
      <div
        className="w-full h-[34vw] sm:h-[26vw] lg:h-[20vw] text-white font-bold font-poppins flex justify-center items-center gap-2 md:gap-4 lg:gap-6 py-[24px] sm:py-[31px] md:py-[38px] lg:py-[45px] xl:py-[52px] bg-center bg-cover"
        style={{ backgroundImage: "url('/spe-energized/bg_title.svg')" }}
      >
        <img
          src="/spe-energized/icon_title.svg"
          alt="icon"
          className="h-full max-h-[68px] sm:max-h-[80px] md:max-h-[92px] lg:max-h-[128px] object-contain"
          loading="lazy"
          data-aos="zoom-in"
        />
        <div className="w-fit h-fit relative overflow-hidden" data-aos="zoom-in">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[104px] text-white font-poppins font-bold text-center relative z-[2]">
            SPEnergized
          </h1>
          <h1 className="text-[40px] sm:text-[72px] md:text-[80px] lg:text-[104px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
            SPEnergized
          </h1>
        </div>
      </div>
      <p
        className="w-full text-center text-[#142B6F] text-[14px] md:text-[16px] lg:text-[20px] font-poppins font-light px-[9.21875%] mt-9 mb-12 "
        data-aos="fade-right"
      >
        SPEnergized is a student-run think tank powered by SPE Universitas
        Indonesia Student Chapter. To provide members of SPE UI SC with
        opportunities to engage in study, research, and evidence-based,
        collaboration-oriented, solution-minded projects that lead to value
        creation and impactful contributions to society. We aim to connect SPE
        UI officers with its members to collaborate together for the purpose of
        the this activity which is to produce research articles.
      </p>
      <Article />
    </div>
  );
}
