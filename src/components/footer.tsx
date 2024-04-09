import { GrLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-black text-white font-poppins w-full pt-8 pb-5 px-[3.333%]">
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="w-full lg:w-fit h-fit">
            {/*picture*/}
            <img
              src="/assets/SPE_UI_SC.png"
              alt="Logo SPE"
              className="w-2/3 sm:w-1/2 lg:w-fit h-fit lg:h-[280px] object-contain mx-auto"
            />
          </div>
          <div className="flex flex-col gap-6">
            {/*first element*/}
            <p className="text-[20px] md:text-[24px] font-bold text-white ">
              Society of Petroleum Engineers Universitas Indonesia Student Chapter
            </p>
            <div className="flex gap-2 text-[24px]">
              <GrLocation />
              <p className="text-[14px] md:text-[16px]">
                Kampus Baru UI, Depok, West Java - 16424
              </p>
            </div>
            <div className="flex gap-3 text-[24px] lg:text-[30px] items-center">
              <FaInstagram />
              <FaLinkedin />
              <p className="text-[16px] md:text-[20px]">#OutstandBeyondOrdinary</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
