"use client";

import Button from "@/components/button";
import MarqueeComponent from "@/components/marquee";
import Marquee from "@/components/marquee";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Petrodays() {
//   const [title] = useState(["Resilient", "Escalate", "Comprehensive"]); // Define your title here
//   const [description] = useState([
//     "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
//     "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
//     "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
//   ]); // Define your description here
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationKey, setAnimationKey] = useState(0);
//   const [isMobile, setIsMobile] = useState<boolean>();

//   useEffect(() => {
//     setCurrentIndex(0); // Reset currentIndex when the screen size changes
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % title.length);
//       setAnimationKey((prevKey) => (prevKey + 1) % title.length); // Update the key to trigger animation restart
//     }, 7000); // Change sentence every 5 seconds

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (typeof window !== "undefined") {
//         setIsMobile(window.innerWidth < 1024);
//       }
//     };

//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);
//     }

//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("resize", handleResize);
//       }
//     };
//   }, []);

  return (
    <>
      <div
        className="w-full h-fit pt-[56px] lg:pt-[72px] bg-white pb-[36px]"
      >
        <div className="w-full bg-[#FFFFFF] pt-[4%] pb-[2.5%]">
          <div className="w-full relative overflow-hidden mb-4">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
              PETROMAX
            </h1>
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
              PETROMAX
            </h1>
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-center px-[8.5%]">
          Petromax is an SPE UI SC’s biannual magazine, which is published twice a year. Petromax contains many articles starting from technical knowledge to trivia information
          </p>
        </div>
        <div className="w-full bg-white h-fit flex flex-col gap-16 mb-[36px]">
          <div className="bg-[url('/assets/petromax_17.png')] bg-cover xl:bg-contain bg-no-repeat bg-center w-full">
            <div className="w-full h-full backdrop-blur-sm bg-white bg-opacity-50 py-[72px] px-[88px] flex flex-col lg:flex-row gap-20 items-center">
              <img src="/assets/poster_17.png" alt="" className="object-contain max-h-[492px]"/>
              <div className="w-full ">
                <div className="w-full relative overflow-hidden mb-2">
                  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
                    PETROMAX Vol.17
                  </h1>
                  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
                    PETROMAX Vol.17
                  </h1>
                </div>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-justify">
                  Petromax is an SPE UI SC’s biannual magazine, which is published twice a year.  Petromax contains many articles starting from technical knowledge to trivia information.
                </p>
                <div className="w-1/3 mx-auto mt-6">
                  <Button type={"button"} color="hollow" text="Read More" shape="rounded-small"/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/assets/petromax_18.png')] bg-cover xl:bg-contain bg-no-repeat bg-center w-full">
            <div className="w-full h-full backdrop-blur-sm bg-white bg-opacity-50 py-[72px] px-[88px] flex flex-col lg:flex-row gap-20 items-center">
              <img src="/assets/poster_18.png" alt="" className="object-contain max-h-[492px]"/>
              <div className="w-full ">
                <div className="w-full relative overflow-hidden mb-2">
                  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
                    PETROMAX Vol.18
                  </h1>
                  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
                    PETROMAX Vol.18
                  </h1>
                </div>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-justify">
                  Petromax is an SPE UI SC’s biannual magazine, which is published twice a year.  Petromax contains many articles starting from technical knowledge to trivia information.
                </p>
                <div className="w-1/3 mx-auto mt-6">
                  <Button type={"button"} color="hollow" text="Read More" shape="rounded-small"/>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/assets/petromax_19.png')] bg-cover xl:bg-contain bg-no-repeat bg-center w-full">
            <div className="w-full h-full backdrop-blur-sm bg-white bg-opacity-50 py-[72px] px-[88px] flex flex-col lg:flex-row gap-20 items-center">
              <img src="/assets/poster_19.png" alt="" className="object-contain max-h-[492px]"/>
              <div className="w-full ">
                <div className="w-full relative overflow-hidden mb-2">
                  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
                    PETROMAX Vol.19
                  </h1>
                  <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
                    PETROMAX Vol.19
                  </h1>
                </div>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-justify">
                  Petromax is an SPE UI SC’s biannual magazine, which is published twice a year.  Petromax contains many articles starting from technical knowledge to trivia information.
                </p>
                <div className="w-1/3 mx-auto mt-6">
                  <Button type={"button"} color="hollow" text="Read More" shape="rounded-small"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
