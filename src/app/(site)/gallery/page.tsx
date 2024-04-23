"use client";

import ImageBox from "@/components/img-box";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/loading";

export default function Gallery() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false); // Set isLoading to false when all images are loaded
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="flex flex-col bg-white relative h h-full w-full pt-32 md:pt-40 lg:pt-48 pb-12 px-6 overflow-hidden">
      <LoadingPage isLoad={isLoading} />
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
        <ImageBox url={"/gallery/image 1.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/image 2.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/image 3.svg"} onLoad={handleImageLoad} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-left"
      >
        <ImageBox url={"/gallery/image 4.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/image 5.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/image 6.svg"} onLoad={handleImageLoad} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/image 7.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/image 8.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/IMG_8909 1.svg"} onLoad={handleImageLoad} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-left"
      >
        <ImageBox
          url={"/gallery/Screenshot (550) 1.svg"}
          onLoad={handleImageLoad}
        />
        <ImageBox url={"/gallery/image 134.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/image 135.svg"} onLoad={handleImageLoad} />
      </div>
      <div
        className="flex flex-col md:flex-row gap-4 mt-12"
        data-aos="fade-right"
      >
        <ImageBox url={"/gallery/image 136.svg"} onLoad={handleImageLoad} />
        <ImageBox url={"/gallery/IMG_4279 1.svg"} onLoad={handleImageLoad} />
      </div>
    </div>
  );
}
