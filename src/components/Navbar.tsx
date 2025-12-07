"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent w-screen h-auto flex justify-center items-center gap-8 text-[1.5vw] text-white font-light">
      <Link
        href="/workshop"
        className={`hover:text-[#AE0021] transition-colors ${
          pathname === "/workshop" ? "text-[#AE0021]" : ""
        }`}
      >
        WORKSHOP
      </Link>

      <div className="flex flex-col">
        <div className=" w-[2.5vw] h-[0.5vw]"></div>
        <div className="w-[2.5vw] h-[2.5vw] relative ">
          <Image
            src="/images/left_spark_small_red.svg"
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
        <div className=" w-[3.5vw] h-[1.2vw]"></div>
        <div className="w-[3.5vw] h-[3.5vw] relative ">
          <Image
            src="/images/left_spark_big_red.svg"
            alt="separator"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* logo */}
      <Link href={"/"} className="">
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
        <div className=" w-[3.5vw] h-[1.2vw]"></div>
        <div className="w-[3.5vw] h-[3.5vw] relative ">
          <Image
            src="/images/left_spark_big_red.svg"
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
        <div className=" w-[2.5vw] h-[0.5vw]"></div>
        <div className="w-[2.5vw] h-[2.5vw] relative ">
          <Image
            src="/images/left_spark_small_red.svg"
            alt="separator"
            fill
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <Link
        href="/contact"
        className={`hover:text-[#AE0021] transition-colors ${
          pathname === "/contact" ? "text-[#AE0021]" : ""
        }`}
      >
        CONTACT US
      </Link>
    </div>
  );
}
