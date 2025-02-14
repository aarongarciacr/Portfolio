interface PortfolioCardProps {
  name: string;
  description: string;
  type: string;
  image: string;
}

const PortfolioCard = ({
  name,
  description,
  type,
  image,
}: PortfolioCardProps) => {
  return (
    <div>
      <img src={image} alt={name}></img>
      <p>{type}</p>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default PortfolioCard;
