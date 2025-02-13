import "../index.css";

const Education = () => {
  return (
    <>
      <div className="h-[70svh] bg-slate-800">
        <div className="m-auto h-full w-[60svw]">
          <h1 className="py-10 text-3xl text-gray-400">Education</h1>
          <div className="flex h-[80%] flex-col justify-around text-gray-200">
            <div>
              <h1 className="py-5 text-5xl">
                {" "}
                Universidad Autonoma de Nuevo Leon
              </h1>
              <p className="text-2xl">
                I graduated in 2020 and received my Bachelor's Degree of
                International Business.
              </p>
            </div>
            <div>
              <h1 className="py-5 text-5xl">App Academy</h1>
              <p className="text-2xl">
                I completed App Academy's rigorous 24-week Software Engineering
                Bootcamp, where I immersed myself in an intensive curriculum
                designed to cultivate expertise in full-stack development. App
                Academy has equipped me with hands-on coding skills,
                problem-solving abilities, and a deep understanding of
                industry-relevant technologies. I am committed to honing my
                craft and aspiring to become a proficient software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
