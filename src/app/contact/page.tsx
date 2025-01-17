import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="md:p-12 p-3  w-full min-h-[60vh]  font-space flex  items-center justify-center"
    >
      <div className=" ">
        <h1 className="p-3 text-center relative max-md:text-2xl     text-4xl font-popins font-bold text-secondary">
          <span className=" relative after:h-1 after:-rotate-1 after:w-full after:absolute after:left-0 after:bottom-0   after:bg-accent">
            Contact Me
          </span>{" "}
        </h1>
        <div className=" flex items-center justify-center ">
          <form
            className="flex flex-col  p-3 "
            action="https://getform.io/f/bdrywmeb"
            method="POST"
          >
            <input
              required
              placeholder="Enter Your Email"
              className="m-2 text-primary font-popins  bg-bg rounded-md p-2 "
              type="email"
              name="email"
              id="email"
            />
            <textarea
              required
              placeholder="Hey Nandha ! Lets work on a project.."
              className=" m-2 text-primary font-popins  bg-bg rounded-md p-2"
              name="message"
              id="message"
            ></textarea>
            <div className=" text-center">
              <button
                className="p-2 font-popins bg-white m-3 text-black rounded-full w-1/2 text-center"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <h2 className=" text-center font-montserrat text-lg ">
          nandhakrishnandev@gmail.com
        </h2>
      </div>
    </div>
  );
};

export default Contact;
