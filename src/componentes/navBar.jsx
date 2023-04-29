import React, { useEffect, useState } from "react";
import logo from "../Fotos/LogoPag.png";
import "../Styles/Navbar.css";
import AppFirebase from "../Firebase";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Auth = getAuth(AppFirebase);
const db = getFirestore(AppFirebase);

const NavBar = ({ correoUsuario }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  // estado para mostrar la ruta de creacion a admin

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "usuarios", user.uid));
        const userRole = userDoc.data().role;
        setIsAdmin(userRole === "admin");
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

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
            className="nav-link active letraB text-muted"
            aria-current="page"
            href="/FormularioCreacion"
          >
            Bienvenid@,{correoUsuario}
          </a>
          <span
            class="nav-link active letraB text-muted"
            aria-current="page"
            onClick={() => signOut(Auth)}
          >
            Cerrar cesion
          </span>
          {isAdmin && (
            <Link
              class="nav-link active letraB text-muted"
              aria-current="page"
              to="/FormularioCreacion"
            >
              Nueva Foto
            </Link>
          )}
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
