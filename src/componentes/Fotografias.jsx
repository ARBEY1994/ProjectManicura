import React, { useState } from "react";
import logo from "../Fotos/A.png";
import BotonWhat from "./BotonWhat";
import Footer from "./footer";
import NavBarDetail from "./NavBarDetail";
import "../Styles/fotos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import AppFirebase from "../Firebase";
import { getAuth } from "firebase/auth";

const Auth = getAuth(AppFirebase);

const Fotografia = () => {
  const db = getFirestore(AppFirebase);
  const [getFotos, setGetFotos] = useState([]);

  //funcion para hacer scroll al entrar en la ruta y subir a la navbar
  const headerRef = React.useRef(null);
  const location = useLocation();
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);
  //---------------------------//

  // Obtener las fotos al montar el componente
  useEffect(() => {
    const getList = async () => {
      try {
        const collectionRef = collection(db, "fotos");
        onSnapshot(collectionRef, (snapshot) => {
          const docs = snapshot.docs
            .filter((doc) => doc.exists && doc.data() && !doc.data().error) // Filtrar documentos sin error 403
            .map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
          setGetFotos(docs);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, [db]);

  //--------funcion para hacer un DELETE a firebase---//

  const deleteFoto = async (id) => {
    await deleteDoc(doc(db, "fotos", id));
  };
  // solo admin puede borrar fotos-----//
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
  }, [db]);
  return (
    <div ref={headerRef}>
      <NavBarDetail />

      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom text-muted ">Mis trabajos...</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {getFotos?.map((e) => {
            return (
              <div>
                <div class="col">
                  <a
                    href={e.result}
                    target="_blank"
                    rel="noreferrer"
                    className="linkFoto"
                  >
                    <div
                      class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                      style={{
                        backgroundImage: `url(${e.result})`,
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                          Ver...
                        </h3>
                        <ul class="d-flex list-unstyled mt-auto">
                          <li class="me-auto">
                            <img
                              src={logo}
                              alt="Bootstrap"
                              width="32"
                              height="32"
                              class="rounded-circle border border-white"
                            />
                          </li>
                          <li class="d-flex align-items-center me-3">
                            <svg class="bi me-2" width="1em" height="1em">
                              <use href="#geo-fill" />
                            </svg>
                            <small>Puerto Asis</small>
                          </li>
                          <li class="d-flex align-items-center">
                            <svg class="bi me-2" width="1em" height="1em">
                              <use href="#calendar3" />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                  <br />
                  {isAdmin && (
                    <button
                      onClick={() => deleteFoto(e.id)}
                      type="button"
                      class="btn btn-outline-danger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>{" "}
                      Borrar
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <h2 class="pb-2 border-bottom">{""}</h2>
      </div>

      <Footer />
      <BotonWhat />
    </div>
  );
};

export default Fotografia;
