"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DeutscheBorsePage() {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);

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

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate-id]");
      elements.forEach((el) => scrollObserver.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      scrollObserver.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <div className="background-layers-contact md:min-h-screen overflow-x-hidden text-white">
      <main className="relative w-full">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden pt-[28vh] pb-[12vh] px-[5vw] md:pt-[20vh]"
          data-animate-id="hero"
        >
          <div className="max-w-[90vw] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[6vw]">
              <div className="flex-1">
                <h1
                  className={`text-[5vw] md:text-[4.5vw] leading-tight transition-all duration-1000 ${
                    isVisible("hero")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Deutsche Börse × Elan & nVision
                </h1>
                <p
                  className={`text-[2vw] md:text-[1.8vw] mt-[3vh] leading-relaxed transition-all duration-1000 delay-200 ${
                    isVisible("hero")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Powering global financial markets through technology, research, and responsible innovation
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-wrap gap-[2vw] mt-[5vh] transition-all duration-1000 delay-300 ${
                    isVisible("hero")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <a
                    href="https://deutsche-boerse.com/dbg-de/group-careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text px-[3vw] py-[1.5vh] bg-[#6E0216] text-white text-[1.8vw] rounded hover:opacity-80 transition-opacity"
                  >
                    Explore Careers
                  </a>
                  <button
                    onClick={() => {
                      document
                        .getElementById("research")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text px-[3vw] py-[1.5vh] border-2 border-white text-white text-[1.8vw] rounded hover:bg-white hover:text-black transition-all"
                  >
                    Research & Innovation
                  </button>
                </div>
              </div>

              <div className="relative w-[25vw] h-[25vw] flex-shrink-0">
                <Image
                  src="/images/duetsche.png"
                  alt="Deutsche Börse"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Deutsche Börse */}
        <section className="py-[8vh] px-[5vw]" data-animate-id="about">
          <div className="max-w-[90vw] mx-auto">
            <h2
              className={`text text-[4vw] mb-[4vh] transition-all duration-1000 ${
                isVisible("about") ? "opacity-100" : "opacity-0"
              }`}
            >
              About Deutsche Börse
            </h2>
            <div
              className={`text-[1.8vw] leading-relaxed space-y-[3vh] transition-all duration-1000 delay-200 ${
                isVisible("about")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Deutsche Börse is a leading global market infrastructure provider, enabling secure and efficient financial markets worldwide. The Group operates across the entire financial value chain — from trading, clearing, settlement, custody, and data services to advanced analytics and technology-driven solutions.
              </p>
              <p>
                With the recent launch of its India Global Capability Centre (GCC), Deutsche Börse is strengthening its presence in India by focusing on technology development, quantitative research, data engineering, and operations, offering exciting opportunities for young professionals to work on globally impactful financial systems.
              </p>
            </div>
          </div>
        </section>

        {/* Talent Acquisition */}
        <section className="py-[8vh] px-[5vw]" data-animate-id="talent">
          <div className="max-w-[90vw] mx-auto">
            <h2
              className={`text text-[4vw] mb-[4vh] transition-all duration-1000 ${
                isVisible("talent") ? "opacity-100" : "opacity-0"
              }`}
            >
              Talent Acquisition & Career Opportunities
            </h2>
            <div
              className={`text-[1.8vw] leading-relaxed mb-[4vh] transition-all duration-1000 delay-200 ${
                isVisible("talent")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Deutsche Börse actively engages with young talent through campus programs, hackathons, internships, and full-time roles across technology, finance, data, and research domains. Students and graduates joining Deutsche Börse work on mission-critical systems that support global financial stability and innovation.
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-[3vw] mb-[5vh] transition-all duration-1000 delay-300 ${
                isVisible("talent")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                "Software Engineering & Platform Development",
                "Quantitative Research & Financial Analytics",
                "Data Science & AI",
                "Cybersecurity & Cloud Infrastructure",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-[2vw] rounded-lg border border-white/20 text-[1.8vw]"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://deutsche-boerse.com/dbg-de/group-careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text px-[3vw] py-[1.5vh] bg-[#6E0216] text-white text-[1.8vw] rounded hover:opacity-80 transition-opacity"
            >
              Visit Deutsche Börse Careers Portal →
            </a>
          </div>
        </section>

        {/* Research & Innovation */}
        <section id="research" className="py-[8vh] px-[5vw]" data-animate-id="research">
          <div className="max-w-[90vw] mx-auto">
            <h2
              className={`text text-[4vw] mb-[4vh] transition-all duration-1000 ${
                isVisible("research") ? "opacity-100" : "opacity-0"
              }`}
            >
              Research, Innovation & Academic Collaboration
            </h2>
            <div
              className={`text-[1.8vw] leading-relaxed mb-[4vh] transition-all duration-1000 delay-200 ${
                isVisible("research")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Deutsche Börse maintains a strong culture of research and innovation, collaborating with academic institutions and research communities to solve complex challenges in financial markets. Through its India GCC and global innovation hubs, the organisation works on cutting-edge problems in market microstructure, scalable systems, low-latency trading, and data-driven decision-making.
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-[3vw] transition-all duration-1000 delay-300 ${
                isVisible("research")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                "Financial Market Infrastructure Research",
                "Large-Scale Distributed Systems",
                "Quantitative Finance & Risk Modelling",
                "AI-driven Market Surveillance",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-[2vw] rounded-lg border border-white/20 text-[1.8vw]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG & FinTech */}
        <section className="py-[8vh] px-[5vw]" data-animate-id="esg">
          <div className="max-w-[90vw] mx-auto">
            <h2
              className={`text text-[4vw] mb-[4vh] transition-all duration-1000 ${
                isVisible("esg") ? "opacity-100" : "opacity-0"
              }`}
            >
              ESG & FinTech Leadership
            </h2>
            <div
              className={`text-[1.8vw] leading-relaxed mb-[4vh] transition-all duration-1000 delay-200 ${
                isVisible("esg")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Deutsche Börse is deeply committed to Environmental, Social, and Governance (ESG) principles and plays a key role in advancing sustainable finance globally. Through its indices, data products, and market platforms, Deutsche Börse enables transparency, responsible investment, and long-term value creation.
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-[3vw] transition-all duration-1000 delay-300 ${
                isVisible("esg")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {[
                "ESG Indices & Sustainable Finance Products",
                "Climate Risk & ESG Data Solutions",
                "Financial Transparency & Market Integrity",
                "Responsible Innovation in FinTech",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-[2vw] rounded-lg border border-white/20 text-[1.8vw]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement at Elan */}
        <section className="py-[8vh] px-[5vw]" data-animate-id="engagement">
          <div className="max-w-[90vw] mx-auto">
            <h2
              className={`text text-[4vw] mb-[4vh] transition-all duration-1000 ${
                isVisible("engagement") ? "opacity-100" : "opacity-0"
              }`}
            >
              Deutsche Börse at Elan & nVision
            </h2>
            <div
              className={`text-[1.8vw] leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible("engagement")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              As the Co-Title Sponsor of Elan & nVision, Deutsche Börse actively engaged with the student community through hackathons, a financial bootcamp, and an interactive Career Hub Stall. These initiatives provided students with hands-on exposure to real-world financial and technological challenges, mentorship from industry professionals, and insights into global career pathways.
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-[10vh] px-[5vw] border-t border-white/20" data-animate-id="footer">
          <div className="max-w-[90vw] mx-auto text-center">
            <h2
              className={`text text-[4vw] mb-[5vh] transition-all duration-1000 ${
                isVisible("footer") ? "opacity-100" : "opacity-0"
              }`}
            >
              Build the Future of Global Financial Markets
            </h2>

            <div
              className={`flex flex-wrap justify-center gap-[3vw] transition-all duration-1000 delay-200 ${
                isVisible("footer")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://deutsche-boerse.com/dbg-de/group-careers"
                target="_blank"
                rel="noopener noreferrer"
                className="text px-[3vw] py-[1.5vh] bg-[#6E0216] text-white text-[1.8vw] rounded hover:opacity-80 transition-opacity"
              >
                Explore Careers at Deutsche Börse
              </a>
              <Link
                href="/"
                className="text px-[3vw] py-[1.5vh] border-2 border-white text-white text-[1.8vw] rounded hover:bg-white hover:text-black transition-all"
              >
                Back to Elan & nVision
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
