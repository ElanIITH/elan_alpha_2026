"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Accommodation() {

    useEffect(() => {
        // Change navbar to grey variant when this page loads
        const event = new CustomEvent("navbarVariantChange", { detail: "grey" });
        window.dispatchEvent(event);

        // Reset to red when leaving the page
        return () => {
            const resetEvent = new CustomEvent("navbarVariantChange", { detail: "red" });
            window.dispatchEvent(resetEvent);
        };
    }, []);

    const FAQs = [
        {
            question: "How will I know if my accommodation is confirmed?",
            answer: "Our team will reach out to you to confirm your registration within a couple days of your submission.",
        },
        {
            question: "Is there any refund policy?",
            answer: "No. Once the payment is done and your registration has been confirmed, there will be strictly no refunds.",
        },
        {
            question: "Will rooms be provided on a single basis or a shared basis?",
            answer: "Owing to the large footfall of the fest, the rooms will be provided on a shared basis (2 people per room).",
        },
        {
            question: "Will there be on-spot registrations for accommodation?",
            answer: "On-spot registrations are strictly subject to availability of rooms. So we strongly recommend registering ahead of time to avoid any inconvenience.",
        },
        {
            question: "Are vehicles allowed inside the campus?",
            answer: "Vehicles from outside are strictly prohibited inside campus premises. Buses run to-and-fro from the main gate to all the major student areas, so you need not worry about transport needs inside the campus itself.",
        },
        {
            question: "Does the accommodation fee include the food facility as well?",
            answer: "You shall be allowed free coupons to the student dining halls for the duration of your stay at the campus.",
        },
        {
            question: "Will I be allowed to leave the campus during the night?",
            answer: "No, you are not permitted to exit the campus. In case of an emergency, a permit from one of the team members is required.",
        },
        {
            question: "What are the inclusions in the accommodation charge?",
            answer: "1. A mattress, pillow and bed sheet as part of your room.<br>2. Food Coupons for all the meals in the mess for the duration of stay.<br>3. Entry for all the informal games specially arranged for people who opted for accommodation.",
        }
    ];

    return (

        <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
            {/* Front Page */}
            <div className="background-layers-6 min-h-screen snap-start snap-always">
                <div className="h-screen w-full flex items-start justify-center pt-[14vh]">
                    <div id="accommodation-top-left" className="w-[55vw] tracking-wide flex flex-col pl-[0.75vh] justify-evenly text-white uppercase gap-[0.75vh]">
                        <div id="accomodation-top-left-para1" className="flex flex-col">
                            <p className="text-[4vw] tracking-[0.06em] noxa-gothic">ACCOMMODATION</p>
                            <p className="text-[1.1vw]/5.5">We are delighted to announce that the fest is scheduled to take place from January 9th to January 11th. Designed as a comprehensive three-day celebration, the event promises a vibrant array of activities. To ensure an optimal and seamless experience, we highly recommend securing accommodation directly within the IIT Hyderabad campus. By residing on-site, you will have the unique opportunity to fully immerse yourself in the festivities and enjoy unparalleled convenience throughout the duration of the event.</p>
                        </div>
                        <div id="accomodation-top-left-para2" className="flex flex-col">
                            <p className="text-[2.25vw] tracking-[0.05em]">CHARGES</p>
                            <p className="text-[1.1vw]/5.5">The workshops will take place over the weekend, so we are offering accommodation for one night at Rs. 999.00 (Check-in at 5pm Saturday, check-out at 9:30am Sunday).</p>
                        </div>
                        <div id="accomodation-top-left-para3" className="flex flex-col">
                            <p className="text-[2.25vw] tracking-[0.05em]">Identification</p>
                            <p className="text-[1.1vw]/5.5">You will be required to produce a valid government ID at the campus gate, failure to do so will result in denial of entry to the campus. (So please make sure to carry a government ID with you.)</p>
                        </div>
                        <div id="accomodation-top-left-para4" className="flex flex-col">
                            <p className="text-[2.25vw] tracking-[0.05em]">Getting to IITH</p>
                            <p className="text-[1.1vw]/5.5">The main gate lies on the road from Patancheru to Kandi. There’s a bunch of large signs and boards, so you can’t miss it. Refer to  Google maps for the exact address. One can reach Patancheru by either bus or train. From Patancheru, one can reach the IIT main gate by either bus or auto.</p>
                        </div>
                        <div className="w-full flex justify-center mt-[5vh]">
                            <button className="group relative inline-block focus:outline-none">
                                {/* Background Shape: Skewed Rectangle */}
                                <div 
                                    className="bg-[#680C16] text-white px-[4vw]
                                                transition-all duration-300 group-hover:scale-105
                                                group-hover:bg-white group-hover:text-[#6E0216] group-hover:font-bold
                                                rounded-tr-[0.5vw] rounded-bl-[0.5vw]"
                                    style={{
                                        clipPath: "polygon(2rem 0, 100% 0, 100% calc(100% - 2.75rem), calc(100% - 2rem) 100%, 0 100%, 0 2.75rem)"
                                    }}
                                >
                                    {/* Text */}
                                    <span className="text-[2.5vw] tracking-wider uppercase drop-shadow-md">
                                        Avail Accommodation
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div id="accommodation-top-right" className="w-[40vw] relative h-[85vh]">
                        <Image 
                            src="/images/accommodation_campus_map.svg"
                            alt="Campus Map"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                        <div className="absolute top-0 right-0 w-[18%] h-[17%]">        
                            <Image 
                                src="/images/accommodation_map_japanese.png"
                                alt="Chizu(Map)" 
                                fill
                                style={{ objectFit: 'contain' }}
                            >
                            </Image>
                        </div>
                        <div className="absolute bottom-0 right-0 w-[45%] h-[35%] flex flex-col justify-evenly">        
                            <div className="w-[45%] h-[50%] self-end relative">
                                <Image 
                                    src="/images/accommodation_map_legend.png"
                                    alt="Legend"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="h-[50%] self-end">
                                <p className="text-white text-[2.1vw] uppercase -mt-[1vh]">VIEW IN GOOGLE MAP</p>
                                <p className="text-white text-[4.2vw] noxa-gothic uppercase -mt-[2.75vh]">IITH MAP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Page */}
            <div className="background-layers-5 min-h-screen snap-start snap-always">
                <div className="-scale-y-[1] h-screen w-full px-[3vw] pt-[14vh] pb-[4vh] flex flex-col items-start gap-[2vh]">
                    <p className="text-white uppercase text-[4vw] noxa-gothic">FAQ'S</p>
                    <SimpleWrapper>
                        {FAQs.map((faq, index) => (
                            <div key={index} className="flex flex-col">
                                <p className="text-[2vw] tracking-[0.04em] font-medium text-white uppercase">{faq.question}</p>
                                <p className="text-[1.1vw]/5.5 tracking-[0.02em] text-white uppercase -mt-[0.5vh]" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                            </div>
                        ))}
                    </SimpleWrapper>
                </div>
            </div>

        </div>

    );

}

