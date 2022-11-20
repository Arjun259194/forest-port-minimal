import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      href={link}
      target="_black"
      rel="noopener noreferrer"
      className="px-1 py-2 border-2 border-stone-700 dark:border-stone-200 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt=""
        className="w-full h-36 md:h-52 object-cover cursor-pointer rounded-md"
      />
      <div className="w-full p-4 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 dark:text-white font-semibold">{title}</h3>
        <p className="flex flex-wrap gap=2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-700 dark:border-stone-100 dark:text-white rounded-md mx-1">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
