import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import blackjackImg from "@images/blackjack.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faReact,
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
            src={blackjackImg}
            alt="uci"
            className="aspect-square h-5/6 w-5/6 bg-contain bg-center bg-no-repeat"
          />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex items-center gap-4 text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Blackjack</span>
          <a
            href="https://github.com/rcuttriss/blackjack"
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
          <li>One of my first projects in React. A simple blackjack game.</li>
          <li>
            Taught me the basics of state management, props, side effects.
          </li>
          <li>
            Fell into some common pitfalls such as prop drilling, which I would
            later learn is a bad practice. I think making these rudimentary
            mistakes allowed me to learn and ultimately improve.
          </li>
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
              <FontAwesomeIcon icon={faReact} className="mr-2 h-6 w-6" />
              <span>React</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
