import Airbnb from "../../public/portfolio/Airbnb.png";
import Assemble from "../../public/portfolio/Assemble.png";
import EarTrainer from "../../public/portfolio/EarTrainer.png";
import PortfolioCard from "./PortfolioCard";

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
    <div className="h-[108svh] bg-slate-200">
      <h1 className="m-auto w-[60dvw] py-20 pl-0 text-5xl">My Work</h1>
      <div className="mx-50 flex justify-around pt-15">
        {portfolio.map((project, index) => {
          return (
            <PortfolioCard
              key={index}
              name={project.name}
              type={project.type}
              description={project.description}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
