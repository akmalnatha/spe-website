import Article from "./components/article";

export default function SpeEnergized() {
  return (
    <div className="flex flex-col w-full h-fit overflow-hidden pt-[76px] lg:pt-[92px]">
      <div className="flex flex-col">
        <div className="">
          <h1
            className="text-white w-screen h-full font-bold font-poppins text-center justify-center items-center text-9xl py-20 px-auto bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/assets/Mask group.svg')" }}
          >
            SPEnergized
          </h1>
        </div>
        <p className="w-5/6 text-center text-[#142B6F] text-xl font-light py-10 mx-auto ">
          SPEnergized is a student-run think tank powered by SPE Universitas
          Indonesia Student Chapter. To provide members of SPE UI SC with
          opportunities to engage in study, research, and evidence-based,
          collaboration-oriented, solution-minded projects that lead to value
          creation and impactful contributions to society. We aim to connect SPE
          UI officers with its members to collaborate together for the purpose
          of the this activity which is to produce research articles.
        </p>
      </div>

      <div>
        <Article />
      </div>
    </div>
  );
}
