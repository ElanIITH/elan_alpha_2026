'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const shirts = [
  { id: 1, subname: "PREMIUM SWEATSHIRT", name: "KITSUNE BATTLECORE", price: "RS. 699.00", image: "/images/shirt1.png",image_org:"/images/shirt1_org.png" },
  { id: 2, subname: "PREMIUM SHIRT", name: "SOLAR CRANE", price: "RS. 349.00", image: "/images/shirt2.png",image_org:"/images/shirt2_org.png" },
  { id: 3, subname: "OVERSIZED TEE", name: "GEISHA'S SERENADE", price: "RS. 499.00", image: "/images/shirt3.png",image_org:"/images/shirt3_org.png" },
  { id: 4, subname: "OVERSIZED TEE", name: "RONIN OF THE RED", price: "RS. 499.00", image: "/images/shirt4.png",image_org:"/images/shirt4_org.png"},
  { id: 5, subname: "TOTE BAG", name: "OSAKA VENDING", price: "RS. 199.00", image: "/images/shirt5.png",image_org:"/images/shirt5_org.png" },
];

export default function Merchandise() {
  const [selectedShirt, setSelectedShirt] = useState(shirts[0]);

  return (
     <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="background-layers-4 min-h-screen snap-start snap-always">
        {/* Desktop Layout - Original absolute positioning */}
        <div className="hidden lg:block w-full h-full relative">
               <div className="w-[30vw] h-[10vw] absolute top-[10vh] left-[2vw]">
                 <Image
                   src="/images/MERCHANDISE.svg"
                   alt="MERCHANDISE"
                   fill
                   className="object-contain"
                 />
               </div>
               
               <div className="w-[55vw] h-[10vw] absolute top-[26vh] left-0 translate-x-[-24vw]">
                 <Image
                   src="/images/merchandisever.svg"
                   alt="separator"
                   fill
                   className="object-contain"
                 />
               </div>

               {/* Selected Shirt Display */}
               <div className={`absolute left-[15vw] ${selectedShirt.id === 5 ? 'top-[30vh] w-[30vw] h-[30vw]' : 'top-[20vh] w-[30vw] h-[40vw]'}`}>
                 <Image
                   src={selectedShirt.image_org}
                   alt={selectedShirt.name}
                   fill
                   className="object-contain"
                 />
               </div>

               {/* Price Display */}
               <div className="absolute top-[84vh] left-[49vw] text-white text-[1.5vw]">
                 {selectedShirt.price}
               </div>

               {/* Shirt Subname Display */}
               <div className="absolute top-[82vh] left-[2.5vw] text-white text-[2.5vw] uppercase">
                 {selectedShirt.subname}
               </div>

               {/* Shirt Name Display */}
               <div className="absolute top-[86vh] left-[2.5vw] text-white text-[4vw] uppercase">
                 {selectedShirt.name}
               </div>

               {/* Buy Button */}
               <Link href="#" className="w-[10vw] h-[10vw] absolute top-[82vh] left-[44vw] cursor-pointer transition-transform duration-200 hover:scale-90">
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
               <div className="w-[40vw] absolute top-[14vh] right-[5vw] grid grid-cols-2 gap-x-[0vw] gap-y-[2vw]">
                 {shirts.map((shirt) => (
                   <button
                     key={shirt.id}
                     onClick={() => setSelectedShirt(shirt)}
                     className={`relative w-full h-[22vh] cursor-pointer transition-all duration-200 ${
                       selectedShirt.id === shirt.id ? 'ring-2 ring-red-600 scale-105' : 'hover:scale-105'
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
        <div className="lg:hidden w-full min-h-screen overflow-y-auto pb-20">
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
                 <div className={`relative ${
                   selectedShirt.id === 5 
                     ? 'w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw]' 
                     : 'w-[80vw] h-[80vw] sm:w-[70vw] sm:h-[70vw] md:w-[60vw] md:h-[60vw]'
                 } mx-auto mb-6`}>
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
                           ? 'ring-2 ring-red-600 scale-105 shadow-lg shadow-red-600/50' 
                           : 'hover:scale-105 ring-1 ring-white/20'
                       }`}
                     >
                       <Image
                         src={shirt.image}
                         alt={shirt.name}
                         fill
                         className="object-contain p-2"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
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
