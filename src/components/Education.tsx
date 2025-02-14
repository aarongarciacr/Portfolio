import "../index.css";

const education = [
  {
    name: "Universidad Autonoma De Nuevo Leon",
    description:
      "I graduated in 2020 and received my Bachelor's Degree of          International Business.",
  },
  {
    name: "App Academy",
    description:
      "I completed App Academy's rigorous 24-week Software Engineering Bootcamp, where I immersed myself in an intensive curriculum designed to cultivate expertise in full-stack development. App Academy has equipped me with hands-on coding skills,problem-solving abilities, and a deep understanding of industry-relevant technologies. I am committed to honing my craft and aspiring to become a proficient software engineer.",
  },
];

const Education = () => {
  return (
    <>
      <div className="h-[80svh] bg-slate-800">
        <div className="m-auto h-full w-[60svw]">
          <h1 className="py-10 pb-0 text-3xl text-gray-400">Education</h1>
          <div className="flex h-[80%] flex-col justify-around text-gray-200">
            {education.map((school, index) => {
              return (
                <div key={index}>
                  <h1 className="py-5 text-5xl">{school.name}</h1>
                  <p className="text-2xl">{school.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
