import React from "react";
import NavBar from "./navBar";
import Carousel from "./Carrusel";
import About from "./About";
import Footer from "./footer";
import BotonWhat from "./BotonWhat";

const Home = ({ correoUsuario }) => {
  return (
    <div>
      <NavBar correoUsuario={correoUsuario} />
      <Carousel />
      <About />
      <Footer />
      <BotonWhat />
    </div>
  );
};

export default Home;
