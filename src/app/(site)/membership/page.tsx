import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Membership() {
  return (
    <>
      <div className="w-full h-auto lg:min-h-[874px] bg-gradient-to-b from-black to-[#D9D9D9] relative overflow-hidden">
        <img
          src="/assets/image copy.png"
          alt="Car Picture"
          className="absolute my-auto top-[80px] lg:top-[120px] bottom-0 w-[70%] md:w-[55.83%] xl:w-full"
        />
        <div className="bg-white bg-opacity-35 backdrop-blur-md w-[60%] md:w-1/2 h-[126vh] pt-[120px] lg:pt-[208px] pb-[96px] lg:pb-[180px] px-[7.5%] lg:px-[92px] border-[1px] border-white">
          <h1 className="text-black font-bold text-[24px] md:text-[40px] lg:text-[56px]">
            SPE UI SC 2024
          </h1>
          <p className="text-black font-poppins text-[14px] md:text-[16px] lg:text-[20px] md:text-justify mt-6 lg:mt-8">
            SPE as the{" "}
            <span className="font-bold">
              largest and internationally recognized oil and gas organization
            </span>
            , provides students with technical oil and gas knowledge and soft
            skills needed to solve the impending energy challenges
          </p>
          <p className="text-black font-poppins text-[14px] md:text-[16px] lg:text-[20px] md:text-justify mt-6 lg:mt-8">
            Becoming an SPE member will provide you with many opportunities to{" "}
            <span className="font-bold">network with other </span> student
            members and local/global industry professionals and{" "}
            <span className="font-bold">acquire career-advancing skills </span>{" "}
            through our work programs.
          </p>
          <div className="flex mt-5 lg:mt-10 gap-8">
            <Link
              href={"https://bit.ly/JoinSPE2024"}
              className="flex flex-row w-fit justify-center items-center gap-4 bg-sky-950 px-6 py-2 rounded-full text-[14px] md:text-[16px] lg:text-[24px] text-white font-semibold"
            >
              Join Us
              <FaExternalLinkAlt />
            </Link>

            <Link
              href={"https://bit.ly/SPEUISC2024MembershipGuidebook"}
              className="flex flex-row w-fit justify-center items-center gap-4 bg-sky-950 px-6 py-2 rounded-full text-[14px] md:text-[16px] lg:text-[24px] text-white font-semibold"
            >
              Guidebook
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-dark-maintext pt-[36px] lg:pt-[88px] pb-[44px] lg:pb-[100px] px-[6.805%] lg:px-[98px] relative overflow-hidden">
        <img
          src="/assets/car_2.svg"
          alt="Car Picture"
          className="hidden md:block absolute top-0 bottom-0 my-auto w-[75%] md:w-[50.55%] xl:w-auto -right-[11.11%]"
        />
        <h1 className="font-robotoSlab font-bold text-[32px] md:text-[40px] lg:text-[56px]">
          What Will You Get as Our Member?
        </h1>
        <div className="w-full md:w-[60%] max-w-[766px]">
          <div className="flex flex-col gap-9 mt-8 lg:mt-10">
            <div className="flex gap-6">
              <div className="flex items-center px-5 lg:px-10 border-r-8 border-[#FCCF37] font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[48px]">
                {" "}
                {/*flex element 1*/}1
              </div>
              <div className="flex justify-center flex-col gap-2">
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold font-poppins">
                  Valuable Resources
                </h3>
                <p className="font-poppins text-[14px] md:text-[16px] lg:text-[20px] text-justify">
                  A valuable resource of knowledge from our lectures, seminars,
                  visit-events, etc.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center px-[17px] lg:px-[34px] border-r-8 border-[#FCCF37] font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[48px]">
                {" "}
                {/*flex element 2*/}2
              </div>
              <div className="flex justify-center flex-col gap-2">
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold font-poppins">
                  Scholarship Opportunities
                </h3>
                <p className="font-poppins text-[14px] md:text-[16px] lg:text-[20px] text-justify">
                  We offer scholarship opportunities from SPE Java.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center px-[17px] lg:px-[34px] border-r-8 border-[#FCCF37] font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[48px]">
                {" "}
                {/*flex element 3*/}3
              </div>
              <div className="flex justify-center flex-col gap-2">
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold font-poppins">
                  Skill Upgrade
                </h3>
                <p className="font-poppins text-[14px] md:text-[16px] lg:text-[20px] text-justify">
                  Acquire career-advancing skills through SPE's work programs.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center px-[17px] lg:px-[34px] border-r-8 border-[#FCCF37] font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[48px]">
                {" "}
                {/*flex element 4*/}4
              </div>
              <div className="flex justify-center flex-col gap-2">
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold font-poppins">
                  Global Network
                </h3>
                <p className="font-poppins text-[14px] md:text-[16px] lg:text-[20px] text-justify">
                  Access to the global community of SPE International and
                  network with other student members and worldwide industry
                  professionals
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center px-[17px] lg:px-[34px] border-r-8 border-[#FCCF37] font-poppins font-semibold text-[24px] md:text-[36px] lg:text-[48px]">
                {" "}
                {/*flex element 5*/}5
              </div>
              <div className="flex justify-center flex-col gap-2">
                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold font-poppins">
                  Free / discounted resources & Many more!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
