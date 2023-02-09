import React from "react";
import logo from "../Fotos/A.png";
import BotonWhat from "./BotonWhat";
import Footer from "./footer";
import NavBarT from "./NavBarT";
import imagen1 from "../Fotos/imagen1.png";
import imagen2 from "../Fotos/imagen2.jpg";
import imagen3 from "../Fotos/imagen3.png";
import imagen4 from "../Fotos/imagen4.jpg";
import imagen5 from "../Fotos/imagen5.jpg";
import imagen6 from "../Fotos/imagen6.png";
import imagen7 from "../Fotos/imagen7.png";
import imagen8 from "../Fotos/imagen8.png";
import imagen9 from "../Fotos/imagen9.png";
import imagen10 from "../Fotos/imagen10.png";
import imagen11 from "../Fotos/imagen11.png";
import "../Styles/fotos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Fotografia = () => {
  const headerRef = React.useRef(null);
  const location = useLocation();

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);
  return (
    <div ref={headerRef}>
      <NavBarT />

      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Mis trabajos...</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675638588/fotos%20u%C3%B1as/20230203_110527_sdmjpi.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen1})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675665381/fotos%20u%C3%B1as/IMG-20230106-WA0017_qir9tq.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen2})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675638584/fotos%20u%C3%B1as/IMG-20230108-WA0007_rrcem2.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen3})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">{""}</h2>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675963769/fotos%20u%C3%B1as/imagen4_ad0ral.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen4})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675963770/fotos%20u%C3%B1as/imagen5_ghzsgh.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen5})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963768/fotos%20u%C3%B1as/imagen6_cuk8mu.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen6})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">{""}</h2>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963768/fotos%20u%C3%B1as/imagen7_n1stbp.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen7})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963768/fotos%20u%C3%B1as/imagen8_ic0kh8.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen8})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963768/fotos%20u%C3%B1as/imagen9_ajxwij.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen9})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
        <h2 class="pb-2 border-bottom">{""}</h2>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963769/fotos%20u%C3%B1as/imagen10_rc63ot.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen10})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963769/fotos%20u%C3%B1as/imagen11_qjnnko.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen11})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>

          <div class="col">
            <a
              href="https://res.cloudinary.com/dqej8esjf/image/upload/v1675963768/fotos%20u%C3%B1as/imagen8_ic0kh8.jpg"
              target="_blank"
              rel="noreferrer"
              className="linkFoto"
            >
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${imagen8})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ver...</h3>
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
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <BotonWhat />
    </div>
  );
};

export default Fotografia;
