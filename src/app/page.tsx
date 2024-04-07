import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-auto lg:min-h-[874px] bg-white relative overflow-hidden">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 pt-64 pl-16">
          <h1 className="text-6xl text-[#1F3576] font-bold text-poppins">
            Society of Petroleum Engineers
          </h1>
          <h2 className="text-4xl text-[#1F3576] mt-2 font-semibold">
            Universitas Indonesia Student Chapter
          </h2>
          <p className="text-xl text-[#1F3576] mt-4">
            SPE is on international non-profit orgarization that provides
            unparalalled insights, shared expertise, and life-long learning to
            fuel the success af our members and the future of the oil and gas
            industry,
          </p>
          <div className="flex flex-row mt-8 gap-4">
            <Link
              href="/membership"
              className="bg-[#f6dB00] rounded-2xl px-4 py-2"
            >
              <p className="text-xl text-white">Join Us</p>
            </Link>
            <Link
              href="/about-us"
              className="border border-[#f6dB00] rounded-2xl px-4 py-2"
            >
              <p className="text-xl text-[#1F3576]">Know More</p>
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-end w-1/2">
          <img src="./assets/home1.png" className="h-screen" />
        </div>
      </div>
    </main>
  );
}
