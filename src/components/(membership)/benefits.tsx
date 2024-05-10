const Benefits = () => {
  return (
    <>
      <div
        className="w-full h-fit relative overflow-hidden pt-14"
        style={{ boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-full h-full relative">
          <img
            src="/assets/member_benefits_bg.png"
            alt="background"
            loading="lazy"
            className="object-cover w-full h-[20vw] sm:h-[16vw]"
          />
          <div className="absolute w-fit h-full top-[5%] pr-[7.5%] right-0">
            <div className="w-fit h-full relative" data-aos="fade-down">
              <h2 className="text-[24px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[76px] text-white font-poppins font-bold text-right relative z-[2]">
                SPE Member <span className="font-normal">Benefits</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden py-16 px-[10%] lg:px-[8.3333%] grid grid-cols-1 lg:grid-cols-4 gap-x-5 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-[#FFCA00]">
        <div
          className="text-black flex flex-col items-center justify-center gap-7 py-7 pl-7"
          data-aos="flip-right"
        >
          <img
            src="/assets/opportunity.svg"
            alt=""
            loading="lazy"
            className="w-[25%] sm:w-[20%] lg:w-fit h-fit"
          />
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">
            Scholarship and fellowship opportunities
          </p>
        </div>
        <div
          className="text-black flex flex-col lg:flex-col-reverse items-center justify-center gap-7 py-7 pl-7"
          data-aos="flip-left"
        >
          <img
            src="/assets/career.svg"
            alt=""
            loading="lazy"
            className="w-[25%] sm:w-[20%] lg:w-fit h-fit"
          />
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">
            Acquire career-advancing skills through our work programs
          </p>
        </div>
        <div
          className="text-black flex flex-col items-center justify-center gap-7 py-7 pl-7"
          data-aos="flip-right"
        >
          <img
            src="/assets/community.svg"
            alt=""
            loading="lazy"
            className="w-[25%] sm:w-[20%] lg:w-fit h-fit"
          />
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">
            {" "}
            Access to the global community from SPE International to network
            with local / global industry professionals
          </p>
        </div>
        <div
          className="text-black flex flex-col lg:flex-col-reverse items-center justify-center gap-7 py-7 pl-7"
          data-aos="flip-left"
        >
          <img
            src="/assets/resource.svg"
            alt=""
            loading="lazy"
            className="w-[25%] sm:w-[20%] lg:w-fit h-fit"
          />
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">
            Free / discounted resources
          </p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
