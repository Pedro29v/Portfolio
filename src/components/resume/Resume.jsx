import React from "react";

function Resume() {
  return (
    <div className="w-screen h-auto md:h-[100vh]  bg-secondary text-complement py-4">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl 
       text-complement mt-4 "
      >
        Experiencia
      </h2>

      <div className=" lg:grid lg:grid-cols-2 ">
        <div className="px-4  p-2 md:mt-8 lg:mt-4 " data-aos="fade-up">
          <p className="text text-2xl mt-6 lg:mt-4">Educación</p>
          <div
            className="text-left px-4 mt-4 md:text-lg md:mt-6 lg:shadow-md 
          lg:shadow-primary lg:rounded-md lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm "
          >
            <p>
              <strong>Titulo:</strong> Técnico superior universitario
            </p>
            <p>
              <strong>Instituto:</strong> Instituto Universitario De Tecnología
              del Estado Bolívar. Venezuela
            </p>
            <p>
              <strong>Finalizado en: </strong> 2016
            </p>
          </div>

          <div
            className="text-left px-4 mt-4 md:text-lg lg:shadow-md 
          lg:shadow-primary lg:rounded-sm lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Titulo:</strong> Full Stack Developer
            </p>
            <p>
              <strong>Instituto:</strong> Henry Bootcamp. Argentina
            </p>
            <strong>Finalizado en: </strong> 2022
          </div>

          <div
            className="text-left px-4 mt-4 md:text-lg lg:shadow-md  
          lg:shadow-primary lg:rounded-sm lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Titulo:</strong> HTML Web Developer
            </p>
            <p>
              <strong>Instituto:</strong> Digital Innovation One Inc. Brasil
            </p>
            <strong>Finalizado en: </strong> 2021
          </div>
        </div>

        <div className="px-4 p-2 " data-aos="fade-up">
          <p className="text text-2xl mt-6 md:mt-10 lg:mt-8">Experiencia</p>

          <div
            className="px-4 text-justify mt-4 md:text-lg md:mt-6 lg-mt2 lg:w-[39.5rem] lg:shadow-md
          lg:shadow-primary lg:rounded-sm lg:p-4 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Proyecto: </strong>App Dogs
            </p>
            <p>
              <strong>Descripción: </strong>
              Diseño y desarrollo de una app sobre razas de perros que incluye:
              búsquedas, filtrados, ordenamientos y creación. En este proyecto
              afiancé mis conocimientos sobre React y Redux, el consumo de APIS,
              el uso de PostgreSQL para base de datos y el uso de Node js para
              el back end.
            </p>
          </div>

          <div
            className="px-4 text-justify mt-4 md:text-lg lg:w-[39.5rem] lg:mt-2 lg:shadow-md
          lg:shadow-primary lg:rounded-sm lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Proyecto: </strong>E-commerce
            </p>
            <p>
              <strong>Descripción: </strong>
              Desarrollo de Ecommerce de ropa y accesorios en el que trabaje
              como desarrollador front end. Por medio de este proyecto aprendi a
              realizar un login utilizando firebase, tuve mi primera experiencia
              trabajando con la metodologia Scrum y mejore el manejo de git.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
