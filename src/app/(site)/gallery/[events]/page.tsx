"use client";

import { useState, useEffect } from "react";
import galleryData from "@/lib/gallery";
import Slides from "@/components/(about)/slide";
import SlideItem from "@/components/(about)/slide-item";

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
    <div className="flex flex-col w-full h-full bg-white relative items-center overflow-hidden pt-32 pb-10 gap-11">
      <h2 className="text-[#1F3576] font-bold text-6xl">
        {eventGallery.title}
      </h2>
      <Slides
        className="w-full h-[30vw]"
        partial
        slideDesktop={-25}
        slidePartial={-50}
        slideMobile={-100}
        amount={eventGallery.events.length}
        currentItem={(current) => setCurrentSlide(current)}
      >
        {eventGallery.events.map((event, idx) => (
          <SlideItem
            type={undefined}
            active={currentSlide === -1 + idx}
            innerClassName="w-[50vw] left-0 right-0 mx-auto h-fit px-[52px]"
            parentClassName="w-screen lg:w-[50vw]"
            key={idx}
          >
            <img src={event} alt={`Event ${index} Image ${idx}`} />
          </SlideItem>
        ))}
      </Slides>
      <p className="w-4/5 text-white font-poppins text-2xl text-center px-12 py-8 rounded-xl bg-gradient-to-r from-[#142B6F] to-[#4B65B2]">
        {eventGallery.desc}
      </p>
    </div>
  );
};

export default EventPage;
