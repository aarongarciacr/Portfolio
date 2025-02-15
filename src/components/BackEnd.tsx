import { useRef } from "react";
import "../index.css";
import TechnologyCard from "./TechnologyCard";
import { useScroll, useTransform, motion } from "framer-motion";
import express from "../../public/Technologies/Backend/express.png";
import flask from "../../public/Technologies/Backend/flask.svg";
import node from "../../public/Technologies/Backend/node.png";
import postgres from "../../public/Technologies/Backend/postgres.png";
import python from "../../public/Technologies/Backend/python.png";
import sequelize from "../../public/Technologies/Backend/sequelize.png";
import sqlite from "../../public/Technologies/Backend/sqlite.png";

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
    icons: [sequelize],
  },
  {
    type: "Databases",
    name: "PostgreSQL, SQLite",
    icons: [postgres, sqlite],
  },
];

const BackEnd = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-95%"]);
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
