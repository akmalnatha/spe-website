import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent({ children }: {children: ReactNode[]}) {
  return (
    <>
      <div className="bg-orange-700 h-[60px] flex w-full">
        <Marquee autoFill pauseOnHover className="gap-3">
          {children}
        </Marquee>
      </div>
    </>
  );
}
