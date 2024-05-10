"use client";
import redirect from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "@/components/button";
import HeroMember from "@/components/(membership)/hero-member";
import ContentMember from "@/components/(membership)/content";
import Benefits from "@/components/(membership)/benefits";

export default function Membership() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <div className="bg-white">
      <HeroMember/>
      <ContentMember/>
      <Benefits/>
    </div>
  );
}
