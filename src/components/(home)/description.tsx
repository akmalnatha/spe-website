import React from "react";
import { images } from "../../lib/home";
import { motion } from "framer-motion";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="place-items-start w-4/5 mx-auto md:w-full bg-gradient-to-r from-[#213D73] to-[#4B65B3] relative lg:rounded-3xl md:rounded-3xl lg:pb-10 xl:pb-2 pt-10 px-10">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="text-xl md:text-xl lg:text-[46px] font-bold text-[#FFCA00] font-poppins text-center">
              {elem.title}
            </div>
            <div className="text-[11px] lg:text-[20px] font-poppins h-60 md:h-40 text-justify text-white mt-4 lg:mt-8">
              {" "}
              {elem.desc}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Description;
