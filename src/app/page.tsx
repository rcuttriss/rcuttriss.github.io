import { VT323 } from "next/font/google";
const font = VT323({
  weight: "400",
  subsets: ["latin"],
});

// images
import chessImg from "@images/chess.png";
import charSheetImg from "@images/dnd.png";
import rpsImg from "@images/rps.png";
import stocksImg from "@images/stocks.png";
import pokemonImg from "@images/pokemon.png";
import blackjackImg from "@images/blackjack.png";
import portfolioImg from "@images/portfolio.png";

// components
import MeCard from "@/components/MeCard";
import ProjectCard from "@/components/ProjectCard";
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
        className={`flex w-full flex-col items-center ${font.className} h-[110vh] justify-center gap-12 overflow-hidden bg-secondarydarker py-20 text-mainorange`}
      >
        <div className="z-10 text-8xl">EXPERIENCE</div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex w-4/12 max-w-[1020px] flex-col items-center gap-8 border-2 border-mainorange">
            <div className="relative grid w-full grid-cols-[20%_80%] items-center gap-8 px-12 py-8">
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
                <div>2016 - 2020</div>
                <div>Bachelors of Science in Computer Science</div>
                <div>
                  Donald Bren School of Information and Computer Sciences
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-[20%_80%] grid-rows-1 items-center gap-8 px-12 py-8">
              <img
                src="/images/eq.jpg"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div className="flex h-full w-full flex-col justify-center">
                <div className="mb-2 flex gap-4 text-3xl">
                  <span className="text-white">&#62;</span>eQ Technologic{" "}
                </div>
                <div>October 2020 - August 2022</div>
                <div>Software Engineer - Level 2</div>
                <div>Java, JavaScript, Python, MySQL</div>
              </div>
            </div>
            <div className="grid w-full grid-cols-[20%_80%] grid-rows-1 items-center gap-8 px-12 py-8">
              <img
                src="/images/amazon.png"
                alt=""
                className="h-full w-full rounded-md"
              />
              <div>
                <div className="mb-2 flex gap-4 text-3xl">
                  <span className="text-white">&#62;</span>Amazon Lab126
                </div>
                <div>August 2022 - June 2023</div>
                <div>SDE - Level 4</div>
                <div>Java, C++, Android</div>
              </div>
            </div>
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
        className={`bg-cooldark relative z-10 flex h-[135vh] w-full flex-col items-center justify-center gap-12 overflow-hidden bg-cover py-20 ${font.className}`}
      >
        <div className="text-coolgrey z-10 text-8xl">PROJECTS</div>
        <div
          id="CardBox"
          className="border-coolgrey relative z-10 grid h-full w-2/3 grid-cols-2 justify-items-center gap-6 overflow-hidden border-2 px-32 py-20"
        >
          <ProjectCard image={chessImg} title={"Chess Game"} />
          <ProjectCard image={pokemonImg} title={"Pokemon Tinder Clone"} />
          <ProjectCard image={charSheetImg} title={"DnD Character Sheet"} />
          <ProjectCard
            image={rpsImg}
            title={"Multiplayer Rock Paper Scissors"}
          />
          <ProjectCard image={blackjackImg} title={"Blackjack Game"} />
          <ProjectCard
            image={stocksImg}
            title={"Live Stock Tickers with (Fake) Purchases/Portfolio"}
          />
          <ProjectCard image={portfolioImg} title={"This Website!"} />

          <SineWave twClasses="top-0 " />
          <SineWave twClasses="bottom-0 rotate-180" />
        </div>
      </section>
    </main>
  );
}
