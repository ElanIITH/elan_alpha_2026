"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const shirts = [
  {
    id: 1,
    subname: "PREMIUM SWEATSHIRT",
    name: "KITSUNE BATTLECORE",
    price: "RS. 699.00",
    image: "/images/shirt1.png",
    image_org: "/images/shirt1_org.png",
  },
  {
    id: 2,
    subname: "PREMIUM SHIRT",
    name: "SOLAR CRANE",
    price: "RS. 349.00",
    image: "/images/shirt2.png",
    image_org: "/images/shirt2_org.png",
  },
  {
    id: 3,
    subname: "OVERSIZED TEE",
    name: "GEISHA'S SERENADE",
    price: "RS. 499.00",
    image: "/images/shirt3.png",
    image_org: "/images/shirt3_org.png",
  },
  {
    id: 4,
    subname: "OVERSIZED TEE",
    name: "RONIN OF THE RED",
    price: "RS. 499.00",
    image: "/images/shirt4.png",
    image_org: "/images/shirt4_org.png",
  },
  {
    id: 5,
    subname: "TOTE BAG",
    name: "OSAKA VENDING",
    price: "RS. 199.00",
    image: "/images/shirt5.png",
    image_org: "/images/shirt5_org.png",
  },
];

export default function Merchandise() {
  const [selectedShirt, setSelectedShirt] = useState(shirts[0]);
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

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

  return (
    <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="background-layers-4 min-h-screen snap-start snap-always">
        {/* Desktop Layout - Original absolute positioning */}
        <div
          className={`hidden lg:block w-full h-full relative transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            data-animate-id="merch-title"
            className={`w-[30vw] h-[10vw] absolute top-[10vh] left-[2vw] transition-all duration-700 ${
              visibleElements.has("merch-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <Image
              src="/images/MERCHANDISE.svg"
              alt="MERCHANDISE"
              fill
              className="object-contain"
            />
          </div>

          <div
            data-animate-id="merch-vert"
            className={`w-[55vw] h-[10vw] absolute top-[26vh] left-0 translate-x-[-24vw] transition-all duration-700 delay-100 ${
              visibleElements.has("merch-vert") ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/images/merchandisever.svg"
              alt="separator"
              fill
              className="object-contain"
            />
          </div>

          {/* Selected Shirt Display */}
          <div
            data-animate-id="merch-shirt"
            className={`absolute left-[15vw] transition-all duration-700 delay-200 ${
              selectedShirt.id === 5
                ? "top-[30vh] w-[30vw] h-[30vw]"
                : "top-[20vh] w-[30vw] h-[40vw]"
            } ${
              visibleElements.has("merch-shirt")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
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
            className={`absolute top-[82vh] left-[2.5vw] text-white text-[2.5vw] uppercase transition-all duration-700 delay-350 ${
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
            className={`absolute top-[86vh] left-[2.5vw] text-white text-[4vw] uppercase transition-all duration-700 delay-400 ${
              visibleElements.has("merch-name")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {selectedShirt.name}
          </div>

          {/* Buy Button */}
          <Link
            href="#"
            data-animate-id="merch-buy"
            className={`w-[10vw] h-[10vw] absolute top-[82vh] left-[44vw] cursor-pointer transition-all duration-700 delay-450 hover:scale-90 ${
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
          </Link>

          {/* Shirts Grid on Right Side */}
          <div className="w-[40vw] absolute top-[14vh] right-[5vw] grid grid-cols-2 gap-x-0 gap-y-[2vw]">
            {shirts.map((shirt) => (
              <button
                key={shirt.id}
                onClick={() => setSelectedShirt(shirt)}
                className={`relative w-full h-[22vh] cursor-pointer transition-all duration-200 ${
                  selectedShirt.id === shirt.id
                    ? "ring-2 ring-red-600 scale-105"
                    : "hover:scale-105"
                }`}
              >
                <Image
                  src={shirt.image}
                  alt={shirt.name}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-[8.5vw] right-[3vw] text-white text-[1.5vw] uppercase">
                  BUY
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Scrollable content */}
        <div
          className={`lg:hidden w-full min-h-screen overflow-y-auto pb-20 transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full px-4 py-6 sm:px-6 md:px-8">
            {/* MERCHANDISE Title */}
            <div className="w-[60vw] sm:w-[50vw] md:w-[40vw] h-[15vw] sm:h-[12vw] md:h-[10vw] mx-auto mb-8">
              <div className="relative w-full h-full">
                <Image
                  src="/images/MERCHANDISE.svg"
                  alt="MERCHANDISE"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Selected Shirt Display */}
            <div className="flex flex-col items-center w-full mb-8">
              <div
                className={`relative ${
                  selectedShirt.id === 5
                    ? "w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw]"
                    : "w-[80vw] h-[80vw] sm:w-[70vw] sm:h-[70vw] md:w-[60vw] md:h-[60vw]"
                } mx-auto mb-6`}
              >
                <Image
                  src={selectedShirt.image_org}
                  alt={selectedShirt.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Shirt Details */}
              <div className="text-center w-full px-4">
                <div className="text-white text-base sm:text-lg md:text-xl uppercase font-semibold opacity-80">
                  {selectedShirt.subname}
                </div>

                <div className="text-white text-xl sm:text-2xl md:text-3xl uppercase font-bold mt-2">
                  {selectedShirt.name}
                </div>

                <div className="text-white text-lg sm:text-xl md:text-2xl mt-3 font-semibold">
                  {selectedShirt.price}
                </div>

                {/* Buy Button */}
                <Link href="#" className="inline-block mt-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative cursor-pointer transition-transform duration-200 hover:scale-90 active:scale-95">
                    <Image
                      src="/images/BUY.png"
                      alt="Buy"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Shirts Grid */}
            <div className="w-full mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-2xl mx-auto">
                {shirts.map((shirt) => (
                  <button
                    key={shirt.id}
                    onClick={() => setSelectedShirt(shirt)}
                    className={`relative w-full aspect-square cursor-pointer transition-all duration-200 
                                   rounded-lg overflow-hidden ${
                                     selectedShirt.id === shirt.id
                                       ? "ring-2 ring-red-600 scale-105 shadow-lg shadow-red-600/50"
                                       : "hover:scale-105 ring-1 ring-white/20"
                                   }`}
                  >
                    <Image
                      src={shirt.image}
                      alt={shirt.name}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
