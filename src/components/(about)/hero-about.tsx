import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
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
      className="w-full h-fit relative overflow-hidden pt-[76px] lg:pt-[92px]"
    >
      <div className="w-full flex flex-col absolute top-[38%] sm:top-[26%] lg:top-[23%]">
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
          className="text-center text-[16px] md:text-[24px] lg:text-[32px] xl:text-[40px] text-[#2F2F2F] font-lato italic font-semibold relative"
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
        src="/about/about_us_bg_new.png"
        alt="Background"
        loading="lazy"
        className="object-contain"
      />
      <img
        src="/about/about_us_team.png"
        alt="Team Members"
        loading="lazy"
        className="object-contain absolute bottom-0 z-[2] w-full"
      />
      <div
        className="h-[16%] lg:h-[8%] w-full absolute bottom-0 z-[3]"
        style={{
          boxShadow: "inset 0 -28px 16px -12px rgba(255, 255, 255, 1)",
        }}
      ></div>
    </motion.div>
  );
};

export default HeroAbout;
