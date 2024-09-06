import { VT323 } from "next/font/google";
const font = VT323({
  weight: "400",
  subsets: ["latin"],
});

import chessImg from "@images/chess.jpg";
import charSheetImg from "@images/dndcharsheet.jpg";
import rpsImg from "@images/rps.jpg";
import stocksImg from "@images/stocks.jpg";
import pokemonImg from "@images/pokemon.jpg";
import blackjackImg from "@images/blackjack.jpg";
import MeCard from "@/components/MeCard";

import ProjectCard from "@/components/ProjectCard";
import BackgroundFloaters from "@/components/BackgroundFloaters";
import BackgroundPairs from "@/components/BackgroundPairs";
import BackgroundCodeBlock from "@/components/BackgroundCodeBlock/BackgroundCodeBlock";

export default function Home() {
  return (
    <main className="w-full">
      <section
        className={`bg-maindark flex flex-col items-center text-accentlavender ${font.className} h-screen justify-center overflow-hidden`}
      >
        <div className="h-full w-full overflow-hidden"></div>
        <MeCard />
      </section>
      <section
        className={`flex w-full flex-col items-center gap-12 ${font.className} text-mainorange bg-secondarydarker h-[110vh] justify-center gap-12 overflow-hidden py-20`}
      >
        <div className="z-10 px-12 py-8 text-8xl">
          EXPERIENCE<span className="animate-blink text-8xl">&#9608;</span>
        </div>
        <div className="flex h-full w-full content-center items-center justify-center">
          <div className="z-100 flex w-7/12 max-w-[1020px] flex-col items-center gap-8 px-40">
            <div className="relative grid w-full grid-cols-[20%_80%] items-center gap-8 px-12 py-8">
              <img
                src="/images/uci.jpg"
                alt=""
                className="w-sm h-full rounded-md"
              />
              <div className="flex h-full w-full flex-col justify-center">
                <div className="mb-2 text-3xl">
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
                className="w-sm h-full rounded-md"
              />
              <div className="flex h-full w-full flex-col">
                <div className="mb-2 text-3xl">eQ Technologic </div>
                <div>October 2020 - August 2022</div>
                <div>Software Engineer - Level 2</div>
                <div>Java, JavaScript, Python, MySQL</div>
              </div>
            </div>
            <div className="grid w-full grid-cols-[20%_80%] grid-rows-1 items-center gap-8 px-12 py-8">
              <img
                src="/images/amazon.png"
                alt=""
                className="w-sm h-full rounded-md"
              />
              <div>
                <div className="mb-2 text-3xl">Amazon Lab126</div>
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
          twClasses="right-52 text-[#ac5c10]"
          strNum={1}
        ></BackgroundCodeBlock>
      </section>
      <section
        className={`relative flex w-screen flex-col items-center gap-12 ${font.className} bg-maindarker z-10 h-screenx1_5 min-h-screen justify-center gap-12 overflow-hidden bg-cover py-32`}
      >
        <BackgroundFloaters />
        <BackgroundPairs />

        <div className="text-accentgreen z-10 text-8xl">PROJECTS</div>
        <div
          id="CardBox"
          className="relative grid h-full w-3/5 grid-cols-2 justify-items-center gap-4"
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
          <ProjectCard
            image={rpsImg}
            title={"Multiplayer Rock Paper Scissors"}
          />
          <ProjectCard image={rpsImg} title={"This Website!"} />
        </div>
      </section>
    </main>
  );
}
