"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Competitions() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeCompetitionIndex, setActiveCompetitionIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const categories: { [key: string]: typeof competitions } = {
    ALL: competitions,
    TECH: competitions.filter((comp) => comp.category === "TECH"),
    CULTURAL: competitions.filter((comp) => comp.category === "CULTURAL"),
  };

  const currentCompetitions = categories[activeCategory] || competitions;
  const activeCompetition = currentCompetitions[activeCompetitionIndex];

  // Create infinite loop by tripling the array
  const infiniteCompetitions = [
    ...currentCompetitions,
    ...currentCompetitions,
    ...currentCompetitions,
  ];

  // Handle infinite scroll loop
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let indexUpdateTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollTop = carousel.scrollTop;
      const cardHeight = cardRefs.current[0]?.offsetHeight || 0;
      if (cardHeight === 0) return;

      const gap = 24; // 1.5rem = 24px
      const totalCardHeight = cardHeight + gap;
      const containerHeight = carousel.clientHeight;
      const offset = (containerHeight - cardHeight) / 2;

      const sectionHeight = currentCompetitions.length * totalCardHeight;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (indexUpdateTimeout) {
        clearTimeout(indexUpdateTimeout);
      }

      // Snap to nearest card after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        const adjustedScrollTop = scrollTop - offset;
        const targetIndex = Math.round(adjustedScrollTop / totalCardHeight);
        const snapPosition = targetIndex * totalCardHeight + offset;

        if (Math.abs(scrollTop - snapPosition) > 5) {
          carousel.scrollTo({
            top: snapPosition,
            behavior: "smooth",
          });
        }

        // Update active index after snap completes
        indexUpdateTimeout = setTimeout(() => {
          const finalScrollTop = carousel.scrollTop;
          const finalAdjustedScrollTop = finalScrollTop - offset;
          const newIndex =
            Math.round(finalAdjustedScrollTop / totalCardHeight) %
            currentCompetitions.length;
          const normalizedIndex =
            ((newIndex % currentCompetitions.length) +
              currentCompetitions.length) %
            currentCompetitions.length;

          if (normalizedIndex !== activeCompetitionIndex) {
            setActiveCompetitionIndex(normalizedIndex);
          }
        }, 100);
      }, 150);

      // Loop to middle section when reaching top or bottom
      if (scrollTop < sectionHeight * 0.5) {
        // Near top - jump to middle section
        isScrollingRef.current = true;
        carousel.scrollTop = scrollTop + sectionHeight;
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      } else if (scrollTop > sectionHeight * 2.5) {
        // Near bottom - jump to middle section
        isScrollingRef.current = true;
        carousel.scrollTop = scrollTop - sectionHeight;
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 50);
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (indexUpdateTimeout) {
        clearTimeout(indexUpdateTimeout);
      }
    };
  }, [activeCompetitionIndex, currentCompetitions.length]);

  // Initialize scroll position to middle section (without animation)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || currentCompetitions.length === 0) return;

    // Use setTimeout to ensure cards are rendered first
    const timer = setTimeout(() => {
      const cardHeight = cardRefs.current[0]?.offsetHeight || 0;
      if (cardHeight === 0) return;

      const gap = 24; // 1.5rem = 24px
      const totalCardHeight = cardHeight + gap;
      const sectionHeight = currentCompetitions.length * totalCardHeight;

      // Temporarily disable smooth scrolling
      const originalBehavior = carousel.style.scrollBehavior;
      carousel.style.scrollBehavior = "auto";

      // Calculate offset to center the first card with half cards visible above/below
      const containerHeight = carousel.clientHeight;
      const offset = (containerHeight - cardHeight) / 2;

      // Start at the middle section with centered first card
      carousel.scrollTop = sectionHeight + offset;

      // Restore smooth scrolling after a brief delay
      setTimeout(() => {
        carousel.style.scrollBehavior = originalBehavior;
      }, 50);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory, currentCompetitions.length]);

  // Scroll to specific card
  const scrollToCard = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardHeight = cardRefs.current[0]?.offsetHeight || 0;
    const gap = 24; // 1.5rem = 24px
    const totalCardHeight = cardHeight + gap;
    const containerHeight = carousel.clientHeight;
    const offset = (containerHeight - cardHeight) / 2;
    const sectionHeight = currentCompetitions.length * totalCardHeight;

    // Always scroll to the middle section + the target index with centering offset
    const targetScroll = sectionHeight + index * totalCardHeight + offset;

    carousel.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setActiveCompetitionIndex(index);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveCompetitionIndex(0);
  };

  // Handle arrow navigation with infinite loop
  const handleArrowClick = (direction: "up" | "down") => {
    const newIndex =
      direction === "up"
        ? (activeCompetitionIndex - 1 + currentCompetitions.length) %
          currentCompetitions.length
        : (activeCompetitionIndex + 1) % currentCompetitions.length;

    scrollToCard(newIndex);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-[12vh] px-[6vw] w-full">
      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-[#1a1a1a] pb-[3vh] mb-[5vh] mt-[4vh]">
        <h1 className="text-[4vw] tracking-[0.06em] noxa-gothic uppercase">
          Competitions
        </h1>

        {/* Category Pills */}
        <div className="flex gap-0">
          <button
            onClick={() => handleCategoryChange("ALL")}
            className={`px-6 py-2.5 text-[0.75rem] font-medium tracking-[1.5px] border-l border-[#1a1a1a] transition-all duration-250 relative uppercase ${
              activeCategory === "ALL"
                ? "bg-[#0f0f0f] text-white"
                : "bg-transparent text-[#4a4a4a] hover:bg-[#0f0f0f] hover:text-[#8a8a8a]"
            }`}
            style={{ borderRadius: 0 }}
          >
            ALL
            {activeCategory === "ALL" && (
              <span className="absolute bottom-[-3vh] left-0 w-full h-px bg-white" />
            )}
          </button>
          <button
            onClick={() => handleCategoryChange("TECH")}
            className={`px-6 py-2.5 text-[0.75rem] font-medium tracking-[1.5px] border-l border-[#1a1a1a] transition-all duration-250 relative uppercase ${
              activeCategory === "TECH"
                ? "bg-[#0f0f0f] text-white"
                : "bg-transparent text-[#4a4a4a] hover:bg-[#0f0f0f] hover:text-[#8a8a8a]"
            }`}
            style={{ borderRadius: 0 }}
          >
            TECH
            {activeCategory === "TECH" && (
              <span className="absolute bottom-[-3vh] left-0 w-full h-px bg-white" />
            )}
          </button>
          <button
            onClick={() => handleCategoryChange("CULTURAL")}
            className={`px-6 py-2.5 text-[0.75rem] font-medium tracking-[1.5px] border-l border-[#1a1a1a] transition-all duration-250 relative uppercase ${
              activeCategory === "CULTURAL"
                ? "bg-[#0f0f0f] text-white"
                : "bg-transparent text-[#4a4a4a] hover:bg-[#0f0f0f] hover:text-[#8a8a8a]"
            }`}
            style={{ borderRadius: 0 }}
          >
            CULTURAL
            {activeCategory === "CULTURAL" && (
              <span className="absolute bottom-[-3vh] left-0 w-full h-px bg-white" />
            )}
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex gap-[5vw] h-[76vh]">
        {/* Left Side - Scrollable Card Carousel */}
        <div className="flex gap-6 flex-[0_0_40%] relative">
          <div
            ref={carouselRef}
            className="flex-1 h-full overflow-y-scroll overflow-x-hidden p-0 relative scrollbar-none"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "y mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {infiniteCompetitions.map((competition, index) => {
              const actualIndex = index % currentCompetitions.length;
              const isActive =
                actualIndex === activeCompetitionIndex &&
                index >= currentCompetitions.length &&
                index < currentCompetitions.length * 2;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => scrollToCard(actualIndex)}
                  className={`group relative w-full h-[50vh] mb-6 overflow-hidden cursor-pointer select-none transition-all duration-500 ${
                    isActive 
                      ? "scale-[1.02]" 
                      : "scale-100 hover:scale-[1.01]"
                  }`}
                  style={{
                    scrollSnapAlign: "center",
                  }}
                >
                  {/* Main Card Container with Clipped Corners */}
                  <div
                    className={`absolute inset-0 bg-[#0a0a0a] transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-90"
                    }`}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 2rem) 0, 100% 2rem, 100% 100%, 2rem 100%, 0 calc(100% - 2rem))",
                    }}
                  >
                    {/* Image */}
                    <Image
                      src={competition.image}
                      alt={competition.title}
                      fill
                      className="object-cover select-none transition-all duration-700"
                      style={{
                        filter: isActive
                          ? "brightness(1.1) contrast(1.25) saturate(1.2)"
                          : "brightness(0.7) contrast(1.1) saturate(0.8)",
                        userSelect: "none",
                      }}
                      draggable={false}
                      sizes="40vw"
                    />
                    
                    {/* Gradient Overlays */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.8) 100%)",
                        opacity: isActive ? 0.7 : 0.9,
                      }}
                    />
                    
                    {/* Top Left Corner Accent */}
                    <div
                      className={`absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 transition-all duration-500 ${
                        isActive ? "border-white opacity-100" : "border-white/30 opacity-0"
                      }`}
                    />
                    
                    {/* Bottom Right Corner Accent */}
                    <div
                      className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 transition-all duration-500 ${
                        isActive ? "border-white opacity-100" : "border-white/30 opacity-0"
                      }`}
                    />
                    
                    {/* Competition Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div
                        className={`transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 group-hover:opacity-80 group-hover:translate-y-0"
                        }`}
                      >
                        <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-1">
                          {competition.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-white/80 uppercase tracking-wide">
                            {competition.category}
                          </span>
                          <span className="text-white/60">•</span>
                          <span className="text-white/80 font-semibold">
                            {competition.prize}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Active Indicator Bar */}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white via-white/80 to-transparent" />
                    )}
                  </div>
                  
                  {/* Outer Glow Effect for Active Card */}
                  {isActive && (
                    <div
                      className="absolute inset-0 -z-10 blur-xl opacity-50"
                      style={{
                        background: "radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Scroll Arrows */}
          <div className="flex flex-col items-center justify-center gap-6">
            <button
              onClick={() => handleArrowClick("up")}
              className="group w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#3a3a3a] text-white text-xl cursor-pointer transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-110 active:scale-95 rounded-full"
              aria-label="Previous"
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
            </button>
            <button
              onClick={() => handleArrowClick("down")}
              className="group w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#3a3a3a] text-white text-xl cursor-pointer transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-110 active:scale-95 rounded-full"
              aria-label="Next"
            >
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
          </div>
        </div>

        {/* Right Side - Competition Details */}
        <div
          className="flex-1 flex flex-col overflow-y-auto py-8"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#2a2a2a transparent",
          }}
        >
          <div
            key={activeCompetition?.title}
            className="flex flex-col gap-8"
            style={{ animation: "contentFadeIn 0.3s ease-in-out" }}
          >
            <h2 className="text-[5.5vw] tracking-[0.05em] uppercase mb-4">
              {activeCompetition?.title || "Select Competition"}
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-[1.5vw] tracking-[0.05em] uppercase text-[#6a6a6a]">
                  CONTACT / POC
                </div>
                <div className="text-[1vw]/5.5 tracking-wide uppercase text-white">
                  {activeCompetition?.contact || "TBA"}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[1.5vw] tracking-[0.05em] uppercase text-[#6a6a6a]">
                  PRIZE POOL
                </div>
                <div className="text-[1vw]/5.5 tracking-wide uppercase text-white">
                  {activeCompetition?.prize || "TBA"}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[1.5vw] tracking-[0.05em] uppercase text-[#6a6a6a]">
                  REGISTRATION DEADLINE
                </div>
                <div className="text-[1vw]/5.5 tracking-wide uppercase text-white">
                  {activeCompetition?.deadline || "TBA"}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[1.5vw] tracking-[0.05em] uppercase text-[#6a6a6a]">
                  DATES / ROUNDS
                </div>
                <div className="text-[1vw]/5.5 tracking-wide uppercase text-white">
                  {activeCompetition?.date || "TBA"}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[1.5vw] tracking-[0.05em] uppercase text-[#6a6a6a]">
                DESCRIPTION
              </div>
              <p className="text-[1vw]/5.5 tracking-wide uppercase text-[#8a8a8a]">
                {activeCompetition?.description ||
                  "Choose a competition from the list to view details."}
              </p>
            </div>

            {activeCompetition?.registerLink && (
              <Link
                href={activeCompetition.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-base font-normal tracking-[0.5px] mt-6 no-underline cursor-pointer transition-all duration-300 hover:text-[#cccccc]"
              >
                <span className="underline" style={{ textUnderlineOffset: "4px" }}>
                  Register Here
                </span>
                <span className="no-underline text-sm transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes contentFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
