"use client";

import React from "react";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <ul className="text-retrogreen fixed top-0 flex w-full justify-center gap-8 bg-black bg-transparent p-4 pt-10 text-lg">
      <Link
        className="transition-all duration-300 ease-in-out hover:scale-150 hover:px-6"
        href={"/RESUME"}
        onPointerEnter={onPointerEnter}
        data-value="RESUME"
      >
        RESUME
      </Link>
      <span>/</span>
      <Link
        className="transition-all duration-300 ease-in-out hover:scale-150 hover:px-6"
        href={"/PROJECTS"}
        onPointerEnter={onPointerEnter}
        data-value="PROJECTS"
      >
        PROJECTS
      </Link>
      <span>/</span>
      <Link
        className="transition-all duration-300 ease-in-out hover:scale-150 hover:px-6"
        href={"/BLOG"}
        onPointerEnter={onPointerEnter}
        data-value="BLOG"
      >
        BLOG
      </Link>
      <span>/</span>
      <Link
        className="transition-all duration-300 ease-in-out hover:scale-150 hover:px-6"
        href={"/CONTACT"}
        onPointerEnter={onPointerEnter}
        data-value="CONTACT"
      >
        CONTACT
      </Link>
    </ul>
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
