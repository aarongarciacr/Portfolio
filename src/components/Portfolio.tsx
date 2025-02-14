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
    <div>
      <h1>My Work</h1>
      {portfolio.map((project, index) => {
        return (
          <div key={index}>
            <PortfolioCard
              name={project.name}
              type={project.type}
              description={project.description}
              image={project.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
