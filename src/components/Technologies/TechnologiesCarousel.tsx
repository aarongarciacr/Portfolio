import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import BackEnd from "../Technologies/BackEnd";
import FrontEnd from "../Technologies/FrontEnd";
import { Reveal } from "../Reveal";

const TechnologiesCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-[200vw] bg-slate-800"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <Reveal>
          <motion.div style={{ x }} className="flex h-full">
            <div className="h-screen min-w-screen p-8">
              <h2 className="mb-8 text-center text-4xl text-white">
                Frontend Technologies
              </h2>
              <FrontEnd />
            </div>
            <div className="h-screen min-w-screen p-8">
              <h2 className="mb-8 text-center text-4xl text-white">
                Backend Technologies
              </h2>
              <BackEnd />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
