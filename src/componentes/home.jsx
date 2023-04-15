import React from "react";
import NavBar from "./navBar";
import Carousel from "./Carrusel";
import About from "./About";
import Footer from "./footer";
import BotonWhat from "./BotonWhat";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <About />
      <Footer />
      <BotonWhat />
    </div>
  );
};

export default Home;
