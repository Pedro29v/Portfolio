import React, { useEffect } from "react";
import ilustration from "../../img/ilustration.svg";
import linkedIn from "../../img/linkedin.png";
import github from "../../img/github.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Info() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-screen h-screen md:flex md:flex-col-reverse lg:flex lg:flex-row-reverse  ">
      <div
        data-aos="fade-down"
        className="w-3/4 h-2/4  m-auto absolute top-[19rem] left-[3rem] rounded md:static lg:mr-[13rem]  "
      >
        <h1 className="text-complement text-3xl mt-32 md:text-5xl md:mt-6 lg:text-4xl  ">
          Pedro Castillo
        </h1>
        <p className="text-complement mt-2 md:text-2xl md:mt-2 ">
          Full Stack Developer
        </p>
        <div className="w-[50%]  flex justify-evenly m-auto mt-10 md:w-[25%] ">
          <a
            href="https://www.linkedin.com/in/pedro-castillo-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedIn}
              alt="linkedin"
              className="w-8 h-8  bg-complement p-2 rounded hover:p-1 transition-all md:w-10 md:h-10  lg:w-10 lg:h-10 "
            ></img>
          </a>
          <a
            href="https://github.com/Pedro29v"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              className="w-8 h-8  bg-complement p-1 rounded hover:p-0 transition-all md:w-10 md:h-10 lg:w-10 lg:h-10 "
            ></img>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className=" w-3/4 h-auto p-4 m-auto flex   rounded-full absolute
      top-[10rem] left-[3rem] md:w-[35rem] md:h-auto md:static md:mt-[8rem] lg:ml-[15rem] lg:w-[50rem]  "
      >
        <img src={ilustration} alt="pedro" className="rounded-full "></img>
      </div>
    </div>
  );
}

export default Info;
