import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import imagen from "../Fotos/imagen1.png";
import imagen2 from "../Fotos/imagen2.png";
import imagen3 from "../Fotos/imagen3.png";
import logo1 from "../Fotos/logo1.png";
import logo2 from "../Fotos/logo2.png";
import logo3 from "../Fotos/logo3.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div class="container marketing">
      <div class="row">
        <div class="col-lg-4" data-aos="zoom-in-up">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
            <image href={logo2} />
          </svg>
          <h2 class="fw-normal">Tradicionales</h2>
          <p>
            Descubre las bellezas de la manicura tradicional. Haz clic en el
            botón para ver detalles y galería de fotos
          </p>
          <p>
            <a class="btn btn-secondary" href="#tercerFoto">
              Ver Detalles &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4" data-aos="zoom-in-up">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
            <image href={logo3} />
          </svg>
          <h2 class="fw-normal">Acrilicas</h2>
          <p>
            Quieres ver cómo puedes llevar un estilo de uñas acrilicas único y
            personalizado? ¡Presiona el siguiente boton y déjate inspirar por
            nuestras creaciones! ¡Contactame para darle vida a tus sueños de
            uñas perfectas!
          </p>
          <p>
            <a class="btn btn-secondary" href="#primerFoto">
              Ver Detalles &raquo;
            </a>
          </p>
        </div>
        <div class="col-lg-4" data-aos="zoom-in-up">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">
              140x140
            </text>
            <image href={logo1} />
          </svg>
          <h2 class="fw-normal">Semipermanentes</h2>
          <p>
            Transforma tus uñas en una obra de arte con nuestras uñas
            semipermanentes. Duraderas, brillantes y sin necesidad de retoques,
          </p>
          <p>
            <a class="btn btn-secondary" href="#segundaFoto">
              Ver Detalles &raquo;
            </a>
          </p>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette" id="primerFoto">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            Transforma tus uñas{" "}
            <span class="text-muted">con brillo acrílico</span>
          </h2>
          <p class="lead" data-aos="fade-left">
            Buscas un cambio drástico en tu apariencia? ¡Mira nada más que
            nuestras uñas acrílicas! Con un acabado brillante y duradero, te
            garantizamos un look elegante y sofisticado. ¿Te animas a
            transformar tus uñas con estilo y elegancia? ¡contactame y prueba
            nuestras uñas acrílicas hoy mismo!
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
            <image href={imagen2} />
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette" id="segundaFoto">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            Transforma tus uñas con los{" "}
            <span class="text-muted">colores brillantes de la moda</span>
          </h2>
          <p class="lead" data-aos="zoom-in">
            Las uñas semipermanentes son la solución perfecta para aquellas
            personas que desean tener un aspecto hermoso y duradero en sus uñas.
            Con una amplia gama de colores brillantes y tendencias de moda,
            puedes transformar tus uñas en un accesorio de moda único. Además,
            estas uñas son más duraderas que las uñas tradicionales y no
            requieren repintado constante.¡Transforma tus uñas hoy mismo con
            esta opción de belleza moderna y práctica
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
            <image href={imagen3} />
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette" id="tercerFoto">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            Uñas clásicas con un{" "}
            <span class="text-muted">toque de elegancia </span>
          </h2>
          <p class="lead" data-aos="fade-left">
            Las uñas tradicionales son una opción elegante y versátil para
            cualquier ocasión. Con su forma rectangular y su acabado liso, estas
            uñas son perfectas para llevar un estilo clásico y sofisticado en
            cualquier momento. Además, puedes personalizarlas con diferentes
            colores y diseños para darles un toque único y reflejar tu
            personalidad. Ya sea para un evento formal o un día normal, las uñas
            tradicionales siempre serán una elección acertada
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
            <image href={imagen} />
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  );
};

export default About;
