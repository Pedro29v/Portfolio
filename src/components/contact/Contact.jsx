import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import message from "../../img/message.svg";

function Contact() {
  return (
    <div className="w-screen h-auto  bg-secondary py-4   ">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl  text-complement mt-4"
      >
        Contacto
      </h2>

      <div
        className="text-complement text-lg lg:grid lg:grid-cols-2"
        data-aos="fade-up"
      >
        <div className="w-[19rem] h-[15rem] rounded-sm m-auto mt-6 lg:mt-24 mb-8 p-6 lg:shadow-lg lg:shadow-black">
          <strong>pedrocastillo24.pc@gmail.com</strong> <hr />
          <p className="mt-4 hover:text-xl transition-all ">
            <a
              href="https://www.linkedin.com/in/pedro-castillo-dev/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            <hr />
          </p>
          <p className="mt-4 hover:text-xl transition-all">
            <a
              href="https://github.com/Pedro29v"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            <hr />
          </p>
          <button
            className="w-36 p-2 mt-6 mb-4  md:w-[10rem] rounded-md
            bg-primary md:text-complement md:text-lg transition-all duration-700 hover:shadow-md hover:shadow-black "
          >
            <a href="./PedroCurriclum.pdf" download>
              <FontAwesomeIcon
                icon={faFileArrowDown}
                className="mt-[0.4rem] mr-3 "
              />
              Curriculum
            </a>
          </button>
        </div>
        <div className="mb-8">
          <img src={message} alt="ilustarcion"></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
