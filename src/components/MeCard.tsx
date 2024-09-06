"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

type Props = {};

function MeCard({}: Props) {
  useEffect(() => {
    const myName: HTMLElement = document.getElementById("myName")!;
    const myDesc: HTMLElement = document.getElementById("myDesc")!;

    codeWordEffect(myName);
    codeWordEffect(myDesc);
  }, []);

  function codeWordEffect(element: HTMLElement) {
    if (!element) return;

    const dataStr = element.getAttribute("data-str");
    if (!dataStr) return;

    const originalStrArr: string[] = dataStr.split(" "); // Original words array
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration: number = 0;

    // Find the maximum word length for iteration bounds
    const maxLength: number = Math.max(
      ...originalStrArr.map((word) => word.length),
    );

    let interval = setInterval(() => {
      let elementWords = element.innerText.split(" "); // Get the current words displayed

      // Loop through each word in the displayed text
      for (let i = 0; i < elementWords.length; i++) {
        // If the current word's characters are fully transitioned, skip it
        if (iteration >= originalStrArr[i].length) {
          elementWords[i] = originalStrArr[i]; // Set the word to its final state
          continue;
        }

        // Scramble the word character by character
        elementWords[i] = elementWords[i]
          .split("")
          .map((letter: string, index: number) => {
            if (index < iteration) return originalStrArr[i][index]; // Use correct letter after iteration
            return letters[Math.floor(Math.random() * 26)]; // Scramble
          })
          .join("");
      }

      iteration += 1 / 8;

      // Update the inner text of the element
      element.innerText = elementWords.join(" ");

      // Stop the interval when the transition is complete for the longest word
      if (iteration > maxLength) {
        clearInterval(interval);
      }
    }, 30);
  }

  return (
    <div
      id="meCard"
      className={`text-maingreen absolute grid h-2/3 w-2/3 grid-cols-[40%,60%] items-center justify-center`}
    >
      <div
        id="asciiArt"
        className="animate-float-still flex h-full w-full items-center justify-center overflow-hidden text-[9px]"
      >
        <pre className="from-maingreen to-maingreen animate-background-pan bg-gradient-to-r via-white bg-[length:400%] bg-clip-text text-transparent">
          :::::::::::::::::::::::::::::::::::::...............................................................
          <br />
          :::::::::::::::::::::::::::::::::::::::.............................................................
          <br />
          :::::::::::::::::::::::::::::::::::::::::...........................................................
          <br />
          :::::::::::::::::::::::::::::::%:%%::::::::..+++++..................................................
          <br />
          :::::::::::::::::::::::::::::::#%%::::::::.+++++++++..++++..........................................
          <br />
          ::::::::::::::::::::::::::::::::::::%%%%---------------=%%%%%............+-.........................
          <br />
          :::::::::::::::::::::::::::::=++%%=-------------------------:.-%%%++++..............................
          <br />
          :::::::::::::::::::::::++:::**%%+=========-----------------------.-%%+......+.......................
          <br />
          ::::::::::::::::::::::::::=*%#%+===================----------------..-%++:..........................
          <br />
          ::::::::::::::::::::::::::%%##%*++==========================---------..=%++.........................
          <br />
          :::::::::::::::::::::::::::%#####%%%%+========%%%%%*+++++===========---.-%+.........................
          <br />
          :::::::::::::::::::::::::::::++++%%%+=========%%%%%%%%%%%%%*+==========.=%+.........................
          <br />
          :::::::::::::::::::::::::::::++++%%%*========##++:::::::%%*%%+==========
          #=.++......................
          <br />
          :::::::::::::::::::::::::::::++++#%*++++++++=%::::::::::++%%%+==========.%..++......................
          <br />
          :::::::::::::::::::::::::::::::+%#%*+++++++++%::::::::::+*%%+============%..........................
          <br />
          ::::::::::::::::::::::::::::::++##%++++++++++%::::::::++%%**+===========%%+.........................
          <br />
          :::::::::::::::::::::::::::++++%#%*++++++++++%+++:::%%%**+++++++++++++=%%++.........................
          <br />
          -:::::::::::::::::::::::::::++%%%%*+++++++++#*++++++++++++++++++++++++%+++..........................
          <br />
          ---::::::::::::::::::::::::%%**+++++++++++++++++++++++++++++++++++++%#++............................
          <br />
          -----:::::::::::::::::::::##%*+++++++++++++++++++++++++++++++++++%%::::::...........................
          <br />
          -------:::::::::::::::::::##%*++++%++++++++++++++++++++++++++%%%++:::::::::.........................
          <br />
          ---------:::::::::::::::::%#%%%#++%++++++++++++++++++*%%%%%%++++*::::::::::::.......................
          <br />
          -----------:::::::::::::::::%%%%+++++%+#+++%+++++++=+%%++++::::::::::::::::::::.....................
          <br />
          -------------::::::::::::++:+#%*+++++++++++%%++++++++++%%+:::::::::::::::::::::::...................
          <br />
          ---------------::::::::::++:%%%*+++++%+++++%%%++++++++++:+%#:::::::::::::::::::::::.................
          <br />
          -----------------::::::::::+%#%++++++%:+++%%%%%+++++++++++.+%%-::::::::::::::::::::::...............
          <br />
          ------------------::::::::+%#%*+++++%+.+++%+%%%%*+++++++++++.+%%+::::::::::::::::::::::.............
          <br />
          --------------------::::::+%%%*+++++%+%++%+++%**%*++++++++++++.+%%=:::::::::::::::::::::............
          <br />
          ----------------------::::+##%*+++++%++++%::++%**%*+++++++++++++.+%++:::::::::::::::::::::..........
          <br />
          ------------------------::*%%#*+++++++++%::::::%**%**+++++++++++++++%+::::::::::::::::::::::........
          <br />
          -------------------------+%#%**+++++++++%::::::+%**%**+++++++++++++++%::::::::::::::::::::::::......
          <br />
          -------------------------+%#%**++++++++%++:::::++%%*%%**++++++++++++++%%::::::::::::::::::::::::....
          <br />
          -------------------------+##%**+++++++%+%++:::::+++%**%**+++++++++++++++%+::::::::::::::::::::::::..
          <br />
          -------------------------+%#%**++++++#%++++::::::::+%**%%**+++++++*+++%+%#::::::::::::::::::::::::::
          <br />
          --------------------------##%**++++++%+%+++:::::::::::%**%**+++++++%+++++%::::::::::::::::::::::::::
          <br />
          --------------------------%#%**+++++%+%+++::::::::::::+%%*%%**+++++@+*+++%::::::::::::::::::::::::::
          <br />
          --------------------++----##%%**++%-+%++:::::::::::::::++%%*%%**+++*++++%%::+:::::::::::::::::::::::
          <br />
          -------------------=+++----##%#%%++%---:::::::::::::::::+++%%**%%%%+=%%%::::::::::::::::::::::::::::
          <br />
          -----------------------------+++++++-----:::::::::::::::::-+++*%%%%+.:::+++:::::::::::::::::::::::::
          <br />
          -------------------------------------------:::::::::::::::::::::::%+%:::+++:::::::::::::::::::::::::
          <br />
          ---------------------------------------------:::::::::::::::::::::::::::::::::::::::::::::::::::::::
          <br />
          -----------------------------------------------:::::::::::::::::::::::::::::::::::::::::::::::::::::
          <br />
          -------------------------------------------------:::::::::::::::::::::::::::::::::::::::::::::::::::
          <br />
        </pre>
      </div>
      <div className="flex h-full w-full flex-col justify-center rounded-2xl px-20">
        <div className="flex gap-4 text-5xl">
          <span className="from-maingreen to-maingreen animate-background-pan bg-gradient-to-r via-white bg-[length:200%] bg-clip-text text-transparent">
            &#9655;
          </span>
          <span>
            Hi, my name is{" "}
            <span
              id="myName"
              data-str="ROBBY"
              className="to-maingreen from-maingreen animate-background-pan bg-gradient-to-r via-white bg-[length:400%] bg-clip-text text-transparent"
            >
              ROBBY
            </span>
          </span>
        </div>
        <div
          id="myDesc"
          data-str="Backend Software Engineer with 3 years of experience specializing in Python, Java, and C++. Proven track record in improving efficiency and accuracy at Amazon Lab126. Actively expanding skill set into front-end technologies with hands-on projects"
          className="text-maingreen my-4 flex bg-white bg-clip-text text-2xl"
        >
          Lvtdzzw Fdsuwhdfr Ehgisxlmtz wgyrh 3 ylixsy lf wltsgbswwk xykivlvksnm
          gk Uybnlw, Gbue, syv N++. Fthvh cbsfdw hzuqrkhp gr tfnzjykf xpdzkrvbyf
          vjs fnaylwhs md Lvlxms Iyb689. Kkkdwjsl xrihksib shti lfw oxnws-wwtm
          nsukzpvzyppg lwjz phma-kr sujeyjtkz.
        </div>
        <Button className="bg-secondarypurple mt-4 flex h-12 max-h-12 w-1/2 items-center justify-center gap-2 self-start overflow-hidden text-2xl">
          <FontAwesomeIcon icon={faDownload} className="h-5/6" />
          <span>Download Resume (.pdf)</span>
        </Button>
      </div>
    </div>
  );
}

export default MeCard;
