import React from "react";

function Resume() {
  return (
    <div className="w-screen h-auto md:h-[100vh]  bg-secondary text-complement py-4">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl 
       text-complement mt-4 "
      >
        Experience
      </h2>

      <div className=" lg:grid lg:grid-cols-2 ">
        <div className="px-4  p-2 md:mt-8 lg:mt-4 " data-aos="fade-up">
          <p className="text text-2xl mt-6 lg:mt-4">Education</p>
          <div
            className="text-left px-4 mt-4 md:text-lg md:mt-6 lg:shadow-md 
          lg:shadow-primary lg:rounded-md lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm "
          >
            <p>
              <strong>Title:</strong> Higher University Technician in Computer
              Science
            </p>
            <p>
              <strong>Institute:</strong> Instituto Universitario De Tecnología
              del Estado Bolívar. Venezuela
            </p>
            <p>
              <strong>Finished in: </strong> 2016
            </p>
          </div>

          <div
            className="text-left px-4 mt-4 md:text-lg lg:shadow-md 
          lg:shadow-primary lg:rounded-sm lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Title:</strong> Full Stack Developer
            </p>
            <p>
              <strong>Institute:</strong> Henry Bootcamp. Argentina
            </p>
            <strong>Finished in: </strong> 2022
          </div>

          <div
            className="text-left px-4 mt-4 md:text-lg lg:shadow-md  
          lg:shadow-primary lg:rounded-sm lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Title:</strong> HTML Web Developer
            </p>
            <p>
              <strong>Institute:</strong> Digital Innovation One Inc. Brasil
            </p>
            <strong>Finished in: </strong> 2021
          </div>
        </div>

        <div className="px-4 p-2 " data-aos="fade-up">
          <p className="text text-2xl mt-6 md:mt-10 lg:mt-8">Projects</p>

          <div
            className="px-4 text-justify mt-4 md:text-lg md:mt-6 lg-mt2 lg:w-[39.5rem] lg:shadow-md
          lg:shadow-primary lg:rounded-sm lg:p-4 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Project: </strong>App Dogs
            </p>
            <p>
              <strong>Description: </strong>
              Design and development of an app about dog breeds that includes:
              searches, filtering, sorting and creation. In this project I
              strengthened my knowledge about React and Redux, the use of APIS,
              the use of PostgreSQL for database and the use of Node js for the
              back end.
            </p>
          </div>

          <div
            className="px-4 text-justify mt-4 md:text-lg lg:w-[39.5rem] lg:mt-2 lg:shadow-md
          lg:shadow-primary lg:rounded-sm lg:p-2 hover:shadow-sm transition-all duration-1000 lg:hover:bg-primary lg:hover:rounded-sm"
          >
            <p>
              <strong>Project: </strong>E-commerce
            </p>
            <p>
              <strong>Description: </strong>
              Ecommerce development of clothing and accessories in which I
              worked as a front end developer. as a front end developer. Through
              this project I learned how to login using firebase, I had my first
              experience working with the Scrum methodology experience working
              with Scrum methodology and improved my git management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
