import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-full overflow-hidden pt-[76px] lg:pt-[92px]">
        <div className="flex flex-col gap-4 items-center py-7">
          <div className="relative w-[28vw] h-[36vw] md:w-[20vw] md:h-[28vw]">
            <Image src={"/assets/coming_soon.png"} alt={"Coming Soon"} fill />
          </div>
          <h3 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[7.1875vw] text-center font-poppins font-bold bg-gradient-to-r from-[#1F3576] from-[55%] to-white text-transparent bg-clip-text w-[76.875vw] mx-auto">
            Coming <span className="font-light">Soon</span>
          </h3>
          <div className="bg-[#1F3576] text-[20px] md:text-[24px] lg:text-[2.1875vw] text-center lg:text-justify font-poppins px-[6%] lg:px-[3%] py-6 mx-[10%] lg:mx-[18.4375%] rounded-[44px]">
            SPE UI SC&apos;s biggest annual event consists of a job fair, grand
            seminar, company visit, field trip, lab visit, SC gathering and five
            competitions.
          </div>
        </div>
      </div>
    </>
  );
}
