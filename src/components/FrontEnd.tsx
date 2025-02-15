import { useRef } from "react";
import "../index.css";
import TechnologyCard from "./TechnologyCard";
import { useScroll, useTransform, motion } from "framer-motion";
import react from "../../public/Technologies/Frontend/react.png";
import cssHtml from "../../public/Technologies/Frontend/css-html.png";
import framerMotion from "../../public/Technologies/Frontend/framer-motion.svg";
import javascript from "../../public/Technologies/Frontend/js.png";
import redux from "../../public/Technologies/Frontend/redux.png";
import tailwind from "../../public/Technologies/Frontend/tailwind.png";
import typescript from "../../public/Technologies/Frontend/TS.png";

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
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.4, 0.8], ["16%", "-95%"]);
  return (
    <div ref={targetRef} className="h-[200vh]">
      <div className="sticky top-1/3 flex h-[60vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {frontTechnologies.map((tech, id) => {
            return <TechnologyCard key={id} tech={tech} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default FrontEnd;
