import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import eqImg from "@images/eq.png";
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
          <Image src={eqImg} alt="uci" className="aspect-square w-5/6" />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex gap-4 text-lg md:text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>eQ Technologic</span>
        </div>
        <ul
          id="experienceDesc"
          className="col-span-1 row-span-1 flex list-disc flex-col items-center gap-2 overflow-y-auto px-12 text-lg"
        >
          <li>
            Led complex data migration from legacy systems to TeamCenter for
            major aerospace client, managing 1TB+ data, using ETL processes,
            Java, and Javacript, resulting in 20% efficiency gain in their
            engineering processes.
          </li>
          <li>
            Designed and implemented 40+ RESTful API endpoints in a
            microservices environment for TeamCenter system manipulation,
            enhancing system responsiveness by 20%.
          </li>
          <li>
            Collaborated with a 20+ member customer team, troubleshooting and
            adjusting product specifications using Java and MySQL, resulting in
            a 35% reduction in reported issues.
          </li>
          <li>
            Improved customer self-sufficiency by leading development on
            user-friendly documentation for our RESTful APIs. This resulted in a
            significant 52% reduction in customer support tickets related to API
            usage, improving overall customer satisfaction.
          </li>
          <li>
            Implemented comprehensive product testing using JUnit, improving
            product quality by reducing bug count by an estimated 30%.
            Collaborated with customer QA team to align on high product
            standards.
          </li>
        </ul>
        <div
          id="experienceBadges"
          className="col-span-1 row-span-1 flex h-full w-full flex-col justify-start gap-2 overflow-hidden px-10"
        >
          <span className="text-xl">What I Learned:</span>
          <div id="badgesHouse" className="flex flex-wrap gap-2">
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faPython} className="mr-2 h-6 w-6" />
              <span>Python</span>
            </Badge>
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faJava} className="mr-2 h-6 w-6" />
              <span>Java</span>
            </Badge>
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faJs} className="mr-2 h-6 w-6" />
              <span>JavaScript</span>
            </Badge>
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faDatabase} className="mr-2 h-6 w-6" />
              <span>MySQL</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
