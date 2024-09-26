import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import rpsImg from "@images/rps.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// shadcn components imports
import { Badge } from "@/components/ui/badge";

function UCIPage({}: Props) {
  return (
    <div className="relative z-10 h-2/3 w-2/3 border-2 border-coolgrey">
      <div className="grid h-full w-full grid-cols-2 grid-rows-[12%_auto_20%] gap-6 px-12 py-12">
        <div
          id="projectImg"
          className="col-span-1 row-span-3 flex aspect-square h-full w-full items-center justify-center overflow-hidden"
        >
          <Image
            src={rpsImg}
            alt="uci"
            className="aspect-square h-5/6 w-5/6 bg-contain bg-center bg-no-repeat"
          />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex items-center gap-4 text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Rock Paper Scissors</span>
          <a
            href="https://github.com/rcuttriss/betterRPS"
            className=""
            target="_blank"
          >
            <FontAwesomeIcon
              target="_blank"
              icon={faGithub}
              className="h-10 w-10 hover:text-white"
            ></FontAwesomeIcon>
          </a>
        </div>
        <ul
          id="experienceDesc"
          className="col-span-1 row-span-1 flex list-disc flex-col items-start gap-2 overflow-y-auto px-12 text-lg"
        >
          <li>
            A simple game of Rock, Paper, Scissors. Has a lobby system where a
            player can create a lobby and join a lobby. The player can choose
            between Rock, Paper, or Scissors.
          </li>
          <li>
            Uses SocketIO, a WebSocket library, for real time communication.
          </li>
          <li>Uses basic HTML, CSS, and JavaScript for front-end.</li>
        </ul>
        <div
          id="experienceBadges"
          className="col-span-1 row-span-1 flex flex-col justify-start gap-2 px-10"
        >
          <span className="text-xl">Technologies Used:</span>
          <div id="badgesHouse" className="flex gap-2">
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faHtml5} className="mr-2 h-6 w-6" />
              <span>HTML</span>
            </Badge>
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faCss3} className="mr-2 h-6 w-6" />
              <span>CSS</span>
            </Badge>
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faJs} className="mr-2 h-6 w-6" />
              <span>JavaScript</span>
            </Badge>
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faPlug} className="mr-2 h-6 w-6" />
              <span>SocketIO</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
