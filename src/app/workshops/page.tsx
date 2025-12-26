"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Workshops() {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  const workshops = [
    {
      id: 1,
      title: "Full Stack Web Development Workshop",
      image: "/workshops/Full_Stack_Dev .png",
      unstopLink: "https://unstop.com/o/Kyz8nXI?lb=58he6PlW&utm_medium=Share&utm_source=srisri4756&utm_campaign=Workshops",
    },
    {
      id: 2,
      title: "Cybersecurity Workshop",
      image: "/workshops/Cyber_Sec.png",
      unstopLink: "https://unstop.com/o/93nF1vJ?lb=58he6PlW&utm_medium=Share&utm_source=srisri4756&utm_campaign=Workshops",
    },
    {
      id: 3,
      title: "Artificial Intelligence Workshop",
      image: "/workshops/AI.png",
      unstopLink: "https://unstop.com/o/t7Z5T1i?lb=58he6PlW&utm_medium=Share&utm_source=srisri4756&utm_campaign=Workshops",
    },
  ];

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

  return (
    <div className="background-layers-competitions min-h-screen w-full text-white py-[9vh] px-[3vw] bg-cover bg-center relative">
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        {/* Main Content */}
        <div
          className={`mx-auto transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Header Section */}
          <div className="mb-6 md:mb-8 lg:mb-12 tracking-wide text-white uppercase">
            {/* Main Heading */}
            <div
              data-animate-id="workshops-heading"
              className={`flex flex-col transition-all duration-700 ${
                visibleElements.has("workshops-heading")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-3xl md:text-4xl lg:text-[4vw] tracking-[0.06em] noxa-gothic mb-2">
                WORKSHOPS
              </p>
              <p className="text-sm md:text-base lg:text-[1.1vw] leading-relaxed lg:leading-[1.375] max-w-3xl">
                Enhance your skills with our curated workshops led by industry
                experts. From cutting-edge technologies to practical hands-on
                sessions, discover opportunities to learn, grow, and innovate
                alongside like-minded enthusiasts.
              </p>
            </div>
          </div>

          {/* Upcoming Workshops Section */}
          <div
            data-animate-id="workshops-section"
            className={`transition-all duration-700 delay-200 ${
              visibleElements.has("workshops-section")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl md:text-2xl lg:text-[2.25vw] tracking-[0.05em] mb-4 md:mb-6 uppercase">
              Upcoming Workshops
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="flex flex-col gap-2">
                  {/* Poster Card */}
                  <a
                    href={workshop.unstopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden transition-all duration-300 hover:scale-105"
                  >
                    {/* Card Container */}
                    <div className="relative w-full aspect-square bg-[#0a0a0a] overflow-hidden">
                      {/* Workshop Poster Image */}
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        fill
                        className="object-cover w-full h-full transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-[#a0a0a0] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Click to register →
                        </p>
                      </div>

                      {/* Dark overlay for better text visibility on hover */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>
                  </a>

                  {/* Workshop Title */}
                  <h3 className="text-sm md:text-base lg:text-[1.3vw] tracking-[0.05em] uppercase leading-tight">
                    {workshop.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-[#2a2a2a]">
            <p className="text-[#a0a0a0] text-center text-xs md:text-sm lg:text-[1.1vw] tracking-wide">
              More workshops coming soon! Stay tuned for exciting announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
