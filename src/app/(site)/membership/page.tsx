"use client";
import redirect from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "@/components/button";

export default function Membership() {
  const openRegistrationForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScQDSg4YLx2kxm3KwVWukvRvyMgcGd_5HebH23gxfDXZEI21A/viewform", "_blank");
  };
  const EmbedVideo = () => (
    <iframe
      width="100%"
      height="100%"
      src={`https://drive.google.com/file/d/1_tqrDdsntJTJJ0ppBFtAeo9ZZOg_3kPY/preview`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded video"
      className="absolute top-0 left-0"
    />
  );
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="bg-white">
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
      <div className="w-full h-auto relative overflow-hidden px-[4.44444%] pt-5">
        <div
          className="bg-[#1F3576] p-3 text-[14px] md:text-[16px] lg:text-[20px] text-justify font-poppins indent-20"
          data-aos="fade-right"
        >
          SPE is the{" "}
          <span className="text-[16px] md:text-[18px] lg:text-[22px] font-bold">
            largest individual-member organization
          </span>{" "}
          serving engineers and professionals worldwide in the upstream segment
          of the{" "}
          <span className="text-[16px] md:text-[18px] lg:text-[22px] font-bold text-[#FBD035]">
            Oil & Gas Industry.
          </span>{" "}
          Provide students with technical Oil & Gas knowledge and soft skills
          that are needed to prepare future leaders in solving the impending
          energy challenges. SPE UI SC is linked to SPE International.
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mt-6">
          <div className="flex flex-col gap-4 items-center w-[85%] sm:w-[75%] md:w-fit">
            <h3
              className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold font-poppins text-black w-fit"
              data-aos="fade-left"
            >
              Video Tutorial Registration Member
            </h3>
            <div
              className="w-[85%] sm:w-[75%] md:w-[316px] h-fit"
              data-aos="zoom-in"
            >
              <div className="relative overflow-hidden h-0 pb-[177.75%]">
                <EmbedVideo />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-12 justify-end items-center mt-5 md:mt-0">
            <p
              className="text-black text-[14px] md:text-[16px] lg:text-[20px] text-justify font-poppins font-medium"
              data-aos="fade-left"
            >
              By becoming an SPE International member, you will get provided
              with{" "}
              <span className="text-[#1F3576] font-bold">
                many opportunities
              </span>{" "}
              to <span className="text-[#FBD035] font-bold">network</span> with
              other student members and local/global industry professionals and
              acquire career-advancing skills through our work programs.
            </p>
            <div
              className="w-full hidden lg:flex items-center justify-center"
              data-aos="fade-left"
            >
              <Button
                type={"button"}
                textClass="text-[#1F3576] underline font-medium font-redHatDisplay"
                color="secondary"
                text="Click Here To Register!"
                shape="rounded-medium"
                fitContent
                onClick={openRegistrationForm}
              />
            </div>
            <div
              className="w-full flex lg:hidden items-center justify-center"
              data-aos="fade-left"
            >
              <Button
                type={"button"}
                color="secondary"
                text="Click Here To Register!"
                shape="rounded-small"
                fitContent
              />
            </div>
            <div
              className={`relative w-full h-[132px] sm:h-[184px] md:h-[144px] lg:h-[164px] xl:h-[240px]`}
              data-aos="fade-left"
            >
              <Image
                src={"/assets/jacket_photo.png"}
                alt={"SPE UI Jacket"}
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit relative overflow-hidden pt-14" style={{boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <div className="w-full h-full relative">
          <img src="/assets/member_benefits_bg.png" alt="background" className="object-cover w-full h-[20vw] sm:h-[16vw]"/>
          <div className="absolute w-fit h-full top-[5%] pr-[7.5%] right-0">
            <div
              className="w-fit h-full relative"
              data-aos="fade-down"
            >
              <h2 className="text-[24px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[76px] text-white font-poppins font-bold text-right relative z-[2]">
                SPE Member <span className="font-normal">Benefits</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden py-16 px-[10%] lg:px-[8.3333%] grid grid-cols-1 lg:grid-cols-4 gap-x-5 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-[#FFCA00]">
        <div className="text-black flex flex-col items-center justify-center gap-7 py-7 pl-7" data-aos="flip-right">
          <img src="/assets/opportunity.svg" alt="" className="w-[25%] sm:w-[20%] lg:w-fit h-fit"/>
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">Scholarship and fellowship opportunities</p>
        </div>
        <div className="text-black flex flex-col lg:flex-col-reverse items-center justify-center gap-7 py-7 pl-7" data-aos="flip-left">
          <img src="/assets/career.svg" alt="" className="w-[25%] sm:w-[20%] lg:w-fit h-fit"/>
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">Acquire career-advancing skills through our work programs</p>
        </div>
        <div className="text-black flex flex-col items-center justify-center gap-7 py-7 pl-7" data-aos="flip-right">
          <img src="/assets/community.svg" alt="" className="w-[25%] sm:w-[20%] lg:w-fit h-fit"/>
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]"> Access to the global community from SPE International to network with local / global industry professionals</p>
        </div>
        <div className="text-black flex flex-col lg:flex-col-reverse items-center justify-center gap-7 py-7 pl-7" data-aos="flip-left">
          <img src="/assets/resource.svg" alt="" className="w-[25%] sm:w-[20%] lg:w-fit h-fit"/>
          <p className="text-black font-bold font-poppins text-center text-[14px] md:text-[16px] lg:text-[20px]">Free / discounted resources</p>
        </div>
      </div>
    </div>
  );
}
