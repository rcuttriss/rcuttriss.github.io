import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Robby Cuttriss | Portfolio",
  description: "Portfolio site of Robby Cuttriss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center ${roboto.className} no-scrollbar h-full w-full bg-secondarydarker text-mainorange`}
    >
      <a
        href="/#experienceSection"
        className="absolute left-20 top-16 flex h-[50px] w-[150px] items-center justify-center gap-2 px-4"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
        <span className="text-2xl">Back</span>
      </a>
      {children}
    </div>
  );
}
