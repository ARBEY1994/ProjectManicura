import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/carousel.css";
import { useEffect } from "react";
import logo from "../FotosPortada/descarga.png";
import logo2 from "../FotosPortada/descarga2.png";
import logo3 from "../FotosPortada/descarga3.png";

const Carousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="" />
            <image className="opacidad" href={logo} />
          </svg>
          <div class="container">
            <div class="carousel-caption text-start ">
              <div className="">
                <h1 className="h1Carrusel  ">
                  <strong>Uñas acrilicas</strong>{" "}
                </h1>

                <p data-aos="fade-right ">
                  Transforma tus manos con las uñas acrílicas más radiantes y
                  duraderas de la ciudad! Con nuestro servicio de uñas
                  acrílicas, te aseguramos una apariencia espectacular y una
                  durabilidad única. Contactame y descubre la diferencia, Te
                  esperamos
                </p>
              </div>

              <p>
                <a
                  class="btn btn-lg btn-primary"
                  href="https://wa.me/573133299109?text=hola,Anny,¿tienes agenda para hoy?"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contactame
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
            <image className="opacidad" href={logo2} />
          </svg>
          <div class="container">
            <div class="carousel-caption">
              <h1 className="h1Carrusel">
                {" "}
                <strong>Uñas semipermanentes</strong>{" "}
              </h1>
              <p>
                te quedarían genial unas uñas Semipermanentes Me encantaría
                verte con ese toque adicional de belleza en tus manos. Seguro
                que sería un éxito total, tendrás unas uñas perfectas en todo
                momento sin tener que preocuparte por su desgaste o rotura
              </p>
              <p>
                <a
                  class="btn btn-lg btn-primary"
                  href="https://wa.me/573133299109?text=hola,Anny,¿tienes agenda para hoy?"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contactame
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
            <image className="opacidad" href={logo3} />
          </svg>
          <div class="container">
            <div class="carousel-caption text-end">
              <h1 className="h1Carrusel">
                <strong>Uñas tradicionales</strong>{" "}
              </h1>
              <p>
                tú mereces un trato especial! con nuestro servicio de uñas
                tradicionales. Con una amplia gama de colores y diseños, te
                ofrecemos una solución profesional y personalizada para
                conseguir un look perfecto en tus uñas, Agenda tu cita hoy
              </p>
              <p>
                <a
                  class="btn btn-lg btn-primary"
                  href="https://wa.me/573133299109?text=hola,Anny,¿tienes agenda para hoy?"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contactame
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
