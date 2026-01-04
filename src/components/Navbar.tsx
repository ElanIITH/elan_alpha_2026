"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "./Menu";

type NavbarProps = {
  variant?: "red" | "grey";
};

export default function Navbar({ variant = "red" }: NavbarProps) {
  const pathname = usePathname();
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<"red" | "grey">(variant);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleVariantChange = (e: CustomEvent<"red" | "grey">) => {
      setCurrentVariant(e.detail);
    };

    window.addEventListener(
      "navbarVariantChange",
      handleVariantChange as EventListener
    );
    return () =>
      window.removeEventListener(
        "navbarVariantChange",
        handleVariantChange as EventListener
      );
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, [pathname]);

  const smallSpark = `/images/left_spark_small_${currentVariant}.svg`;
  const bigSpark = `/images/left_spark_big_${currentVariant}.svg`;

  const activeColor = currentVariant === "red" ? "#AE0021" : "#404040";
  const hoverColor = activeColor;

  const navItemClass = (path: string) => {
    const isActive =
      (path === "/#contact" && isContactVisible) ||
      (pathname === path && path !== "/");
    return `transition-colors duration-200 ${isActive ? "" : ""}`;
  };

  const navItemStyle = (path: string) => {
    const isActive =
      (path === "/#contact" && isContactVisible) ||
      (pathname === path && path !== "/");
    return {
      color: isActive ? activeColor : "inherit",
    };
  };

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = hoverColor;
  };

  const handleHoverOut = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    const isActive =
      (path === "/#contact" && isContactVisible) ||
      (pathname === path && path !== "/");
    if (!isActive) {
      e.currentTarget.style.color = "inherit";
    }
  };

  return (
    <div className="bg-transparent fixed z-1000 top-0 left-0 right-0 w-screen h-auto flex justify-between items-center px-[3vw] md:justify-center md:px-0 md:py-0 md:gap-8 md:text-[1.5vw] text-white">
      {/* IITH Logo - Left (Desktop only) */}
      <a
        href="https://www.iith.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="IIT Hyderabad website (opens in a new tab)"
        className="hidden md:block md:absolute md:left-[2vw]"
      >
        <div className="md:w-[4vw] md:h-[4vw] relative">
          <Image
            src="/navbar/iith_logo.png"
            alt="IIT Hyderabad logo"
            fill
            className="object-contain"
          />
        </div>
      </a>

      <Link
        href="/merchandise"
        className={`${navItemClass("/merchandise")} hidden md:block`}
        style={navItemStyle("/merchandise")}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/merchandise")}
      >
        MERCHANDISE
      </Link>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[2vw] md:h-[0.3vw]"></div>
        <div className="md:w-[2vw] md:h-[2vw] relative">
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
        className={`${navItemClass("/competitions")} hidden md:block`}
        style={navItemStyle("/competitions")}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/competitions")}
      >
        COMPETITIONS
      </Link>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[3.5vw] md:h-[1.2vw]"></div>
        <div className="md:w-[3.5vw] md:h-[3.5vw] relative">
          <Image
            src={bigSpark}
            alt="separator"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Elan Logo - Center */}
      <Link
        href="/"
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        <div className="w-[20vw] h-[20vw] md:w-[12vw] md:h-[7vw] relative">
          <Image
            src={
              isLogoHovered
                ? "/navbar/elan_logo_hover.png"
                : "/navbar/elan_logo.png"
            }
            alt="Elan logo"
            fill
            className="object-contain transition-opacity duration-700 hidden md:block"
          />
          <Image
            src={"/navbar/elan_logo.png"}
            alt="Elan logo"
            fill
            className="object-contain transition-opacity duration-700 md:hidden"
          />
        </div>
      </Link>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[3.5vw] md:h-[1.2vw]"></div>
        <div className="md:w-[3.5vw] md:h-[3.5vw] relative">
          <Image
            src={bigSpark}
            alt="separator"
            fill
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <Link
        href="/accommodation"
        className={`${navItemClass("/accommodation")} hidden md:block`}
        style={navItemStyle("/accommodation")}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/accommodation")}
      >
        ACCOMMODATION
      </Link>
      {/* <a
        href="https://www.oppskills.com/events/elan-nvision-2026-the-last-ronin"
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:block`}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/accommodation")}
      >
        REGISTER
      </a> */}

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[2vw] md:h-[0.3vw]"></div>
        <div className="md:w-[2vw] md:h-[2vw] relative">
          <Image
            src={smallSpark}
            alt="separator"
            fill
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <Link
        href="/contact"
        className={`${navItemClass("/contact")} hidden md:block`}
        style={navItemStyle("/contact")}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/contact")}
      >
        CONTACT US
      </Link>

      <div className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] relative md:absolute md:right-[4vw]">
        <button
          className="cursor-pointer w-full h-full"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src="/images/menu_white.svg"
            alt="menu"
            fill
            className="object-contain"
          />
        </button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
