"use client";

import React, { useEffect } from "react";

import codeBlockStrings from "./BackgroundCodeBlockStrings";

type Props = {
  twClasses: string;
  strNum: number;
};

function BackgroundCodeBlock({ twClasses, strNum }: Props) {
  useEffect(() => {
    const codeBlock = document.getElementById(`codeBlock-${strNum}`)!;
    typeAnimation(codeBlock, strNum);
  }, []);

  function typeAnimation(element: HTMLElement, codeBlockIndex: number) {
    if (!element) return;

    let iteration: number = 0;

    setInterval(() => {
      const codeBlockStr = codeBlockStrings[codeBlockIndex];

      element.innerHTML = element.innerHTML.slice(0, -1);
      element.innerText += codeBlockStr.charAt(iteration++);
      element.innerHTML += "&#9608";

      // Scroll to the bottom each time new text is added
      element.scrollTop = element.scrollHeight;

      // When the block is finished, switch to the next block
      if (iteration >= codeBlockStr.length) {
        codeBlockIndex = (codeBlockIndex + 2) % codeBlockStrings.length;
        element.innerText = "";
        iteration = 0;
      }
    }, 10);
  }

  return (
    <div
      id={`codeBlock-${strNum}`}
      className={`${twClasses} absolute max-h-[100vh] overflow-y-auto`}
      style={{
        whiteSpace: "pre",
        overflowY: "auto",
        scrollbarWidth: "none", // Hide scrollbar in Firefox
        msOverflowStyle: "none", // Hide scrollbar in IE and Edge
      }}
      onWheel={(e) => e.preventDefault()} // Disable mouse wheel scrolling
      onTouchMove={(e) => e.preventDefault()}
    ></div>
  );
}

export default BackgroundCodeBlock;
