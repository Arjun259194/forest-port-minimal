import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center flex-col pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Arjun</h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a full stack web developer. You can check my projects on{" "}
        <a
          className="text-blue-500 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          href="https://github.com/Arjun259194">
          Github/Arjun
        </a>
      </p>
    </div>
  );
}
