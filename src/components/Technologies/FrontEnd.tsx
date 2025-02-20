import { useRef } from "react";
import "../../index.css";
import TechnologyCard from "./TechnologyCard";
import { useScroll, useTransform, motion } from "framer-motion";
import react from "../../assets/Technologies/Frontend/react.png";
import cssHtml from "../../assets/Technologies/Frontend/css-html.png";
import framerMotion from "../../assets/Technologies/Frontend/framer-motion.svg";
import javascript from "../../assets/Technologies/Frontend/js.png";
import redux from "../../assets/Technologies/Frontend/redux.png";
import tailwind from "../../assets/Technologies/Frontend/tailwind.png";
import typescript from "../../assets/Technologies/Frontend/TS.png";
import { Reveal } from "../Reveal";
import { useIsMobile } from "../../hooks/useIsMobile";

interface TechType {
  type: string;
  name: string;
  icons: string[];
}

const frontTechnologies: TechType[] = [
  {
    type: "Framework/Libraries",
    name: "React.js, React Router, Redux, Framer Motion",
    icons: [react, redux, framerMotion],
  },
  {
    type: "Languages",
    name: "TypeScript, Javascript, HTML, CSS",
    icons: [typescript, javascript, cssHtml],
  },
  {
    type: "Styling",
    name: "Tailwind CSS",
    icons: [tailwind],
  },
];

const FrontEnd = () => {
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.4, 0.8], ["16%", "-95%"]);

  if (isMobile) {
    return (
      <>
        {/* <Reveal width="100%"> */}
        <motion.div className="flex flex-col gap-4">
          {frontTechnologies.map((tech, id) => {
            return <TechnologyCard key={id} tech={tech} />;
          })}
        </motion.div>
        {/* </Reveal> */}
      </>
    );
  }

  return (
    <div ref={targetRef} className="h-full xl:h-[200vh]">
      <div className="sticky top-1/3 flex h-[60vh] items-center overflow-hidden">
        <Reveal width="100%">
          <motion.div style={{ x }} className="flex gap-4">
            {frontTechnologies.map((tech, id) => {
              return <TechnologyCard key={id} tech={tech} />;
            })}
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

export default FrontEnd;
