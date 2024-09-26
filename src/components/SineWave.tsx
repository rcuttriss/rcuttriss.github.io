"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
type Props = {
  twClasses: string;
};

function SineWaveComponent({ twClasses }: Readonly<Props>) {
  const blockChar: string = "█";
  const [sineWaveDivs, setSineWaveDivs] = useState<JSX.Element[]>([]);
  const waveHeight: number = 28; // Maximum height of the wave
  const waveWidth: number = 200; // Number of columns in the wave (how wide it is)

  const makeSineWaveDivs = () => {
    // Loop over a range of points to generate the sine wave
    const newSineWaveDivs = [];
    for (let x = 1; x < waveWidth; x++) {
      // Calculate sine value and scale it to the wave height
      const y =
        Math.sin((x / waveWidth) * 2 * Math.PI) * (waveHeight / 2) +
        waveHeight / 2;

      newSineWaveDivs.push(
        <div key={`sine-wave-${x}`} className="flex flex-col leading-none">
          {Array.from({ length: y }).map((_, j) => (
            <span key={`sine-wave-${x}-${j}`}>{blockChar}</span>
          ))}
        </div>,
      );
    }

    return newSineWaveDivs;
  };
  useEffect(() => {
    // initialize the sine wave
    setSineWaveDivs(makeSineWaveDivs());

    setInterval(() => {
      // takes the first element and adds it to the end of the array
      setSineWaveDivs((last) => {
        const pluck = last[0];
        return [...last.splice(1), pluck];
      });
    }, 400);
  }, []);

  return (
    <div className={`absolute flex text-coolgrey ${twClasses}`}>
      {sineWaveDivs}
    </div>
  );
}

export default SineWaveComponent;
