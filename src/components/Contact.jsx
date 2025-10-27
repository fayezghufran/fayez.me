import React from "react";
import { BiSend } from "react-icons/bi";
import { GiMoebiusStar } from "react-icons/gi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-20 md:mt-28 flex flex-col gap-10 px-4"
    >
      {/* Heading */}
      <div
        className="max-w-2xl text-center md:text-left"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <button
          className="flex items-center gap-2 px-3 py-1 border border-gray-600 text-gray-300 rounded-xl hover:bg-[#161616] transition mx-auto md:mx-0"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <GiMoebiusStar className="text-xl" /> Contact
        </button>
        <h1
          className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Let's Make Something{" "}
          <span className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] inline-block text-transparent bg-clip-text">Awesome Together</span>
        </h1>
        <p
          className="mt-4 text-gray-400 text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Questions, thoughts, or just want to say hello?
        </p>
      </div>

      {/* Form */}
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto md:mx-0 w-full"
      >
        {[
          { name: "name", placeholder: "Your Name", type: "text" },
          { name: "company", placeholder: "Company Name", type: "text" },
          { name: "email", placeholder: "Email Address", type: "email" },
          { name: "phone", placeholder: "Phone Number", type: "tel" },
        ].map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required={input.name === "name" || input.name === "email"}
            className="outline-none border-b-2 border-gray-600 py-3 px-2 w-full"
            data-aos="fade-up"
            data-aos-delay={500 + index * 100}
          />
        ))}

        {/* Message */}
        <textarea
          name="message"
          placeholder="Few Words"
          required
          className="outline-none border-b-2 border-gray-600 py-3 px-2 resize-none col-span-1 sm:col-span-2 w-full"
          rows={4}
          data-aos="fade-up"
          data-aos-delay="900"
        ></textarea>

        {/* Button */}
        <div data-aos="zoom-in" data-aos-delay="1000">
          <button
            type="submit"
            className="mt-4 px-8 py-2.5 text-lg bg-linear-to-r from-[#eacda3] to-[#d6ae7b] text-black hover:from-[#d6ae7b] hover:to-[#eacda3] cursor-pointer rounded-2xl flex items-center justify-center gap-2"
          >
            Send Message <BiSend />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
