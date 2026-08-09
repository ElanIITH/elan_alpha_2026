"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Workshops() {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    console.clear();

    console.log(
      `%c███████╗██╗      █████╗ ███╗   ██╗
%c██╔════╝██║     ██╔══██╗████╗  ██║
%c█████╗  ██║     ███████║██╔██╗ ██║
%c██╔══╝  ██║     ██╔══██║██║╚██╗██║
%c███████╗███████╗██║  ██║██║ ╚████║

%c███╗   ██╗██╗   ██╗██╗███████╗██╗ ██████╗ ███╗   ██╗
%c████╗  ██║██║   ██║██║██╔════╝██║██╔═══██╗████╗  ██║
%c██╔██╗ ██║██║   ██║██║███████╗██║██║   ██║██╔██╗ ██║
%c██║╚██╗██║╚██╗ ██╔╝██║╚════██║██║██║   ██║██║╚██╗██║
%c██║ ╚████║ ╚████╔╝ ██║███████║██║╚██████╔╝██║ ╚████║`,
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
    );
    console.log("Design by EnV Creatives Team. Made by EnV Web Team.");
  }, []);

  // No workshops array needed, replaced by PDF poster

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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
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
    <div className="background-layers-competitions min-h-screen w-full text-white py-[9vh] md:pt-[12vh] px-[4vw] md:px-[2vw] bg-cover bg-center relative">
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
              <p className="text-3xl md:text-[5vw] tracking-[0.06em] noxa-gothic mb-2">
                WORKSHOPS
              </p>
              <p className="text-sm md:text-[1.3vw] text-left leading-relaxed lg:leading-snug max-w-3xl">
                Enhance your skills with our curated workshops led by industry
                experts. From cutting-edge technologies to practical hands-on
                sessions, discover opportunities to learn, grow, and innovate
                alongside like-minded enthusiasts.
              </p>
            </div>
          </div>


          {/* Poster Card Section (styled like previous workshops) */}
          <div
            data-animate-id="workshops-section"
            className={`transition-all duration-700 delay-200 ${
              visibleElements.has("workshops-section")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl md:text-[3vw] tracking-[0.05em] mb-4 md:mb-6 uppercase">
              Upcoming Workshops
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <a
                href="https://unstop.com/p/generative-ai-foundations-and-emerging-applications-iit-hyderabad-1719619"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:scale-[1.02]"
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/workshops/ai-cybersecurity-poster.png"
                    alt="AI and Cybersecurity: Foundations, Tools, and Emerging Applications"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm md:text-base tracking-wide uppercase leading-snug">
                      AI &amp; Cybersecurity: Foundations, Tools, and Emerging Applications
                    </h3>
                    <p className="text-xs text-[#a0a0a0] mt-1 uppercase tracking-wide">
                      Aug 22–23, 2026 · IIT Hyderabad
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
                </div>
              </a>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-[#2a2a2a]">
            <p className="text-[#a0a0a0] text-center text-xs md:text-sm lg:text-[1.1vw] tracking-widest uppercase">
              More workshops coming soon! Stay tuned for exciting announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}