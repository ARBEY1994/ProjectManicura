import React, { useState } from "react";
import logo from "../Fotos/LogoPag.png";
import "../Styles/Navbar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white">
      <div class="container-fluid">
        <a className="navbar-brand" href="Login">
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
        class={`collapse  navbar-collapse${showNav ? "show" : ""}`}
        id="navbarCollapse"
      >
        <ul class="navbar-nav respo">
          <a
            class="nav-link active letra text-muted"
            aria-current="page"
            href="#segundaFoto"
          >
            Semipermanentes
          </a>

          <a
            class="nav-link active letra text-muted"
            aria-current="page"
            href="#tercerFoto"
          >
            Tradicionales
          </a>

          <a
            class="nav-link active letra text-muted"
            aria-current="page"
            href="#primerFoto"
          >
            Acrilicas
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
