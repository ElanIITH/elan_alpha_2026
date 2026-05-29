"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export default function Sponsors() {
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

  const sponsors = [
    {
      tier: 1,
      tierName: "Title Sponsor",
      sponsors: [
        {
          name: "Greenko",
          title: "Title Sponsor",
          link: "https://www.greenkogroup.com/",
          image: "/sponsors/greenko.png",
        },
      ],
    },
    {
      tier: 2,
      tierName: "Co-Title Sponsor",
      sponsors: [
        {
          name: "Deutsche Börse Group",
          title: "Co-Title Sponsor",
          link: "https://www.deutsche-boerse.com/dbg-en/",
          image: "/sponsors/deutsche_brse_group.png",
        },
      ],
    },
    {
      tier: 3,
      tierName: "Platinum Partners",
      sponsors: [
        {
          name: "HMDA",
          title: "Smart City Development Partner",
          link: "https://www.hmda.gov.in/",
          image: "/sponsors/hmda.png",
        },
        {
          name: "Telangana Pollution Control Board",
          title: "Clean Environment Partner",
          link: "https://tgpcb.cgg.gov.in/",
          image: "/sponsors/telangana_pollution_control_board.png",
        },
        {
          name: "NLC India Limited",
          title: "Powering India's Tomorrow Partner",
          link: "https://www.nlcindia.in/website/en/",
          image: "/sponsors/nlc_india_limited.png",
        },
      ],
    },
    {
      tier: 4,
      tierName: "Gold Partners",
      sponsors: [
        {
          name: "Amara Raja",
          title: "Battery Partner",
          link: "https://www.amararaja.com/",
          image: "/sponsors/amara_raja.png",
        },
        {
          name: "Telangana Power Generation Corporation Limited",
          title: "Official Synergy Partner",
          link: "https://tggenco.com/TGGENCO/home.do",
          image: "/sponsors/telangana_power_generation_corporation_limited.png",
        },
        {
          name: "Hindustan Petroleum Corporation Limited",
          title: "Fuelling Tomorrow's Energy Partner",
          link: "https://www.hindustanpetroleum.com/",
          image: "/sponsors/hindustan_petroleum_corporation_limited.png",
        },
      ],
    },
    {
      tier: 5,
      tierName: "Silver Partners",
      sponsors: [
        {
          name: "Sonoco India",
          title: "Official Packaging Solutions & Sustainable Materials Partner",
          link: "https://www.sonoco.com/na",
          image: "/sponsors/sonoco_india.png",
        },
        {
          name: "Punjab National Bank",
          title: "Banking Partner",
          link: "https://pnb.bank.in/education.aspx",
          image: "/sponsors/punjab_national_bank.png",
        },
        {
          name: "KLA",
          title: "Gold Sponsor",
          link: "https://www.kla.com/",
          image: "/sponsors/kla.png",
        },
      ],
    },
    {
      tier: 6,
      tierName: "Associate Partners",
      sponsors: [
        {
          name: "JioSaavn",
          title: "Official Music Streaming Partner",
          link: "https://www.jiosaavn.com/",
          image: "/sponsors/jiosaavn.png",
        },
        {
          name: "Monster",
          title: "Official Energy Drink Partner",
          link: "https://www.monsterenergy.com/en-in/",
          image: "/sponsors/monster.png",
        },
        {
          name: "Re Sustainability Limited",
          title: "Sustainable Waste Management Partner",
          link: "https://resustainability.com/",
          image: "/sponsors/re_sustainability_limited.png",
        },
      ],
    },
    {
      tier: 7,
      tierName: "Premium Partners",
      sponsors: [
        {
          name: "Plum Goodness",
          title: "Premium Goodness Partner",
          link: "https://plumgoodness.com/",
          image: "/sponsors/plum_goodness.png",
        },
        {
          name: "Plum Body Lovin",
          title: "Bath & Body Partner",
          link: "https://plumgoodness.com/pages/bodylovin",
          image: "/sponsors/plum_body_lovin.png",
        },
        {
          name: "DKMS",
          title: "Exclusive Social Welfare Partner",
          link: "https://www.dkms-india.org/",
          image: "/sponsors/dkms.png",
        },
      ],
    },
    {
      tier: 8,
      tierName: "Corporate Partners",
      sponsors: [
        {
          name: "Safran",
          title: "Official Aerospace & Advanced Manufacturing Partner",
          link: "https://www.safran-group.com/",
          image: "/sponsors/safran.png",
        },
        {
          name: "Dopamine Store",
          title: "Exclusive Merchandise Partner",
          link: "https://thedopaminestore.in/",
          image: "/sponsors/dopamine_store.png",
        },
        {
          name: "LIC",
          title: "Insurance Partner",
          link: "https://licindia.in/en/web/guest/home",
          image: "/sponsors/lic.png",
        },
      ],
    },
    {
      tier: 9,
      tierName: "Strategic Partners",
      sponsors: [
        {
          name: "Bisleri",
          title: "Official Hydration Partner",
          link: "https://www.bisleri.com/",
          image: "/sponsors/bisleri.png",
        },
        {
          name: "Bisleri Limonata",
          title: "Refreshment Partner",
          link: "https://www.bisleri.com/limonata",
          image: "/sponsors/bisleri_limonata.png",
        },
        {
          name: "Bisleri Bottles of Change",
          title: "Sustainability Partner",
          link: "https://www.bisleri.com/bottles-for-change",
          image: "/sponsors/bisleri_bottles_of_change.png",
        },
        // {
        //   name: "Adani Cement",
        //   title: "Building Strength and Sustainability Partner",
        //   link: "https://www.adani.com/businesses/materials/cement",
        //   image: "/sponsors/adani_cement.png",
        // },
      ],
    },
    {
      tier: 10,
      tierName: "Hospitality & Service Partners",
      sponsors: [
        {
          name: "R Gouras Caterers",
          title: "Catering Partner",
          link: "http://rgourascaterers.com/",
          image: "/sponsors/r_gouras_caterers.png",
        },
        {
          name: "Food Sutra",
          title: "Hospitality Partner",
          link: "https://foodsutra.in/",
          image: "/sponsors/food_sutra.png",
        },
        {
          name: "Abani Fragrances",
          title: "Fragrance Partner",
          link: "https://abanifragrances.com/",
          image: "/sponsors/abani_fragrances.png",
        },
        {
          name: "Unstop",
          title: "Powered by Partner",
          link: "https://unstop.com/",
          image: "/sponsors/unstop.png",
        },
      ],
    },
    {
      tier: 11,
      tierName: "Gaming & Entertainment Partners",
      sponsors: [
        {
          name: "Nodwin Gaming",
          title: "Mobile Gaming Partner",
          link: "https://krafton.in/",
          image: "/sponsors/nodwin_gaming.png",
        },
        {
          name: "Hoopr",
          title: "Curtain Call & Filmfare Fiesta Event Sponsor",
          link: "https://hoopr.ai/",
          image: "/sponsors/hoopr.png",
        },
        {
          name: "Baha Games",
          title: "Official Wooden Games Partner",
          link: "https://bahagames.com/",
          image: "/sponsors/baha_games.png",
        },
        {
          name: "Boardrama",
          title: "Official Board Games Partner",
          link: "https://boardrama.in/",
          image: "/sponsors/boardrama.png",
        },
      ],
    },
    {
      tier: 12,
      tierName: "Technology & Education Partners",
      sponsors: [
        {
          name: "FTIH",
          title: "",
          link: "https://ftihedu.com/",
          image: "/sponsors/ftih.png",
        },
        {
          name: "Abhibus",
          title: "Travelling Partner",
          link: "https://www.abhibus.com/",
          image: "/sponsors/abhibus.png",
        },
        {
          name: "StockEdge",
          title: "",
          link: "https://stockedge.com/",
          image: "/sponsors/stockedge.png",
        },
        {
          name: "AI Interview Agents",
          title: "AI Interview Agent Partner",
          link: "https://www.aiinterviewagents.com/",
          image: "/sponsors/ai_interview_agents.png",
        },
        {
          name: "IITH Alumni Association",
          title: "",
          link: "https://iithaa.org/",
          image: "/sponsors/iith_alumni_association.png",
        },
      ],
    },
    {
      tier: 13,
      tierName: "Lifestyle & Learning Partners",
      sponsors: [
        {
          name: "AceInt",
          title: "AI Interview Partner",
          link: "#",
          image: "/sponsors/aceint.png",
        },
        {
          name: "Koed Learning",
          title: "Learning Partner",
          link: "https://www.koed.in/",
          image: "/sponsors/koed_learning.png",
        },
        {
          name: "Denver",
          title: "Fragrance Partner",
          link: "https://denverformen.com/",
          image: "/sponsors/denver.png",
        },
        {
          name: "Klaw",
          title: "Healthy Snacking Partner",
          link: "https://getklaw.com/",
          image: "/sponsors/klaw.png",
        },
      ],
    },
    {
      tier: 14,
      tierName: "Beauty Partner",
      sponsors: [
        {
          name: "Hilary Rhoda",
          title: "Official Beauty Partner",
          link: "https://hilaryrhoda.in/?srsltid=AfmBOorUB0AX_JMdzwjINDNm89nQ5I4cy-WhutATsD6LIsqwWudFfL_Z",
          image: "/sponsors/hilary_rhoda.png",
        },
        {
          name: "Zebronics",
          title: "Audio Partner",
          link: "https://zebronics.com/",
          image: "/sponsors/Zebronics.jpg.jpeg",
        },
        {
          name: "Evernorth Health Services",
          title: "Official Health-Tech & Care Innovation Partner",
          link: "https://www.evernorth.com",
          image: "/sponsors/Evernorth.jpeg",
        },
        {
          name: "BXI World",
          title: "Official Barter partner",
          link: "https://bxiworld.com/",
          image: "/sponsors/bxi-logo-03.png",
        },
      ],
    },
  ];

  return (
    <div 
      className="min-h-screen w-full text-white py-[9vh] px-[3vw] relative"
      style={{
        backgroundImage: 'url("/optimised/compete_bg.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16 flex items-center justify-center min-h-[30vh]">
          <h1 className="md:text-[5.5vw] text-5xl tracking-[0.06em] noxa-gothic uppercase text-white">
            Our Sponsors
          </h1>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-7xl mx-auto space-y-20">
          {sponsors.map((tierGroup) => (
            <div
              key={tierGroup.tier}
              className="animate-fade-in-up"
              style={{ animationDelay: `${tierGroup.tier * 0.1}s` }}
            >
              {/* Sponsors Logos */}
              <div className="flex flex-wrap justify-center items-start gap-x-12 md:gap-x-28 gap-y-10 mx-auto px-8 max-w-[95vw]">
                {tierGroup.sponsors.map((sponsor, idx) => (
                  <a
                    key={idx}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-start gap-4 transition-opacity duration-300 hover:opacity-80 ${
                      tierGroup.tier <= 2
                        ? "w-64 md:w-80"
                        : tierGroup.tier <= 5
                        ? "w-48 md:w-56"
                        : "w-40 md:w-48"
                    }`}
                  >
                    {/* Sponsor Logo */}
                    <div
                      className={`relative ${
                        tierGroup.tier === 1
                          ? "h-20 md:h-24 w-full"
                          : tierGroup.tier === 2
                          ? "h-16 md:h-20 w-full"
                          : tierGroup.tier <= 5
                          ? "h-28 w-full"
                          : "h-24 w-full"
                      }`}
                    >
                      <Image
                        src={sponsor.image}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Sponsor Name */}
                    <h3
                      className={`text-white text-center tracking-wide w-full leading-tight ${
                        tierGroup.tier <= 2
                          ? "md:text-[1.5vw] text-lg"
                          : "md:text-[1.4vw] text-lg"
                      }`}
                    >
                      {sponsor.name}
                    </h3>

                    {/* Sponsor Title */}
                    {sponsor.title && (
                      <p
                        className={`text-white text-center tracking-wide w-full leading-tight ${
                          tierGroup.tier <= 2
                            ? "md:text-[1.2vw] text-base"
                            : "md:text-[1.15vw] text-base"
                        }`}
                      >
                        {sponsor.title}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="max-w-4xl mx-auto text-center mt-20 pt-12">
          <div className="h-px w-full bg-[#404040] mb-12"></div>
          <p className="md:text-[2vw] text-xl tracking-[0.05em] text-white">
            Thank You to All Our Sponsors
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
