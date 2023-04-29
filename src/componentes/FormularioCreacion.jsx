import React, { useRef, useState } from "react";
import { uploadFile } from "../Firebase";
import { useNavigate } from "react-router-dom";
import AppFirebase from "../Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import NavBarDetail from "./NavBarDetail";
import "../Styles/formularioCreacion.css";
import logo from "../Fotos/LogoPag.png";
import { Button } from "react-bootstrap";

const Formulario = () => {
  const db = getFirestore(AppFirebase);
  const inputArchivo = useRef(null);

  //-----subir a storage y db------/
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      console.log(result);
      const objResult = { fotografia: result };
      await addDoc(collection(db, "fotos"), {
        result,
      });
      console.log("aquiiiiiii", objResult);
      alert("imagen subida correctamente");
    } catch (error) {
      console.log(error);
    }
    inputArchivo.current.value = null;
    navigate("/Fotografias");
  };

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  function mostrarImagen(e) {
    const archivo = e.target.files[0];
    setFile(archivo);

    const urlImagen = URL.createObjectURL(archivo);
    setImagenSeleccionada(urlImagen);
  }

  return (
    <div className="createdrow">
      <NavBarDetail />

      <div className="container d-flex justify-content-center flex-wrap align-items-center ">
        <div className=" row  ">
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <img
              class="img-fluid imagenlogo"
              src={logo}
              alt=""
              height="80%"
              width="80%"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form
              class="col-lg-6  col-md-6  col-sm-12 fotocarga"
              onSubmit={handleSubmit}
            >
              <br />

              <div class="nav-link active letraB text-muted">
                Tu fotografia:
              </div>
              <div className="custom-file">
                <input
                  class="custom-file-input"
                  name="fotografia"
                  id="image-preview"
                  type="file"
                  onChange={mostrarImagen}
                  ref={inputArchivo}
                />
              </div>

              <label htmlFor="image-preview">
                <br />
                <Button
                  aria-label="Basic example"
                  id="submit"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  class="btn btn-lg btn-primary"
                >
                  Subir
                </Button>
              </label>
              {imagenSeleccionada && (
                <img
                  src={imagenSeleccionada}
                  alt="Imagen seleccionada"
                  width="90%"
                  height="20%"
                  className="img-fluid"
                />
              )}
            </form>
          </div>
        </div>
      </div>
      <h2 class="pb-2 border-bottom copy2">{""}</h2>
      <div>
        <footer class="container-fluid  copy col-md-6 text-sm-center">
          <p>2023 Copyright© Heiner_Arevalo </p>
        </footer>
        <div className="HondaHome2 col-md-6">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="HondaSvg2"
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" // https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections   link de pagina para crear olas.S
              className="HondaPath2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
