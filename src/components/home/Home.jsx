import React, { useEffect } from "react";
import "./home.css";
import Nav from "../nav/Nav";
import Info from "../info/Info";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../about/About";
import Skills from "../skills/Skills";
import Resume from "../resume/Resume";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="primary-container">
      <div className="second-container  ">
        <Nav />
        <Info />
      </div>

      <div
        id="about"
        className="w-screen h-auto md:h-screen bg-secondary text-complement lg:flex "
      >
        <About />
      </div>

      <div id="skills" className="w-screen h-auto md:h-[screen] ">
        <Skills />
      </div>

      <div id="resume" className="w-screen h-auto md:h-[screen] ">
        <Resume />
      </div>

      <div id="work" className="w-screen h-auto md:h-[screen] ">
        <Work />
      </div>

      <div id="contact" className="w-screen h-auto md:h-[screen] ">
        <Contact />
      </div>

      <div className="w-screen h-auto md:h-[screen] ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
