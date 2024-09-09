import React from "react";

type Props = {
  image: any;
  title: string;
  twClasses: string;
};

function ProjectCard({ image, title, twClasses }: Readonly<Props>) {
  return (
    <div
      className={`z-10 h-full w-full max-w-[600px] items-center justify-center justify-items-center overflow-hidden grayscale hover:grayscale-0 ${twClasses} border-coolgrey border-2`}
    >
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
}

export default ProjectCard;
