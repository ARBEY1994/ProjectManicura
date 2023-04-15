import "./App.css";
import Home from "./componentes/home";
import Fotografias from "./componentes/Fotografias";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import appFirebase from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import logo from "./Fotos/LogoPag.png";

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUsuario(userFirebase);
    } else {
      setUsuario(null);
    }
  });

  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCargando(false);
    }, 1000); // simulando una carga de 2 segundos

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      {!cargando ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fotografias" element={<Fotografias />} />
            <Route
              path="/Login"
              element={
                usuario ? (
                  <Home correoUsuario={usuario.floatingInput} />
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="container">
          <img className=" img-fluid mx-auto" src={logo} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
