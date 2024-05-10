"use client";

import { useState, useEffect } from "react";
import galleryData from "@/lib/gallery";
import Slides from "@/components/slide";
import SlideItem from "@/components/slide-item";

const EventPage = ({ params }: { params: { events: number } }) => {
  const index = params.events;
  const [galleryLength, setGalleryLength] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(-1);

  useEffect(() => {
    const eventGallery = galleryData.find((item) => item.index == index);
    if (eventGallery) {
      setGalleryLength(eventGallery.events.length);
    }
  }, [index]);

  if (galleryLength === 0) {
    return <div>Event not found</div>;
  }

  const eventGallery = galleryData.find((item) => item.index == index);

  if (!eventGallery) {
    return <div>Event not found</div>;
  }

  return (
    <div className="flex flex-col w-full h-full bg-white relative items-center overflow-hidden pt-[76px] lg:pt-[92px] pb-[36px] gap-7 md:gap-9 lg:gap-11">
      <div className="w-full relative overflow-hidden pt-[4%]">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
          {eventGallery.title}
        </h1>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full pt-[4%]">
          {eventGallery.title}
        </h1>
      </div>
      <Slides
        className="w-full h-[30vw]"
        partial
        slideDesktop={-25}
        slideMobile={-100}
        amount={eventGallery.events.length}
        currentItem={(current) => setCurrentSlide(current)}
      >
        {eventGallery.events.map((event, idx) => (
          <SlideItem
            type={undefined}
            active={currentSlide === -1 + idx}
            innerClassName="w-[90%] lg:w-[50vw] h-fit lg:px-[26px]"
            parentClassName="w-screen lg:w-[50vw]"
            key={idx}
          >
            <img src={event} alt={`Event ${index} Image ${idx}`} loading="lazy"/>
          </SlideItem>
        ))}
      </Slides>
      <div className="px-[6.6667%]">

        <p className="w-full text-white font-poppins text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-justify px-[5.12820512%] py-4 lg:py-8 rounded-xl bg-gradient-to-r from-[#213D73] to-[#4B65B3]">
          {eventGallery.desc}
        </p>
      </div>
    </div>
  );
};

export default EventPage;
