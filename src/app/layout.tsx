import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});
import "./globals.css";

// shadcn components imports
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" className="no-scrollbar">
      <body className={`flex justify-center ${roboto.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
