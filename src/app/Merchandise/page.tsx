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
        <div className="w-full h-full relative">
               <div className="w-[30vw] h-[10vw] absolute top-[10vh] left-[2vw]">
                 <Image
                   src="/images/MERCHANDISE.svg"
                   alt="separator"
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
               <div className={`absolute left-[15vw] ${selectedShirt.id === 5 ? 'top-[30vh] w-[30vw] h-[30vw] ' : 'top-[20vh] w-[30vw] h-[40vw]'}`}>
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
               <Link href="#" className="w-[10vw] h-[10vw] absolute top-[82vh] left-[68vw] translate-x-[-24vw] cursor-pointer transition-transform duration-200 hover:scale-90">
                 <div className="w-full h-full relative">
                   <Image
                     src="/images/BUY.png"
                     alt="separator"
                     fill
                     className="object-contain"
                   />
                 </div>
               </Link>

               {/* Shirts Grid on Right Side */}
               <div className="w-[28vw] h-auto absolute top-[10vh] right-[2vw] grid grid-cols-2 gap-[0.8vw]">
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
                     
                   </button>
                 ))}
               </div>

         </div>
     </div>
    </div>
  );
}
