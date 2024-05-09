"use client";

import Article from "./components/article";
import AOS from "aos";
import { useEffect } from "react";

export default function SpeEnergized() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="bg-white flex flex-col w-full h-fit overflow-hidden pt-[76px] lg:pt-[92px]">
      <div className="flex flex-col">
        <h1
          className="w-full h-[34vw] sm:h-[26vw] xl:h-[18vw] text-white font-bold font-poppins text-center justify-center items-center text-4xl md:text-6xl lg:text-9xl py-12 md:py-20 lg:px-auto bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/coba.svg')" }}
          data-aos="fade-down"
        >
          SPEnergized
        </h1>

        <p
          className="w-5/6 text-center text-[#142B6F] sm:text-sm md:text-xl font-light py-10 mx-auto "
          data-aos="fade-right"
        >
          SPEnergized is a student-run think tank powered by SPE Universitas
          Indonesia Student Chapter. To provide members of SPE UI SC with
          opportunities to engage in study, research, and evidence-based,
          collaboration-oriented, solution-minded projects that lead to value
          creation and impactful contributions to society. We aim to connect SPE
          UI officers with its members to collaborate together for the purpose
          of the this activity which is to produce research articles.
        </p>
      </div>

      <div>
        <Article />
      </div>
    </div>
  );
}
