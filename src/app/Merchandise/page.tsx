"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const shirts = [
  {
    id: 1,
    subname: "PREMIUM SWEATSHIRT",
    name: "KITSUNE BATTLECORE",
    price: "RS. 699.00",
    image: "/images/shirt1.png",
    image_org: "/images/shirt1_org.png",
    jp_text: "/images/shirt1_jp.png",
    buy_link:
      "https://thedopaminestore.in/products/iit-hyderabad-premium-oversize-vetran-samurai-copy-1?sca_ref=10010623.NVQXYZ0k2hwYBZG",
  },
  {
    id: 2,
    subname: "PREMIUM SHIRT",
    name: "SOLAR CRANE",
    price: "RS. 349.00",
    image: "/images/shirt2.png",
    image_org: "/images/shirt2_org.png",
    jp_text: "/images/shirt2_jp.png",
    buy_link:
      "https://thedopaminestore.in/products/iit-hyderabad-premium-t-shirt-the-bliss?sca_ref=10010623.NVQXYZ0k2hwYBZG",
  },
  {
    id: 3,
    subname: "OVERSIZED TEE",
    name: "GEISHA'S SERENADE",
    price: "RS. 499.00",
    image: "/images/shirt3.png",
    image_org: "/images/shirt3_org.png",
    jp_text: "/images/shirt3_jp.png",
    buy_link:
      "https://thedopaminestore.in/products/iit-hyderabad-premium-oversize-that-the-play?sca_ref=10010623.NVQXYZ0k2hwYBZG",
  },
  {
    id: 4,
    subname: "OVERSIZED TEE",
    name: "RONIN OF THE RED",
    price: "RS. 499.00",
    image: "/images/shirt4.png",
    image_org: "/images/shirt4_org.png",
    jp_text: "/images/shirt4_jp.png",
    buy_link:
      "https://thedopaminestore.in/products/iit-hyderabad-acid-wash-vetran-samurai?sca_ref=10010623.NVQXYZ0k2hwYBZG",
  },
  {
    id: 5,
    subname: "TOTE BAG",
    name: "OSAKA VENDING",
    price: "RS. 199.00",
    image: "/images/shirt5.png",
    image_org: "/images/shirt5_org.png",
    jp_text: "/images/shirt5_jp.png",
    buy_link:
      "https://thedop-aminestore.myshopify.com/products/iit-hyderabad-tote-bag-cool-it?sca_ref=10010623.NVQXYZ0k2hwYBZG",
  },
];

