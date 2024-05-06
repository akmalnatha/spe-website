"use client";

import { useState, useEffect } from "react";
import galleryData from "@/lib/gallery";

const EventPage = ({ params }: { params: { events: number } }) => {
  const index = params.events;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryLength, setGalleryLength] = useState(0);

  useEffect(() => {
    const eventGallery = galleryData.find((item) => item.index == index);
    if (eventGallery) {
      setGalleryLength(eventGallery.events.length);
    }
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryLength);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [galleryLength]);

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
      <div className="flex flex-wrap">
        {eventGallery.events.map((event, idx) => (
          <img
            key={idx}
            src={event}
            alt={`Event ${index} Image ${idx}`}
            className={`m-2 w-[50vw] h-[30vw] ${
              idx === currentIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
            style={{ transition: "opacity 0.5s ease-in-out" }}
          />
        ))}
      </div>
      <p className="w-4/5 text-white font-poppins text-2xl text-center px-12 py-8 rounded-xl bg-[black]">
        {eventGallery.desc}
      </p>
    </div>
  );
};

export default EventPage;
