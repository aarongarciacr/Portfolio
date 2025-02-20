import { useRef } from "react";
import "../../index.css";
import TechnologyCard from "./TechnologyCard";
import { useScroll, useTransform, motion } from "framer-motion";
import express from "../../assets/Technologies/Backend/express.png";
import flask from "../../assets/Technologies/Backend/flask.svg";
import node from "../../assets/Technologies/Backend/node.png";
import postgres from "../../assets/Technologies/Backend/postgres.png";
import python from "../../assets/Technologies/Backend/python.png";
import sequelize from "../../assets/Technologies/Backend/sequelize.png";
import sqlite from "../../assets/Technologies/Backend/sqlite.png";
import sqlAlchemy from "../../assets/Technologies/Backend/SQLAlchemy.svg";
import { useIsMobile } from "../../hooks/useIsMobile";
interface TechType {
  type: string;
  name: string;
  icons: string[];
}

const backTechnologies: TechType[] = [
  {
    type: "Languages",
    name: "Javascript (Node.js), Python",
    icons: [node, python],
  },
  {
    type: "Frameworks",
    name: "Express.js, Flask",
    icons: [express, flask],
  },
  {
    type: "ORMs/Database",
    name: "Sequelize, SQLAlchemy",
    icons: [sequelize, sqlAlchemy],
  },
  {
    type: "Databases",
    name: "PostgreSQL, SQLite",
    icons: [postgres, sqlite],
  },
];

const BackEnd = () => {
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-95%"]);

  if (isMobile) {
    return (
      <>
        {/* <Reveal width="100%"> */}
        <motion.div className="flex flex-col gap-4">
          {backTechnologies.map((tech, id) => {
            return <TechnologyCard key={id} tech={tech} />;
          })}
        </motion.div>
        {/* </Reveal> */}
      </>
    );
  }

  return (
    <div ref={targetRef} className="h-[200vh]">
      <div className="sticky top-1/3 flex h-[60vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {backTechnologies.map((tech, id) => {
            return <TechnologyCard key={id} tech={tech} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BackEnd;
