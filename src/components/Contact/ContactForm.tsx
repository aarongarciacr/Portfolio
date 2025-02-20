import { useState } from "react";
import emailjs from "@emailjs/browser";

interface Status {
  error?: string;
  success?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ error: "Please fill out all fields." });
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus({ success: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ error: "An error occurred, please try again later." });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-gray flex h-full w-full flex-col items-center justify-center bg-neutral-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="p:0 flex w-[100%] flex-col items-center justify-around text-gray-800 xl:h-130 xl:w-full xl:p-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="mb-4 w-[90%] border-b-2 border-gray-400 p-2 text-lg xl:w-130"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb:w-130 mb-4 w-[90%] border-b-2 border-gray-400 p-2 text-lg"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="mb:w-130 mb-4 h-50 w-[90%] border-b-2 border-gray-400 p-2 text-lg"
        />
        <button
          type="submit"
          className="rounded-sm border-gray-200 bg-gray-700 p-3 px-9 text-2xl text-gray-200 hover:border-transparent hover:bg-gray-500 hover:text-white active:bg-gray-600"
        >
          <p className="text-center font-bold tracking-[.5rem]">SEND</p>
        </button>
        {status.error && (
          <p className="mt-4 text-center text-2xl font-bold text-red-600 uppercase">
            {status.error}
          </p>
        )}
        {status.success && (
          <p className="mt-4 text-center text-2xl font-bold text-green-600 uppercase">
            {status.success}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
