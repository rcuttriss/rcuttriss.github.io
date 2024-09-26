import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import chessImg from "@images/chess.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faGithub } from "@fortawesome/free-brands-svg-icons";
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
            src={chessImg}
            alt="uci"
            className="aspect-square h-5/6 w-auto"
          />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex gap-4 text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Chess Client</span>
          <a href="https://github.com/rcuttriss/my_java_chess" className="">
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
            Built chess client using Java. Implementing OOP concepts such as
            Inheritance, Polymorphism, and Encapsulation.
          </li>
          <li>Used JFrame and Swing libraries to build user interface.</li>
          <li>Used Maven for project and dependency management.</li>
          <li>Used JUnit for unit testing.</li>
        </ul>
        <div
          id="experienceBadges"
          className="col-span-1 row-span-1 flex flex-col justify-start gap-2 px-10"
        >
          <span className="text-xl">Technologies Used:</span>
          <div id="badgesHouse" className="flex gap-2">
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>Java</span>
            </Badge>
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>JFrame</span>
            </Badge>
            <Badge className="bg-coolgrey text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>Maven</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
