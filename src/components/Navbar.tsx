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

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="bg-transparent fixed z-1000 top-0 left-0 right-0 w-screen h-auto flex justify-between items-center px-[3vw] md:justify-center md:px-0 md:py-0 md:gap-8 md:text-[1.5vw] text-white">
      <Link
        href="/Merchandise"
        className={`${navItemClass("/Merchandise")} hidden md:block`}
        style={navItemStyle("/Merchandise")}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/Merchandise")}
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

      {/* logo */}
      <Link href="/">
        <div className="w-[13vw] h-[13vw] md:w-[6vw] md:h-[6vw] relative">
          <Image
            src="/images/elan_logo_white.svg"
            alt="logo"
            fill
            className="object-contain"
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
        href="/accomodation"
        className={`${navItemClass("/accomodation")} hidden md:block`}
        style={navItemStyle("/accomodation")}
        onMouseEnter={handleHover}
        onMouseLeave={(e) => handleHoverOut(e, "/accomodation")}
      >
        ACCOMMODATION
      </Link>

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

      <div className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] relative md:absolute md:right-[5vw]">
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
