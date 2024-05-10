"use client";
import Link from "next/link";
import Slider from "@/components/carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Awards from "@/components/(about)/awards";
import HomeGallery from "@/components/(home)/gallery";
import Button from "@/components/button";
import HeroHome from "@/components/(home)/hero-home";
import WhatTheySay from "@/components/(home)/what-they-say";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <main className="w-full h-full bg-white relative overflow-hidden pb-[36px]">
      <HeroHome/>
      <WhatTheySay/>
      <div className="bg-white mt-[10.9375%]">
        <Awards
          img="/awards/presidential.svg"
          title="SPE UI Awards"
          button
          subtitle1="Presidential Award SPE International"
          subtitle2={
            <h2 className="text-[14px] md:text-[16px] lg:text-[20px] text-center md:text-start font-regular font-poppins mt-2 md:mt-0">
              Outstanding Student Chapter for 2022/2023{" "}
              <span className="italic">Stewardship</span>
            </h2>
          }
          desc1={
            <p className="text-[14px] md:text-[16px] lg:text-[20px] font-poppins mt-10 text-justify">
              The award recognizes the{" "}
              <span className="font-bold">highest-ranked 10%</span> of eligible
              student chapters that are exemplary in the scoring categories,
            </p>
          }
          desc2={
            <p className="text-[14px] md:text-[16px] lg:text-[20px] font-poppins mt-4 text-justify">
              with other 27 SPE SCs across the world have won the 2023
              Presidential Award for Outstanding Student Chapter.
            </p>
          }
        />
      </div>
      <HomeGallery />
    </main>
  );
}
