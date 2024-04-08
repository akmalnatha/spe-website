import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  children: ReactNode[];
}

export default function MarqueeComponent({ children }: MarqueeProps) {
  return (
    <>
      <div className="bg-orange-700 h-[60px] flex w-full">
        <Marquee autoFill pauseOnHover className="gap-3">
          {children.map((item: ReactNode, idx: number) => {
            return(
              <div key={idx}>
                {item}
              </div>
            )
          })}
        </Marquee>
      </div>
    </>
  );
}
