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
    <div className="relative z-10 h-2/3 w-2/3 border-2 border-mainorange">
      <div className="grid h-full w-full grid-cols-2 grid-rows-[12%_auto_20%] gap-6 px-12 py-12">
        <div
          id="projectImg"
          className="col-span-1 row-span-3 flex items-center justify-center overflow-hidden"
        >
          <Image src={walmartImg} alt="uci" className="h-5/6 w-5/6 bg-white" />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex gap-4 text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Walmart</span>
        </div>
        <ul
          id="experienceDesc"
          className="col-span-1 row-span-1 flex h-full w-full list-disc flex-col items-start gap-2 overflow-y-auto px-12 text-lg"
        >
          <li>Starting soon :)</li>
        </ul>
        <div
          id="experienceBadges"
          className="col-span-1 row-span-1 flex flex-col justify-start gap-2 px-10"
        >
          <span className="text-xl">What I Learned:</span>
          <div id="badgesHouse" className="flex gap-2">
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
