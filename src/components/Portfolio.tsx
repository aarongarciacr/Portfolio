import Airbnb from "../../public/portfolio/Airbnb.png";
import Assemble from "../../public/portfolio/Assemble.png";
import EarTrainer from "../../public/portfolio/EarTrainer.png";
import PortfolioCard from "./PortfolioCard";
import { Reveal } from "./Reveal";

const portfolio = [
  {
    name: "Ear Trainer",
    type: "Web Design",
    description: "Music Learning Platform",
    image: EarTrainer,
  },
  {
    name: "Assamble",
    type: "Web Design",
    description: "E-Commerce",
    image: Assemble,
  },
  {
    name: "I'll BRB",
    type: "Web Design",
    description: "Airbnb Clone",
    image: Airbnb,
  },
];

const Portfolio = () => {
  return (
    <div className="h-[100svh] bg-slate-200">
      <div className="m-auto w-[60svw]">
        <Reveal>
          <h1 className="py-20 pl-0 text-5xl">My Work</h1>
        </Reveal>
      </div>

      <div className="mx-50 flex justify-around pt-15">
        {portfolio.map((project, index) => {
          return (
            <Reveal key={index}>
              <PortfolioCard
                name={project.name}
                type={project.type}
                description={project.description}
                image={project.image}
              />
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
