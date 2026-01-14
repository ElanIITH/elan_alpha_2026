"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Sponsor {
  name: string;
  title: string;
  hyperlink: string;
  row: number;
}

export default function Sponsors() {
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
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
      "color: #ffffff; font-size: 13px; line-height: 1.2;"
    );
  }, []);

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
    return () => {
      clearTimeout(timeoutId);
      scrollObserver.disconnect();
    };
  }, []);

  const sponsorsData: Sponsor[] = [
    {
      name: "Greenko",
      title: "Title Sponsor",
      hyperlink: "https://www.greenkogroup.com/",
      row: 1,
    },
    {
      name: "Deutsche Börse Group",
      title: "Co-Title Sponsor",
      hyperlink: "https://www.deutsche-boerse.com/dbg-en/",
      row: 2,
    },
    {
      name: "HMDA",
      title: "Smart City Development Partner",
      hyperlink: "https://www.hmda.gov.in/",
      row: 3,
    },
    {
      name: "Telangana Pollution Control Board",
      title: "Clean Environment Partner",
      hyperlink: "https://tgpcb.cgg.gov.in/",
      row: 3,
    },
    {
      name: "NLC India Limited",
      title: "Powering India's Tomorrow Partner",
      hyperlink: "https://www.nlcindia.in/website/en/",
      row: 3,
    },
    {
      name: "Amara Raja",
      title: "Battery Partner",
      hyperlink: "https://www.amararaja.com/",
      row: 4,
    },
    {
      name: "Telangana Power Generation Corporation Limited",
      title: "Official Synergy Partner",
      hyperlink: "https://tggenco.com/TGGENCO/home.do",
      row: 4,
    },
    {
      name: "Hindustan Petroleum Corporation Limited",
      title: "Fuelling Tomorrow's Energy Partner",
      hyperlink: "https://www.hindustanpetroleum.com/",
      row: 5,
    },
    {
      name: "Sonoco India",
      title: "Official Packaging Solutions & Sustainable Materials Partner",
      hyperlink: "https://www.sonoco.com/na",
      row: 5,
    },
    {
      name: "Punjab National Bank",
      title: "Banking Partner",
      hyperlink: "https://pnb.bank.in/education.aspx",
      row: 5,
    },
    {
      name: "Re Sustainability Limited",
      title: "Sustainable Waste Management Partner",
      hyperlink: "https://resustainability.com/",
      row: 6,
    },
    {
      name: "JioSaavn",
      title: "Official Music Streaming Partner",
      hyperlink: "https://www.jiosaavn.com/",
      row: 6,
    },
    {
      name: "Monster",
      title: "Official Energy Drink Partner",
      hyperlink: "https://www.monsterenergy.com/en-in/",
      row: 6,
    },
    {
      name: "KLA",
      title: "Gold Sponsor",
      hyperlink: "https://www.kla.com/",
      row: 7,
    },
    {
      name: "PNB",
      title: "Banking Partner",
      hyperlink: "https://www.pnb.bank.in/Home.aspx",
      row: 7,
    },
    {
      name: "Plum Goodness",
      title: "Premium Goodness Partner",
      hyperlink: "https://plumgoodness.com/",
      row: 7,
    },
    {
      name: "Plum Body Lovin",
      title: "Bath & Body Partner",
      hyperlink: "https://plumgoodness.com/pages/bodylovin",
      row: 7,
    },
    {
      name: "Dopamine Store",
      title: "Exclusive Merchandise Partner",
      hyperlink: "https://thedopaminestore.in/",
      row: 8,
    },
    {
      name: "Safran",
      title: "Official Aerospace & Advanced Manufacturing Partner",
      hyperlink: "https://www.safran-group.com/",
      row: 8,
    },
    {
      name: "DKMS",
      title: "Exclusive Social Welfare Partner",
      hyperlink: "https://www.dkms-india.org/",
      row: 8,
    },
    {
      name: "LIC",
      title: "Insurance Partner",
      hyperlink: "https://licindia.in/en/web/guest/home",
      row: 8,
    },
    {
      name: "Bisleri",
      title: "Official Hydration Partner",
      hyperlink: "https://www.bisleri.com/",
      row: 9,
    },
    {
      name: "Bisleri Limonata",
      title: "Refreshment Partner",
      hyperlink: "https://www.bisleri.com/limonata",
      row: 9,
    },
    {
      name: "Bisleri Bottles of Change",
      title: "Sustainability Partner",
      hyperlink: "https://www.bisleri.com/bottles-for-change",
      row: 9,
    },
    {
      name: "Adani Cement",
      title: "Building Strength and Sustainability Partner",
      hyperlink: "https://www.adani.com/businesses/materials/cement",
      row: 9,
    },
    {
      name: "R Gouras Caterers",
      title: "Catering Partner",
      hyperlink: "http://rgourascaterers.com/",
      row: 10,
    },
    {
      name: "Food Sutra",
      title: "Hospitality Partner",
      hyperlink: "https://foodsutra.in/",
      row: 10,
    },
    {
      name: "Abani Fragrances",
      title: "Fragrance Partner",
      hyperlink: "https://abanifragrances.com/",
      row: 10,
    },
    {
      name: "Unstop",
      title: "Powered by Partner",
      hyperlink: "https://unstop.com/",
      row: 10,
    },
    {
      name: "Nodwin Gaming",
      title: "Mobile Gaming Partner",
      hyperlink: "https://krafton.in/",
      row: 11,
    },
    {
      name: "Hoopr",
      title: "Curtain Call & Filmfare Fiesta Event Sponsor",
      hyperlink: "https://hoopr.ai/",
      row: 11,
    },
    {
      name: "Baha Games",
      title: "Official Wooden Games Partner",
      hyperlink: "https://bahagames.com/",
      row: 11,
    },
    {
      name: "Boardrama",
      title: "Official Board Games Partner",
      hyperlink: "https://boardrama.in/",
      row: 11,
    },
    {
      name: "FTIH",
      title: "",
      hyperlink: "https://ftihedu.com/",
      row: 12,
    },
    {
      name: "Abhibus",
      title: "Travelling Partner",
      hyperlink: "https://www.abhibus.com/",
      row: 12,
    },
    {
      name: "StockEdge",
      title: "",
      hyperlink: "https://stockedge.com/",
      row: 12,
    },
    {
      name: "AI Interview Agents",
      title: "AI Interview Agent Partner",
      hyperlink: "https://www.aiinterviewagents.com/",
      row: 12,
    },
    {
      name: "AceInt",
      title: "AI Interview Partner",
      hyperlink: "",
      row: 13,
    },
    {
      name: "Koed Learning",
      title: "Learning Partner",
      hyperlink: "https://www.koed.in/",
      row: 13,
    },
    {
      name: "Denver",
      title: "Fragrance Partner",
      hyperlink: "https://denverformen.com/",
      row: 13,
    },
    {
      name: "Klaw",
      title: "Healthy Snacking Partner",
      hyperlink: "https://getklaw.com/",
      row: 13,
    },
    {
      name: "Hilary Rhoda",
      title: "Official Beauty Partner",
      hyperlink: "https://hilaryrhoda.in/?srsltid=AfmBOorUB0AX_JMdzwjINDNm89nQ5I4cy-WhutATsD6LIsqwWudFfL_Z",
      row: 14,
    },
  ];

  const sponsorsByRow = sponsorsData.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.row]) {
        acc[sponsor.row] = [];
      }
      acc[sponsor.row].push(sponsor);
      return acc;
    },
    {} as Record<number, Sponsor[]>
  );

  return (
    <div
      id="sponsors"
      className="background-layers-contact md:min-h-screen overflow-x-hidden text-white"
    >
      <div
        className={`relative w-full min-h-screen flex flex-col items-center pt-[8vh] md:pt-[8vh] md:justify-center md:items-center transition-all duration-1000 delay-400 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mt-[15vw] md:mt-[8vh] flex flex-col gap-[4vh] md:gap-[4vh] px-[5vw] md:px-[5vw] w-full max-w-full">
          <div
            data-animate-id="sponsors-title"
            className={`uppercase text-[5vw] md:text-[3.5vw] flex justify-center items-center transition-all duration-700 noxa-gothic ${
              visibleElements.has("sponsors-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Our Sponsors
          </div>

          {/* Title Sponsors Section */}
          {sponsorsByRow[1] && (
            <div
              data-animate-id="sponsors-title-section"
              className={`flex flex-col items-center gap-[2vh] transition-all duration-700 ${
                visibleElements.has("sponsors-title-section")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center uppercase text-[3vw] md:text-[1.5vw] noxa-gothic tracking-wider mb-[1vh]" style={{ color: "#AE0021" }}>
                Title Sponsors
              </div>
              <div className="flex flex-wrap justify-center gap-[3vw] md:gap-[5vw]">
                {sponsorsByRow[1].map((sponsor, index) => (
                  <div
                    key={`${sponsor.name}-${index}`}
                    data-animate-id={`sponsor-title-${index}`}
                    className={`flex flex-col items-center justify-center gap-[1vh] transition-all duration-700 ${
                      visibleElements.has(`sponsor-title-${index}`)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {sponsor.hyperlink ? (
                      <a
                        href={sponsor.hyperlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                      >
                        <div className="relative w-[28vw] h-[14vw] md:w-[20vw] md:h-[12vw] flex items-center justify-center">
                          <Image
                            src={`/sponsors/${sponsor.name
                              .toLowerCase()
                              .replace(/\s+/g, "_")
                              .replace(/[^a-z0-9_]/g, "")}.png`}
                            alt={sponsor.name}
                            fill
                            sizes="(max-width: 768px) 28vw, 20vw"
                            className="object-contain"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.style.display = "none";
                            }}
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative w-[28vw] h-[14vw] md:w-[20vw] md:h-[12vw] flex items-center justify-center">
                        <Image
                          src={`/sponsors/${sponsor.name
                            .toLowerCase()
                            .replace(/\s+/g, "_")
                            .replace(/[^a-z0-9_]/g, "")}.png`}
                          alt={sponsor.name}
                          fill
                          sizes="(max-width: 768px) 28vw, 20vw"
                          className="object-contain"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    {sponsor.title && (
                      <div
                        className="text-center uppercase text-[2.5vw] md:text-[0.9vw] tracking-wide noxa-gothic font-light"
                        style={{ color: "#AE0021" }}
                      >
                        {sponsor.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Co-Title Sponsors Section */}
          {sponsorsByRow[2] && (
            <div
              data-animate-id="sponsors-cotitle-section"
              className={`flex flex-col items-center gap-[2vh] transition-all duration-700 ${
                visibleElements.has("sponsors-cotitle-section")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center uppercase text-[3vw] md:text-[1.5vw] noxa-gothic tracking-wider mb-[1vh]" style={{ color: "#AE0021" }}>
                Co-Title Sponsors
              </div>
              <div className="flex flex-wrap justify-center gap-[3vw] md:gap-[4vw]">
                {sponsorsByRow[2].map((sponsor, index) => (
                  <div
                    key={`${sponsor.name}-${index}`}
                    data-animate-id={`sponsor-cotitle-${index}`}
                    className={`flex flex-col items-center justify-center gap-[1vh] transition-all duration-700 ${
                      visibleElements.has(`sponsor-cotitle-${index}`)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {sponsor.hyperlink ? (
                      <a
                        href={sponsor.hyperlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                      >
                        <div className="relative w-[24vw] h-[12vw] md:w-[16vw] md:h-[10vw] flex items-center justify-center">
                          <Image
                            src={`/sponsors/${sponsor.name
                              .toLowerCase()
                              .replace(/\s+/g, "_")
                              .replace(/[^a-z0-9_]/g, "")}.png`}
                            alt={sponsor.name}
                            fill
                            sizes="(max-width: 768px) 24vw, 16vw"
                            className="object-contain"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.style.display = "none";
                            }}
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative w-[24vw] h-[12vw] md:w-[16vw] md:h-[10vw] flex items-center justify-center">
                        <Image
                          src={`/sponsors/${sponsor.name
                            .toLowerCase()
                            .replace(/\s+/g, "_")
                            .replace(/[^a-z0-9_]/g, "")}.png`}
                          alt={sponsor.name}
                          fill
                          sizes="(max-width: 768px) 24vw, 16vw"
                          className="object-contain"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    {sponsor.title && (
                      <div
                        className="text-center uppercase text-[2.5vw] md:text-[0.9vw] tracking-wide noxa-gothic font-light"
                        style={{ color: "#AE0021" }}
                      >
                        {sponsor.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Sponsors Sections */}
          {Object.keys(sponsorsByRow)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .filter((row) => parseInt(row) > 2)
            .map((rowKey) => {
              const row = parseInt(rowKey);
              const sponsors = sponsorsByRow[row];

              return (
                <div key={row} className="flex flex-col items-center gap-[2vh]">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[2vw] md:gap-[2vw] place-items-center w-full max-w-4xl mx-auto">
                    {sponsors.map((sponsor, index) => {
                      const animateId = `sponsor-${row}-${index}`;

                      return (
                        <div
                          key={`${sponsor.name}-${index}`}
                          data-animate-id={animateId}
                          className={`flex flex-col items-center justify-center gap-[0.8vh] w-full transition-all duration-700 ${
                            visibleElements.has(animateId)
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-8"
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          {sponsor.hyperlink ? (
                            <a
                              href={sponsor.hyperlink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80 transition-opacity duration-200"
                            >
                              <div className="relative w-[18vw] h-[9vw] md:w-[12vw] md:h-[7vw] flex items-center justify-center">
                                <Image
                                  src={`/sponsors/${sponsor.name
                                    .toLowerCase()
                                    .replace(/\s+/g, "_")
                                    .replace(/[^a-z0-9_]/g, "")}.png`}
                                  alt={sponsor.name}
                                  fill
                                  sizes="(max-width: 768px) 18vw, 12vw"
                                  className="object-contain"
                                  onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    img.style.display = "none";
                                  }}
                                />
                              </div>
                            </a>
                          ) : (
                            <div className="relative w-[18vw] h-[9vw] md:w-[12vw] md:h-[7vw] flex items-center justify-center">
                              <Image
                                src={`/sponsors/${sponsor.name
                                  .toLowerCase()
                                  .replace(/\s+/g, "_")
                                  .replace(/[^a-z0-9_]/g, "")}.png`}
                                alt={sponsor.name}
                                fill
                                sizes="(max-width: 768px) 18vw, 12vw"
                                className="object-contain"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.style.display = "none";
                                }}
                              />
                            </div>
                          )}
                          {sponsor.title && (
                            <div
                              className="text-center uppercase text-[2vw] md:text-[0.75vw] tracking-wide noxa-gothic font-light leading-tight"
                              style={{ color: "#AE0021" }}
                            >
                              {sponsor.title}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

        <div
          data-animate-id="sponsors-logo"
          className={`relative w-[60vw] h-[14vw] md:w-[40vw] md:h-[9vw] mt-[4vh] transition-all duration-700 delay-800 ${
            visibleElements.has("sponsors-logo")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <Image
            src="/home/elan_chrome.png"
            alt="Elan title"
            fill
            sizes="(max-width: 768px) 60vw, 40vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
