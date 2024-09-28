"use client";

// react imports
import React, { useEffect, useState } from "react";

// font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

// shadcn components imports
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@hooks/use-toast";

type Props = {};

function MeCard({}: Props) {
  const { toast } = useToast();

  useEffect(() => {
    const myName: HTMLElement = document.getElementById("myName")!;
    const myDesc: HTMLElement = document.getElementById("myDesc")!;

    codeWordEffect(myName);
    codeWordEffect(myDesc);
  }, []);

  const copyEmail = async () => {
    const email = "cuttriss.r@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch (error) {
      console.error("Failed to copy the email:", error);
    }
  };

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
      className={`absolute grid w-full items-center justify-center overflow-hidden text-maingreen md:w-2/3 md:grid-cols-1 md:grid-rows-2 lg:h-2/3 lg:grid-cols-[40%,60%] lg:grid-rows-1`}
    >
      <div
        id="asciiArt"
        className="flex h-full w-full min-w-[500px] animate-float-still items-center justify-center"
      >
        <div className="animate-background-pan bg-gradient-to-r from-maingreen via-white to-maingreen bg-[length:100%] bg-clip-text text-[.35rem] text-transparent transition-all md:text-[.4rem] lg:text-xs">
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
        </div>
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
          className="my-4 flex bg-white bg-clip-text px-12 text-sm text-maingreen sm:text-2xl"
        >
          Pthnown Ziwndhre Whfyuehr odwp 3 lfghe xx irthwemdhq irthwemdhqdw lo
          Mfhown, mfyt, lahs J++. Mlfmen klfth mfueopq lz mdheytiop irthwemdhq
          but majdhrjw hg Gjghf Kww126. Ukghuieu lakdyeteq nbmgh poi fhqp
          hxyct-hjd plahfgteryux mnbh ghty-ii bdteghqu.
        </div>
        <div className="mt-4 grid h-20 w-full grid-cols-3 grid-rows-2 items-center justify-start gap-2 md:grid-cols-6 md:grid-rows-1">
          <a
            className="col-span-3 flex h-full w-full items-center justify-center gap-3 rounded-none bg-secondarypurple text-white hover:rounded-sm hover:bg-accentgreen hover:text-black sm:h-2/3 sm:min-w-[200px] sm:text-sm md:text-lg 2xl:text-2xl"
            href="files/RobertCuttrissResume2024.pdf"
            download={"RobertCuttrissResume2024.pdf"}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="sm:min-h-[35px] lg:h-[2vw]"
            />
            <span>Download Resume (.pdf)</span>
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-full w-full min-w-[68px] items-center justify-center bg-darkergreen text-white transition-colors hover:rounded-sm hover:bg-red-600 hover:text-maindarker sm:h-2/3">
              <FontAwesomeIcon icon={faEnvelope} className="h-2/3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-maindarker text-maingreen">
              <DropdownMenuItem
                onClick={() => {
                  copyEmail();
                  toast({
                    title: "Copied Email",
                    duration: 3000,
                    description: '"cuttriss.r@gmail.com" copied to clipboard',
                  });
                }}
              >
                Copy Email Address
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>
                <a href="mailto:cuttriss.r@gmail.com?subject=Hello from _____">
                  Email Directly
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="https://github.com/rcuttriss"
            className="h-full sm:h-2/3"
            target="_blank"
          >
            <Button className="h-full w-full rounded-none bg-darkergreen hover:rounded-sm hover:bg-white hover:text-maindarker">
              <FontAwesomeIcon icon={faGithub} className="h-full" />
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/rcuttriss/"
            className="h-full sm:h-2/3"
            target="_blank"
          >
            <Button className="h-full w-full rounded-none bg-darkergreen hover:rounded-sm hover:bg-[#2596be] hover:text-maindarker">
              <FontAwesomeIcon icon={faLinkedin} className="h-full" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MeCard;
