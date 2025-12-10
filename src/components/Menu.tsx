"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Menu({ isOpen, onClose }: MenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "EVENTS", href: "/events" },
    { label: "COMPETITIONS", href: "/competitions" },
    { label: "WORKSHOPS", href: "/workshop" },
    { label: "ACCOMMODATION", href: "/accomodation" },
    { label: "IITH MAP", href: "/map" },
    { label: "MERCHANDISE", href: "/Merchandise" },
    { label: "PARTNERS", href: "/partners" },
    { label: "TEAM", href: "/team" },
    { label: "CONTACT US", href: "/#contact" },
  ];

  const externalLinks = [
    { label: "NVISIONX", href: "https://nvisionx.elan.org.in" },
    { label: "QUEST OLYMPIAD", href: "https://quest.elan.org.in" },
  ];

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-998 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-[35vw] z-999 transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/menu_bg.jpg"
            alt="menu background"
            fill
            className="object-cover"
          />

          {/* Menu Content */}
          <div className="relative z-10 h-full flex flex-col text-white pt-[8vh]">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-[4vh] left-[2vw] text-white hover:text-[#6E0216] transition-colors text-[2vw] cursor-pointer"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Menu Items */}
            <div className="noxa-gothic flex-1 flex flex-col justify-center px-[4vw] gap-[1.5vh]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="text-[1.6vw] uppercase tracking-wide hover:text-[#6E0216] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}

              <div className="h-px bg-white/30 my-[1.5vh]" />

              {/* External Links with Logos */}
              <div className="flex justify-center items-center gap-[2vw]">
                <a
                  href="https://nvisionx.elan.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[8vw] h-[3vw] hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/images/nvisionx_logo.svg"
                    alt="nVisionX"
                    fill
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://quest.elan.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[8vw] h-[3vw] hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/images/quest_logo.svg"
                    alt="Quest Olympiad"
                    fill
                    className="object-contain"
                  />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-[1.5vw] mt-[2vh]">
                <a
                  href="https://www.facebook.com/elannvision.iithyderabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#6E0216" }}
                >
                  <svg
                    style={{ width: "1.5vw", height: "1.5vw" }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/elan_nvision.iith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#6E0216" }}
                >
                  <svg
                    style={{ width: "1.5vw", height: "1.5vw" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@Elan_nVisionIITHyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#6E0216" }}
                >
                  <svg
                    style={{ width: "1.5vw", height: "1.5vw" }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/elan_nvision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#6E0216" }}
                >
                  <svg
                    style={{ width: "1.5vw", height: "1.5vw" }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.694l-5.248-6.856-6.009 6.856h-3.31l7.73-8.835L.424 2.25h6.854l4.822 6.359 5.534-6.359zM17.002 20.331h1.834L6.822 4.169H4.881l12.121 16.162z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/elan-nvision-iith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "#6E0216" }}
                >
                  <svg
                    style={{ width: "1.5vw", height: "1.5vw" }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
