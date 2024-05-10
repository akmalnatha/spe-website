import Image from "next/image"
import Button from "../button";

const ContentMember = () => {
  const openRegistrationForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScQDSg4YLx2kxm3KwVWukvRvyMgcGd_5HebH23gxfDXZEI21A/viewform",
      "_blank"
    );
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
  return (
    <div className="w-full h-auto relative overflow-hidden px-[4.44444%] pt-5">
      <div
        className="bg-[#1F3576] text-white p-3 text-[14px] md:text-[16px] lg:text-[20px] text-justify font-poppins indent-20"
        data-aos="fade-right"
      >
        SPE is the{" "}
        <span className="text-[16px] md:text-[18px] lg:text-[22px] font-bold">
          largest individual-member organization
        </span>{" "}
        serving engineers and professionals worldwide in the upstream segment of
        the{" "}
        <span className="text-[16px] md:text-[18px] lg:text-[22px] font-bold text-[#FBD035]">
          Oil & Gas Industry.
        </span>{" "}
        Provide students with technical Oil & Gas knowledge and soft skills that
        are needed to prepare future leaders in solving the impending energy
        challenges. SPE UI SC is linked to SPE International.
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
            By becoming an SPE International member, you will get provided with{" "}
            <span className="text-[#1F3576] font-bold">many opportunities</span>{" "}
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
              textClass="text-[#1F3576] underline font-medium font-redHatDisplay"
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
  );
};

export default ContentMember;
