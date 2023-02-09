import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../Styles/carousel.css";

const Footer = () => {
  return (
    <footer class="container">
      <p class="float-end">
        <a href="#myCarousel" className="abc">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Volver arriba</Button>
          </ButtonGroup>
        </a>
      </p>
      <p>2023 Copyright Heiner_Arevalo©, Inc </p>
    </footer>
  );
};

export default Footer;
