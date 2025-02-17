import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
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
        className="flex h-130 w-full flex-col items-center justify-around p-4 text-gray-800"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="mb-4 w-130 border-b-2 border-gray-400 p-2 text-lg"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-4 w-130 border-b-2 border-gray-400 p-2 text-lg"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="mb-4 h-50 w-130 border-b-2 border-gray-400 p-2 text-lg"
        />
        <button
          type="submit"
          className="w-50 cursor-pointer rounded-md bg-gray-800 p-2 text-lg text-white transition-colors hover:bg-gray-700 active:bg-gray-900"
        >
          <p className="text-center font-bold tracking-[.5rem]">SEND</p>
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
