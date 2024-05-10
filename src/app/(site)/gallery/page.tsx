"use client";

import Link from "next/link";
import Image from "next/image"
import galleryData from "@/lib/gallery"; // Import your image data
import AOS from "aos";
import { useEffect } from "react";

const GalleryPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="w-full h-full bg-white relative overflow-hidden pt-[76px] lg:pt-[92px] pb-[36px]">
      <div className="w-full relative overflow-hidden py-[4%]" data-aos="zoom-in">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
          SPE Gallery 
        </h1>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full pt-[4%]">
          SPE Gallery 
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-x-8 lg:gap-y-16 px-[5.3125%]">
        {galleryData.map((gallery, index) => (
          <div
            key={index}
            className="flex flex-col gap-4"
            data-aos="flip-up"
          >
            <Link href={`/gallery/${gallery.index}`}>
              <h2 className="text-[#0033D0] font-extrabold font-plusJakartaSans text-lg text-start mb-3">
                {gallery.title}
              </h2>
              <img
                src={gallery.image}
                alt={`Event ${gallery.index}`}
                className="cursor-pointer hover:shadow-2xl hover:shadow-[#FBD233]"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
