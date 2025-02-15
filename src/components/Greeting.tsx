import ProfileImg from "../../public/ProfileImg.png";
import "../index.css";
import About from "./About";
import { Reveal } from "./Reveal";

const Greeting = () => {
  return (
    <div className="h-[140svh] bg-slate-200">
      <div className="m-auto flex h-[75%] w-[70%] items-start justify-around">
        <div className="relative m-auto flex flex-col items-start justify-end">
          <Reveal>
            <p className="text-5xl font-extralight text-black">Hello, I'm</p>
          </Reveal>
          <Reveal>
            <p className="pb-3 text-7xl font-bold text-black">Aaron Garcia</p>
          </Reveal>
          <Reveal>
            <button className="rounded-sm border-gray-200 bg-gray-700 p-3 px-9 text-2xl text-gray-200 hover:border-transparent hover:bg-gray-500 hover:text-white active:bg-gray-600">
              Get in Touch
            </button>
          </Reveal>
        </div>
        <div className="w-[500px] overflow-hidden rounded-2xl">
          <Reveal>
            <img src={ProfileImg}></img>
          </Reveal>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Greeting;
