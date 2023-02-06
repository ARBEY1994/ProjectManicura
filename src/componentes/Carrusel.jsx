import React from "react";
import "../carousel/carousel.css";
import "../carousel/carousel.rtl.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
        <div class="carousel-item active">
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
          </svg>
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Uñas acrilicas</h1>
              <p data-aos="fade-right">
                Transforma tus manos con las uñas acrílicas más radiantes y
                duraderas de la ciudad! Con nuestro servicio de uñas acrílicas,
                te aseguramos una apariencia espectacular y una durabilidad
                única. ¡Contactame y descubre la diferencia! ¡Te esperamos!
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
          </svg>
          <div class="container">
            <div class="carousel-caption">
              <h1>Uñas semipermanentes</h1>
              <p>
                Transforma tus uñas en obras de arte con nuestro servicio de
                uñas semipermanentes. Con una duración prolongada y una amplia
                gama de colores y diseños, tendrás unas uñas perfectas en todo
                momento sin tener que preocuparte por su desgaste o rotura.
                ¡Agenda tu cita hoy mismo y déjate sorprender por la belleza y
                calidad de nuestras uñas semipermanentes!
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
          </svg>
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Uñas tradicionales</h1>
              <p>
                Transforma tus uñas en una obra de arte con nuestro servicio de
                uñas tradicionales. Con una amplia gama de colores y diseños, te
                ofrecemos una solución profesional y personalizada para
                conseguir un look perfecto en tus uñas. ¡Agenda tu cita hoy
                mismo y déjame sorprenderte con mi habilidad y experiencia en
                uñas tradicionales! ¡Lúcete con manos impresionantes!
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">
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
