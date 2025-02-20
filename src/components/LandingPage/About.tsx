import "../../index.css";
import { Reveal } from "../Reveal";

const About = () => {
  return (
    <div className="w-full bg-slate-200 pb-20 xl:h-[35vh] xl:pb-0">
      <div className="m-auto flex w-[90vw] flex-col items-center justify-center text-center xl:w-[60svw] xl:items-start xl:py-10 xl:text-left">
        <Reveal>
          <p className="text-3xl tracking-tighter">A Bit About Me</p>
        </Reveal>
        <Reveal>
          <p className="py-4 text-5xl">Who Am I?</p>
        </Reveal>
        <Reveal>
          <p className="text-2xl">
            I&apos;m Aaron. I was born in Mexico and moved to the United States
            in 2022. You can often find me listening to music or even creating
            some hobbyist songs myself. After moving here, I sought new
            challenges and decided to pivot my career. I&apos;ve always been
            interested in technology and how it enhances our lives, so I chose
            to become a developer. I&apos;m really excited to embark on this new
            path!{" "}
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
