import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import walmartImg from "@images/walmart.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faPython, faJs, faJava } from "@fortawesome/free-brands-svg-icons";
// shadcn components imports
import { Badge } from "@/components/ui/badge";

function UCIPage({}: Props) {
  return (
    <div className="relative z-10 h-5/6 w-5/6 border-2 border-mainorange lg:h-2/3 lg:w-2/3">
      <div className="grid h-full w-full gap-6 px-4 py-8 md:grid-cols-2 md:grid-rows-[20%_auto_20%] md:px-12 md:py-12">
        <div
          id="projectImg"
          className="col-span-1 row-span-3 flex items-center justify-center overflow-hidden"
        >
          <Image
            src={walmartImg}
            alt="uci"
            className="aspect-square w-5/6 bg-white"
          />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex gap-4 text-lg md:text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Walmart</span>
        </div>
        <ul
          id="experienceDesc"
          className="col-span-1 row-span-1 flex list-disc flex-col items-center gap-2 overflow-y-auto px-12 text-lg"
        >
          <li>Starting soon :)</li>
        </ul>
        <div
          id="experienceBadges"
          className="col-span-1 row-span-1 flex h-full w-full flex-col justify-start gap-2 overflow-hidden px-10"
        >
          <span className="text-xl">What I Learned:</span>
          <div id="badgesHouse" className="flex flex-wrap gap-2">
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>Java</span>
            </Badge>
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>Spring </span>
            </Badge>
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>Spring Boot</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
