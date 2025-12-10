"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Competitions() {
  const [filter, setFilter] = useState("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const competitions = [
    {
      id: 1,
      title: "ENIGMA CTF",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      prize: "₹20,000",
      contact: "Gouresh Dusa - +919833646382",
      deadline: "December 20, 2025",
      date: "January 5, 2026",
      description:
        "Enigma CTF, presented by Elan & nVision at IIT Hyderabad, is an online cybersecurity competition open to coders of all skill levels. Designed to test abilities through complex challenges, the event offers participants a platform to sharpen their skills, collaborate with teams, and compete for recognition in the coding domain.",
      registerLink:
        "https://unstop.com/p/enigma-ctf-elan-nvision-2026-elan-nvision-iit-hyderabad-1600393",
    },
    {
      id: 2,
      title: "GAME JAM",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      prize: "₹20,000",
      contact: "Himangshu Sarma - +918638887938",
      deadline: "December 25, 2025",
      date: "January 1, 2026",
      description:
        "Game Jam is a competitive event where participants design and develop innovative games from concept to prototype. It tests creativity, programming skills, design thinking, and storytelling. Contestants can work solo or in teams to build engaging, functional games that showcase technical expertise, gameplay mechanics, and user experience.",
      registerLink:
        "https://unstop.com/p/game-jam-elan-nvision-2026-elan-nvision-1599888",
    },
    {
      id: 3,
      title: "DRONE RACING",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      prize: "₹50,000",
      contact: "Sai Akhila - +919346210594",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "The Drone Racing Competition challenges teams to design, build, and race high-performance drones through an obstacle course, completing payload pickup and delivery tasks in the shortest time. It tests speed, precision, and strategy.",
      registerLink:
        "https://unstop.com/p/drone-racing-elan-nvision-2026-elan-nvision-iit-hyderabad-1603635",
    },
    {
      id: 4,
      title: "MAZE EXPLORER",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      prize: "₹50,000",
      contact: "Sai Akhila - +919346210594",
      deadline: "December 20, 2025",
      date: "January 11, 2026",
      description:
        "Maze Explorer is an autonomous robotics challenge where teams build bots to navigate an 8×8 maze without manual control. The event focuses on intelligent path planning, sensing, obstacle avoidance, and efficient decision-making. Bots must independently analyze the maze and reach the target cell with accuracy, speed, and optimized navigation logic.",
      registerLink:
        "https://unstop.com/p/maze-explorer-elan-nvision-2026-elan-nvision-iit-hyderabad-1603640",
    },
    {
      id: 5,
      title: "ROBO SOCCER",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
      prize: "₹50,000",
      contact: "Bhavana Kasula - +917386632132",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "The Robot Football Tournament challenges participants to design and build robots capable of playing football autonomously or through remote control. Teams will compete in a knockout style tournament where the goal is simple, outscore the opponent using strategy, speed, and accuracy.",
      registerLink:
        "https://unstop.com/p/robosoccer-elan-nvision-2026-elan-nvision-iit-hyderabad-1600395",
    },
    {
      id: 6,
      title: "BLOCKCHAIN HACKATHON",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      prize: "₹20,000",
      contact: "Shiva Chethan - +919482156304",
      deadline: "December 25, 2025",
      date: "January 6, 2026",
      description:
        "Web Odyssey is a hackathon designed for developers, innovators, and creators to explore the decentralized landscape. Participants will build functional decentralized applications (dApps) on specified blockchain protocols, contributing to the evolution of Web3 technologies.",
      registerLink:
        "https://unstop.com/p/web-odyssey-elan-nvision-2026-elan-nvision-iit-hyderabad-1600399",
    },
    {
      id: 7,
      title: "INNOV-AI-TION",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      prize: "₹50,000",
      contact: "Gouresh Dusa - +919833646382",
      deadline: "December 20, 2025",
      date: "January 10, 2026",
      description:
        "Get ready to ignite your coding skills at Innov-AI-tion, presented by Elan & nVision, IIT Hyderabad! This online coding challenge is designed to push your boundaries and challenge you to create innovative solutions. Teams will collaborate to solve real-world problems and showcase their coding prowess.",
      registerLink:
        "https://unstop.com/p/innov-ai-tion-elan-nvision-2026-elan-nvision-iit-hyderabad-1599891",
    },
    {
      id: 8,
      title: "DEV DUEL",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      prize: "₹40,000",
      contact: "Himangshu Sarma - +918638887938",
      deadline: "December 20, 2025",
      date: "January 10, 2026",
      description:
        "Dev Duel is an intensive development hackathon where participants collaborate to design, code, and deploy innovative solutions to real-world problems. It challenges technical proficiency, creativity, and teamwork under time constraints, fostering rapid prototyping and problem-solving skills.",
      registerLink:
        "https://unstop.com/p/dev-duel-elan-nvision-2026-elan-nvision-1599873",
    },
    {
      id: 9,
      title: "ASTRO PHOTOGRAPHY",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&h=600&fit=crop",
      prize: "₹10,000",
      contact: "Bhavana Kasula - +917386632132",
      deadline: "December 25, 2025",
      date: "January 5, 2026",
      description:
        "Participants will submit astrophotographs highlighting celestial objects such as galaxies, nebulae, planets, and star clusters. The competition encourages creativity, precision, and technical expertise in capturing the mysteries of space.",
      registerLink:
        "https://unstop.com/p/astro-photography-elan-nvision-2026-elan-nvision-iit-hyderabad-1600401",
    },
    {
      id: 10,
      title: "BGMI",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
      prize: "₹30,000",
      contact: "Pavankumar Dalve - +918180974182",
      deadline: "December 25, 2025",
      date: "January 10, 2026",
      description:
        "Gear up for the BGMI Battle Royale Tournament at Elan & nVision 2026! Compete in the online qualifiers, showcase your skills, dominate the lobby, and fight for a spot in the grand finals.",
      registerLink:
        "https://unstop.com/p/bgmi-elan-nvision-2026-elan-nvision-iit-hyderabad-1600404",
    },
    {
      id: 11,
      title: "WAVEFORM WARS",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
      prize: "₹15,000",
      contact: "Karthikay Chandana - +919901194321",
      deadline: "December 20, 2025",
      date: "January 10, 2026",
      description:
        "Sound surrounds us, from the subtle hum of machines to the resonance of musical notes. Digital Signal Processing (DSP) empowers us to analyze, shape, and enhance these sounds through the lens of mathematics and computation.",
      registerLink:
        "https://unstop.com/p/waveform-wars-elan-nvision-2026-elan-nvision-iit-hyderabad-1600405",
    },
    {
      id: 12,
      title: "SIMULATION RUSH",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      prize: "₹10,000",
      contact: "Kalyani Cheguri - +919618578009",
      deadline: "December 25, 2025",
      date: "January 6, 2026",
      description:
        "Physics Simulation is a technical competition where participants simulate a real-world physical phenomenon using code and relevant computational tools. The event tests scientific understanding, coding ability, and simulation design skills.",
      registerLink:
        "https://unstop.com/p/physics-simulation-elan-nvision-2026-elan-nvision-iit-hyderabad-1600685",
    },
    {
      id: 13,
      title: "REAL CRICKET",
      category: "TECH",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop",
      prize: "₹20,000",
      contact: "Pavankumar Dalve - +918180974812",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "Get ready to compete in the Real Cricket 1v1 Knockout Tournament, where players face off in fast-paced 5-over T20 matches. Each match will determine who advances to the next round, making every ball count.",
      registerLink:
        "https://unstop.com/p/real-cricket-elan-nvision-2026-elan-nvision-iit-hyderabad-1600406",
    },
    {
      id: 14,
      title: "NRITYANJALI",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1599140849279-1014532882fe?w=800&h=600&fit=crop",
      prize: "₹30,000",
      contact: "Sai Akhila - +919346210594",
      deadline: "December 25, 2025",
      date: "January 9, 2026",
      description:
        "Immerse yourself in the enchanting world of traditional Indian dance at Nrityanjali. Dancers will showcase classical dance forms infused with expressive storytelling, adorned in elaborate costumes that celebrate cultural richness and artistic finesse.",
      registerLink:
        "https://unstop.com/p/nrityanjali-elan-nvision-2026-elan-nvision-iit-hyderabad-1599647",
    },
    {
      id: 15,
      title: "VIVID MOTION",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop",
      prize: "₹20,000",
      contact: "Kalyani Cheguri - +919618578009",
      deadline: "December 25, 2025",
      date: "January 10, 2026",
      description:
        "Vivid Motion is a high-energy dance competition that highlights individuality, creativity, and stage presence. Participants perform solo and showcase their unique style through choreography.",
      registerLink:
        "https://unstop.com/p/break-free-solo-elan-nvision-2026-elan-nvision-iit-hyderabad-1600402",
    },
    {
      id: 16,
      title: "BREAKFREE",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop",
      prize: "₹45,000",
      contact: "Gouresh Dusa - +919833646382",
      deadline: "December 25, 2025",
      date: "January 10, 2026",
      description:
        "This offline cultural competition is your stage to showcase your team's dance talent and creativity. This opportunity is designed to ignite your passion for dance and provide a platform to connect with fellow enthusiasts.",
      registerLink:
        "https://unstop.com/p/breakfree-elan-nvision-2026-elan-nvision-iit-hyderabad-1599826",
    },
    {
      id: 17,
      title: "CLAY MOSAIC",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      prize: "₹10,000",
      contact: "Sai Akhila - +919346210594",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "Clay Mosaic Challenge is a creative sculpting event where each team member designs one clay segment that combines to form a unified mosaic based on a theme revealed at the venue. The event emphasizes creativity, teamwork, artistic expression, and coherent storytelling through collaborative clay art.",
      registerLink:
        "https://unstop.com/p/clay-mossaic-elan-nvision-2026-elan-nvision-iit-hyderabad-1603642",
    },
    {
      id: 18,
      title: "FILMFARE FIESTA",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      prize: "₹30,000",
      contact: "Pavankumar Dalve - +918180974182",
      deadline: "December 25, 2025",
      date: "January 10, 2026",
      description:
        "Elan & nVision invites you to create a compelling short film! Embrace the chance to bring your creative vision to life. This event is your stage to demonstrate skills in cinematography, creative direction, and creative thinking.",
      registerLink:
        "https://unstop.com/p/short-film-elan-nvision-2026-elan-nvision-1599812",
    },
    {
      id: 19,
      title: "BATTLE OF BANDS",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      prize: "₹50,000",
      contact: "Pavankumar Dalve - +918180974182",
      deadline: "December 25, 2025",
      date: "January 9, 2026",
      description:
        "Get ready to ignite the stage at the Battle of Bands, presented by Elan & nVision! This is your chance to showcase your musical talent. Gather your team and prepare to create unforgettable performances.",
      registerLink:
        "https://unstop.com/p/battle-of-bands-elan-nvision-2026-elan-nvision-1599811",
    },
    {
      id: 20,
      title: "CAMPUS IDOL",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
      prize: "₹40,000",
      contact: "Himangshu Sarma - +918638887938",
      deadline: "December 25, 2025",
      date: "January 10, 2026",
      description:
        "Campus Idol is a solo singing competition designed to showcase the diverse musical talents of students. We celebrate a wide range of submissions from cover songs and original compositions to novel arrangements and variations of existing material.",
      registerLink:
        "https://unstop.com/p/campus-idol-elan-nvision-2026-iit-hyderabad-1599650",
    },
    {
      id: 21,
      title: "FACE PAINTING",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
      prize: "₹10,000",
      contact: "Kalyani Cheguri - +919618578009",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "Face Painting is a creative event where artists turn a person's face into a colourful design. It is a fun activity where both the artist and the model work together to create an attractive artwork.",
      registerLink:
        "https://unstop.com/p/face-painting-elan-nvision-2026-elan-nvision-iit-hyderabad-1600392",
    },
    {
      id: 22,
      title: "CHRONICLES IN CLICKS",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
      prize: "₹25,000",
      contact: "Shiva Chethan - +919482156304",
      deadline: "December 20, 2025",
      date: "January 10, 2026",
      description:
        "Chronicles in Clicks is a group photography storytelling competition that challenges participants to narrate compelling stories through images. Teams will receive a common theme to capture a series of 6–12 photographs that flow together like chapters in a story.",
      registerLink:
        "https://unstop.com/p/chronicles-in-clicks-elan-nvision-2026-elan-nvision-iit-hyderabad-1600389",
    },
    {
      id: 23,
      title: "SYNC'D SOULS",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop",
      prize: "₹35,000",
      contact: "Bhavana Kasula - +917386632132",
      deadline: "December 25, 2025",
      date: "January 10, 2026",
      description:
        "When rhythm meets connection, magic unfolds. Sync'd Souls celebrates dancers who move as one, where steps, gestures, and emotions merge into perfect harmony. It is not just a performance, but an unspoken dialogue of energy, passion, and coordination.",
      registerLink:
        "https://unstop.com/p/synced-souls-elan-nvision-2026-elan-nvision-iit-hyderabad-1600387",
    },
    {
      id: 24,
      title: "GLITZ & GLAMOUR",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea1f1bb8?w=800&h=600&fit=crop",
      prize: "₹50,000",
      contact: "Gouresh Dusa - +919833646382",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "Glitz & Glamour celebrates creativity, confidence, and self-expression on the runway. This fashion showcase invites participants to transform concepts into couture, bringing stories to life through styling, character, and performance.",
      registerLink:
        "https://unstop.com/p/glitz-and-glamour-elan-nvision-2026-elan-nvision-iit-hyderabad-1599845",
    },
    {
      id: 25,
      title: "CURTAIN CALL",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&h=600&fit=crop",
      prize: "₹30,000",
      contact: "Himangshu Sarma - +918638887938",
      deadline: "December 25, 2025",
      date: "January 11, 2026",
      description:
        "Curtain Call is a dynamic theatrical event designed to test participants' proficiency in acting, scriptwriting, dialogue delivery, and audience engagement. Teams collaborate to conceptualize, script, and perform an original skit live on stage.",
      registerLink:
        "https://unstop.com/p/curtain-call-elan-nvision-2026-elan-nvision-iit-hyderabad-1599808",
    },
    {
      id: 26,
      title: "TALES IN A FRAME",
      category: "CULTURAL",
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
      prize: "₹25,000",
      contact: "Shiva Chethan - +919482156304",
      deadline: "December 20, 2025",
      date: "January 10, 2026",
      description:
        "Tales in a Frame is a group photography competition that celebrates creativity and the art of observation. Participants will be challenged to capture photographs based on themes that will be announced before the event.",
      registerLink:
        "https://unstop.com/p/tales-in-a-frame-elan-nvision-2026-elan-nvision-1599622",
    },
  ];

  const filteredCompetitions =
    filter === "ALL"
      ? competitions
      : competitions.filter((comp) => comp.category === filter);

  const totalItems = filteredCompetitions.length;
  const normalizedIndex =
    ((currentIndex % totalItems) + totalItems) % totalItems;
  const currentCompetition = filteredCompetitions[normalizedIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // When we reach the boundaries, instantly reset to middle section
    if (currentIndex <= -totalItems || currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex(normalizedIndex);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentIndex(0);
  };

  return (
    <div
      className={`h-screen w-full relative overflow-hidden transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/black_bg.jpg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 text-white h-full flex flex-col justify-center px-[5vw]">
        <div
          className={`flex justify-between items-center mt-[20vh] mb-[4vh] pl-[4vw] pr-[2vw] transition-all duration-1000 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="noxa-gothic text-[5vw] uppercase tracking-wide">
            Competitions
          </div>

          <div className="flex gap-[2vw] text-[1.5vw] uppercase tracking-wide">
            <button
              onClick={() => handleFilterChange("ALL")}
              className={`transition-colors cursor-pointer ${
                filter === "ALL" ? "text-[#6E0216]" : "hover:text-[#6E0216]"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => handleFilterChange("TECH")}
              className={`transition-colors cursor-pointer ${
                filter === "TECH" ? "text-[#6E0216]" : "hover:text-[#6E0216]"
              }`}
            >
              TECH
            </button>
            <button
              onClick={() => handleFilterChange("CULTURAL")}
              className={`transition-colors cursor-pointer ${
                filter === "CULTURAL"
                  ? "text-[#6E0216]"
                  : "hover:text-[#6E0216]"
              }`}
            >
              CULTURAL
            </button>
          </div>
        </div>

        <div className="relative flex items-start justify-center gap-[3vw] px-[2vw] flex-1 overflow-hidden">
          <div
            className={`flex items-center gap-[5vw] w-full max-w-[90vw] pl-[2vw] transition-all duration-1000 delay-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative w-[30vw] h-[50vh] shrink-0 overflow-hidden">
              <div
                className={`flex flex-col gap-[2vh] ${
                  isTransitioning
                    ? "transition-transform duration-500 ease-out"
                    : ""
                }`}
                style={{
                  transform: `translateY(-${
                    (currentIndex + totalItems) * 52
                  }vh)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {[
                  ...filteredCompetitions,
                  ...filteredCompetitions,
                  ...filteredCompetitions,
                ].map((competition, index) => {
                  const arrayIndex = Math.floor(index / totalItems);
                  const itemIndex = index % totalItems;
                  const adjustedCurrentIndex = currentIndex + totalItems;
                  const isActive = index === adjustedCurrentIndex;

                  return (
                    <div
                      key={`${competition.id}-${arrayIndex}-${itemIndex}`}
                      className={`relative w-[30vw] h-[50vh] shrink-0 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <Image
                        src={competition.image}
                        alt={competition.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-[3vh] items-center justify-center">
              <button
                onClick={handlePrevious}
                className="text-[#6E0216] hover:text-[#8E0216] transition-colors cursor-pointer"
                aria-label="Previous competition"
              >
                <ChevronUp size={60} strokeWidth={2.5} />
              </button>

              <div className="text-center text-[1.4vw] tracking-wide uppercase">
                <span className="text-[#6E0216]">
                  {normalizedIndex + 1} / {totalItems}
                </span>
              </div>

              <button
                onClick={handleNext}
                className="text-[#6E0216] hover:text-[#8E0216] transition-colors cursor-pointer"
                aria-label="Next competition"
              >
                <ChevronDown size={60} strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-start items-start text-left">
              <div className="noxa-gothic w-full text-[3.3vw] uppercase text-white tracking-wide">
                {currentCompetition.title}
              </div>

              <div className="w-full text-[1.3vw] tracking-wide uppercase">
                <p>
                  <span className="text-[#6E0216]">Contact / POC:</span>{" "}
                  {currentCompetition.contact}
                </p>
                <p>
                  <span className="text-[#6E0216]">Prize Pool:</span>{" "}
                  {currentCompetition.prize}
                </p>
                <p>
                  <span className="text-[#6E0216]">Registration Deadline:</span>{" "}
                  {currentCompetition.deadline}
                </p>
                <p>
                  <span className="text-[#6E0216]">Dates / Rounds:</span>{" "}
                  {currentCompetition.date}
                </p>
              </div>

              <div className="w-full pt-[1vh]">
                <h3 className="text-[1.6vw] uppercase text-[#6E0216] tracking-wide">
                  Description
                </h3>
                <p className="w-full text-[1.2vw] leading-relaxed tracking-wide uppercase">
                  {currentCompetition.description}
                </p>
              </div>

              <a
                href={currentCompetition.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6E0216] hover:bg-[#8E0216] transition-colors px-[2.5vw] py-[1.5vh] text-[1.2vw] uppercase rounded mt-[1.5vh] tracking-wide"
              >
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
