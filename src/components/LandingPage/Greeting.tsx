import ProfileImg from "../../assets/ProfileImg.png";
import "../../index.css";
import About from "./About";
import { Reveal } from "../Reveal";

const Greeting = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-[140vh] bg-slate-200">
      <div className="m-auto flex h-[75%] w-[95%] flex-col items-center justify-center gap-8 md:w-[70%] md:flex-row md:items-start md:justify-around">
        <div className="relative m-auto flex flex-col items-center text-center md:items-start md:text-left">
          <Reveal>
            <p className="text-3xl font-extralight text-black sm:text-blue-500 md:text-5xl">
              Hello, I'm
            </p>
          </Reveal>
          <Reveal>
            <p className="pb-3 text-5xl font-bold text-black md:text-7xl">
              Aaron Garcia
            </p>
          </Reveal>
          <Reveal>
            <button
              onClick={scrollToContact}
              className="rounded-sm border-gray-200 bg-gray-700 p-2 px-6 text-xl text-gray-200 hover:border-transparent hover:bg-gray-500 hover:text-white active:bg-gray-600 md:p-3 md:px-9 md:text-2xl"
            >
              Get in Touch
            </button>
          </Reveal>
        </div>
        <div className="w-[350px] overflow-hidden rounded-2xl md:w-[600px]">
          <Reveal>
            <img src={ProfileImg} alt="Profile" />
          </Reveal>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Greeting;
