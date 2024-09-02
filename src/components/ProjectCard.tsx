import React from "react";

type Props = {
  image: any;
  title: string;
};

function ProjectCard({ image, title }: Readonly<Props>) {
  return (
    <div className="z-10 h-full w-full items-center justify-center justify-items-center overflow-hidden">
      <div
        className="h-full w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
}

export default ProjectCard;
