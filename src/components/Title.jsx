import React from "react";

const Title = ({ children, id }) => {
  return (
    <h3
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">
      {children}
    </h3>
  );
};

export default Title;
