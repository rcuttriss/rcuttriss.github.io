import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import stockImg from "@images/stocks.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
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
    <div className="relative z-10 h-5/6 w-5/6 border-2 border-coolgrey lg:h-2/3 lg:w-2/3">
      <div className="grid h-full w-full gap-6 px-4 py-8 md:grid-cols-2 md:grid-rows-[20%_auto_20%] md:px-12 md:py-12">
        <div
          id="projectImg"
          className="col-span-1 row-span-3 flex aspect-square h-full w-full items-center justify-center overflow-hidden"
        >
          <Image
            src={stockImg}
            alt="uci"
            className="aspect-square w-5/6 bg-contain bg-center bg-no-repeat"
          />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex gap-4 text-lg md:text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Real time (fake) stock trading</span>
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
          className="col-span-1 row-span-1 flex list-disc flex-col items-center gap-2 overflow-y-auto px-12 text-lg"
        >
          <li>Uses real-time stock data APIs to simulate trading.</li>
          <li>
            Has an in memory money management system that makes use of React
            states to keep track of the users money.
          </li>
          <li>
            Has an in memory stock management system that makes use of React
            states to keep track of the users stock portfolio. Calculates
            potential profit and losses in real-time by comparing the portfolio
            with the current Stock price.
          </li>
        </ul>
        <div
          id="experienceBadges"
          className="col-span-1 row-span-1 flex h-full w-full flex-col justify-start gap-2 overflow-hidden px-10"
        >
          <span className="text-xl">Technologies Used:</span>
          <div id="badgesHouse" className="flex flex-wrap gap-2">
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
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faPlug} className="mr-2 h-6 w-6" />
              <span>SocketIO</span>
            </Badge>
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faMoneyBill} className="mr-2 h-6 w-6" />
              <span>Fibbhub Stock API</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
