"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [publicationOpen, setPublicationOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState(
    "absolute bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37]"
  );
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
    } else if (location.includes("/gallery")) {
      setActive(2);
    } else if (location == "/petrodays") {
      setActive(3);
    } else if (location.includes("/publication")) {
      setActive(4);
    } else if (location == "/publication/petromax") {
      setActive(4.1);
    } else if (location == "/publication/spe-energized") {
      setActive(4.2);
    } else if (location == "/membership") {
      setActive(5);
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
      } z-50 flex h-[76px] lg:h-[92px] w-full items-center justify-between text-dark-maintext px-4 lg:px-14 font-poppins `}
    >
      <button
        type="button"
        className={`hamburger absolute z-[49] h-[28px] w-[36px] cursor-pointer lg:hidden`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span
          className={`${
            navOpen
              ? "top-[0.8em] h-[2px] rotate-[135deg] transition"
              : "top-[0.3em] h-[3px]"
          } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[20px] rounded-xl bg-[#1F3576] duration-300 ease-in-out`}
        ></span>
        <span
          id="span2"
          className={`${
            navOpen ? "h-[2px] scale-0 transition" : "top-[0.8em] h-[3px]"
          } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[20px] rounded-xl bg-[#1F3576] duration-300 ease-in-out`}
        ></span>
        <span
          id="span3"
          className={`${
            navOpen
              ? "top-[0.8em] h-[2px] rotate-45 transition"
              : "top-[1.3em] h-[3px]"
          } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[20px] rounded-xl bg-[#1F3576] duration-300 ease-in-out`}
        ></span>
      </button>

      <Link href="/" className="mx-auto lg:mx-0">
        <img
          className={"w-14 lg:w-16"}
          src={"/assets/SPE_UI_SC.png"}
          alt="SPE UI SC"
          loading="lazy"
        />
      </Link>

      <div
        className={`${
          navOpen
            ? "top-[76px] lg:top-0 max-h-[360px] lg:max-h-full pb-5 lg:pb-0"
            : "lg:block top-[76px] max-h-0 lg:max-h-full lg:top-0"
        } absolute left-0 h-fit w-full shadow-lg duration-700 ease-in-out lg:static lg:block lg:h-auto lg:w-auto lg:shadow-none bg-[#FCCF37] lg:bg-transparent z-[48] overflow-hidden lg:overflow-visible`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-end gap-4 px-7 lg:gap-6 xl:gap-11 lg:px-0 relative">
          <Link
            href="/"
            className={`${
              active == 0
                ? "font-extrabold text-[#1F3576]"
                : "font-medium text-black"
            } text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${
              active == 1
                ? "font-extrabold text-[#1F3576]"
                : "font-medium text-black"
            } text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate`}
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className={`${
              active == 2
                ? "font-extrabold text-[#1F3576]"
                : "font-medium text-black"
            } text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate`}
          >
            Gallery
          </Link>
          <Link
            href="/petrodays"
            className={`${
              active == 3
                ? "font-extrabold text-[#1F3576]"
                : "font-medium text-black"
            } text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate`}
          >
            Petrodays Competition
          </Link>
          <button
            className={`${
              active == 4
                ? "font-extrabold text-[#1F3576]"
                : "font-medium text-black"
            } hamburger relative grow`}
            onClick={() => setPublicationOpen(!publicationOpen)}
          >
            <section className="flex items-center gap-2 text-[16px] md:text-[20px] lg:text-[24px] hover:font-extrabold hamburger">
              <p className="text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate hamburger">
                Publication
              </p>
              <span className="hamburger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                  fill="currentcolor"
                  className={
                    (publicationOpen ? "origin-center rotate-180" : "") +
                    " h-3 lg:h-5 w-4 lg:w-6 hamburger"
                  }
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </span>
            </section>
            <section
              className={`${
                publicationOpen
                  ? "flex flex-col items-center gap-4 w-full lg:w-[184px]"
                  : "hidden"
              } lg:absolute lg:top-[61px] lg:-left-5 lg:bg-[#FCCF37] lg:rounded-b-md lg:py-2 lg:shadow-[#1F3576] lg:shadow-md`}
            >
              <Link
                href="/publication/petromax"
                className={`${
                  active == 4.1
                    ? "font-extrabold text-[#1F3576]"
                    : "font-medium text-black"
                } text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate`}
              >
                Petromax
              </Link>
              <Link
                href="/publication/spe-energized"
                className={`${
                  active == 4.2
                    ? "font-extrabold text-[#1F3576]"
                    : "font-medium text-black"
                } text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold truncate`}
              >
                SPE Energized
              </Link>
            </section>
          </button>
          <Link
            href="/membership"
            className={`${
              active == 5 ? "font-extrabold" : "font-medium text-black"
            } bg-[#1F3576] w-fit lg:w-auto py-1 px-4 rounded-full text-[14px] md:text-[16px] lg:text-[20px] hover:font-extrabold text-white truncate`}
          >
            Membership
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
