import React, { useState } from "react";
import logo from "../Fotos/LogoPag.png";
import "../Styles/Login.css";
import firebaseApp from "../Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Auth = getAuth(firebaseApp);

const Login = () => {
  const [registro, setRegistro] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const correo = e.target.floatingInput.value;
    const contraseña = e.target.floatingPassword.value;

    if (registro) {
      await createUserWithEmailAndPassword(Auth, correo, contraseña);
    } else {
      await signInWithEmailAndPassword(Auth, correo, contraseña);
    }
  };

  return (
    <div className="">
      <main className="form-signin w-100 m-auto ">
        <form onSubmit={handleSubmit}>
          <img className="logoLogin" src={logo} alt="no fount" />
          <h1 className="h3 mb-3 fw-normal font-weight-bold text-dark">
            {registro ? "Registrate" : "Inicia sesion"}
          </h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Correo electronico</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              id="floatingPassword"
            />
            <label for="floatingInput">Contraseña</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            {registro ? "Registrate" : "Inicia sesion"}
          </button>

          <div className="form-group">
            <button
              className="btn btn-secondary mt-4 form-control"
              onClick={() => setRegistro(!registro)}
            >
              {registro
                ? "ya tienes una cuenta? inicia sesion"
                : "no tienes cuenta? registrate"}
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
          </div>
        </form>
        <div className="ola w1">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="olaSvg"
          >
            <path
              d="M1.41,124.84 C131.77,-57.70 356.94,82.41 502.54,116.95 L500.00,150.00 L-1.97,153.47 Z"
              className="olaPath"
            ></path>
          </svg>
        </div>
        <div className="ola w2">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="olaSvg2"
          >
            <path
              d="M1.41,124.84 C131.77,-57.70 356.94,82.41 502.54,116.95 L500.00,150.00 L-1.97,153.47 Z"
              className="olaPath"
            ></path>
          </svg>
        </div>
        <div className="bgO">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="olaSvg3"
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              className="olaPath"
            ></path>
          </svg>
        </div>
      </main>
    </div>
  );
};
export default Login;
