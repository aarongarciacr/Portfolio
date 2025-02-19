interface PortfolioCardProps {
  name: string;
  description: string;
  type: string;
  image: string;
  link: string;
}

const PortfolioCard = ({
  name,
  description,
  type,
  image,
  link,
}: PortfolioCardProps) => {
  return (
    <>
      <div
        onClick={() => window.open(link, "_blank")}
        className="relative h-[50svh] w-[24svw] overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        ></img>
        <div className="absolute inset-x-0 bottom-0 flex h-30 flex-col justify-end bg-black/50 p-4 text-2xl text-white">
          <p className="text-base">{type.toLocaleUpperCase()}</p>
          <p className="text-3xl">{name.toLocaleUpperCase()}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
