import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import logo from "../Fotos/AnnyLogo2.jpg";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="Login">
          <img src={logo} alt="no found" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class={`collapse navbar-collapse${showNav ? "show" : ""}`}
        id="navbarCollapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#segundaFoto">
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Semipermanentes</Button>
              </ButtonGroup>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#tercerFoto">
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Tradicionales</Button>
              </ButtonGroup>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#primerFoto">
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Acrilicas</Button>
              </ButtonGroup>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
