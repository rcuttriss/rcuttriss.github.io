import React from "react";

type Props = {};

// next imports
import Image from "next/image";
// images imports
import amazonImg from "@images/amazon.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
// shadcn components imports
import { Badge } from "@/components/ui/badge";

function UCIPage({}: Props) {
  return (
    <div className="relative z-10 h-5/6 w-5/6 border-2 border-mainorange lg:h-2/3 lg:w-2/3">
      <div className="grid h-full w-full gap-6 px-4 py-8 md:grid-cols-2 md:grid-rows-[20%_auto_20%] md:px-12 md:py-12">
        <div
          id="projectImg"
          className="col-span-1 row-span-3 flex aspect-square h-full w-full items-center justify-center overflow-hidden"
        >
          <Image src={amazonImg} alt="uci" className="aspect-square w-5/6" />
        </div>
        <div
          id="experienceTitle"
          className="col-span-1 row-span-1 flex gap-4 text-lg md:text-4xl"
        >
          <span className="text-white">&#62;</span>
          <span>Amazon Lab 126</span>
        </div>
        <ul
          id="experienceDesc"
          className="col-span-1 row-span-1 flex list-disc flex-col items-center gap-2 overflow-y-auto px-12 text-lg"
        >
          <li>
            Resolved audio-related streaming issues for 50+ third-party apps
            through collaboration and Android Audio expertise, enhancing app
            integration and boosting functionality by solving 100+ seperate
            ticketed issues.
          </li>
          <li>
            Spearheaded logging enhancement for FireOS Audio Framework using
            C++, decreasing problem diagnosis time by 18%, expediting support
            team responses and enhancing user experience.
          </li>
          <li>
            Assisted in critical transition of code base from FireOS7 to FireOS8
            using Agile methodologies, enhancing per- formance for millions of
            consumer devices and reducing bug reports by 11%.
          </li>
          <li>
            Revamped device metrics reporting for millions of devices using C++,
            boosting internal analytics accuracy and efficiency by an estimated
            20%.
          </li>
          <li>
            Developed internal tool using Java and Android SDK, enhancing team’s
            understanding of Android and FireOS audio fundamentals, reducing new
            hire onboarding time by 35%.
          </li>
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
              <FontAwesomeIcon icon={faC} className="mr-2 h-6 w-6" />
              <span>C++</span>
            </Badge>
            <Badge className="bg-mainorange text-black">
              <FontAwesomeIcon icon={faAndroid} className="mr-2 h-6 w-6" />
              <span>Android SDK</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UCIPage;
