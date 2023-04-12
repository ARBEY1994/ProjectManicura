import "./App.css";
import Home from "./componentes/home";
import Fotografias from "./componentes/Fotografias";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import appFirebase from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
