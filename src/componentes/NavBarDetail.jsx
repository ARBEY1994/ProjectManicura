import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../Fotos/LogoPag.png";

const NavBarT = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white">
      <div class="container-fluid">
        <a class="navbar-brand" href="Login">
          <img src={logo} alt="no found" />
        </a>
        <ButtonGroup aria-label="Basic example">
          <Link to="/">
            <Button variant="secondary">Inicio</Button>
          </Link>
        </ButtonGroup>
      </div>
    </nav>
  );
};

export default NavBarT;
