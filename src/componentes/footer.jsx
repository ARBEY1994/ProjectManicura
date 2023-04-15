import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="container-fluid">
        <p class="float-end">
          <a href="#myCarousel" className="abc">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Volver arriba</Button>
            </ButtonGroup>
          </a>
        </p>
        <p>2023 Copyright© Heiner_Arevalo </p>
      </footer>
      <div className="HondaHome">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="HondaSvg"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" // https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections   link de pagina para crear olas.S
            className="HondaPath"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
