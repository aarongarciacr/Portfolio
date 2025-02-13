import "../index.css";

const Greeting = () => {
  return (
    <div className="h-dvh bg-slate-300">
      <div className="flex-col items-start justify-center">
        <p className="text-3xl text-black">Hello, I'm</p>
        <p className="text-5xl font-bold text-black">Aaron Garcia</p>
        <button className="btn">Get in Touch</button>
      </div>
    </div>
  );
};

export default Greeting;
