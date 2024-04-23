"use client";

import MarqueeComponent from "@/components/marquee";
import Marquee from "@/components/marquee";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Slides from "./components/slide";
import Counter from "./components/counter";

export default function AboutUs() {
  const [title] = useState(["Resilient", "Escalate", "Comprehensive"]); // Define your title here
  const [description] = useState([
    "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
    "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
    "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
  ]); // Define your description here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setCurrentIndex(0); // Reset currentIndex when the screen size changes
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % title.length);
      setAnimationKey((prevKey) => (prevKey + 1) % title.length); // Update the key to trigger animation restart
    }, 7000); // Change sentence every 5 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

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
        className="w-full h-fit relative overflow-hidden pt-[56px] lg:pt-[72px]"
      >
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
            className="text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[64px] text-[#FCCF37] font-leagueSpartan font-semibold relative"
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
            className="text-center text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px] text-[#2F2F2F] font-lato italic font-semibold relative"
          >
            <h1 className="leading-tight relative z-[2]">
              Strive Excellence, Solve the Challenge
            </h1>
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
          className="h-[16%] lg:h-[8%] w-full absolute bottom-0 z-[3]"
          style={{
            boxShadow: "inset 0 -28px 16px -12px rgba(255, 255, 255, 1)",
          }}
        ></div>
      </motion.div>
      {/* <MarqueeComponent>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
        <h1 className="px-5 text-yellow-400 font-lato italic">SPE UI SC - Outstand Beyond Ordinary</h1>
      </MarqueeComponent> */}
      <div className="w-full bg-[#FFFFFF] pt-[1.3%] pb-[2.5%]">
        <div className="w-full relative overflow-hidden mb-4">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
            Who <span className="text-[#FBD233]">We</span> Are
          </h2>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
            Who We Are
          </h2>
        </div>
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
      <div className="w-full bg-[#FFFFFF] pb-[2.5%]">
        <div className="w-full relative overflow-hidden">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-poppins font-bold leading-snug relative z-[2]">
            <span className="text-[#FBD233]">Our</span> Core Values
          </h2>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#2F2F2F] font-poppins font-bold leading-snug absolute top-[2px] left-[2px] opacity-35 w-full">
            Our Core Values
          </h2>
        </div>
        <Slides />
        <motion.div
          key={animationKey}
          variants={{
            hidden: {
              opacity: 1,
            },
            show: {
              opacity: 1,
            },
          }}
          className={`w-[90%] h-auto mx-auto rounded-xl bg-gradient-to-r flex flex-col justify-start gap-2 md:gap-5 lg:justify-between items-center p-[3%] md:p-[2%] lg:mt-7 ${
            currentIndex == 1
              ? "md:flex-row-reverse from-[#213D73] to-[#4B65B3]"
              : "md:flex-row from-[#4B65B3] to-[#213D73]"
          }`}
        >
          <AnimatePresence>
            <motion.div
              key={title[currentIndex]}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.75,
                  delay: 0,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.75,
                  delay: 0,
                  ease: "easeInOut",
                },
              }}
              className="text-center text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] text-[#FBD233] font-poppins font-bold relative"
            >
              <h3 className="relative z-[2]">
                {title[currentIndex]}
              </h3>
              <h3 className="absolute text-center text-[#2F2F2F] top-[2px] left-[2px] opacity-35 w-full">
                {title[currentIndex]}
              </h3>
            </motion.div>
            <motion.div
              key={description[currentIndex]}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.75,
                  delay: 0.1,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.75,
                  delay: 0.1,
                  ease: "easeInOut",
                },
              }}
              className="w-full lg:w-[75%] text-justify text-[14px] md:text-[16px] lg:text-[20px] text-white font-poppins relative"
            >
              {description[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="w-full bg-[#FFFFFF] pb-[2.5%]">
        <div className="w-full relative overflow-hidden mb-3">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-poppins font-bold leading-snug relative z-[2]">
            Meet <span className="text-[#FBD233]">Our</span> Team
          </h2>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#2F2F2F] font-poppins font-bold leading-snug absolute top-[2px] left-[2px] opacity-35 w-full">
            Meet Our Team
          </h2>
        </div>
        <div className="w-full h-auto px-[3.333%]">
          <img src={"/assets/organogram.png"} alt={"organogram"} className="object-contain"/>
        </div>
      </div>
    </>
  );
}
