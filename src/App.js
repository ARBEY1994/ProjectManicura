import "./App.css";
import Home from "./componentes/home";
import Fotografias from "./componentes/Fotografias";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fotografias" element={<Fotografias />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
