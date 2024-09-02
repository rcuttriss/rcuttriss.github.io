import { Roboto } from "next/font/google";
const roboto = Roboto({
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

export default function Home() {
  return (
    <main className="w-full">
      <section
        className={`text-accentlavender flex flex-col items-center bg-transparent ${roboto.className} h-screen justify-center overflow-hidden`}
      >
        <div className="h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute -z-10 w-screen overflow-hidden object-cover"
          >
            <source src="/videos/purple_bg.mp4" type="video/mp4" />
          </video>
        </div>
        <MeCard />
      </section>
      <section
        className={`w-screengap-12 relative flex flex-col items-center ${roboto.className} bg-accentlavender h-screenx1_5 z-10 min-h-screen justify-center gap-12 overflow-hidden bg-cover py-40`}
      >
        <div
          id="floating-circle"
          className="animate-float-up -z-5 absolute -bottom-52 left-52 h-32 w-32 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 blur-lg"
        ></div>
        <div
          id="floating-square"
          className="animate-float-up -z-5 delay-2s from-accentorange absolute -bottom-52 right-96 h-32 w-32 bg-gradient-to-r via-slate-500 to-blue-700 blur-lg"
        ></div>
        <div
          id="floating-triangle"
          className="animate-float-up -z-5 delay-6s absolute -bottom-52 left-1/2 h-32 w-32 border-b-[100px] border-l-[50px] border-r-[50px] border-b-blue-500 border-l-transparent border-r-transparent blur-lg"
        ></div>
        <div className="text-8xl text-black">PROJECTS</div>
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
