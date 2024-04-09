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
        <ImageBox url={"/gallery/rectangle 803-min.png"} />
        <ImageBox url={"/gallery/rectangle 804-min.png"} />
        <ImageBox url={"/gallery/rectangle 805-min.png"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-left"
      >
        <ImageBox url={"/gallery/rectangle 806-min.png"} />
        <ImageBox url={"/gallery/rectangle 807-min.png"} />
        <ImageBox url={"/gallery/rectangle 808-min.png"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/rectangle 809-min.png"} />
        <ImageBox url={"/gallery/rectangle 810-min.png"} />
        <ImageBox url={"/gallery/IMG_8909 1-min.png"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-left"
      >
        <ImageBox url={"/gallery/Screenshot (550) 1-min.png"} />
        <ImageBox url={"/gallery/image 134-min.png"} />
        <ImageBox url={"/gallery/image 135-min.png"} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/image 136-min.png"} />
        <ImageBox url={"/gallery/IMG_4279 1-min.png"} />
      </div>
    </div>
  );
}
