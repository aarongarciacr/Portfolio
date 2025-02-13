import ProfileImg from "../../public/ProfileImg.png";
import "../index.css";
import About from "./About";

const Greeting = () => {
  return (
    <div className="h-[130svh] bg-slate-200">
      <div className="m-auto flex h-[70%] w-[70%] items-center justify-around">
        <div className="flex flex-col items-start justify-center">
          <p className="text-5xl font-extralight text-black">Hello, I'm</p>
          <p className="pb-3 text-7xl font-bold text-black">Aaron Garcia</p>
          <button className="rounded-sm border-gray-200 bg-gray-700 p-3 px-9 text-2xl text-gray-200 hover:border-transparent hover:bg-gray-500 hover:text-white active:bg-gray-600">
            Get in Touch
          </button>
        </div>
        <div className="w-[500px] overflow-hidden rounded-2xl">
          <img src={ProfileImg}></img>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Greeting;
