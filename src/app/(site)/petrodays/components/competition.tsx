"use client";

import { useEffect, useState } from "react";
import { compe } from "@/lib/competition";
import AOS from "aos";

const Competition = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      {compe.map((elem, idx) => (
        <div
          key={idx}
          className="relative w-screen h-auto flex flex-col bg-[#142B6F] px-4 py-10"
          data-aos="fade-right"
        >
          <>
            <h1 className="text-center text-[#FBD233] text-5xl font-bold pb-10 shadow-xl drop-shadow-xl">
              {elem.title}
            </h1>
            <div
              className="flex flex-row gap-8 px-auto md:px-6"
              data-aos="fade-left"
            >
              <img src={elem.src} className="w-1/2 h-auto" />
              <p className="w-1/2 text-[white] text-justify font-poppins text-xl">
                {elem.desc}
              </p>
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default Competition;
