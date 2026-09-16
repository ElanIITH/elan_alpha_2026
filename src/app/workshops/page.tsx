"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const WORKSHOPS = [
  {
    title: "Agentic AI: Foundations, Frameworks, and Autonomous Applications",
    date: "September 26th & 27th, 2026 · IIT Hyderabad",
    description:
      "A hands-on introduction to agentic AI — how autonomous agents reason, plan, and act using modern frameworks. Explore the building blocks behind self-directed AI systems and see how they're applied to real-world, multi-step tasks.",
    link: "https://unstop.com/p/agentic-ai-foundations-frameworks-and-autonomous-applications-elan-nvision-1750717",
    image: "/workshops/agentic-ai-poster.png",
  },
  {
    title: "VLSI Design: From Circuits to Tools",
    date: "September 26th & 27th, 2026 · IIT Hyderabad",
    description:
      "A practical walkthrough of the VLSI design flow — from circuit fundamentals to the industry-standard tools used to design and verify chips. Ideal for students looking to get a grounding in how modern hardware is actually built.",
    link: "https://unstop.com/p/vlsi-design-from-circuits-to-tools-elan-nvision-1750706",
    image: "/workshops/vlsi-design-poster.png",
  },
  {
    title: "Quantum Computing: Principles, Technologies, and Emerging Frontiers",
    date: "September 26th & 27th, 2026 · IIT Hyderabad",
    description:
      "A hands-on, two-day introduction to Quantum Computing — qubits, superposition, entanglement, and quantum gates on Day 1, followed by circuits, algorithms, and Python-based quantum tools on Day 2. Explore applications across cryptography, optimization, simulation, and quantum machine learning, and understand both the capabilities and current challenges of the field.",
    link: "https://unstop.com/p/ai-and-cybersecurity-foundations-tools-and-emerging-applications-iit-hyderabad-1745552",
    image: "/workshops/quantum-computing-poster.png",
  },
];

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

          {/* Upcoming Workshops Section */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {WORKSHOPS.map((workshop) => (
                <a
                  key={workshop.link}
                  href={workshop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:scale-[1.02]"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl tracking-wide uppercase leading-snug mb-3">
                      {workshop.title}
                    </h3>
                    <p className="text-sm text-[#a0a0a0] uppercase tracking-wide mb-4">
                      {workshop.date}
                    </p>
                    <p className="text-base text-[#c9c9c9] leading-relaxed normal-case tracking-normal">
                      {workshop.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 mx-5 md:mx-6 mb-5 md:mb-6 pt-4 border-t border-white/10">
                    <span className="text-sm md:text-base tracking-wide uppercase text-white/80 group-hover:text-white transition-colors">
                      Register on Unstop
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
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