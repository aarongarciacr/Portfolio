import ProfileImg from "../../assets/ProfileImg.png";
import "../../index.css";
import { Reveal } from "../Reveal";

const Greeting = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-[100vh] bg-slate-200 xl:h-[100vh]">
      <div className="m-auto flex h-[90%] w-[95%] flex-col items-center justify-center gap-8 xl:w-[70%] xl:flex-row xl:items-start xl:justify-around">
        <div className="relative m-auto flex flex-col items-center text-center xl:items-start xl:text-left">
          <Reveal>
            <p className="text-3xl font-extralight text-black xl:text-5xl">
              Hello, I'm
            </p>
          </Reveal>
          <Reveal>
            <p className="pb-3 text-5xl font-bold text-black xl:text-7xl">
              Aaron Garcia
            </p>
          </Reveal>
          <Reveal>
            <button
              onClick={scrollToContact}
              className="rounded-sm border-gray-200 bg-gray-700 p-2 px-6 text-xl text-gray-200 hover:border-transparent hover:bg-gray-500 hover:text-white active:bg-gray-600 xl:p-3 xl:px-9 xl:text-2xl"
            >
              Get in Touch
            </button>
          </Reveal>
        </div>
        <div className="w-[350px] overflow-hidden rounded-2xl xl:w-[600px]">
          <Reveal>
            <img src={ProfileImg} alt="Profile" />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
