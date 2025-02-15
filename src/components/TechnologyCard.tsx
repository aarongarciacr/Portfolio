import { useState } from "react";
import "../index.css";

interface TechnologyCardProps {
  tech: {
    type: string;
    name: string;
    icons: string[];
  };
}

const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <div className="flex flex-col">
      <h1>{tech.type}</h1>

      <div className="group relative flex h-[450px] w-[450px] items-center justify-center overflow-hidden rounded-xl bg-neutral-200">
        <div className="scroll-container">
          <div className={`scroll-container scroll-animation`}>
            {tech.icons.map((icon, id) => (
              <img
                key={id}
                src={icon}
                alt={icon}
                className="h-100 object-cover"
              />
            ))}
          </div>
          <div className={`scroll-container scroll-animation`}>
            {tech.icons.map((icon, id) => (
              <img
                key={`clone-${id}`}
                src={icon}
                alt={icon}
                className="h-100 object-cover"
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-30 flex-col justify-end bg-black/50 p-4 text-2xl text-white">
          <p className="text-base">{tech.name.toLocaleUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
