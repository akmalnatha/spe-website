"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 *
 * @param root0
 * @param root0.value
 */
export default function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span className="font-plusJakartaSans font-bold text-[28px] md:text-[32px] lg:text-[36px] bg-gradient-to-b from-[#142B6F] from-10% via-[#96A2C3] via-60% via to-[#0F1F50] to-80% inline-block text-transparent bg-clip-text" ref={ref} />;
}
