"use client";

import { motion } from "framer-motion";
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
        <div className="relative md:w-[4vw] md:h-[4vw]">
          <Image
            src="/navbar/iith_logo.png"
            alt="IIT Hyderabad logo"
            fill
            sizes="4vw"
            className="object-contain"
          />
        </div>
      </a>

      <motion.div
        initial="rest"
        whileHover="hover"
        className="hidden md:block relative z-10"
      >
        <Link
          href="/merchandise"
          className={`${navItemClass("/merchandise")} relative`}
          style={navItemStyle("/merchandise")}
          onMouseEnter={handleHover}
          onMouseLeave={(e) => handleHoverOut(e, "/merchandise")}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "3.5vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[-2.3vw] left-[-3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "-3.8vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[0.1vw] left-[2.3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim_flip.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          MERCHANDISE
        </Link>
      </motion.div>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[2vw] md:h-[0.3vw]"></div>
        <div className="relative md:w-[2vw] md:h-[2vw]">
          <Image
            src={smallSpark}
            alt="separator"
            fill
            sizes="2vw"
            className="object-contain"
          />
        </div>
      </div>

      <motion.div
        initial="rest"
        whileHover="hover"
        className="hidden md:block relative z-10"
      >
        <Link
          href="/sponsors"
          className={`${navItemClass("/sponsors")} hidden md:block`}
          style={navItemStyle("/sponsors")}
          onMouseEnter={handleHover}
          onMouseLeave={(e) => handleHoverOut(e, "/sponsors")}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "3.3vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[-2vw] left-[-3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "-3.5vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[0.4vw] left-[2.3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim_flip.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          SPONSORS
        </Link>
      </motion.div>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[3.5vw] md:h-[1.2vw]"></div>
        <div className="relative md:w-[3.5vw] md:h-[3.5vw]">
          <Image
            src={bigSpark}
            alt="separator"
            fill
            sizes="3.5vw"
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
        <div className="relative w-[20vw] h-[20vw] md:w-[12vw] md:h-[7vw]">
          <Image
            src={
              isLogoHovered
                ? "/navbar/elan_logo_hover.png"
                : "/navbar/elan_logo.png"
            }
            alt="Elan logo"
            fill
            sizes="(max-width: 768px) 20vw, 12vw"
            className="object-contain transition-opacity duration-700"
          />
        </div>
      </Link>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[3.5vw] md:h-[1.2vw]"></div>
        <div className="relative md:w-[3.5vw] md:h-[3.5vw]">
          <Image
            src={bigSpark}
            alt="separator"
            fill
            sizes="3.5vw"
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <motion.div
        initial="rest"
        whileHover="hover"
        className="hidden md:block relative z-10"
      >
        <Link
          href="/accommodation"
          className={`${navItemClass("/accommodation")} hidden md:block`}
          style={navItemStyle("/accommodation")}
          onMouseEnter={handleHover}
          onMouseLeave={(e) => handleHoverOut(e, "/accommodation")}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "4.6vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[-2vw] left-[-3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "-3.8vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[0.4vw] left-[2.3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim_flip.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          ACCOMMODATION
        </Link>
      </motion.div>

      <div className="md:flex md:flex-col hidden">
        <div className="md:w-[2vw] md:h-[0.3vw]"></div>
        <div className="relative md:w-[2vw] md:h-[2vw]">
          <Image
            src={smallSpark}
            alt="separator"
            fill
            sizes="2vw"
            className="object-contain flip-horizontal"
          />
        </div>
      </div>

      <motion.div
        initial="rest"
        whileHover="hover"
        className="hidden md:block relative z-10"
      >
        <Link
          href="/contact"
          className={`${navItemClass("/contact")} hidden md:block`}
          style={navItemStyle("/contact")}
          onMouseEnter={handleHover}
          onMouseLeave={(e) => handleHoverOut(e, "/contact")}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "2.7vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[-2vw] left-[-3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "-3.5vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[0.4vw] left-[2.3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim_flip.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          CONTACT US
        </Link>
      </motion.div>

      {/* <div className="md:flex md:flex-col hidden">
        <div className="md:w-[2vw] md:h-[0.3vw]"></div>
        <div className="relative md:w-[2vw] md:h-[2vw]">
          <Image
            src={smallSpark}
            alt="separator"
            fill
            sizes="2vw"
            className="object-contain flip-horizontal"
          />
        </div>
      </div> */}

      {/* <motion.div
        initial="rest"
        whileHover="hover"
        className="hidden md:block relative z-10"
      >
        <Link
          href="/sponsors"
          className={`${navItemClass("/sponsors")} hidden md:block`}
          style={navItemStyle("/sponsors")}
          onMouseEnter={handleHover}
          onMouseLeave={(e) => handleHoverOut(e, "/sponsors")}
        >
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "3.3vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[-2vw] left-[-3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div
            variants={{
              rest: { opacity: 0, x: 0 },
              hover: { opacity: 1, x: "-3.5vw" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[7vw] h-[3vw] absolute bottom-[0.4vw] left-[2.3vw] z-100"
          >
            <Image
              src="/animation_assets/final_anim_flip.png"
              alt="separator"
              fill
              className="object-contain"
            />
          </motion.div>
         
        </Link>
      </motion.div> */}

      <div className="relative w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] md:absolute md:right-[4vw]">
        <button
          className="w-full h-full cursor-pointer relative"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src="/images/menu_white.svg"
            alt="Menu"
            fill
            sizes="(max-width: 768px) 5vw, 2vw"
            className="object-contain"
          />
        </button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
