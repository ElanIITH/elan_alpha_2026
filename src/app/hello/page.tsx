"use client";

import { useState, useEffect } from "react";

export default function Hello() {
  const [isDev, setIsDev] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.clear();

    console.log(
      `%c███████╗██╗      █████╗ ███╗   ██╗
%c██╔════╝██║     ██╔══██╗████╗  ██║
%c█████╗  ██║     ███████║██╔██╗ ██║
%c██╔══╝  ██║     ██╔══██║██║╚██╗██║
%c███████╗███████╗██║  ██║██║ ╚████║

%c███╗   ██╗██╗   ██╗██╗███████╗██╗ ██████╗ ███╗   ██╗
%c████╗  ██║██║   ██║██║██╔════╝██║██╔═══██╗████╗  ██║
%c██╔██╗ ██║██║   ██║██║███████╗██║██║   ██║██╔██╗ ██║
%c██║╚██╗██║╚██╗ ██╔╝██║╚════██║██║██║   ██║██║╚██╗██║
%c██║ ╚████║ ╚████╔╝ ██║███████║██║╚██████╔╝██║ ╚████║`,
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 14px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;",
      "color: #ffffff; font-size: 13px; line-height: 1.2;"
    );
  }, []);

  // Convert count to 4 digits array [ones, tens, hundreds, thousands]
  const digits = String(count).padStart(4, "0").split("").reverse().map(Number);

  const handleIncrement = () => {
    if (count < 9999) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  // Check for 1000 milestone
  // useEffect(() => {
  //   if (count === 1000) {
  //     alert("Bye");
  //   }
  // }, [count]);

  // useEffect(() => {
  //   console.log("Counter:", count);
  // }, [count]);

  if (!isDev) {
    return (
      <div className="min-h-screen background-layers-6 text-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Work in Progress</h1>
          <p className="text-2xl text-gray-400 noxa-gothic">Coming Soon</p>
        </div>
      </div>
    );
  }

  // Show "Get a job" message when count reaches 1000
  if (count === 1000) {
    return (
      <div className="min-h-screen background-layers-6 text-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold">Get a job</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen background-layers-6 text-white">
      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 md:gap-8 px-4">
        {/* Encouraging Message */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Really? You're doing this? Going for a 1000?
          </h2>
          <p className="text-sm md:text-lg text-gray-400">
            {count < 250 && "Oh look, someone with time to waste... 🙄"}
            {count >= 250 &&
              count < 500 &&
              "Wow, you're actually still clicking. Impressive dedication to nothing. 😒"}
            {count >= 500 &&
              count < 750 &&
              "Halfway to your meaningless goal. Your parents would be so proud. 🤦"}
            {count >= 750 &&
              count < 900 &&
              "You're really committed to this, huh? There's still time to do something useful. ⏰"}
            {count >= 900 &&
              count < 1000 &&
              "Almost there! Then you can go waste time somewhere else. 🎊"}
          </p>
        </div>

        {/* Display */}
        <div className="flex gap-2 md:gap-4 text-4xl md:text-6xl font-mono">
          {/* Column 4 - Thousands (c4) */}
          <div className="w-12 h-12 md:w-20 md:h-20 overflow-hidden border-2 border-gray-600 rounded-lg">
            <div
              className="text-center leading-[1.17em] transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateY(calc(-1.17em * ${digits[3]}))`,
              }}
            >
              0<br />
              1<br />
              2<br />
              3<br />
              4<br />
              5<br />
              6<br />
              7<br />
              8<br />
              9<br />
            </div>
          </div>

          {/* Column 3 - Hundreds (c3) */}
          <div className="w-12 h-12 md:w-20 md:h-20 overflow-hidden border-2 border-gray-600 rounded-lg">
            <div
              className="text-center leading-[1.17em] transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateY(calc(-1.17em * ${digits[2]}))`,
              }}
            >
              0<br />
              1<br />
              2<br />
              3<br />
              4<br />
              5<br />
              6<br />
              7<br />
              8<br />
              9<br />
            </div>
          </div>

          {/* Column 2 - Tens (c2) */}
          <div className="w-12 h-12 md:w-20 md:h-20 overflow-hidden border-2 border-gray-600 rounded-lg">
            <div
              className="text-center leading-[1.17em] transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateY(calc(-1.17em * ${digits[1]}))`,
              }}
            >
              0<br />
              1<br />
              2<br />
              3<br />
              4<br />
              5<br />
              6<br />
              7<br />
              8<br />
              9<br />
            </div>
          </div>

          {/* Column 1 - Ones (c1) */}
          <div className="w-12 h-12 md:w-20 md:h-20 overflow-hidden border-2 border-gray-600 rounded-lg">
            <div
              className="text-center leading-[1.17em] transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateY(calc(-1.17em * ${digits[0]}))`,
              }}
            >
              0<br />
              1<br />
              2<br />
              3<br />
              4<br />
              5<br />
              6<br />
              7<br />
              8<br />
              9<br />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleIncrement}
            disabled={count === 1000}
            className="w-32 h-12 md:w-40 md:h-16 bg-[#6E0216] hover:bg-[#8E0216] active:bg-[#5E0216] disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg md:rounded-[1vw] flex items-center justify-center text-xl md:text-2xl transition-colors"
          >
            + 1
          </button>
        </div>
      </div>
    </div>
  );
}
