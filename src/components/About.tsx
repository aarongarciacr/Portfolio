import ProfileImg from "../../public/ProfileImg.png";
import "../index.css";

const About = () => {
  return (
    <>
      <div className="m-auto flex w-[60svw] flex-col justify-center">
        <p className="text-3xl tracking-tighter">A Bit About Me</p>
        <p className="py-4 text-5xl">Who Am I?</p>
        <p className="text-2xl">
          I’m Aaron. I was born in Mexico and moved to the United States in
          2022. You can often find me listening to music or even creating some
          hobbyist songs myself. After moving here, I sought new challenges and
          decided to pivot my career. I’ve always been interested in technology
          and how it enhances our lives, so I chose to become a developer. I’m
          really excited to embark on this new path!{" "}
        </p>
      </div>
    </>
  );
};

export default About;
