"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleCopyToClipboard = (
    text: string,
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setPopupPosition({ x: e.clientX, y: e.clientY });
    setTimeout(() => setCopiedText(null), 2000);
  };

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for scroll animations
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id");
            if (id) {
              setVisibleElements((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Observe all elements with data-animate-id
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate-id]");
      elements.forEach((el) => scrollObserver.observe(el));
    }, 100);

    const targetDate = new Date("2026-01-09T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
      scrollObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = [
      document.querySelector(".background-layers-1"),
      document.querySelector(".background-layers-2"),
      document.querySelector(".background-layers-3"),
    ];

    const observers = sections.map((section, index) => {
      if (!section) return null;

      const variant = index === 1 ? "grey" : "red"; // 0: red, 1: grey, 2: red

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.dispatchEvent(
              new CustomEvent("navbarVariantChange", { detail: variant })
            );
          }
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const contactData = [
    {
      name: "SAI CHARAN AJARAPU",
      position: "SPONSORSHIP HEAD",
      email: "ELAN.NVISION.SPONSORSHIP@SA.IITH.AC.IN",
      phone: "+91 88320 28101",
    },
    {
      name: "TANMAY VISHWASRAO",
      position: "OVERALL CO-ORDINATOR",
      email: "ELAN.NVISION.OC@SA.IITH.AC.IN",
      phone: "+91 99236 26782",
    },
    {
      name: "SAKET KASHYAP",
      position: "PR & OUTREACH HEAD",
      email: "ELAN.NVISION.OUTREACH@SA.IITH.AC.IN",
      phone: "+91 92341 68717",
    },
    {
      name: "HARSHA VARDHAN PULAVARTHI",
      position: "SPONSORSHIP HEAD",
      email: "ELAN.NVISION.SPONSORSHIP@SA.IITH.AC.IN",
      phone: "+91 94911 87225",
    },
    {
      name: "SYED MISHAAL",
      position: "OVERALL CO-ORDINATOR",
      email: "ELAN.NVISION.OC@SA.IITH.AC.IN",
      phone: "+91 74185 95805",
    },
    {
      name: "NAISHADHA VORUGANTI",
      position: "PR & OUTREACH HEAD",
      email: "ELAN.NVISION.OUTREACH@SA.IITH.AC.IN",
      phone: "+91 93900 27710",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-y-scroll h-screen">
      {/* front page */}
      <div className="background-layers-1 h-[80vh] md:min-h-screen">
        <div
          className={`w-full h-full relative transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`w-[80vw] h-[16vw] top-[8vh] left-[3vw] md:w-[55vw] md:h-[10vw] absolute md:top-[76vh] md:left-[2vw] md:translate-x-0 transition-all duration-1000 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Image
              src="/images/mobile_title.png"
              alt="elan title"
              fill
              className="object-contain md:hidden"
            />
            <Image
              src="/images/mobile_title.png"
              alt="elan title"
              fill
              className="object-contain hidden md:block"
            />
          </div>
          <div
            className={`relative w-[80vw] top-[17vh] left-[3vw] px-[1vw] text-justify md:hidden text-white transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="leading-tight text-[3.7vw] uppercase tracking-wide">
              IIT Hyderabad's annual techno-cultural fest celebrating
              innovation, performances, and competitions.
            </div>
          </div>
          <div
            className={`pl-[1vw] pr-[5vw] w-[90vw] top-[21.3vh] left-[3vw] items-start md:pl-[2vw] md:w-[42vw] h-auto absolute md:top-[51vh] md:left-[2vw] text-white flex flex-col md:items-end transition-all duration-1000 delay-500 ${
              mounted ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <a
              href="https://forms.gle/qecyZsgf6CuF5ZTR8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-[2vw] text-[9vw] md:text-center md:text-[3.5vw] hover:text-[#AE0021] transition-colors">
                REGISTER NOW
                <svg
                  className="w-[6vw] h-[6vw] md:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </a>
            <div className="leading-tight text-[5vw] text-left md:text-[1.4vw] uppercase md:text-justify tracking-normal md:leading-[1.1]">
              <span className="hidden md:inline">
                Elan&nVision, IIT Hyderabad's annual techno-cultural fest,
                celebrates the stories, music, memories, and innovation that
                bring us together. Over three vibrant days, it showcases the
                best of student life through thrilling competitions, dynamic
                performances, and high-energy concerts.
              </span>
            </div>
          </div>

          <div
            className={`mr-[2.5vw] w-auto h-auto absolute top-[68vh] right-[-1vw] md:top-[64vh] md:right-0 text-white flex justify-end transition-all duration-1000 delay-700 ${
              mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="flex flex-col justify-end">
              <div className="leading-none text-[17vw] md:text-[5.5vw] text-center">
                JAN 9-11
              </div>
              <div className="flex justify-center items-center md:gap-[0.3vw] uppercase text-[4.5vw] md:text-[1.4vw] tracking-wide">
                <div className="">Countdown: </div>
                <div className="w-[28vw] md:w-[9vw] text-right">
                  {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
                  {countdown.seconds}s
                </div>
              </div>
            </div>
            <div
              className="w-[4vh] h-[33vw] md:w-[4vw] md:h-[15vw] relative mb-[1vh] md:mb-[1vh] text-[2.8vh] md:text-[2.7vw]"
              style={{
                writingMode: "vertical-rl",
                fontFamily: "'JapaneseFont', sans-serif",
              }}
            >
              最後の浪人.
            </div>
          </div>
        </div>
      </div>

      {/* theme reveal page */}
      <div className="background-layers-2 md:min-h-screen text-white">
        <div
          className={`relative w-full min-h-screen flex flex-col justify-start items-center pt-[13vh] md:pt-0 md:justify-center md:items-center gap-[2vh] md:gap-[3vh] transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div
            data-animate-id="theme-image"
            className={`w-[83vw] h-[45vw] md:w-[45vw] md:h-[25vw] relative transition-all duration-700 ${
              visibleElements.has("theme-image")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <Image
              src="/images/mobile_ronin.png"
              alt="separator"
              fill
              className="object-contain md:hidden"
            />
            <Image
              src="/images/mobile_ronin.png"
              alt="separator"
              fill
              className="object-contain hidden md:block"
            />
          </div>
          <div
            data-animate-id="theme-text"
            className={`leading-tight text-[5vw] w-[85vw] px-[5vw] md:text-[1.4vw] md:w-[40vw] md:px-0 h-auto uppercase text-justify tracking-normal md:leading-[1.1] transition-all duration-700 delay-200 ${
              visibleElements.has("theme-text")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Beneath the blood-red moon rises a lone warrior, the final spark of
            a legendary era. The drums of fate thunder through forgotten
            temples, awakening the spirit of honor, courage, and unbreakable
            will. His blade is more than steel. it's a promise carved in battle.
            Every step pushes back the darkness, every strike writes history. A
            samurai's legacy ignites once more, where loyalty becomes fire,
            destiny becomes war, and legends return to reclaim the night.
          </div>
        </div>
      </div>

      {/* contact us page */}
      <div
        id="contact"
        className="background-layers-3 md:min-h-screen text-white"
      >
        <div
          className={`relative w-full min-h-screen flex flex-col items-center pt-[8vh] md:pt-0 md:justify-center md:items-center transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mt-[27vw] md:mt-[22vh] flex flex-col gap-[2vh] md:gap-[1vh] px-[5vw] md:px-0">
            <div
              data-animate-id="contact-title"
              className={`uppercase text-[5vw] md:text-[2.5vw] flex justify-center items-center transition-all duration-700 ${
                visibleElements.has("contact-title")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              Contact Us
            </div>
            <div className="">
              <div
                data-animate-id="contact-reach"
                className={`flex justify-center items-center uppercase text-[4vw] md:text-[1.3vw] mt-[-1vh] md:mt-[-1vh] mb-[1vh] md:mb-[-1vh] md:text-[#6E0216] transition-all duration-700 delay-100 ${
                  visibleElements.has("contact-reach")
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                {/* Reach us */}
              </div>
              <div className="leading-tight grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-[2vh] md:gap-0 place-items-center">
                {contactData.map((contact, index) => (
                  <div
                    key={index}
                    data-animate-id={`contact-card-${index}`}
                    className={`w-[28vh] flex flex-col text-center md:text-left uppercase text-[3.1vw] md:text-[1.1vw] tracking-wide p-[1vh] md:p-[1vh] md:w-fit transition-all duration-700 ${
                      visibleElements.has(`contact-card-${index}`)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div>{contact.name}</div>
                    <div>{contact.position}</div>
                    <div>
                      <span
                        onClick={(e) => handleCopyToClipboard(contact.email, e)}
                        className="cursor-pointer hover:text-[#6E0216] transition-colors duration-200"
                      >
                        {contact.email}
                      </span>
                    </div>
                    <div>
                      <span
                        onClick={(e) => handleCopyToClipboard(contact.phone, e)}
                        className="cursor-pointer hover:text-[#6E0216] transition-colors duration-200"
                      >
                        {contact.phone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              data-animate-id="contact-business"
              className={`transition-all duration-700 delay-700 ${
                visibleElements.has("contact-business")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="flex justify-center items-center uppercase text-[4vw] md:text-[1.3vw] mb-[1vh] md:mb-[-2vh] md:text-[#6E0216]">
                For business related queries
              </div>
              <div className="flex justify-center items-center gap-[2vw] md:gap-[0.8vw]">
                <div className="flex flex-col">
                  <div className="w-[5vw] h-[1.5vw] md:w-[3.5vw] md:h-[0.9vw]"></div>
                  <div className="w-[5vw] h-[5vw] md:w-[3.5vw] md:h-[3.5vw] relative">
                    <Image
                      src="/images/left_spark_big_red.svg"
                      alt="separator"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-[3.7vw] md:text-[2.5vw] uppercase">
                  <span
                    onClick={(e) =>
                      handleCopyToClipboard("elan.nvision@sa.iith.ac.in", e)
                    }
                    className="cursor-pointer hover:text-[#6E0216] transition-colors duration-200"
                  >
                    elan.nvision@sa.iith.ac.in
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="w-[5vw] h-[1.5vw] md:w-[3.5vw] md:h-[0.9vw]"></div>
                  <div className="w-[5vw] h-[5vw] md:w-[3.5vw] md:h-[3.5vw] relative">
                    <Image
                      src="/images/left_spark_big_red.svg"
                      alt="separator"
                      fill
                      className="object-contain flip-horizontal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-animate-id="contact-logo"
            className={`w-[60vw] h-[14vw] md:w-[40vw] md:h-[9vw] transition-all duration-700 delay-800 ${
              visibleElements.has("contact-logo")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <Image
              src="/images/mobile_title.png"
              alt="elan title"
              fill
              className="object-contain md:hidden"
            />
            <Image
              src="/images/mobile_title.png"
              alt="elan title"
              fill
              className="object-contain hidden md:block"
            />
          </div>
          <div className="flex justify-center items-center gap-[5vw] w-[80vw] h-[8vw] md:gap-[2vw] md:w-[30vw] md:h-[3vw]">
            <a
              href="https://www.facebook.com/elannvision.iithyderabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "#6E0216" }}
            >
              <svg
                className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw]"
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
                className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw]"
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
                className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw]"
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
                className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw]"
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
                className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copied to Clipboard Popup */}
      {copiedText && (
        <div
          className="fixed z-9999 bg-[#6E0216] text-white px-4 py-2 rounded shadow-lg text-sm pointer-events-none"
          style={{
            left: `${popupPosition.x + 10}px`,
            top: `${popupPosition.y - 30}px`,
          }}
        >
          Copied to clipboard
        </div>
      )}
    </div>
  );
}
