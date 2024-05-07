import { useEffect, useState } from "react";
import articleData from "@/lib/articleData";
import Link from "next/link";
import AOS from "aos";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <>
      <div
        className={`relative w-full h-full flex flex-col justify-center items-center`}
      >
        {articleData.map((elem) => (
          <div key={elem.index}>
            {/* Check if index is even */}
            {elem.index % 2 !== 0 ? (
              <>
                {/* Render image on the left and text on the right */}
                <div className="flex flex-col md:flex-row border-t-8 border-[#1F3576] py-11 mx-12 justify-center items-center gap-8">
                  <img
                    src={elem.image}
                    alt={elem.alt}
                    className="md:w-[300px] lg:w-[344px] h-auto object-cover"
                    data-aos="fade-right"
                  />
                  <div
                    className="md:w-1/2 flex flex-col gap-6 px-auto md:px-16"
                    data-aos="fade-left"
                  >
                    <h1 className="text-[#142B6F] font-bold font-poppins sm: md:text-2xl lg:text-3xl">
                      {elem.title}
                    </h1>

                    <p className="text-[#142B6F] text-justify font-light font-poppins sm:text-lg md:text-lg lg:text-2xl">
                      {elem.text}
                    </p>

                    <Link
                      href={elem.link}
                      className="w-fit h-fit text-[#142B6F] font-bold font-poppins sm:text-lg md:text-lg lg:text-2xl items-end bg-[#FAD133] rounded-3xl px-6 py-2"
                    >
                      Read For More
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Render image on the right and text on the left */}
                <div className="flex flex-col md:flex-row border-t-8 border-[#1F3576] py-11 mx-12 justify-center items-center gap-8">
                  <div
                    className="md:w-1/2 flex flex-col gap-6 px-auto md:px-16"
                    data-aos="fade-left"
                  >
                    <div className="flex md:justify-end">
                      <h1 className="text-[#142B6F] font-bold font-poppins sm: md:text-2xl lg:text-3xl  ">
                        {elem.title}
                      </h1>
                    </div>

                    <p className="text-[#142B6F] font-light text-justify font-poppins sm:text-lg md:text-lg lg:text-2xl">
                      {elem.text}
                    </p>

                    <Link
                      href={elem.link}
                      className="w-fit h-fit text-[#142B6F] font-bold font-poppins sm:text-lg md:text-lg lg:text-2xl justify-end items-end bg-[#FAD133] rounded-3xl px-6 py-2"
                    >
                      Read For More
                    </Link>
                  </div>
                  <img
                    src={elem.image}
                    alt={elem.alt}
                    className="sm:w-28 md:w-[300px] lg:w-[344px] h-auto object-cover"
                    data-aos="fade-right"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-full"></div>
    </>
  );
};

export default Article;
