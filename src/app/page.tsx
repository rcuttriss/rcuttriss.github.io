import { VT323 } from "next/font/google";
const font = VT323({
  weight: "400",
  subsets: ["latin"],
});

// next import
import Image from "next/image";
// images
import chessImg from "@images/chess.png";
import charSheetImg from "@images/dnd.png";
import rpsImg from "@images/rps.png";
import stocksImg from "@images/stocks.png";
import pokemonImg from "@images/pokemon.png";
import blackjackImg from "@images/blackjack.png";
import portfolioImg from "@images/portfolio.png";
import walmartImg from "@images/walmart.png";
// components
import MeCard from "@/components/MeCard";
import ProjectCard from "@/components/ProjectMiniCard";
import BackgroundCodeBlock from "@/components/BackgroundCodeBlock/BackgroundCodeBlock";
import SineWave from "@/components/SineWave";

export default function Home() {
  return (
    <main className="w-full">
      <section
        className={`flex flex-col items-center bg-maindark text-accentlavender ${font.className} h-screen justify-center overflow-hidden`}
      >
        <MeCard />
      </section>
      <section
        id="experienceSection"
        className={`flex w-full flex-col items-center ${font.className} h-[110vh] justify-center gap-6 overflow-hidden bg-secondarydarker py-20 text-mainorange`}
      >
        <div className="z-10 text-8xl">EXPERIENCE</div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex w-4/12 max-w-[1020px] flex-col items-center justify-center gap-8 border-2 border-mainorange px-8 py-4">
            <a
              href="/experience/uci"
              className="relative grid w-full grid-cols-[20%_80%] items-center gap-8 px-4 py-4 hover:bg-maindarker hover:text-white"
            >
              <img
                src="/images/uci.jpg"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div className="flex h-full w-full flex-col justify-center">
                <div className="mb-2 flex gap-4 text-3xl">
                  <span className="text-white">&#62;</span>
                  University of California, Irvine
                </div>
                <div className="text-xl">2016 - 2020</div>
                <div className="text-xl">
                  Bachelors of Science in Computer Science
                </div>
              </div>
            </a>
            <a
              href="/experience/eq"
              className="grid w-full grid-cols-[20%_80%] grid-rows-1 items-center gap-8 px-4 py-4 hover:bg-maindarker hover:text-white"
            >
              <img
                src="/images/eq.jpg"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div className="flex h-full w-full flex-col justify-center">
                <div className="mb-2 flex gap-4 text-3xl">
                  <span className="text-white">&#62;</span>eQ Technologic{" "}
                </div>
                <div className="text-xl">October 2020 - August 2022</div>
                <div className="text-xl">Software Engineer - Level 2</div>
                <div className="text-xl">Java, JavaScript, Python, MySQL</div>
              </div>
            </a>
            <a
              href="/experience/amazon"
              className="grid w-full grid-cols-[20%_80%] grid-rows-1 items-center gap-8 px-4 py-4 hover:bg-maindarker hover:text-white"
            >
              <img
                src="/images/amazon.png"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div>
                <div className="mb-2 flex gap-4 text-3xl">
                  <span className="text-white">&#62;</span>Amazon Lab126
                </div>
                <div className="text-xl">August 2022 - June 2023</div>
                <div className="text-xl">SDE - Level 4</div>
                <div className="text-xl">Java, C++, Android</div>
              </div>
            </a>
            <a
              href="/experience/walmart"
              className="grid w-full grid-cols-[20%_80%] grid-rows-1 items-center gap-8 bg-white px-4 py-4 text-black hover:bg-maindarker hover:text-white"
            >
              <img
                src="/images/walmart.png"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div>
                <div className="mb-2 flex gap-4 text-3xl">
                  <span>&#62;</span>Walmart Labs
                </div>
                <div className="text-xl">October 2024 - Present</div>
                <div className="text-xl">Software Engineer 3</div>
                <div className="text-xl">Java, Spring Boot</div>
              </div>
            </a>
          </div>
        </div>
        <BackgroundCodeBlock
          twClasses="left-0 text-[#ac5c10]"
          strNum={0}
        ></BackgroundCodeBlock>
        <BackgroundCodeBlock
          twClasses="right-0 text-[#ac5c10]"
          strNum={1}
        ></BackgroundCodeBlock>
      </section>
      <section
        id="projectsSection"
        className={`relative z-10 flex h-[135vh] w-full flex-col items-center justify-center gap-12 overflow-hidden bg-cooldark bg-cover py-20 ${font.className}`}
      >
        <div className="z-10 text-8xl text-coolgrey">PROJECTS</div>
        <div
          id="CardBox"
          className="relative z-10 grid h-full w-2/3 grid-cols-2 justify-items-center gap-6 overflow-hidden border-2 border-coolgrey px-32 py-20"
        >
          <ProjectCard
            image={chessImg}
            title={"Chess Game"}
            link="/projects/chess"
          />
          <ProjectCard
            image={pokemonImg}
            title={"Pokemon Tinder Clone"}
            link="/projects/pokemontinderclone"
          />
          <ProjectCard
            image={charSheetImg}
            title={"DnD Character Sheet"}
            link="/projects/dndcharactersheet"
          />
          <ProjectCard
            image={rpsImg}
            title={"Multiplayer Rock Paper Scissors"}
            link="/projects/rps"
          />
          <ProjectCard
            image={blackjackImg}
            title={"Blackjack Game"}
            link="/projects/blackjack"
          />
          <ProjectCard
            image={stocksImg}
            title={"Live Stock Tickers with (Fake) Purchases/Portfolio"}
            link="/projects/stockfight"
          />
          <ProjectCard
            image={portfolioImg}
            title={"This Website!"}
            link="/projects/portfolio"
          />

          <SineWave twClasses="top-0 " />
          <SineWave twClasses="bottom-0 rotate-180" />
        </div>
      </section>
    </main>
  );
}
