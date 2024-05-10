const Info = () => {
  return (
    <>
      <div className="w-full relative overflow-hidden mb-4">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#1F3576] font-poppins font-bold text-center relative z-[2]">
          Who <span className="text-[#FBD233]">We</span> Are
        </h2>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-[#2F2F2F] font-poppins font-bold text-center absolute top-[2px] left-[2px] opacity-35 w-full">
          Who We Are
        </h2>
      </div>
      <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1F3576] font-poppins text-justify px-[3.333%]">
        SPE is the{" "}
        <span className="font-bold">
          largest individual-member organization
        </span>{" "}
        serving{" "}
        <span className="font-bold fon">engineers, managers, scientists,</span>{" "}
        and <span className="font-bold">other professionals worldwide</span> in
        the upstream segment of oil and gas industry. <br />
        <br />
        We are a student chapter of SPE International which functions is to
        provide Universitas Indonesia students{" "}
        <span className="font-bold">
          technical oil and gas knowledge
        </span> and <span className="font-bold">soft skills</span> that are
        needed to prepare future leaders in solving the impending energy
        challenges.
      </p>
    </>
  );
};

export default Info;
