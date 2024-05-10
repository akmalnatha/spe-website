import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#FFCA00] via-[#FBDB5C] via-80% to-[#FCD136] text-[#1F3576] font-poppins w-full pt-10 pb-12 px-[3.333%]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-7">
          <div className="w-full lg:w-fit h-fit">
            {/*picture*/}
            <img
              src="/assets/SPE_UI_SC.png"
              alt="Logo SPE"
              loading="lazy"
              className="w-2/3 sm:w-1/2 lg:w-fit h-fit lg:h-[168px] max-h-[168px] object-contain mx-auto"
            />
          </div>
          <div className="flex flex-col gap-6 grow">
            <div className="w-full relative text-[16px] md:text-[20px] lg:text-[24px] lg:text-start font-bold">
              <p className="w-full text-center lg:text-start relative z-[2] text-[#1F3576]">
                Society of Petroleum Engineers Universitas Indonesia Student Chapter
              </p>
              <p className="w-full text-center lg:text-start absolute top-[2px] left-[2px] text-black opacity-25">
                Society of Petroleum Engineers Universitas Indonesia Student Chapter
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-2 text-[24px] md:text-[28px] lg:text-[32px] items-center">
              <FaLocationDot />
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-bold">
                Kampus Baru UI, Depok, West Java - 16424
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#FFCA00] items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#1F3576] rounded-full flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-[#1F3576] rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </div>
              <p className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#1F3576] font-bold ml-3">#OutstandBeyondOrdinary</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
