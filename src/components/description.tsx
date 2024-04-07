import React from "react";
import { images } from "./constants";
import left from "/public//left.svg";
import right from "/public/right.svg";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-gradient-to-b from-[#FCCF37] via-[#FAD431] to-[#FBE291] relative md:rounded-tr-3xl md:rounded-br-3xl">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
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
            <div className="text-3xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-black mt-6">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-4 right-12 cursor-pointer text-[24px]"
              onClick={clickPrev}
            >
              <FaAngleLeft />
            </div>

            <div
              className="absolute bottom-4 right-6 cursor-pointer text-[24px]"
              onClick={clickNext}
            >
              <FaAngleRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
