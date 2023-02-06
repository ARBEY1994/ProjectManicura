import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar";
import Carousel from "./Carrusel";
import "../carousel/carousel.css";
import "../carousel/carousel.rtl.css";
import About from "./About";
import Footer from "./footer";
import Placeholder from "react-bootstrap/Placeholder";

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