function SimpleWrapper({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollUp, setCanScrollUp] = useState(false);
    const [canScrollDown, setCanScrollDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = scrollRef.current;
            if (!element) return;

            const { scrollTop, scrollHeight, clientHeight } = element;
            
            // Check if we can scroll up (not at the top)
            setCanScrollUp(scrollTop > 10);
            
            // Check if we can scroll down (not at the bottom)
            setCanScrollDown(scrollTop + clientHeight < scrollHeight - 10);
        };

        const element = scrollRef.current;
        if (element) {
            // Initial check
            handleScroll();
            // Add scroll listener
            element.addEventListener('scroll', handleScroll);
            // Check on resize
            window.addEventListener('resize', handleScroll);
            // Recheck after a short delay
            setTimeout(handleScroll, 100);
            
            return () => {
                element.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            };
        }
    }, [children]);

    // Build the mask-image dynamically based on scroll state
    const getMaskImage = () => {
        const parts = [];
        
        if (canScrollUp && canScrollDown) {
            // Both fades
            return 'linear-gradient(to bottom, transparent 0%, black 5vh, black calc(100% - 5vh), transparent 100%)';
        } else if (canScrollUp && !canScrollDown) {
            // Only top fade
            return 'linear-gradient(to bottom, transparent 0%, black 5vh, black 100%)';
        } else if (!canScrollUp && canScrollDown) {
            // Only bottom fade
            return 'linear-gradient(to bottom, black 0%, black calc(100% - 5vh), transparent 100%)';
        } else {
            // No fades
            return 'none';
        }
    };

    const maskStyle = {
        maskImage: getMaskImage(),
        WebkitMaskImage: getMaskImage(),
    };

    return (
        <div 
            ref={scrollRef} 
            className="w-full flex-1 overflow-y-auto flex flex-col gap-[1vh] pb-[4vh] scrollbar-hide transition-all duration-500"
            style={maskStyle}
        >
            {children}
        </div>
    );
}