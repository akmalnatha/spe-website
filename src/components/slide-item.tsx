import clsx from "clsx";
import { ReactNode } from "react";

type SlideItemProps = {
  parentClassName?: string;
  innerClassName?: string;
  type?: "resilient" | "escalate" | "comprehensive";
  children?: ReactNode;
  active: boolean;
};

function SlideItem({ parentClassName, innerClassName, type, children, active }: SlideItemProps) {
  return (
    <div className={clsx(parentClassName, "flex justify-center")}>
      <div
        className={clsx(innerClassName,
          "relative bg-transparent flex justify-center items-center duration-200"
        )}
      >
        <div className={clsx("duration-1000",!active && "opacity-100 lg:opacity-20")}>
          {type === "resilient"
            ? <img src="/about/core_resilient.png" alt="" loading="lazy"/>
            : type === "escalate"
            ? <img src="/about/core_escalate.png" alt="" loading="lazy"/>
            : type === "comprehensive" 
            ? <img src="/about/core_comprehensive.png" alt="" loading="lazy"/>
            : children
          }
        </div>
      </div>
    </div>
  );
}

export default SlideItem;