export default function Merchandise() {
  const [selectedShirt, setSelectedShirt] = useState(shirts[0]);
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

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

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate-id]");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [mounted]);

  // Auto-scroll carousel on mobile on mount
  useEffect(() => {
    if (!mounted || !mobileCarouselRef.current) return;

    const carousel = mobileCarouselRef.current;
    const totalWidth = carousel.scrollWidth;
    const duration = totalWidth / 150; // Faster scroll speed (pixels per second)

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
      const progress = elapsed / duration;

      if (progress < 1) {
        carousel.scrollLeft = totalWidth * progress;
        animationFrameId = requestAnimationFrame(animate);
      } else {
        carousel.scrollLeft = 0; // Reset to start
      }
    };

    const timeoutId = setTimeout(() => {
      startTime = undefined as any;
      animationFrameId = requestAnimationFrame(animate);
    }, 1); // Start after 500ms

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
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
    <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-hidden">
      <div className="background-layers-4 min-h-screen snap-start snap-always">
        {/* Desktop Layout - Original absolute positioning */}
        <div
          className={`hidden lg:block w-full h-full relative transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            data-animate-id="merch-title"
            className={`w-[30vw] h-[10vw] absolute top-[10vh] left-[2vw] transition-all duration-700 uppercase text-white md:text-[5vw] noxa-gothic ${
              visibleElements.has("merch-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Merchandise
          </div>

          <div
            data-animate-id="merch-vert"
            className={`w-[5vw] h-[10vw] absolute top-[26vh] left-[2vw] transition-all duration-700 delay-100 ${
              visibleElements.has("merch-vert") ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={selectedShirt.jp_text}
              alt="jp text"
              fill
              className="object-contain"
            />
          </div>

          {/* Selected Shirt Display */}
          <div
            data-animate-id="merch-shirt"
            className={`absolute left-[14vw] transition-all duration-700 delay-200 top-[25vh] w-[30vw] h-[30vw]`}
          >
            <div className="w-[53vw] h-[53vw] absolute left-[-22vh] top-[-22vh] z-100">
              <Image
                src="/images/fish.png"
                alt="fish"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <Image
              src={selectedShirt.image_org}
              alt={selectedShirt.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Price Display */}
          <div
            data-animate-id="merch-price"
            className={`absolute top-[84vh] left-[49vw] text-white text-[1.5vw] transition-all duration-700 delay-300 ${
              visibleElements.has("merch-price")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {selectedShirt.price}
          </div>

          {/* Shirt Subname Display */}
          <div
            data-animate-id="merch-subname"
            className={`absolute z-200 top-[82vh] left-[2.5vw] text-white text-[2.5vw] uppercase transition-all duration-700 delay-350 ${
              visibleElements.has("merch-subname")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {selectedShirt.subname}
          </div>

          {/* Shirt Name Display */}
          <div
            data-animate-id="merch-name"
            className={`absolute z-200 top-[86vh] left-[2.5vw] text-white text-[4vw] uppercase transition-all duration-700 delay-400 ${
              visibleElements.has("merch-name")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {selectedShirt.name}
          </div>

          {/* Buy Button */}
          <a
            href={selectedShirt.buy_link}
            data-animate-id="merch-buy"
            className={`z-400 w-[10vw] h-[10vw] absolute top-[82vh] left-[44vw] cursor-pointer transition-all duration-300 hover:scale-107 ${
              visibleElements.has("merch-buy")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <div className="w-full h-full relative">
              <Image
                src="/images/BUY.png"
                alt="Buy"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Shirts Grid on Right Side */}
          <div className="w-auto absolute top-[14vh] right-[3vw] grid grid-cols-2 gap-x-[1vw] gap-y-[1vw]">
            {shirts.map((shirt) => (
              <button
                key={shirt.id}
                onClick={() => setSelectedShirt(shirt)}
                className={`relative w-[15vw] h-[22vh] cursor-pointer transition-all duration-200 rounded-tl-[1.9vw] rounded-br-[1.7vw] rounded-tr-[1vw] rounded-bl-[1vw]  ${
                  selectedShirt.id === shirt.id
                    ? "border-[0.2vw] border-white"
                    : "border-[0.2vw] hover:border-white"
                }`}
              >
                <Image
                  src={shirt.image}
                  alt={shirt.name}
                  fill
                  className="object-contain"
                />
                <a href={shirt.buy_link}>
                  <div className="absolute bottom-[15vh] right-[1vh] text-white text-[1.5vw] uppercase hover:scale-110 transition-all duration-300">
                    BUY
                  </div>
                </a>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Horizontally Scrollable Carousel Strip */}
        <div
          className={`lg:hidden w-full min-h-screen flex flex-col overflow-hidden transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* MERCHANDISE Title */}
          <div className="flex justify-center items-center text-4xl text-white w-full pt-8 pb-4 mt-[5vh] noxa-gothic px-4">
            MERCHANDISE
          </div>

          {/* Carousel Container - Single Row Horizontal Scroll */}
          <div
            ref={mobileCarouselRef}
            className="flex-1 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide relative scroll-smooth p-0"
          >
            {shirts.map((shirt) => (
              <div
                key={shirt.id}
                className="shrink-0 w-[85vw] h-full flex flex-col items-center justify-center snap-center"
                style={{ marginLeft: "7.5vw", marginRight: "7.5vw" }}
              >
                {/* Image Section */}
                <a
                  href={shirt.buy_link}
                  className="flex-1 flex items-center justify-center w-full mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative w-screen h-[45vh] sm:w-[65vw] sm:h-[50vh]">
                    <Image
                      src={shirt.image_org}
                      alt={shirt.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>

                {/* Text and Buy Section */}
                <div className="w-full px-4 pb-6 flex items-end justify-between">
                  {/* Left - Name and Type */}
                  <div className="flex-1 text-left">
                    <div className="text-white text-[6vw] sm:text-sm uppercase opacity-70 mb-2 leading-tight">
                      {shirt.subname}
                    </div>
                    <div className="text-white text-[8vw] sm:text-lg font-semibold uppercase leading-tight">
                      {shirt.name}
                    </div>
                  </div>

                  {/* Right - Price and Buy */}
                  <div className="shrink-0 flex flex-col items-center gap-2 sm:gap-3 ml-4">
                    <div className="text-white text-[5vw] translate-y-[-0.3vw] sm:text-base font-semibold">
                      {shirt.price}
                    </div>
                    <a
                      href={shirt.buy_link}
                      className="w-[20vw] h-[10vw] translate-y-0 sm:w-[9vw] sm:h-[9vw] relative cursor-pointer hover:scale-110 transition-transform duration-300 active:scale-95"
                    >
                      <Image
                        src="/images/BUY.png"
                        alt="Buy"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          {/* <div className="translate-y-[-50vw] flex justify-center items-center h-10 text-white text-[8vw] opacity-60 animate-bounce gap-2">
            <span>←</span>
            <span>SCROLL</span>
            <span>→</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
