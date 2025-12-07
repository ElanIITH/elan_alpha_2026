export const metadata = {
  title: "Elan&nVision | Home",
};

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="background-layers-1 min-h-screen snap-start snap-always">
        <div className="w-full h-full relative">
          <div className="w-[55vw] h-[10vw] absolute top-[76vh] left-[2vw]">
            <Image
              src="/images/elan_home_title.svg"
              alt="separator"
              fill
              className="object-contain"
            />
          </div>
          <div className="pl-[2vw] w-[42vw] h-auto absolute top-[45vh] left-[2vw] text-white flex flex-col items-end">
            <Link href={"#"}>
              <div className="text-[3.5vw] hover:text-[#AE0021] transition-colors">
                REGISTER NOW
              </div>
            </Link>
            <div className="text-[1.4vw] uppercase text-justify tracking-wide">
              Elan&nVision, IIT Hyderabad's annual techno-cultural fest,
              celebrates the stories, music, memories, and innovation that bring
              us together. Over three vibrant days, it showcases the best of
              student life through thrilling competitions, dynamic performances,
              and high-energy concerts.
            </div>
          </div>

          <div className="w-auto h-auto absolute top-[64vh] right-0 text-white flex justify-end">
            <div className="flex flex-col justify-end">
              <div className="text-[5.5vw] text-right">JAN 9-11</div>
              <div className="uppercase text-[1.4vw] tracking-wide">
                Countdown : 20 days 23:59:59
              </div>
            </div>
            <div className="w-[10vw] h-[15vw] relative mb-[1vh]">
              <Image
                src="/images/jp_ronin.svg"
                alt="jp text"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="background-layers-2 min-h-screen text-white snap-start snap-always">
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center gap-[3vh]">
          <div className="w-[45vw] h-[25vw] relative">
            <Image
              src="/images/last_ronin.svg"
              alt="separator"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[1.4vw] w-[40vw] h-auto uppercase text-justify">
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
      {/* section-3: Contact Us */}
      <div className="background-layers-3 text-white snap-start snap-always relative" style={{ width: "100vw", height: "100vh", paddingTop: "8vh" }}>
        <div className="w-full h-full relative flex flex-col items-center justify-start">
          
          {/* Title */}
          <h1 className="font-normal tracking-[0.15em] uppercase" style={{ fontSize: "4vw", marginBottom: "2vh" }}>
            Contact Us
          </h1>
          
          {/* Reach Us - Red subtitle */}
          <div className="uppercase tracking-[0.1em]" style={{ fontSize: "1.5vw", marginBottom: "4vh", color: "#AE0021" }}>
            reach us
          </div>
          
          {/* Contact Cards Grid - 3 Columns */}
          <div className="grid grid-cols-3 relative" style={{ gap: "1.5vw", width: "80vw", marginBottom: "3vh", paddingLeft: "10vw", paddingRight: "10vw" }}>
            
            {/* Left Column */}
            <div className="flex flex-col" style={{ gap: "1.5vw" }}>
              {/* Sai Charan Card */}
              <div className="uppercase leading-[1.5] text-left" style={{ fontSize: "1.1vw" }}>
                <div>Sai Charan Ajarapu</div>
                <div>Sponsorship Head</div>
                <div>elan.nvision.sponsorship@sa.iith.ac.in</div>
                <div>+91 88320 28101</div>
              </div>
              
              {/* Harsha Card */}
              <div className="uppercase leading-[1.5] text-left" style={{ fontSize: "1.1vw" }}>
                <div>Harsha Vardhan Pulavarthi</div>
                <div>Sponsorship Head</div>
                <div>elan.nvision.sponsorship@sa.iith.ac.in</div>
                <div>+91 94911 87225</div>
              </div>
            </div>
            
            {/* Middle Column */}
            <div className="flex flex-col" style={{ gap: "1.5vw" }}>
              {/* Tanmay Card */}
              <div className="uppercase leading-[1.5] text-left" style={{ fontSize: "1.1vw" }}>
                <div>Tasmay Vishwasrao</div>
                <div>Overall Co-Ordinator</div>
                <div>elan.nvision.oc@sa.iith.ac.in</div>
                <div>+91 99236 26782</div>
              </div>
              
              {/* Syed Mishaal Card */}
              <div className="uppercase leading-[1.5] text-left" style={{ fontSize: "1.1vw" }}>
                <div>Syed Mishaal</div>
                <div>Overall Co-Ordinator</div>
                <div>elan.nvision.oc@sa.iith.ac.in</div>
                <div>+91 73183 95805</div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col" style={{ gap: "1.5vw" }}>
              {/* Saket Card */}
              <div className="uppercase leading-[1.5] text-left" style={{ fontSize: "1.1vw" }}>
                <div>Saket Kashtap</div>
                <div>PR & Outreach Head</div>
                <div>elan.nvision.outreach@sa.iith.ac.in</div>
                <div>+91 92341 68717</div>
              </div>
              
              {/* Naishadha Card */}
              <div className="uppercase leading-[1.5] text-left" style={{ fontSize: "1.1vw" }}>
                <div>Vaishadha Voruganti</div>
                <div>PR & Outreach Head</div>
                <div>elan.nvision.outreach@sa.iith.ac.in</div>
                <div>+91 93900 27710</div>
              </div>
            </div>
          </div>
          
          {/* For Business Related Queries - Red text */}
          <div className="translate-y-[7vh] uppercase tracking-[0.1em]" style={{ fontSize: "1.1vw", marginBottom: "2vh", color: "#AE0021" }}>
            for business related to elan's
          </div>
          
          {/* Main Email */}
          <div className="translate-y-[4vh] uppercase tracking-[0.08em] text-center" style={{ fontSize: "2.3vw", marginBottom: "0vh" }}>
            elan.nvision@sa.iith.ac.in
          </div>
          
          {/* ELAN&NVISION Logo */}
          <div className="relative flex-1 flex items-center justify-center" style={{ width: "50vw", height: "12vh" }}>
            <Image
              src="/images/elan_home_title.svg"
              alt="elan nvision logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Social Icons - Positioned at Bottom */}
          <div className="absolute bottom-[3vh] left-0 right-0 flex justify-center gap-[4vw]">
            {/* Facebook */}
            <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: "#999999" }}>
              <svg style={{ width: "2vw", height: "2vw" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: "#999999" }}>
              <svg style={{ width: "2vw", height: "2vw" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: "#999999" }}>
              <svg style={{ width: "2vw", height: "2vw" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: "#999999" }}>
              <svg style={{ width: "2vw", height: "2vw" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.694l-5.248-6.856-6.009 6.856h-3.31l7.73-8.835L.424 2.25h6.854l4.822 6.359 5.534-6.359zM17.002 20.331h1.834L6.822 4.169H4.881l12.121 16.162z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: "#999999" }}>
              <svg style={{ width: "2vw", height: "2vw" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
