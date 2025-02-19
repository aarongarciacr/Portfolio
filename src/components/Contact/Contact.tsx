import { Reveal } from "../Reveal";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex h-[90svh] items-center justify-center bg-slate-200"
    >
      <Reveal>
        <div className="flex h-170 w-300 items-center justify-around">
          <ContactInfo />
          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
