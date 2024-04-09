"use client";

import ImageBox from "@/components/img-box";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="flex flex-col bg-white relative h h-full w-full pt-32 md:pt-40 lg:pt-48 pb-12 px-6 overflow-hidden">
      <h1
        className="text-3xl md:text-6xl text-[#1F3576] font-bold text-poppins mx-auto"
        data-aos="fade-down"
      >
        SPE UI GALLERY
      </h1>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/rectangle 803.svg"} />
        <ImageBox url={"/gallery/rectangle 804.svg"} />
        <ImageBox url={"/gallery/rectangle 805.svg"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-left"
      >
        <ImageBox url={"/gallery/rectangle 806.svg"} />
        <ImageBox url={"/gallery/rectangle 807.svg"} />
        <ImageBox url={"/gallery/rectangle 808.svg"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/rectangle 809.svg"} />
        <ImageBox url={"/gallery/rectangle 810.svg"} />
        <ImageBox url={"/gallery/IMG_8909 1.svg"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-left"
      >
        <ImageBox url={"/gallery/Screenshot (550) 1.svg"} />
        <ImageBox url={"/gallery/image 134.svg"} />
        <ImageBox url={"/gallery/image 135.svg"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/image 136.svg"} />
        <ImageBox url={"/gallery/IMG_4279 1.svg"} />
      </div>
    </div>
  );
}
