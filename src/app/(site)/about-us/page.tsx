"use client";

// import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import Slides from "@/components/slide";
import Awards from "@/components/(about)/awards";
import SlideItem from "@/components/slide-item";
import Info from "@/components/(about)/info";
import Count from "@/components/(about)/count-about-us";
import VisionMission from "@/components/(about)/vision-mission";
import CoreValues from "@/components/(about)/core-values";
import HeroAbout from "@/components/(about)/hero-about";

export default function AboutUs() {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <>
      <HeroAbout />
      <div className="w-full bg-[#FFFFFF] pt-[1.3%] pb-[2.5%]">
        <Info />
        <Count />
      </div>
      <VisionMission />
      <CoreValues/>
      <div className="bg-white py-[6.875%]">
        <Awards
          img="/awards/badge.svg"
          title="Awards"
          subtitle1="Presidential Award SPE International"
          subtitle2="Outstanding Student Chapter for 2022/2023 Stewardship"
          desc1="The award recognizes the highest-ranked 10% of eligible student chapters that are exemplary in the scoring categories,"
          desc2="with other 27 SPE SCs across the world have won the 2023 Presidential Award for Outstanding Student Chapter."
          button={false}
        />
      </div>
      {/* <div className="w-full bg-[#FFFFFF] pb-[2.5%]">
        <div className="w-full relative overflow-hidden mb-3">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-poppins font-bold leading-snug relative z-[2]">
            Meet <span className="text-[#FBD233]">Our</span> Team
          </h2>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#2F2F2F] font-poppins font-bold leading-snug absolute top-[2px] left-[2px] opacity-35 w-full">
            Meet Our Team
          </h2>
        </div>
        <div className="w-full h-auto px-[3.333%]">
          <img
            src={"/assets/organogram.png"}
            alt={"organogram"}
            className="object-contain"
          />
        </div>
      </div> */}
    </>
  );
}
