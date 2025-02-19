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
    <section ref={targetRef} className="relative h-[300vh] bg-slate-800">
      <div className="sticky top-0 h-screen">
        <div className="relative h-full overflow-hidden">
          <motion.div
            style={{ x }}
            className="absolute top-0 left-0 flex h-screen w-[200vw]"
          >
            <div className="h-screen w-screen flex-shrink-0 p-8">
              <Reveal width="100%">
                <h2 className="mb-8 text-center text-4xl text-white">
                  Frontend Technologies
                </h2>
              </Reveal>
              <FrontEnd />
            </div>

            <div className="h-screen w-screen flex-shrink-0 p-8">
              <Reveal width="100%">
                <h2 className="mb-8 text-center text-4xl text-white">
                  Backend Technologies
                </h2>
              </Reveal>
              <BackEnd />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
