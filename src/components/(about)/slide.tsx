"use client";

import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import SlideItem from "./slide-item";

type SlidesProp = {
  className?: string;
  children?: ReactNode;
  slideMobile: number;
  slidePartial?: number;
  slideDesktop: number;
  amount: number;
  currentItem: (index: number) => void;
  partial?: boolean;
};

function Slides({ className, children, slideDesktop, slidePartial, slideMobile, amount, currentItem, partial }: SlidesProp) {
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
      left: isScreenBased ? `${partial && index != -1 ? index == 0 ? slideDesktop : index % 2 != 0 ? slidePartial!+slideDesktop * index : (slidePartial!+(slideDesktop/2))* index : slideDesktop * index}vw` : `${slideMobile * index}vw`,
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = matches ? amount-2 : amount-1;
      setIndex((oldIndex) => {
        if (oldIndex < idx) {
          currentItem(oldIndex + 1);
          return oldIndex + 1;
        } else {
          matches ? currentItem(-1) : currentItem (0);
          return matches ? -1 : 0;
        }
      });
    }, 7000);

    console.log(matches)
    if (matches) {
      currentItem(-1);
      setIndex(-1);
    } else {
      currentItem(0);
      setIndex(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [matches]);

  return (
    <div
      className={clsx(
        "relative flex items-center overflow-hidden",
        className
      )}
    >
      <div
        className="absolute flex items-center duration-1000 slides"
        style={styleSlide.container(matches)}
      >
        {children}
      </div>
    </div>
  );
}

export default Slides;
