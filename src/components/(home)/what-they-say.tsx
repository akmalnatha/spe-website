import Carousel from "../carousel";

const WhatTheySay = () => {
  return (
    <div className="flex flex-col bg-white mt-[9.375%] px-[6.875%]">
      <div className="w-full relative overflow-hidden" data-aos="zoom-in">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#1F3576] font-poppins font-bold relative z-[2]">
          What Do They Say?
        </h1>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-center text-[#2F2F2F] font-poppins font-bold absolute top-[2px] left-[2px] opacity-35 w-full">
          What Do They Say?
        </h1>
      </div>
      <div className="flex flex-row mt-[3.4375%]" data-aos="fade-up">
        <Carousel />
      </div>
    </div>
  );
};

export default WhatTheySay;
