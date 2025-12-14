"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Competitions() {
  const [filter, setFilter] = useState("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const competitions = [
    {
      id: 1,
      title: "ENIGMA CTF",
      category: "TECH",
      image: "/techy_comp/CTF.jpg",
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
      image: "/techy_comp/GameJam.jpg",
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
      image: "/techy_comp/DroneRacing.jpeg",
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
      image: "/techy_comp/MazeExplorer.png",
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
      image: "/techy_comp/RoboSocceer.jpg",
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
      image: "/techy_comp/BlockChain.png",
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
      image: "/techy_comp/GenAi.png",
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
      image: "/techy_comp/DevHackathon.png",
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
      image: "/techy_comp/AstroPhotography.webp",
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
      image: "/techy_comp/BGMI.jpeg",
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
      image: "/techy_comp/SignalProcessing.jpg",
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
      image: "/techy_comp/PhysicsSimulation.jpg",
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
      image: "/techy_comp/RealCricketNew.png",
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
      image: "/culti_comp/Nrityanjali.JPG",
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
      image: "/culti_comp/Breakfree Solo.jpg",
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
      image: "/culti_comp/Breakfree Group.jpg",
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
      image: "/culti_comp/Clay Art.jpeg",
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
      image: "/culti_comp/Short FIlm.jpg",
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
      image: "/culti_comp/BattleOfBands.jpg",
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
      image: "/culti_comp/SoloSinging.JPG",
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
      image: "/culti_comp/FacePainting.jpg",
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
      image: "/culti_comp/PhotoStory.jpeg",
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
      image: "/culti_comp/Breakfree Duo.webp",
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
      image: "/culti_comp/Fashion Show.jpeg",
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
      image: "/culti_comp/Curatain Call.webp",
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
      image: "/culti_comp/PhotoChallenge.webp",
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

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentIndex(0);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/red_bg.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Title and Filters */}
        <div className="pt-[10vh] pb-[4vh] px-[4vw]">
          <div
            className={`transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <h1 className="noxa-gothic text-[8vw] uppercase tracking-wider mb-8">
              Competitions
            </h1>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex gap-12 text-[1.2vw] uppercase tracking-wider transition-all duration-1000 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={() => handleFilterChange("ALL")}
              className={`relative pb-2 transition-all duration-300 ${
                filter === "ALL" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              ALL
              {filter === "ALL" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => handleFilterChange("TECH")}
              className={`relative pb-2 transition-all duration-300 ${
                filter === "TECH" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              TECH
              {filter === "TECH" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => handleFilterChange("CULTURAL")}
              className={`relative pb-2 transition-all duration-300 ${
                filter === "CULTURAL" ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              CULTURAL
              {filter === "CULTURAL" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
              )}
            </button>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex-1 flex px-[4vw] pb-[4vh] gap-[4vw]">
          {/* Left Column - Stacked Cards with Navigation */}
          <div
            className={`flex items-center gap-[2vw] transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Stacked Cards */}
            <div className="relative w-[28vw] h-[60vh]">
              {[-1, 0, 1].map((offset) => {
                const index = normalizedIndex + offset;
                const wrappedIndex = ((index % totalItems) + totalItems) % totalItems;
                const competition = filteredCompetitions[wrappedIndex];

                if (!competition) return null;

                const isActive = offset === 0;
                const zIndex = isActive ? 30 : offset === -1 ? 20 : 10;
                const translateY = offset * 25;

                return (
                  <div
                    key={`card-${offset}-${wrappedIndex}`}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 rounded-lg overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "w-[28vw] h-[50vh] shadow-2xl"
                        : "w-[26vw] h-[20vh] opacity-50"
                    }`}
                    style={{
                      transform: `translate(-50%, calc(-50% + ${translateY}vh))`,
                      zIndex: zIndex,
                    }}
                  >
                    <Image
                      src={competition.image}
                      alt={competition.title}
                      fill
                      className="object-cover"
                      sizes="28vw"
                      priority={isActive}
                    />
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/60" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col items-center gap-[2vh]">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 group"
                aria-label="Previous"
              >
                <ChevronUp size={24} className="text-white/70 group-hover:text-white" />
              </button>

              {/* Dots */}
              <div className="flex flex-col gap-2 py-2">
                {filteredCompetitions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`rounded-full transition-all duration-300 ${
                      idx === normalizedIndex
                        ? "bg-white w-2.5 h-2.5"
                        : "bg-white/30 w-2 h-2"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 group"
                aria-label="Next"
              >
                <ChevronDown size={24} className="text-white/70 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Right Column - Competition Details */}
          <div
            className={`flex-1 flex flex-col justify-center transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Title */}
            <h2 className="noxa-gothic text-[4.5vw] uppercase tracking-wider mb-8 leading-none">
              {currentCompetition.title}
            </h2>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-8">
              <div>
                <p className="text-[0.85vw] text-white/50 uppercase tracking-widest mb-2">
                  CONTACT / POC
                </p>
                <p className="text-[1vw] text-white">
                  {currentCompetition.contact}
                </p>
              </div>
              <div>
                <p className="text-[0.85vw] text-white/50 uppercase tracking-widest mb-2">
                  PRIZE POOL
                </p>
                <p className="text-[1.2vw] text-[#AE0021] font-semibold">
                  {currentCompetition.prize}
                </p>
              </div>
              <div>
                <p className="text-[0.85vw] text-white/50 uppercase tracking-widest mb-2">
                  REGISTRATION DEADLINE
                </p>
                <p className="text-[1vw] text-white">
                  {currentCompetition.deadline}
                </p>
              </div>
              <div>
                <p className="text-[0.85vw] text-white/50 uppercase tracking-widest mb-2">
                  DATES / ROUNDS
                </p>
                <p className="text-[1vw] text-white">
                  {currentCompetition.date}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-[0.85vw] text-white/50 uppercase tracking-widest mb-3">
                DESCRIPTION
              </p>
              <p className="text-[1vw] text-white/80 leading-relaxed max-w-[90%]">
                {currentCompetition.description}
              </p>
            </div>

            {/* Register Button */}
            <Link
              href={currentCompetition.registerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 border-2 border-white text-white text-[0.9vw] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                REGISTER HERE →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
