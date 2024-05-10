"use client";
import Link from "next/link";
import Slider from "@/components/(home)/slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Awards from "@/components/(about)/awards";
import HomeGallery from "@/components/(home)/gallery";
import Button from "@/components/button";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const text = {
    title: "",
  };

  return (
    <main className="w-full h-full bg-white relative overflow-hidden pb-[36px]">
      <div className="w-full h-fit flex lg:gap-7 relative">
        <div
          className="flex flex-col self-center justify-center w-full md:w-[50%] shrink-0 h-full lg:h-auto px-[3.75%] lg:pl-[3.75%] lg:pr-0 absolute md:static z-[2] bg-white lg:bg-transparent bg-opacity-65 backdrop-blur-sm lg:backdrop-blur-none pt-[76px] lg:pt-0"
          data-aos="fade-right"
        >
          <div className="w-full relative overflow-hidden lg:pt-[92px]">
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-center md:text-start text-[#1F3576] font-poppins font-bold relative z-[2]">
              Society of Petroleum Engineers
            </h1>
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-center md:text-start text-[#2F2F2F] font-poppins font-bold absolute top-[2px] left-[2px] opacity-35 w-full lg:pt-[92px]">
              Society of Petroleum Engineers
            </h1>
          </div>
          <h2 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#1F3576] text-center md:text-start mt-2 lg:mt-4 font-semibold">
            Universitas Indonesia Student Chapter
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] text-center md:text-start mt-4 lg:mt-6">
            SPE is on international non-profit orgarization that provides
            unparalalled insights, shared expertise, and life-long learning to
            fuel the success af our members and the future of the oil and gas
            industry,
          </p>
          <div className="self-center md:self-start flex flex-row mt-4 gap-4">
            <Button
              type={"button"}
              color="secondary"
              fitContent
              shape="rounded-small"
              text="Join Us"
              onClick={() => (window.location.href = "/membership")}
            />
            <Button
              type={"button"}
              color="hollow"
              fitContent
              shape="rounded-small"
              text="Learn More"
              onClick={() => (window.location.href = "/about-us")}
            />
          </div>
        </div>
        <img
          src="/home/home1.png"
          className="w-full min-h-screen md:min-h-0 max-h-screen h-full object-cover object-center"
          data-aos="zoom-in"
        />
      </div>
      <div className="flex flex-col bg-white mt-[9.375%] px-[6.875%]">
        <div className="w-full relative overflow-hidden" data-aos="zoom-in">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-poppins font-bold relative z-[2]">
            What Do They Say?
          </h1>
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#2F2F2F] font-poppins font-bold absolute top-[2px] left-[2px] opacity-35 w-full">
            What Do They Say?
          </h1>
        </div>
        <div className="flex flex-row mt-[3.4375%]" data-aos="fade-up">
          <Slider />
        </div>
      </div>
      <div className="bg-white mt-[10.9375%]">
        <Awards
          img="/awards/presedential.png"
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
      <div className="mt-[12.8125%]">
        <HomeGallery />
      </div>
    </main>
  );
}
