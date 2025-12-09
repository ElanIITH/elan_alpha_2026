"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavbarProps = {
  variant?: "red" | "grey";
};

export default function Navbar({ variant = "red" }: NavbarProps) {
  const pathname = usePathname();

  // dynamic separator image based on variant
  const smallSpark = `/images/left_spark_small_${variant}.svg`;
  const bigSpark = `/images/left_spark_big_${variant}.svg`;

  return (
    <div className="fixed z-100 top-0 left-0 right-0 bg-transparent w-screen h-auto flex justify-center items-center gap-8 text-[1.5vw] text-white">
      <Link
        href="/workshop"
        className={`hover:text-[#AE0021] transition-colors ${
          pathname === "/workshop" ? "text-[#AE0021]" : ""
        }`}
      >
        WORKSHOP
      </Link>

      <div className="flex flex-col">
        <div className="w-[2vw] h-[0.3vw]"></div>
        <div className="w-[2vw] h-[2vw] relative">
          <Image
            src={smallSpark}
            alt="separator"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <Link
        href="/competitions"
        className={`hover:text-[#AE0021] transition-colors ${
          pathname === "/competitions" ? "text-[#AE0021]" : ""
        }`}
      >
        COMPETITIONS
      </Link>

      <div className="flex flex-col">
        <div className="w-[3.5vw] h-[1.2vw]"></div>
        <div className="w-[3.5vw] h-[3.5vw] relative">
          <Image
            src={bigSpark}
            alt="separator"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* logo */}
      <Link href="/">
        <div className="w-[6vw] h-[6vw] relative">
          <Image
            src="/images/elan_logo_white.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      <div className="flex flex-col">
        <div className="w-[3.5vw] h-[1.2vw]"></div>
        <div className="w-[3.5vw] h-[3.5vw] relative">
          <Image
            src={bigSpark}
            alt="separator"
            fill
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <Link
        href="/accomodation"
        className={`hover:text-[#AE0021] transition-colors ${
          pathname === "/accomodation" ? "text-[#AE0021]" : ""
        }`}
      >
        ACCOMODATION
      </Link>

      <div className="flex flex-col">
        <div className="w-[2vw] h-[0.3vw]"></div>
        <div className="w-[2vw] h-[2vw] relative">
          <Image
            src={smallSpark}
            alt="separator"
            fill
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <Link
        href="#contact"
        className={`hover:text-[#AE0021] transition-colors ${
          pathname === "/#contact" ? "text-[#AE0021]" : ""
        }`}
      >
        CONTACT US
      </Link>

      <div className="w-[2vw] h-[2vw] absolute right-[5vw]">
        <button className="cursor-pointer">
          <Image
            src="/images/menu_white.svg"
            alt="menu"
            fill
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
}
