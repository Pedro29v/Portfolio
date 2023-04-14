import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Nav() {
  const [open, setOpen] = useState(false);

  const menu = (e) => {
    setOpen(!open);
  };

  return (
    <div className="w-screen h-auto flex flex-col md:flex-row md:justify-between  text-complement  ">
      <div className=" w-screen h-12 flex  justify-between py-3 px-4 md:w-[10rem] md:px-1 ">
        <h2 className="font-bold text-xl ml-2 md:text-4xl md:ml-16 md:mt-6 text-tertiary lg:ml-20 ">
          PEDRO
        </h2>
        <button onClick={menu} className=" md:hidden ">
          <FontAwesomeIcon icon={faBars} className="mt-[0.4rem] mr-3 " />
        </button>
      </div>

      <div className="hidden  md:flex md:w-[45rem] md:pt-7 md:font-bold md:justify-between md:px-4 md:text-[1em] md:mt-4 md:mr-4 lg:mr-8 lg-pt-7  ">
        <a href="#about">
          <p className="md:ml-16 hover:text-tertiary transition hover:transform hover:skew-y-12">
            About me
          </p>
        </a>

        <a href="#skills">
          <p className=" hover:text-tertiary transition hover:transform hover:skew-y-12">
            Skills
          </p>
        </a>

        <a href="#resume">
          <p className=" hover:text-tertiary transition hover:transform hover:skew-y-12">
            Experience
          </p>
        </a>

        <a href="#work">
          <p className=" hover:text-tertiary transition hover:transform hover:skew-y-12">
            Portfolio
          </p>
        </a>

        <a href="#contact">
          <p className="md:mr-12 hover:text-tertiary transition hover:transform hover:skew-y-12">
            Contact
          </p>
        </a>
      </div>

      {open && (
        <div className="w-screen h-auto bg-secondary font-bold p-2 z-10 ">
          <a href="#about">
            <p className="mt-3">Sobre mi</p> <hr className="w-2/4  m-auto"></hr>
          </a>

          <a href="#skills">
            <p className="mt-3">Habilidades</p>{" "}
            <hr className="w-2/4  m-auto"></hr>
          </a>

          <a href="#resume">
            <p className="mt-3">Experiencia</p>{" "}
            <hr className="w-2/4  m-auto"></hr>
          </a>

          <a href="#work">
            <p className="mt-3">Portfolio</p>{" "}
            <hr className="w-2/4  m-auto"></hr>
          </a>

          <a href="#contact">
            <p className="mt-3">Contacto</p>
          </a>
        </div>
      )}
    </div>
  );
}

export default Nav;
