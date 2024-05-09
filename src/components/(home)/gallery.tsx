"use client";

import galleryData from "@/lib/gallery";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeGallery = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-r from-[#213D73] to-[#4B65B3] relative items-center overflow-hidden pt-10 pb-[13.75%] md:pb-[10%] px-[2.5%] gap-6">
      <div className="w-full relative overflow-hidden" data-aos="zoom-in">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#FFCA00] font-poppins font-bold text-center relative z-[2]">
          SPE Gallery 
        </h1>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
          SPE Gallery 
        </h1>
      </div>
      <p className="text-white text-justify font-poppins text-[14px] md:text-[16px] lg:text-[20px] px-[5%]" data-aos="zoom-in">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who&apos;s joining the community, read
        about how our community are increasing their membership income and
        lot&apos;s more.
      </p>
      <div className="w-full flex flex-wrap lg:flex-nowrap gap-x-6 gap-y-12 justify-center lg:justify-between items-center">
        {galleryData.map(
          (event, idx) =>
            (event.index === 6 || event.index === 7 || event.index === 8) && (
              <div key={idx} className="relative grow max-w-[280px] lg:max-w-[432px]" data-aos="flip-down">
                <img
                  src={event.image}
                  className="w-full h-auto relative rounded-lg"
                />
                <div className="absolute -bottom-[20%] lg:-bottom-[25%] left-0 right-0 mx-auto bg-[#F5F7FA] w-[90%] lg:w-[85%] h-auto p-2 lg:p-4 flex flex-col gap-4 items-center rounded-lg" style={{boxShadow: "0px 8px 16px rgba(171, 190, 209, 0.4)"}}>
                  <p className="text-[#717171] text-[14px] md:text-[16px] lg:text-[20px] font-poppins font-semibold text-center">{event.title}</p>
                  <Link href={`/gallery/${event.index}`} className="text-[#1F3576] font-poppins font-semibold flex gap-2 items-center text-[12px] md:text-[14px] lg:text-[18px]">Read More <span><FaArrowRightLong/></span></Link>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default HomeGallery;
