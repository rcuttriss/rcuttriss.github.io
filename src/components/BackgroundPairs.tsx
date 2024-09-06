import React from "react";

type Props = {};

function BackgroundPairs({}: Props) {
  return (
    <>
      <div className="text-accentgreen absolute right-52 top-52 flex h-40 w-40 rotate-90 gap-6 rounded-full text-7xl opacity-60 blur-md">
        <span className="animate-shift-left delay-700">{"["}</span>
        <span className="animate-shift-right delay-700">{"]"}</span>
      </div>
      <div className="text-accentgreen absolute left-40 flex h-40 w-40 gap-6 rounded-full text-7xl opacity-60 blur-sm">
        <span className="delay-2 animate-shift-left">{"{"}</span>
        <span className="delay-2 animate-shift-right">{"}"}</span>
      </div>
      <div className="text-accentgreen absolute bottom-40 right-12 flex h-40 w-40 rotate-45 gap-6 rounded-full text-7xl opacity-60 blur-sm">
        <span className="animate-shift-left">{"/"}</span>
        <span className="animate-shift-right">{"/"}</span>
      </div>
      <div className="text-accentgreen absolute bottom-0 right-1/2 flex h-40 w-40 -rotate-6 gap-6 rounded-full text-7xl opacity-60 blur-md">
        <span className="animate-shift-left delay-3">{"**"}</span>
        <span className="animate-shift-right delay-3">{"**"}</span>
      </div>
    </>
  );
}

export default BackgroundPairs;
