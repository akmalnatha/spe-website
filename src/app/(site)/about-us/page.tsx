"use client";

import MarqueeComponent from "@/components/marquee";
import Marquee from "@/components/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Slides from "./components/slide";

export default function AboutUs() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <div className="bg-[#2F2F2F] w-full h-screen relative overflow-hidden pt-20">
          <motion.h1 
          variants={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.25,
                delay: 1,
                ease: "easeInOut"
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center text-[64px] font-poppins ">
            Strive for Excellence,
          </motion.h1>
          <motion.h1 
          variants={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.25,
                delay: 1.1,
                ease: "easeInOut"
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center text-[64px] font-leagueSpartan">
            Solve the Challenge
          </motion.h1>
        <img
          src="/assets/about_us_bg.png"
          alt="Team Members"
          className="absolute -bottom-[72px]"
        />
      </div>
      <MarqueeComponent>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
      </MarqueeComponent>
      <div className="bg-[#FFF6EF] pt-5 pb-10">
        <h2 className="text-[48px] drop-shadow-xl shadow-black text-[#1F3576] font-poppin font-bold text-center">
          Who We Are
        </h2>
        <p className="text-[24px] text-[#1F3576] font-poppin text-center">
        SPE is the largest individual-member organization serving engineers, managers, scientists, and other professionals worldwide in the upstream segment of oil and gas industry. <br />
        We are a student chapter of SPE International which functions is to provide Universitas Indonesia students technical oil and gas knowledge and soft skills that are needed to prepare future leaders in solving the impending energy challenges.
        </p>
      </div>
      <div className="bg-[#FFF6EF] pt-5 pb-10">
        <h3 className="text-[48px] text-[#1F3576] font-leagueSpartan font-semibold">
          <span className=" text-yellow-300 font-lato italic font-medium">Our</span> Core Values
        </h3>
        <Slides/>
      </div>
    </>
  );
}
