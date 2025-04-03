import Airbnb from "../../assets/portfolio/Airbnb.png";
import Assemble from "../../assets/portfolio/Assemble.png";
import EarTrainer from "../../assets/portfolio/EarTrainer.png";
import BeatMatch from "../../assets/portfolio/BeatMatch-ai.png";
import PortfolioCard from "./PortfolioCard";
import { Reveal } from "../Reveal";

const portfolio = [
  {
    name: "BeatMatch-AI",
    type: "Web Design",
    description: "AI Playlist Generator",
    image: BeatMatch,
    link: "https://beatmatch-ai.onrender.com/",
  },
  {
    name: "I'll BRB",
    type: "Web Design",
    description: "Airbnb Clone",
    image: Airbnb,
    link: "https://ill-brb-y2ok.onrender.com/",
  },
  {
    name: "Ear Trainer",
    type: "Web Design",
    description: "Music Learning Platform",
    image: EarTrainer,
    link: "https://capstone-j0as.onrender.com/",
  },
  {
    name: "Assemble",
    type: "Web Design",
    description: "E-Commerce",
    image: Assemble,
    link: "https://python-group-gl7x.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-slate-200 xl:h-[100vh]">
      <div className="m-auto w-[60svw] text-center xl:text-left">
        <Reveal width="100%">
          <h1 className="py-20 pl-0 text-5xl">My Work</h1>
        </Reveal>
      </div>

      <div className="m-auto flex w-[90vw] flex-col justify-around xl:m-auto xl:w-[80%] xl:flex-row">
        {portfolio.map((project, index) => {
          return (
            <Reveal
              key={index}
              width="100%"
              className="my-5 transform cursor-pointer transition-transform hover:scale-105"
            >
              <PortfolioCard
                name={project.name}
                type={project.type}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
