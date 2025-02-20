import { Reveal } from "../Reveal";

interface TechnologyCardProps {
  tech: {
    type: string;
    name: string;
    icons: string[];
  };
}

// const TechnologyCard = ({ tech }: TechnologyCardProps) => {
//   return (
//     <div className="flex flex-col text-center text-3xl text-slate-200 xl:text-left">
//       <Reveal width="100%">
//         <h1 className="pb-10">{tech.type}</h1>
//       </Reveal>

//       <div className="group relative flex items-center justify-center overflow-hidden rounded-xl bg-neutral-200 xl:h-[450px] xl:w-[450px]">
//         <div className="scroll-container">
//           <div className={`scroll-wrapper border-s-red-800`}>
//             {tech.icons.map((icon, id) => (
//               <img
//                 key={id}
//                 src={icon}
//                 alt={icon}
//                 // className="h-100 object-cover"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="absolute inset-x-0 bottom-0 flex h-30 flex-col justify-end bg-black/50 p-4 text-2xl text-white">
//           <p className="text-3xl">{tech.name.toLocaleUpperCase()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <div className="flex flex-col text-center text-3xl text-slate-200 xl:text-left">
      <Reveal width="100%">
        <h1 className="pb-10">{tech.type}</h1>
      </Reveal>

      <div className="group relative flex h-[450px] w-[90vw] items-center justify-center overflow-hidden rounded-xl bg-neutral-200 xl:h-[450px] xl:w-[450px]">
        <div className={`wrapper`}>
          {tech.icons.map((icon, id) => {
            const totalImgs = tech.icons.length;
            return (
              <img
                key={id}
                src={icon}
                alt={icon}
                style={{
                  animationDelay: `calc(10s / ${totalImgs} * (${totalImgs} - ${id + 1}) * -1)`,
                }}
                className={`item`}
              />
            );
          })}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-30 flex-col justify-end bg-black/50 p-4 text-2xl text-white">
          <p className="text-3xl">{tech.name.toLocaleUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
