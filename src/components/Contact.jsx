import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center item-center">
        <form action="https://getform.io/f/0218550f-5137-4441-ad7a-5d40c3ecb83b" method="post" className="flex flex-col w-ful md:w-7/12">
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            id="name"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Enter your message"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
            Work with me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
