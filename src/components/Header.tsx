"use client";

import React from "react";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div className="text-codegreen absolute top-0 z-10 mt-10 flex w-auto justify-center gap-8 rounded-sm bg-purple-900 bg-opacity-20 bg-contain bg-clip-padding px-6 py-4 text-lg backdrop-blur-xl">
      <Link
        className="hover:scale-150 hover:px-6"
        href={"/RESUME"}
        onPointerEnter={onPointerEnter}
        data-value="RESUME"
      >
        RESUME
      </Link>
      <span>/</span>
      <Link
        className="hover:scale-150 hover:px-6"
        href={"/PROJECTS"}
        onPointerEnter={onPointerEnter}
        data-value="PROJECTS"
      >
        PROJECTS
      </Link>
      <span>/</span>
      <Link
        className="hover:scale-150 hover:px-6"
        href={"/BLOG"}
        onPointerEnter={onPointerEnter}
        data-value="BLOG"
      >
        BLOG
      </Link>
      <span>/</span>
      <Link
        className="hover:scale-150 hover:px-6"
        href={"/CONTACT"}
        onPointerEnter={onPointerEnter}
        data-value="CONTACT"
      >
        CONTACT
      </Link>
    </div>
  );
}

function onPointerEnter(event: any) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iteration = 0;

  let interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter: string, index: number) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 6;
  }, 30);
}

export default Header;
