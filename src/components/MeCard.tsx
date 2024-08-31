import React from "react";
import meImg from "@images/definiteltyme.jpg";

type Props = {};

function MeCard({}: Props) {
  return (
    <div
      id="glass"
      className="border-l-opacity-10 border-r-opacity-30 flex h-4/5 w-2/3 items-center justify-center rounded-sm border-l-[1px] border-r-[1px] border-l-gray-200 border-r-gray-200 border-t-gray-200 border-opacity-20 bg-purple-800 bg-opacity-10 drop-shadow-rxl backdrop-blur-lg"
    >
      <div className="grid h-4/5 w-4/5 grid-cols-60/40 grid-rows-1 items-center justify-center justify-items-center gap-8 p-8">
        <div className="flex h-full w-full flex-col justify-center rounded-2xl px-8">
          <div className="flex gap-4 text-3xl">
            <span>&#9655;</span>
            <span>
              Hi, my name is <span className="text-retrogreen">Robby</span>
            </span>
          </div>
          <div className="mt-8 flex text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            placeat, consequatur ad possimus quis vel quaerat tenetur facilis
            aliquid natus odit enim delectus dolore doloremque asperiores. Optio
            nemo ipsum veritatis? Aperiam, veritatis odio dolores accusantium
            quibusdam necessitatibus perferendis blanditiis exercitationem nihil
            doloremque. Quae eveniet eos aperiam iure voluptates eius incidunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            pariatur?
          </div>
        </div>
        <div
          className="h-full w-full rounded-2xl border-2 border-purple-900 border-opacity-40 bg-cover bg-meImg bg-no-repeat"
          style={{ backgroundImage: `url(${meImg.src})` }}
        ></div>
      </div>
    </div>
  );
}

export default MeCard;
