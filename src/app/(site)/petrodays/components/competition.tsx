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
          className="relative w-full h-full flex flex-col bg-[#142B6F] px-4 py-8"
        >
          <>
            <h1>{elem.title}</h1>
            <div
              className="w-1/2 flex flex-row gap-6 px-auto md:px-16"
              data-aos="fade-left"
            >
              <img src={elem.src} className="w-auto h-auto" />
              <p className="text-[white] text-justify font-poppins text-sm">
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
