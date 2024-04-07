"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("absolute bg-[#f6dB00]");
  const [isAccount, setAccount] = useState(false);
  const location = usePathname();
  const [active, setActive] = useState(0);

  const documentRef = useRef<Document | null>(
    typeof document !== "undefined" ? document : null
  );
  const onClickAccount = (event: Event) => {
    let cekAccount = true;
    const doc = document.getElementsByClassName("account-detail");
    for (let index = 0; index < doc.length; index++) {
      cekAccount = cekAccount && event.target != doc[index];
    }
    if (cekAccount) {
      setAccount(false);
    }
  };

  useEventListener("click", onClickAccount, documentRef);
  const onClickHamburger = (event: Event) => {
    let cekHamburger = true;
    const doc = document.getElementsByClassName("hamburger");
    for (let index = 0; index < doc.length; index++) {
      cekHamburger = cekHamburger && event.target != doc[index];
    }
    if (cekHamburger) {
      setNavOpen(false);
    }
  };
  useEventListener("click", onClickHamburger, documentRef);

  useEffect(() => {
    if (location == "/") {
      setActive(0);
    } else if (location == "/about-us") {
      setActive(1);
    } else if (location == "/gallery") {
      setActive(2);
    } else if (location == "/petrodays") {
      setActive(3);
    } else if (location == "/membership") {
      setActive(4);
    } else {
      setActive(-1);
    }
  }, [location]);

  const stickNavbar = () => {
    const header = document.querySelector("nav");
    if (header != null) {
      window.scrollY > header.offsetTop
        ? setStickyClass(
            "fixed bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37] bg-opacity-60 backdrop-blur-sm"
          )
        : setStickyClass(
            "absolute bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37]"
          );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <nav
      className={`${
        navOpen
          ? "fixed bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37]"
          : stickyClass
      } z-50 flex h-[80px] lg:h-[120px] w-full items-center justify-between text-dark-maintext px-4 lg:px-14 font-poppins `}
    >
      <button
        type="button"
        className={`hamburger absolute z-10 h-[40px] w-[40px] cursor-pointer lg:hidden`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span
          className={`${
            navOpen
              ? "top-[1.2em] h-[2px] rotate-[135deg] transition"
              : "top-[0.7em] h-[3px]"
          } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[20px] rounded-xl bg-black duration-300 ease-in-out`}
        ></span>
        <span
          id="span2"
          className={`${
            navOpen ? "h-[2px] scale-0 transition" : "top-[1.2em] h-[3px]"
          } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[20px] rounded-xl bg-black duration-300 ease-in-out`}
        ></span>
        <span
          id="span3"
          className={`${
            navOpen
              ? "top-[1.2em] h-[2px] rotate-45 transition"
              : "top-[1.7em] h-[3px]"
          } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[20px] rounded-xl bg-black duration-300 ease-in-out`}
        ></span>
      </button>

      <Link href="/" className="mx-auto lg:mx-0">
        <img className={"w-16"} src={"/assets/SPE_UI_SC.png"} alt="SPE UI SC" />
      </Link>

      <div
        className={`${
          navOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } absolute left-0 top-0 h-screen w-[70%] sm:w-[50%] md:w-[40%] shadow-lg duration-300 ease-in-out lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent pt-20 lg:pt-0 lg:shadow-none bg-[#FCCF37]`}
      >
        <div className="flex flex-col gap-4 px-7 lg:mt-0 lg:flex-row lg:items-center justify-end lg:gap-12 xl:gap-[72px] lg:px-0 relative">
          <Link
            href="/"
            className={`${
              active == 0
                ? "font-bold bg-blue-900 rounded-md px-4 py-1"
                : "font-medium"
            } text-[16px] lg:text-[20px] hover:font-bold truncate text-white`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${
              active == 1
                ? "font-bold bg-blue-900 rounded-md px-4 py-1"
                : "font-medium"
            } text-[16px] lg:text-[20px] hover:font-bold truncate text-white`}
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className={`${
              active == 2
                ? "font-bold bg-blue-900 rounded-md px-4 py-1"
                : "font-medium"
            } text-[16px] lg:text-[20px] hover:font-bold truncate text-white`}
          >
            Gallery
          </Link>
          <Link
            href="/petrodays"
            className={`${
              active == 3
                ? "font-bold bg-blue-900 rounded-md px-4 py-1"
                : "font-medium"
            } text-[16px] lg:text-[20px] hover:font-bold truncate text-white`}
          >
            Petrodays Competition
          </Link>
          <Link
            href="/membership"
            className={`${
              active == 4
                ? "font-bold text-white bg-blue-900 rounded-md px-4 py-1"
                : "font-medium"
            } text-[16px] lg:text-[20px] border border-black text-black rounded-3xl px-4 py-1 hover:font-bold`}
          >
            Membership
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
