import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";

const SocialLinks = () => {
  return (
    <div className="social-links flex h-[15vh] items-center justify-center space-x-5 bg-slate-800">
      {/* target="_blank" opens link in new tab/window */}
      {/* rel="noreferrer" adds security when using target="_blank" */}
      <a
        href="https://www.linkedin.com/in/aaron-garcia-73577a332/"
        target="_blank"
        rel="noreferrer"
        className="h-auto w-12"
      >
        <img src={Linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/aarongarciacr"
        target="_blank"
        rel="noreferrer"
        className="h-auto w-12"
      >
        <img src={Github} alt="Github" />
      </a>
    </div>
  );
};

export default SocialLinks;
