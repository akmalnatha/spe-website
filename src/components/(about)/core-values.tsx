"use client";
import { useState, useEffect } from "react";
import Slides from "../slide";
import SlideItem from "../slide-item";

const CoreValues = () => {
//   const [title] = useState(["Resilient", "Escalate", "Comprehensive"]); // Define your title here
//   const [description] = useState([
//     "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
//     "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
//     "SPE is an international non-profit organization that provides unparalalled insights, shared expertise, and life-long learning to fuel the success of our members and the future of the oil and gas industry.",
//   ]); // Define your description here
//   const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(-1);
//   const [animationKey, setAnimationKey] = useState(0);
//   const [isMobile, setIsMobile] = useState<boolean>();

//   useEffect(() => {
//     setCurrentIndex(0); // Reset currentIndex when the screen size changes
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % title.length);
//       setAnimationKey((prevKey) => (prevKey + 1) % title.length); // Update the key to trigger animation restart
//     }, 7000); // Change sentence every 5 seconds

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (typeof window !== "undefined") {
//         setIsMobile(window.innerWidth < 1024);
//       }
//     };

//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);
//     }

//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("resize", handleResize);
//       }
//     };
//   }, []);
  return (
    <div className="w-full bg-[#FFFFFF] py-[2.5%]">
      <div className="w-full relative overflow-hidden">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-poppins font-bold leading-snug relative z-[2]">
          <span className="text-[#FBD233]">Our</span> Core Values
        </h2>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#2F2F2F] font-poppins font-bold leading-snug absolute top-[2px] left-[2px] opacity-35 w-full">
          Our Core Values
        </h2>
      </div>
      <Slides
        className="w-full h-64"
        slideDesktop={-33}
        slideMobile={-100}
        amount={3}
        currentItem={(current) => setCurrentSlide(current)}
      >
        <SlideItem
          type="resilient"
          active={currentSlide === -1}
          innerClassName="w-60 md:w-72 lg:w-80 h-fit"
          parentClassName="w-screen lg:w-[33vw]"
        />
        <SlideItem
          type="escalate"
          active={currentSlide === 0}
          innerClassName="w-60 md:w-72 lg:w-80 h-fit"
          parentClassName="w-screen lg:w-[33vw]"
        />
        <SlideItem
          type="comprehensive"
          active={currentSlide === 1}
          innerClassName="w-60 md:w-72 lg:w-80 h-fit"
          parentClassName="w-screen lg:w-[33vw]"
        />
      </Slides>
      {/* <motion.div
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
              <h3 className="relative z-[2]">{title[currentIndex]}</h3>
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
        </motion.div> */}
      <div
        className={`w-full h-auto mx-auto bg-gradient-to-r flex flex-col justify-start gap-2 md:gap-5 lg:justify-between items-center p-[3%] md:p-[2%] lg:mt-7 md:flex-row from-[#4B65B3] to-[#213D73]`}
      >
        <div
          className="text-center text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] text-[#FBD233] font-poppins font-bold relative"
          data-aos="fade-right"
        >
          <h3 className="relative z-[2]">Resilient</h3>
          <h3 className="absolute text-center text-[#2F2F2F] top-[2px] left-[2px] opacity-35 w-full">
            Resilient
          </h3>
        </div>
        <div
          className="w-full lg:w-[75%] text-justify text-[14px] md:text-[16px] lg:text-[20px] text-white font-poppins relative"
          data-aos="fade-left"
        >
          SPE is an international non-profit organization that provides
          unparalalled insights, shared expertise, and life-long learning to
          fuel the success of our members and the future of the oil and gas
          industry.
        </div>
      </div>
      <div
        className={`w-full h-auto mx-auto bg-gradient-to-r flex flex-col justify-start gap-2 md:gap-5 lg:justify-between items-center p-[3%] md:p-[2%] lg:mt-7 md:flex-row-reverse from-[#213D73] to-[#4B65B3]`}
      >
        <div
          className="text-center text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] text-[#FBD233] font-poppins font-bold relative"
          data-aos="fade-left"
        >
          <h3 className="relative z-[2]">Escalate</h3>
          <h3 className="absolute text-center text-[#2F2F2F] top-[2px] left-[2px] opacity-35 w-full">
            Escalate
          </h3>
        </div>
        <div
          className="w-full lg:w-[75%] text-justify text-[14px] md:text-[16px] lg:text-[20px] text-white font-poppins relative"
          data-aos="fade-right"
        >
          SPE is an international non-profit organization that provides
          unparalalled insights, shared expertise, and life-long learning to
          fuel the success of our members and the future of the oil and gas
          industry.
        </div>
      </div>
      <div
        className={`w-full h-auto mx-auto bg-gradient-to-r flex flex-col justify-start gap-2 md:gap-5 lg:justify-between items-center p-[3%] md:p-[2%] lg:mt-7 md:flex-row from-[#4B65B3] to-[#213D73]`}
      >
        <div
          className="text-center text-[20px] md:text-[28px] lg:text-[36px] xl:text-[44px] text-[#FBD233] font-poppins font-bold relative"
          data-aos="fade-right"
        >
          <h3 className="relative z-[2]">Comprehensive</h3>
          <h3 className="absolute text-center text-[#2F2F2F] top-[2px] left-[2px] opacity-35 w-full">
            Comprehensive
          </h3>
        </div>
        <div
          className="w-full lg:w-[75%] text-justify text-[14px] md:text-[16px] lg:text-[20px] text-white font-poppins relative"
          data-aos="fade-left"
        >
          SPE is an international non-profit organization that provides
          unparalalled insights, shared expertise, and life-long learning to
          fuel the success of our members and the future of the oil and gas
          industry.
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
