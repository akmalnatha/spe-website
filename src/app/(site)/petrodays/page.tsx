import Competition from "./components/competition";

export default function Petrodays() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden py-32">
      <div>
        <img
          src="/petrodays/Petrodays.svg"
          className="flex justify-center items-center mx-auto"
        />
        <p className="w-3/4 text-center text-[#1F3576] sm:text-sm md:text-2xl py-10 mx-auto">
          Petrodays, an internal competition program created to prepare officers
          and members of the SPE UI SC for external competitions in the oil and
          gas industry. The program aims to provide a platform for members to
          enhance their competitive spirit and prepare them for external
          competitions at the university, national, and international levels.
        </p>
      </div>
      <div className="flex flex-col border-t-8 border-[#1F3576] py-11 mx-12 justify-center items-center gap-8">
        <h1 className="text-[#1F3576] text-2xl md:text-4xl lg:text-6xl font-bold font-poppins py-4">
          Our Grand Theme
        </h1>
      </div>
      <div className="flex flex-col py-11 mx-12 justify-center items-center gap-8">
        <h1 className="text-[#1F3576] text-2xl md:text-4xl lg:text-6xl font-bold font-poppins py-4">
          Our Competition
        </h1>
        <Competition />
      </div>
    </div>
  );
}
