import { Reveal } from "../Reveal";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex items-center justify-center bg-slate-200 xl:h-[100svh]"
    >
      <Reveal>
        <div className="flex flex-col items-center justify-around xl:h-170 xl:w-300 xl:flex-row">
          <ContactInfo />
          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
