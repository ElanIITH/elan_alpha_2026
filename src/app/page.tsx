export const metadata = {
  title: "Elan&nVision | Home",
};

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="background-layers-1 min-h-screen snap-start snap-always">
        <div className="w-full h-full relative">
          <div className="w-[55vw] h-[10vw] absolute top-[76vh] left-[2vw]">
            <Image
              src="/images/elan_home_title.svg"
              alt="separator"
              fill
              className="object-contain"
            />
          </div>
          <div className="pl-[2vw] w-[42vw] h-auto absolute top-[45vh] left-[2vw] text-white flex flex-col items-end">
            <Link href={"#"}>
              <div className="text-[3.5vw] hover:text-[#AE0021] transition-colors">
                REGISTER NOW
              </div>
            </Link>
            <div className="text-[1.4vw] uppercase text-justify tracking-wide">
              Elan&nVision, IIT Hyderabad's annual techno-cultural fest,
              celebrates the stories, music, memories, and innovation that bring
              us together. Over three vibrant days, it showcases the best of
              student life through thrilling competitions, dynamic performances,
              and high-energy concerts.
            </div>
          </div>

          <div className="w-auto h-auto absolute top-[64vh] right-0 text-white flex justify-end">
            <div className="flex flex-col justify-end">
              <div className="text-[5.5vw] text-right">JAN 9-11</div>
              <div className="uppercase text-[1.4vw] tracking-wide">
                Countdown : 20 days 23:59:59
              </div>
            </div>
            <div className="w-[10vw] h-[15vw] relative mb-[1vh]">
              <Image
                src="/images/jp_ronin.svg"
                alt="jp text"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="background-layers-2 min-h-screen text-white snap-start snap-always">
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center gap-[3vh]">
          <div className="w-[45vw] h-[25vw] relative">
            <Image
              src="/images/last_ronin.svg"
              alt="separator"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[1.4vw] w-[40vw] h-auto uppercase text-justify">
            Beneath the blood-red moon rises a lone warrior, the final spark of
            a legendary era. The drums of fate thunder through forgotten
            temples, awakening the spirit of honor, courage, and unbreakable
            will. His blade is more than steel. it's a promise carved in battle.
            Every step pushes back the darkness, every strike writes history. A
            samurai's legacy ignites once more, where loyalty becomes fire,
            destiny becomes war, and legends return to reclaim the night.
          </div>
        </div>
      </div>
    </div>
  );
}
