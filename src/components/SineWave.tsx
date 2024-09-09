"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
type Props = {
  twClasses: string;
};

function SineWaveComponent({ twClasses }: Readonly<Props>) {
  const blockChar: string = "█";
  const [sineWaveDivs, setSineWaveDivs] = useState<JSX.Element[]>([]);
  const waveHeight: number = 25; // Maximum height of the wave
  const waveWidth: number = 180; // Number of columns in the wave (how wide it is)
  let currItr: MutableRefObject<number> = useRef(0); // represents the current iteration

  useEffect(() => {
    const makeSineWaveDivs = (start: number = 0, end: number = waveWidth) => {
      // Loop over a range of points to generate the sine wave
      const newSineWaveDivs = [];
      for (let x = start; x < end; x++) {
        // Calculate sine value and scale it to the wave height
        const y =
          Math.sin((x / waveWidth) * 2 * Math.PI) * (waveHeight / 2) +
          waveHeight / 2;

        newSineWaveDivs.push(
          <div key={x} className="flex flex-col leading-none">
            {Array.from({ length: y }).map((_, j) => (
              <span key={j}>{blockChar}</span>
            ))}
          </div>,
        );
      }

      return newSineWaveDivs;
    };

    // initialize the sine wave
    setSineWaveDivs(makeSineWaveDivs());

    setInterval(() => {
      currItr.current = currItr.current + 1;
      if (currItr.current >= 9000000000) currItr.current = 0;
      setSineWaveDivs((last) => [
        ...last.slice(1),
        ...makeSineWaveDivs(currItr.current, currItr.current + 1),
      ]);
    }, 400);
  }, []);

  return (
    <div className={`text-coolgrey absolute flex ${twClasses}`}>
      {sineWaveDivs}
    </div>
  );
}

export default SineWaveComponent;
