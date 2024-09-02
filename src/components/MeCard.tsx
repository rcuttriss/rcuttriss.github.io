import React from "react";
import meImg from "@images/definiteltyme.jpg";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

type Props = {};

function MeCard({}: Props) {
  return (
    <div
      id="glass"
      className="border-l-opacity-10 border-r-opacity-30 absolute flex h-2/3 w-2/3 items-center justify-center rounded-sm border-l-[1px] border-r-[1px] border-l-gray-200 border-r-gray-200 border-t-gray-200 border-opacity-20 bg-purple-800 bg-opacity-10 drop-shadow-rxl backdrop-blur-lg"
    >
      <div className="bg-opacity-1000 grid h-4/5 w-4/5 grid-cols-60/40 grid-rows-1 items-center justify-center justify-items-center gap-8 rounded-2xl bg-slate-800 bg-clip-text">
        <div className="flex h-full w-full flex-col justify-center rounded-2xl px-8">
          <div className="flex gap-4 text-3xl">
            <span>&#9655;</span>
            <span>
              Hi, my name is{" "}
              <span className="via-green-500-500 from-codegreen to-codegreen animate-background-pan bg-gradient-to-r via-green-100 bg-[length:200%] bg-clip-text text-transparent">
                Robby
              </span>
            </span>
          </div>
          <div className="my-4 flex text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            fugiat aperiam quaerat nostrum dolorem minima voluptates amet
            corrupti illum quasi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur, consectetur!
          </div>
          <Button className="bg-accentorange hover:text-accentlavender mt-4 flex w-1/2 items-center justify-center gap-2 self-start text-black">
            <FontAwesomeIcon icon={faDownload} className="h-5" />
            <span>Download Resume (.pdf)</span>
          </Button>
        </div>
        <div
          className="h-full w-full rounded-2xl border-2 border-purple-900 border-opacity-40 bg-cover bg-meImg bg-no-repeat"
          style={{ backgroundImage: `url(${meImg.src})` }}
        ></div>
      </div>
    </div>
  );
}

export default MeCard;
