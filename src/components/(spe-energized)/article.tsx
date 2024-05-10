import { useEffect, useState } from "react";
import articleData from "@/lib/articleData";
import Link from "next/link";
import AOS from "aos";
import Button from "@/components/button";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <>
      <div
        className={`w-full h-full flex flex-col px-[10%] lg:px-[4.0625%]`}
      >
        {articleData.map((elem) => (
          <>
            {/* Render image based on index */}
            <div
              key={elem.index}
              className={`flex flex-col ${
                elem.index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
              } border-t-8 border-[#1F3576] py-[12.5%] lg:py-[3.5%] px-[4%] justify-center items-center gap-[24px] lg:gap-[48px] xl:gap-[72px]`}
            >
              <img
                src={elem.image}
                alt={elem.alt}
                className="md:w-[284px] lg:w-[344px] h-auto object-cover"
                loading="lazy"
                data-aos="fade-right"
              />
              <div
                className={`md:grow flex flex-col gap-6 items-center ${
                  elem.index % 2 !== 0 ? "md:items-start" : "md:items-end"
                }`}
                data-aos="fade-left"
              >
                <h1 className="text-[#142B6F] font-bold font-poppins text-[20px] md:text-[24px] lg:text-[28px] text-center lg:text-start">
                  {elem.title}
                </h1>
                <p className={`text-[#142B6F] font-light text-justify font-poppins text-[16px] md:text-[20px] lg:text-[24px] ${
                  elem.index % 2 !== 0 ? "md:text-justify" : "md:text-right"
                }`}>
                  {elem.text}
                </p>
                <div className="lg:block hidden">
                  <Button
                    type={"button"}
                    textClass="text-[#1F3576] underline font-bold font-poppins"
                    color="secondary"
                    text="Read For More"
                    shape="rounded-medium"
                    fitContent
                    onClick={() => window.open(
                      elem.link,
                      "_blank"
                    )}
                  />
                </div>
                <div className="lg:hidden">
                  <Button
                    type={"button"}
                    textClass="text-[#1F3576] underline font-bold font-poppins"
                    color="secondary"
                    text="Read For More"
                    shape="rounded-small"
                    fitContent
                    onClick={() => window.open(
                      elem.link,
                      "_blank"
                    )}
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full h-full"></div>
    </>
  );
};

export default Article;
