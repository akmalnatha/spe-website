import Button from "../button";

const HeroHome = () => {
  return (
    <div className="w-full h-fit flex lg:gap-7 relative">
      <div
        className="flex flex-col self-center justify-center w-full md:w-[50%] shrink-0 h-full lg:h-auto px-[3.75%] lg:pl-[3.75%] lg:pr-0 absolute md:static z-[2] bg-white lg:bg-transparent bg-opacity-65 backdrop-blur-sm lg:backdrop-blur-none pt-[76px] lg:pt-0"
        data-aos="fade-right"
      >
        <div className="w-full relative overflow-hidden lg:pt-[92px]">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-center md:text-start text-[#1F3576] font-poppins font-bold relative z-[2]">
            Society of Petroleum Engineers
          </h1>
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] text-center md:text-start text-[#2F2F2F] font-poppins font-bold absolute top-[2px] left-[2px] opacity-35 w-full lg:pt-[92px]">
            Society of Petroleum Engineers
          </h1>
        </div>
        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] text-[#1F3576] text-center md:text-start mt-2 lg:mt-4 font-semibold">
          Universitas Indonesia Student Chapter
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] text-center md:text-start mt-4 lg:mt-6">
          SPE is on international non-profit orgarization that provides
          unparalalled insights, shared expertise, and life-long learning to
          fuel the success af our members and the future of the oil and gas
          industry,
        </p>
        <div className="self-center md:self-start flex flex-row mt-4 gap-4">
          <Button
            type={"button"}
            color="secondary"
            fitContent
            shape="rounded-small"
            text="Join Us"
            onClick={() => (window.location.href = "/membership")}
          />
          <Button
            type={"button"}
            color="hollow"
            fitContent
            shape="rounded-small"
            text="Learn More"
            onClick={() => (window.location.href = "/about-us")}
          />
        </div>
      </div>
      <img
        src="/home/home1.png"
        className="w-full min-h-screen md:min-h-0 max-h-screen h-full object-cover object-center"
        loading="lazy"
        data-aos="zoom-in"
      />
    </div>
  );
};

export default HeroHome;
