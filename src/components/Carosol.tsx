import React from "react";
import bhuvan from "@/assets/bhuvan1.png";
import home from "@/assets/home.png";
import tcu from "@/assets/dashboardtcu.png";
import nike from "@/assets/nike.png";
import wog from "@/assets/worthofgeeks.png";
import uniteio from "@/assets/uniteio.png";
import waytogo from "@/assets/waytogo.png";
import cofound from "@/assets/COFoundIo.png";
import git from "@/assets/git.svg";
import Image from "next/image";
const Carosol = () => {
  const logos = [cofound, waytogo, uniteio, nike, wog, home, bhuvan];
  return (
    <div>
      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                className=" object-cover w-[300px] h-[200px]"
                width={300}
                height={300}
                alt={"project image"}
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll  items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                className=" object-cover w-[300px] h-[200px]"
                width={300}
                height={300}
                alt={"project image"}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carosol;
