"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  tech: string;
};

export default function TechChip({ tech }: Props) {
  const [icon, setIcon] = useState<IconDefinition | null>(null);

  useEffect(() => {
    importIcon(tech)
      .then((importedIcon) => {
        setIcon(importedIcon);
      })
      .catch((error) => {
        console.error(`Failed to load the icon for ${tech}:`, error);
        // Optionally set a default icon in case of an error
      });
  }, [tech]);

  // Render a loading state or null while the icon is being loaded
  if (!icon) return <div>Loading...</div>;

  return (
    <div className="flex h-8 items-center justify-center gap-2 rounded-3xl bg-yellow-400 px-6 text-black">
      <FontAwesomeIcon className="aspect-square h-full" icon={icon} />
      <span>{tech}</span>
    </div>
  );
}

async function importIcon(tech: string): Promise<IconDefinition> {
  switch (tech) {
    case "JavaScript":
      const { faJs } = await import("@fortawesome/free-brands-svg-icons/faJs");
      return faJs;
    case "Python":
      const { faPython } = await import(
        "@fortawesome/free-brands-svg-icons/faPython"
      );
      return faPython;
    case "Java":
      const { faJava } = await import(
        "@fortawesome/free-brands-svg-icons/faJava"
      );
      return faJava;
    default:
      const { faQuestionCircle } = await import(
        "@fortawesome/free-solid-svg-icons/faQuestionCircle"
      );
      return faQuestionCircle; // default icon if tech not recognized
  }
}
