"use client"
import Counter from "../counter";

const Count = () => {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 items-center justify-center my-4">
        <div className="flex flex-col items-center">
          <p>
            <Counter value={143} />
          </p>
          <div className="relative">
            <p className="font-lato font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-[#142B6F] relative z-[1] leading-none">
              Countries
            </p>
            <div className="h-1 w-full absolute bottom-[1px] bg-gradient-to-t from-[#FFCA00] to-[#FFFFFF]"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-plusJakartaSans font-extrabold text-[28px] md:text-[32px] lg:text-[36px] bg-gradient-to-b from-[#142B6F] from-10% via-[#96A2C3] via-60% via to-[#0F1F50] to-80% inline-block text-transparent bg-clip-text">
            <Counter value={420} />+
          </p>
          <div className="relative">
            <p className="font-lato font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-[#142B6F] relative z-[1] leading-none">
              Student Chapter
            </p>
            <div className="h-1 w-full absolute bottom-[1px] bg-gradient-to-t from-[#FFCA00] to-[#FFFFFF]"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-plusJakartaSans font-extrabold text-[28px] md:text-[32px] lg:text-[36px] bg-gradient-to-b from-[#142B6F] from-10% via-[#96A2C3] via-60% via to-[#0F1F50] to-80% inline-block text-transparent bg-clip-text">
            <Counter value={158000} />+
          </p>
          <div className="relative">
            <p className="font-lato font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-[#142B6F] relative z-[1] leading-none">
              Members
            </p>
            <div className="h-1 w-full absolute bottom-[1px] bg-gradient-to-t from-[#FFCA00] to-[#FFFFFF]"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Count;
  