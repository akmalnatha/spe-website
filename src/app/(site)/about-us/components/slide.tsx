"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import SlideItem from "./slide-item";

type SlidesProp = {
  className?: string;
};

function Slides({ className }: SlidesProp) {
  const [index, setIndex] = useState(-1);
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
        setMatches(window.matchMedia("(min-width: 1024px)").matches)
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
    
        mediaQuery.addEventListener("change", (e) => setMatches(e.matches));
    
        return () => {
          mediaQuery.removeEventListener("change", (e) => setMatches(e.matches));
        };
    }
  }, []);

  const styleSlide = {
    container: (isScreenBased: any) => ({
      left: isScreenBased ? `${-33 * index}vw` : `${-100 * index}vw`,
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = matches ? 1 : 2;
      setIndex((oldIndex) => {
        if (oldIndex < idx) {
          return oldIndex + 1;
        } else {
          return matches ? -1 : 0;
        }
      });
    }, 3000);

    if (matches) {
      setIndex(-1);
    } else {
      setIndex(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [matches]);

  return (
    <div
      className={clsx(
        "relative w-full h-64 flex items-center overflow-hidden",
        className
      )}
    >
      <div
        className="absolute flex items-center duration-1000 slides"
        style={styleSlide.container(matches)}
      >
        <SlideItem type="resilient" active={index === -1} className="drop-shadow"/>
        <SlideItem type="escalate" active={index === 0} />
        <SlideItem type="comprehensive" active={index === 1} />
      </div>
    </div>
  );
}

export default Slides;
