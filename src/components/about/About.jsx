import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import travel from "../../img/travel.png";
import nature from "../../img/nature.png";
import cinema from "../../img/cinema.png";
import sport from "../../img/sport.png";

function About() {
  return (
    <div className="w-screen h-auto  bg-secondary text-complement lg:flex ">
      <div className="lg:w-[50%] p-2 lg:mt-10  ">
        <h2 className="text-3xl md:text-4xl mt-4 md:mt-10 " data-aos="fade-up ">
          {" "}
          About me
        </h2>

        <div
          data-aos="fade-up"
          className="w-screen h-auto md:w-[40rem] md:m-auto md:text-lg 
          py-2 px-4 md:mt-8 text-justify lg:mt-10 lg:w-[25rem]  "
        >
          <p className="px-4 ">
            <strong className="bg-secondary">
              Hello there! My name is Pedro,{" "}
            </strong>
            and I'm a Full Stack Developer who is always looking for
            opportunities to grow and improve in all areas of my life. My
            objective is to leverage my expertise and experience to develop
            solutions that make a positive impact on people, businesses, and
            society at large. Additionally, I am committed to continuing my
            learning journey every day, so that I can become an even better
            developer.
          </p>
        </div>
        <div data-aos="fade-up" className=" md:mt-14 ">
          <button
            className="invisible lg:visible lg:p-2 lg:mt-6  lg:w-[10rem] lg:rounded-md
            lg:bg-tertiary  lg:text-complement lg:text-lg hover:bg-complement hover:text-secondary transition-all   "
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
      </div>

      <div className="p-2   lg:mt-10" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl mt-4 ">My hobbies</h2>
        <div
          className="grid grid-cols-2 gap-4 py-5 mt-6 md:w-[35rem]
           md:m-auto md:mt-10 lg:mt-16  "
        >
          <div className="w-32 h-28 shadow-md shadow-primary m-auto rounded-md md:w-40 md:h-36 animate-bounce ">
            <img
              src={travel}
              alt="viajes"
              className="m-auto mt-2 md:mt-6 "
            ></img>
            Travel
          </div>

          <div className="w-32 h-28 shadow-md shadow-primary m-auto rounded-md md:w-40 md:h-36 animate-bounce">
            <img
              src={nature}
              alt="naturaleza"
              className="m-auto mt-2 md:mt-6  "
            ></img>
            Nature
          </div>

          <div className="w-32 h-28 shadow-md shadow-primary m-auto rounded-md md:w-40 md:h-36 animate-bounce ">
            <img src={cinema} alt="cine" className="m-auto mt-2 md:mt-6 "></img>
            Movies
          </div>
          <div className="w-32 h-28 shadow-md shadow-primary m-auto rounded-md md:w-40 md:h-36 animate-bounce ">
            <img
              src={sport}
              alt="deportes"
              className="m-auto mt-2 md:mt-6 "
            ></img>
            Sports
          </div>
        </div>
        <div className=" md:mt-20 lg:hidden mb-4 ">
          <button
            className="w-36 p-2 mt-6  md:w-[10rem] rounded-md
            bg-tertiary md:p-2 md:text-complement md:text-lg "
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
      </div>
    </div>
  );
}

export default About;
