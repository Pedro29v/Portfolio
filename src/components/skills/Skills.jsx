import React from "react";

function Skills() {
  return (
    <div className="w-screen h-[100vh] bg-primary py-4 lg:grid lg:grid-cols-2  ">
      <div>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl  text-complement mt-4"
        >
          Hard Skills
        </h2>
        <div
          data-aos="fade-up"
          className="w-screen lg:w-[100%] h-[60vh] grid grid-cols-3 gap-2 lg:mt-14 lg:gap-4   "
        >
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150 ">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react"
            />
            React
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement  hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="redux"
            />
            Redux
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="Tailwind"
            />
            Tailwind
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript"
            />
            JavaScript
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node"
            />
            Node js
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
              alt="sequelize"
            />
            Sequelize
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="postgreSQL"
            />
            PostgreSQL
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            Git
          </div>
          <div className="w-[5rem] h-[5em] m-auto rounded-sm text-complement hover:scale-125 transition-all ease-in-out duration-150">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html"
            />
            HTML
          </div>
        </div>
      </div>
      <div
        className="w-screen lg:w-[30rem] lg:h-[30rem] lg:m-auto h-[40vh] p-2 text-complement md:text-lg "
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl   mt-4 md:mt-10 lg:mt-[8rem] ">
          Languages
        </h2>
        <div className="mt-6 hover:animate-ping cursor-pointer ">
          English - B1 Intermediate
        </div>
        <div className="mt-2 hover:animate-ping cursor-pointer ">
          Portuguese - Advanced
        </div>
        <div className="mt-2 hover:animate-ping cursor-pointer ">
          Spanish - Native
        </div>
      </div>
    </div>
  );
}

export default Skills;
