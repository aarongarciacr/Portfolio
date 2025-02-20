const ContactInfo = () => {
  return (
    <div className="flex h-full flex-col items-start justify-around bg-neutral-700 p-10 pl-11 text-white xl:w-250">
      <h1 className="mb-4 text-6xl">Let&apos;s Talk</h1>
      <p className="mb-4 text-3xl">
        I&apos;m always open to new opportunities and collaborations. Feel free
        to reach out to me for any inquiries or just to say hi!
      </p>
      <div>
        <p className="mb-4 text-3xl">Phone</p>
        <p className="mb-4 text-2xl text-neutral-400">+1 602 - 828 - 7364</p>
      </div>
      <div>
        <p className="mb-4 text-3xl">Drop your message</p>
        <a
          href="mailto:aarongarcia4997@gmail.com"
          className="mb-4 text-2xl text-neutral-400 underline transition-colors hover:text-white"
        >
          aarongarcia4997@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
