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
      question: "What facilities will be provided for accommodation?",
      answer:
        "Accommodation is provided on a room-per-person basis in the college hostels. Separate hostels are assigned for boys and girls. Each participant will receive:<br><br>1 mattress<br>1 pillow<br>Space for luggage storage<br><br>(Note: Please bring your own toiletries; only showers are provided.)",
    },
    {
      question: "Are there any combo offers for accommodation?",
      answer:
        "Yes! We have special combo offers for accommodation, as mentioned in the registration form. These offers provide better pricing for those booking multiple nights and also for those booking as a group of minimum of 3 participants availing accommodation. Check the form for details and select the best option for you as mentioned above.",
    },
    {
      question: "Can I get on-spot accommodation if I fail to book in advance?",
      answer:
        "On-spot accommodation is subject to room availability. There is no guarantee that rooms will be available. To avoid any inconvenience, it is strongly recommended to register in advance.",
    },
    {
      question: "Can I request a room close to my friends?",
      answer:
        "We will try our best to accommodate such requests, but we cannot guarantee room proximity. We kindly ask participants not to argue with the organising team regarding room assignments.",
    },
    {
      question: "Will I be allowed to leave the campus at night?",
      answer:
        "Yes, participants are allowed to leave the campus at night. However, they are responsible for their own safety and must ensure they return on time for scheduled events.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Once the payment is made, there will be no refunds or cancellations.",
    },
    {
      question: "What are the accommodation options and duration of stay?",
      answer:
        "You can book accommodation for any of the following durations:<br><br>Single Night Stay (Any One Night): Choose from 9th, 10th, or 11th January 2026 (Check-in at night, check-out next morning).<br>2 Night Stay (Any Two Nights): Choose any two consecutive nights between 9th to 11th January 2026.<br>3 Night Stay (Full Fest Duration): From 9th January Night to 12th January Morning.<br><br>(Combo offers apply to certain stays—check the registration form for details!)",
    },
    {
      question: "Are there cloakrooms for temporary luggage storage?",
      answer:
        "Yes! We will have cloakrooms available for temporary luggage storage. Participants can keep their bags for a limited period while attending events. (Note: The fest team is not responsible for lost items.)",
    },
    {
      question: "Are food stalls available on campus?",
      answer:
        "Yes, multiple food stalls will be available across the fest venue, offering a variety of options at reasonable prices.",
    },
    {
      question: "Is there an ATM or UPI payment facility available?",
      answer:
        "Most stalls will accept UPI payments, and there are ATMs near the venue for cash withdrawals.",
    },
    {
      question: "Are there lockers or safekeeping facilities for valuables?",
      answer:
        "No, participants are responsible for their own belongings. Please keep valuables safe at all times.",
    },
    {
      question:
        "Can I extend my stay if I initially book for a shorter duration?",
      answer:
        "Extension of stay is subject to availability. It is recommended to book in advance to avoid last-minute issues.",
    },
    {
      question: "Are there any special deals for group booking accommodation?",
      answer:
        "Yes! Group booking discounts are available with a minimum of 3 participants availing accommodation. Please check the registration form or contact the accommodation team for details.",
    },
    {
      question: "Are meals included with the accommodation?",
      answer:
        "Yes, meals are included with the accommodation as follows:<br><br>For 1 Night Stay:<br>Meals provided: Breakfast will be provided on the following day (on the day of check-out).<br><br>For 2 Nights Stay:<br>Meals provided: Breakfast on the day after check-in and on the day of check-out.<br><br>For 3 Nights Stay:<br>Meals provided: Breakfast on Day 2, Day 3 and on the day of check-out.<br><br>Meals will be served in the designated dining areas during the fest.",
    },
    {
      question: "Who can I contact for further queries?",
      answer:
        "For any accommodation-related queries, please reach out to our team members:<br><br>Karthika: +91 94949 88439<br>Sharanmegha: +91 8464946054<br>Moniha: +91 9566995223<br>Vasant: +91 8088645370<br>Sai Tejeswar: +91 8179771767<br>Akshay: +91 8177926434",
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-y-scroll h-screen">
      {/* Front Page */}
      <div className="background-layers-6 min-h-screen">
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
              id="accomodation-top-left-para5"
              data-animate-id="acc-para5"
              className={`flex flex-col transition-all duration-700 delay-300 ${
                visibleElements.has("acc-para5")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[2.25vw] tracking-[0.05em]">GUIDELINES</p>
              <p className="text-[1.1vw]/5.5 mb-[1vh]">
                Check out our in-depth Accomodation and Transportation guide by
                clicking the respective links below:
              </p>
              <div className="flex flex-col gap-[0.75vh] text-[1.1vw]/5.5">
                <a
                  href="https://docs.google.com/document/d/1J7M43LG2v8EXs4FNRG4KhaVuMHmC1DwHDOf5b74jMDY/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:underline transition-all duration-300"
                >
                  <span>Elan & nVision 2026 Accommodation Guide</span>
                  <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href="https://docs.google.com/document/d/1zq0RIVnx6413KMZ2HaP6mKqcrmB_XI8WqnKsC0F8ZRM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:underline transition-all duration-300"
                >
                  <span>Elan & nVision 2026 Transportation Guide</span>
                  <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
            <div
              data-animate-id="acc-button"
              className={`w-full flex justify-center mt-[5vh] transition-all duration-700 delay-400 ${
                visibleElements.has("acc-button")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <a
                href="https://rzp.io/rzp/Cozfuh08"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block focus:outline-none"
              >
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
              </a>
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
              src="/optimised/iith_map_2.png"
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
            <div className="absolute bottom-0 right-0 w-[45%] h-[20%] flex flex-col justify-evenly">
              <div className="h-[50%] self-end">
                <a
                  href="https://maps.app.goo.gl/vFmu2392eE213swJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="text-white text-[2.1vw] uppercase -mt-[1vh] group-hover:underline transition-all duration-300">
                    VIEW IN GOOGLE MAP
                  </p>
                  <p className="text-white text-[4.2vw] noxa-gothic uppercase -mt-[2.75vh]">
                    IITH MAP
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div
          className={`lg:hidden w-full min-h-screen transition-all duration-1000 ${
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
              <div className="absolute bottom-2 right-2 flex flex-col items-end gap-2">
                <a
                  href="https://maps.app.goo.gl/vFmu2392eE213swJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-right"
                >
                  <p className="text-white text-xs sm:text-sm uppercase group-hover:underline transition-all duration-300">
                    VIEW IN GOOGLE MAP
                  </p>
                  <p className="text-white text-lg sm:text-xl md:text-2xl noxa-gothic uppercase -mt-1">
                    IITH MAP
                  </p>
                </a>
              </div>
            </div>

            {/* Information Sections */}
            <div className="space-y-6 sm:space-y-8">
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

              {/* Guidelines */}
              <div
                data-animate-id="mob-guidelines"
                className={`flex flex-col transition-all duration-700 delay-300 ${
                  visibleElements.has("mob-guidelines")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl uppercase font-semibold mb-2 sm:mb-3">
                  GUIDELINES
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-3">
                  Check out our in-depth Accomodation and Transportation guide
                  by clicking the respective links below:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://docs.google.com/document/d/1J7M43LG2v8EXs4FNRG4KhaVuMHmC1DwHDOf5b74jMDY/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white text-sm sm:text-base md:text-lg leading-relaxed hover:underline transition-all duration-300"
                  >
                    <span>Elan & nVision 2026 Accommodation Guide</span>
                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1zq0RIVnx6413KMZ2HaP6mKqcrmB_XI8WqnKsC0F8ZRM/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white text-sm sm:text-base md:text-lg leading-relaxed hover:underline transition-all duration-300"
                  >
                    <span>Elan & nVision 2026 Transportation Guide</span>
                    <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </a>
                </div>
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
              <a
                href="https://rzp.io/rzp/Cozfuh08"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block focus:outline-none"
              >
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
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="background-layers-5 min-h-screen">
        {/* Desktop FAQ */}
        <div className="hidden lg:flex h-screen w-full px-[3vw] pt-[8vh] pb-[4vh] flex-col items-start gap-[2vh]">
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
          className={`lg:hidden w-full min-h-screen transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-12 pt-16 sm:pt-20 pb-20">
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
