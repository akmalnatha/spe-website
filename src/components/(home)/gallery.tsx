"use client";

import galleryData from "@/lib/gallery";
import Link from "next/link";

const HomeGallery = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-r from-[#213D73] to-[#4B65B3] relative items-center overflow-hidden py-10 px-10 gap-6">
      <h1 className="text-[#FFCA00] font-bold font-poppins text-4xl md:text-6xl">
        SPE Gallery
      </h1>
      <p className="text-white text-justify font-poppins  md:text-[21px] px-12">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who&apos;s joining the community, read
        about how our community are increasing their membership income and
        lot&apos;s more.
      </p>
      <div className="flex flex-col md:flex-row">
        {galleryData.map(
          (event, idx) =>
            (event.index === 6 || event.index === 7 || event.index === 8) && (
              <div key={idx} className="flex justify-evenly">
                <img
                  src={event.image}
                  className="block w-full h-auto relative"
                />
                <Link href={`/gallery/${event.index}`} className=""></Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default HomeGallery;