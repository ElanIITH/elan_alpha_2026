export const metadata = {
  title: "Elan&nVision | Home",
};

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="background-layers">
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
    </div>
  );
}
