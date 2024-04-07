"use client";

import ImageBox from "@/components/img-box";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="flex flex-col bg-white  relative h h-full w-full pt-48 pb-12 px-6">
      <h1
        className="text-6xl text-[#1F3576] font-bold text-poppins mx-auto"
        data-aos="fade-down"
      >
        SPE UI GALLERY
      </h1>
      <div className="flex flex-row gap-4 mt-12" data-aos="fade-right">
        <ImageBox url={"./gallery/rectangle 803.png"} />
        <ImageBox url={"./gallery/rectangle 804.png"} />
        <ImageBox url={"./gallery/rectangle 805.png"} />
      </div>
      <div className="flex flex-row gap-4 mt-12" data-aos="fade-left">
        <ImageBox url={"./gallery/rectangle 806.png"} />
        <ImageBox url={"./gallery/rectangle 807.png"} />
        <ImageBox url={"./gallery/rectangle 808.png"} />
      </div>
      <div className="flex flex-row gap-4 mt-12" data-aos="fade-right">
        <ImageBox url={"./gallery/rectangle 809.png"} />
        <ImageBox url={"./gallery/rectangle 810.png"} />
        <ImageBox url={"./gallery/IMG_8909 1.png"} />
      </div>
      <div className="flex flex-row gap-4 mt-12" data-aos="fade-left">
        <ImageBox url={"./gallery/Screenshot (550) 1.png"} />
        <ImageBox url={"./gallery/image 134.png"} />
        <ImageBox url={"./gallery/image 135.png"} />
      </div>
      <div className="flex flex-row gap-4 mt-12" data-aos="fade-right">
        <ImageBox url={"./gallery/image 136.png"} />
        <ImageBox url={"./gallery/IMG_4279 1.png"} />
      </div>
    </div>
  );
}
