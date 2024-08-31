import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

import { Button } from "@/components/ui/button";
import vaporwaveImg from "@images/vaporwave.jpg";
import MeCard from "@/components/MeCard";

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center bg-black p-24 text-white ${roboto.className} justify-center bg-cover`}
      style={{ backgroundImage: `url(${vaporwaveImg.src})` }}
    >
      <MeCard />
    </main>
  );
}
