"use client";

import MarqueeComponent from "@/components/marquee";
import Marquee from "@/components/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Slides from "./components/slide";
import Counter from "./components/counter";

export default function AboutUs() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <motion.div 
      variants={{
        hidden: {
          opacity: 1,
        },
        show: {
          opacity: 1,
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full h-fit relative overflow-hidden pt-[56px] lg:pt-[72px]">
        <div className="w-full flex flex-col absolute top-[32%] sm:top-[23%] lg:top-[20%]">
          <motion.div
            variants={{
              hidden: {
                y: 200,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1.25,
                  delay: 0,
                  ease: "easeInOut",
                },
              },
            }}
            className="text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[64px] text-[#FCCF37] drop-shadow-md font-leagueSpartan font-semibold relative"
          >
            <h1 className="leading-tight relative z-[2]">SPE UI SC</h1>
            <h1 className="leading-tight absolute text-center text-[#2F2F2F] top-[2px] left-[2px] opacity-35 w-full">
              SPE UI SC
            </h1>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                y: 200,
                opacity: 0,
              },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1.25,
                  delay: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
            className="text-center text-[16px] md:text-[24px] lg:text-[36px] xl:text-[48px] text-[#2F2F2F] drop-shadow-md font-lato italic font-semibold relative"
          >
            <h1 className="leading-tight relative z-[2]">Strive Excellence, Solve the Challenge</h1>
            <h1 className="leading-tight absolute text-center text-[#2F2F2F] top-[2px] left-[2px] opacity-35 w-full">
              Strive Excellence, Solve the Challenge
            </h1>
          </motion.div>
        </div>
        <img
          src="/assets/about_us_bg_new.png"
          alt="Background"
          className="object-contain"
        />
        <img
          src="/assets/about_us_team.png"
          alt="Team Members"
          className="object-contain absolute bottom-0 z-[2] w-full"
        />
        <div
          className="h-[8%] w-full absolute bottom-0 z-[3]"
          style={{
            boxShadow: "inset 0 -28px 24px -8px rgba(255, 255, 255, 1)",
          }}
        ></div>
      </motion.div>
      {/* <MarqueeComponent>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
      </MarqueeComponent> */}
      <div className="bg-[#FFFFFF] pt-[1.3%] pb-[2.5%]">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] shadow-black text-[#1F3576] font-poppins font-bold text-center mb-4">
          Who We Are
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-justify px-[3.333%]">
          SPE is the{" "}
          <span className="font-bold">
            largest individual-member organization
          </span>{" "}
          serving{" "}
          <span className="font-bold fon">
            engineers, managers, scientists,
          </span>{" "}
          and <span className="font-bold">other professionals worldwide</span>{" "}
          in the upstream segment of oil and gas industry. <br />
          <br />
          We are a student chapter of SPE International which functions is to
          provide Universitas Indonesia students{" "}
          <span className="font-bold">
            technical oil and gas knowledge
          </span> and <span className="font-bold">soft skills</span> that are
          needed to prepare future leaders in solving the impending energy
          challenges.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 items-center justify-center my-4">
          <div className="flex flex-col items-center">
            <p>
              <Counter value={143} />
            </p>
            <div className="relative">
              <p className="font-lato font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-[#142B6F] relative z-[1] leading-none">
                Countries
              </p>
              <div className="h-1 w-full absolute bottom-[1px] bg-gradient-to-t from-[#FFCA00] to-[#FFFFFF]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-plusJakartaSans font-extrabold text-[28px] md:text-[32px] lg:text-[36px] bg-gradient-to-b from-[#142B6F] from-10% via-[#96A2C3] via-60% via to-[#0F1F50] to-80% inline-block text-transparent bg-clip-text">
              <Counter value={420} />+
            </p>
            <div className="relative">
              <p className="font-lato font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-[#142B6F] relative z-[1] leading-none">
                Student Chapter
              </p>
              <div className="h-1 w-full absolute bottom-[1px] bg-gradient-to-t from-[#FFCA00] to-[#FFFFFF]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-plusJakartaSans font-extrabold text-[28px] md:text-[32px] lg:text-[36px] bg-gradient-to-b from-[#142B6F] from-10% via-[#96A2C3] via-60% via to-[#0F1F50] to-80% inline-block text-transparent bg-clip-text">
              <Counter value={158000} />+
            </p>
            <div className="relative">
              <p className="font-lato font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-[#142B6F] relative z-[1] leading-none">
                Members
              </p>
              <div className="h-1 w-full absolute bottom-[1px] bg-gradient-to-t from-[#FFCA00] to-[#FFFFFF]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] pt-5 pb-10">
        <h3 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-leagueSpartan font-semibold">
          <span className=" text-yellow-300 font-lato italic font-medium">
            Our
          </span>{" "}
          Core Values
        </h3>
        <Slides />
      </div>
    </>
  );
}
