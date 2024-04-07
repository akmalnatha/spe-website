import { GrLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-black text-white font-poppins w-full pt-2 pb-16 px-12 flex flex-col gap-7">
        <div className="flex flex-wrap lg:flex-nowrap gap-7 sm:gap-[15%] sm:gap-y-7 lg:gap-y-0 xl:gap-[20%]">
          <div className="w-full lg:w-fit h-fit">
            {/*picture*/}
            <img
              src="/assets/SPE UI SC.png"
              alt="Logo SPE"
              className="w-fit h-fit"
            />
          </div>
          <div className="flex flex-col gap-2 sm:shrink-0">
            {/*first element*/}
            <p className="text-[16px] font-bold text-white">
              Society of Petroleum Engineers Universitas Indonesia Student
              Chapter
            </p>
            <div className="flex gap-3 text-[24px]">
              <GrLocation />
              <p className="text-[14px]">
                Kampus Baru UI, Depok, West Java - 16424
              </p>
            </div>
            <div className="flex gap-3 text-[24px] items-center">
              <div className="flex flex-row">
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
