import clsx from "clsx";

type SlideItemProps = {
  className?: string;
  type: "resilient" | "escalate" | "comprehensive";
  active: boolean;
};

function SlideItem({ className, type, active }: SlideItemProps) {
  return (
    <div className={clsx(className, "w-screen lg:w-[33vw] flex justify-center")}>
      <div
        className={clsx(
          "relative w-80 h-fit bg-transparent flex justify-center items-center duration-200"
        )}
      >
        {/* <div className={clsx("absolute w-80 h-80 bg-white/90 rounded-full duration-1000", active && "z-[-1]", !active && "z-[1]")}>

                </div> */}
        <div className={clsx("duration-1000",!active && "opacity-100 lg:opacity-20")}>
          {type === "resilient"
            ? <img src="/assets/core_resilient.png" alt="" />
            : type === "escalate"
            ? <img src="/assets/core_escalate.png" alt="" />
            : <img src="/assets/core_comprehensive.png" alt="" />
          }
        </div>
      </div>
    </div>
  );
}

export default SlideItem;
