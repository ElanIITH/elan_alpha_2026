"use client";

import { useState } from "react";

export default function Hello() {
  const [isDev, setIsDev] = useState(false);

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

  return (
    <div className="min-h-screen background-layers-6 text-white flex justify-center items-center">
      {/* container */}
      <div className="h-[50vw] w-[50vw] flex flex-col p-[10vw] gap-[0.3vw]">
        {/* counter container */}
        <div className="border-[0.2vw] border-[#303030] h-[80%] rounded-t-[1vw] rounded-b-[0.3vw] text-[2.7vw] flex justify-center items-center gap-[1vw]">
          <div className="border-[0.2vw] border-[#737373] box-border flex flex-col justify-start items-center gap-[1.3vw] h-[7vw] w-[4.4vw] rounded-[1vw] py-[1.3vw] overflow-y-scroll scrollbar-hide">
            <div className="h-full w-[3.2vw] border text-center">0</div>
            <div className="h-full w-[3.2vw] border text-center">1</div>
            <div className="h-full w-[3.2vw] border text-center">2</div>
            <div className="h-full w-[3.2vw] border text-center">3</div>
            <div className="h-full w-[3.2vw] border text-center">4</div>
            <div className="h-full w-[3.2vw] border text-center">5</div>
            <div className="h-full w-[3.2vw] border text-center">6</div>
            <div className="h-full w-[3.2vw] border text-center">7</div>
            <div className="h-full w-[3.2vw] border text-center">8</div>
            <div className="h-full w-[3.2vw] border text-center">9</div>
          </div>
          <div className="border-[0.2vw] border-[#737373] box-border flex flex-col justify-start items-center gap-[1.3vw] h-[7vw] w-[4.4vw] rounded-[1vw] py-[1.3vw] overflow-y-scroll scrollbar-hide">
            <div className="h-full w-[3.2vw] border text-center">0</div>
            <div className="h-full w-[3.2vw] border text-center">1</div>
            <div className="h-full w-[3.2vw] border text-center">2</div>
            <div className="h-full w-[3.2vw] border text-center">3</div>
            <div className="h-full w-[3.2vw] border text-center">4</div>
            <div className="h-full w-[3.2vw] border text-center">5</div>
            <div className="h-full w-[3.2vw] border text-center">6</div>
            <div className="h-full w-[3.2vw] border text-center">7</div>
            <div className="h-full w-[3.2vw] border text-center">8</div>
            <div className="h-full w-[3.2vw] border text-center">9</div>
          </div>
          <div className="border-[0.2vw] border-[#737373] box-border flex flex-col justify-start items-center gap-[1.3vw] h-[7vw] w-[4.4vw] rounded-[1vw] py-[1.3vw] overflow-y-scroll scrollbar-hide">
            <div className="h-full w-[3.2vw] border text-center">0</div>
            <div className="h-full w-[3.2vw] border text-center">1</div>
            <div className="h-full w-[3.2vw] border text-center">2</div>
            <div className="h-full w-[3.2vw] border text-center">3</div>
            <div className="h-full w-[3.2vw] border text-center">4</div>
            <div className="h-full w-[3.2vw] border text-center">5</div>
            <div className="h-full w-[3.2vw] border text-center">6</div>
            <div className="h-full w-[3.2vw] border text-center">7</div>
            <div className="h-full w-[3.2vw] border text-center">8</div>
            <div className="h-full w-[3.2vw] border text-center">9</div>
          </div>
          <div className="border-[0.2vw] border-[#737373] box-border flex flex-col justify-start items-center gap-[1.3vw] h-[7vw] w-[4.4vw] rounded-[1vw] py-[1.3vw] overflow-y-scroll scrollbar-hide">
            <div className="h-full w-[3.2vw] border text-center">0</div>
            <div className="h-full w-[3.2vw] border text-center">1</div>
            <div className="h-full w-[3.2vw] border text-center">2</div>
            <div className="h-full w-[3.2vw] border text-center">3</div>
            <div className="h-full w-[3.2vw] border text-center">4</div>
            <div className="h-full w-[3.2vw] border text-center">5</div>
            <div className="h-full w-[3.2vw] border text-center">6</div>
            <div className="h-full w-[3.2vw] border text-center">7</div>
            <div className="h-full w-[3.2vw] border text-center">8</div>
            <div className="h-full w-[3.2vw] border text-center">9</div>
          </div>
          <div className="border-[0.2vw] border-[#737373] box-border flex flex-col justify-start items-center gap-[1.3vw] h-[7vw] w-[4.4vw] rounded-[1vw] py-[1.3vw] overflow-y-scroll scrollbar-hide">
            <div className="h-full w-[3.2vw] border text-center">0</div>
            <div className="h-full w-[3.2vw] border text-center">1</div>
            <div className="h-full w-[3.2vw] border text-center">2</div>
            <div className="h-full w-[3.2vw] border text-center">3</div>
            <div className="h-full w-[3.2vw] border text-center">4</div>
            <div className="h-full w-[3.2vw] border text-center">5</div>
            <div className="h-full w-[3.2vw] border text-center">6</div>
            <div className="h-full w-[3.2vw] border text-center">7</div>
            <div className="h-full w-[3.2vw] border text-center">8</div>
            <div className="h-full w-[3.2vw] border text-center">9</div>
          </div>
        </div>

        {/* increment button */}
        <button className="border-[0.2vw] border-[#303030] h-[20%] rounded-t-[0.3vw] rounded-b-[1vw] cursor-pointer bg-[#AE002190] text-[2.7vw]">
          + 1
        </button>
      </div>
    </div>
  );
}
