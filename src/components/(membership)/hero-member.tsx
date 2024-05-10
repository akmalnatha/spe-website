const HeroMember = () => {
  return (
    <div className="w-full h-fit relative overflow-hidden pt-[76px] lg:pt-[92px]">
        <div className="relative w-full h-[34vw] sm:h-[26vw] lg:h-[16vw]">
          <div
            className="w-full h-[34vw] sm:h-[26vw] lg:h-[16vw] bg-[#F0F4F8] absolute top-0"
            style={{
              WebkitClipPath: "polygon(100% 30%, 100% 0, 0 0, 0 100%)",
              clipPath: "polygon(100% 30%, 100% 0, 0 0, 0 100%)",
            }}
          ></div>
          <div
            className="w-full h-[34vw] sm:h-[26vw] lg:h-[16vw] bg-[#1F3576] absolute top-0"
            style={{
              WebkitClipPath: "polygon(0 30%, 0 0, 100% 0, 100% 100%)",
              clipPath: "polygon(0 30%, 0 0, 100% 0, 100% 100%)",
            }}
          ></div>
          <div className="w-fit h-full pt-[3.88889%] lg:pt-[3%] xl:pt-[2.5%] pr-[4.44444%] ml-auto">
            <div
              className="w-full h-full relative overflow-hidden"
              data-aos="fade-down"
            >
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[88px] text-white font-poppins font-bold text-right relative z-[2]">
                Membership
              </h2>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[88px] text-[#2F2F2F] font-poppins font-bold text-right absolute top-[2px] left-[2px] opacity-35">
                Membership
              </h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroMember;
