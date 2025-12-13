"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Accommodation() {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
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
    const elements = document.querySelectorAll("[data-animate-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    const event = new CustomEvent("navbarVariantChange", { detail: "grey" });
    window.dispatchEvent(event);

    // Reset to red when leaving the page
    return () => {
      const resetEvent = new CustomEvent("navbarVariantChange", {
        detail: "red",
      });
      window.dispatchEvent(resetEvent);
    };
  }, []);

  const FAQs = [
    {
      question: "How will I know if my accommodation is confirmed?",
      answer:
        "Our team will reach out to you to confirm your registration within a couple days of your submission.",
    },
    {
      question: "Is there any refund policy?",
      answer:
        "No. Once the payment is done and your registration has been confirmed, there will be strictly no refunds.",
    },
    {
      question: "Will rooms be provided on a single basis or a shared basis?",
      answer:
        "Owing to the large footfall of the fest, the rooms will be provided on a shared basis (2 people per room).",
    },
    {
      question: "Will there be on-spot registrations for accommodation?",
      answer:
        "On-spot registrations are strictly subject to availability of rooms. So we strongly recommend registering ahead of time to avoid any inconvenience.",
    },
    {
      question: "Are vehicles allowed inside the campus?",
      answer:
        "Vehicles from outside are strictly prohibited inside campus premises. Buses run to-and-fro from the main gate to all the major student areas, so you need not worry about transport needs inside the campus itself.",
    },
    {
      question: "Does the accommodation fee include the food facility as well?",
      answer:
        "You shall be allowed free coupons to the student dining halls for the duration of your stay at the campus.",
    },
    {
      question: "Will I be allowed to leave the campus during the night?",
      answer:
        "No, you are not permitted to exit the campus. In case of an emergency, a permit from one of the team members is required.",
    },
    {
      question: "What are the inclusions in the accommodation charge?",
      answer:
        "1. A mattress, pillow and bed sheet as part of your room.<br>2. Food Coupons for all the meals in the mess for the duration of stay.<br>3. Entry for all the informal games specially arranged for people who opted for accommodation.",
    },
  ];

  return (
    <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Front Page */}
      <div className="background-layers-6 min-h-screen snap-start snap-always">
        {/* Desktop View */}
        <div
          className={`hidden lg:flex h-screen w-full items-start justify-center pt-[14vh] transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            id="accommodation-top-left"
            className="w-[55vw] tracking-wide flex flex-col pl-[0.75vh] justify-evenly text-white uppercase gap-[0.75vh]"
          >
            <div
              id="accomodation-top-left-para1"
              data-animate-id="acc-para1"
              className={`flex flex-col transition-all duration-700 ${
                visibleElements.has("acc-para1")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[4vw] tracking-[0.06em] noxa-gothic">
                ACCOMMODATION
              </p>
              <p className="text-[1.1vw]/5.5">
                We are delighted to announce that the fest is scheduled to take
                place from January 9th to January 11th. Designed as a
                comprehensive three-day celebration, the event promises a
                vibrant array of activities. To ensure an optimal and seamless
                experience, we highly recommend securing accommodation directly
                within the IIT Hyderabad campus. By residing on-site, you will
                have the unique opportunity to fully immerse yourself in the
                festivities and enjoy unparalleled convenience throughout the
                duration of the event.
              </p>
            </div>
            <div
              id="accomodation-top-left-para2"
              data-animate-id="acc-para2"
              className={`flex flex-col transition-all duration-700 delay-100 ${
                visibleElements.has("acc-para2")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[2.25vw] tracking-[0.05em]">CHARGES</p>
              <p className="text-[1.1vw]/5.5">
                The workshops will take place over the weekend, so we are
                offering accommodation for one night at Rs. 999.00 (Check-in at
                5pm Saturday, check-out at 9:30am Sunday).
              </p>
            </div>
            <div
              id="accomodation-top-left-para3"
              data-animate-id="acc-para3"
              className={`flex flex-col transition-all duration-700 delay-200 ${
                visibleElements.has("acc-para3")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[2.25vw] tracking-[0.05em]">Identification</p>
              <p className="text-[1.1vw]/5.5">
                You will be required to produce a valid government ID at the
                campus gate, failure to do so will result in denial of entry to
                the campus. (So please make sure to carry a government ID with
                you.)
              </p>
            </div>
            <div
              id="accomodation-top-left-para4"
              data-animate-id="acc-para4"
              className={`flex flex-col transition-all duration-700 delay-300 ${
                visibleElements.has("acc-para4")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[2.25vw] tracking-[0.05em]">Getting to IITH</p>
              <p className="text-[1.1vw]/5.5">
                The main gate lies on the road from Patancheru to Kandi. There’s
                a bunch of large signs and boards, so you can’t miss it. Refer
                to Google maps for the exact address. One can reach Patancheru
                by either bus or train. From Patancheru, one can reach the IIT
                main gate by either bus or auto.
              </p>
            </div>
            <div
              data-animate-id="acc-button"
              className={`w-full flex justify-center mt-[5vh] transition-all duration-700 delay-400 ${
                visibleElements.has("acc-button")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <button className="group relative inline-block focus:outline-none">
                {/* Background Shape: Skewed Rectangle */}
                <div
                  className="bg-[#680C16] text-white px-[4vw]
                                                transition-all duration-300 group-hover:scale-105
                                                group-hover:bg-white group-hover:text-[#6E0216] group-hover:font-bold
                                                rounded-tr-[0.5vw] rounded-bl-[0.5vw]"
                  style={{
                    clipPath:
                      "polygon(2rem 0, 100% 0, 100% calc(100% - 2.75rem), calc(100% - 2rem) 100%, 0 100%, 0 2.75rem)",
                  }}
                >
                  {/* Text */}
                  <span className="text-[2.5vw] tracking-wider uppercase drop-shadow-md">
                    Avail Accommodation
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div
            id="accommodation-top-right"
            data-animate-id="acc-map"
            className={`w-[40vw] relative h-[85vh] transition-all duration-1000 delay-200 ${
              visibleElements.has("acc-map")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/images/MAP.svg"
              alt="Campus Map"
              fill
              style={{ objectFit: "contain" }}
            />
            <div className="absolute top-0 right-0 w-[18%] h-[17%]">
              <Image
                src="/images/accommodation_map_japanese.png"
                alt="Chizu(Map)"
                fill
                style={{ objectFit: "contain" }}
              ></Image>
            </div>
            {/* <div className="absolute bottom-0 right-0 w-[45%] h-[35%] flex flex-col justify-evenly">
              <div className="w-[45%] h-[50%] self-end relative">
                <Image
                  src="/images/accommodation_map_legend.png"
                  alt="Legend"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="h-[50%] self-end">
                <p className="text-white text-[2.1vw] uppercase -mt-[1vh]">
                  VIEW IN GOOGLE MAP
                </p>
                <p className="text-white text-[4.2vw] noxa-gothic uppercase -mt-[2.75vh]">
                  IITH MAP
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div
          className={`lg:hidden w-full min-h-screen bg-black transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-12 pt-20 sm:pt-24 pb-20">
            {/* Title */}
            <h1
              data-animate-id="mob-title"
              className={`text-white text-4xl sm:text-5xl md:text-6xl tracking-wider noxa-gothic uppercase mb-6 sm:mb-8 transition-all duration-700 ${
                visibleElements.has("mob-title")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              ACCOMMODATION
            </h1>

            {/* Main Description */}
            <div
              data-animate-id="mob-desc"
              className={`mb-6 sm:mb-8 md:mb-10 transition-all duration-700 delay-100 ${
                visibleElements.has("mob-desc")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                We are delighted to announce that the fest is scheduled to take
                place from January 9th to January 11th. Designed as a
                comprehensive three-day celebration, the event promises a
                vibrant array of activities. To ensure an optimal and seamless
                experience, we highly recommend securing accommodation directly
                within the IIT Hyderabad campus. By residing on-site, you will
                have the unique opportunity to fully immerse yourself in the
                festivities and enjoy unparalleled convenience throughout the
                duration of the event.
              </p>
            </div>

            {/* Campus Map - Mobile */}
            <div
              data-animate-id="mob-map"
              className={`w-full relative h-[60vh] sm:h-[50vh] md:h-[55vh] mb-6 sm:mb-8 md:mb-10 transition-all duration-700 delay-200 ${
                visibleElements.has("mob-map")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <Image
                src="/images/MAP.svg"
                alt="Campus Map"
                fill
                style={{ objectFit: "contain" }}
              />
              <div className="absolute top-2 right-2 w-[15%] h-[12%] sm:w-[12%] sm:h-[10%]">
                <Image
                  src="/images/accommodation_map_japanese.png"
                  alt="Chizu(Map)"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              {/* <div className="absolute bottom-2 right-2 flex flex-col items-end gap-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                  <Image
                    src="/images/accommodation_map_legend.png"
                    alt="Legend"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="text-right">
                  <p className="text-white text-xs sm:text-sm uppercase">
                    VIEW IN GOOGLE MAP
                  </p>
                  <p className="text-white text-lg sm:text-xl md:text-2xl noxa-gothic uppercase -mt-1">
                    IITH MAP
                  </p>
                </div>
              </div> */}
            </div>

            {/* Information Sections */}
            <div className="space-y-6 sm:space-y-8">
              {/* Charges */}
              <div
                data-animate-id="mob-charges"
                className={`flex flex-col transition-all duration-700 delay-300 ${
                  visibleElements.has("mob-charges")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl uppercase font-semibold mb-2 sm:mb-3">
                  CHARGES
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  The workshops will take place over the weekend, so we are
                  offering accommodation for one night at Rs. 999.00 (Check-in
                  at 5pm Saturday, check-out at 9:30am Sunday).
                </p>
              </div>

              {/* Identification */}
              <div
                data-animate-id="mob-id"
                className={`flex flex-col transition-all duration-700 delay-100 ${
                  visibleElements.has("mob-id")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl uppercase font-semibold mb-2 sm:mb-3">
                  IDENTIFICATION
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  You will be required to produce a valid government ID at the
                  campus gate, failure to do so will result in denial of entry
                  to the campus. (So please make sure to carry a government ID
                  with you.)
                </p>
              </div>

              {/* Getting to IITH */}
              <div
                data-animate-id="mob-getting"
                className={`flex flex-col transition-all duration-700 delay-200 ${
                  visibleElements.has("mob-getting")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl uppercase font-semibold mb-2 sm:mb-3">
                  GETTING TO IITH
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                  The main gate lies on the road from Patancheru to Kandi.
                  There's a bunch of large signs and boards, so you can't miss
                  it. Refer to Google maps for the exact address. One can reach
                  Patancheru by either bus or train. From Patancheru, one can
                  reach the IIT main gate by either bus or auto.
                </p>
              </div>
            </div>

            {/* Button */}
            <div
              data-animate-id="mob-button"
              className={`w-full flex justify-center mt-8 sm:mt-10 md:mt-12 transition-all duration-700 delay-300 ${
                visibleElements.has("mob-button")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <button className="group relative inline-block focus:outline-none">
                <div
                  className="bg-[#680C16] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4
                                                transition-all duration-300 active:scale-95 sm:hover:scale-105
                                                sm:hover:bg-white sm:hover:text-[#6E0216] sm:hover:font-bold
                                                rounded-tr-lg rounded-bl-lg"
                >
                  <span className="text-lg sm:text-xl md:text-2xl tracking-wider uppercase drop-shadow-md">
                    Avail Accommodation
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="background-layers-5 min-h-screen snap-start snap-always">
        {/* Desktop FAQ */}
        <div className="hidden lg:flex h-screen w-full px-[3vw] pt-[14vh] pb-[4vh] flex-col items-start gap-[2vh]">
          <p
            data-animate-id="faq-title"
            className={`text-white uppercase text-[4vw] noxa-gothic transition-all duration-700 ${
              visibleElements.has("faq-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            FAQ'S
          </p>
          <SimpleWrapper>
            {FAQs.map((faq, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-[2vw] tracking-[0.04em] font-medium text-white uppercase">
                  {faq.question}
                </p>
                <p
                  className="text-[1.1vw]/5.5 tracking-[0.02em] text-white uppercase -mt-[0.5vh]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></p>
              </div>
            ))}
          </SimpleWrapper>
        </div>

        {/* Mobile/Tablet FAQ */}
        <div
          className={`lg:hidden w-full min-h-screen bg-black transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-12 pt-20 sm:pt-24 pb-20">
            <h1
              data-animate-id="mob-faq-title"
              className={`text-white uppercase text-4xl sm:text-5xl md:text-6xl noxa-gothic mb-6 sm:mb-8 transition-all duration-700 ${
                visibleElements.has("mob-faq-title")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              FAQ'S
            </h1>

            <div className="space-y-6 sm:space-y-8">
              {FAQs.map((faq, index) => (
                <div
                  key={index}
                  data-animate-id={`mob-faq-item-${index}`}
                  className={`flex flex-col space-y-2 transition-all duration-700 ${
                    visibleElements.has(`mob-faq-item-${index}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white uppercase leading-tight">
                    {faq.question}
                  </p>
                  <p
                    className="text-sm sm:text-base md:text-lg text-white uppercase leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;

      // Check if we can scroll up (not at the top)
      setCanScrollUp(scrollTop > 10);

      // Check if we can scroll down (not at the bottom)
      setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
    };

    const element = scrollRef.current;
    if (element) {
      // Initial check
      handleScroll();
      // Add scroll listener
      element.addEventListener("scroll", handleScroll);
      // Check on resize
      window.addEventListener("resize", handleScroll);
      // Recheck after a short delay
      setTimeout(handleScroll, 100);

      return () => {
        element.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [children]);

  // Build the mask-image dynamically based on scroll state
  const getMaskImage = () => {
    const parts = [];

    if (canScrollUp && canScrollDown) {
      // Both fades
      return "linear-gradient(to bottom, transparent 0%, black 5vh, black calc(100% - 5vh), transparent 100%)";
    } else if (canScrollUp && !canScrollDown) {
      // Only top fade
      return "linear-gradient(to bottom, transparent 0%, black 5vh, black 100%)";
    } else if (!canScrollUp && canScrollDown) {
      // Only bottom fade
      return "linear-gradient(to bottom, black 0%, black calc(100% - 5vh), transparent 100%)";
    } else {
      // No fades
      return "none";
    }
  };

  const maskStyle = {
    maskImage: getMaskImage(),
    WebkitMaskImage: getMaskImage(),
  };

  return (
    <div
      ref={scrollRef}
      className="w-full flex-1 overflow-y-auto flex flex-col gap-[1vh] pb-[4vh] scrollbar-hide transition-all duration-500"
      style={maskStyle}
    >
      {children}
    </div>
  );
}
