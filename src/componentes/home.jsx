import React from "react";

import NavBar from "./navBar";
import Carousel from "./Carrusel";

import About from "./About";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
