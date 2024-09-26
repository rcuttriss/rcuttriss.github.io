import React from "react";

type Props = {
  image: any;
  title: string;
  twClasses?: string;
  link: string;
};

function ProjectCard({ image, title, twClasses = "", link }: Readonly<Props>) {
  return (
    <a
      href={link}
      className={`z-10 h-full w-full max-w-[600px] items-center justify-center justify-items-center overflow-hidden grayscale hover:grayscale-0 ${twClasses} border-2 border-coolgrey`}
    >
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </a>
  );
}

export default ProjectCard;
