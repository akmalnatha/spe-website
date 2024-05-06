"use client";
import Link from "next/link";
import Slider from "@/components/(home)/slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Awards from "@/components/(about)/awards";
import HomeGallery from "@/components/(home)/gallery";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const text = {
    title: "",
  };

  return (
    <main className="w-full h-full bg-white relative overflow-hidden pb-32">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div
          className="flex flex-col w-full lg:w-1/2 pt-36 px-10 md:pt-36 md:pl-10 lg:pt-64 lg:pl-16"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-6xl text-[#1F3576] font-bold text-poppins">
            Society of Petroleum Engineers
          </h1>
          <h2 className="text-2xl d:text-4xl text-[#1F3576] mt-2 font-semibold">
            Universitas Indonesia Student Chapter
          </h2>
          <p className="md:text-xl text-[#1F3576] mt-4">
            SPE is on international non-profit orgarization that provides
            unparalalled insights, shared expertise, and life-long learning to
            fuel the success af our members and the future of the oil and gas
            industry,
          </p>
          <div className="flex flex-row mt-8 gap-4">
            <Link
              href="/membership"
              className="bg-[#f6dB00] rounded-2xl px-4 py-2 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <p className="text-sm md:text-xl text-white font-semibold">
                Join Us
              </p>
            </Link>
            <Link
              href="/about-us"
              className="border border-[#f6dB00] rounded-2xl px-4 py-2 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <p className="text-sm md:text-xl text-[#1F3576] font-semibold">
                Know More
              </p>
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:items-end lg:justify-end pt-14 lg:pt-18 w-full lg:w-1/2">
          <img
            src="./assets/home1.png"
            className="w-4/5 h-auto lg:h-[92vh] lg:w-[90%] rounded-lg"
            data-aos="fade-down"
          />
        </div>
      </div>

      <div className="flex flex-col bg-white mt-24">
        <h1
          className="text-3xl md:text-6xl text-[#1F3576] font-bold text-poppins mx-auto"
          data-aos="fade-left"
        >
          What Do They Say?
        </h1>
        <div className="flex flex-row mt-2 md:mt-14" data-aos="fade-up">
          <Slider />
        </div>
      </div>

      <div className="bg-white mt-28">
        <Awards
          img="./awards/presedential.png"
          title="About Us"
          subtitle1="Presidential Award SPE International"
          subtitle2="Outstanding Student Chapter for 2022/2023 Stewardship"
          desc1="The award recognizes the highest-ranked 10% of eligible student chapters that are exemplary in the scoring categories,"
          desc2="with other 27 SPE SCs across the world have won the 2023 Presidential Award for Outstanding Student Chapter."
          button={true}
          buttonText="Find Out More"
        />
      </div>

      <div className="mt-28">
        <HomeGallery />
      </div>
    </main>
  );
}
