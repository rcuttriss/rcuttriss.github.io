"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

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

    const dataStr: string = element.getAttribute("data-str")!;
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

      iteration += 1 / 5;

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
      className={`absolute grid h-2/3 w-2/3 grid-cols-[40%,60%] items-center justify-center text-maingreen`}
    >
      <div
        id="asciiArt"
        className="flex h-full w-full animate-float-still items-center justify-center overflow-hidden text-[9px]"
      >
        <pre className="animate-background-pan bg-gradient-to-r from-maingreen via-white to-maingreen bg-[length:100%] bg-clip-text text-transparent">
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
      <div className="flex h-full w-full flex-col justify-center px-20">
        <div className="flex gap-4 text-5xl">
          <span className="animate-background-pan bg-gradient-to-r from-altpurple via-white to-altpurple bg-[length:200%] bg-clip-text text-transparent">
            &#62;
          </span>
          <span>
            Hi, my name is{" "}
            <span
              id="myName"
              data-str="ROBBY"
              className="animate-background-pan bg-gradient-to-r from-maingreen via-white to-maingreen bg-[length:200%] bg-clip-text text-transparent"
            >
              ROBBY
            </span>
          </span>
        </div>
        <div
          id="myDesc"
          data-str="Backend Software Engineer with 3 years of experience specializing in Python, Java, and C++. Proven track record in improving efficiency and accuracy at Amazon Lab126. Actively expanding skill set into front-end technologies with hands-on projects."
          className="my-4 flex bg-white bg-clip-text text-2xl text-maingreen"
        >
          Pthnown Ziwndhre Whfyuehr odwp 3 lfghe xx irthwemdhq irthwemdhqdw lo
          Mfhown, mfyt, lahs J++. Mlfmen klfth mfueopq lz mdheytiop irthwemdhq
          but majdhrjw hg Gjghf Kww126. Ukghuieu lakdyeteq nbmgh poi fhqp
          hxyct-hjd plahfgteryux mnbh ghty-ii bdteghqu.
        </div>
        <div className="mt-4 flex h-20 w-full items-center justify-start gap-2">
          <Button className="flex h-2/3 w-1/2 items-center justify-center gap-2 bg-secondarypurple text-2xl hover:bg-accentgreen hover:text-black">
            <FontAwesomeIcon icon={faDownload} className="h-5/6" />
            <span>Download Resume (.pdf)</span>
          </Button>
          <Button className="h-2/3 w-1/5 bg-darkergreen hover:bg-red-600 hover:text-black">
            <FontAwesomeIcon icon={faEnvelope} className="w-ful h-full" />
          </Button>
          <Button className="h-2/3 w-1/5 bg-darkergreen hover:bg-white hover:text-black">
            <FontAwesomeIcon icon={faGithub} className="w-ful h-full" />
          </Button>
          <Button className="h-2/3 w-1/5 bg-darkergreen hover:bg-[#2596be] hover:text-black">
            <FontAwesomeIcon icon={faLinkedin} className="w-ful h-full" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MeCard;
