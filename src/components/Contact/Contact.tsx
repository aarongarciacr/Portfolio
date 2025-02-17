import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="relative flex h-[90svh] items-center justify-center bg-slate-200">
      <div className="flex h-170 w-300 items-center justify-around">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
