import React from "react";

type Props = {};

function BackgroundFloaters({}: Props) {
  const randomLeftOrRight = () =>
    Math.random() < 0.5
      ? { left: `${Math.random() * 100}%` }
      : { right: `${Math.random() * 100}%` };

  return (
    <>
      <div
        id="floating-circle"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-violet-500 to-pink-500 blur-lg delay-0"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle2"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-teal-700 to-cyan-500 blur-lg delay-1"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle3"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-blue-700 to-sky-500 blur-lg delay-2.5"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle4"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-emerald-700 to-lime-500 blur-lg delay-3"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle5"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-amber-900 to-orange-600 blur-lg delay-4"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle6"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-fuchsia-700 to-violet-500 blur-lg delay-5"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle7"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-yellow-600 to-amber-900 blur-lg delay-6"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle8"
        className="-z-5 delay-7 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-green-700 to-lime-500 blur-lg"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle9"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 blur-lg delay-8"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle10"
        className="-z-5 delay-9 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-pink-500 to-violet-500 blur-lg"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle11"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-fuchsia-700 to-violet-500 blur-lg delay-10"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle12"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-yellow-600 to-amber-900 blur-lg delay-11"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle13"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-green-700 to-lime-500 blur-lg delay-12"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle14"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 blur-lg delay-13"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-circle15"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up rounded-full bg-gradient-to-r from-pink-500 to-violet-500 blur-lg delay-14"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-square"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up bg-gradient-to-bl from-accentorange via-slate-500 to-blue-700 blur-lg delay-15"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-square2"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up bg-gradient-radial from-mainpurple via-slate-100 to-sharpred blur-lg delay-16"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-square3"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up bg-gradient-conic from-yellow-600 to-amber-900 blur-lg delay-17"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-square4"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up bg-gradient-conic from-fuchsia-700 to-violet-500 blur-lg delay-18"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-triangle"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up bg-gradient-conic from-sky-500 to-cyan-500 blur-lg delay-19"
        style={randomLeftOrRight()}
      ></div>
      <div
        id="floating-triangle2"
        className="-z-5 absolute -bottom-52 h-32 w-32 animate-float-up bg-gradient-conic from-pink-500 to-violet-500 blur-lg delay-20"
        style={randomLeftOrRight()}
      ></div>
    </>
  );
}

export default BackgroundFloaters;
