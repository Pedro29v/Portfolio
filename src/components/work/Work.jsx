import React from "react";
import dog from "../../img/dog.png";
import ecom from "../../img/ecommerce.png";
import netflix from "../../img/netflix.png";
import dolarblue from "../../img/dolarBlue.png";

function Work() {
  return (
    <div className="w-screen h-auto lg:h-[100vh] bg-primary py-4   ">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl  text-complement mt-4"
      >
        Portfolio
      </h2>

      <div
        className="mt-10 text-complement font-bold
       md:grid md:grid-cols-3 md:p-4 md:gap-2"
        data-aos="fade-up"
      >
        <div
          className="w-[15rem] h-[13rem] lg:w-[20rem] lg:h-[15rem] bg-primary  m-auto rounded-md p-4
        lg:hover:shadow-xl lg:hover:shadow-black lg:hover:bg-secondary  transition-all duration-1000 hover:scale-125 "
        >
          <a
            href="https://dogs-app-tau.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-full h-32 rounded">
              <img src={dog} alt="dog" className="w-full h-full rounded"></img>
            </div>

            <div className="mt-4">Dogs App</div>
          </a>
        </div>

        <div
          className="w-[15rem] h-[13rem] lg:w-[20rem] lg:h-[15rem] bg-primary  m-auto rounded-md p-4
        lg:hover:shadow-xl lg:hover:shadow-black lg:hover:bg-secondary  transition-all duration-1000 hover:scale-125"
        >
          <a
            href="https://free-style-store.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-full h-32 rounded">
              <img
                src={ecom}
                alt="ecommerce"
                className="w-full h-full rounded"
              ></img>
            </div>
            <div className="mt-4">E-commerce Frre Style</div>
          </a>
        </div>

        <div
          className="w-[15rem] h-[13rem] lg:w-[20rem] lg:h-[15rem] bg-primary m-auto rounded-md p-4
        lg:hover:shadow-xl lg:hover:shadow-black lg:hover:bg-secondary  transition-all duration-1000 hover:scale-125 "
        >
          <a
            href="https://pedro29v.github.io/clone-do-netflix/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-full h-32 rounded">
              <img
                src={netflix}
                alt="clon de netflix"
                className="w-full h-full rounded"
              ></img>
              <div className="mt-4">Clon de Netflix</div>
            </div>
          </a>
        </div>

        <div
          className="w-[15rem] h-[13rem] lg:w-[20rem] lg:h-[15rem] bg-primary m-auto rounded-md p-4
        lg:hover:shadow-xl lg:hover:shadow-black lg:hover:bg-secondary  transition-all duration-1000 hover:scale-125 "
        >
          <a
            href="https://dollar-blue-price.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-full h-32 rounded">
              <img
                src={dolarblue}
                alt="dolar Blue"
                className="w-full h-full rounded"
              ></img>
              <div className="mt-4">Dolar Blue Price</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
